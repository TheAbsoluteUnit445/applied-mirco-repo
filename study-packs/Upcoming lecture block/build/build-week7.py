"""Six single-composition HyperFrames graph companions for the scrolling walkthrough.
No slideshow or MP4; the written lesson controls the study sequence.
"""
from pathlib import Path
import html, json, shutil

B=Path(__file__).resolve().parent
P=B.parent
R=P.parents[1]
OLD=R/'Public Economics (Delfgaauw)/Week 6 - Optimal taxation/Lectures/Upcoming block companion/politics/vendor'
OUT=P/'week7-graphs'
OUT.mkdir(exist_ok=True)
gsap=(OLD/'gsap.min.js').read_text(encoding='utf8').replace('</script','<\\/script')
player=(OLD/'hyperframes-player.global.js').read_text(encoding='utf8').replace('</script','<\\/script')
widgets=(B/'week7-widgets.js').read_text(encoding='utf8').replace('</script','<\\/script')
titles={'financing':'Who pays for extra spending?', 'investment-mb':'Efficient investment and financing cost',
        'investment-peaks':'Different groups prefer different investment', 'weighted-welfare':'Weight benefits and costs together',
        'beach-election':'Promises, voters and winning', 'cleaning':'Private provision versus efficient cleaning'}
css='''*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#f7f3e9;color:#172d32;font-family:system-ui,sans-serif}#root{width:100%;height:100%;position:relative}.card{position:absolute;inset:0;padding:32px 60px}h1{font-size:48px;line-height:1.1;margin:0 0 18px}.graph{display:block;background:white;border:2px solid #c9d5d0;width:100%;height:550px}.legend{font-size:27px;line-height:1.3;margin:16px 0}.controls{display:flex;gap:28px;align-items:center;flex-wrap:wrap;font-size:27px}.controls label{display:flex;flex-direction:column;flex:1;min-width:350px}.controls input{width:100%;height:30px;accent-color:#076760}button{font:inherit;padding:10px 20px;border:2px solid #076760;background:#e2eee9;color:#172d32;border-radius:8px;cursor:pointer}.result{font-size:29px;line-height:1.35;margin:20px 0}input:focus-visible,button:focus-visible{outline:4px solid #945209;outline-offset:4px}footer{font-size:22px;color:#076760;position:absolute;bottom:15px;left:60px}'''
for key,title in titles.items():
    d=OUT/key/'composition'
    d.mkdir(parents=True,exist_ok=True)
    (d/'vendor').mkdir(exist_ok=True)
    shutil.copyfile(OLD/'gsap.min.js',d/'vendor/gsap.min.js')
    content=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><title>{title}</title><style>{css}</style><script src="vendor/gsap.min.js"></script></head><body>
<div id="root" data-composition-id="root" data-no-timeline data-start="0" data-duration="10" data-width="1600" data-height="1000"><section id="graph-card" class="card"><div class="inner"><h1>{title}</h1><div data-widget="{key}"><svg class="graph" viewBox="0 0 850 455" role="img" aria-label="{title}"></svg><p class="legend"></p><div class="controls"></div><p class="result" aria-live="polite"></p></div></div><footer>Week 7 · Original course values, except the labelled financing example · Full reasoning in the walkthrough</footer></section></div>
<script>{widgets}</script><script>window.__timelines=window.__timelines||{{}};const tl=gsap.timeline({{paused:true}});tl.fromTo('.inner',{{opacity:1}},{{opacity:1,duration:10,ease:'none'}});window.__timelines.root=tl;</script></body></html>'''
    (d/'index.html').write_text(content,encoding='utf8')
    # srcdoc embeds all graph/runtime dependencies for direct-open portability.
    inline=content.replace('<script src="vendor/gsap.min.js"></script>','<script>'+gsap+'</script>')
    wrapper=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{title}</title><script>{player}</script><style>html,body{{margin:0;width:100%;height:100%;overflow:hidden;background:#f7f3e9}}hyperframes-player{{display:block;width:100vw;height:100vh}}</style></head><body><hyperframes-player interactive srcdoc="{html.escape(inline,quote=True)}"></hyperframes-player></body></html>'''
    (OUT/key/'index.html').write_text(wrapper,encoding='utf8')
    (OUT/key/'package.json').write_text(json.dumps({'private':True,'scripts':{'check':'npx hyperframes@0.8.145 check ./composition'}},indent=2),encoding='utf8')
    print(key)
(OUT/'BRIEF.md').write_text('''# Week 7 graph companions

workflow: single-composition interactive graphs

The user requested a new clear lecture walkthrough with HyperFrames interactive graphs,
aligned with the supplied lecture, tutorial, textbook and past papers. The lesson is the
scrolling 02-week7-walkthrough.html. Six independent single-composition HyperFrames players
sit beside its explanations. A slideshow-format question remains optional and unanswered;
no slideshow is authored or assumed approved. No MP4, narration or media generation.

Original lecture/tutorial values are used except the labelled tax-financing example.
Sliders update all curves and outputs together. Each player is self-contained, supports
direct opening, and has reset and native keyboard slider controls. Existing sources,
older decks and progress records are preserved. Build with build/build-week7.py.
''',encoding='utf8')
