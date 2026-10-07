/* Deterministic seek states. Graph inputs are deliberately user-owned, not animated. */
(()=>{const scenes=[...document.querySelectorAll('.scene')], manifest=JSON.parse(document.querySelector('script[type="application/hyperframes-slideshow+json"]').textContent), total=scenes.length*10;window.__timelines=window.__timelines||{};
function state(t){scenes.forEach((s,i)=>{const active=t>=i*10&&(t<(i+1)*10||(i===scenes.length-1&&t<=total));Object.assign(s.style,{opacity:active?'1':'0',visibility:active?'visible':'hidden',pointerEvents:active?'auto':'none'});s.querySelectorAll('[data-reveal]').forEach(e=>{const on=t>=+e.dataset.reveal;Object.assign(e.style,{opacity:on?'1':'0',visibility:on?'visible':'hidden'});});});}
const root=gsap.timeline({paused:true,onUpdate(){state(root.time())}});root.fromTo('.progress',{scaleX:0},{scaleX:1,duration:total,ease:'none'},0);window.__timelines[scenes[0].dataset.compositionId]=root;
scenes.slice(1).forEach(s=>{let tl=gsap.timeline({paused:true});tl.set(s.querySelector('h1'),{opacity:1},0);window.__timelines[s.dataset.compositionId]=tl;});window.__hfSetTime=state;window.studySeek=t=>{root.seek(t);state(t)};state(.8);
document.querySelectorAll('[data-math]').forEach(e=>katex.render(e.dataset.math,e,{throwOnError:false,displayMode:e.classList.contains('formula')}));
document.querySelectorAll('a[data-source]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();window.open(a.dataset.source,'_blank')}));
if(parent!==window)parent.postMessage({source:'hf-preview',type:'timeline',durationInFrames:total*30,scenes:scenes.map((s,i)=>({id:s.dataset.compositionId,start:i*10,duration:10}))},'*');
window.studyDeck={manifest,scenes:scenes.map((s,i)=>({id:s.dataset.compositionId,start:i*10,end:(i+1)*10})),seek:window.studySeek};
})();
