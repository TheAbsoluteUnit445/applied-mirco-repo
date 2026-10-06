// Slide content for the tournaments deck. Math in $...$ / $$...$$ is pre-rendered by KaTeX at build time.
// Elements with class "frag" are fragment reveals (in document order). Headlines are claims, not labels.
const r = String.raw;

// ---------- small layout helpers ----------
export const steps = (items) => `<ol class="steps">${items.map((s, i) => `
  <li class="step-row${s.frag === false ? '' : ' frag'}${s.compact || items.some(x => x.compact) ? ' compact' : ''}">
    <span class="badge">${i + 1}</span>
    <div class="step-body">${s.pts ? `<span class="pts">${s.pts}</span>` : ''}${s.lead ? `<div class="step-lead">${s.lead}</div>` : ''}${s.f ? `<div class="step-math">${s.f}</div>` : ''}${s.why ? `<div class="why">${s.why}</div>` : ''}</div>
  </li>`).join('')}</ol>`;

export const fig = (id, ctrls = [], caption = '', opts = {}) => `<figure class="fig${opts.tall ? ' tall' : ''}">
  ${opts.three ? `<div class="three-wrap" id="${id}"><canvas></canvas><div class="three-hint">drag to rotate</div></div>` : `<svg viewBox="0 0 1000 ${opts.h || 560}" id="${id}"></svg>`}
  ${ctrls.length ? `<div class="ctrls">${ctrls.map(c => c.type === 'checkbox'
    ? `<label class="ctrl check"><input type="checkbox" id="${c.id}"><span>${c.label}</span></label>`
    : `<label class="ctrl"><span class="cl">${c.label}</span><input type="range" id="${c.id}" min="${c.min}" max="${c.max}" step="${c.step}" value="${c.value}"><output id="${c.id}O"></output></label>`).join('')}</div>` : ''}
  ${opts.readout === false ? '' : `<div class="readout" id="${id}Read"></div>`}
  ${caption ? `<figcaption>${caption}</figcaption>` : ''}
</figure>`;

export const callout = (kind, title, body, frag = false) => `<div class="callout ${kind}${frag ? ' frag' : ''}">${title ? `<div class="co-title">${title}</div>` : ''}<div class="co-body">${body}</div></div>`;

export const cards = (items, cols = 3, frag = true) => `<div class="cards c${cols}">${items.map((c, i) => `
  <div class="card${frag ? ' frag' : ''}${c.kind ? ' ' + c.kind : ''}">
    <div class="card-head"><span class="card-n">${c.n ?? i + 1}</span><span class="card-title">${c.title}</span></div>
    <div class="card-body">${c.body}</div>
  </div>`).join('')}</div>`;

export const table = (head, rows, cls = '') => `<table class="tbl ${cls}"><thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;

export const points = (items, frag = false) => `<ul class="points">${items.map(p => `<li${frag ? ' class="frag"' : ''}>${p}</li>`).join('')}</ul>`;

const tag = (kind, t) => `<span class="tag ${kind}">${t}</span>`;
export const KUHN = (t) => tag('book', t), EXAM = (t) => tag('exam', t), ILL = tag('ill', 'Illustration');

// ---------- static SVG diagrams (large-scale versions) ----------
const SETUP_SVG = `<svg viewBox="0 0 1000 600" class="diagram">
  <rect class="nA" x="20" y="60" width="250" height="130" rx="18"/><text class="dl" x="145" y="115" text-anchor="middle">Worker 1</text><text class="ds2" x="145" y="158" text-anchor="middle">chooses E₁</text>
  <rect class="nA" x="20" y="400" width="250" height="130" rx="18"/><text class="dl" x="145" y="455" text-anchor="middle">Worker 2</text><text class="ds2" x="145" y="498" text-anchor="middle">chooses E₂</text>
  <rect class="nN" x="360" y="60" width="270" height="130" rx="18"/><text class="dl" x="495" y="115" text-anchor="middle">Q₁ = dE₁ + ε₁</text><text class="ds2" x="495" y="158" text-anchor="middle">effort + luck</text>
  <rect class="nN" x="360" y="400" width="270" height="130" rx="18"/><text class="dl" x="495" y="455" text-anchor="middle">Q₂ = dE₂ + ε₂</text><text class="ds2" x="495" y="498" text-anchor="middle">effort + luck</text>
  <rect class="nB" x="720" y="225" width="260" height="140" rx="18"/><text class="dl" x="850" y="285" text-anchor="middle">Compare</text><text class="ds2" x="850" y="328" text-anchor="middle">higher Q wins</text>
  <path class="arr" d="M270 125 H355"/><path class="arr" d="M270 465 H355"/>
  <path class="arr" d="M630 125 C690 125 680 240 715 265"/><path class="arr" d="M630 465 C690 465 680 350 715 325"/>
  <text class="dl" x="850" y="420" text-anchor="middle">Winner: a + S</text><text class="dl" x="850" y="470" text-anchor="middle">Loser: a</text>
</svg>`;
const LADDER_SVG = `<svg viewBox="0 0 1000 600" class="diagram">
  ${[['Analyst', 'raise + option'], ['Manager', 'raise + option'], ['VP', 'raise + option'], ['CEO', 'raise only']].map(([t, sub], i) => {
    const x = 16 + i * 242, y = 470 - i * 135, w = 236;
    return `<rect class="${i === 3 ? 'nB' : 'nA'}" x="${x}" y="${y}" width="${w}" height="110" rx="14"/><text class="dl" x="${x + w / 2}" y="${y + 48}" text-anchor="middle">${t}</text><text class="ds2" x="${x + w / 2}" y="${y + 86}" text-anchor="middle">${sub}</text>${i < 3 ? `<path class="arr" d="M${x + w - 40} ${y - 6} L${x + 270} ${y - 26}"/>` : ''}`;
  }).join('')}
  <text class="ds2" x="16" y="70">Top rung: no next round,</text><text class="ds2" x="16" y="108">so the raise must be large.</text>
</svg>`;
const EXAM_SVG = `<svg viewBox="0 0 1000 600" class="diagram">
  <rect class="nA" x="20" y="60" width="380" height="200" rx="18"/>
  <text class="dl" x="210" y="115" text-anchor="middle">Period 1</text>
  <text class="ds2" x="210" y="165" text-anchor="middle">both paid W</text>
  <text class="ds2" x="210" y="210" text-anchor="middle">effort eᵢ, cost θeᵢ²/2</text>
  <text class="ds2" x="210" y="330" text-anchor="middle">output eᵢ, sold at price R</text>
  <circle class="nB" cx="500" cy="300" r="78"/>
  <text class="dl" x="500" y="292" text-anchor="middle">promote</text><text class="ds2" x="500" y="334" text-anchor="middle">pᵢ</text>
  <rect class="nA" x="640" y="40" width="340" height="190" rx="18"/>
  <text class="dl" x="810" y="100" text-anchor="middle">Promoted</text><text class="ds2" x="810" y="148" text-anchor="middle">W + Z</text><text class="ds2" x="810" y="192" text-anchor="middle">+ pride P</text>
  <rect class="nN" x="640" y="370" width="340" height="160" rx="18"/>
  <text class="dl" x="810" y="430" text-anchor="middle">Not promoted</text><text class="ds2" x="810" y="478" text-anchor="middle">W</text>
  <path class="arr" d="M400 200 L430 250"/><path class="arr" d="M570 265 L636 175"/><path class="arr" d="M570 335 L636 430"/>
  <text class="ds2" x="810" y="580" text-anchor="middle">Period 2: no effort, no output</text>
