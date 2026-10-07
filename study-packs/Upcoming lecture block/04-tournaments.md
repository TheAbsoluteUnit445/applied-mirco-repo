# 4. Competition in the workplace: tournaments

**PER-TOURN**, with an explicitly labelled **PER-NONCLASS** bridge. Scheduled lecture: 7 October 2026. This module covers Kuhn chapters 20–23, including their extensions; the exam derivation alone is not the whole topic. [Return to index](index.md).

The central question is how a firm can motivate several workers when it can compare their performance more easily than it can measure each person's exact contribution. A tournament promises a reward for doing better than competitors. A promotion raise can therefore motivate employees before they receive it. The reward need not equal the winner's productivity in the new job. Kuhn opens with grading on a curve and competition for promotion, then asks when rank rewards can match individual performance pay. [Kuhn 20.1, “The Basic Elements of a Two-Player Tournament,” PDF 364–366](<../../Textbooks/Personnel Economics.pdf#page=364>).

## Evidence and study route

| Coverage | Source and PDF pages | Current lecture/tutorial coverage | Exam evidence | Study use |
|---|---|---|---|---|
| Basic tournament: probability, effort, efficiency, prizes, participation | Kuhn 20.1–20.6, 364–375 | Existing repository [competition lecture notes](<../../Personnel Economics (Dur)/Lectures/Interactive lectures/competition/lecture-notes.md>); Topic 8.1–8.2, sheet 1–2 / answers 4 | Final **24 October 2025**, Q3a–d, **10 marks: 2+3+2+3**, solution PDF 7–8 | First priority for derivations; solve a full chain without notes |
| Many players, stages, common shocks and broilers | Kuhn 20.7–20.9, 375–387 | Existing repository lectures | No direct question identified in the inspected four finals/resits | Substantial assigned theory; learn mechanisms and assumptions |
| Sabotage, collusion, risk choice | Kuhn 21.1–21.3, 390–407; DQs 408–409 | Topic 8.3, sheet 2 / answer 4 | No direct question identified in that set | Explain why stronger incentives can reduce useful output |
| Uneven contests, fairness, leagues, handicaps, promotion ladders | Kuhn 22.1–22.4, 411–432; DQs 433 | Existing repository competition lecture | No direct question identified in that set | Know one-shot result and why multistage exceptions matter |
| Who enters: ability, risk, confidence, gender and context | Kuhn 23.1–23.2, 436–444; DQs 445 | Existing repository competition lecture | No direct question identified in that set | Separate selection from effort; preserve empirical qualifications |
| Relative-income bridge, not an assigned ch. 20–23 model | Earlier PER-NONCLASS; Topic 8.4, sheet 2–3 / answer 5 | Current Topic 8.4 | Resit **7 July 2026**, Q5a–c, **6 marks: 2+2+2**, solution PDF 12–13 | Externality/corner practice; do not call it tournament evidence |

Historical occurrence and question size differ: the inspected four-paper finals/resits set has one direct tournament block, F25 Q3 worth 10 marks (16.7% of its 60-mark exam). This is an observation about those papers, not a probability for the next exam. Chapter coverage gives reasons to study untested mechanisms too. The old “no exercise set yet” claim in [PER-TOURN map](<../../map/topics/PER-TOURN.md>) is obsolete: [Topic 8 PDF](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=1>) is present. Only original Dur lecture files 1–3 were found; later competition material is repository-authored, so its coverage cannot establish what Dur actually said on 7 October. See [audit](tournament-audit.md).

Prerequisites are expected utility (average utility over possible outcomes), differentiation with respect to one's own choice, a participation constraint (the job must be at least as attractive as the outside option), and Nash equilibrium (each choice is a best response to the others). We introduce these where used. Study sections 1–4 first, then the caveats, then attempt the practice before opening the solutions.

## 1. From performance to a chance of promotion

Two workers choose nonnegative effort $E_1,E_2$. Measured output is $Q_i=dE_i+\varepsilon_i$, where $d>0$ is common productivity and $\varepsilon_i$ is luck with mean zero. Each worker is risk neutral: a random euro is valued at its expected monetary amount. Effort costs $E_i^2/2$ in money-equivalent utility. The firm announces loser pay $a$ and winner pay $a+S$, with prize spread $S\geq0$, before effort is chosen. The higher measured output wins; continuous luck makes exact ties probability zero. Workers choose effort, not the luck realization or contract. [Kuhn 20.1–20.3, PDF 364–370](<../../Textbooks/Personnel Economics.pdf#page=364>).

Intuitively, extra effort buys a better chance of the prize, not a guaranteed payment per output unit. It helps only when it can change the ranking. To calculate that chance, rearrange the winning condition:

\[
Q_1>Q_2
\iff dE_1+\varepsilon_1>dE_2+\varepsilon_2
\iff d(E_1-E_2)>\varepsilon_2-\varepsilon_1.
\]

Define relative luck $\varepsilon=\varepsilon_2-\varepsilon_1$. Kuhn assumes this difference is uniform on $[-R/2,R/2]$, where **$R$ here means the width of relative luck**, not output price. This is an assumption about the difference; two independently uniform individual shocks do not generally have a uniform difference. Density is $\alpha=1/R$: probabilities are areas, so density times interval width equals probability. For a threshold $x$ inside the interval,

\[
\Pr(\varepsilon<x)=\frac{x-(-R/2)}R
=\frac{x+R/2}R=\frac12+\frac xR.
\]

Put $x=d(E_1-E_2)$. The globally valid probability is

\[
p_1=\begin{cases}
0,&d(E_1-E_2)\leq-R/2,\\
\frac12+\alpha d(E_1-E_2),&|d(E_1-E_2)|<R/2,\\
1,&d(E_1-E_2)\geq R/2.
\end{cases}
\]

The graph has own effort on the horizontal axis and winning probability on the vertical axis. It is flat at zero, increases between two kinks, and is flat at one. A higher rival effort shifts the graph right. A greater noise range flattens its middle segment. Inside that segment, $\partial p_1/\partial E_1=\alpha d$ and $\partial p_1/\partial E_2=-\alpha d$. Outside it, extra effort does not change winning probability. [Kuhn 20.2, Result 20.1 and Figures 20.1–20.2, PDF 366–369; full probability graph in 22.1, PDF 411–412](<../../Textbooks/Personnel Economics.pdf#page=366>).

With equal effort, each wins half the time whether both work a little or a lot. **Fairness** means equal chances for equal measured output; **symmetry** adds equal productivity and effort costs. Fair rules do not make differently able workers equally competitive. [Kuhn definitions 20.1–20.2, PDF 369](<../../Textbooks/Personnel Economics.pdf#page=369>).

**Exam-ready:** “Effort increases expected performance relative to the rival, raising the probability of winning. More precise measurement makes a given effort difference more likely to affect the ranking.” Do not report probability above one, equate density with probability, or differentiate with respect to both workers' effort when solving one worker's choice.

## 2. Incentives, equilibrium and the probability-bound caveat

The worker values the salary in either outcome and the extra reward only when winning. Expand expected utility before differentiating:

\[
EU_i=p_i(a+S)+(1-p_i)a-\frac{E_i^2}2
=p_i a+p_i S+a-p_i a-\frac{E_i^2}2
=a+p_i S-\frac{E_i^2}2.
\]

Inside the linear probability region,

\[
EU_i=a+\left[\frac12+\alpha d(E_i-E_j)\right]S-\frac{E_i^2}2.
\]

Differentiate with respect to **own $E_i$** holding $a,S,d,\alpha,E_j$ fixed:

\[
\frac{\partial EU_i}{\partial E_i}=\alpha dS-E_i,
\qquad \frac{\partial^2EU_i}{\partial E_i^2}=-1.
\]

The interior optimum satisfies $E_i=\alpha dS$: the extra probability per effort unit times the prize equals marginal effort cost. Increasing base pay gives money in both states and therefore does not alter the marginal prize benefit. A larger spread, higher productivity or greater precision raises interior effort. With symmetric workers both choose the same effort; their effort difference is zero, and $p_i=1/2$. Luck determines the winner after the incentive has made both work. Giving both the expected prize for sure would remove the incentive and produce zero effort. [Kuhn 20.3, Result 20.2, PDF 369–370](<../../Textbooks/Personnel Economics.pdf#page=369>).

This simple first-order condition omits the rival's effort because the middle slope is constant. For a general cumulative distribution $F$, with density $f=F'$,

\[
p_i=F(d(E_i-E_j)),\qquad
\frac{\partial EU_i}{\partial E_i}=Sdf(d(E_i-E_j))-E_i.
\]

Now marginal benefit depends on the effort gap; workers must predict rival behavior. In a Nash equilibrium nobody can gain by changing their own effort alone. The book explains why this strategic problem can make behavior more variable than equivalent piece rates. Do not extrapolate the uniform middle-segment “dominant strategy” claim to arbitrary luck distributions. [Kuhn 20.6, Result 20.5, PDF 374–375](<../../Textbooks/Personnel Economics.pdf#page=374>).

### A necessary global check that the simple presentation suppresses

Even with uniform luck, the interior derivative is not a global proof once probabilities saturate. The following is an **independent extension of the textbook derivation**, included to make the corner issue explicit. Let $k=d/R$, proposed symmetric effort $e=kS$, and half-width in effort units $L=R/(2d)$. At the proposed equilibrium expected utility is $a+S/2-e^2/2$. If $e>L$, choosing zero guarantees losing but gives utility $a$. Avoiding this deviation requires

\[
a+\frac S2-\frac{e^2}2\geq a
\iff e^2\leq S
\iff d^2S\leq R^2.
\]

If $e\leq L$, zero remains inside the middle segment and its comparison is already covered by the concave quadratic. In the sure-loss region the best effort is zero; in the sure-win region it is the minimum effort that reaches that region. The middle quadratic is maximized at $e$; its adjacent kink values are no better. Thus $d^2S\leq R^2$ is the condition for this symmetric interior candidate to survive global deviations (for $S>0$). For the efficient spread $S=R$, it becomes $R\geq d^2$.

Kuhn 20.6's numerical example uses $d=4,\alpha=0.1,S=10,a=9$. Its interior computation gives $e=4$, expected pay 14 and utility $14-8=6$. Under the **fully bounded** probability, a deviation to zero gives $p=0$ and utility 9. Preserve the book's interior calculation, but do not describe this numerical configuration as a verified global Nash equilibrium. This is a limitation of extending its linear probability formula outside the support, not a license to change the official exam algebra. [Kuhn 20.6 example, PDF 373–374](<../../Textbooks/Personnel Economics.pdf#page=373>).

**Exam-ready:** “The worker balances the expected promotion reward from extra effort against the extra effort cost. Equal incentives imply equal equilibrium effort and hence equal winning probabilities.” For an explicit bounded model add: “The stationary point must also beat the feasible boundary and zero-effort choices.”

## 3. Efficient effort, the optimal spread and participation

Efficient effort asks a different question: does an extra output unit justify the effort cost, regardless of who receives the money? Normalize output price to one in this book model. Expected firm profit is

\[
E\Pi=dE_1+dE_2-2a-S.
\]

Exactly one prize is paid. Add both workers' utilities. Since $p_1+p_2=1$, all wage transfers cancel:

\[
TS=d(E_1+E_2)-2a-S
+[a+p_1S-E_1^2/2]+[a+p_2S-E_2^2/2]
=d(E_1+E_2)-\frac{E_1^2+E_2^2}2.
\]

Here $TS$ is total surplus, not revenue. Differentiate with respect to each worker's effort:

\[
\frac{\partial TS}{\partial E_i}=d-E_i=0\quad\Rightarrow\quad E_i^*=d.
\]

The second derivative is $-1$, and with $d>0$ the nonnegative constraint does not bind. To induce efficient effort using the **interior** response,

\[
\alpha d S^*=d\quad\Rightarrow\quad S^*=1/\alpha=R.
\]

A noisier ranking needs more at stake to make extra effort equally worthwhile. This conclusion uses risk neutrality and unrestricted contract adjustments; with risk aversion a larger spread can be costly because it raises earnings risk. For the globally clipped model also apply $R\geq d^2$ above. [Kuhn 20.4–20.5, PDF 370–373](<../../Textbooks/Personnel Economics.pdf#page=370>).

The base salary determines whether workers accept and who receives the surplus. Let $\bar U$ be the outside utility in this one-period book model. At symmetry the participation constraint is

\[
a+S/2-E^2/2\geq\bar U.
\]

A firm minimizing its wage bill sets it at equality:

\[
a=\bar U-S/2+E^2/2.
\]

Expected pay $a+S/2$ exceeds utility by the effort cost; they are not interchangeable. Negative $a$ is possible mathematically if workers pay for access to a valuable contest. A minimum wage or limited liability would add a constraint; it is not part of this unconstrained calculation. [Kuhn 20.5–20.6, PDF 372–374](<../../Textbooks/Personnel Economics.pdf#page=372>).

For comparison, an individual piece rate $Y_i=a_0+bQ_i$ gives utility $a_0+bdE_i-E_i^2/2$. Differentiating gives $E_i=bd$, so $b=1$ implements $E_i=d$. Choosing $a_0$ can then match expected utility and profit. In the baseline risk-neutral interior framework, well-designed tournaments and piece rates can produce the same surplus and distribution. Rank measurement can be cheaper than measuring exact output, but that is an additional monitoring advantage, not evidence that a tournament produces more output in this equivalence model. [Kuhn 20.6, Result 20.4, PDF 373–375](<../../Textbooks/Personnel Economics.pdf#page=373>).

**Exam-ready:** “Efficient effort equates marginal output value with marginal effort cost. The prize spread sets incentives, while base pay meets the participation constraint and divides the resulting surplus.” Common mistakes are counting wages as a social loss, forgetting the outside option, or optimizing base pay before deriving effort.

## 4. The course's two-period model: outsider probability and pride are different

Tutorial 8.2 and F25 Q3 use a promotion between two periods. Redefine symbols here: $W$ is **base salary per period**, $Z\geq0$ is the financial promotion increment, $\pi>0$ is the probability slope (not profit), $\Theta>0$ or the exam's $\theta>0$ is the effort-cost coefficient, and $V$ is outside utility **per period**. Lowercase $e_i$ is first-period effort. Period 2 requires no effort. In F25 there is also no period-2 production. The worker earns $W$ twice and the promoted worker adds $Z$. Conditional on an internal promotion,

\[
p_i=1/2+\pi(e_i-e_j).
\]

### Outsiders dilute the chance that effort pays

Tutorial 8.2 lets an outsider receive the job with probability $\rho\in[0,1]$. Internal workers then both keep $W$. Define $q=1-\rho$. The **unconditional** promotion probability is $qp_i$; $p_i$ is conditional on an internal appointment. Expected utility is

\[
EU_i=2W+q[1/2+\pi(e_i-e_j)]Z-\Theta e_i^2/2.
\]

Differentiating in $e_i$, holding the rival's effort and contract fixed, gives

\[
q\pi Z-\Theta e_i=0\quad\Rightarrow\quad
e=q\pi Z/\Theta.
\]

The outsider does not reduce the prize if an internal worker wins; it reduces the chance that internal effort affects who gets it. Symmetric workers have conditional probability $1/2$, unconditional probability $q/2$, and combined internal probability $q$. At $\rho=1$, the promotion incentive disappears and $e=0$. [Tutorial 8.2a–c, questions PDF 1–2; answers PDF 4](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=1>).

At the binding two-period participation constraint,

\[
2W+qZ/2-\Theta e^2/2=2V,
\]
\[
2W=2V-qZ/2+\Theta e^2/2,
\qquad
W=V-qZ/4+\frac{q^2\pi^2Z^2}{4\Theta}.
\]

For a change in $\rho$ **holding $Z$ fixed**, use $dq/d\rho=-1$:

\[
\frac{dW}{d\rho}=\frac Z4-\frac{q\pi^2Z^2}{2\Theta}.
\]

A greater outsider chance makes the job less attractive by reducing expected promotion income, so the compensating base salary rises through that channel. It also lowers effort and its unpleasant cost, so less base salary is needed through that channel. The total sign is ambiguous. This is compensation for lost expected utility, not an income-effect model with concave utility from money. [Tutorial 8.2d, PDF 2 and 4](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=4>).

Set $\rho=0$, as part (e) instructs. **$R$ now denotes revenue per effort unit**, not luck range. The firm's profit from two workers is $\Pi=2Re-4W-Z$: four base salary payments, one increment. Substitute $e=\pi Z/\Theta$ and $W=V-Z/4+\pi^2Z^2/(4\Theta)$:

\[
\Pi=2R\frac{\pi Z}{\Theta}-4\left(V-\frac Z4+\frac{\pi^2Z^2}{4\Theta}\right)-Z
=\frac{2R\pi Z}{\Theta}-4V+Z-\frac{\pi^2Z^2}{\Theta}-Z
=\frac{2R\pi Z-\pi^2Z^2}{\Theta}-4V.
\]
\[
\frac{d\Pi}{dZ}=\frac{2R\pi-2\pi^2Z}{\Theta}=0
\Rightarrow Z^*=R/\pi,
\qquad \frac{d^2\Pi}{dZ^2}=-2\pi^2/\Theta<0.
\]

Then $e^*=R/\Theta$, which equates marginal revenue $R$ and marginal effort cost $\Theta e$. The firm's prize creates incentives; the salary offsets expected rewards and effort costs. [Tutorial 8.2e, PDF 2 and 4](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=4>).

### Pride adds to the value of winning

F25 Q3 replaces the outsider extension with nonmonetary pride $P\geq0$ on promotion. Pride is utility received **conditional on winning**, not an unconditional probability or a salary payment. There is no outsider in this question. Effective promotion reward is $A=Z+P$, giving

\[
EU_i=2W+[1/2+\pi(e_i-e_j)]A-\theta e_i^2/2,
\quad e=\pi A/\theta,
\quad W=V-A/4+\pi^2A^2/(4\theta).
\]

Holding financial prize $Z$ fixed, higher pride raises promotion utility directly but induces harder work and higher effort cost. It can therefore lower or raise the required salary. Once the firm **reoptimizes** the cash prize, it can replace cash by pride: the unconstrained optimum is $Z^*=R/\pi-P$. These are different comparative-statics questions. Full official grading and intermediate algebra appear in the solutions below. [Final 24 October 2025 Q3, 10 marks, PDF 7–8](<../../Past exams/Finals/2025-10 Final (with solutions).pdf#page=7>).

**Exam-ready:** “An outsider appointment weakens the link between internal effort and promotion, so workers work less. Pride increases the utility reward from promotion and strengthens effort incentives.” Never insert $1-\rho$ in the pride question or put $P$ in the firm's wage bill.

## 5. Why relative rewards can help: common shocks, comparison and stages

Suppose a bad market harms every worker. With $Q_i=dE_i+C+u_i$, $C$ is a common shock and $u_i$ individual luck. In the difference,

\[
Q_i-Q_j=d(E_i-E_j)+(C-C)+(u_i-u_j)
=d(E_i-E_j)+u_i-u_j.
\]

The common shock cancels; the winner's income does not fall just because everybody had a bad season. Individual pay $a_0+bQ_i$, however, transmits $bC$ to income. This insurance can benefit risk-averse workers and reduce the pay needed to secure participation. It requires comparable exposure: if one salesperson serves a booming region and another a depressed one, their shocks do not cancel. The ranking still exposes a worker to the rival's unpredictable performance. A two-prize income distribution is bounded, unlike some piece-rate distributions, so neither contract is universally riskier. [Kuhn 20.8, Results 20.9–20.10, PDF 381–385](<../../Textbooks/Personnel Economics.pdf#page=381>).

The book's broiler example involves independent chicken growers contracted by large firms. Relative cost/performance comparisons help absorb common inputs and production conditions. They also permit experimentation with new methods without forcing growers' compensation to bear all common consequences, reduce repeated piece-rate adjustments after innovations, and remove gains from systematically understating everyone's measured performance when rankings are unchanged. These advantages depend on the specific comparison and payment scheme; they do not prevent manipulating one person's ranking or sabotage. [Kuhn 20.9, “The Market for Broilers,” Result 20.11, PDF 385–387](<../../Textbooks/Personnel Economics.pdf#page=385>).

A continuous relative scheme, such as $Y_i=a+b(Q_i-Q_j)$, rewards an output gap smoothly instead of awarding a discrete prize. Holding the rival fixed, its marginal incentive is $bd$; a common shock again cancels. If the benchmark is the group mean including oneself, $Y_i=a+b(Q_i-\bar Q)$, own output also raises the benchmark. With $N$ workers, $\partial(Q_i-\bar Q)/\partial E_i=d(1-1/N)$, rather than $d$. This last derivative is an independently supplied explanation of why the benchmark's definition matters. [Kuhn 20.7, definition 20.7, PDF 380–381](<../../Textbooks/Personnel Economics.pdf#page=380>).

Adding competitors for a fixed single prize has opposing effects. Each symmetric worker's level probability falls from (1/N) to (1/(N+1)), but the strength of competition can make extra effort more important. The incentive depends on the **derivative** of winning probability, not its level alone. Thus “more competitors always reduce effort” does not follow from a smaller chance of winning. Prize structure matters too: if a superstar effectively removes the top prize from contention, runner-up prizes can preserve incentives among the rest. [Kuhn 20.7, Result 20.6, PDF 375–376](<../../Textbooks/Personnel Economics.pdf#page=375>).

Sequential contests reveal some earlier actions or luck before later decisions. A worker who falls far behind may give up; one far ahead can coast. Even initially identical contestants become uneven after observed luck. Interim feedback can therefore reduce effort when it reveals that the contest is effectively decided, although feedback can also improve decisions in other settings. An elimination contest additionally makes winning an early stage valuable because it provides access to later prizes: this **option value** is part of today's effective reward. At the very top there is no further promotion option, providing one reason large final cash increments can be needed. It is a theory of incentives, not a complete justification of all CEO pay. [Kuhn 20.7, Results 20.7–20.8 and promotion-ladder example, PDF 377–380](<../../Textbooks/Personnel Economics.pdf#page=377>).

**Exam-ready:** “Relative pay insures workers against shocks shared by the comparison group because those shocks do not change relative performance. It still exposes them to individual and rival-specific uncertainty.”

## 6. Destructive incentives: sabotage, collusion and risk choice

### Sabotage and withheld help

When pay depends on beating colleagues, lowering a rival's measured output can be as useful privately as increasing one's own output. Helping the rival can reduce one's chance of winning. Both responses can harm useful firm production. Kuhn's Carpenter, Matthews and Schirm envelope-stuffing experiment compares individual pay, a tournament without peer evaluation, and a tournament with peer evaluation. Workers could underreport others' quantity/quality in the last treatment. Sabotage targeted stronger rivals; anticipated sabotage reduced effort and objectively measured output. Employer profit fell, worker utility rose (more prize money and less effort), and their sum fell. The worker benefit did not offset the firm's loss. These are the results of this experiment, not an assertion that every tournament must have these effects. [Kuhn 21.1, Results 21.1–21.4, PDF 390–398](<../../Textbooks/Personnel Economics.pdf#page=390>).

An **own teaching model**, not a textbook equation, makes the private/social distinction clear. Let sabotage $s_i\geq0$ lower rival output by $s_i$, and cost $c s_i^2/2$, $c>0$. Then $Q_i=dE_i-s_j+\varepsilon_i$. In the interior rank formula,

\[
EU_i=a+\left[\frac12+\frac{d(E_i-E_j)+s_i-s_j}{R}\right]S
-E_i^2/2-cs_i^2/2.
\]

Holding the rival fixed, $\partial EU_i/\partial s_i=S/R-cs_i$, so $s_i=S/(cR)$. Yet total expected output is $d(E_i+E_j)-s_i-s_j$: sabotage destroys output. Total surplus includes the loss $-s_i-s_j$ and the sabotage resource cost; its derivative in $s_i$ is $-1-cs_i<0$. Efficient sabotage is the corner $s_i=0$. The model illustrates why a privately rewarded action can be socially wasteful; it does not reproduce the experimental mechanism of anticipated biased peer evaluations.

Independent appraisal, restricting access to others' work, and rewarding cooperation can reduce destructive behavior. Each requires workable measurement or enforcement; bigger prizes can intensify sabotage. **Exam-ready:** “A rank prize rewards improving one's rank, which can be achieved by harming colleagues as well as improving one's own work. Anticipated sabotage can also lower the return to productive effort.”

### Collusion to work less

If all contestants reduce effort by the same amount, their rankings and winning chances can remain unchanged. They save effort costs while the employer loses output. But an individual can privately gain by breaking the agreement and working harder, so low-effort collusion requires enforcement or concern for others. [Kuhn 21.2, PDF 399–403](<../../Textbooks/Personnel Economics.pdf#page=399>).

In the symmetric model, a common reduction from $E$ to (E-t), $0\leq t\leq E$, preserves $p=1/2$. Each worker's utility gain is

\[
\frac{E^2-(E-t)^2}{2}
=\frac{E^2-[E^2-2Et+t^2]}2=Et-t^2/2>0\quad(t>0).
\]

This is a joint change; it does not mean (E-t) is a Nash equilibrium. Against a rival at (E-t), the original interior best response is still $\alpha dS=E$. Observable performance, repeated interaction and credible punishment can help sustain an agreement; large anonymous groups make it harder. The book's Bandiera et al. fruit-farm evidence concerns a relative incentive formula, not simply a fixed winner-take-all prize. Workers performed better after the shift to individual piece rates; relative-pay restraint was stronger when coworkers knew one another and could observe output. [Kuhn 21.2, Result 21.5, PDF 400–403](<../../Textbooks/Personnel Economics.pdf#page=400>).

**Exam-ready:** “A common reduction in effort can preserve everyone's relative position while lowering everyone's effort cost. Collusion is easier to maintain when workers can observe deviations and have ongoing relationships.”

### Winning by luck rather than productive work

A worker behind in a contest may choose a riskier project even without raising expected output. Increasing the variance creates a chance of a lucky upset. A leader can prefer reducing risk to protect an existing lead. A greater variance is not the same as a higher expected output, and increasing noise is not equally attractive to leaders and laggards. [Kuhn 21.3, Result 21.6, PDF 404–405](<../../Textbooks/Personnel Economics.pdf#page=404>).

For intuition, an **own explanatory normal-noise model** holds mean performance gap $x$ fixed and lets relative luck have standard deviation $\sigma>0$. Then $p=\Phi(x/\sigma)$, where $\Phi$ is the standard normal cumulative probability and $\phi=\Phi'$ its density. Differentiate with respect to $\sigma$:

\[
\frac{\partial p}{\partial\sigma}=\phi(x/\sigma)\left(-\frac{x}{\sigma^2}\right).
\]

For a laggard $x<0$, this is positive: more noise raises the chance of winning toward one half. For a leader $x>0$, it is negative. At $x=0$, it is zero. A costly risk action is worthwhile only if its extra expected prize utility exceeds its cost; higher variance need not be efficient or acceptable to a risk-averse investor.

Kuhn's Brown, Harlow and Starks mutual-fund study reports managers behind at midyear actively selling safe assets and buying **riskier** assets; increases were especially strong among younger managers without an established record. [Kuhn 21.3, Result 21.7, PDF 405–407](<../../Textbooks/Personnel Economics.pdf#page=405>). Tutorial 8.3b's last clause instead says buying “low-risk stocks.” This contradicts its own risk-increase explanation and the book; the original remains intact and the study pack follows the book. [Tutorial answer PDF 4](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=4>).

**Exam-ready:** “A lagging manager can improve the chance of finishing first by increasing portfolio risk, even if expected return does not increase. This can replace productive effort with gambling for a lucky outcome.”

## 7. Uneven contests: why both the favorite and the outsider can ease off

Fair rules can produce unequal chances when contestants differ in ability; unfair rules can do so even when ability is equal. What matters for effort is whether extra effort can change winning probability. A dominant favorite can win without trying very hard; a weak contestant may be unable to catch up even with extra work. Both can have weak marginal incentives. [Kuhn 22.1, Result 22.1, PDF 411–414](<../../Textbooks/Personnel Economics.pdf#page=411>).

An **own smooth illustration** separates the mechanism from the uniform constant-slope simplification. Let expected advantage be $x=d_iE_i-d_jE_j-h$, where $h\geq0$ is a handicap imposed on worker $i$, and luck standard deviation is $\sigma$. Then $p_i=\Phi(x/\sigma)$ and

\[
\frac{\partial p_i}{\partial E_i}=\frac{d_i}{\sigma}\phi(x/\sigma),\qquad
\frac{\partial p_j}{\partial E_j}=\frac{d_j}{\sigma}\phi(x/\sigma).
\]

Density is largest near $x=0$ and small in either tail. Thus a huge advantage can weaken both workers' probability response. With quadratic costs their interior conditions are $Sd_i\phi(x/\sigma)/\sigma=E_i$ and $Sd_j\phi(x/\sigma)/\sigma=E_j$. A closer contest can increase marginal prize benefits, though productivity differences, costs and equilibrium adjustments still matter. The book's qualitative asymmetric result cannot be mechanically derived by using its uniform slope in the middle forever.

Leagues group similarly able contestants. Handicaps instead offset an existing advantage, requiring a stronger worker to win by a margin. Such measures can strengthen both participants' effort incentives in the fixed-prize one-shot setting. For equally able workers, introducing bias moves a balanced contest away from the steep region and can harm both effort and perceived fairness. The handicap recommendation is about incentives, not a universal rule for whom to promote: changing the winner can reduce efficient assignment to the next job or create morale costs. [Kuhn 22.3, Results 22.3–22.5, PDF 417–421](<../../Textbooks/Personnel Economics.pdf#page=417>).

The book's professional-golf evidence illustrates the superstar mechanism: rivals performed worse with Tiger Woods present. But the boxed Result 22.2 on PDF 416 mistakenly says worse when he was **absent**. The preceding paragraph and the adjoining explanation on PDF 416–417 give the consistent present-worse direction. The book discusses field conditions, nonrandom attendance and psychological-pressure alternatives; observational evidence needs those qualifications. [Kuhn 22.2, PDF 414–417](<../../Textbooks/Personnel Economics.pdf#page=414>). The audit preserves this internal contradiction rather than quoting the box as correct.

**Exam-ready:** “In an uneven contest the favorite is likely to win without extra effort, while the weaker worker is unlikely to win even with it. Making the contest closer can strengthen both workers' incentives when the prize is fixed.”

### Promotion ladders qualify the one-shot rule

Kuhn 22.4 studies several distinct purposes of contests. Do not treat “homogeneous groups are always best” as a theorem across them. [Kuhn 22.4, PDF 421–432](<../../Textbooks/Personnel Economics.pdf#page=421>).

In Rosen's **symmetric ignorance** case, ability differs but nobody initially knows who is best. Winners advance and information accumulates; survivors become more similar at high ranks. Prize increments that maintain effort differ from those in a known-identical-worker ladder: relative to that benchmark, they are smaller near the bottom and top and larger in the middle. This incorporates learning, not just the loss of option value at the last stage. [Result 22.6, PDF 421–424](<../../Textbooks/Personnel Economics.pdf#page=421>).

In Meyer's **selection contest**, workers supply fixed effort and higher managers can attend only to coarse win counts. Biasing later comparisons against early laggards can make only a sufficiently informative upset reach upper management. The purpose is efficient transmission of information about ability, rather than maximizing effort. This explains why its recommendation differs from handicapping the strong worker in a one-shot incentive contest. [Result 22.7, PDF 425–427](<../../Textbooks/Personnel Economics.pdf#page=425>).

In **market-based tournaments**, promotion changes outside employers' beliefs and wage offers. A weaker worker unexpectedly beating a strong one reveals much more than one apparently identical worker beating another. Informative upsets can create large market rewards and losses, motivating mixed groups. The employer does not freely hold the spread fixed; the labor market partly determines it. [Result 22.8, PDF 427–428](<../../Textbooks/Personnel Economics.pdf#page=427>).

In Stracke and Sunde's **elimination-pool example**, eight workers comprise four high-ability $H$ and four low-ability $L$ workers. Separate HHHH and LLLL pools always produce one winner of each type. Mixed HHLL pools with HH and LL opening matches lead to HL finals. High types now have more valuable access to the final because their later rival is likely weaker; low types have less valuable access. Extra early effort by high types can outweigh lost effort by low types and lower effort in uneven finals. Mixed finals also make two high-type overall winners more likely. These are conditional possibilities, not universal dominance of mixing. **Pools** decide who can ever meet; **seeding** decides who meets first within a pool. [Results 22.9–22.10, PDF 429–432](<../../Textbooks/Personnel Economics.pdf#page=429>).

**Exam-ready:** “Equalizing contestants can improve effort in a fixed-prize one-shot contest. In promotion ladders, learning, future opportunities and market-determined prizes can change the optimal grouping.”

## 8. Who chooses competition? Incentives and selection are separate

Changing pay can change how existing workers behave and which workers enter. A large-prize workplace may have high measured output because it attracts strong workers, because it motivates effort, or both. Kuhn's Leuven et al. classroom experiment let students enter competitions with €1,000, €3,000 or €5,000 prizes. Better students selected higher prizes; average grades were higher there, but the discussed performance difference was entirely selection rather than greater effort. Therefore a raw performance comparison does not identify the incentive effect. [Kuhn 23.1, PDF 436–439](<../../Textbooks/Personnel Economics.pdf#page=436>).

For a given prize, tournament entry is more attractive to workers who enjoy competition, respond well to it, or believe they are relatively able. Perceived ability need not equal true ability. Overconfidence can cause entry even when an individual would earn more under a safe contract. Risk aversion discourages entry when rival and individual risk dominate, but common-shock insurance can make relative pay attractive to risk-averse workers. The cited laboratory entry studies generally found greater risk aversion deterred entry; that empirical finding is compatible with the model's conditional prediction. [Kuhn Results 23.1–23.2, PDF 437–439](<../../Textbooks/Personnel Economics.pdf#page=437>).

An **own constructed selection calculation** fixes effort costs across pay schemes to isolate beliefs. Safe pay is 14; a tournament pays 40 on winning and zero otherwise. A risk-neutral worker with perceived success probability $\hat p$ enters if $40\hat p\geq14$, hence $\hat p\geq0.35$. With true $p=0.25$ but belief $\hat p=0.6$, perceived pay is 24 but actual expected pay is 10. Risk aversion can raise the entry hurdle; competition enjoyment can lower it. These numbers are illustrative, not the textbook experiment.

Kuhn's Niederle and Vesterlund experiment concerns four-student groups performing addition tasks. Men and women performed similarly on the task; 73% of men and 35% of women selected tournament pay in the described choice stage. Differences in measured ability, response to competition and risk aversion could not explain the gap; confidence and preferences for competition accounted for the main differences discussed. The book warns against basing personnel decisions on a single student experiment. These are findings about a setting and populations, not fixed properties of all men or women. [Kuhn 23.2, Result 23.3, PDF 439–442](<../../Textbooks/Personnel Economics.pdf#page=439>).

Information and culture can change patterns. Kuhn discusses feedback about actual relative performance reducing an entry gap in Wozniak et al., and the Gneezy et al. comparison in which women in a matrilineal society entered competition more than men. The evidence qualifies simple biological or universal accounts. Assess actual ability and context rather than using a demographic entry average as an individual hiring rule. [Kuhn 23.2, Result 23.4, PDF 442–444](<../../Textbooks/Personnel Economics.pdf#page=442>).

**Exam-ready:** “Tournament pay affects both effort and selection into the workplace. Higher output among tournament participants need not establish stronger effort incentives, because participants can differ in ability and beliefs.”

## 9. Relative-income bridge: an externality, not a promotion tournament

**PER-NONCLASS bridge only.** R26 Q5 and tutorial 8.4 have no promotion probability or fixed prize. Instead one person's higher income directly lowers the other person's utility. Let $w>0$ be hourly pay; $h_A,h_B\geq0$ work hours; and $\mu>0$ concern for relative income:

\[
U_A=wh_A+\mu(wh_A-wh_B)-h_A^2,
\qquad U_B=wh_B+\mu(wh_B-wh_A)-h_B^2.
\]

Each chooses own hours holding the other fixed. Expand $U_A=(1+\mu)wh_A-\mu wh_B-h_A^2$. Its derivative is $(1+\mu)w-2h_A$, giving $h_A^N=h_B^N=(1+\mu)w/2$. An extra hour benefits Astrid through money and relative standing; it also harms Bella through relative standing, which Astrid's private choice ignores. This harm to another is an externality. [Resit 7 July 2026 Q5a, 2 marks, PDF 12](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf#page=12>).

Joint maximization cancels status terms:

\[
U_A+U_B=wh_A+wh_B+\mu(wh_A-wh_B+wh_B-wh_A)-h_A^2-h_B^2
=w(h_A+h_B)-h_A^2-h_B^2.
\]

Now each derivative is $w-2h_i$, so $h_A^J=h_B^J=w/2$. At equal hours relative utility is zero in either allocation. Both work excessively in the independent equilibrium merely to avoid falling behind; the extra effort creates no net status gain. Full utility comparison and a tax kink are solved below. [R26 Q5b, 2 marks, PDF 12; Topic 8.4a–c, questions PDF 2, answers PDF 5](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf#page=12>).

**Exam-ready:** “Each sister works partly to improve her income relative to the other, ignoring the loss this causes the other sister. Joint choice internalizes that harm, so both work less and are better off.” This does not imply competitive workplace effort is always inefficient: the earlier employer model counts output benefits as well as worker costs.

## Attempt first: a manageable practice sequence

Stop here until you have tried the questions. Original sources remain the authoritative question wording; the prompts below are faithful study paraphrases.

1. **Prerequisites, own check.** Explain the difference between expected salary and expected utility. In a two-period model, why is the outside option $2V$? If $p=\mathrm{clip}(1/2+0.1(e_i-e_j),0,1)$, what are $p$ and its own-effort derivative at gaps 0 and 7?
2. **F25 Q3a–d, 10 marks (2+3+2+3).** Two workers, two periods, $W$ each period, promotion adds $Z$ income and $P$ pride, probability $1/2+\pi(e_i-e_j)$, cost $\theta e_i^2/2$, outside utility $V$ per period, output revenue $R$ per effort unit and no period-2 output. Derive (a) effort FOC; (b) minimum $W=V-(Z+P)/4+\theta[\pi(Z+P)/\theta]^2/4$; (c) verbally explain both opposing effects of higher pride on the necessary wage holding $Z$ fixed; (d) optimal $Z$. [Original exam and grading, PDF 7–8](<../../Past exams/Finals/2025-10 Final (with solutions).pdf#page=7>).
3. **Tutorial 8.2a–e, no marks specified.** Remove pride. Add outsider probability $\rho$. Find effort, unconditional promotion probability and the minimum base salary; explain its response to $\rho$. Finally set $\rho=0$, value effort at $R$, and optimize $Z$. [Original questions PDF 1–2](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=1>).
4. **Tutorial 8.1, no marks specified.** Base pay is 50. Each worker either leaves at 18:00 or works until 20:00 at extra cost 10; further hours cost infinitely much. A best-performance bonus $B$ is split probabilistically at a tie, and a worker chooses longer hours when expected gains equal or exceed costs. Find behavior at $B=15$, the minimum bonus inducing both to stay, and whether paying it is profitable when each extra hour earns the firm 10. [Original PDF 1](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=1>).
5. **Tutorial 8.3, no marks specified.** Explain why a worker might take a costly action that raises output variance but not mean output; apply it to a fund manager paid for relative performance. [Original PDF 2](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=2>).
6. **Selected book questions, no exam marks assigned.** (i) Kuhn 20 DQ2: give the chapter's two reasons for a pay jump on promotion. (ii) Kuhn 21 DQ1–2: when only relative performance is measurable, identify the three principal risks and a remedy for each. (iii) Kuhn 21 DQ3: assess low-study collusion in a friendly class of 10, then 50, then publicly observable library attendance. (iv) Kuhn 22 DQ4: discuss objectives behind seeding and reseeding. (v) Kuhn 23 DQ1: design measurement of perceived and actual relative ability and compare overconfidence between two groups. [DQ20 PDF 388](<../../Textbooks/Personnel Economics.pdf#page=388>), [DQ21 PDF 408–409](<../../Textbooks/Personnel Economics.pdf#page=408>), [DQ22 PDF 433](<../../Textbooks/Personnel Economics.pdf#page=433>), [DQ23 PDF 445](<../../Textbooks/Personnel Economics.pdf#page=445>).
7. **R26 Q5a–c, 6 marks (2+2+2), bridge.** For the sisters' utility above, find independent hours, joint hours, and an income-tax scheme they would jointly choose when receipts go to a charity they do not value. Also solve **tutorial 8.4c's added unmarked utility comparison**. [Original R26 questions PDF 12–13](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf#page=12>); [tutorial PDF 2–3](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=2>).
8. **Own numerical transfer variant, no official marks.** Use F25's structure but take $R=6,\pi=0.1,\theta=2,P=20,V=20$. Calculate the optimal (Z,e,W), worker utility and firm profit. Compare higher pride $P=30$ while holding $Z$ fixed versus reoptimizing it. These are new teaching numbers, not original exam values.

## Worked solutions

### 1. Prerequisite check — independent

Expected salary averages income over states. Expected utility here subtracts effort cost and can add nonmonetary pride; a higher expected salary need not mean a better job. The alternative gives $V$ twice, so the total comparison is $2V$. At gap zero, $p=0.5$ and the interior derivative is 0.1. At gap seven, the linear expression is 1.2 but the valid probability is 1; its derivative is zero in that saturated region. At a kink, use one-sided comparisons rather than a smooth FOC.

### 2. F25 Q3 — official results, independently expanded algebra

**(a), 2 marks:** The question wants the effort incentive, not profit maximization. Write

\[
EU_i=2W+\left[\frac12+\pi(e_i-e_j)\right](Z+P)-\frac{\theta e_i^2}2.
\]

For the first official mark show this utility expression; for the second differentiate with respect to own effort:

\[
\partial EU_i/\partial e_i=\pi(Z+P)-\theta e_i=0,
\qquad e=\pi(Z+P)/\theta.
\]

The second derivative is $-\theta<0$, establishing the interior maximum. Interpret the monetary increment and pride as two components of the same effective incentive. [Official Q3a, PDF 7](<../../Past exams/Finals/2025-10 Final (with solutions).pdf#page=7>).

**(b), 3 marks:** Official marking separately rewards symmetry, the participation condition, and substitution. Equal effort makes $p_i=p_j=1/2$. Set

\[
2W+(Z+P)/2-\theta e^2/2=2V.
\]

Move terms and divide by two:

\[
2W=2V-(Z+P)/2+\theta e^2/2,
\quad W=V-(Z+P)/4+\theta e^2/4
=V-\frac{Z+P}4+\frac{\pi^2(Z+P)^2}{4\theta}.
\]

Substituting this salary back gives exactly $EU_i=2V$, an important check. “Expected salary equals the outside option” is incorrect because workers incur effort costs and receive pride. [Official Q3b, PDF 8](<../../Past exams/Finals/2025-10 Final (with solutions).pdf#page=8>).

**(c), 2 marks:** A concise answer matching one mark per channel is: “Greater pride makes the job more attractive because promotion brings a larger utility gain. It also makes workers work harder in period 1, increasing effort costs and making the job less attractive.” This answers the economic mechanism; merely naming positive and negative terms does not. As an independent mathematical check,

\[
\left.\frac{dW}{dP}\right|_Z=-1/4+\frac{\pi^2(Z+P)}{2\theta},
\]

which changes sign depending on the parameters. Do not replace the requested verbal answer with this derivative. [Official Q3c, PDF 8](<../../Past exams/Finals/2025-10 Final (with solutions).pdf#page=8>).

**(d), 3 marks:** One mark is awarded for profit, one for substitution, one for differentiation/result. Define $A=Z+P$, retaining that $dA/dZ=1$. Pride is not paid by the firm:

\[
\Pi=2Re-4W-Z
=\frac{2R\pi A}{\theta}
-4\left[V-\frac A4+\frac{\pi^2A^2}{4\theta}\right]-Z
=\frac{2R\pi A}{\theta}-4V+A-\frac{\pi^2A^2}{\theta}-Z.
\]

Since $A-Z=P$,

\[
\Pi=\frac{2R\pi A-\pi^2A^2}{\theta}-4V+P.
\]

Differentiate with respect to the firm's financial prize $Z$, holding $R,\pi,\theta,V,P$ fixed:

\[
\frac{d\Pi}{dZ}=\frac{2R\pi-2\pi^2(Z+P)}\theta=0
\iff R=\pi(Z+P)
\iff \boxed{Z^*=R/\pi-P}.
\]

The second derivative is $-2\pi^2/\theta<0$. Then $e^*=\pi(R/\pi)/\theta=R/\theta$. A unit of effort creates revenue $R$ and marginal effort cost $\theta e$, so the implemented effort is efficient in this unconstrained model. **The correct result includes division by $\pi$**; the old map's $R-P$ is a transcription error. [Official Q3d, PDF 8](<../../Past exams/Finals/2025-10 Final (with solutions).pdf#page=8>).

**Independent feasibility extensions:** If the prize must satisfy $Z\geq0$, the concave interior problem gives $Z^*=\max(0,R/\pi-P)$. With very high pride, zero cash is already enough to overinduce effort in this restricted contract class. If probability is explicitly clipped at zero and one, the symmetric effort candidate additionally requires $\pi^2(Z+P)/\theta\leq1$, by comparing equal-effort utility with zero-effort utility as in section 2. At the interior optimal prize this becomes $\pi R/\theta\leq1$. F25 asks for the supplied interior algebra; these are separately labelled checks, not alterations to official marking. Its setup also assumes employing workers is worthwhile and that losing workers stay in period 2. Do not silently add a new period-2 exit constraint to replace its stated assumptions.

### 3. Tutorial 8.2 — official results, expanded

Without the outsider, $EU_i=2W+p_iZ-\Theta e_i^2/2$, so $e=\pi Z/\Theta$. With outsider probability $\rho$, replace $p_i$ by $qp_i$, **not $Z$ by pride**: $e=q\pi Z/\Theta$. At symmetry the unconditional win chance is $q/2$. The participation condition is $2W+qZ/2-\Theta(q\pi Z/\Theta)^2/2=2V$. Rearranging gives

\[
W=V-qZ/4+q^2\pi^2Z^2/(4\Theta).
\]

The salary response is $Z/4-q\pi^2Z^2/(2\Theta)$: the reduced promotion chance requires compensation, while lower effort cost reduces compensation. The sign is ambiguous, as the official answer states. When $q=0$, $e=0$, promotion probability is zero and $W=V$, which checks the limiting case. For part (e) reset $q=1$; substitution into $\Pi=2Re-4W-Z$ gives $(2R\pi Z-\pi^2Z^2)/\Theta-4V$, hence $Z^*=R/\pi$ and $e^*=R/\Theta$. Section 4 shows each expansion and derivative. [Official answers PDF 4](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=4>).

### 4. Tutorial 8.1 — official results, payoff reasoning

Ignore the fixed 50 when comparing choices: it is received in either outcome. If the rival stays until 20:00, staying yields $B/2-10$, leaving yields zero. If the rival leaves at 18:00, staying yields $B-10$, leaving yields $B/2$. In either comparison, the gain from staying is $B/2-10$.

At $B=15$, this is $7.5-10=-2.5$, so both leave at 18:00. At $B=20$, the gain is zero. The question explicitly says workers choose longer hours when benefits equal costs; under that tie-breaking assumption both stay. Without that assumption, 20 gives indifference rather than a unique prediction. Four extra worker-hours produce revenue $4\times10=40$, while exactly one bonus costs 20; incremental profit is 20. The firm implements the bonus. These are incremental profit figures; base wages are already paid. [Official answers PDF 4](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=4>).

### 5. Tutorial 8.3 — official mechanism, corrected source discrepancy

An agent behind in a contest has a small chance of winning through the existing production process. Increasing uncertainty can make a lucky upset more likely; if the expected prize gain exceeds the action's cost, the agent prefers this to more expensive effort. It is especially attractive when effort cannot realistically close the gap. This does not claim that risk raises expected output or benefits the principal.

For the fund manager: “A manager whose fund is lagging at midyear can shift toward riskier assets to improve the chance of ending the year first. Brown, Harlow and Starks report active sales of safe assets and purchases of riskier ones, rather than merely retaining losing holdings.” The last direction follows [Kuhn 21.3, PDF 406–407](<../../Textbooks/Personnel Economics.pdf#page=406>); the tutorial answer's “low-risk stocks” is preserved as an error in [audit](tournament-audit.md).

### 6. Book questions — independently derived discussion answers

**20 DQ2:** First, the raise is a tournament reward that motivated workers before promotion. Second, promotion can publicly signal high ability, inducing outside employers to offer more and forcing the current firm to raise pay. Another possible explanation is genuinely greater responsibility/productivity in the new role, but that is distinct from the chapter's two mechanisms. The signaling mechanism requires that promotion convey information to outsiders. [Kuhn DQ20.2 PDF 388; signal example PDF 381](<../../Textbooks/Personnel Economics.pdf#page=381>).

**21 DQ1–2:** Relative-only measurement creates sabotage/withheld-help incentives, collusion to suppress output, and risk manipulation/obfuscation. Protect appraisal from rival manipulation and include cooperative behavior where measurable; reduce opportunities for enforceable low-effort agreements by changing comparison groups or limiting knowledge of rivals; constrain discretionary risk or include an appropriate risk penalty. Each remedy needs observation or enforcement and can sacrifice legitimate collaboration or innovation. Larger spreads alone do not solve these problems. [Kuhn DQs PDF 408; relevant mechanisms PDF 390–407](<../../Textbooks/Personnel Economics.pdf#page=408>).

**21 DQ3:** Ten friendly students may sustain a no-study agreement more easily because communication and social enforcement are feasible. It is unstable without enforcement: one student can improve relative standing by studying alone. With 50 students monitoring and collective agreement are harder. Public library check-in makes some deviations observable and can strengthen discipline, but only if attendance reliably signals studying and students cannot secretly study elsewhere. State this condition rather than claiming attendance perfectly reveals effort. [Original DQ PDF 409](<../../Textbooks/Personnel Economics.pdf#page=409>).

**22 DQ4:** Seeding can maximize effort, select the strongest finalists, sustain attractive late-stage contests, or balance these objectives. Balanced one-shot pairs can strengthen marginal incentives; keeping top seeds apart can preserve strong finalists. In elimination ladders, first-stage motivation depends on whom a winner will face later, so selecting opponents changes option value as well as present winning chances. Reseeding high against low can pursue selection efficiency even if it weakens immediate effort. There is no unique numerical optimum in a discussion question without a specified objective and contest technology. [DQ PDF 433; mechanisms PDF 429–432](<../../Textbooks/Personnel Economics.pdf#page=429>).

**23 DQ1:** Give everyone the same task and time limit, record individual scores, and ask each person privately to predict their rank before revealing others' scores. Define predicted and actual rank consistently, for example 1 is best. An overconfidence measure is actual rank minus predicted rank: positive means the person believed they ranked better than they actually did. Compare the group means and their uncertainty; retain task-specific conclusions and account for ties and differences in group size. Rewarding accurate predictions can make honest responses more attractive, but incentives do not guarantee unbiased reports. Random task or information conditions can test causes; a simple group comparison by itself is descriptive. [Original DQ PDF 445](<../../Textbooks/Personnel Economics.pdf#page=445>).

### 7. R26 Q5 and tutorial 8.4 — official hours/tax, independent missing utility calculation

**R26(a), 2 marks:** Expand $U_A=(1+\mu)wh_A-\mu wh_B-h_A^2$. Holding $h_B$ fixed, differentiate: $(1+\mu)w-2h_A=0$. Thus both work $h^N=(1+\mu)w/2$. Second derivative $-2<0$, and nonnegative hours do not bind for $w>0$.

**R26(b), 2 marks:** Add utilities and cancel the relative-income terms. The joint objective is $w(h_A+h_B)-h_A^2-h_B^2$. Each derivative $w-2h_i=0$ gives $h^J=w/2$. The correct derivative is $w-2h_i$; one duplicated official model-answer entry incorrectly prints $wh_i-2h_i$, while its following grading line and result are correct. [Official R26 Q5a–b, PDF 12](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf#page=12>).

**Added tutorial$c$, unmarked:** Because both incomes are equal at either symmetric allocation, utility is $wh-h^2$. Substitute separately:

\[
U^N=w\frac{(1+\mu)w}2-\left[\frac{(1+\mu)w}2\right]^2
=\frac{w^2}{4}[2(1+\mu)-(1+2\mu+\mu^2)]
=\frac{w^2}{4}(1-\mu^2).
\]
\[
U^J=w(w/2)-(w/2)^2=w^2/2-w^2/4=w^2/4.
\]

Each gains $U^J-U^N=\mu^2w^2/4>0$. Utility may be negative for $\mu>1$, which the stated functional form permits; it is not the same object as always-positive gross earnings. Topic 8's answer sheet omits this calculation and labels the next tax answer “c” although the tax question is (d). [Tutorial questions PDF 2–3, answer PDF 5](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=5>).

**R26$c$, 2 marks / tutorial$d$:** Choose threshold $K=w^2/2$ in gross income and tax

\[
T(y)=\max(0,y-K),\qquad c(y)=y-T(y)=\min(y,K).
\]

Income below $K$ is untaxed; the marginal tax above $K$ is 100%. This is a tax on **additional** income, not confiscation of all earnings once the threshold is crossed. Receipts go to a charity they do not value; at the desired allocation nobody actually pays tax. [Official R26 Q5c, PDF 13](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf#page=13>).

**Independent explanation of the official answer's assumption:** Apply income and relative-income utility to **after-tax income**: $U_A=c(wh_A)+\mu[c(wh_A)-c(wh_B)]-h_A^2$. If relative standing instead remains based on gross earnings, the answer generally changes. Below $h^*=K/w=w/2$, the own-hours derivative is $(1+\mu)w-2h_A$, which remains positive up to the threshold. Above it, own after-tax income is constant, so the derivative is $-2h_A<0$. The maximum is the kink $h_A=h^*=w/2$, and similarly for Bella; there is no zero derivative at the optimum. Their utility is $w^2/4$, greater than the independent untaxed outcome. The tax's threat blocks the status race without requiring positive equilibrium receipts. Do not import this after-tax assumption into an unrelated model without stating it.

### 8. Numerical transfer variant — independent

Let $A=Z+P$. Optimal $A=R/\pi=6/0.1=60$; with $P=20$, $Z=40$. Effort $e=0.1\times60/2=3$. Base wage

\[
W=20-60/4+\frac{0.1^2\times60^2}{4\times2}
=20-15+4.5=9.5.
\]

Worker utility is $2W+A/2-\theta e^2/2=19+30-9=40=2V$. Financial revenue is $2Re=36$; wages are $4W+Z=38+40=78$, so firm profit is $-42$. This means the unconstrained optimal contract **within the employ-two-workers model** is not profitable relative to shutting down. Unlike the original exam's maintained assumption, these constructed numbers require checking whether the firm hires at all. The negative result is purposeful transfer practice: an algebraic optimal prize does not guarantee positive profit.

If pride rises to 30 while $Z=40$ remains fixed, $A=70,e=3.5$, and $W=20-17.5+0.01(4900)/8=8.625$. At reoptimized $Z=30$, $A=60,e=3,W=9.5$, and profit rises to $-32$. Pride reduces required financial promotion pay after reoptimization; it does not make employing profitable with this outside option. Both symmetric interior configurations satisfy the bounded-probability global check: $\pi^2A/\theta$ is 0.30 or 0.35, below 1. A different positive-profit outside option can be checked by replacing $V$ with 8: original variant $W=-2.5$, profit 6, illustrating why salary restrictions also matter. These are new variants, not official question values.

## Closing revision check

You should be able to derive a probability from a luck distribution; solve effort before designing prizes; distinguish incentive, participation and social-efficiency questions; explain common-shock cancellation; identify destructive rank incentives; qualify the close-contest result in multistage settings; and separate observed entry/performance from a causal incentive effect. For the real exam chain, write the expected utility, state symmetry, count **four $W$** payments, distinguish $\pi$ from profit $\Pi$, and explain verbal mechanisms in plain sentences.
