# Tournaments, in depth (Kuhn ch. 20-23 + Oct 2025 Q3)

_Text version of `index.html` for searching and agents. Math is in LaTeX (`$...$`). Open `index.html` in a browser for the diagrams, sliders and step-by-step reveals._
Tournaments, In Depth

---

## Title

Personnel Economics · Lecture topic 8 · Kuhn ch. 20–23

### Tournaments: competing for a promotion

How a firm can make people work hard by paying them for their rank rather than for their output. We'll derive every result, see it in a diagram, then solve the real exam question point by point.

**Roadmap**

| Part 1 | The basic model: who wins, how hard do people work, what is efficient, how to design the prize (Kuhn 20.1–20.6)

| Part 2 | Why firms like rank-based pay: common shocks, many players, sequential contests (20.7–20.9)

| Part 3 | What goes wrong: sabotage, collusion, gambling (ch. 21)

| Part 4 | Uneven contests and who chooses to compete (ch. 22–23)

| Part 5 | The exam model: Oct 2025 Q3, fully solved, plus practice

**Why this matters for 23 Oct**

Tournaments were Question 3 of the Oct 2025 final: 10 points, a sixth of the exam. The question used Dur's own two-period version of the model, so Part 5 is the most exam-critical part.

**How to use this deck**

→ / Space next step · ← back · N toggle notes view (everything on one scrolling page) · drag the sliders in every diagram. Labels: Kuhn book result · Exam past exam · Illustration constructed example, not from the book.

---

## What is a tournament?

Part 1 · The idea

### What makes pay a "tournament"?

In a tournament, your pay depends on how you rank relative to others, not on how much you produce in absolute terms.

- A promotion: two managers compete; the better one gets the VP job and its raise.

- "Salesperson of the month" bonus.

- Partner track at a law or consulting firm.

- Chicken farmers paid by rank against other farmers (Kuhn 20.9).

Two features matter:

- The prizes are fixed in advance. The firm commits to "the winner gets $S$ more", whatever the output turns out to be.

- Only the ranking matters. The firm only needs to know who did better, not how much better.

**The puzzle this explains**

Why does a newly promoted VP get a 50% raise, when she is doing roughly the same work as the day before? Tournament theory: the raise is not paying for her current job. It is the prize that made everyone below her work hard for years. The prize does not need to equal anyone's marginal product.

**The big question of this lecture**

Can a firm get workers to supply the efficient amount of effort just by choosing two numbers: a base pay $a$ that everyone gets, and a prize spread $S$ that only the winner gets on top?

Kuhn 20.1, pdf p. 364–366.

---

## The model setup

Part 1 · Setup Kuhn 20.1

### The basic two-player model

| Symbol | Meaning

| $E_i$ | effort of worker $i$ (chosen by the worker)

| $d$ | productivity of effort (same for both: a symmetric contest)

| $\varepsilon_i$ | luck: random, mean 0, not controlled by anyone

| $Q_i = dE_i + \varepsilon_i$ | measured output

| $E_i^2/2$ | cost of effort (in money terms): marginal cost $= E_i$, rising

| $a$ | base pay (what the loser gets)

| $a+S$ | pay of the winner; $S$ = prize spread

Workers are risk neutral: they care about expected pay minus effort cost.

Effort raises your expected output, but luck means the harder worker does not always win.

---

## When does worker 1 win?

Part 1 · Probability of winning Kuhn 20.2

### Step 1: when does worker 1 win?

Everything in this model runs through one object: the probability that you win, and how much your effort changes it.

- Worker 1 wins if her measured output is higher:
$$Q_1 > Q_2 \iff dE_1+\varepsilon_1 > dE_2+\varepsilon_2$$

- Put the effort terms on one side and the luck terms on the other:
$$d(E_1-E_2) \;>\; \varepsilon_2-\varepsilon_1 \;\equiv\; \varepsilon$$
$\varepsilon$ is relative luck: how much luckier worker 2 was than worker 1.

- So worker 1 wins exactly when relative luck is below her effort advantage:
$$p_1 = \Pr\big(\varepsilon < d(E_1-E_2)\big)$$
Her effort advantage $d(E_1-E_2)$ is a threshold. Worker 2 needs to be at least that much luckier to beat her.

Notice: only the difference in efforts matters, and only relative luck matters. If both workers are hit by the same shock, it cancels. That will become a key advantage of tournaments in Part 2.

---

## Uniform luck → probability

Part 1 · Probability of winning Kuhn 20.2, Result 20.1

### Step 2: turn the threshold into a probability

Assume relative luck $\varepsilon$ is uniform on $[-R/2,\,R/2]$. Its density is flat at height $1/R$. Call that height $\alpha = 1/R$.

- Probability = area under the density to the left of the threshold $x = d(E_1-E_2)$.