</svg>`;

// ---------- slides ----------
// layout: split (text | figure), split-wide (narrow text | wide figure), full, divider, title
export const SLIDES = [

/* ================= OPENING ================= */
{ id: 'title', label: 'Title', layout: 'title', notes: 'Self-study deck. Arrow keys step through every reveal; sliders and the 3D surface are live.',
  html: `
  <div class="title-kicker">Personnel Economics · Lecture topic 8 · Kuhn ch. 20–23</div>
  <h1 class="title-h">Tournaments</h1>
  <div class="title-sub">How a firm makes people work hard by paying them for their <b>rank</b>, not their output.</div>
  <div class="roadmap">
    ${['The basic model', 'Why firms use it', 'What goes wrong', 'Uneven contests', 'The exam model'].map((t, i) => `<div class="rm"><span class="rm-n">${i + 1}</span><span class="rm-t">${t}</span></div>`).join('')}
  </div>` },

{ id: 'why-exam', label: 'Why this matters', layout: 'full', eyebrow: 'Before we start', title: 'Tournaments were worth 10 of 60 points on the Oct 2025 final',
  notes: 'F25 Q3, Dur\'s two-period version of the model. Part 5 solves it point by point.',
  html: `
  <div class="stats">
    <div class="stat"><div class="stat-n">10 pts</div><div class="stat-l">Oct 2025 final, Question 3: one sixth of the exam</div></div>
    <div class="stat"><div class="stat-n">4 parts</div><div class="stat-l">effort FOC · participation wage · a 2-sentence verbal · optimal prize</div></div>
    <div class="stat"><div class="stat-n">7 Oct</div><div class="stat-l">Dur's tournaments lecture. Go through Parts 1 and 5 before it</div></div>
  </div>
  ${callout('key', 'How to use this deck', r`<b>→ / Space</b> reveals the next step · <b>←</b> goes back · drag every slider · drag the 3D surface to rotate it. Tags: ${KUHN('Kuhn')} book result · ${EXAM('Exam')} past exam · ${ILL} constructed example`)}` },

/* ================= PART 1 ================= */
{ id: 'p1', label: 'Part 1: the basic model', layout: 'divider', eyebrow: 'Part 1 · Kuhn 20.1–20.6', title: 'The basic model in five steps',
  html: `<div class="divider-steps">${['Who wins?', 'How likely?', 'How hard do they work?', 'What is efficient?', 'How to design the prize'].map((t, i) => `<div class="ds"><span>${i + 1}</span>${t}</div>`).join('')}</div>` },

{ id: 'what', label: 'What is a tournament?', layout: 'full', eyebrow: 'Part 1 · The idea', tags: KUHN('20.1'), title: 'A tournament pays you for your rank, not for how much you produce',
  notes: 'Two defining features: prizes fixed in advance; only ordinal information needed.',
  html: `
  ${cards([
    { n: 'A', title: 'Promotion', body: 'Two managers compete. The better one gets the VP job and its raise.' },
    { n: 'B', title: 'Sales bonus', body: '"Salesperson of the month" wins a fixed bonus, whatever the margin.' },
    { n: 'C', title: 'Broiler growers', body: 'Chicken farmers are paid by their rank against other farmers (Kuhn 20.9).' },
  ])}
  <div class="two-facts">
    ${callout('key', 'Feature 1 · Prizes are fixed in advance', 'The firm commits: "the winner gets $S$ more", whatever output turns out to be.', true)}
    ${callout('key', 'Feature 2 · Only the ranking is measured', 'The firm needs to know <i>who</i> did better, not <i>how much</i> better.', true)}
  </div>` },

{ id: 'puzzle', label: 'The puzzle', layout: 'statement', eyebrow: 'Part 1 · The idea',
  notes: 'Classic Lazear–Rosen insight. The prize need not equal anyone\'s marginal product.',
  html: `
  <div class="big-claim">A new VP's 50% raise is not pay for being VP.</div>
  <div class="big-claim accent">It is the <u>prize</u> that kept every manager below her working hard for years.</div>
  <div class="claim-foot frag">So the question of this lecture: can a firm get <b>efficient</b> effort just by choosing two numbers, a base pay $a$ for everyone and a prize spread $S$ for the winner?</div>` },

{ id: 'setup', label: 'Model setup', layout: 'split', eyebrow: 'Part 1 · Setup', tags: KUHN('20.1'), title: 'Two workers choose effort, luck adds noise, and the higher output wins',
  notes: 'Symmetric contest: same d, same cost. Risk neutral.',
  html: `
  <div class="col">
    ${table(['Symbol', 'Meaning'], [
      ['$E_i$', 'effort of worker $i$'],
      ['$d$', 'productivity of effort (same for both)'],
      ['$\\varepsilon_i$', 'luck: random, mean 0'],
      ['$Q_i = dE_i + \\varepsilon_i$', 'measured output'],
      ['$E_i^2/2$', 'effort cost, so marginal cost $= E_i$'],
      ['$a$ / $a+S$', 'loser\'s pay / winner\'s pay'],
    ], 'notation')}
    <div class="note">Workers are risk neutral: they maximise expected pay minus effort cost.</div>
  </div>
  <figure class="fig">${SETUP_SVG}<figcaption>Effort raises <i>expected</i> output, but luck means the harder worker does not always win.</figcaption></figure>` },

{ id: 'who-wins', label: 'Step 1: who wins', layout: 'full', eyebrow: 'Step 1 · Who wins?', tags: KUHN('20.2'), title: 'Worker 1 wins when her effort lead is bigger than her rival\'s extra luck',
  notes: 'Everything runs through the win probability.',
  html: steps([
    { lead: 'Worker 1 wins if her measured output is higher', f: r`$$Q_1 > Q_2 \iff dE_1+\varepsilon_1 > dE_2+\varepsilon_2$$` },
    { lead: 'Put effort on one side, luck on the other', f: r`$$d(E_1-E_2) \;>\; \varepsilon_2-\varepsilon_1 \equiv \varepsilon$$`, why: '$\\varepsilon$ is <b>relative luck</b>: how much luckier worker 2 was.' },
    { lead: 'So she wins when relative luck falls below her effort lead', f: r`$$p_1 = \Pr\big(\varepsilon < d(E_1-E_2)\big)$$`, why: 'A shock that hits both workers equally cancels out. That will matter in Part 2.' },
  ]) },

{ id: 'uniform', label: 'Step 2: uniform luck', layout: 'split', eyebrow: 'Step 2 · How likely?', tags: KUHN('Result 20.1'), title: 'With uniform luck, the win probability is ½ plus a straight line in the effort gap',
  notes: 'Probability = rectangle area to the left of the threshold.',
  html: `
  <div class="col">
    <p class="lead-p">Relative luck $\\varepsilon$ is uniform on $[-R/2,\\,R/2]$: a flat density of height $\\alpha = 1/R$.</p>
    ${steps([
      { lead: 'Area left of the threshold $x=d(E_1-E_2)$', f: r`$$p_1 = \frac{x + R/2}{R} = \tfrac12 + \frac{x}{R}$$` },
      { lead: r`Substitute $x$ and $\alpha = 1/R$`, f: r`$$p_1 = \tfrac12 + \alpha d\,(E_1-E_2)$$`, why: 'Valid while $|d(E_1-E_2)| \\le R/2$; otherwise 0 or 1.' },
    ])}
  </div>
  ${fig('figUniform', [
    { id: 'uGap', label: r`Effort gap $E_1-E_2$`, min: -3, max: 3, step: 0.1, value: 1 },
    { id: 'uR', label: r`Luck range $R$`, min: 4, max: 20, step: 0.5, value: 10 },
  ], 'Shaded area = probability that worker 1 wins ($d=1$). A wider luck range gives a flatter density, so the same effort gap buys less probability.')}` },

{ id: 'surface', label: '3D: only the gap matters', layout: 'split-wide', eyebrow: 'Step 2 · How likely?', tags: KUHN('Result 20.1'), title: 'Only the effort gap matters: the win probability is a tilted ramp',
  notes: 'Three.js surface of p1(E1,E2). Contour lines run parallel to the diagonal E1 = E2.',
  html: `
  <div class="col">
    ${points([
      'Along the diagonal $E_1 = E_2$ the height is always <b>½</b>.',
      'Moving <b>both</b> efforts up together changes nothing: only the gap $E_1 - E_2$ matters.',
      'The slope of the ramp is $\\alpha d$. A wider luck range $R$ makes it flatter.',
      'Tick <i>smooth luck</i> to see the S-shaped version Kuhn uses in ch. 22.',
    ], true)}
  </div>
  ${fig('figSurface', [
    { id: 'sR', label: r`Luck range $R$`, min: 2, max: 20, step: 0.5, value: 14 },
    { id: 'sN', label: 'Smooth (normal) luck', type: 'checkbox' },
  ], 'Height = Pr(worker 1 wins). Axes: $E_1$ (worker 1), $E_2$ (worker 2), both 0–10, with $d=1$.', { three: true, readout: false })}` },

{ id: 'reading', label: 'Reading the formula', layout: 'full', eyebrow: 'Step 2 · How likely?', title: 'Each piece of the win-probability formula has an economic meaning',
  notes: 'The marginal effect of effort on p, alpha*d, is what drives effort.',
  html: `
  ${table(['Piece', 'Meaning'], [
    ['$\\tfrac12$', 'Equal effort gives a coin flip: the contest is <b>fair</b> and <b>symmetric</b>.'],
    ['$\\alpha d$', '<b>Marginal effect of effort on your win chance</b>, $\\partial p_1/\\partial E_1$. This number drives effort.'],
    ['$\\alpha = 1/R$', '<b>Precision of measurement.</b> Less luck means effort shows up more clearly in the ranking.'],
    ['$d$', 'Productivity: more productive effort moves your output, and so your rank, more.'],
  ])}
  ${callout('warn', 'Notation trap', 'In Kuhn, $R$ is the <b>range of luck</b>. In the Oct 2025 exam, $R$ is the <b>price of output</b> and the probability slope is called $\\pi$.', true)}` },

{ id: 'prob-own', label: 'Probability vs own effort', layout: 'split', eyebrow: 'Step 2 · How likely?', tags: KUHN('Fig. 22.1–22.2'), title: 'Your win chance rises linearly with your effort, between two kinks',
  notes: 'Kinks A and B are where the uniform support ends.',
  html: `
  <div class="col">
    ${points([
      'Below <b>A</b> you cannot win; above <b>B</b> you win for sure. Extra effort there is wasted.',
      'Between A and B every unit of effort adds the same $\\alpha d$ to your chance.',
      'With smooth (normal) luck the line becomes an <b>S-curve</b>, steepest where efforts are equal.',
    ], true)}
  </div>
  ${fig('figProb', [
    { id: 'pE2', label: r`Rival's effort $E_2$`, min: 1, max: 7, step: 0.1, value: 4 },
    { id: 'pR', label: r`Luck range $R$`, min: 2, max: 16, step: 0.5, value: 8 },
    { id: 'pN', label: 'Smooth (normal) luck', type: 'checkbox' },
  ], 'Pr(worker 1 wins) against her own effort ($d=1$).', { readout: false })}` },

{ id: 'foc', label: 'Step 3: optimal effort', layout: 'full', eyebrow: 'Step 3 · How hard do they work?', tags: KUHN('20.3'), title: 'Each worker sets the marginal benefit αdS equal to the marginal cost E',
  notes: 'Second-order condition -1 < 0.',
  html: steps([
    { lead: 'Expected utility: base pay, plus the prize with probability $p_1$, minus effort cost', f: r`$$EU_1 = a + \Big[\tfrac12 + \alpha d(E_1-E_2)\Big]S - \frac{E_1^2}{2}$$` },
    { lead: 'Differentiate with respect to her <b>own</b> effort, taking $E_2$ as given', f: r`$$\frac{\partial EU_1}{\partial E_1} = \underbrace{\alpha d\,S}_{\text{marginal benefit}} - \underbrace{E_1}_{\text{marginal cost}} = 0$$`, why: 'Marginal benefit = extra win chance per unit of effort × size of the prize.' },
    { lead: 'Optimal effort, the same for both workers by symmetry', f: r`$$E_1 = E_2 = \alpha d S$$`, why: 'Second-order condition: $\\partial^2 EU_1/\\partial E_1^2 = -1 < 0$, so it is a maximum.' },
  ]) },

{ id: 'mbmc', label: 'Comparative statics', layout: 'split', eyebrow: 'Step 3 · How hard do they work?', title: 'Effort rises with the prize, with productivity, and with measurement precision',
  notes: 'Move S until the chosen effort hits the efficient level E* = d.',
  html: `
  <div class="col">
    ${table(['Change', 'Effect on effort'], [
      ['Bigger prize $S$', '↑ more at stake'],
      ['Higher productivity $d$', '↑ effort moves rank more'],
      ['Noisier measurement ($R$↑, $\\alpha$↓)', '↓ luck drowns effort'],
      ['Higher base pay $a$', 'no effect: paid win or lose'],
    ], 'compact')}
    ${callout('key', 'Try it', 'Move $S$ until the flat line hits the dashed efficient level. That $S$ is $1/\\alpha$.', true)}
  </div>
  ${fig('figMB', [
    { id: 'mS', label: r`Prize spread $S$`, min: 0, max: 20, step: 0.5, value: 6 },
    { id: 'mA', label: r`Precision $\alpha$`, min: 0.02, max: 0.25, step: 0.01, value: 0.1 },
    { id: 'mD', label: r`Productivity $d$`, min: 1, max: 6, step: 0.5, value: 4 },
  ])}` },

{ id: 'dominant', label: 'A dominant strategy', layout: 'statement', eyebrow: 'Step 3 · How hard do they work?', tags: KUHN('Result 20.5'),
  notes: 'With uniform luck the rival\'s effort drops out of the FOC. With other distributions, it does not.',
  html: `
  <div class="big-claim">With uniform luck, your rival's effort drops out of your FOC.</div>
  <div class="formula-hero">$$\\alpha dS - E_1 = 0 \\quad\\text{(no } E_2\\text{)}$$</div>
  <div class="claim-foot frag">So effort is a <b>dominant strategy</b>. With other luck distributions your best effort depends on what you expect your rival to do, which makes behaviour in tournaments harder to predict than under piece rates (Result 20.5).</div>` },

{ id: 'equilibrium', label: 'Equilibrium: luck decides', layout: 'split', eyebrow: 'Step 3 · Equilibrium', tags: KUHN('Result 20.2') + EXAM('1 pt in F25 Q3b'), title: 'In equilibrium both work equally hard, so luck alone picks the winner',
  notes: 'State p = 1/2 explicitly on the exam: it was worth a point.',
  html: `
  <div class="col">
    <div class="formula-hero sm">$$p_1 = \\tfrac12 + \\alpha d(\\alpha dS - \\alpha dS) = \\tfrac12$$</div>
    ${points([
      'The prize does not exist to find the hardest worker. It exists to make <b>both</b> work hard.',
      'Each runs to avoid falling behind (a rat race), and in equilibrium neither gets ahead.',
    ], true)}
    ${callout('exam', 'Exam habit', '"Workers choose the same effort, so $p_i = p_j = \\tfrac12$" was worth <b>1 point on its own</b> in F25 Q3b. Always write it.', true)}
  </div>
  <div class="col">
    ${callout('', 'Check yourself', 'If luck picks the winner anyway, why not just pay both workers $a + S/2$ for sure?')}
    ${callout('key', 'Answer', 'Then effort no longer changes pay: $\\partial EU/\\partial E = -E$, so $E = 0$. The <i>possibility</i> of losing creates the incentive, even though the outcome is a coin flip.', true)}
  </div>` },

{ id: 'efficient', label: 'Step 4: efficient effort', layout: 'split', eyebrow: 'Step 4 · What is efficient?', tags: KUHN('Result 20.3'), title: 'Efficient effort sets the marginal product d equal to marginal cost, so E* = d',
  notes: 'Wages are transfers; they cancel in total surplus.',
  html: `
  <div class="col">
    ${steps([
      { lead: 'Total surplus: wages are transfers, so they cancel', f: r`$$TS = d(E_1+E_2) - \tfrac{E_1^2}{2} - \tfrac{E_2^2}{2}$$` },
      { lead: 'Maximise over each $E_i$', f: r`$$\frac{\partial TS}{\partial E_i} = d - E_i = 0 \;\Rightarrow\; E_i^* = d$$`, why: 'A property of technology and preferences only, not of the pay scheme.' },
    ])}
  </div>
  ${fig('figTS', [
    { id: 'tD', label: r`Productivity $d$`, min: 1, max: 6, step: 0.5, value: 4 },
    { id: 'tE', label: r`Actual effort $E$`, min: 0, max: 8, step: 0.1, value: 2 },
  ], 'Surplus per worker $dE - E^2/2$ peaks at $E = d$. The gold band is the surplus lost at the chosen effort.')}` },

{ id: 'design-S', label: 'Step 5: the prize', layout: 'full', eyebrow: 'Step 5 · Design the prize', tags: KUHN('20.5'), title: 'Set the prize spread equal to the luck range: S* = 1/α = R',
  notes: 'Noisier measurement needs a bigger prize.',
  html: `${steps([
    { lead: 'Workers choose $E = \\alpha dS$; the firm wants $E = d$', f: r`$$\alpha d S = d$$` },
    { lead: 'Solve for the prize spread', f: r`$$S^* = \frac{1}{\alpha} = R$$` },
    { lead: 'Intuition', why: '<span class="why-big">When luck matters more, one unit of effort moves the win chance less. The stakes must rise to keep the marginal benefit of effort at its efficient level.</span>' },
  ])}` },

{ id: 'design-a', label: 'Step 5: base pay', layout: 'full', eyebrow: 'Step 5 · Design the prize', tags: KUHN('20.5'), title: 'Base pay only divides the pie: it makes the participation constraint bind',
  notes: 'a can be negative: an entry fee.',
  html: `
  ${steps([
    { lead: 'A worker joins only if expected utility ≥ outside option $\\bar U$ (with $p=\\tfrac12$, $E=d$)', f: r`$$a + \tfrac12 S - \tfrac{d^2}{2} \ge \bar U$$` },
    { lead: 'The firm pays no more than needed, so it binds', f: r`$$a = \bar U - \tfrac12 S + \tfrac{d^2}{2}$$` },
  ])}
  ${callout('key', 'Division of labour', '$S$ creates the incentive; $a$ only splits the pie. A bigger prize lets the firm cut base pay by ½ per unit of $S$. $a$ can even be negative, like an entry fee.', true)}` },

{ id: 'example', label: "Kuhn's worked example", layout: 'split', eyebrow: 'Worked example', tags: KUHN('Table 20.1'), title: "Kuhn's example: S = 10 and a = 9 give efficient effort and a profit of 2",
  notes: 'alpha = 0.1, d = 4; base pay a = 9 corresponds to outside utility 6.',
  html: `
  <div class="col">
    ${steps([
      { lead: 'Efficient effort', f: r`$E^* = d = 4$` },
      { lead: 'Prize spread', f: r`$S = 1/\alpha = 10$, check $E = 0.1\cdot4\cdot10 = 4$ ✓` },
      { lead: r`Base pay (outside option $\bar U = 6$)`, f: r`$a = 6 - 5 + 8 = 9$` },
      { lead: 'Profit per worker', f: r`$16 - (9 + 5) = 2$` },
    ])}
  </div>
  <div class="col frag">
    ${table(['', 'Tournament', 'Piece rate'], [
      ['Contract', '$a=9,\\ S=10$', '$a=-2,\\ b=1$'],
      ['Effort', '$\\alpha dS = 4$', '$bd = 4$'],
      ['Expected pay', '$9+0.5\\cdot10=14$', '$-2+16=14$'],
      ['Utility', '$14-8=6$', '$14-8=6$'],
      ['Profit / worker', '$2$', '$2$'],
    ], 'compact')}
    ${callout('key', 'Result 20.4 · Equivalence', 'With risk-neutral workers, a tournament can reproduce <b>any</b> piece-rate outcome, including the efficient one.')}
  </div>` },

/* ================= PART 2 ================= */
{ id: 'p2', label: 'Part 2: why tournaments', layout: 'divider', eyebrow: 'Part 2 · Kuhn 20.6–20.9', title: 'If they are equivalent, why do firms use tournaments?',
  html: `<div class="divider-sub">The equivalence holds only in the simple model. In practice, rank-based pay has real advantages.</div>` },

{ id: 'advantages', label: 'Four advantages', layout: 'full', eyebrow: 'Part 2 · Advantages', tags: KUHN('Results 20.9–20.11'), title: 'Rank pay works when output is hard to measure and promises are hard to trust',
  notes: '20.11 lists experimentation, no ratchet, no temptation to misreport.',
  html: cards([
    { title: 'Only a ranking is needed', body: 'It is often easy to say <i>who</i> did better, but hard to measure output in units.' },
    { title: 'The firm cannot cheat', body: 'The prize budget is fixed, so misreporting who won saves the firm nothing.' },
    { title: 'No ratchet', body: 'When technology raises everyone\'s output, the prize stays valid. Piece rates must be renegotiated.' },
    { title: 'Insurance against common shocks', body: 'A shock that hits everyone cancels out of the ranking (next slide). Pay has just two values, so risk can be lower.' },
  ], 2) },

{ id: 'common', label: 'Common shocks cancel', layout: 'split', eyebrow: 'Part 2 · Common shocks', tags: KUHN('Result 20.10'), title: 'A shock that hits both workers cancels out of the ranking',
  notes: 'Broiler growers: same chicks, same feed, paid relative to each other.',
  html: `
  <div class="col">
    <div class="formula-hero sm">$$Q_1 - Q_2 = d(E_1-E_2) + (\\varepsilon_1-\\varepsilon_2)$$</div>
    ${points([
      'Add a common shock $c$ to both outputs: it disappears from the difference.',
      'So the winner, and everyone\'s pay, does not depend on it. A piece rate $a + bQ$ would.',
      '<b>Broilers (Kuhn 20.9):</b> a bad batch of chicks hurts every grower equally and costs nobody the bonus.',
    ], true)}
  </div>
  ${fig('figCommon', [{ id: 'cC', label: r`Common shock $c$`, min: -8, max: 8, step: 0.5, value: 0 }], `${ILL} $d=1,\\ E_1=6,\\ E_2=4$. Both bars move together; the gap stays 2.`)}` },

{ id: 'many', label: 'More contestants', layout: 'full', eyebrow: 'Part 2 · More players', tags: KUHN('Result 20.6'), title: 'Adding rivals for one fixed prize has two opposing effects on effort',
  notes: 'With independent uniform luck the two effects exactly cancel (List et al. 2014).',
  html: `
  <div class="versus">
    ${callout('warn', '1/N effect · effort falls', 'With more rivals each has a smaller chance of winning, so the prize feels less reachable.', true)}
    <div class="vs">vs</div>
    ${callout('key', 'Competition effect · effort rises', 'You must now beat more people. With one player, promotion is automatic and nobody works.', true)}
  </div>
  <div class="claim-foot frag">Net effect: <b>ambiguous</b> (they cancel exactly under uniform luck). A firm can sometimes raise incentives by opening a prize to more people <i>without</i> making it bigger.</div>` },

{ id: 'feedback', label: 'Sequential contests', layout: 'full', eyebrow: 'Part 2 · Sequential contests', tags: KUHN('Results 20.7–20.8'), title: 'Telling workers who is ahead can make both of them work less',
  notes: 'Exam style: name both channels, direction of each, net effect.',
  html: steps([
    { lead: 'Seeing results along the way creates a leader', why: '<span class="why-big">Early luck puts one contestant ahead. A symmetric contest becomes <b>uneven</b> once it starts (Result 20.7).</span>' },
    { lead: 'Uneven contests weaken incentives', why: '<span class="why-big">The leader can coast and the trailer may give up (see Part 4).</span>' },
    { lead: 'So withholding feedback can be optimal', why: '<span class="why-big">Keeping the race close in workers\' minds keeps both working (Result 20.8).</span>' },
  ]) },

/* ================= PART 3 ================= */
{ id: 'p3', label: 'Part 3: what goes wrong', layout: 'divider', eyebrow: 'Part 3 · Kuhn ch. 21', title: 'What goes wrong: anything that improves your rank pays',
  html: `<div class="divider-steps three">${['Sabotage', 'Collusion', 'Gambling'].map((t, i) => `<div class="ds"><span>${i + 1}</span>${t}</div>`).join('')}</div>` },

{ id: 'sabotage', label: 'Sabotage: the logic', layout: 'split', eyebrow: 'Part 3 · Sabotage', tags: KUHN('21.1') + ILL, title: 'Sabotage pays because lowering your rival\'s output also raises your rank',
  notes: 'Illustrative model consistent with Kuhn 21.1: sabotage s cuts the rival\'s measured output one-for-one.',
  html: `
  <div class="col">
    ${steps([
      { lead: 'Sabotage $s_1$ cuts the rival\'s output, at cost $\\kappa s_1^2/2$', f: r`$$p_1 = \tfrac12 + \alpha\big[d(E_1-E_2) + s_1 - s_2\big]$$` },
      { lead: 'First-order condition in sabotage', f: r`$$\alpha S - \kappa s_1 = 0 \;\Rightarrow\; s_1 = \frac{\alpha S}{\kappa}$$` },
    ])}
  </div>
  <div class="col">
    ${callout('key', 'The trade-off', 'Sabotage grows with the prize $S$ exactly as effort does. A bigger prize buys more effort <b>and</b> more sabotage.', true)}
    ${callout('warn', 'Firm response', 'Where cooperation matters, firms <b>compress</b> pay differences: a smaller $S$.', true)}
  </div>` },

{ id: 'sabotage-ev', label: 'Sabotage: evidence', layout: 'full', eyebrow: 'Part 3 · Sabotage', tags: KUHN('Results 21.1–21.4'), title: 'In the lab, a prize for the best worker cut real output and total surplus',
  notes: 'Carpenter, Matthews & Schirm (2010): envelope stuffing with peer grading.',
  html: `
  <div class="lead-p">Carpenter et al. (2010): workers stuffed envelopes and graded each other's work.</div>
  ${cards([
    { title: 'Directed sabotage', body: 'Workers understated peers\' quality and quantity, but only of peers who were <b>ahead</b>.' },
    { title: 'Less real effort', body: 'Expecting to be sabotaged, workers put in less effort. Output fell.' },
    { title: 'Surplus fell', body: 'Profits fell, worker utility rose a little, and total surplus fell.' },
  ])}
  ${callout('exam', 'Exam-style answer', '"Why can a bonus for the best worker <i>reduce</i> output?" → It also rewards lowering colleagues\' measured output, and workers who expect sabotage gain less from effort.', true)}` },

{ id: 'collusion', label: 'Collusion: the game', layout: 'split', eyebrow: 'Part 3 · Collusion', tags: KUHN('21.2') + ILL, title: 'If both slack off equally, each still wins half the time but saves effort',
  notes: 'Payoffs from Kuhn\'s example a=9, S=10, alpha=0.1, d=4. Deviation: effort 1.25 already wins for sure against a shirker.',
  html: `
  <div class="col">
    ${table(['Worker 1 \\ 2', 'Work hard', 'Shirk'], [
      ['<b>Work hard</b>', '6, 6', '18.2*, 9'],
      ['<b>Shirk</b>', '9, 18.2*', '<b class="hl">14, 14</b>'],
    ], 'payoff')}
    <div class="note">Expected utilities, Kuhn's example ($a=9,\\ S=10,\\ \\alpha=0.1,\\ d=4$). *Best deviation against a shirker: effort 1.25 already wins for sure, $EU = 9 + 10 - 1.25^2/2 \\approx 18.2$.</div>
  </div>
  <div class="col">
    ${callout('key', 'A prisoners\' dilemma', 'Collusion (14, 14) beats the equilibrium (6, 6) for <b>both</b> workers, but each is tempted to secretly work and win for sure.', true)}
    ${callout('warn', 'So collusion needs', 'Cheating must be <b>seen and punished</b>: repeated contact and visible output.', true)}
  </div>` },

{ id: 'collusion-ev', label: 'Collusion: evidence', layout: 'full', eyebrow: 'Part 3 · Collusion', tags: KUHN('Result 21.5'), title: 'Fruit pickers held back output when pay was relative, and friends held back most',
  notes: 'Bandiera, Barankay & Rasul (2005). Productivity rose 59% when the farm returned to fixed piece rates.',
  html: `
  ${cards([
    { title: 'Relative pay', body: 'The day\'s piece rate fell when the field\'s average output rose, so pickers held back.' },
    { title: 'Back to fixed rates', body: 'Productivity rose by <b>59%</b>, with no rise in wage costs.' },
    { title: 'Who colluded', body: 'More with <b>friends</b>, and only for fruit where pickers <b>could see</b> each other\'s output.' },
  ])}
  ${callout('key', 'Remedies', 'Larger or reshuffled groups · confidential performance information · rivals who do not interact.', true)}` },

{ id: 'risk', label: 'Gambling when behind', layout: 'split', eyebrow: 'Part 3 · Risk-taking', tags: KUHN('Results 21.6–21.7'), title: 'When you are behind you should gamble; when ahead, play safe',
  notes: 'Brown, Harlow & Starks (1996) mutual funds.',
  html: `
  <div class="col">
    ${points([
      'Behind: a small improvement won\'t win. Only luck can, so <b>add noise</b>, even at a cost to expected output.',
      'Ahead: lock in the lead, so <b>reduce</b> noise.',
      '<b>Mutual funds:</b> managers behind at mid-year made their portfolios riskier for the rest of the year.',
    ], true)}
  </div>
  ${fig('figRisk', [
    { id: 'rGap', label: 'Mean lead (− behind, + ahead)', min: -4, max: 4, step: 0.1, value: -2 },
    { id: 'rSig', label: r`Riskiness $\sigma$`, min: 0.5, max: 6, step: 0.1, value: 1.5 },
  ], `${ILL} Normal noise: $\\Pr(\\text{win}) = \\Phi(\\text{lead}/\\sigma)$.`)}` },

/* ================= PART 4 ================= */
{ id: 'p4', label: 'Part 4: uneven contests', layout: 'divider', eyebrow: 'Part 4 · Kuhn ch. 22–23', title: 'Uneven contests, and who chooses to compete',
  html: `<div class="divider-sub">So far both contestants were equally able. What if one is much better, and who signs up in the first place?</div>` },

{ id: 'asym', label: 'Uneven contests', layout: 'split', eyebrow: 'Part 4 · Asymmetric contests', tags: KUHN('Result 22.1'), title: 'An uneven contest blunts the incentives of both players',
  notes: 'Live version of Kuhn Figs 22.2–22.4.',
  html: `
  <div class="col">
    ${points([
      'Effort is driven by the <b>slope</b> of the win probability, which is steepest when the race is close.',
      '<b>Weak player:</b> even maximum effort barely moves her chance off zero.',
      '<b>Strong player:</b> wins almost surely anyway.',
    ], true)}
    ${callout('key', 'Result 22.1', 'For a given prize, <b>both</b> players supply less effort in an uneven contest.', true)}
  </div>
  ${fig('figAsym', [{ id: 'aGap', label: 'Rival\'s ability advantage', min: -5, max: 5, step: 0.1, value: 0 }], `${ILL} Normal luck, rival at effort 5. The gold tangent is your marginal win chance.`)}` },

{ id: 'tiger', label: 'The Tiger Woods effect', layout: 'statement', eyebrow: 'Part 4 · Evidence', tags: KUHN('Result 22.2'),
  notes: 'The extracted text of Result 22.2 reads the other way round; the surrounding discussion and Brown (2011) confirm worse with Woods present.',
  html: `
  <div class="big-claim">Golfers scored <u>worse</u> when Tiger Woods was in the field.</div>
  <div class="claim-foot">Brown (2011): with the top prize effectively taken, rivals eased off. A superstar removes the prize from competition, so everyone else stops trying.</div>
  <div class="claim-foot small frag">Note: the extracted text of Kuhn's Result 22.2 reads the other way round. The surrounding discussion and Brown's paper confirm it: worse when Woods was present.</div>` },

{ id: 'fixes', label: 'Fixing uneven contests', layout: 'full', eyebrow: 'Part 4 · Fixes', tags: KUHN('Results 22.3–22.5'), title: 'Fair rules, leagues and handicaps restore incentives in uneven contests',
  notes: 'Handicap: a less able player can win with a worse performance.',
  html: cards([
    { title: 'Fair rules (equal players)', body: 'Profits are highest when the best measured performance wins and the rules are <i>seen</i> to be fair (22.3).' },
    { title: 'Leagues', body: 'Group workers of similar ability. Everyone has a real chance to win, and a real risk of losing (22.4).' },
    { title: 'Handicaps', body: 'Make the stronger player beat a point spread. This raises <b>both</b> players\' effort at no cost to the firm (22.5).' },
  ]) },

{ id: 'fair', label: 'Fair vs symmetric', layout: 'full', eyebrow: 'Part 4 · Concepts', title: 'Fair is a property of the rules; symmetric is a property of the players',
  notes: 'Incentive rule vs selection rule can be separated.',
  html: `
  <div class="versus">
    ${callout('key', 'Fair', 'The <b>rules</b>: better measured performance wins; ties go by coin flip.', true)}
    <div class="vs">≠</div>
    ${callout('key', 'Symmetric', 'The <b>players</b>: same ability and same costs.', true)}
  </div>
  <div class="claim-foot frag">A perfectly fair contest between Tiger Woods and you is still very uneven. A handicap deliberately makes the rules <i>unfair</i> to make the contest more <i>even</i>. The best rule for incentives need not be the best rule for choosing whom to promote.</div>` },

{ id: 'ladder', label: 'Promotion ladders', layout: 'split', eyebrow: 'Part 4 · Multistage contests', tags: KUHN('22.4'), title: 'The top prize must be huge because the last round has no next round',
  notes: 'Skewed executive pay as a tournament prize.',
  html: `
  <div class="col">
    ${points([
      'Lower rounds: prize = the raise <b>plus</b> the option value of competing in later rounds.',
      'Final round: there is no "later", so the whole incentive must come from the raise itself.',
      'This is the tournament explanation of <b>skewed executive pay</b>.',
    ], true)}
  </div>
  <figure class="fig">${LADDER_SVG}<figcaption>Each rung's prize is its raise plus the value of climbing further. At the top only the raise is left.</figcaption></figure>` },

