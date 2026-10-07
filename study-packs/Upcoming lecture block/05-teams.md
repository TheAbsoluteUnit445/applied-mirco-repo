# 5. Teams: incentives, production and membership

Topic ID: **PER-TEAM**, with prerequisite bridges to PER-PA-AGENT, PER-EMP and PER-TOURN. Scheduled lecture: **14 October 2026**. The [course guide, PDF p. 3](<../../00 Course info/Course guide 2026-27.pdf#page=3>) assigns **Kuhn chapters 24–27**, not just the equal-sharing formula. The original [25 October 2024 final Q2, PDF pp. 3–4](<../../Past exams/Finals/2024-10 Final (with solutions).pdf#page=3>) contains five subparts of one mark each. This is 5/26 marks in that particular paper; it appeared in one of the four repository finals/resits. Those facts describe historical frequency and question size, not a forecast.

Sources: [chapter 24](<../../Textbooks/Kuhn - Personnel Economics (md)/24 - Incentives in Teams and the Free-Rider Problem.md>), [chapter 25](<../../Textbooks/Kuhn - Personnel Economics (md)/25 - Team Production in Practice.md>), [chapter 26](<../../Textbooks/Kuhn - Personnel Economics (md)/26 - Complementarity, Substitutability, and Ability Differences i.md>), [chapter 27](<../../Textbooks/Kuhn - Personnel Economics (md)/27 - Choosing Teams- Self-Selection and Team Assignment.md>). All textbook pages below are **PDF pages**. No official Topic 9 teams lecture or tutorial is currently present. Topic 8 exists but covers tournaments; it is a useful comparison, not the missing team tutorial.

## Why produce together when effort is hard to observe?

The team question is not simply “will people cooperate?” It is: **what can a firm reward when it observes the team's output but cannot reliably attribute it to individuals?** Engineers, hospital staff and production workers often contribute jointly. Paying each worker for an individually measured quantity may be infeasible or may discourage helping others. The firm observes total output \(Q\); workers choose their own effort \(E_i\); a pay rule maps team output into each worker's income \(Y_i\). Effort is costly, so income and utility differ. [Kuhn 24.1, *Structure of the Team Production Problem*, PDF pp. 452–456](<../../Textbooks/Personnel Economics.pdf#page=452>).

In the baseline model there are \(N\) identical agents, indexed by \(i\). They are rational and self-interested, interact once and choose effort simultaneously. Output has value one per unit and is additive:

\[
Q=\sum_{j=1}^{N}E_j,
\qquad U_i=Y_i-\frac{E_i^2}{2},\qquad E_i\geq0.
\]

The sum symbol adds all workers' efforts; \(j\) is a counting index. The derivative of worker \(i\)'s effort cost with respect to \(E_i\) is \(E_i\): more effort becomes increasingly painful. “Simultaneous” means worker \(i\) cannot condition today's choice on observing colleagues' final choices; a best response takes their efforts as given. A Nash equilibrium is a set of choices where each is a best response to the others. It need not maximize joint welfare.

The baseline deliberately rules out altruism, peer enforcement and production complementarities. Later chapters change those assumptions. Do not carry the baseline conclusion that teams must underperform into a different production function or behavioral setting.

## Efficiency: compare total value with total real cost

**Question.** What efforts would make the total pie largest, before arguing about how to divide it? Since every euro of team revenue is allocated within the group or to a principal, transfers change distribution but do not themselves create resources. Add output value and subtract every effort cost. [Kuhn 24.2, *Efficiency: Which Effort Levels Maximize the Size of the Pie?*, PDF pp. 456–457](<../../Textbooks/Personnel Economics.pdf#page=456>).

With no other costs, total surplus is

\[
S=\sum_{j=1}^{N}E_j-\sum_{j=1}^{N}\frac{E_j^2}{2}.
\]

Differentiate with respect to **worker \(i\)'s effort**, holding all other efforts fixed:

\[
\frac{\partial S}{\partial E_i}=1-E_i.
\]

Setting the marginal gain equal to the marginal cost gives \(1-E_i=0\), so \(E_i^*=1\). The second derivative is \(-1<0\), so this is a unique maximum. At \(E_i=0\) the derivative is positive; the nonnegative corner is inferior. Every worker contributes one unit; output is \(N\), effort costs total \(N/2\), and net surplus is \(N/2\).

This is an efficiency benchmark, not yet a prediction or a participation guarantee. A worker will accept employment only if the offered utility is at least their outside utility; this inequality is the **participation constraint**. An efficient contract can fail to recruit workers if its fixed payment is too low.

Exam-ready answer: “Efficient effort balances the full value of the extra output against the worker's effort cost. How revenue is divided does not change this benchmark because payments within the group are transfers. Individual choices can differ because workers may receive only part of the value they create.”

## Equal sharing: everyone bears their cost but shares their gain

**Question.** Why does a rational worker do less than the team would prefer? Under equal sharing, \(Y_i=Q/N\). One additional unit of own effort produces one extra unit of team revenue, but increases the worker's own income by only \(1/N\). The remaining gain goes to colleagues. Those colleagues benefit from the worker's action without bearing its effort cost: this is the positive **externality** behind free riding. [Kuhn 24.3, *Sharing Rules and the Free-Rider (1/N) Problem*, PDF pp. 457–462](<../../Textbooks/Personnel Economics.pdf#page=457>).

Substitute the production function before differentiating:

\[
U_i=\frac{E_i+\sum_{j\ne i}E_j}{N}-\frac{E_i^2}{2}.
\]

Taking \(N\) and colleagues' efforts as fixed,

\[
\frac{\partial U_i}{\partial E_i}=\frac1N-E_i=0
\quad\Rightarrow\quad E_i^{\rm private}=\frac1N.
\]

The second derivative is \(-1\). Best response does not depend on other workers' actual efforts in this additive quadratic model, so all choosing \(1/N\) is the unique equilibrium. Total output is \(N(1/N)=1\); total cost is \(N(1/(2N^2))=1/(2N)\). Total surplus is \(1-1/(2N)\), below efficient surplus \(N/2\) for \(N>1\).

When \(N=1\), the worker receives the whole marginal product and chooses the efficient effort. As \(N\) grows, individual effort falls. Notice a subtlety: in this particular normalized model total equilibrium output stays at one; this is not a general prediction that output of every real organization is independent of its size. Technology, ability and pay can all change with size.

The book's diner example reverses the same incentive: when a restaurant bill is split equally, a diner enjoys all the benefit of their extra food but pays only \(1/N\) of its cost, so orders too much. With diminishing marginal benefit \(B'(F_i)\), own payment gives \(B'(F_i)=1\); shared payment gives \(B'(F_i)=1/N\). A lower target marginal benefit occurs at a higher quantity. Gneezy et al.'s study in an **Israeli restaurant** supports this distortion in its experimental setting (PDF pp. 459–460). Friends may behave differently because of norms and future interactions.

Exam-ready answer: “An additional unit of effort benefits the entire team, but an equally paid worker receives only a fraction of the extra revenue while bearing the full effort cost. The worker therefore stops before the jointly efficient level. Larger groups dilute this private return further in the baseline model.”

## Fixed unequal shares: redistribute incentives, do not multiply them

Let \(\alpha_i\geq0\) be worker \(i\)'s **fixed** revenue share, with \(\sum_i\alpha_i=1\). Then

\[
Y_i=\alpha_iQ,
\quad U_i=\alpha_i\left(E_i+\sum_{j\ne i}E_j\right)-E_i^2/2.
\]

Differentiate with respect to \(E_i\), holding shares fixed:

\[
\partial U_i/\partial E_i=\alpha_i-E_i=0,
\quad E_i=\alpha_i.
\]

The zero-share corner correctly gives zero effort. Raising one worker's share raises their effort but, under a balanced budget, requires reducing some other share. Total effort remains \(\sum_iE_i=1\). Efficient effort would require every \(\alpha_i=1\), impossible if \(N>1\) and fixed shares sum to one. Equal shares minimize total quadratic effort cost for a given total of one: concentrating effort on a smaller set of identical people raises the cost. Thus arbitrary inequality does not repair additive-team efficiency. [Kuhn 24.3, PDF pp. 460–462](<../../Textbooks/Personnel Economics.pdf#page=460>).

This conclusion assumes pay depends **only on total output** and fixed shares. F24 Q2c changes a share as own effort changes, effectively making individual effort contractible. It is a different information assumption, not a contradiction of the team result.

## Group piece rates: give every worker the full marginal return

**Question.** Can an outside principal create better incentives when only team output is observable? Pay each member \(Y_i=a+bQ\), where \(a\) is a fixed salary and \(b\) a group piece rate. Now each extra unit of team output raises **each worker's** income by \(b\). [Kuhn 24.4, *Group Piece Rates, Group Bonuses, and Free-Riding in Teams*, PDF pp. 462–465](<../../Textbooks/Personnel Economics.pdf#page=462>).

Substitution gives \(U_i=a+b(E_i+\sum_{j\ne i}E_j)-E_i^2/2\). Hence \(b-E_i=0\), and \(E_i=b\) for \(b\geq0\). Set \(b=1\) to induce \(E_i=1\). But total pay is \(Na+NbQ\), so the principal's profit, defined here as output value minus wages, is

\[
\Pi=Q-N(a+bQ)=(1-Nb)Q-Na.
\]

At \(b=1\), the wage bill increases by \(N\) euros when output rises by one euro. No fixed \(a\) can make wages equal output **at every possible output**. This is failure of **strong budget balance**. A principal who absorbs surpluses and deficits is a budget breaker.

A constructed illustration of the book's baseline sets \(a=1-N\). At efficient output \(Q=N\), each worker receives \(Y_i=1-N+N=1\); total wages equal output. This is budget balance **at the equilibrium**, not at every output. It may require negative fixed pay and a credible way to collect it. Moreover \(\partial\Pi/\partial Q=1-N<0\) for \(N>1\): holding the contract fixed, the principal financially benefits from lower reported output. Dishonest measurement or sabotage can undermine the scheme. Do not call this an automatically implementable efficient contract.

Exam-ready answer: “A group piece rate can induce efficient effort if each worker receives the full marginal value of team output. Paying that marginal return to everyone cannot balance the group's budget at every output, so a principal must absorb residuals. The resulting output-reporting incentives and feasibility of fixed payments also matter.”

## Group bonuses: compare discrete alternatives at the threshold

Pay \(a+B\) if total output reaches \(Q^*\), and \(a\) otherwise. Here \(B>0\) is a bonus, \(Q^*\) a target, and \(a\) base pay. Define colleagues' total effort as \(H=\sum_{j\ne i}E_j\). This model has a **jump** in pay, so setting a smooth derivative equal to zero across the threshold is wrong. [Kuhn 24.4, PDF pp. 465–469](<../../Textbooks/Personnel Economics.pdf#page=465>).

If \(H\geq Q^*\), the bonus is paid without own effort and the worker chooses zero. If \(H<Q^*\), define the shortfall \(d=Q^*-H>0\). Below \(d\), the worker cannot obtain the bonus and optimally supplies zero, attaining \(U_0=a\). At or above \(d\), the cheapest bonus-winning effort is exactly \(d\), attaining \(U_d=a+B-d^2/2\). Therefore

\[
U_d-U_0=B-d^2/2;
\quad \text{fill the gap if } d\leq\sqrt{2B}.
\]

At equality both zero and \(d\) are best responses. The threshold condition depends on colleagues' effort, so strategic expectations matter.

The **book's five-person example** sets \(a=0,B=1,Q^*=5\). If the other four each provide one, \(H=4\) and the gap is one: \(U_1=1-1/2=0.5>0\). All supplying one is thus a Nash equilibrium with efficient effort and a balanced budget: total bonuses five equal output five. If everyone else supplies zero, filling five costs \(25/2\), so \(1-25/2<0\); zero is best. All supplying zero is another equilibrium. A principal must commit to withhold output below target, and workers must coordinate on the productive equilibrium. [PDF pp. 466–468](<../../Textbooks/Personnel Economics.pdf#page=466>).

Compared with the efficient group piece rate, the principal keeps output above the fixed target without increasing each bonus, so the incentive to sabotage extra output can be avoided. But output randomness creates risk: a hardworking team may miss its target due to bad luck. Risk aversion can restrict appropriate bonus size and target choice. Efficient equilibrium is not a promise that this equilibrium will occur (PDF p. 469).

Exam-ready answer: “A group bonus can make each worker pivotal when colleagues do their part, so efficient effort can be a best response. It can also support a low-effort equilibrium because the bonus is unattainable when everyone else shirks. Credible withholding, coordination and output risk therefore determine whether the scheme works.”

## Team production in practice: which assumptions fail?

Chapter 25 explains why the baseline is informative but incomplete. The mechanisms use information and influence available to teammates that management cannot easily obtain. [Kuhn 25, PDF pp. 474–496](<../../Textbooks/Personnel Economics.pdf#page=474>).

**Voluntary contributions.** A linear voluntary-contribution mechanism gives each member an endowment \(M\) and a choice \(0\leq E_i\leq M\), the amount transferred into a shared account. Every donated euro becomes \(d\) euros of total group output, shared equally. Income is

\[
Y_i=M-E_i+\frac dN\sum_jE_j.
\]

Here \(E_i\) is a monetary contribution, not the quadratic-cost effort variable of chapter 24. The private derivative with respect to \(E_i\) is \(-1+d/N\). Thus if \(d<N\), contribute zero; if \(d>N\), contribute the maximum; if equal, every contribution is privately indifferent. Total income is \(NM-\sum_jE_j+d\sum_jE_j=NM+(d-1)\sum_jE_j\). The social derivative is \(d-1\). Hence for \(1<d<N\), efficient contributions are the maximum while private contributions are zero. Linear objectives give **corners**, not interior first-order conditions. [25.1, PDF pp. 475–477](<../../Textbooks/Personnel Economics.pdf#page=475>).

**Costly punishment.** In Fehr and Gächter's laboratory experiments, cooperation without punishment fell toward zero; with opportunities to punish at a cost, it moved toward the efficient maximum. Anger at free riders and fear of that response are plausible explanations. A purely selfish person in a one-shot interaction would not spend money punishing after decisions cannot be changed. Thus the experiment changes the behavioral environment; it does not refute the algebra under its original assumptions. Punishment can consume resources and can be misdirected; high contributions alone do not prove highest net welfare. [25.1, PDF pp. 477–481](<../../Textbooks/Personnel Economics.pdf#page=477>).

**Repetition and enforcement.** Repeated interaction makes future cooperation valuable. A credible future loss can deter shirking today if workers value that future enough. A constructed repeated-game inequality is \(G\leq\delta L/(1-\delta)\), where \(G\) is the one-period gain from deviation, \(L\) the per-period loss under future punishment, and \(0<\delta<1\) the discount factor. The right side sums \(\delta L+\delta^2L+\cdots\). This is an explanatory derivation, not a numerical model assigned in chapter 25. It requires detection, credible punishment and a sufficiently long relationship. Retaliatory shirking harms innocent teammates and can be hard to restart; targeted costly punishment focuses the sanction but may itself lack credibility for selfish punishers. [Book DQ 25.3, PDF p. 497](<../../Textbooks/Personnel Economics.pdf#page=497>).

**Peer pressure on campus.** Babcock et al. paid UCSB students to attend a study room with an individual bonus or a team bonus conditional on both partners reaching the attendance target. The team scheme was monetarily weaker because the teammate could prevent payment. Yet average visits were higher in the team treatment, 2.729 versus 2.332, and the share attending at least once was higher. The difference in reaching four visits was not statistically significant. Anonymous teammates reversed the motivational advantage, and 97% chose the individual scheme when offered a choice. These details support avoiding disapproval or disappointing a known partner, rather than a universal preference for teamwork. Higher effort can accompany **lower worker utility**, making recruitment harder. [25.2, PDF pp. 481–487](<../../Textbooks/Personnel Economics.pdf#page=481>).

**Koret garment factory.** Workers switched from individual piece-based pay to team production and equal sharing. Controlling for seasonality and a time trend, the book reports an 18% productivity increase, approximately 14% within-worker improvement and 4% positive selection of initially more productive workers into teams. Those are the book's decomposition figures, not universal causal coefficients for team pay. Helping, training, information sharing and peer monitoring help explain why output rose despite weaker isolated monetary incentives. More heterogeneous teams had greater productivity gains. Production practices such as a kanban constrained excessive unfinished work and made workers more interdependent. [25.3, PDF pp. 487–494, Results 25.6–25.7](<../../Textbooks/Personnel Economics.pdf#page=487>).

Exam-ready answer: “Team pay can improve performance when coworkers monitor effort, apply peer pressure, help each other or share knowledge. These mechanisms exploit information management may not possess and change assumptions of the simple free-rider model. Their benefits must be weighed against enforcement costs, pressure on workers and selection into teams.”

## Complementarity is about the effect on another worker's marginal product

**Question.** Does a colleague working harder make my contribution more or less useful? Let \(Q=F(E_1,E_2)\). The marginal product of worker 1 is \(F_1=\partial F/\partial E_1\), the additional output from that worker's effort holding worker 2 fixed. Workers' efforts are complementary if \(F_{12}=\partial^2F/(\partial E_1\partial E_2)>0\): more effort by worker 2 raises worker 1's marginal product. They are substitutes if this cross-partial is negative. Additive production has zero cross-partial. This concerns **effort interactions**, not merely whether two employees can perform the same task. [Kuhn 26.1, PDF pp. 500–506](<../../Textbooks/Personnel Economics.pdf#page=500>).

A constructed smooth example is \(F=E_1+E_2+\kappa E_1E_2\). Differentiate with respect to \(E_1\): \(F_1=1+\kappa E_2\). Then differentiate that with respect to \(E_2\): \(F_{12}=\kappa\). Positive \(\kappa\) makes effort complementary. If negative, keep effort bounds such that marginal products remain nonnegative; an unconstrained quadratic interaction need not be an economically valid global production function.

The chapter discusses studies in professional sports, scientific collaboration and medical teams, with mechanisms including helping, knowledge transfer and shared experience. These are context-specific evidence of interactions. Productive colleagues can also substitute for effort: a baseball pitcher may slack when hitters are performing well (Result 26.1, PDF p. 506). Distinguish a causal spillover study from simple correlation between teammate performance.

## Weakest links: a high-effort equilibrium need not be inevitable

Under extreme complementarity, \(Q=D\min(E_1,\ldots,E_N)\), where \(D>0\) is team productivity. Chapter 26's central games use **binary efforts**, \(E_i\in\{0,1\}\), rather than continuous choices. Equal sharing gives income \(D/N\) when everyone works and zero if anybody shirks. Working costs \(1/2\) under the baseline cost function. [26.2, PDF pp. 507–513](<../../Textbooks/Personnel Economics.pdf#page=507>).

If all others work, choosing work yields \(D/N-1/2\) and choosing shirk yields zero. Work is a best response if \(D/N\geq1/2\). If another worker shirks, own work yields \(-1/2\), whereas shirking yields zero, so shirk is best. For \(N>1\) and \(D/N>1/2\), both all-work and all-shirk are Nash equilibria. The all-work outcome is efficient because total surplus \(D-N/2\) is positive. At equality workers can be indifferent; do not claim strict incentives.

This explains “decisiveness”: when colleagues work, my effort determines whether the whole output exists. Technology itself makes my omission expensive to me, unlike the additive model. But producing more effort than colleagues cannot overcome a weakest link. Strong financial incentives may fail if workers still expect others to shirk. Brandts and Cooper's corporate-turnaround laboratory study found that managerial communication, even unenforceable requests, was effective at changing expectations; it does not prove cheap talk always succeeds (PDF pp. 510–512).

Exam-ready answer: “In weakest-link production, each worker is decisive when everyone else works, which can make efficient effort individually worthwhile even with equal sharing. If anyone else shirks, working is wasteful, so a low-effort equilibrium can also exist. Communication and credible expectations help select the productive outcome.”

## Moderate complementarity: why unequal rewards can create leadership

Kuhn's **fettuccine example** uses three binary-effort agents. If \(n\) agents work, boxes produced are \(F(0)=20,F(1)=40,F(2)=65,F(3)=100\); each box sells for \$12. Every working agent incurs cost 90. Under equal shares, each receives \$4 per box. [26.3, PDF pp. 513–520](<../../Textbooks/Personnel Economics.pdf#page=513>).

The extra boxes from joining zero, one or two working colleagues are \(20,25,35\). These gains increase: efforts are complementary. Own net gains under equal pay are

\[
4(40-20)-90=-10,\quad
4(65-40)-90=10,\quad
4(100-65)-90=50.
\]

So workers want to work when at least one colleague works, but not when both shirk. All-work and all-shirk are the two pure equilibria. One-worker outcomes fail because the sole worker would prefer to stop; two-worker outcomes fail because the third would prefer to join.

Now assign per-box pay rates **\$5, \$4 and \$3**, still summing to the box price \$12. The \$5 worker gains \(5(20)-90=10>0\) even if nobody else works: work is a dominant strategy. Once the \$4 worker anticipates that leader working, joining yields at least \(4(25)-90=10>0\). Knowing both work, the \$3 worker gains \(3(35)-90=15>0\). Sequential reasoning about simultaneous decisions leaves all-work as the unique pure equilibrium. No person is actually moving earlier here; the sequence is a reasoning process that eliminates dominated strategies.

This is not an endorsement of arbitrary inequality in every workplace. It relies on increasing marginal output, the particular reward/cost bounds, and common understanding of incentives. Inequality can hurt perceived fairness. Under substitutes, the final contribution becomes less productive and reducing the last worker's reward can make shirking worse (26.4, PDF pp. 525–526). This is why chapter 24's additive conclusion and chapter 26's complementarity conclusion differ.

**Source discrepancy:** Result 26.7 on PDF p. 526 says the unequal-reward policy is not likely to improve efficiency “when workers are complements.” Its section, preceding calculation and contrast with 26.3 indicate **substitutes** is intended. Footnote 21 repeats the inconsistent word. The original is preserved; the explanation here follows the production function and verified arithmetic.

Exam-ready answer: “With complementary efforts, a sufficiently rewarded worker can find working worthwhile even if everyone else shirks. Others then expect that worker to work, making their own participation profitable and potentially eliminating the low-effort equilibrium. The argument depends on complementarity and does not generally apply when later contributions have diminishing returns.”

## Perfect substitutes: the volunteer's dilemma

Under \(Q=D\max(E_1,\ldots,E_N)\) with binary efforts, **one** working agent produces the full output. If a colleague works, own work adds no output but costs \(1/2\), so shirk. If nobody else works, own work yields \(D/N-1/2\) instead of zero. For \(D/N>1/2\), the pure Nash equilibria each have exactly one volunteer. [26.4, PDF pp. 526–531](<../../Textbooks/Personnel Economics.pdf#page=526>).

All-work is inefficient because additional effort duplicates a completed task; all-shirk is **not** a pure Nash equilibrium under that inequality, because someone could profit by volunteering. Nevertheless uncertainty about others can cause delay or failure in practice. Multiple productive equilibria leave the group uncertain **who** should pay the effort cost. Do not confuse observed coordination failure with a mathematically stable all-shirk outcome in this game.

Kuhn illustrates nonpromotable helping tasks with a laboratory investment game: three-person mixed-sex groups, a two-minute decision window, and everyone benefiting from any volunteer. Women volunteered at 35% versus men's 21%; the difference disappeared in single-sex groups. The chapter interprets this as shared expectations coordinating who volunteers, not evidence that women have an inherent taste for unpaid support work. Preserve the lab setting and conditional inference (PDF pp. 530–531). Assigning responsibility, rotating tasks or reducing redundant team size can address this coordination problem; observability reduces wasteful duplication.

Exam-ready answer: “When any one teammate can complete the task, everyone wants the benefit but would prefer another person to bear its cost. Several equilibria differ only in who volunteers, creating a coordination problem and possible delay. Clear responsibility and observing whether someone has already acted can help.”

## Team size and ability: technology, incentives and matching are different questions

First **ignore moral hazard** and suppose every worker supplies full effort. A firm has a fixed pool of \(M\) identical workers paid fixed wage \(w\). If each team has \(N\) members, it creates \(m=M/N\) teams, ignoring indivisibilities, with output \(Q(N)\) each. Profit is

\[
\Pi=mQ(N)-Mw
=\frac MNQ(N)-Mw
=M\left[\frac{Q(N)}N-w\right].
\]

Holding \(M,w\) fixed, choose \(N\) to maximize average product \(AP=Q(N)/N\). Differentiation of this ratio gives

\[
\frac{dAP}{dN}=\frac{NQ'(N)-Q(N)}{N^2}.
\]

At an interior optimum, \(NQ'(N)=Q(N)\), or \(MP=AP\). On the graph, a ray from the origin is tangent to the output curve. Always-increasing returns favour the largest team; always-decreasing returns favour the smallest, under the book's maintained conditions. A classical production function initially has increasing returns and later diminishing returns, yielding an interior optimum beyond the point of maximum marginal product. Check integer sizes and feasible endpoints in an actual numerical question. [26.5, PDF pp. 532–535](<../../Textbooks/Personnel Economics.pdf#page=532>).

When effort can fall, that size need not remain optimal. A smaller group may sacrifice some potential output per person while improving actual incentives and monitoring; the book says optimal size **might** be smaller, not that it always is (Result 26.13, PDF p. 535). If choosing how many workers to employ rather than grouping a fixed pool, include outside opportunity costs; do not reuse average-product maximization automatically.

Ability can also change strategic expectations. In the fettuccine model, replace identical effort costs 90 with **70,90,110**, maintaining average cost 90 and the same production function. Under equal pay \$4 per box, the cost-70 agent gains \(4(20)-70=10\) even without colleagues. The cost-90 agent then gains \(4(25)-90=10\); the cost-110 agent gains \(4(35)-110=30\) with both others working. Heterogeneity creates a leader and eliminates the all-shirk equilibrium. The book models greater ability here as lower effort cost, not higher boxes at a given effort. [26.5, PDF pp. 536–538](<../../Textbooks/Personnel Economics.pdf#page=536>).

This complementarity result can favour mixed-ability teams and higher group reward rates for able members. It contrasts with tournaments, where uneven ability can make the outcome predictable and weaken everyone's incentives. Neither implies mixed groups are always best: weakest links, information-sharing opportunities, pay and assignment constraints determine the result.

## Choosing teams: hold effort fixed before analyzing membership

Chapter 27 asks who joins, leaves and admits others. Its simple selection model holds **every worker's effort at one**, unlike chapter 24. Individual ability is \(d_i\); linear team output is \(Q=\sum_i d_iE_i=\sum_i d_i\). Working alone pays \(d_i\), while equal sharing pays team mean ability \(\bar d\). With effort costs identical across locations, utility comparisons are income comparisons. [27.1, PDF pp. 547–555](<../../Textbooks/Personnel Economics.pdf#page=547>).

A current member prefers to stay if \(\bar d\geq d_i\); above-average members want to leave. A prospective member with ability \(d\) joining an \(N\)-person team obtains

\[
\bar d_{\rm new}=\frac{N\bar d+d}{N+1}.
\]

Relative to working alone,

\[
\bar d_{\rm new}-d
=\frac{N\bar d+d-(N+1)d}{N+1}
=\frac{N(\bar d-d)}{N+1}.
\]

The applicant wants to join when below the old team's mean; incumbent income rises when

\[
\bar d_{\rm new}-\bar d
=\frac{N\bar d+d-(N+1)\bar d}{N+1}
=\frac{d-\bar d}{N+1}>0.
\]

Thus incumbents want above-average applicants, while those most eager to join are below average: the **Groucho Marx rules**. Equality gives indifference. This is adverse selection generated by output sharing; it is not proof that all real teams attract weak workers. Complementarities, helping, friendship and insurance can change preferences.

If workers must form teams, can freely switch, and abilities are publicly known, higher-ability workers seek higher-ability partners: positive assortative matching. Perfect sorting is the frictionless extreme. Stronger team incentives and more dispersion in ability can increase sorting, potentially opposing the employer's desire for heterogeneous teams. Bandiera et al.'s **U.K. fruit-farm** study required five-person teams. Publishing rankings increased assortative matching but reduced average productivity as friendship ties weakened; a bonus for the highest-performing team increased productivity because its direct motivational effect outweighed that loss (PDF pp. 553–554). Symbolic rank feedback and a cash prize are distinct treatments.

Exam-ready answer: “With linear output, fixed effort and equal sharing, above-average workers subsidize below-average teammates and prefer to work alone. Applicants below the existing mean want to join, but incumbents prefer applicants above it. These selection incentives can favour ability sorting even where the firm would benefit from mixed teams.”

## Skill diversity and organization: information must actually flow

Chapter 27 distinguishes **different levels of one skill** from **different types of knowledge**. In the first case, an able member can teach a less-able one; in the second, each can share something the other lacks. Information can be nonrival: telling a colleague how to solve a problem need not deprive the original worker of that knowledge. Teams with disjoint knowledge can therefore gain from exchange, but grouping people does not guarantee exchange occurs. [27.2, PDF pp. 555–559](<../../Textbooks/Personnel Economics.pdf#page=555>).

A hierarchy can route difficult problems upward to a broadly knowledgeable person, avoiding paying everyone for expertise they rarely need. Kuhn associates hierarchy with low skill wage inequality, infrequent new problems and high importance of decision quality. Team-based organization is favoured by high wage inequality, frequent complex problems, speed requirements and relatively lower stakes per decision. These are conditional tradeoffs, not a ranking of management cultures (PDF pp. 560–562).

Woolley et al.'s task experiments found group success associated with social sensitivity, a higher female share and more equal speaking time; neither average nor maximum individual intelligence significantly predicted group performance in that study, although individual intelligence predicted solo-task performance. This is study-specific predictive evidence, not a causal rule that adding women automatically improves any team. Google's Project Aristotle found psychological safety predictive of success: members could offer ideas without fear of ridicule. It is observational workplace evidence, not a randomized intervention proving one universal cure (PDF pp. 563–566).

Exam-ready answer: “Diverse skills can raise team productivity through learning and information sharing because knowledge can benefit others without being used up. The gains depend on communication and incentives to contribute; diverse membership alone is insufficient. Organizational form should reflect knowledge distribution, problem frequency, speed and the cost of mistakes.”

## Attempt-first practice

Work these in order before opening the solutions. Book questions have no exam marks; all solutions below are independently derived unless marked as matching the official scheme.

1. **Prerequisite (new):** explain why adding two utilities cancels internal payments, why income differs from utility and why a bonus jump must be checked by comparing levels.
2. **Original final, 25 October 2024, Q2a–e, one mark each, PDF pp. 3–4** ([paper and official scheme](<../../Past exams/Finals/2024-10 Final (with solutions).pdf#page=3>)). Arno and Bea own a firm with revenue \(R=p(e_a+e_b)\), utility \(U_a=Y_a-\theta e_a^2/2\), \(U_b=Y_b-\lambda e_b^2/2\), and \(\theta>\lambda>0\). First they split equally. (a) Derive Arno's effort. (b) Maximize their summed utilities. Then give Arno share \(e_a/(e_a+e_b)\), Bea share \(e_b/(e_a+e_b)\), with commitment. (c) Derive Arno's effort. (d) Describe how to check the efficiency claim; computation is not requested. (e) Describe how to check whether Arno is worse off; computation is not requested. Read the original for the exact prompt and answer-space limits.
3. **Original book DQ 24.3, PDF p. 471** ([question](<../../Textbooks/Personnel Economics.pdf#page=471>)): \(N\) homeowners benefit from a road, \(B(Q)\), where \(Q=\sum_iE_i\) and \(E_i\) is a monetary contribution. Compare optimal and voluntary contributions, especially \(B(Q)=\ln Q\).
4. **Original book DQ 24.6, PDF pp. 471–472** ([question](<../../Textbooks/Personnel Economics.pdf#page=471>)): five-person bonus \((a,B)=(0,1)\), target five, quadratic effort cost. Colleagues supply 3.7. Derive worker 5's choice and the exact minimum colleague contribution that makes filling the gap worthwhile.
5. **Original book DQ 25.4, PDF p. 497** ([question](<../../Textbooks/Personnel Economics.pdf#page=497>)): compare helping, information sharing and sabotage under tournament versus team incentives.
6. **Original book DQ 26.5, PDF p. 540** ([question](<../../Textbooks/Personnel Economics.pdf#page=540>)): explain why arbitrary bonus-rate differences between equally able workers can improve team incentives. Use the fettuccine example in the theory as the numerical demonstration.
7. **Original book DQ 27.1b–c, PDF p. 568** ([question](<../../Textbooks/Personnel Economics.pdf#page=568>)): replace equal sharing by full productivity pay \(Y_i=d_i\), or partial productivity pay \(Y_i=\gamma d_i+(1-\gamma)\bar d\), \(0<\gamma<1\). Explain adverse selection and admission preferences. Optional original part (a) considers arbitrary unequal shares; address the missing rule for reallocating shares when membership changes.
8. **New numerical transfer:** three owners produce \(R=6(e_1+e_2+e_3)\), costs \(c_ie_i^2/2\), with \((c_1,c_2,c_3)=(1,2,3)\). Derive equal-sharing and efficient efforts and total surplus in each case. Then explain the information required for pay proportional to individual effort.

No current teams tutorial can honestly be included as an original Topic 9 question. The book and F24 questions deliberately fill that gap. Compare the tournament tutorial's helping/sabotage incentives only after mastering these team models.

## Worked solutions

### 1. Prerequisites

If person A pays person B, that payment is negative in A's income and positive in B's, so it cancels in their summed income. Real effort costs do not cancel. Income is what a person receives; utility subtracts effort costs or includes other benefits and losses. A bonus jumps when a target is attained: a derivative on one side ignores the jump, so compare the best below-target payoff with the cheapest target-winning payoff.

### 2. F24 Q2: official logic with the missing algebra

**(a), one mark, PDF p. 3.** The question asks a private best response, holding Bea's effort fixed. Substitute equal income into Arno's utility:

\[
U_a=\frac p2(e_a+e_b)-\frac\theta2e_a^2
=\frac p2e_a+\frac p2e_b-\frac\theta2e_a^2.
\]

Differentiate with respect to \(e_a\): \(p/2-\theta e_a=0\), giving \(e_a=p/(2\theta)\). The second derivative is \(-\theta<0\). For \(p>0\) effort is positive; if the price were zero the corner would be zero. **Official concise answer:** write the substituted utility, first-order condition and solution. Bea analogously chooses \(p/(2\lambda)\).

**(b), one mark, PDF p. 3.** Add utilities; the two half-revenues become the whole revenue:

\[
S=\frac p2(e_a+e_b)+\frac p2(e_a+e_b)
-\frac\theta2e_a^2-\frac\lambda2e_b^2
=p(e_a+e_b)-\frac\theta2e_a^2-\frac\lambda2e_b^2.
\]

Differentiate separately: \(\partial S/\partial e_a=p-\theta e_a=0\) and \(\partial S/\partial e_b=p-\lambda e_b=0\). Therefore \(e_a^*=p/\theta,e_b^*=p/\lambda\). Negative second derivatives and zero cross-partials establish the maximum. **Official concise answer:** summed welfare, both conditions, both efforts.

**(c), one mark, PDF p. 3.** The share changes with effort. Simplify income **before** differentiation:

\[
Y_a=\frac{e_a}{e_a+e_b}\,p(e_a+e_b)=pe_a,
\quad U_a=pe_a-\theta e_a^2/2.
\]

Cancel the common total-effort factor when total effort is positive. Now \(p-\theta e_a=0\), so \(e_a=p/\theta\). At total effort zero the written share is undefined; a convention giving zero income at zero output makes the natural extension continuous. The positive-price solution has positive effort, so no division by zero arises there. The scheme requires verifiable individual effort and commitment; otherwise participants can dispute contribution after production. **Official concise answer:** substituted utility, condition, solution.

**(d), one mark, PDF p. 4.** This asks for a method, not additional calculations. **Official concise answer:** “Derive both partners' effort choices under the proposed rule and compare them with the efforts maximizing the sum of their utilities. If both coincide, the proposed rule maximizes social welfare.” Checking only Arno or merely observing greater total revenue is insufficient.

**(e), one mark, PDF p. 4.** This asks for a utility comparison. **Official concise answer:** “Derive both partners' equilibrium efforts under each rule and substitute them into Arno's corresponding income and effort-cost expression. Compare the resulting utilities to determine whether and when Arno is worse off.” Mention **both** partners under **each** rule. Under equal sharing Arno's income includes Bea's effort, and Bea changes effort after reform.

For learning, independently complete the comparison the exam does not require. Under equal sharing,

\[
U_a^{\rm equal}
=\frac p2\left(\frac p{2\theta}+\frac p{2\lambda}\right)
-\frac\theta2\left(\frac p{2\theta}\right)^2
=\frac{p^2}{4\theta}+\frac{p^2}{4\lambda}-\frac{p^2}{8\theta}
=\frac{p^2}{8\theta}+\frac{p^2}{4\lambda}.
\]

Under the effort-based rule,

\[
U_a^{\rm new}
=p\frac p\theta-\frac\theta2\left(\frac p\theta\right)^2
=\frac{p^2}\theta-\frac{p^2}{2\theta}
=\frac{p^2}{2\theta}.
\]

Subtract and combine denominators:

\[
U_a^{\rm new}-U_a^{\rm equal}
=\frac{3p^2}{8\theta}-\frac{p^2}{4\lambda}
=\frac{p^2(3\lambda-2\theta)}{8\theta\lambda}.
\]

For \(p>0\), Arno is worse off if \(\theta>3\lambda/2\), indifferent at equality and better off if \(\lambda<\theta<3\lambda/2\). The original assumption \(\theta>\lambda\) alone does **not** settle the sign. Efficient production need not benefit both without compensation. The new total surplus is \(p^2(1/\theta+1/\lambda)/2\); the equal-sharing surplus is \(3p^2(1/\theta+1/\lambda)/8\), so the total gain is positive and can support compensation if transfers are feasible.

### 3. DQ 24.3: road contributions and the symmetric qualification

Individual utility is \(U_i=B(Q)-E_i\): monetary cost is linear, unlike the quadratic effort model. The planner sums benefits and costs:

\[
S=NB(Q)-\sum_iE_i=NB(Q)-Q.
\]

With respect to a contribution \(E_i\), \(\partial Q/\partial E_i=1\), so \(\partial S/\partial E_i=NB'(Q)-1\). Efficient total provision satisfies \(NB'(Q^*)=1\). Individually, holding others' contributions fixed, \(\partial U_i/\partial E_i=B'(Q)-1\); a positive contributor therefore sets \(B'(Q)=1\), with the usual nonnegative-corner condition for a noncontributor.

For \(B(Q)=\ln Q\), \(B'(Q)=1/Q\). Efficiency gives \(N/Q^*=1\), hence \(Q^*=N\). Voluntary equilibrium total is \(Q=1\). At a **symmetric** efficient allocation, every owner contributes one; at a symmetric Nash allocation, each contributes \(1/N\). This is the book's intended comparison.

Qualification: identical benefits and linear contribution cost determine **the total**, not a unique division. Any nonnegative contribution vector summing to one is a Nash equilibrium: a contributor optimizes at total one, and a zero contributor facing colleagues' total one has no incentive to add. Efficient allocations similarly need only sum to \(N\). Thus “each contributes exactly \(1/N\) of what they should” presumes symmetric allocations. Do not convert the book's symmetric illustration into a uniqueness theorem.

Concise answer: “Efficiency counts the road's benefits to all homeowners, giving \(NB'(Q)=1\); an individual counts only their own benefit, giving \(B'(Q)=1\). With log benefits the totals are \(N\) and one. Under symmetry this means contributions one and \(1/N\) per owner.”

### 4. DQ 24.6: solve the kink

Colleagues provide \(H=3.7\); the gap is \(5-3.7=1.3\). Positive effort below 1.3 produces no bonus and is worse than zero. Any effort above 1.3 costs more for the same bonus. Compare the two candidates:

\[
U(0)=0,\qquad U(1.3)=1-\frac{1.3^2}{2}
=1-\frac{1.69}{2}=0.155>0.
\]

Hence the optimum is \(E_5=1.3\). For a general shortfall, fill it if \(1-(5-H)^2/2\geq0\). Multiplying by two gives \((5-H)^2\leq2\). For \(H<5\), the shortfall is positive, so \(5-H\leq\sqrt2\), or \(H\geq5-\sqrt2\approx3.5858\). At equality both options are optimal. If colleagues already reach five, choose zero; if they are further away than this cutoff, also choose zero. No smooth interior optimum generates 1.3—the payment jump does.

Concise answer: “Supplying 1.3 exactly reaches the target and yields utility 0.155, above the zero-effort payoff. Making up the shortfall is worthwhile when colleagues contribute at least \(5-\sqrt2\), with indifference at the boundary.”

### 5. DQ 25.4: compare the marginal consequences

Tournament pay rewards relative performance, so helping a rival can reduce one's winning probability and sabotage can raise it; sharing knowledge may strengthen the rival. Team pay rewards joint output, so help and useful information can increase the helper's income, while sabotage can lower it. But under an additive sharing rule a person receives only part of their help's total benefit, so useful help can still be underprovided. Tournament rules can reward cooperation or constrain sabotage, and teams can face separate internal promotion contests: state the actual incentive environment rather than treating the organizational label as decisive.

Concise answer: “Relative-performance pay can make a colleague's success costly to a worker, discouraging help and encouraging sabotage. Joint-output pay makes coworkers' productive success beneficial to the worker and aligns helping incentives. Shared returns may still be too weak to induce all socially useful help.”

### 6. DQ 26.5: establish a leader, then followers

The question wants the strategic mechanism, not a claim that inequality itself motivates everyone. In the book example, equal \$4 rewards give a negative gain from working alone. A \$5 leader instead gains \(5(20)-90=10\), so works regardless of others. The \$4 worker gains \(4(25)-90=10\) knowing that leader works. The \$3 worker gains \(3(35)-90=15\) when both colleagues work. All-work becomes the unique pure equilibrium. Complementarity makes later participation increasingly valuable; without it, the last worker may remain unwilling. See the detailed production/pay assumptions above.

Concise answer: “Appropriate unequal bonuses can give one agent a dominant incentive to work. With complementary production, knowing that agent will work makes working worthwhile for the next agent and then the remaining agents. This can remove the low-effort equilibrium, provided the bonus and cost inequalities hold.”

### 7. DQ 27.1: change pay while keeping effort fixed

**(b) Full productivity pay.** Team income \(d_i\) equals solo income \(d_i\). There is no income-based adverse-selection incentive in this fixed-effort linear model; workers are indifferent between locations. Incumbents' own pay is unaffected by entrant ability, so they have no pay-based reason to exclude below-average entrants. This does not settle nonfinancial preferences or learning gains.

**(c) Partial productivity pay.** Subtract solo income:

\[
Y_i^{T}-d_i
=\gamma d_i+(1-\gamma)\bar d-d_i
=(1-\gamma)(\bar d-d_i).
\]

Since \(1-\gamma>0\), the sign remains the equal-sharing sign: below-average workers prefer the team, above-average workers prefer solo work. Greater \(\gamma\) reduces the size of the difference without changing its sign. Incumbent income changes by \((1-\gamma)(d-\bar d)/(N+1)\) upon admission, so incumbents still prefer an above-average entrant. At \(\gamma=1\), these motives disappear; at zero, equal sharing is recovered.

**Optional original (a), arbitrary unequal shares.** Given a team output \(Q\) and the applicant's assigned share \(\alpha_i\), compare \(\alpha_iQ\) with \(d_i\), not merely \(\bar d\). Among candidates with the same share and fixed colleagues' ability sum \(S\), team income is \(\alpha_i(S+d_i)\); joining instead of solo work is worthwhile if \(\alpha_iS>(1-\alpha_i)d_i\). For \(0<\alpha_i<1\), that still favours lower ability at a given share. Different randomly assigned shares mean the same mean-based cutoff does not apply to every person. Admission cannot be fully determined until the question specifies **how existing shares change when a new member joins**. If all incumbent shares scale down proportionately from \(\alpha_i\) to \(\alpha_iN/(N+1)\), the condition is again entrant ability above the old mean. If some incumbent shares are preserved while others are cut, incumbents need not agree. This explicitly resolves the under-specified membership comparison instead of inventing a unique rule.

### 8. New transfer: use revenue price and distinct costs

Equal sharing gives \(U_i=2(e_1+e_2+e_3)-c_ie_i^2/2\). Holding others fixed, \(2-c_ie_i=0\), so efforts are \((2,1,2/3)\). Revenue is \(6(2+1+2/3)=22\). Effort cost is

\[
\tfrac12(1)(2^2)+\tfrac12(2)(1^2)+\tfrac12(3)(2/3)^2
=2+1+2/3=11/3.
\]

Surplus is \(22-11/3=55/3\approx18.333\). Efficiency sets \(6-c_ie_i=0\), so efforts are \((6,3,2)\). Revenue is \(6(11)=66\); cost is \(18+9+6=33\), giving surplus 33. Private efforts are one third of efficient efforts, but surplus is not one third of efficient surplus because costs are quadratic. Paying effort-proportional shares makes income \(6e_i\) and restores efficient choices only if individual effort is verifiable and division can be committed to. It cannot be assumed in a pure team-output-only contracting problem.

## Revision targets

Derive additive-team effort, efficient effort and fixed-share effort; explain the budget breaker and its commitment problem; solve bonuses by comparing payoffs; distinguish binary weakest links from substitutes; demonstrate leadership with the actual marginal gains; and distinguish effort incentives from fixed-effort selection. F24 trains only part of the assigned block. Chapters 25–27 still need substantial verbal preparation and their own practice even without a matching past-paper question.