- That area is a rectangle: width $\big(x + R/2\big)$, height $1/R$:
$$p_1 = \frac{x+R/2}{R} = \frac12 + \frac{x}{R}$$

- Substitute $x$ and $\alpha = 1/R$:

Result 20.1 $$p_1 = \tfrac12 + \alpha d\,(E_1-E_2)$$ valid as long as $|d(E_1-E_2)| \le R/2$; otherwise $p_1$ is 0 or 1.

Effort gap $E_1-E_2$
Luck range $R$

Shaded area = probability worker 1 wins ($d=1$). A wider luck range $R$ means a flatter density, so a given effort gap buys less probability.

---

## Reading the win probability

Part 1 · Probability of winning

### Reading $p_1 = \tfrac12 + \alpha d(E_1-E_2)$

| Piece | Meaning

| $\tfrac12$ | With equal effort you have a coin-flip chance: the contest is fair and symmetric.

| $\alpha d$ | The marginal effect of effort on your winning chance: $\partial p_1/\partial E_1 = \alpha d$. This is the number that drives effort.

| $\alpha = 1/R$ | Precision of performance measurement. Little luck (small $R$) means a big $\alpha$: effort shows up clearly in the ranking.

| $d$ | Productivity. More productive effort moves your output, and hence your rank, more.

**Watch the notation**
In Kuhn, $R$ is the range of luck. In the Oct 2025 exam, $R$ is the price of output and the probability slope is called $\pi$. Never mix them.

Rival's effort $E_2$
Luck range $R$
Smooth (normal) luck

Worker 1's win probability as a function of her own effort ($d=1$). Uniform luck: a straight line between kinks A and B (Kuhn Fig. 22.1). Tick the box for a normal luck distribution: an S-curve, steepest where efforts are equal (Fig. 22.2).

---

## The worker's problem

Part 1 · Optimal effort Kuhn 20.3

### Step 3: how hard does each worker work?

- Expected pay: the base $a$ for sure, plus the prize $S$ with probability $p_1$. Subtract effort cost:
$$EU_1 = a + p_1 S - \frac{E_1^2}{2} = a + \Big[\tfrac12 + \alpha d(E_1-E_2)\Big] S - \frac{E_1^2}{2}$$

- Take the derivative with respect to her own effort, treating $E_2$ as given:
$$\frac{\partial EU_1}{\partial E_1} = \underbrace{\alpha d\, S}_{\text{marginal benefit}} - \underbrace{E_1}_{\text{marginal cost}} = 0$$
Marginal benefit = (extra win probability per unit of effort) × (size of the prize). Marginal cost = the derivative of $E_1^2/2$.

- 
Optimal effort $$E_1 = \alpha d S \qquad\text{and by symmetry}\qquad E_2 = \alpha d S$$ Second-order condition: $\partial^2 EU_1/\partial E_1^2 = -1 < 0$, so this is a maximum.

Special feature of uniform luck: $E_2$ dropped out of the FOC. Your best effort does not depend on what your rival does: it is a dominant strategy. With other luck distributions, effort depends on the rival's, and that makes behaviour harder to predict (Result 20.5).

---

## Marginal benefit = marginal cost

Part 1 · Optimal effort

### See it: marginal benefit meets marginal cost

The marginal benefit of effort is a flat line at $\alpha d S$: every extra unit of effort adds the same $\alpha d$ to your win chance, worth $S$.

The marginal cost is the rising line $E$.

They cross at $E = \alpha d S$. The dashed line marks the efficient effort $E^*=d$ (next slides). Try to make the two meet by moving $S$.

Comparative statics, all from $E=\alpha dS = dS/R$:

| Bigger prize $S$ | ↑ effort: more at stake

| More productive $d$ | ↑ effort: effort moves the rank more

| Noisier measurement (↑$R$, ↓$\alpha$) | ↓ effort: luck drowns effort out

| Base pay $a$ | no effect on effort: you get it win or lose

Prize spread $S$
Precision $\alpha$
Productivity $d$

---

## Equilibrium: luck decides

Part 1 · Equilibrium Kuhn Result 20.2

### In equilibrium, both work hard, and luck decides

Both workers choose $E = \alpha dS$. Plug equal efforts into Result 20.1:
$$p_1 = \tfrac12 + \alpha d\,(\alpha dS - \alpha dS) = \tfrac12$$

Result 20.2 In a symmetric tournament everyone picks the same effort, so everyone has the same chance of winning. The winner is decided purely by luck.

This sounds paradoxical, but it is the whole point. The prize does not exist to identify the hardest worker. It exists to make both work hard. Each is running to avoid falling behind (a "rat race"), and in equilibrium neither gets ahead.

**Exam use**
"Since workers choose the same effort, it holds that $p_i = p_j = \tfrac12$" was worth 1 point on its own in Oct 2025 Q3b. Always state it explicitly before writing the participation constraint.