{ id: 'ladder-results', label: 'More ladder results', layout: 'full', eyebrow: 'Part 4 · Multistage contests', tags: KUHN('Results 22.6–22.10'), title: 'Four more ladder results to know in one sentence each',
  notes: 'Verbal results; no algebra needed.',
  html: table(['Result', 'Idea'], [
    ['22.6 · Rosen', 'When firms learn ability as people rise, the raises needed are larger in the middle of the ladder than at the bottom and top.'],
    ['22.7 · Meyer', 'Busy managers may bias contests toward early leaders: trailers stay "invisible" unless they win big.'],
    ['22.8 · Upsets', 'Mixed-ability pools create surprise wins that reveal talent to outside employers, raising early effort.'],
    ['22.9–22.10 · Option value', 'Mixing abilities early can raise effort and the share of high-ability final winners.'],
  ], 'wide') },

{ id: 'entry', label: 'Who enters', layout: 'full', eyebrow: 'Part 4 · Selection', tags: KUHN('Results 23.1–23.2'), title: 'Confident, competition-loving people sort into tournaments',
  notes: 'Risk aversion is ambiguous in theory; deters entry in experiments.',
  html: cards([
    { title: 'Think they are better', body: 'Those who rate their relative ability highly, including the overconfident, are more likely to enter.' },
    { title: 'Enjoy competing', body: 'People who like competition, or perform better under it, are drawn in.' },
    { title: 'Risk aversion: ambiguous', body: 'A rival\'s luck adds risk; common shocks are insured. In experiments, risk aversion <b>deters</b> entry.' },
  ]) },

