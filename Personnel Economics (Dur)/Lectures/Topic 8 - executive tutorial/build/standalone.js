/* Standalone mode: when the composition is opened directly (not inside the HyperFrames player),
   scale the 1920x1080 canvas to the window and add keyboard / button navigation. */
(function () {
  if (window.parent !== window || !window.__deck) return;
  var D = window.__deck, stops = [];
  D.scenes.forEach(function (s, i) {
    var fr = D.frags.filter(function (f) { return f.scene === s.id; }).map(function (f) { return f.t; });
    if (fr.length) fr.forEach(function (t) { stops.push({ t: t, slide: i }); });
    else stops.push({ t: s.start + 5, slide: i });
  });
  var cur = 0, N = D.scenes.length;

  var css = document.createElement('style');
  css.textContent =
    '.footer .fnum{visibility:hidden}' +
    'html{background:#1b2a2a;overflow:hidden;height:100%}' +
    'body{position:absolute;left:0;top:0;width:1920px;height:1080px;transform-origin:0 0;box-shadow:0 10px 60px rgba(0,0,0,.45)}' +
    '#sa-nav{position:fixed;right:18px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:6px;background:rgba(21,35,42,.86);color:#fff;border-radius:999px;padding:6px 10px;font:600 14px system-ui,sans-serif;user-select:none}' +
    '#sa-nav button{all:unset;cursor:pointer;padding:6px 10px;border-radius:999px;font-size:16px;line-height:1}' +
    '#sa-nav button:hover{background:rgba(255,255,255,.15)}' +
    '#sa-nav span{min-width:62px;text-align:center;font-variant-numeric:tabular-nums}' +
    '#sa-help{position:fixed;left:18px;bottom:16px;z-index:99999;color:#cfe3df;font:13px system-ui,sans-serif;opacity:.85;transition:opacity .6s}';
  document.head.appendChild(css);

  var nav = document.createElement('div'); nav.id = 'sa-nav';
  nav.innerHTML = '<button id="sa-first" title="First slide (Home)">⇤</button><button id="sa-prev" title="Back (←)">‹</button><span id="sa-pos"></span><button id="sa-next" title="Next (→ / Space)">›</button><button id="sa-full" title="Fullscreen (F)">⛶</button>';
  var help = document.createElement('div'); help.id = 'sa-help';
  help.textContent = '→ / Space: next step · ←: back · F: fullscreen · drag graph points and sliders';
  document.documentElement.appendChild(nav); document.documentElement.appendChild(help);
  setTimeout(function () { help.style.opacity = '0'; }, 7000);

  function fit() {
    var s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    var x = (window.innerWidth - 1920 * s) / 2, y = (window.innerHeight - 1080 * s) / 2;
    document.body.style.transform = 'translate(' + x + 'px,' + y + 'px) scale(' + s + ')';
  }
  function go(i) {
    cur = Math.max(0, Math.min(stops.length - 1, i));
    D.seek(stops[cur].t);
    var sl = stops[cur].slide;
    document.getElementById('sa-pos').textContent = (sl + 1) + ' / ' + N;
    try { history.replaceState(null, '', '#' + (sl + 1)); } catch (e) { }
  }
  function goSlide(n) { for (var i = 0; i < stops.length; i++) if (stops[i].slide === n) { go(i); return; } }
  function prev() {
    // stepping back into a previous slide lands on its last reveal
    go(cur - 1);
  }
  document.getElementById('sa-next').onclick = function () { go(cur + 1); };
  document.getElementById('sa-prev').onclick = prev;
  document.getElementById('sa-first').onclick = function () { go(0); };
  document.getElementById('sa-full').onclick = function () { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen(); };
  document.addEventListener('keydown', function (e) {
    var tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown' || e.key === 'Enter') { e.preventDefault(); go(cur + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace') { e.preventDefault(); prev(); }
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(stops.length - 1);
    else if (e.key === 'f' || e.key === 'F') document.getElementById('sa-full').click();
  });
  window.addEventListener('resize', fit);
  fit();
  var start = parseInt((location.hash || '').replace('#', ''), 10);
  if (!isNaN(start) && start >= 1) goSlide(start - 1); else go(0);
})();
