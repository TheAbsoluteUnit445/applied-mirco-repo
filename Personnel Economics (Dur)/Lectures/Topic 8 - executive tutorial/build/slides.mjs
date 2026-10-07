const r=String.raw;
const box=(lead,math='',why='',reveal=true)=>`<div class="lesson-box${reveal?' frag':''}"><b>${lead}</b>${math?`<div class="equation">${math}</div>`:''}${why?`<p>${why}</p>`:''}</div>`;
const points=(items)=>`<ul class="lesson-points">${items.map(t=>`<li>${t}</li>`).join('')}</ul>`;
const graph=(name)=>`<div class="tutorial-lab" data-lab="${name}" id="lab-${name}"></div>`;
const split=(a,b)=>`<div class="col">${a}</div><div class="col">${b}</div>`;
const S=[];
function add(id,eyebrow,title,html,notes,layout='full'){S.push({id,label:eyebrow,eyebrow,title,html,notes,layout});}
add('root','Executive tutorial · Topic 8','Learn the theory, then solve every exercise',
points(['8.1: overtime incentives → payoff comparisons.','8.2: promotion → effort, probabilities, wages, profit. <strong>Final-exam priority.</strong>','8.3: risk-taking → explain the worker’s incentive.','8.4: income comparisons → hours, welfare, tax. <strong>Resit-exam priority.</strong>'])+
box('18 slides · work through the reveals and graph labs','','The PDF and complete worked guide remain the source for the full question wording.',false),
'PER-TOURN and PER-NONCLASS. Primary sources: Topic8 exercise sheetPDF1–5; Kuhn20PDF364–375 and21PDF404–407; Kuhn10.7PDF190–191. Evidence priorities: F25Q3=10/60points; R26Q5=6/60points. These are observed past-paper blocks, not predictions of the coming final. The deck is silent and self-paced.');
add('overtime-theory','8.1 · Theory before exercise','Compare the extra prize chance with the extra cost',
box('A tie gives half the bonus; working alone wins it',r`$$\text{extra expected bonus}=B-\frac B2=\frac B2$$`,'If the rival stays late, staying changes your chance from zero to one half. The gain is still B/2.',false)+
box('Stay late when the gain covers the cost',r`$$\frac B2\ge 10$$`,'Base salary 50 cancels because you receive it either way.'),
'Kuhn20.1–20.3PDF364–370. In the tutorial use the supplied two-action interpretation: leave18:00 or stay20:00; cost10 for the overtime block, infinite cost beyond20:00. Do not invent a linear cost per hour. A best response compares your choices holding the rival’s choice fixed.');
add('overtime-exercise','8.1(a–c) · Question → solution','A bonus of 20 induces overtime and adds profit',
split(box('Question: base 50; overtime costs 10', '', 'Who works until 20:00 when B=15? What minimum bonus induces both? Extra revenue is10 per extra hour.',false)+
box('Answers (a) and (b)',r`$$\begin{aligned}B=15:&\quad 7.5-10<0\\ B_{\min}&=20\end{aligned}$$`,'Both leave at 18:00 with B=15. At20 they are indifferent; the sheet says work when benefits equal costs.')+
box('Answer (c): yes, implement the bonus',r`$$\Delta\Pi=2\times2\times10-20=20$$`,'Four extra worker-hours, but only one winner’s bonus.'),graph('bonus')),
'Source: exercisePDF1; supplied answersPDF4. Payoff table, omitting50: if rival leaves, your leave payoffB/2 and stay payoffB−10; if rival stays, leave0 and stayB/2−10. Gain from staying alwaysB/2−10. B>20 gives strict incentives; B=20 needs the stated equality convention. Diagram’s incremental firm profit assumes both work late, so only applies where overtime is induced.','split');
add('promotion-theory','8.2 · Theory before exercise','Separate the chance of a contest from the chance of winning',
box('Two periods: everyone gets W twice',r`$$EU_i=2W+\Pr(\text{promotion})Z-\frac{\Theta e_i^2}{2}$$`,'Z is the extra raise. Promoted salary B=W+Z. Θ measures effort cost.',false)+
box('An outsider wins with probability ρ',r`$$\Pr(\text{promotion})=(1-\rho)\left[\frac12+\pi(e_i-e_j)\right]$$`,'π measures how strongly the effort gap changes the insider winning chance. There is no pride P in this tutorial.'),
'Exercise8.2PDF1–2. Basic incentives and participation: Kuhn20.2–20.6PDF366–375. Outsider appointment as a safeguard against collusion: Kuhn21.2PDF403–404. The exactρ algebra is this tutorial model. The probability formula is an interior linear specification; corners need checking if probabilities leave[0,1].');
add('promotion-effort','8.2(a–b) · Question → solution','An outsider chance weakens the incentive to work',
split(box('Question: find effort with and without outsiders','','Hold the rival’s effort fixed when differentiating your own effort.',false)+
box('Differentiate expected utility',r`$$\frac{\partial EU_i}{\partial e_i}=(1-\rho)\pi Z-\Theta e_i=0$$`)+
box('Solve',r`$$e=\frac{(1-\rho)\pi Z}{\Theta}$$`,'For (a), set ρ=0. More Z orπ raises effort; moreΘ orρ lowers it.'),graph('effort')),
'Second derivative−Θ<0. Base wageW is paid win or lose and disappears from the incentive condition. SourcePDF1 and supplied answerPDF4. Constructed graph values π=.08, Z=30, Θ=1.5 imply effort1.6 atρ0 and1.2 atρ.25. For the uniform interior model the rival’s effort affects expected utility but not marginal winning probability.','split');
add('promotion-probability','8.2(c) · Question → solution','Equal effort gives half of the insider chance',
split(box('Question: what is each worker’s promotion chance?','','At equal effort, each wins half the insider contests—not half of all promotions.',false)+
box('Multiply the two probabilities',r`$$\Pr(i\text{ promoted})=\frac{1-\rho}{2}$$`)+
box('Example: outsider chance 30%',r`$$\rho=0.3:\quad p_1=p_2=0.35$$`,'Outsider 30% + worker 1 35% + worker 2 35% =100%.'),graph('probability')),
'SourcePDF2 and supplied answerPDF4. Distinguish conditional and unconditional probabilities. q=1−ρ; q/2 for each worker; outsiderρ. This is a key extra skill beyond the equal-effort p=.5 result in the exam deck.','split');
add('promotion-wage','8.2(d) · Question → solution','Base wages cover outside utility and effort costs',
box('Question: find W that makes workers just willing to join','','Outside utility is V in each of two periods, so the total is 2V.',false)+
box('At equal effort, bind participation',r`$$2W+\frac{(1-\rho)Z}{2}-\frac{\Theta e^2}{2}=2V$$`)+
box('Solve W and substitute the effort formula',r`$$W=V-\frac{(1-\rho)Z}{4}+\frac{(1-\rho)^2\pi^2Z^2}{4\Theta}$$`,'Outside utility − expected-promotion compensation + effort-cost compensation.'),
'SourcePDF2 and supplied answerPDF4. First W=V−qZ/4+Θe²/4; substitute e=qπZ/Θ. Do not forget the two base payments or outside option2V. This is the same participation recipe as F25Q3b, but withρ instead of pride.');
add('promotion-wage-channels','8.2(d) · Interpretation','An outsider chance has two opposing wage effects',
split(box('Lost promotion pay pushes W upward','','The job becomes less attractive because promotion is less likely.',false)+
box('Lower effort cost pushes W downward','','Workers work less hard, so less compensation for effort is needed.')+
box('Differentiate to keep both channels',r`$$\frac{dW}{d\rho}=\frac Z4-\frac{(1-\rho)\pi^2 Z^2}{2\Theta}$$`,'The formal interior-model effect is ambiguous.'),graph('wage')),
'SourcePDF4. Keep Z,π,Θ,V fixed for this derivative. Graph shows the formal interior linear model; parameter values that make conditional probabilities leave[0,1] require a bounded model and new corner checks. Do not give only the lost-pay explanation. For a verbal exam question, state both channels in two sentences.','split');
add('promotion-profit','8.2(e) · Final-exam method','Substitute effort and wages before choosing the raise',
box('Question: set ρ=0; each effort unit brings revenue R',r`$$\Pi=2Re-4W-Z$$`,'Two workers produce in period 1; four base salaries and one raise are paid over two periods.',false)+
box('Substitute e=πZ/Θ and the participation wage',r`$$\Pi(Z)=\frac{2R\pi Z}{\Theta}-\frac{\pi^2Z^2}{\Theta}-4V$$`)+
box('Differentiate and solve',r`$$\frac{d\Pi}{dZ}=\frac{2R\pi}{\Theta}-\frac{2\pi^2Z}{\Theta}=0
\quad\Rightarrow\quad Z^*=\frac R\pi$$`,'Effort becomes e*=R/Θ: marginal output value equals marginal effort cost.'),
'SourcePDF2 and4. Second derivative−2π²/Θ<0. RaisingZ lowers the participation wage through expected promotion pay but raises it through effort costs; treatW as W(Z). No prideP here. R is output value, not the uniform luck range. A feasible interior hiring contract is assumed.');
add('promotion-exam','8.2 → F25 Q3 · Exam emphasis','Pride replaces cash in the past-final model',
split(box('Tutorial: only cash motivates promotion',r`$$e=\frac{\pi Z}{\Theta},\qquad Z^*=\frac R\pi$$`,'This slide’s graph holdsρ=0.',false)+
box('Final2025 Q3: promotion also brings pride P',r`$$e=\frac{\pi(Z+P)}{\theta},\qquad Z^*=\frac R\pi-P$$`,'Cash plus pride motivates effort; only cash is paid by the firm.')+
box('The grading focus: four linked steps','','Expected utility → effort → participation wage → firm profit.'),graph('profit')),
'F25Q3PDF7–8,10 points: effort2pts, participation3pts, two verbal channels2pts, optimalraise3pts. Tutorial8.2 setsP0; F25 hasρ0. Full generalization EU=2W+q p(Z+P)−θe²/2 is optional; do not use it unless specified. Graph uses unconstrained participation wages; wage bounds or Z≥0 can change the interior solution. Pride in the graph changes the optimum one-for-one.','split');
add('risk-theory','8.3 · Theory before exercise','A trailer may prefer more luck to more effort',
box('More variance means more spread, not a higher average','','A risky action can create a chance of an exceptional score while leaving expected output unchanged.',false)+
box('Choose risk if the extra expected prize exceeds its cost',r`$$\Delta p\times\text{prize}>\text{cost of risk action}$$`,'A leader may want less risk; a trailer may want more.'),
'Kuhn21.3PDF404–407, Results21.6–21.7. Distinguish risk-taking from risk preferences: a risk-neutral agent can choose more output variance because rank rewards are nonlinear. A worker can replace costly catch-up effort with cheaper increased luck. Do not claim more variance always helps.');
add('risk-exercise','8.3(a–b) · Question → explanation','Risk-taking can benefit the manager and hurt investors',
split(box('Question(a): why pay to increase variance?','','A trailing worker can gain enough winning probability to cover the cost, even without raising mean output.',false)+
box('Question(b): apply it to a fund manager','','A lagging manager buys riskier assets for a chance at a top year-end rank. High rank attracts funds and can raise pay.')+
box('Explain the conflict','','Investors may want safer investments. Winning incentives can encourage risk they did not want.'),graph('risk')),
'SourcePDF2 and4; Kuhn21.3PDF405–407, Brown/Harlow/Starks1996. Graph is an illustrative normal-relative-noise model with fixed negative mean gap−1.5, not an empirical fit. Costly risk is attractive only if added expected prize exceeds cost. Supplied answer says buy low-risk stocks when increasing risk; this is an apparent typo. The book mechanism is higher-risk investments. No advanced normal-CDF derivation is required for the tutorial.','split');
add('status-theory','8.4 · Theory before exercise · Resit priority','Your income can make your sister worse off',
box('The question uses own income, relative income, and leisure',r`$$U_A=wh_A+\mu(wh_A-wh_B)-h_A^2$$`,'w is hourly pay; h is hours; μ>0 measures how much getting ahead matters.',false)+
box('An extra euro has a private benefit of 1+μ','','Astrid gains income and status; Bella loses relative standing. When we add their utilities, the two status terms cancel.'),
'Kuhn10.7PDF190–191 explains symmetric relative-income utility. Tutorial8.4PDF2–3; exact model appearsR26Q5PDF12–14. This is not promotion-prize algebra. Costh² has derivative2h, notΘh. It generates a negative positional externality: your higher income reduces the other person’s utility.');
add('status-independent','8.4(a) · Question → solution','Independent choices make both sisters work extra hours',
split(box('Question: each chooses her hours independently',r`$$U_A=(1+\mu)wh_A-\mu wh_B-h_A^2$$`,'Hold Bella’s hours fixed.',false)+
box('Differentiate own hours',r`$$\frac{\partial U_A}{\partial h_A}=(1+\mu)w-2h_A=0$$`)+
box('Both have the same best response',r`$$h_A=h_B=\frac{(1+\mu)w}{2}$$`,'They work extra to get ahead, but equal hours leave neither ahead.'),graph('hours')),
'R26Q5a2points; tutorialPDF2 and answerPDF5. Second derivative−2<0. The rival’s hours affect utility but not the own-hours derivative in this linear relative-income model. Graphic orange line is private marginal benefit(1+μ)w; teal is marginal cost2h; blue marker is joint optimumw/2.','split');
add('status-joint','8.4(b) · Question → solution','Joint choice removes the race to get ahead',
box('Question: maximize the sum of both utilities',r`$$\mu(wh_A-wh_B)+\mu(wh_B-wh_A)=0$$`,'One sister’s status gain is the other sister’s status loss.',false)+
box('Add first, then differentiate',r`$$U_A+U_B=wh_A+wh_B-h_A^2-h_B^2$$`)+
box('The joint optimum is lower',r`$$w-2h_i=0\quad\Rightarrow\quad h_A=h_B=\frac w2$$`,'The extra μw/2 hours chosen independently buy no net status benefit.'),
'R26Q5b2points; tutorialPDF2 and answerPDF5. This cancels comparison terms before taking first-order conditions. It is different from differentiating one person’s utility and then declaring symmetry. Both sisters still value income; joint choice does not imply working zero hours.');
add('status-utility','8.4(c) · Question → complete solution','Both can earn less and still be happier',
split(box('Question: calculate utility under(a) and(b)','','At both symmetric outcomes, the relative-income term is zero. Each gets wh−h².',false)+
box('Substitute the two hours choices',r`$$U^{ind}=\frac{w^2(1-\mu^2)}4,\qquad U^{joint}=\frac{w^2}4$$`)+
box('Each sister gains',r`$$U^{joint}-U^{ind}=\frac{\mu^2w^2}4$$`,'At w=8,μ=.75: utility rises from7 to16, despite lower earnings.'),graph('utility')),
'Tutorial8.4cPDF2. The supplied answerPDF5 omits this calculation and mislabels the subsequent tax answerc. R26Q5 does not separately ask this utility subquestion, but it supports the explanation that a tax can benefit both. Graph compares symmetric-outcome utility as μ changes, not an individual’s best response holding rival hours fixed.','split');
add('status-tax','8.4(d) · R26 Q5c · Question → solution','Tax only the extra income above the efficient hours',
split(box('Question: use a tax, not a joint hours decision','','Set efficient hours H=w/2 and the income threshold ȳ=w²/2. Interpret comparisons as after-tax income.',false)+
box('Leave the first ȳ untaxed; tax everything above it',r`$$T(y)=\max\{0,y-\bar y\},\qquad y_{net}=\min\{y,\bar y\}$$`,'100% marginal tax above the threshold—not a 100% tax on all earnings.')+
box('Prove the kink is optimal','','Below H: income and utility rise. Above H: net income is flat but effort cost rises. Both stop at H; no tax is collected.'),graph('tax')),
'R26Q5c2points; tutorial8.4dPDF3. Left derivative(1+μ)w−2h is positive up toH, where it approachesμw>0; right derivative−2h<0. AtH neither pays tax, so donating receipts to an unvalued charity causes no equilibrium loss. Teaching variant: w8 threshold32 and hours4. Supplied answerPDF5 labels thisc instead ofd. After-tax relative comparisons are needed for this implementation.','split');
add('exam-checklist','Past-paper priorities · Final check','Earn marks by showing the chain, not only the answer',
points(['<strong>F25 Q3: 10 points.</strong> Show utility, own-effort FOC, symmetry, two-period participation, then profit substitution.','<strong>R26 Q5: 6 points.</strong> Show private hours, cancel status terms for joint hours, then specify and justify the tax threshold.','<strong>8.1:</strong> compare both rival choices; count one bonus. <strong>8.3:</strong> explain a trailer’s incentive and investor conflict.'])+
box('Three answer-sheet cautions','','8.1 atB = 20 uses the equality convention. 8.3 says “low-risk” where risk must increase. 8.4 omits utility part(c) and mislabels the tax answer.',false),
'Sources: tutorial originalPDF1–5; Kuhn20.1–20.6PDF364–375,21.3PDF404–407,10.7PDF190–191; F25 final with solutionsQ3PDF7–8; R26resitQ5PDF12–14. Verbal exam answers should name mechanisms in2–3sentences, not repeat equations. Past-paper recurrence is evidence for study priorities, not a guarantee of a future question. Full question text and algebra are in the linked tutorial readiness guide.');
export const SLIDES=S;