{ id: 'gender', label: 'Selection vs incentives', layout: 'split', eyebrow: 'Part 4 · Selection', tags: KUHN('Results 23.3–23.4'), title: 'Higher output after a switch to tournament pay may be sorting, not effort',
  notes: 'Same logic as Safelite and the empirical-methods exam questions.',
  html: `
  <div class="col">
    ${points([
      '<b>Niederle & Vesterlund (2007):</b> men chose the tournament far more often than women, despite equal ability and equal response to competition.',
      'Confidence and taste for competing explain the gap. Accurate feedback can close it.',
    ], true)}
  </div>
  <div class="col">
    ${callout('exam', 'Link to the empirical exam question', 'When output rises after a switch to tournament pay, part of the rise may be <b>who</b> now works there, not <b>how hard</b> they work. To separate the two you need random assignment, or the same people observed before and after.', true)}
  </div>` },

/* ================= PART 5 ================= */
{ id: 'p5', label: 'Part 5: the exam model', layout: 'divider', eyebrow: 'Part 5 · Oct 2025 final, Q3 · 10 points', title: 'The exam model: a two-period promotion with pride',
  html: `<div class="divider-sub">Same logic as Kuhn: probability slope × prize = marginal cost → participation → the firm's optimum. Only the notation changes.</div>` },