**Check your understanding**

If the winner is chosen by luck anyway, why not just give both workers $a + S/2$ for sure?

AnswerBecause then effort no longer changes your pay at all: $\partial EU/\partial E = -E$, so $E=0$. The possibility of losing is what creates the incentive, even though in equilibrium the outcome is a coin flip.

---

## Efficient effort

Part 1 · Efficiency Kuhn 20.4, Result 20.3

### Step 4: what effort is efficient?

- Total surplus = firm's profit + workers' utility. All wage payments ($a$, $S$) are transfers from firm to workers, so they cancel:
$$TS = \underbrace{d(E_1+E_2)}_{\text{expected output}} - \underbrace{\tfrac{E_1^2}{2}-\tfrac{E_2^2}{2}}_{\text{effort costs}}$$

- Maximise with respect to each $E_i$:
$$\frac{\partial TS}{\partial E_i} = d - E_i = 0$$

- 
Result 20.3 Efficient effort is $E_i^* = d$: work until the marginal product of effort ($d$) equals its marginal cost ($E_i$).

This does not depend on how workers are paid. It is a property of technology and preferences only.

Productivity $d$
Actual effort $E$

Surplus per worker $dE - E^2/2$. The peak is at $E=d$. The red area is the surplus lost when effort is too low or too high.

---

## Designing the optimal tournament

Part 1 · Design Kuhn 20.5

### Step 5: design the contest. $S$ for effort, $a$ for participation

**Prize spread → efficient effort**

- Workers choose $E = \alpha dS$. We want $E = d$.

- Set them equal: $\alpha d S = d$, so

$$S^* = \frac{1}{\alpha} = R$$ The optimal prize spread equals the range of luck.
Noisier measurement ⇒ a bigger prize is needed. When luck matters more, each unit of effort moves the win chance less, so the stakes must rise to compensate.

**Base pay → participation**

- A worker joins only if expected utility ≥ her outside option $\bar U$. With $p = \tfrac12$ and $E=d$:
$$a + \tfrac12 S - \tfrac{d^2}{2} \ge \bar U$$

- The firm pays no more than needed, so this binds:
$$a = \bar U - \tfrac12 S + \tfrac{d^2}{2}$$

- 
Division of labour: $S$ creates the incentive, $a$ only splits the pie. A bigger prize lets the firm lower base pay one-for-one in expectation ($-\tfrac12$ per unit of $S$). $a$ can even be negative, like an entry fee.

---

## Kuhn's worked example

Part 1 · Worked example Kuhn 20.5, Table 20.1

### Kuhn's numbers: $\alpha = 0.1$, $d = 4$, $\bar U = 6$

- Efficient effort: $E^* = d = 4$.

- Prize spread: $S = 1/\alpha = 10$. Check: $E = \alpha d S = 0.1\cdot4\cdot10 = 4$ ✓

- Base pay: $a = \bar U - S/2 + d^2/2 = 6 - 5 + 8 = 9$

- Expected output $= dE = 16$; expected pay $= a + S/2 = 14$; utility $= 14 - 4^2/2 = 6 = \bar U$ ✓

- Profit per worker $= 16 - 14 = 2$.

| | Tournament
$a=9,\ S=10$ | Piece rate
$a=-2,\ b=1$

| Effort | $\alpha dS = 4$ | $bd = 4$

| Expected output | 16 | 16

| Expected pay | $9 + 0.5\cdot10 = 14$ | $-2 + 1\cdot16 = 14$

| Utility | $14 - 8 = 6$ | $14 - 8 = 6$

| Profit / worker | 2 | 2

Result 20.4 (equivalence) With risk-neutral workers, a tournament can reproduce any outcome a piece rate can, including the efficient one. Same effort, same pay, same profit.

---

## Why use tournaments at all?

Part 2 · Advantages Kuhn 20.6–20.9, Results 20.9–20.11

### If they're equivalent, why do firms use tournaments?

The equivalence holds only in the simple model. In practice rank-based pay has real advantages:

**1 · Only a ranking is needed**
Often it's easy to say who did better (which manager ran the better branch) but hard to measure output in units. A piece rate needs a cardinal measure; a tournament only an ordinal one.

**2 · The firm can't cheat**
Under a piece rate the firm has an incentive to understate output to pay less. In a tournament the prize budget is fixed: misreporting who won saves nothing (Result 20.11).

**3 · Insurance against common shocks**
A bad market hits everyone. Relative pay filters it out, so workers aren't punished for things nobody controls (Result 20.10; next slide).

**4 · No ratchet**
When a new technology raises everyone's output, piece rates must be renegotiated. A tournament prize stays valid automatically (Result 20.11).

**5 · Risk can be lower**
Pay only takes two values ($a$ or $a+S$), with no extreme outcomes, so a risk-averse worker may prefer it (Result 20.9). Not guaranteed: the rival's luck adds noise.

