"""Build local, source-linked study pages and HyperFrames decks. Python 3 stdlib.
Markdown rendering uses the bundled markdown-it package via render-notes.cjs.
All editorial slide content is in slides.py; graphs in widgets.js.
"""
from pathlib import Path
import html, json, os, re, shutil
from urllib.parse import quote
from slides import DECKS

BUILD=Path(__file__).resolve().parent
PACK=BUILD.parent
REPO=PACK.parents[1]
EXISTING=REPO/'Personnel Economics (Dur)/Lectures/Tournaments - in-depth lecture'
ROOTS={'Public':REPO/'Public Economics (Delfgaauw)/Week 6 - Optimal taxation/Lectures/Upcoming block companion',
       'Personnel':REPO/'Personnel Economics (Dur)/Lectures/Upcoming block companion'}
def relative(target, origin):
    return quote(os.path.relpath(target,origin).replace('\\','/'),safe='/#:.')
def script(path):
    return path.read_text(encoding='utf-8').replace('</script','<\\/script')
def source_page(label):
    m=re.search(r'PDF (?:pp?\. )?(\d+)',label)
    return int(m.group(1)) if m else None
def source_file(label,deck):
    if label.startswith('Lecture 6'):
        return REPO/'Public Economics (Delfgaauw)/Week 6 - Optimal taxation/Lectures/Lecture 6 - Optimal taxation.pdf'
    if label.startswith('Topic 8'):
        return REPO/'Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf'
    if label.startswith('F24'):return REPO/'Past exams/Finals/2024-10 Final (with solutions).pdf'
    if label.startswith('F25'):return REPO/'Past exams/Finals/2025-10 Final (with solutions).pdf'
    if label.startswith('R25'):return REPO/'Past exams/Resits/2025-07 Resit (with solutions).pdf'
    return REPO/deck['book']