{ id: 'exam-setup', label: 'Exam setup', layout: 'split', eyebrow: 'Part 5 · Setup', tags: EXAM('F25 Q3'), title: 'Dur\'s version has two periods, a promotion raise Z, and pride P',
  notes: 'Firm pays 4 base salaries (2 workers × 2 periods) plus one raise Z. Pride is not paid by the firm.',
  html: `
  <div class="col">
    ${points([
      'Period 1: both earn $W$ and choose effort $e_i$. Period 2: the promoted one earns $W+Z$.',
      'Promotion: $p_i = \\tfrac12 + \\pi(e_i - e_j)$. Effort cost $\\theta e_i^2/2$ (period 1 only).',
      'The promoted worker also enjoys <b>pride</b> $P$: utility, not money.',
      'Outside option $V$ <b>per period</b>. Output: 1 unit per unit of effort, sold at price $R$.',
    ], true)}
  </div>
  <figure class="fig">${EXAM_SVG}<figcaption>The firm pays 4 base salaries and one raise $Z$. Pride costs the firm nothing.</figcaption></figure>` },

{ id: 'translate', label: 'Kuhn ↔ exam', layout: 'full', eyebrow: 'Part 5 · Setup', title: 'Translate Kuhn into the exam notation before you start',
  notes: 'R means different things!',
  html: `${table(['Object', 'Kuhn (ch. 20)', 'Exam (F25 Q3)'], [
    ['Probability slope', '$\\alpha d$', '$\\pi$'],
    ['Prize (as the worker sees it)', '$S$', '$Z + P$ (money + pride)'],
    ['Effort cost', '$E^2/2$', '$\\theta e^2/2$'],
    ['Outside option', '$\\bar U$', '$V$ per period, so $2V$ in total'],
    ['$R$ means…', 'range of luck', '<b>price of output</b>'],
  ], 'wide')}` },