**Costs (Part 3)**
Rank pay invites sabotage, collusion and excessive risk-taking, and it backfires when contestants are unequal (Part 4).

---

## Common shocks cancel

Part 2 · Common shocks Kuhn Result 20.10, 20.9 broilers

### A shock that hits everyone cancels out of the ranking

Add a common shock $c$ (weather, recession) that hits both workers equally:
$$Q_i = dE_i + c + \varepsilon_i$$
$$Q_1 - Q_2 = d(E_1-E_2) + (\varepsilon_1 - \varepsilon_2)$$

$c$ disappears. Who wins, and so everyone's pay, does not depend on it. Under a piece rate, pay $= a + bQ_i$ would fall with $c$.

Example (Kuhn 20.9): chicken ("broiler") growers are paid relative to other growers supplied with the same chicks and feed in the same period. A bad batch of chicks hurts everyone equally and so costs nobody their bonus.

Common shock $c$

Both outputs fall together, but the gap, and so the winner, is unchanged. Compare a piece-rate worker's pay, which moves with $c$. Illustration $d=1,\ E_1=6,\ E_2=4$, $b=1$.

---

## Many players, stages, feedback

Part 2 · Extensions Kuhn 20.7, Results 20.5–20.8

### More players, sequential contests, feedback

**Adding contestants for one fixed prize (Result 20.6)**

Two forces pull in opposite directions:

- 1/N effect (↓ effort): with more rivals, each has a smaller chance of winning, so the prize is less "reachable".

- Competition effect (↑ effort): you now have to beat more people. With one player, a promotion is automatic and nobody works.

Net effect is ambiguous. With independent uniform luck the two exactly cancel. Implication: a firm can sometimes raise incentives by opening a prize to more people without making it bigger.

**Strategy (Result 20.5)**

Except under uniform luck, your best effort depends on your forecast of rivals' effort, so behaviour in tournaments is more variable than under piece rates.

**Sequential contests (Result 20.7)**

If contestants see each other's results along the way (sales month, sports), early luck creates a leader. A symmetric contest turns into an uneven one once it starts: the leader can coast, and the trailer may give up (see Part 4).

**Feedback (Result 20.8)**

So it is not always optimal to tell workers who is ahead. If one is far ahead, both may cut effort. Keeping the race "close" in workers' minds can keep both working.

Exam angle: these are verbal "explain the two effects" questions. Name both channels, give the direction of each, and say the net effect is ambiguous.

---

## Part 3: what goes wrong

Part 3 · Kuhn ch. 21

### What goes wrong: sabotage, collusion, gambling

All three come from the same root: a tournament rewards your rank, not your output. Anything that improves your rank pays, including hurting your rival, agreeing with your rival to slack off, or simply rolling the dice.

---

## Sabotage

Part 3 · Sabotage Kuhn 21.1, Results 21.1–21.4

### Sabotage: lowering your rival's output also wins

You win when $Q_1 - Q_2$ is large. There are two ways to raise it: raise $Q_1$ (productive effort) or lower $Q_2$ (sabotage, unhelpfulness, bad-mouthing the rival to the boss).

Illustration Let sabotage $s_1$ cut the rival's measured output one-for-one, at cost $\kappa s_1^2/2$:
$$p_1 = \tfrac12 + \alpha\big[d(E_1-E_2) + s_1 - s_2\big]$$
$$\frac{\partial EU_1}{\partial s_1} = \alpha S - \kappa s_1 = 0 \;\Rightarrow\; s_1 = \frac{\alpha S}{\kappa}$$

Sabotage rises with the prize $S$, exactly like effort does. A bigger prize buys more effort and more sabotage. That is why firms with strong cooperation needs often compress pay differences (smaller $S$).

**Evidence: Carpenter et al. (2010)**

Workers stuffed envelopes and graded each other's output. Adding a prize for the top performer led to:

- Directed sabotage: workers understated the quality and quantity of their peers' work, but only of peers who were ahead (Result 21.1).

- Lower real output: expecting to be sabotaged, workers put in less effort (Result 21.2).

- Profits fell, worker utility rose, and total surplus fell (Results 21.3–21.4).

Exam-style: "Why might introducing a prize for the best worker reduce output?" → it rewards lowering others' measured output, and workers who expect sabotage find effort less rewarding.

---

## Collusion

Part 3 · Collusion Kuhn 21.2, Result 21.5

### Collusion: "let's both slack off"

If both workers cut effort by the same amount, the effort gap is unchanged, so each still wins with probability ½, but both save on effort cost. Workers gain; the firm loses all the output.

Illustration Kuhn's example ($a=9,\ S=10,\ \alpha=0.1,\ d=4$), expected utilities:

| Worker 1 \ Worker 2 | Work hard | Shirk ($E=0$)

| Work | 6, 6 | 18.2*, 9