for deck in DECKS:
    out=ROOTS[deck['subject']]/deck['key']; comp=out/'composition'; comp.mkdir(parents=True,exist_ok=True)
    vendor=out/'vendor'; vendor.mkdir(exist_ok=True)
    for name in ['hyperframes-player.global.js','hyperframes-slideshow.global.js']:
        shutil.copyfile(EXISTING/'vendor'/name,vendor/name)
    shutil.copyfile(EXISTING/'composition/vendor/gsap.min.js',vendor/'gsap.min.js')
    shutil.copytree(EXISTING/'composition/vendor/katex',vendor/'katex',dirs_exist_ok=True)
    shutil.copyfile(BUILD/'node_modules/katex/dist/katex.min.js',vendor/'katex/katex.min.js')
    shutil.copyfile(BUILD/'node_modules/katex/LICENSE',vendor/'katex/LICENSE')
    shutil.copytree(vendor,comp/'vendor',dirs_exist_ok=True)
    scenes=[]; refs=[]; n=len(deck['slides'])
    for i,s in enumerate(deck['slides']):
        sid='root' if i==0 else deck['key']+'-'+str(i+1); start=i*10
        ref={'sceneId':sid,'notes':s['title']+' Full explanation and sources: '+deck['module']+'.md.'}
        if s['steps']:ref['fragments']=[start+.8]+[start+2+j*1.5 for j in range(len(s['steps']))]
        if i==0:ref['fragments']=[.8,2,4]
        refs.append(ref)
        prose=''.join(('<p data-reveal="'+str(2+j*2)+'">' if i==0 else '<p>')+html.escape(p)+'</p>' for j,p in enumerate(s['text']))
        if s['graph']:
            right=f'<div data-widget="{s["graph"]}"><svg class="graph" viewBox="0 0 850 455" role="img" aria-label="Interactive graph: {s["graph"]}"></svg><p class="legend"></p><div class="controls"></div><p class="result" aria-live="polite"></p></div>'
        elif s['steps']:
            right='<div class="algebra">'+''.join(f'<div class="step" data-reveal="{start+2+j*1.5}"><span data-math="{html.escape(eq,quote=True)}"></span></div>' for j,eq in enumerate(s['steps']))+'</div>'
        else:right=''
        label=s['source'] or deck['source']; page=source_page(label)
        link=relative(source_file(label,deck),comp)+(f'#page={page}' if page else '')
        note=relative(PACK/(deck['module']+'.html'),comp)
        # Short visible source labels keep every footnote readable; full citation in title/notes.
        short=re.sub(r'“[^”]+”','',label).replace('  ',' ')
        short=short.split(';')[0]
        if len(short)>70:short=deck['source']
        scenes.append(f'''<div class="scene" id="{sid}" data-composition-id="{sid}" data-start="{start}" data-duration="10" data-width="1920" data-height="1080" data-label="{html.escape(s['title'],quote=True)}">
<section id="{sid}-content" class="slide clip" data-start="{start}" data-duration="10" data-track-index="{i+1}">
<p class="eyebrow">{html.escape(deck['title'])} · {i+1}/{n}</p><h1>{html.escape(s['title'])}</h1>
<div class="content {'plain' if not right else ''} {'has-graph' if s['graph'] else ''}"><div class="prose">{prose}</div>{right}</div>
<footer class="source"><a href="#" data-source="{link}" title="{html.escape(label,quote=True)}" target="_blank">{html.escape(short)}</a><a href="#" data-source="{note}" target="_blank">Full notes + practice</a></footer></section><div class="progress" data-layout-ignore></div></div>''')
    manifest=json.dumps({'slides':refs,'slideSequences':[]},ensure_ascii=False,indent=2)
    css=(BUILD/'deck.css').read_text(encoding='utf-8')
    css+='\n.has-graph .prose p{font-size:44px}.has-graph .graph{height:300px}.has-graph .legend{font-size:40px;line-height:1.15;margin:10px 0}.has-graph .result{font-size:40px;line-height:1.15}.has-graph .controls{gap:10px 25px;margin-top:10px}.algebra{min-width:0}.step{padding:16px 20px;margin-bottom:20px;font-size:44px}.source{bottom:75px;right:110px}.slide{padding-top:45px;padding-bottom:160px}.eyebrow{margin-bottom:12px}h1{margin-bottom:24px}'
    composition=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><title>{deck['title']}</title><link rel="stylesheet" href="vendor/katex/katex.min.css"><style>{css}</style><script src="vendor/gsap.min.js"></script><script src="vendor/katex/katex.min.js"></script></head><body><script type="application/hyperframes-slideshow+json">{manifest}</script>{''.join(scenes)}<script>{script(BUILD/'runtime.js')}</script><script>{script(BUILD/'widgets.js')}</script></body></html>'''
    (comp/'index.html').write_text(composition,encoding='utf-8')
    wrapper=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>{deck['title']} — study lecture</title><script src="vendor/hyperframes-player.global.js"></script><script src="vendor/hyperframes-slideshow.global.js"></script><style>*{{box-sizing:border-box}}html,body{{margin:0;width:100%;height:100%;overflow:hidden;background:#f7f3e9}}</style></head><body><hyperframes-slideshow tabindex="0" notes-storage-key="upcoming-{deck['key']}" style="display:block;position:relative;width:100vw;height:100vh"><hyperframes-player interactive style="position:absolute;inset:0" src="composition/index.html"></hyperframes-player><script type="application/hyperframes-slideshow+json">{manifest}</script></hyperframes-slideshow></body></html>'''
    (out/'index.html').write_text(wrapper,encoding='utf-8')
    # Embed local assets and composition into the supported direct-open offline file.
    katex_css=(vendor/'katex/katex.min.css').read_text(encoding='utf-8')
    import base64
    def font(m):
        p=vendor/'katex'/m.group(1)
        return 'url(data:font/woff2;base64,'+base64.b64encode(p.read_bytes()).decode()+')'
    katex_css=re.sub(r'url\((fonts/[^)]+)\)',font,katex_css)
    inline=composition.replace('<link rel="stylesheet" href="vendor/katex/katex.min.css">','<style>'+katex_css+'</style>')
    for name,src in [('gsap.min.js','vendor/gsap.min.js'),('katex/katex.min.js','vendor/katex/katex.min.js')]:
        inline=inline.replace(f'<script src="{src}"></script>','<script>'+script(vendor/name)+'</script>')
    # Source links resolve from the offline wrapper directory, with decoded paths.
    from urllib.parse import unquote
    inline=composition.replace('<link rel="stylesheet" href="vendor/katex/katex.min.css">','<style>'+katex_css+'</style>')
    for name,src in [('gsap.min.js','vendor/gsap.min.js'),('katex/katex.min.js','vendor/katex/katex.min.js')]:
        inline=inline.replace(f'<script src="{src}"></script>','<script>'+script(vendor/name)+'</script>')
    inline=re.sub(r'data-source="([^"]+)"',lambda m:'data-source="'+relative((comp/unquote(m.group(1).split('#')[0])).resolve(),out)+('#'+m.group(1).split('#',1)[1] if '#' in m.group(1) else '')+'"',inline)
    # Player uses srcdoc so the offline file has no iframe fetch or script request.
    offline=wrapper.replace('<script src="vendor/hyperframes-player.global.js"></script>','<script>'+script(vendor/'hyperframes-player.global.js')+'</script>').replace('<script src="vendor/hyperframes-slideshow.global.js"></script>','<script>'+script(vendor/'hyperframes-slideshow.global.js')+'</script>')
    offline=offline.replace('src="composition/index.html"','srcdoc="'+html.escape(inline,quote=True)+'"')
    (out/'OPEN OFFLINE.html').write_text(offline,encoding='utf-8')
    (out/'package.json').write_text(json.dumps({'private':True,'scripts':{'dev':'npx hyperframes present ./composition','check':'npx hyperframes check ./composition'}},indent=2),encoding='utf-8')
    (out/'BRIEF.md').write_text(f'# {deck["title"]}\n\nworkflow: slideshow\n\nSilent self-paced landscape companion to {deck["module"]}.md. User authorised end-to-end build without storyboard review. Theory and original practice remain in the main module. All graph numbers are constructed teaching examples. Offline wrapper embeds dependencies; root index uses local assets over HTTP.\n',encoding='utf-8')
    print(deck['key'],n,'slides',out)

links=''.join(f'<li><a href="{relative(ROOTS[d["subject"]]/d["key"] / "index.html",PACK)}">{d["title"]} — {len(d["slides"])} slides</a> · <a href="{relative(ROOTS[d["subject"]]/d["key"] / "OPEN OFFLINE.html",PACK)}">offline file</a></li>' for d in DECKS)
(PACK/'lectures.html').write_text(f'<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Upcoming block browser lectures</title><style>body{{font:20px/1.6 system-ui,sans-serif;max-width:1000px;margin:50px auto;background:#f7f3e9;color:#172d32}}a{{color:#076760}}li{{margin:18px 0}}</style><h1>Five browser lectures</h1><p>Read the <a href="index.html">study pack</a> for full theory and worked solutions. Arrow keys and Next step through algebra reveals. Native sliders accept arrow keys without changing slides; two graphs also allow dragging. Click Present or press P for the audience tab.</p><ul>{links}</ul><p>For direct opening from disk, use each offline file. For source-linked HTTP previews, start the repository server described in README.md.</p></html>',encoding='utf-8')