{ id: 'q3a', label: 'Q3a: effort', layout: 'full', eyebrow: 'Part 5 · Q3a', tags: EXAM('2 points'), title: 'Q3a: effort equals probability slope times prize, divided by the cost parameter',
  notes: 'Grading: 1 pt expected utility, 1 pt FOC.',
  html: `
  ${steps([
    { pts: '1 pt', lead: 'Expected utility over both periods', f: r`$$EU_i = 2W + \Big[\tfrac12 + \pi(e_i - e_j)\Big](Z+P) - \frac{\theta e_i^2}{2}$$` },
    { pts: '1 pt', lead: 'Differentiate in $e_i$ and set to zero', f: r`$$\pi(Z+P) - \theta e_i = 0 \;\Longrightarrow\; e_i = \frac{\pi(Z+P)}{\theta}$$`, why: 'Same as Kuhn\'s $E = \\alpha dS$. To the worker, pride works exactly like extra prize money.' },
  ])}
  ${callout('warn', 'Traps', '$2W$ is in utility but not in the FOC · don\'t forget $P$ in the prize · state the SOC $-\\theta<0$ if you have time.', true)}` },

{ id: 'q3b', label: 'Q3b: the wage', layout: 'full', eyebrow: 'Part 5 · Q3b', tags: EXAM('3 points'), title: 'Q3b: the participation constraint over both periods pins down the wage W',
  notes: 'Most common error: V instead of 2V.',
  html: `
  ${steps([
    { pts: '1 pt', lead: 'Same FOC, so same effort, so', f: r`$$p_i = p_j = \tfrac12$$` },
    { pts: '1 pt', lead: 'Utility from the job = outside option over <b>both</b> periods', f: r`$$2W + \tfrac12(Z+P) - \tfrac12\theta e^2 = 2V$$` },
    { pts: '1 pt', lead: 'Divide by 2 and substitute $e$', f: r`$$W = V - \tfrac14(Z+P) + \tfrac14\theta\Big(\tfrac{\pi(Z+P)}{\theta}\Big)^2$$` },
  ])}
  ${callout('warn', 'Most common error', 'Using $V$ instead of $2V$. The worker gives up the outside option in <b>both</b> periods.', true)}` },

