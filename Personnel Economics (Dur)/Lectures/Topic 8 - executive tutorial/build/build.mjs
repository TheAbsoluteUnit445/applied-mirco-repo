// Builds the HyperFrames slideshow: composition/index.html (scenes + island + runtime) and the
// direct-open wrapper ../index.html (player + slideshow chrome + duplicated island).
// Usage: cd build && npm install && npm run build
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import katex from 'katex';
import { SLIDES } from './slides.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DECK = path.resolve(HERE, '..');
const COMP = path.join(DECK, 'composition');
const NM = path.join(HERE, 'node_modules');
const DUR = 10;           // seconds per slide on the seek timeline
const FRAG0 = 1, FRAGSTEP = 0.5;

// ---------- copy vendor assets ----------
const cp = (from, to) => { fs.mkdirSync(path.dirname(to), { recursive: true }); fs.copyFileSync(from, to); };
cp(path.join(NM, 'gsap/dist/gsap.min.js'), path.join(COMP, 'vendor/gsap.min.js'));
cp(path.join(NM, 'katex/dist/katex.min.css'), path.join(COMP, 'vendor/katex/katex.min.css'));
for (const f of fs.readdirSync(path.join(NM, 'katex/dist/fonts')).filter(f => f.endsWith('.woff2')))
  cp(path.join(NM, 'katex/dist/fonts', f), path.join(COMP, 'vendor/katex/fonts', f));
cp(path.join(NM, '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'), path.join(COMP, 'fonts/inter-latin.woff2'));
cp(path.join(NM, '@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2'), path.join(COMP, 'fonts/inter-latin-ext.woff2'));
cp(path.join(NM, '@hyperframes/player/dist/hyperframes-player.global.js'), path.join(DECK, 'vendor/hyperframes-player.global.js'));
cp(path.join(NM, '@hyperframes/player/dist/slideshow/hyperframes-slideshow.global.js'), path.join(DECK, 'vendor/hyperframes-slideshow.global.js'));
// KaTeX css: keep woff2 only
const kcss = path.join(COMP, 'vendor/katex/katex.min.css');
fs.writeFileSync(kcss, fs.readFileSync(kcss, 'utf8').replace(/,url\(fonts\/[^)]+\.(woff|ttf)\) format\("(woff|truetype)"\)/g, ''));

// ---------- math ----------
let mathErrors = [];
function tex(src, display) {
  try { return katex.renderToString(src, { displayMode: display, throwOnError: true, output: 'html' }); }
  catch (e) { mathErrors.push(src + ' :: ' + e.message.split('\n')[0]); return `<span class="tex-err">${src}</span>`; }
}
const renderMath = (html) => html
  .replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => tex(m, true))
  .replace(/\$([^$]+?)\$/g, (_, m) => tex(m, false));

// ---------- scenes ----------
const N = SLIDES.length;
const island = { slides: [], slideSequences: [] };
const fragTable = [];
const sceneTable = [];
const sceneHtml = SLIDES.map((s, i) => {
  const start = i * DUR;
  let k = 0; const times = [];
  let body = renderMath(s.html).replace(/class="([^"]*\bfrag\b[^"]*)"/g, (m, cls) => {
    const t = +(start + FRAG0 + k * FRAGSTEP).toFixed(2); times.push(t);
    const id = `f-${s.id}-${k++}`; fragTable.push({ id, t, scene: s.id });
    return `class="${cls}" id="${id}"`;
  });
  sceneTable.push({ id: s.id, start, end: start + DUR });
  const ref = { sceneId: s.id, notes: s.notes || s.title || s.label };
  if (times.length) ref.fragments = times;
  island.slides.push(ref);
  const eyebrow = s.eyebrow ? `<div class="eyebrow" data-anim><span>${s.eyebrow}</span>${s.tags ? renderMath(s.tags) : ''}</div>` : '';
  const title = s.title ? `<h1 class="headline" data-anim>${renderMath(s.title)}</h1>` : '';
  const footer = s.layout === 'title' ? '' : `<div class="footer"><span>Topic 8 · Personnel Economics</span><span>${s.label}</span><span class="fnum">${i + 1} / ${N}</span></div>`;
  return `
<div id="scene-${s.id}" class="scene-frame clip" data-composition-id="${s.id}" data-start="${start}" data-duration="${DUR}" data-track-index="1" data-width="1920" data-height="1080" data-label="${s.label.replace(/"/g, '&quot;')}">
  <div class="slide lay-${s.layout}">
    ${eyebrow}${title}
    <div class="content" data-anim>${body}</div>
    ${footer}
  </div>
</div>`;
}).join('\n');

