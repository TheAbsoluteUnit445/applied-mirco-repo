/* Interactive diagrams for the tournaments deck. Plain SVG + one Three.js surface. */
(function () {
  var NS = 'http://www.w3.org/2000/svg';
  function plot(svg, o) {
    var vb = svg.viewBox.baseVal, W = vb.width, H = vb.height;
    var m = { l: 104, r: 34, t: 34, b: 88 };
    var sx = function (x) { return m.l + (x - o.x0) / (o.x1 - o.x0) * (W - m.l - m.r); };
    var sy = function (y) { return H - m.b - (y - o.y0) / (o.y1 - o.y0) * (H - m.t - m.b); };
    svg.innerHTML = '';
    function el(tag, a, txt) { var e = document.createElementNS(NS, tag); for (var k in a) e.setAttribute(k, a[k]); if (txt != null) e.textContent = txt; svg.appendChild(e); return e; }
    (o.xt || []).forEach(function (t) { el('line', { 'class': 'gr', x1: sx(t), x2: sx(t), y1: sy(o.y0), y2: sy(o.y1) }); el('text', { x: sx(t), y: H - m.b + 34, 'text-anchor': 'middle' }, t); });
    (o.yt || []).forEach(function (t) { el('line', { 'class': 'gr', x1: sx(o.x0), x2: sx(o.x1), y1: sy(t), y2: sy(t) }); el('text', { x: m.l - 14, y: sy(t) + 8, 'text-anchor': 'end' }, t); });
    el('line', { 'class': 'ax', x1: sx(o.x0), x2: sx(o.x1), y1: sy(o.y0), y2: sy(o.y0) });
    el('line', { 'class': 'ax', x1: sx(o.x0), x2: sx(o.x0), y1: sy(o.y0), y2: sy(o.y1) });
    if (o.xl) el('text', { x: (sx(o.x0) + sx(o.x1)) / 2, y: H - 14, 'text-anchor': 'middle', 'class': 'lbl' }, o.xl);
    if (o.yl) { var cy = (sy(o.y0) + sy(o.y1)) / 2; el('text', { x: 28, y: cy, 'text-anchor': 'middle', 'class': 'lbl', transform: 'rotate(-90 28 ' + cy + ')' }, o.yl); }
    return {
      sx: sx, sy: sy, el: el,
      fn: function (f, cls, a, b, n) { a = a == null ? o.x0 : a; b = b == null ? o.x1 : b; n = n || 240; var d = ''; for (var i = 0; i <= n; i++) { var x = a + (b - a) * i / n, y = f(x); if (!isFinite(y)) continue; y = Math.max(o.y0 - (o.y1 - o.y0), Math.min(o.y1 + (o.y1 - o.y0), y)); d += (d ? 'L' : 'M') + sx(x).toFixed(1) + ',' + sy(y).toFixed(1); } return el('path', { d: d, 'class': cls }); },
      area: function (f, a, b, cls, base) { base = base == null ? o.y0 : base; var d = 'M' + sx(a) + ',' + sy(base); for (var i = 0; i <= 120; i++) { var x = a + (b - a) * i / 120; d += 'L' + sx(x).toFixed(1) + ',' + sy(f(x)).toFixed(1); } d += 'L' + sx(b) + ',' + sy(base) + 'Z'; return el('path', { d: d, 'class': cls }); },
      line: function (x1, y1, x2, y2, cls) { return el('line', { x1: sx(x1), y1: sy(y1), x2: sx(x2), y2: sy(y2), 'class': cls }); },
      dot: function (x, y, r) { return el('circle', { cx: sx(x), cy: sy(y), r: r || 11, 'class': 'dot' }); },
      text: function (x, y, t, anchor, dy, cls) { return el('text', { x: sx(x), y: sy(y) + (dy || 0), 'text-anchor': anchor || 'start', 'class': cls || 'lbl' }, t); }
    };
  }
  function $(id) { return document.getElementById(id); }
  function v(id) { var e = $(id); return e.type === 'checkbox' ? e.checked : parseFloat(e.value); }
  function out(id, val) { var o = $(id + 'O'); if (o) o.textContent = val; }
  function read(id, html) { var r = $(id + 'Read'); if (r) r.innerHTML = html; }
  function fmt(x, d) { d = d == null ? 2 : d; return (Math.round(x * Math.pow(10, d)) / Math.pow(10, d)).toString(); }
  function bind(ids, render) { ids.forEach(function (id) { var e = $(id); if (e) { e.addEventListener('input', render); e.addEventListener('change', render); } }); try { render(); } catch (e) { } }
  function erf(x) { var t = 1 / (1 + 0.3275911 * Math.abs(x)); var y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x); return x >= 0 ? y : -y; }
  function Phi(z) { return 0.5 * (1 + erf(z / Math.SQRT2)); }
  function phi(z) { return Math.exp(-z * z / 2) / Math.sqrt(2 * Math.PI); }

  /* uniform luck */
  if ($('figUniform')) bind(['uGap', 'uR'], function () {
    var g = v('uGap'), R = v('uR'); out('uGap', fmt(g, 1)); out('uR', fmt(R, 1));
    var p = plot($('figUniform'), { x0: -11, x1: 11, y0: 0, y1: 0.3, xt: [-10, -5, 0, 5, 10], yt: [0.1, 0.2, 0.3], xl: 'relative luck ε = ε₂ − ε₁', yl: 'density' });
    var h = 1 / R, lo = -R / 2, hi = R / 2, th = Math.max(lo, Math.min(hi, g));
    p.area(function () { return h; }, lo, th, 'fillA');
    p.line(lo, 0, lo, h, 'c1'); p.line(lo, h, hi, h, 'c1'); p.line(hi, h, hi, 0, 'c1');
    p.line(g, 0, g, 0.262, 'c2 dash'); p.text(g, 0.262, 'threshold d(E₁−E₂)', 'middle', -12);
    p.text(lo + 0.3, h, 'height α = 1/R', 'start', -14);
    var prob = Math.max(0, Math.min(1, 0.5 + g / R));
    read('figUniform', 'p₁ = ½ + ' + fmt(g, 1) + ' / ' + fmt(R, 1) + ' = <b>' + fmt(prob, 3) + '</b>' + (Math.abs(g) > R / 2 ? ' (outside the support, so clipped)' : ''));
  });

  /* probability vs own effort */
  if ($('figProb')) bind(['pE2', 'pR', 'pN'], function () {
    var E2 = v('pE2'), R = v('pR'), N = v('pN'); out('pE2', fmt(E2, 1)); out('pR', fmt(R, 1));
    var p = plot($('figProb'), { x0: 0, x1: 12, y0: 0, y1: 1.08, xt: [0, 2, 4, 6, 8, 10, 12], yt: [0, 0.5, 1], xl: 'own effort E₁', yl: 'Pr(win)' });
    var sd = R / Math.sqrt(12);
    var f = N ? function (e) { return Phi((e - E2) / sd); } : function (e) { return Math.max(0, Math.min(1, 0.5 + (e - E2) / R)); };
    p.fn(f, 'c1');
    p.line(E2, 0, E2, 1.05, 'c3 dash'); p.text(E2 + 0.15, 0.12, 'E₁ = E₂', 'start');
    if (!N) { var A = E2 - R / 2, B = E2 + R / 2; if (A > 0) { p.dot(A, 0); p.text(A, 0, 'A', 'middle', -22); } if (B < 12) { p.dot(B, 1); p.text(B, 1, 'B', 'middle', 40); } }
    p.dot(E2, 0.5);
  });

  /* MB = MC */
  if ($('figMB')) bind(['mS', 'mA', 'mD'], function () {
    var S = v('mS'), a = v('mA'), d = v('mD'); out('mS', fmt(S, 1)); out('mA', fmt(a, 2)); out('mD', fmt(d, 1));
    var p = plot($('figMB'), { x0: 0, x1: 10, y0: 0, y1: 10, xt: [0, 2, 4, 6, 8, 10], yt: [0, 2, 4, 6, 8, 10], xl: 'effort E', yl: 'value per unit of effort' });
    var mb = a * d * S;
    p.line(d, 0, d, 10, 'c3 dash'); p.text(d + 0.12, 9.4, 'efficient E* = d', 'start');
    p.fn(function () { return mb; }, 'c2'); p.fn(function (x) { return x; }, 'c1');
    p.text(9.85, Math.min(9.5, mb) + 0.35, 'MB = αdS', 'end'); p.text(8.4, 7.4, 'MC = E', 'end');
    if (mb <= 10) { p.line(mb, 0, mb, mb, 'c4 dash'); p.dot(mb, mb, 13); }
    read('figMB', 'chosen effort E = αdS = <b>' + fmt(mb, 2) + '</b> · efficient E* = ' + fmt(d, 1) + ' · prize needed S* = 1/α = <b>' + fmt(1 / a, 1) + '</b>' + (Math.abs(mb - d) < 0.05 ? ' ✓ efficient' : ''));
  });

  /* total surplus */
  if ($('figTS')) bind(['tD', 'tE'], function () {
    var d = v('tD'), E = v('tE'); out('tD', fmt(d, 1)); out('tE', fmt(E, 1));
    var p = plot($('figTS'), { x0: 0, x1: 10, y0: 0, y1: 20, xt: [0, 2, 4, 6, 8, 10], yt: [0, 5, 10, 15, 20], xl: 'effort E', yl: 'surplus per worker' });
    var f = function (x) { return d * x - x * x / 2; };
    if (Math.abs(E - d) > 0.01) p.area(function () { return d * d / 2; }, Math.min(E, d), Math.max(E, d), 'fillB', Math.max(0, f(E)));
    p.fn(f, 'c1', 0, Math.min(10, 2 * d));
    p.line(d, 0, d, d * d / 2, 'c3 dash'); p.dot(d, d * d / 2); p.text(d, d * d / 2, 'max at E = d', 'middle', -22);
    p.dot(E, Math.max(0, f(E)));
    read('figTS', 'surplus at E = ' + fmt(E, 1) + ': <b>' + fmt(f(E), 2) + '</b> · maximum ' + fmt(d * d / 2, 2) + ' · loss <b>' + fmt(d * d / 2 - f(E), 2) + '</b> = (E − d)²/2');
  });

  /* common shock */
  if ($('figCommon')) bind(['cC'], function () {
    var c = v('cC'); out('cC', fmt(c, 1));
    var p = plot($('figCommon'), { x0: 0, x1: 4, y0: -4, y1: 16, xt: [], yt: [-4, 0, 4, 8, 12, 16], yl: 'measured output' });
    var Q1 = 6 + c, Q2 = 4 + c;
    function bar(x, y, cls, lab) { var top = Math.max(y, 0), bot = Math.min(y, 0); p.el('rect', { x: p.sx(x - 0.38), y: p.sy(top), width: p.sx(x + 0.38) - p.sx(x - 0.38), height: Math.max(2, p.sy(bot) - p.sy(top)), 'class': cls, rx: 8 }); p.text(x, y, lab + ' = ' + fmt(y, 1), 'middle', y >= 0 ? -14 : 36); }
    bar(1, Q1, 'barA', 'Q₁'); bar(2.2, Q2, 'barB', 'Q₂');
    p.line(0, 0, 4, 0, 'ax');
    p.line(3.2, Q2, 3.2, Q1, 'c4'); p.text(3.32, (Q1 + Q2) / 2, 'gap = 2', 'start', 8);
    read('figCommon', 'worker 1 still ahead by <b>2</b>, so tournament pay is unchanged · a piece-rate wage a + bQ₁ would move by <b>' + (c >= 0 ? '+' : '') + fmt(c, 1) + '</b>');
  });

  /* risk-taking */
  if ($('figRisk')) bind(['rGap', 'rSig'], function () {
    var g = v('rGap'), s = v('rSig'); out('rGap', fmt(g, 1)); out('rSig', fmt(s, 1));
    var p = plot($('figRisk'), { x0: 0.5, x1: 6, y0: 0, y1: 1, xt: [1, 2, 3, 4, 5, 6], yt: [0, 0.25, 0.5, 0.75, 1], xl: 'riskiness σ', yl: 'Pr(win)' });
    p.line(0.5, 0.5, 6, 0.5, 'c3 dash');
    p.fn(function (x) { return Phi(g / x); }, 'c1'); p.dot(s, Phi(g / s));
    var slope = -phi(g / s) * g / (s * s);
    read('figRisk', 'Pr(win) = <b>' + fmt(Phi(g / s), 3) + '</b> · more risk ' + (slope > 5e-4 ? '<b>helps</b> (you are behind)' : slope < -5e-4 ? '<b>hurts</b> (you are ahead)' : 'does nothing (tied)'));
  });

  /* asymmetric contest */
  if ($('figAsym')) bind(['aGap'], function () {
    var gap = v('aGap'); out('aGap', fmt(gap, 1));
    var E2 = 5, sd = 1.6;
    var p = plot($('figAsym'), { x0: 0, x1: 10, y0: 0, y1: 1.08, xt: [0, 2, 4, 6, 8, 10], yt: [0, 0.5, 1], xl: 'your effort E₁', yl: 'Pr(you win)' });
    var f = function (e) { return Phi((e - E2 - gap) / sd); };
    p.fn(function (e) { return Phi((e - E2) / sd); }, 'c3 dash'); p.fn(f, 'c1');
    var sl = phi((E2 - E2 - gap) / sd) / sd, s0 = phi(0) / sd;
    p.line(E2 - 1.6, f(E2) - 1.6 * sl, E2 + 1.6, f(E2) + 1.6 * sl, 'c2'); p.dot(E2, f(E2));
    read('figAsym', 'at equal effort you win with prob. <b>' + fmt(f(E2), 3) + '</b> · marginal win chance <b>' + fmt(sl, 3) + '</b> vs ' + fmt(s0, 3) + ' in an even contest (<b>' + fmt(100 * sl / s0, 0) + '%</b>)');
  });

  /* pride and W */
  if ($('figPride')) bind(['prZ', 'prPi'], function () {
    var Z = v('prZ'), pi = v('prPi'), V = 13, th = 2; out('prZ', fmt(Z, 0)); out('prPi', fmt(pi, 2));
    var W = function (P) { return V - (Z + P) / 4 + th / 4 * Math.pow(pi * (Z + P) / th, 2); };
    var p = plot($('figPride'), { x0: 0, x1: 100, y0: -20, y1: 40, xt: [0, 20, 40, 60, 80, 100], yt: [-20, 0, 20, 40], xl: 'pride P', yl: 'required wage W' });
    p.fn(function (P) { return V - (Z + P) / 4; }, 'c3 dash'); p.fn(function (P) { return V + th / 4 * Math.pow(pi * (Z + P) / th, 2); }, 'c2 dash'); p.fn(W, 'c1');
    var A = th / (2 * pi * pi), Pm = A - Z;
    if (Pm > 0 && Pm < 100) { p.dot(Pm, W(Pm)); p.text(Pm, W(Pm), 'minimum', 'middle', 40); }
    read('figPride', 'W falls with P while Z + P < θ/(2π²) = <b>' + fmt(A, 1) + '</b> (effect 1 dominates), then rises (effect 2 dominates)');
  });

  /* profit in Z */
  if ($('figProfit')) bind(['zP', 'zR'], function () {
    var P = v('zP'), R = v('zR'), pi = 0.1, th = 2, V = 13; out('zP', fmt(P, 0)); out('zR', fmt(R, 1));
    var prof = function (Z) { var A = Z + P, e = pi * A / th, W = V - A / 4 + th * e * e / 4; return 2 * R * e - 4 * W - Z; };
    var Zs = R / pi - P, top = prof(Zs), y1 = Math.ceil((top + 14) / 10) * 10, y0 = y1 - 60;
    var p = plot($('figProfit'), { x0: -40, x1: 100, y0: y0, y1: y1, xt: [-40, 0, 40, 80], yt: [y0, y0 + 20, y0 + 40, y0 + 60], xl: 'promotion raise Z', yl: 'profit Π' });
    p.line(0, y0, 0, y1, 'ax');
    p.fn(prof, 'c1');
    p.line(Zs, y0, Zs, top, 'c2 dash'); p.dot(Zs, top); p.text(Zs, top, 'Z* = ' + fmt(Zs, 1), 'middle', -22);
    read('figProfit', 'Z* = R/π − P = <b>' + fmt(Zs, 1) + '</b> · effort e* = R/θ = <b>' + fmt(R / th, 2) + '</b> · profit Π* = R²/θ − 4V + P = <b>' + fmt(R * R / th - 4 * V + P, 1) + '</b>' + (Zs < 0 ? ' · Z* < 0: if raises must be ≥ 0, that constraint binds' : ''));
  });

  /* ---------- Three.js: win-probability surface ---------- */
  var three = null;
  function initSurface() {
    var wrap = $('figSurface'); if (!wrap || !window.THREE) return;
    var canvas = wrap.querySelector('canvas'), renderer = null, _e = console.error;
    console.error = function () { };
    try { renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); } catch (e) { renderer = null; } finally { console.error = _e; }
    if (!renderer) { wrap.innerHTML = '<div class="three-hint" style="position:static;margin:40px">3D view needs WebGL. The formula: p₁ = ½ + αd(E₁ − E₂), constant along every line E₁ − E₂ = const.</div>'; return; }
    var Wd = 1000, Hd = 560; renderer.setPixelRatio(1.5); renderer.setSize(Wd, Hd, false);
    var scene = new THREE.Scene();
    var cam = new THREE.PerspectiveCamera(38, Wd / Hd, 0.1, 100);
    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    var dl = new THREE.DirectionalLight(0xffffff, 0.9); dl.position.set(4, 10, 6); scene.add(dl);
    var group = new THREE.Group(); scene.add(group);
    var SIZE = 6, HGT = 4, NSEG = 64;
    var geo = new THREE.PlaneGeometry(SIZE, SIZE, NSEG, NSEG); geo.rotateX(-Math.PI / 2);
    var colors = new Float32Array(geo.attributes.position.count * 3); geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    var mat = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide });
    var mesh = new THREE.Mesh(geo, mat); group.add(mesh);
    var wireMat = new THREE.LineBasicMaterial({ color: 0x0e6e68, transparent: true, opacity: 0.45 }); var wire = null;
    var diagMat = new THREE.LineBasicMaterial({ color: 0xb8741a, linewidth: 2 });
    var diagGeo = new THREE.BufferGeometry(); var diag = new THREE.Line(diagGeo, diagMat); group.add(diag);
    // axes + floor grid
    var axMat = new THREE.LineBasicMaterial({ color: 0x56666d });
    function seg(a, b) { var g = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3().fromArray(a), new THREE.Vector3().fromArray(b)]); group.add(new THREE.Line(g, axMat)); }
    var h = SIZE / 2; seg([-h, 0, h], [h, 0, h]); seg([-h, 0, h], [-h, 0, -h]); seg([-h, 0, h], [-h, HGT, h]);
    var floor = new THREE.GridHelper(SIZE, 10, 0xd9d4c8, 0xe6e2d8); floor.position.y = -0.01; group.add(floor);
    // labels (HTML overlays)
    var labels = [['E₁ →', [0, 0, h + 0.55]], ['E₂ →', [-h - 0.6, 0, 0]], ['Pr(win) ↑', [-h - 0.9, HGT, h + 0.3]], ['½ on the diagonal', [0, HGT / 2 + 0.35, 0]]].map(function (L) { var d = document.createElement('div'); d.className = 'three-label'; d.textContent = L[0]; wrap.appendChild(d); return { el: d, p: new THREE.Vector3().fromArray(L[1]) }; });
    var teal = new THREE.Color(0x0e6e68), gold = new THREE.Color(0xe0a64f), pale = new THREE.Color(0xe0efeb);
    function rebuild() {
      var R = v('sR'), smooth = v('sN'); out('sR', fmt(R, 1));
      var pos = geo.attributes.position, col = geo.attributes.color, tmp = new THREE.Color();
      for (var i = 0; i < pos.count; i++) {
        var x = pos.getX(i), z = pos.getZ(i);
        var E1 = (x + h) / SIZE * 10, E2 = (h - z) / SIZE * 10, gap = E1 - E2;
        var pr = smooth ? Phi(gap / (R / Math.sqrt(12))) : Math.max(0, Math.min(1, 0.5 + gap / R));
        pos.setY(i, pr * HGT + 0.03);
        if (pr < 0.5) tmp.copy(pale).lerp(teal, Math.min(1, (1 - pr * 2) * 1.15)); else tmp.copy(pale).lerp(gold, (pr - 0.5) * 2);
        col.setXYZ(i, tmp.r, tmp.g, tmp.b);
      }
      pos.needsUpdate = true; col.needsUpdate = true; geo.computeVertexNormals();
      var g2 = new THREE.PlaneGeometry(SIZE, SIZE, 10, 10); g2.rotateX(-Math.PI / 2); var p2 = g2.attributes.position;
      for (var j = 0; j < p2.count; j++) { var gx = (p2.getX(j) + h) / SIZE * 10 - (h - p2.getZ(j)) / SIZE * 10; var pj = smooth ? Phi(gx / (R / Math.sqrt(12))) : Math.max(0, Math.min(1, 0.5 + gx / R)); p2.setY(j, pj * HGT + 0.01); }
      if (wire) { group.remove(wire); wire.geometry.dispose(); } wire = new THREE.LineSegments(new THREE.WireframeGeometry(g2), wireMat); group.add(wire);
      diagGeo.setFromPoints([new THREE.Vector3(-h, HGT / 2 + 0.01, h), new THREE.Vector3(h, HGT / 2 + 0.01, -h)]);
    }
    var az = -0.3, el = 0.7, drag = null, active = false, idle = 999;
    canvas.addEventListener('pointerdown', function (e) { drag = { x: e.clientX, y: e.clientY, az: az, el: el }; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointermove', function (e) { if (!drag) return; az = drag.az - (e.clientX - drag.x) * 0.006; el = Math.max(0.12, Math.min(1.3, drag.el + (e.clientY - drag.y) * 0.004)); });
    canvas.addEventListener('pointerup', function () { drag = null; idle = 0; });
    function draw() {
      var r = 12.5; cam.position.set(r * Math.cos(el) * Math.sin(az), r * Math.sin(el) + 1.2, r * Math.cos(el) * Math.cos(az)); cam.lookAt(0, HGT / 2 - 0.3, 0);
      renderer.render(scene, cam);
      labels.forEach(function (L) { var p = L.p.clone().project(cam); L.el.style.left = ((p.x + 1) / 2 * 100) + '%'; L.el.style.top = ((1 - p.y) / 2 * 100) + '%'; });
    }
    function loop() { if (!active) return; idle++; if (!drag && idle > 150) az += 0.0025; draw(); }
    ['sR', 'sN'].forEach(function (id) { $(id).addEventListener('input', function () { rebuild(); draw(); }); $(id).addEventListener('change', function () { rebuild(); draw(); }); });
    rebuild(); draw();
    three = { start: function () { if (active) return; active = true; gsap.ticker.add(loop); }, stop: function () { active = false; gsap.ticker.remove(loop); } };
  }
  try { initSurface(); } catch (e) { }
  window.__onSceneActive = function (id) { if (!three) return; if (id === 'surface') three.start(); else three.stop(); };
})();