| Shirk | 9, 18.2* | 14, 14

Work hard = the equilibrium effort $E=4$. *Against a shirker, the best deviation is just effort 1.25, which already wins for sure: $\tfrac12 + 0.4\cdot1.25 = 1$, so $EU = 9 + 10 - 1.25^2/2 \approx 18.2$.

Collusion (14, 14) beats the equilibrium (6, 6) for both, but each is tempted to secretly work and win for sure. It's a prisoners' dilemma: collusion survives only if cheating can be seen and punished.

**Evidence: Bandiera et al. (2005), fruit pickers**

Under relative pay (the day's piece rate fell when the field's average output rose), pickers held back output. When the farm went back to a piece rate fixed in advance, productivity rose by 59% with no rise in wage costs.

- Collusion was stronger when pickers worked with friends.

- It happened only for fruit where pickers could see each other's output.

Remedies: larger or reshuffled groups, confidential performance information, rivals who don't interact.

---

## Risk-taking

Part 3 · Risk-taking Kuhn 21.3, Results 21.6–21.7

### Gambling: when you're behind, add noise

A worker who is behind can't win by being a bit better: she needs luck. So she likes actions that make outcomes more random, even if they don't raise (or even lower) expected output.

A worker who is ahead wants the opposite: play safe and lock in the lead.

**Evidence: mutual funds (Brown, Harlow & Starks 1996)**
Fund managers paid on year-end ranking who were behind at mid-year made their portfolios riskier for the rest of the year, actively selling safe assets and buying risky ones.

Result 21.6: risk-enhancing actions are most attractive to less able agents and to those behind in a sequential contest.

Mean lead (+ ahead, − behind)
Riskiness $\sigma$

Illustration Normal noise: $p(\text{win}) = \Phi(\text{lead}/\sigma)$. Behind: more risk pushes the win chance up toward ½. Ahead: more risk pushes it down.

---

## Part 4: uneven contests

Part 4 · Kuhn ch. 22–23

### Uneven contests and who chooses to compete

So far both contestants were equally able. What if one is much better, and who signs up for a tournament in the first place?

---

## Uneven tournaments

Part 4 · Asymmetric contests Kuhn 22.1, Result 22.1

### Uneven contests blunt both players' incentives

What drives effort is the slope of the win probability: how much one more unit of effort raises your chance. With realistic (smooth) luck, that slope is steepest when the race is close.

- The weak player (vs. Tiger Woods): even maximum effort barely moves her chance off zero. Why try?

- The strong player: wins almost surely anyway. Why try?

Result 22.1 For a given prize $S$, both players supply less effort in an asymmetric tournament than in a symmetric one.

**Evidence: the Tiger Woods effect (Brown 2011, Result 22.2)**
Other golfers scored significantly worse in tournaments where Tiger Woods played than when he was absent. With the top prize effectively "taken", rivals eased off. (The extracted text of Kuhn's Result 22.2 reads the other way round; the surrounding discussion and Brown's paper confirm: worse when Woods was present.)

Ability advantage of rival

Kuhn Figs 22.2–22.4 as a live graph. Illustration Normal luck; you face a rival at effort 5. Shifting the curve (uneven ability) flattens it in the feasible effort range: the marginal win chance at your effort (gold tangent) collapses.

---

## Fair rules, leagues, handicaps

Part 4 · Fixes Kuhn 22.3, Results 22.3–22.5

### Fixing uneven contests: fair rules, leagues, handicaps

**Equal players → fair rules**
When contestants are equally able, profits are highest when the best measured performance wins and the rules are seen to be fair (Result 22.3). Any bias makes the contest uneven and so lowers effort.

**Leagues**
Group workers of similar ability into separate contests (sales divisions, sports leagues). Everyone has a real chance of winning and a real risk of losing (Result 22.4).

**Handicaps**
If unequal players must compete, make the stronger one beat a point spread. This raises both players' effort at no cost to the principal (Result 22.5). Then a less able player can win with a worse performance.

**Fair vs symmetric: don't mix them up**

Fair = a property of the rules (better measured performance wins). Symmetric = a property of the players (same ability and costs). A perfectly fair contest between Tiger Woods and you is still very uneven. A handicap deliberately makes the rules unfair to make the contest more even.

Note the trade-off: the best rule for incentives (handicap) may not be the best rule for selecting who should get the job. A firm can separate the two by paying a bonus based on handicapped results but promoting on raw ability.

---

## Promotion ladders

Part 4 · Multistage contests Kuhn 22.4, Results 22.6–22.10

### Promotion ladders: why the top prize is so big

A career is a sequence of tournaments: analyst → manager → VP → CEO. Winning one round also buys a ticket to the next round.

- Lower rounds: the prize = the raise plus the option value of competing later.

- The final round has no "later". The whole incentive must come from the raise itself, so the top prize must be very large.