const TOTAL = N * DUR;
const islandJson = JSON.stringify(island, null, 1);

// ---------- styles ----------
const CSS = fs.readFileSync(path.join(HERE, 'deck.css'), 'utf8');
const WIDGETS = fs.readFileSync(path.join(HERE, 'widgets.js'), 'utf8');

const RUNTIME = `
(function(){
  var SCENES=${JSON.stringify(sceneTable)};
  var FRAGS=${JSON.stringify(fragTable)};
  var TOTAL=${TOTAL};
  var tl=gsap.timeline({paused:true});
  tl.to({p:0},{p:1,duration:TOTAL,ease:'none'});
  window.__timelines=window.__timelines||{};
  SCENES.forEach(function(s,i){ if(i>0){ var t=gsap.timeline({paused:true}); t.to({},{duration:${DUR}}); window.__timelines[s.id]=t; } });
  window.__timelines[SCENES[0].id]=tl;
  var lastActive=null, shown={};
  function update(t){
    var active=null;
    for(var i=0;i<SCENES.length;i++){
      var s=SCENES[i], el=document.getElementById('scene-'+s.id);
      var on = t>=s.start && (t<s.end || (i===SCENES.length-1 && t<=s.end));
      el.style.opacity=on?'1':'0'; el.style.visibility=on?'visible':'hidden'; el.style.pointerEvents=on?'auto':'none';
      if(on) active=s;
    }
    if(active && active.id!==lastActive){
      lastActive=active.id;
      var sc=document.getElementById('scene-'+active.id);
      gsap.fromTo(sc.querySelectorAll('[data-anim]'),{opacity:0,y:22},{opacity:1,y:0,duration:0.45,stagger:0.06,ease:'power2.out',overwrite:true});
      if(window.__onSceneActive) window.__onSceneActive(active.id);
    }
    for(var f=0;f<FRAGS.length;f++){
      var fr=FRAGS[f], fe=document.getElementById(fr.id); if(!fe) continue;
      var vis = active && fr.scene===active.id && t>=fr.t - 1e-6;
      if(vis && !shown[fr.id]){ shown[fr.id]=true; gsap.fromTo(fe,{opacity:0,y:16},{opacity:1,y:0,duration:0.35,ease:'power2.out',overwrite:true}); }
      else if(!vis && shown[fr.id]){ shown[fr.id]=false; gsap.set(fe,{opacity:0,y:0}); }
    }
  }
  window.__hfSetTime=update;
  tl.eventCallback('onUpdate',function(){update(tl.time());});
  update(0);
  function postTimeline(){ try{ parent.postMessage({source:'hf-preview',type:'timeline',durationInFrames:TOTAL*30,scenes:SCENES.map(function(s){return {id:s.id,start:s.start,duration:${DUR}};})},'*'); }catch(e){} }
  if(document.readyState==='complete') setTimeout(postTimeline,300); else window.addEventListener('load',function(){setTimeout(postTimeline,300);});
  // Dev/preview hook: #s=<sceneId> shows a slide with all reveals; #t=<seconds> seeks.
  function fromHash(){
    var h=location.hash.slice(1); if(!h) return;
    var m=/^s=([\\w-]+)/.exec(h), n=/^t=([\\d.]+)/.exec(h);
    if(m){ var s=SCENES.filter(function(x){return x.id===m[1];})[0]; if(s){ tl.seek(s.end-0.05); update(s.end-0.05);} }
    else if(n){ tl.seek(+n[1]); update(+n[1]); }
  }
  window.addEventListener('hashchange',fromHash); fromHash();
  window.__deck={scenes:SCENES,frags:FRAGS,seek:function(t){tl.seek(t);update(t);}};
})();`;
const STANDALONE = fs.readFileSync(path.join(HERE, 'standalone.js'), 'utf8');