{ id: 'q3c', label: 'Q3c: two effects of pride', layout: 'split', eyebrow: 'Part 5 · Q3c', tags: EXAM('2 points · verbal'), title: 'Q3c: pride makes the job more attractive, but also more tiring',
  notes: 'Grading: 1 pt per effect. "No math in words".',
  html: `
  <div class="col">
    ${callout('key', '<span class="pts">1 pt</span> Effect 1 · lowers W', 'More pride makes promotion more valuable, so the job is more attractive and the firm can pay less.', true)}
    ${callout('key', '<span class="pts">1 pt</span> Effect 2 · raises W', 'More pride makes the worker work harder in period 1. Her effort cost rises, the job is less attractive, so the firm must pay more.', true)}
    ${callout('warn', '', '"The second term increases in $P$" scores 0. Explain the <b>economic</b> channel.', true)}
  </div>
  ${fig('figPride', [
    { id: 'prZ', label: r`Raise $Z$ (fixed)`, min: 0, max: 40, step: 1, value: 10 },
    { id: 'prPi', label: r`Slope $\pi$`, min: 0.05, max: 0.3, step: 0.01, value: 0.1 },
  ], `${ILL} $V=13,\\ \\theta=2$. Blue: effect 1. Gold: effect 2. Teal: the required wage, U-shaped, so "may rise or fall".`)}` },

{ id: 'q3d', label: 'Q3d: optimal Z', layout: 'full', eyebrow: 'Part 5 · Q3d', tags: EXAM('3 points'), title: 'Q3d: the profit-maximising raise is Z* = R/π − P',
  notes: 'The −Z and +Z cancel: the raise is recouped through a lower base wage.',
  html: steps([
    { pts: '1 pt', lead: 'Profit: two workers\' period-1 revenue, minus 4 base salaries and one raise', f: r`$$\Pi = 2Re - Z - 4W$$` },
    { pts: '1 pt', lead: 'Substitute $e$ (Q3a) and $W$ (Q3b)', f: r`$$\Pi = \frac{2R\pi(Z+P)}{\theta} - Z - 4V + Z + P - \theta\Big(\frac{\pi(Z+P)}{\theta}\Big)^2$$`, why: 'The $-Z$ and $+Z$ cancel: the firm gets the raise back through a lower base wage.' },
    { pts: '1 pt', lead: 'Differentiate in $Z$ and solve', f: r`$$\frac{2R\pi}{\theta} - \frac{2\pi^2(Z+P)}{\theta} = 0 \;\Longrightarrow\; Z^* = \frac{R}{\pi} - P$$` },
  ]) },

{ id: 'profit', label: 'Profit curve', layout: 'split-wide', eyebrow: 'Part 5 · Q3d', title: 'Profit peaks at Z* = R/π − P, and more pride slides the peak left one-for-one',
  notes: 'pi = 0.1, theta = 2, V = 13.',
  html: `
  <div class="col">
    ${points([
      'Raise $P$: the whole curve shifts left one-for-one. Pride replaces cash.',
      'Raise $R$: output is worth more, so the firm wants a bigger prize.',
      'If $P > R/\\pi$, the formula asks for $Z<0$. With $Z \\ge 0$ the constraint binds.',
    ], true)}
  </div>
  ${fig('figProfit', [
    { id: 'zP', label: r`Pride $P$`, min: 0, max: 50, step: 1, value: 40 },
    { id: 'zR', label: r`Price $R$`, min: 2, max: 10, step: 0.5, value: 6 },
  ], `${ILL} $\\pi = 0.1,\\ \\theta = 2,\\ V = 13$.`)}` },