This is the tournament explanation of skewed executive pay: a CEO's pay jump is not just reward for CEO work. It keeps vice-presidents (and everyone below them) running.

Rosen's ability-learning model (Result 22.6): when firms learn about ability as people move up, the raises needed are smaller at the bottom and top of the ladder and larger in the middle.

| Result | Idea in one line

| 22.7 Meyer (1991) | Busy top managers may bias contests toward early leaders: trailers become "invisible" unless they win big.

| 22.8 Upsets | Mixed-ability pools create surprising wins that reveal talent to outside employers, which raises early effort.

| 22.9 Option value | Mixing abilities early can raise effort, because strong players then face weaker opponents later.

| 22.10 Selection | Mixed early pools can raise the share of high-ability final winners.

These are verbal results: know the mechanism in one sentence each. No algebra needed.

---

## Who wants to compete?

Part 4 · Selection Kuhn ch. 23, Results 23.1–23.4

### Who chooses to enter a tournament?

**Theory (Result 23.1)**

Competitive pay attracts people who:

- think they're more able than their rivals (including the overconfident);

- enjoy competition, or perform better under it;

- and, ambiguously, are risk-averse. Rank pay adds the rival's luck as a risk, but insures against common shocks. Risk aversion is more likely to raise entry when common shocks are big.

Selection vs incentives. When a firm switches to tournament pay and output rises, part of the rise may be who now works there (better or more competitive people sort in), not how hard people work. To separate them you need random assignment or the same people before and after. Same logic as Safelite (Kuhn ch. 8) and the exams' empirical questions.

**Evidence (Results 23.2–23.4)**

- People who rate their own relative ability highly are more likely to enter; risk aversion deters entry (23.2).

- Niederle & Vesterlund (2007): men chose the tournament far more often than women, even though men and women performed equally well and responded similarly to competition. Confidence and taste for competing explain the gap (23.3).

- Accurate feedback on relative performance can close the gap, and in some societies the gap reverses (Gneezy et al. 2009) (23.4).

---

## Part 5: the exam model

Part 5 · Oct 2025 final, Question 3 · 10 points

### The exam model: a two-period promotion with pride

Dur's exam version differs from Kuhn's: two periods, a promotion raise $Z$, a non-monetary "pride" bonus $P$, effort cost $\theta e^2/2$, and output sold at price $R$. The logic is identical: probability slope × prize = marginal cost, then participation, then the firm's optimum.

---

## Exam setup

Part 5 · Setup Exam F25 Q3

### The setup

- One firm, two workers, two periods. Period 1: both earn $W$, choose effort $e_i$, produce. Period 2: one is promoted and earns $W + Z$, the other stays at $W$.

- Promotion probability: $p_i = \tfrac12 + \pi\,(e_i - e_j)$.

- Effort cost (period 1 only): $\theta e_i^2/2$.

- The promoted worker also enjoys pride $P$, utility, not money.

- Outside option: $V$ per period.

- Each unit of effort makes one unit of output, sold at price $R$. No production in period 2.

| Kuhn | Exam

| $\alpha d$ (probability slope) | $\pi$

| prize $S$ | $Z + P$ (money + pride)

| cost $E^2/2$ | $\theta e^2/2$

| $R$ = luck range | $R$ = output price

The firm pays 4 base salaries in total (2 workers × 2 periods) plus one raise $Z$. Pride is not paid by the firm.

---

## Q3a: effort

Part 5 · Q3a 2 points

### Q3a: derive the worker's optimal effort

- 1 ptExpected utility over both periods: two base salaries for sure, plus the promotion prize (money + pride) with probability $p_i$, minus effort cost:
$$EU_i = 2W + \Big[\tfrac12 + \pi(e_i - e_j)\Big](Z+P) - \frac{\theta e_i^2}{2}$$

- 1 ptDifferentiate with respect to $e_i$ and set to zero:
$$\pi(Z+P) - \theta e_i = 0 \quad\Longrightarrow\quad e_i = \frac{\pi(Z+P)}{\theta}$$
Marginal benefit: one more unit of effort raises the promotion chance by $\pi$, and promotion is worth $Z+P$ to the worker. Marginal cost: $\theta e_i$.

Same structure as Kuhn's $E = \alpha d S$: effort = (probability slope × prize) / cost parameter. Pride works exactly like extra prize money from the worker's point of view.

Traps: the 2W enters utility but not the FOC. Don't forget $P$ in the prize. State the second-order condition ($-\theta < 0$) if you have time.

---

## Q3b: participation & wage

Part 5 · Q3b 3 points

### Q3b: the lowest wage $W$ workers accept

Show that $W = V - \tfrac14(Z+P) + \tfrac14\theta\Big(\tfrac{\pi(Z+P)}{\theta}\Big)^2$.