const comp = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Topic 8 — Executive Tutorial</title>
<link rel="stylesheet" href="vendor/katex/katex.min.css">
<style>
@font-face{font-family:"InterDeck";src:url("fonts/inter-latin.woff2") format("woff2");font-weight:100 900;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:"InterDeck";src:url("fonts/inter-latin-ext.woff2") format("woff2");font-weight:100 900;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
${CSS}
</style>
<script src="vendor/gsap.min.js"></script>
</head>
<body>
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs><marker id="hfArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#7d8b90"/></marker></defs></svg>
<script type="application/hyperframes-slideshow+json">
${islandJson}
</script>
${sceneHtml}
<script>${RUNTIME}</script>
<script>${WIDGETS}</script>
<script>${STANDALONE}</script>
</body>
</html>
`;
fs.mkdirSync(COMP, { recursive: true });
fs.writeFileSync(path.join(COMP, 'index.html'), comp);

const wrapper = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Topic 8 — Executive Tutorial</title>
<script src="vendor/hyperframes-player.global.js"></script>
<script src="vendor/hyperframes-slideshow.global.js"></script>
<style>*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html,body{width:100%;height:100%;overflow:hidden;background:#eae6dc}</style>
</head>
<body>
<hyperframes-slideshow tabindex="0" notes-storage-key="topic8-executive-tutorial" style="display:block;position:relative;width:100vw;height:100vh">
  <hyperframes-player interactive style="position:absolute;inset:0" src="composition/index.html"></hyperframes-player>
  <!-- DUPLICATED ISLAND: generated by build/build.mjs from the same source as composition/index.html -->
  <script type="application/hyperframes-slideshow+json">
${islandJson}
  </script>
</hyperframes-slideshow>
<script>window.addEventListener('load',function(){var s=document.querySelector('hyperframes-slideshow');if(s)s.focus();});</script>
</body>
</html>
`;
fs.writeFileSync(path.join(DECK, 'index.html'), wrapper);

console.log(JSON.stringify({ slides: N, fragments: fragTable.length, seconds: TOTAL, mathErrors: mathErrors.length }));
if (mathErrors.length) { console.error(mathErrors.join('\n')); process.exitCode = 1; }

// ---------- single self-contained file (opens with a double-click, no server) ----------
{
  const b64 = (p) => fs.readFileSync(p).toString('base64');
  let html = fs.readFileSync(path.join(COMP, 'index.html'), 'utf8');
  let katexCss = fs.readFileSync(path.join(COMP, 'vendor/katex/katex.min.css'), 'utf8')
    .replace(/url\(fonts\/([^)]+\.woff2)\)/g, (_, f) => `url(data:font/woff2;base64,${b64(path.join(COMP, 'vendor/katex/fonts', f))})`);
  html = html.replace('<link rel="stylesheet" href="vendor/katex/katex.min.css">', () => `<style>${katexCss}</style>`);
  html = html.replace(/url\("fonts\/(inter-[^"]+\.woff2)"\)/g, (_, f) => `url("data:font/woff2;base64,${b64(path.join(COMP, 'fonts', f))}")`);
  html = html.replace(/<script src="vendor\/([^"]+)"><\/script>/g, (_, f) => `<script>${fs.readFileSync(path.join(COMP, 'vendor', f), 'utf8').replace(/<\/script/gi, '<\/script')}</script>`);
  html = html.replace('<title>Topic 8 — Executive Tutorial</title>', '<title>Topic 8 — Executive Tutorial</title>\n<meta name="viewport" content="width=device-width, initial-scale=1">');
  const out = path.join(DECK, 'Topic 8 tutorial - OPEN THIS.html');
  fs.writeFileSync(out, html);
  console.log('single file:', path.basename(out), (fs.statSync(out).size / 1e6).toFixed(2) + ' MB');
}