{ id: 'insights', label: 'What it means', layout: 'full', eyebrow: 'Part 5 · Interpretation', title: 'The firm picks efficient effort, and pride is pure profit for the firm',
  notes: 'Worth a sentence on the exam.',
  html: `
  ${cards([
    { title: 'Efficient effort', body: r`At $Z^*$: $e^* = \pi\cdot\frac{R/\pi}{\theta} = \frac{R}{\theta}$. Maximising $2Re - \theta e^2$ gives the same: $R = \theta e$. The firm is residual claimant with a binding PC, so it wants the biggest pie.` },
    { title: 'Pride replaces cash', body: r`$\partial Z^*/\partial P = -1$ and effort is unchanged. Profit $\Pi^* = R^2/\theta - 4V + P$: each unit of pride is a unit of profit.` },
    { title: 'Feasibility checks', body: r`$Z^* \ge 0$? Is $p_i$ inside $[0,1]$? Is $\Pi^* \ge 0$, so the firm wants to operate at all?`, kind: 'warn' },
  ])}` },

/* ================= PRACTICE ================= */
{ id: 'pr1', label: 'Practice 1', layout: 'split', eyebrow: 'Practice · numbers', tags: ILL, title: 'Practice 1: design the efficient tournament for R = 20, d = 3, outside option 4',
  notes: 'Try before revealing.',
  html: `
  <div class="col">
    ${callout('', 'Question', 'Luck range $R=20$, productivity $d=3$, outside option $\\bar U = 4$, cost $E^2/2$. Find efficient effort, the optimal $S$ and $a$, and profit per worker.')}
  </div>
  <div class="col">
    ${steps([
      { lead: 'Efficient effort and prize', f: r`$E^*=3$, $\ S = 1/\alpha = 20$, check $0.05\cdot3\cdot20=3$ ✓` },
      { lead: 'Base pay', f: r`$a = 4 - 10 + 4.5 = -1.5$`, why: 'Negative: an entry fee.' },
      { lead: 'Profit per worker', f: r`$9 - (-1.5 + 10) = 0.5$`, why: 'Check: surplus $9-4.5 = 4.5$ minus $\\bar U = 4$.' },
    ])}
  </div>` },

{ id: 'pr2', label: 'Practice 2', layout: 'split', eyebrow: 'Practice · exam model', tags: ILL, title: 'Practice 2: with pride P = 10 instead of 0, profit rises by exactly 10',
  notes: 'Try before revealing.',
  html: `
  <div class="col">
    ${callout('', 'Question', '$R=10,\\ \\pi=0.2,\\ \\theta=2,\\ V=5$. Find $Z^*$, $e^*$, $W$ and profit with $P=0$, then with $P=10$.')}
  </div>
  <div class="col">
    ${steps([
      { lead: '$P = 0$', f: r`$Z^*=50,\ e=5,\ W=5-12.5+12.5=5$` },
      { lead: 'Profit', f: r`$\Pi = 100 - 20 - 50 = 30 \;(=R^2/\theta - 4V)$` },
      { lead: '$P = 10$', f: r`$Z^*=40,\ e=5,\ W=5,\ \Pi = 40$`, why: 'Effort and wage unchanged because $Z+P$ is unchanged. Pride added exactly $P$ to profit.' },
    ])}
  </div>` },

{ id: 'pr3', label: 'Practice: verbal', layout: 'full', eyebrow: 'Practice · 2-sentence answers', title: 'Practice 3: three verbal questions in exam style',
  notes: 'Answers revealed one by one.',
  html: cards([
    { title: 'Why a bigger prize when measurement is noisy?', body: '<span class="ans frag">When luck matters more, an extra unit of effort raises the win chance by less. To keep marginal benefit equal to marginal cost at the efficient level, the prize must rise.</span>' },
    { title: 'Why can a top-performer bonus lower output?', body: '<span class="ans frag">It rewards lowering colleagues\' measured output (sabotage) and not helping them. Workers who expect sabotage gain less from effort.</span>' },
    { title: 'Why does Z* fall one-for-one with P?', body: '<span class="ans frag">Effort depends only on the total value of promotion, Z + P, which the firm sets at the efficient level. Pride supplies part of it for free.</span>' },
  ], 3, false) },

/* ================= SUMMARY ================= */
{ id: 'formulas', label: 'Formula sheet', layout: 'full', eyebrow: 'Summary', title: 'Formula sheet: Kuhn\'s model next to the exam model',
  notes: 'Memorise the right-hand column.',
  html: table(['Object', 'Kuhn (ch. 20)', 'Exam (F25 Q3)'], [
    ['Win probability', '$\\tfrac12 + \\alpha d(E_1-E_2)$', '$\\tfrac12 + \\pi(e_i-e_j)$'],
    ['Expected utility', '$a + pS - E^2/2$', '$2W + p(Z+P) - \\theta e^2/2$'],
    ['Optimal effort', '$E = \\alpha dS$', '$e = \\pi(Z+P)/\\theta$'],
    ['Efficient effort', '$E^* = d$', '$e^* = R/\\theta$'],
    ['Optimal prize', '$S^* = 1/\\alpha = R$', '$Z^* = R/\\pi - P$'],
    ['Participation', '$a + S/2 - E^2/2 = \\bar U$', '$2W + (Z+P)/2 - \\theta e^2/2 = 2V$'],
    ['Profit', '$dE - a - S/2$ per worker', '$2Re - 4W - Z$'],
  ], 'wide formulas') },

{ id: 'recipe', label: 'The recipe', layout: 'split', eyebrow: 'Summary', title: 'Every tournament question follows the same six-step recipe',
  notes: 'Six steps plus the trap list.',
  html: `
  <div class="col">
    ${steps([
      { lead: 'Expected utility: base + $p$ × prize − effort cost', compact: true },
      { lead: 'FOC in own effort: slope of $p$ × prize = marginal cost' },
      { lead: 'Symmetry ⇒ equal efforts ⇒ $p=\\tfrac12$ (say it!)' },
      { lead: 'Binding participation constraint ⇒ base pay' },
      { lead: 'Profit = revenue − all wages; substitute; FOC in the prize' },
      { lead: 'Interpret: efficient? which channel? feasible?' },
    ])}
  </div>
  <div class="col">
    ${callout('warn', 'Traps', points([
      'Outside option over <b>all</b> periods ($2V$)',
      'Count salaries correctly ($4W$)',
      'Pride is not a cash cost',
      '$R$ means different things in Kuhn and the exam',
      '"Two effects" = two economic channels, no maths in words',
      'Probabilities must stay in $[0,1]$',
    ]))}
  </div>` },

{ id: 'sources', label: 'Sources', layout: 'full', eyebrow: 'Sources', title: 'What to read next, and how much of it',
  notes: 'Illustrations are constructed; check Dur\'s slides on 7 Oct for his notation.',
  html: `
  ${table(['Part', 'Source', 'Priority'], [
    ['Basic model, efficiency, design', 'Kuhn 20.1–20.6 · pdf p. 364–375', '<b>Must read</b>: the derivations'],
    ['Extensions, common shocks', 'Kuhn 20.7–20.9 · pdf p. 375–389', 'Skim: Results 20.6–20.11'],
    ['Sabotage, collusion, risk', 'Kuhn ch. 21 · pdf p. 390–410', 'Skim: mechanisms + 3 studies'],
    ['Uneven contests, ladders', 'Kuhn ch. 22 · pdf p. 411–435', 'Read 22.1–22.3; skim 22.4'],
    ['Selection into tournaments', 'Kuhn ch. 23 · pdf p. 436–447', 'Skim'],
    ['Exam model', 'Oct 2025 final Q3 · pdf p. 7–8', '<b>Must do</b> cold, twice'],
  ], 'wide compact')}
  <div class="note">Items tagged ${ILL} (sabotage algebra, collusion table, normal-noise graphs, pride/profit plots, practice numbers) are constructed for teaching. A scrolling reading version without slides is in <b>reading-version.html</b>.</div>` },
];