- 1 ptBoth workers choose the same effort (same FOC), so $e_i = e_j$ and
$$p_i = p_j = \tfrac12$$

- 1 ptExpected utility from taking the job must equal the outside option over both periods, $2V$:
$$2W + \tfrac12(Z+P) - \tfrac12\theta e^2 = 2V$$

- 1 ptDivide by 2 and substitute $e = \pi(Z+P)/\theta$:
$$W = V - \tfrac14(Z+P) + \tfrac14\theta e^2 = V - \tfrac14(Z+P) + \tfrac14\theta\Big(\tfrac{\pi(Z+P)}{\theta}\Big)^2$$

Most common error: using $V$ instead of $2V$. The worker gives up the outside option in both periods.

---

## Q3c: two effects of pride

Part 5 · Q3c 2 points · verbal

### Q3c: pride has two opposing effects on $W$

$$W = V \;\underbrace{-\;\tfrac14(Z+P)}_{\text{effect 1}} \;\underbrace{+\;\tfrac14\theta\Big(\tfrac{\pi(Z+P)}{\theta}\Big)^2}_{\text{effect 2}}$$

1 ptEffect 1 (lowers W): more pride makes promotion more valuable, so the job becomes more attractive and the firm can pay a lower wage.

1 ptEffect 2 (raises W): more pride makes the worker work harder in period 1 to get promoted. That raises her effort cost, which makes the job less attractive, so the firm must pay more.

The question says "do not write math in words". "The second term increases in P" scores 0. Explain the economic channel: attractiveness via promotion utility versus via effort cost.

Raise $Z$ (held fixed)
Probability slope $\pi$

Required wage $W$ as pride $P$ rises ($V=13$, $\theta=2$). Effect 1 is the falling straight line, effect 2 the rising curve. Their sum is U-shaped, which is why the answer is "may increase or decrease". Illustration

---

## Q3d: optimal raise Z

Part 5 · Q3d 3 points

### Q3d: the profit-maximising promotion raise $Z$

- 1 ptProfit: revenue from two workers' period-1 output, minus 4 base salaries and one raise:
$$\Pi = 2Re - Z - 4W$$

- 1 ptSubstitute $e$ (3a) and $W$ (3b). Note $-4W = -4V + (Z+P) - \theta e^2$:
$$\Pi = 2R\tfrac{\pi(Z+P)}{\theta} - Z - 4V + Z + P - \theta\Big(\tfrac{\pi(Z+P)}{\theta}\Big)^2$$
The $-Z$ and $+Z$ cancel: the firm gets the raise "back" through a lower base wage.

- 1 ptDifferentiate with respect to $Z$:
$$\frac{2R\pi}{\theta} - \frac{2\pi^2(Z+P)}{\theta} = 0 \;\Longrightarrow\; Z+P = \frac{R}{\pi} \;\Longrightarrow\; \boxed{Z^* = \frac{R}{\pi} - P}$$

Pride $P$
Price $R$

Profit as a function of $Z$ ($\pi=0.1$, $\theta=2$, $V=13$). The peak sits at $Z = R/\pi - P$. Raise $P$: the whole curve slides left one-for-one.

---

## What the solution means

Part 5 · Interpretation

### What the solution tells you (worth a sentence on the exam)

**1 · The firm implements efficient effort**

At $Z^*$: $e^* = \pi(Z+P)/\theta = \pi\cdot\frac{R/\pi}{\theta} = \frac{R}{\theta}$.

Efficient effort maximises total surplus $2Re - 2\cdot\theta e^2/2$ (pay is a transfer), so $R = \theta e$, giving $e = R/\theta$. Same thing.

Like Kuhn's $S^* = 1/\alpha$: the firm is the residual claimant, the participation constraint binds, so it wants the pie as big as possible, and sets the total prize $Z+P$ so that effort is efficient.

**2 · Pride substitutes for cash, one-for-one**

$\partial Z^*/\partial P = -1$: each unit of pride replaces one unit of raise, and effort is unchanged.

Profit at the optimum: $\Pi^* = \frac{R^2}{\theta} - 4V + P$, so pride is pure profit for the firm. It motivates like money but costs nothing.

Check feasibility: if $P > R/\pi$, the formula gives $Z^* < 0$, a "promotion penalty". If the firm can't set $Z<0$, the constraint $Z \ge 0$ binds and effort exceeds the efficient level. Also check $p_i \in [0,1]$ and that the firm wants to operate at all ($\Pi^*\ge 0$).

---

## Practice problems

Practice · try before opening

### Practice problems

**P1 · Kuhn model, numbers constructed**

Luck range $R=20$, $d=3$, outside option $\bar U = 4$, cost $E^2/2$. Find efficient effort, the optimal $S$ and $a$, and profit per worker.

Solution
$\alpha = 1/20 = 0.05$. Efficient $E^* = d = 3$. $S = 1/\alpha = 20$; check $E = 0.05\cdot3\cdot20 = 3$ ✓.

$a = \bar U - S/2 + d^2/2 = 4 - 10 + 4.5 = -1.5$ (an entry fee!).

Profit per worker $= dE - (a + S/2) = 9 - 8.5 = 0.5$. Check: surplus $9 - 4.5 = 4.5$ minus $\bar U = 4$ ✓.

**P2 · Exam model, numbers constructed**

$R=10$, $\pi=0.2$, $\theta=2$, $V=5$, $P=0$. Find $Z^*$, $e^*$, $W$, profit. Then redo with $P=10$.

Solution
$Z^* = R/\pi - P = 50$; $e = \pi Z/\theta = 0.2\cdot50/2 = 5 = R/\theta$ ✓.

$W = V - Z/4 + \theta e^2/4 = 5 - 12.5 + 12.5 = 5$.

$\Pi = 2Re - 4W - Z = 100 - 20 - 50 = 30$ $(= R^2/\theta - 4V)$.

With $P=10$: $Z^*=40$, $e = 0.2\cdot50/2 = 5$ (unchanged), $W = 5$ (since $Z+P$ unchanged), $\Pi = 100 - 20 - 40 = 40$. Pride raised profit by exactly $P$.

**P3 · Verbal (2 sentences)**
Why must the prize be larger when performance is measured less precisely?

Model answerWhen luck matters more, an extra unit of effort raises the chance of winning by less. To keep the marginal benefit of effort equal to its marginal cost at the efficient level, the firm has to raise the value of winning.

**P4 · Verbal (2 sentences)**
Why can introducing a bonus for the best worker lower total output?

Model answerThe bonus rewards relative performance, so workers can also win by lowering colleagues' measured output (sabotage) or by refusing to help them. Workers who expect to be sabotaged also gain less from effort, so they work less.

**P5 · Verbal (2 sentences)**
In the exam model, why does $Z^*$ fall one-for-one with $P$?

Model answerWorkers' effort depends only on the total value of promotion, $Z+P$, and the firm wants that total at the level that makes effort efficient. Pride already provides part of that value for free, so the firm needs less cash to reach it.

---

## Formula sheet & checklist

Summary

### Formula sheet and exam checklist

| Object | Kuhn (ch. 20) | Exam (F25)

| Win probability | $\tfrac12 + \alpha d(E_1-E_2)$ | $\tfrac12 + \pi(e_i-e_j)$

| Expected utility | $a + pS - E^2/2$ | $2W + p(Z+P) - \theta e^2/2$

| Optimal effort | $E = \alpha dS$ | $e = \pi(Z+P)/\theta$

| Efficient effort | $E^* = d$ | $e^* = R/\theta$

| Optimal prize | $S^* = 1/\alpha = R$ | $Z^* = R/\pi - P$

| Participation | $a + S/2 - E^2/2 = \bar U$ | $2W + (Z+P)/2 - \theta e^2/2 = 2V$

| Profit | $dE - a - S/2$ per worker | $2Re - 4W - Z$

**The recipe (any tournament question)**

- Write expected utility: base pay + $p$ × prize − effort cost.

- FOC in own effort: slope of $p$ × prize = marginal cost.

- Symmetry ⇒ equal efforts ⇒ $p = \tfrac12$ (say it!).

- Participation constraint binds ⇒ base pay.

- Profit = revenue − all wages; substitute; FOC in the prize.

- Interpret: efficient effort? which channel? feasibility?

**Traps**

Outside option over all periods (2V) · count salaries correctly (4W) · pride is not a cash cost · $R$ means different things in Kuhn and the exam · "two effects" = two distinct economic channels, no math in words · probabilities must stay in $[0,1]$.

---

## Sources

Sources

### Sources and what to read

| Part | Source | Priority

| Basic model, efficiency, design, equivalence | Kuhn 20.1–20.6, pdf p. 364–375 | Must read: the derivations

| Extensions, common shocks, broilers | Kuhn 20.7–20.9, pdf p. 375–389 | Skim: know Results 20.6–20.11 in one sentence

| Sabotage, collusion, risk-taking | Kuhn ch. 21, pdf p. 390–410 | Skim: mechanisms + the three studies

| Uneven contests, fixes, ladders | Kuhn ch. 22, pdf p. 411–435 | Read 22.1–22.3; skim 22.4

| Selection into tournaments | Kuhn ch. 23, pdf p. 436–447 | Skim

| Exam model | Oct 2025 final Q3 (with solutions), pdf p. 7–8 | Must do, cold, twice

Labelled Illustration items (sabotage algebra, collusion payoff table, normal-noise graphs, pride/profit plots, practice numbers) are constructed for teaching. They follow the book's logic but are not formulas from Kuhn or the exam. Check Dur's lecture slides (7 Oct) for his notation and emphasis.
