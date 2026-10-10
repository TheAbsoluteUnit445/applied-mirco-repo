# 2. Collective decision-making and political economy

Topic IDs: **PUB-POL-VOTE, PUB-POL-GOVFAIL**, with prerequisite bridges **PUB-POSNORM, PUB-PG-SAM, PUB-SWF**. [Pack index](index.md). This module explains how individual preferences become public decisions, why a stable decision can still be inefficient, and how institutions affect the behaviour of officials and organised interests.

The [course guide, PDF p.2](<../../00 Course info/Course guide 2026-27.pdf#page=2>) assigns **R&G chapter 6**, lecture **13 October 2026**. **Update, 10 October:** the supplied [Lecture 7](<../../Public Economics (Delfgaauw)/Week 7 - Political economy/Lectures/Lecture 7 BB.pdf>) and [Week 7 tutorial with answers](<../../Public Economics (Delfgaauw)/Week 7 - Political economy/Exercises/exercises week 7.pdf>) are now stored in the repository. The new [step-by-step Week 7 walkthrough](02-week7-walkthrough.md) covers their strategic voting, rank-order, candidate commitment, transport-investment and cleaning exercises, with full worked algebra and source corrections. This module remains the full assigned-chapter foundation. Read [chapter 6 text](<../../Textbooks/Rosen & Gayer (md)/06 - Political Economy.md>) beside the [original PDF, pp.191–224](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=191>). All page numbers here are PDF pages.

## 2.1 Start with the distinction between explanation and evaluation

An economist can ask why the government extracts a resource, or whether extraction improves social welfare. The first is **positive**: explain behaviour using preferences, votes, information and incentives. The second is **normative**: evaluate outcomes using a stated welfare criterion. A positive explanation is not an endorsement. A majority can choose a harmful policy without anyone making an arithmetic mistake, because its members receive gains while a minority bears larger losses.

R&G chapter 6 starts by treating political actors as pursuing their own interests. That assumption is a starting model, not a statement that every official is selfish in every decision. Just as self-interest can produce efficient market outcomes under particular conditions, it can produce good political outcomes under particular conditions. The task is to identify those conditions and where they fail. [R&G, chapter introduction, PDF pp.191–192](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=191>).

**Exam application:** F25 Q8 has already stipulated that extraction exceeds the socially efficient level and that the government knows all costs and benefits. Repeating an efficiency advantage cannot explain the departure from efficiency. Its normative part needs distributional welfare weights; its positive part needs a political mechanism. [24 October 2025 final, Q8a–b, 2+2 marks, PDF p.15](<../../Past exams/Finals/2025-10 Final (with solutions).pdf#page=15>).

**Exam-ready:** A positive explanation identifies how voting or officials' incentives generate the policy. A normative explanation evaluates the policy using welfare judgments, such as different social weights on the people who gain and lose.

## 2.2 Unanimity and personalised prices: Lindahl's proposal

How could everyone voluntarily agree to finance the efficient quantity of a public good? The book's Adam and Eve choose the number of fireworks rockets they want at different personal tax shares. A public good is consumed jointly; one person's enjoyment does not remove another's. The efficient marginal condition therefore adds their marginal willingness to pay rather than equating each person's willingness to pay to the entire cost.

Define rocket quantity $r$, constant price or marginal resource cost $P_r$, and shares $s_A,s_E$ with $s_A+s_E=1$. Adam faces marginal price $s_AP_r$; Eve faces $s_EP_r$. Each chooses a desired quantity, taking shares and other prices fixed. At a common desired quantity $r^*$,

\[
MB_A(r^*)=s_AP_r,
\qquad MB_E(r^*)=s_EP_r.
\]

Add and factor:

\[
MB_A(r^*)+MB_E(r^*)=(s_A+s_E)P_r=P_r.
\]

That is the efficient public-good condition in money units. The shares are **Lindahl prices**. On the book's graph quantity is horizontal; Adam's share increases upward, while Eve's share increases downward because their shares add to one. Their demand curves meet where they request the same quantity. These are different personal prices for the same public service, not different quantities delivered privately. [R&G, “Unanimity Rules,” PDF pp.192–194, efficiency footnote p.223](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=192>).

An auctioneer could adjust shares until agreement. But each person can understate willingness to pay in hopes of shifting cost to the other. Agreement also becomes costly with many participants; unanimity gives each a veto. Thus the attractive efficiency result depends on sincere preference revelation and workable coordination. Unanimity protects people against being outvoted, but may block beneficial decisions.

**Exam-ready:** Lindahl prices allocate the marginal cost across people so that all demand the same public-good quantity; their summed marginal benefits then equal marginal cost. Strategic misreporting and the cost of achieving unanimity limit implementation.

## 2.3 Majority voting: count pairwise preferences before naming a winner

Majority voting decides which of two alternatives more than half the voters prefer. A **Condorcet winner** beats every other feasible alternative in such pairwise comparisons. A plurality winner, the option with the most first-choice votes, need not satisfy that property. With more than two alternatives, write every pairwise contest explicitly.

R&G's missile example orders A as low, B as medium and C as high provision. Its Table 6.2 produces A beating B, B beating C, and C beating A, each 2–1. Individual rankings can each be consistent while the majority relation is inconsistent. This is the **voting paradox**, and repeated challenges can produce **cycling**. [R&G, “Majority Voting Rules,” PDF pp.194–196](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=194>).

An agenda setter can exploit the cycle. If A faces B first, A wins, then C defeats A: final result C. If B faces C first, B wins, then A defeats B: final result A. If C faces A first, C wins, then B defeats C: final result B. The final outcome depends on the sequence, despite unchanged preferences. This calculation assumes sincere voting in each contest and a two-stage elimination procedure; strategic voting can require a different analysis.

**Exam-ready:** Majority comparisons can cycle even when each voter has a consistent ranking. With a cycle, the order of votes can determine the final outcome, giving the agenda setter power.

## 2.4 Preference shapes: what single-peakedness does and does not mean

Put all alternatives on a common ordered axis, such as euros spent on roads. A voter has **single-peaked preferences** if utility falls as the outcome moves farther from their preferred level on either side. The peak can be at an endpoint. Single-peaked does not require a symmetric parabola or equal losses for equal distances on opposite sides. It restricts the ordering on each side; it does not generally tell us which of two points on opposite sides the voter prefers.

For a differentiable model $U_i(m)=a_i\ln m-c_im$, with $a_i,c_i>0$, spending (m>0), fixed parameters and a fixed tax share incorporated into $c_i$,

\[
\frac{dU_i}{dm}=\frac{a_i}{m}-c_i,
\quad \frac{d^2U_i}{dm^2}=-\frac{a_i}{m^2}<0.
\]

Solve $a_i/m=c_i$ by multiplying by $m/c_i$: $m_i^*=a_i/c_i$. The first derivative is positive for (m<a_i/c_i), zero at the peak and negative for $m>a_i/c_i$. This supplies the rising-then-falling argument as well as the second-order check. A first-order condition alone need not identify a maximum. If spending is bounded above by (\bar m<a_i/c_i), the preferred feasible amount is the boundary $\bar m$; check the domain before reporting an interior solution.

Why might a voter prefer low or high provision but dislike the middle? The book's Vince can use a private country club if the public park is small or medium. Medium park spending raises his tax without giving him a substitute he wants to use; a sufficiently good large park lets him abandon the club. This switching creates two attractive regions. Multidimensional alternatives, such as different uses of a vacant building, can also fail a common one-dimensional ordering. [R&G, preference definitions and examples, PDF pp.196–198](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=196>).

The presence of a non-single-peaked voter **permits** a cycle; it does not guarantee one. DQ6.1 below is an important counterexample. Conversely, unanimous single-peakedness on a common one-dimensional order is a sufficient condition for the median result under the voting assumptions.

## 2.5 The median voter: a stable majority outcome

Order the voters by preferred policy level. For an odd number of equally weighted voters, the middle peak is the **median**. It is not the arithmetic average of peaks. If all preferences are single-peaked on the same one-dimensional policy axis and voting is sincere and pairwise, the median peak defeats every other level.

To prove it, call the median peak $m_M$. Compare it with a proposal (m<m_M). At least half the voters plus the median have peaks at or above $m_M$; both proposals lie weakly left of their peaks, so they prefer $m_M$ to the lower proposal. For $m>m_M$, the mirror argument uses voters with peaks at or below $m_M$. Thus a majority supports $m_M$ against proposals on either side. No assumption about comparing symmetric distances is needed. With an even electorate the central interval/ties require an explicit rule. Groups of unequal size must be weighted by voters, not counted as equal groups.

The book's party example places Huey's preferred expenditure, 150 dollars, in the middle of five peaks. Changes beyond 150 are opposed by at least three voters; the median outcome is 150. [R&G, “The Median Voter Theorem,” PDF pp.198–199](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=198>).

A majority winner is not automatically efficient. Voting counts support but ignores **intensity**. For a constructed teaching example, three voters have utilities $U_i(m)=a_i\ln m-m/3$, with $a_i=2,6,10$. Peaks are (6,18,30), so the median is 18. Summed utility is $18\ln m-m$, whose derivative $18/m-1=0$ also gives 18; that equality is a feature of these particular numbers. Change the last coefficient to 20: peaks become (6,18,60), median remains 18, but summed utility becomes $28\ln m-m$, with efficient spending 28. The high-benefit voter's stronger willingness to pay affects the welfare optimum but not the median's location. Compare money-based aggregate benefits and costs only when the utility specification supports that interpretation; arbitrary ordinal utilities cannot generally be summed as euro surplus.

**Exam-ready:** With single-peaked preferences on a common one-dimensional axis, the median preferred level wins every pairwise majority contest. This ensures stability under those assumptions, but it does not ensure efficiency because votes do not measure the strength of gains and losses.

## 2.6 Logrolling: exchange votes, then check everybody's payoff

Suppose one voter strongly wants a hospital but mildly opposes a library, while another has the opposite pattern. Each can agree to support the other's project. This **logrolling** registers some intensity of preferences through willingness to trade support. In the book's Table 6.4, Melanie and Rhett gain 160 and 100 respectively by supporting hospital and library together; separately both projects fail. Each project has positive aggregate net benefits. Vote exchange improves welfare, although their bilateral deal need not pass every socially valuable project. [R&G, “Logrolling,” PDF pp.200–202](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=200>).

The danger is a majority coalition imposing large costs on an outsider. Table 6.5 keeps trades beneficial to the coalition while changing costs so projects have negative total benefits. The agreement can still pass them because coalition members ignore the minority's losses. Evaluate a proposed trade in two stages: first add each participant's gains across the package to see whether the agreement is privately attractive; then add **all voters'** gains to assess efficiency. Private benefit and social benefit are separate calculations.

Allowing monetary side payments can sometimes support efficient projects or block harmful ones by letting gains finance compensation, as in the book's examples. It does not establish that real-world vote markets universally produce efficient, legitimate policies: enforceability, transaction costs and omitted effects still matter.

**Exam-ready:** Trading votes can let intense beneficiaries secure projects that simple majority voting rejects. It can also let a majority pass projects whose gains to the coalition are smaller than the costs imposed on the minority.

## 2.7 Arrow: understand the conditions before using the conclusion

Can a better aggregation rule avoid all these problems? R&G lists six appealing requirements: the rule accepts every configuration of preferences; it ranks all alternatives; it respects unanimous preference; its rankings are consistent or transitive; the ranking of A versus B depends only on people's rankings of A versus B; and it is not dictatorial. The fifth is **independence of irrelevant alternatives**, not a statement that a new option cannot ever change an election's winner under another rule.

Arrow's theorem says that, in the general setting with at least three alternatives and unrestricted preference profiles, one cannot guarantee a collective ordering satisfying all these requirements together. It does not say every actual vote cycles, that democracy cannot make any decision, or that no restricted-domain rule works. The median theorem restricts preferences to single-peaked profiles and therefore does not contradict Arrow's unrestricted-domain requirement. [R&G, “Arrow's Impossibility Theorem,” PDF pp.202–204](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=202>).

The theorem also qualifies the use of social welfare functions. An economist may use a stated function to show what follows from particular ethical weights without claiming it is a uniquely democratically chosen representation of society's preferences.

**Exam-ready:** Arrow establishes a conflict among seemingly reasonable requirements for aggregating unrestricted individual rankings. It rules out a universally satisfactory rule under those joint conditions, rather than proving that every voting outcome is inconsistent.

## 2.8 Representatives and public employees have choices too

In a two-candidate election, candidates seeking votes can converge toward the median policy. The textbook's simplified setting has one policy dimension, single-peaked voters, voting based on positions, and candidates who maximise votes. Under the familiar closest-position representation, a candidate at the median defeats a rival away from it: the median candidate receives all voters on one side of the median and some between the two platforms. The rival has an incentive to move inward. [R&G, “Elected Politicians,” PDF pp.204–208](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=204>).

This electoral version needs more assumptions than merely locating the middle of a list. Policy can have several dimensions; candidates can value ideology or office benefits besides vote count; voters can care about personality; leaders can influence preferences or the composition of their constituencies; and abstention changes who is represented. A tiny probability of casting the decisive vote also helps explain weak private incentives to spend time voting or becoming informed. Political participation may additionally reflect duty and values. Treat convergence as conditional, not a universal prediction that parties become identical.

**Bureaucrats** implement laws whose details elected officials leave open. Their expertise and longer tenure provide information and institutional memory, which are useful but also create discretion. If an official benefits from reputation, patronage or the size of a budget, they may seek services beyond the point where marginal social benefit equals marginal cost. The chapter discusses this as one explanation of excessive spending; it supplies no universal numerical budget-maximisation equation. A competent short answer identifies discretion, an objective and the resulting policy margin. [R&G, “Public Employees,” PDF pp.208–209](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=208>).

**Exam-ready:** Politicians converge toward the median only under restrictive assumptions about policy dimensions, voter behaviour and their own objectives. Public employees' information and implementation discretion can let their interests influence spending beyond voters' preferred level.

## 2.9 Organised interests, rent-seeking and the difference between transfers and waste

Why can a small group win a policy whose aggregate cost exceeds its benefit? Concentrated gains make organising worthwhile for each beneficiary; diffuse losses give each consumer little incentive to investigate or oppose it. Groups can form around industry, region, income or personal characteristics. Organisation itself has a free-rider problem: a person may receive the group's policy benefit without paying membership costs. Small groups or sanctions against nonparticipants can help sustain organisation. [R&G, “Special Interests,” PDF pp.209–214](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=209>).

The book's peanut-licence example illustrates **rent-seeking**: using government to obtain returns above the ordinary competitive return. A cartel wants to restrict industry output, but each member would privately like to expand production at the higher price. Government licences and quotas can enforce the restriction, making the cartel sustainable. Existing producers gain; consumers pay more; some otherwise valuable trades disappear. The historical book example is a description of that setting, not a claim about current peanut policy.

Define inverse demand $P(Q)=a-bQ$, (a>c>0,b>0), and constant marginal cost (c). Competition has $P=c$, so $Q_C=(a-c)/b$. A cartel chooses joint output to maximise profit $\Pi(Q)=(P(Q)-c)Q$. Substitute, expand and differentiate with respect to $Q$, keeping (a,b,c) fixed:

\[
\Pi(Q)=(a-bQ-c)Q=(a-c)Q-bQ^2,
\quad \Pi'(Q)=a-c-2bQ.
\]

The first-order condition gives $Q_M=(a-c)/(2b)=Q_C/2$; $\Pi''=-2b<0$. Substitute back:

\[
P_M=a-b\frac{a-c}{2b}=a-\frac{a-c}{2}=\frac{a+c}{2}.
\]

Cartel rents are the rectangle $(P_M-c)Q_M=(a-c)^2/(4b)$. Output loss is the triangle

\[
DWL=\tfrac12(P_M-c)(Q_C-Q_M)=\frac{(a-c)^2}{8b}.
\]

On the graph quantity is horizontal, euros per unit vertical. Label demand, horizontal marginal cost, the cartel quantity and price, the rent rectangle and the missing-trades triangle. The rent rectangle is initially a **transfer** from consumers to producers; it is not automatically destroyed. If lobbyists and lawyers consume real resources to secure the privilege, add those opportunity costs. If all rents are dissipated in resource-using competition for the privilege, total loss is the triangle plus rectangle. Pure lump-sum bribes or contributions are transfers in this model; labelling them unethical does not make their euro value an extra resource cost. The book explicitly cautions that full rent dissipation need not occur. [R&G, Figure 6.4 and “Rent-Seeking,” PDF pp.210–214](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=210>).

**Exam-ready:** Concentrated producer gains can sustain lobbying while each consumer's small loss weakens opposition. A government-enforced output restriction creates both transfers to producers and a deadweight-loss triangle; real resources spent obtaining the privilege add a further welfare cost.

## 2.10 Why government can grow without one explanation fitting everything

R&G presents competing, sometimes complementary mechanisms rather than one proven law. If public services are income elastic, demand can rise faster than income as citizens become richer (**Wagner's law**). Inelastic demand and increasing relative service prices can also increase expenditure shares. This is compatible with citizens choosing more government; growth alone does not demonstrate failure.

Wars or crises can raise spending and financing capacity, after which inertia prevents a full reversal. Redistribution models link policy to the median voter's income relative to mean income: when the mean exceeds the median, the median voter can gain from taxes financing broadly shared transfers. Extending voting rights can change the constituency favouring such policies. Actual transfers to the middle class, richer groups, or in-kind benefits complicate a simple poor-versus-rich model. The chapter also considers Marxist and social-attitudes explanations, stressing their weaknesses: its historical discussion does not make either a sufficient account. Courts, journalists and experts can affect fiscal choices too. [R&G, “Other Actors” and “Explaining Government Growth,” PDF pp.214–219](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=214>).

This completes the chapter's assigned scope. The practical skill is to explain a mechanism, identify its assumptions, and distinguish a plausible explanation from evidence uniquely proving it.

## 2.11 Attempt-first practice

The original values and preference tables are retained. Prompts are faithful condensed restatements; consult the source links for full wording. Book questions have no official exam marks.

1. **Prerequisite check.** Distinguish a peak, the median of peaks and the sum-of-benefits optimum. Give a positive and a normative explanation of the same policy. Why does single-peakedness not require a symmetric utility curve?
2. **25 October 2024 final Q8a–b, 1+1 marks, PDF p.13.** [Original and scheme](<../../Past exams/Finals/2024-10 Final (with solutions).pdf#page=13>). Three equally large groups choose road-maintenance spending $m$, in millions of euros. North prefers 20, West 40, East has $U_E=5\ln m-m/3$. All have single-peaked preferences. (a) Derive East's optimum and show single-peakedness. (b) Find the spending level beating every other level in pairwise voting and explain.
3. **24 October 2025 final Q8a–b, 2+2 marks, PDF p.15.** [Original and scheme](<../../Past exams/Finals/2025-10 Final (with solutions).pdf#page=15>). Northern resource extraction hurts the North increasingly at the margin; revenue benefits all citizens equally. Government knows all benefits and costs but extracts beyond the efficient amount. Give (a) a normative and (b) a positive explanation, at most two sentences each.
4. **R&G DQ6.1a–b, PDF pp.220–221.** [Original table, visually verified](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=220>). Voters' rankings from best to worst are: 1: A,D,C,B; 2: A,C,B,D; 3: D,B,C,A; 4: C,B,D,A; 5: B,C,D,A. (a) Sketch rank/utility profiles on axis A,B,C,D. (b) Does a project win pairwise majority contests?
5. **R&G DQ6.10a–b, PDF p.223.** [Original table, visually verified](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=223>). John ranks M,L,H; Eleanor ranks L,M,H; Abigail ranks H,M,L. (a) Run M–H, H–L and L–M votes; identify stability and agenda power. (b) Change Eleanor's ranking to L,H,M and repeat. The source inconsistently mentions schools and a public park; the voting calculation uses its H/M/L spending alternatives in either case.
6. **R&G DQ6.9a–e, PDF pp.222–223.** [Original](<../../Textbooks/Rosen & Gayer - Public Finance (10th ed).pdf#page=222>). Milk demand is $Q=100-10P$; horizontal supply has price 2. Find (a) competitive price and quantity, (b) cartel price and quantity using $MR=10-Q/5$, (c) rents, (d) the maximum lump-sum campaign contribution and deadweight loss, (e) how resource-using lobbying changes the welfare loss.
7. **Constructed transfer exercise.** Three voters' net benefits from project X are (90,-20,-35); from Y they are (-15,70,-65). Which projects pass separately? Would voters 1 and 2 trade support? Does their private gain show both projects should be built? Explain using totals.

The [new Week 7 walkthrough](02-week7-walkthrough.md) supplies the current tutorial sequence: DQ6.1(b), DQ6.3, DQ6.10 (6.11 in older editions), and additional exercises 7.1–7.4. The book sequence below remains useful: DQ6.1 tests the non-single-peaked caveat, DQ6.10 tests agenda power, and DQ6.9 tests government failure with explicit welfare accounting.

## 2.12 Worked solutions

### 1. Prerequisite check — independently derived

A peak maximises one voter's utility. The median orders voters' peaks and picks the middle one. The efficient provision amount equates summed marginal willingness to pay with marginal resource cost; it need not be either the median or arithmetic average. A positive resource-policy explanation is that a majority receives benefits while a small northern minority bears the concentrated harm. A normative explanation is that the government weights beneficiaries' utility more strongly. Single-peakedness imposes monotonic decline on either side of one peak, not equal utility at points equally far to its left and right.

### 2. F24 Q8 — official logic with missing algebra shown

The first task is maximisation and verification. Differentiate with respect to (m>0): $dU_E/dm=5/m-1/3$. Set it to zero, then multiply by (3m>0): $15-m=0$, so $m_E^*=15$. The derivative is positive below 15 and negative above it. The second derivative (-5/m^2<0) confirms a unique maximum and single-peakedness. The scheme allocates half a mark to the peak and half to the second-order/single-peaked reasoning.

Order peaks (15<20<40). Because the groups have equal population and all are single-peaked, North is the median group. Thus $m=20$ wins against every alternative: for a lower proposal North and West support 20; for a higher proposal East and North support 20. This is the one-mark explanation. The official scheme permits correct median reasoning using an assumed East peak after an error in part a. Do not use $(15+20+40)/3=25$: average preferences do not count votes correctly.

### 3. F25 Q8 — official logic, two distinct answers

**Normative, two sentences:** The government may put relatively low social-welfare weight on northern citizens and higher weight on people elsewhere. Extra extraction can then raise its weighted social welfare despite lowering unweighted aggregate surplus.

**Positive, two sentences:** Northern citizens may be a minority, while a majority gains revenue and bears little of the local damage. Vote-seeking politicians can therefore promise extraction above the socially efficient level.

Each is worth two marks under the scheme when applied to the scenario. Corruption with officials receiving extraction revenue is another accepted positive explanation. Extra public spending or reduced distortionary taxation is not the required normative answer: the question already counts all revenue benefits in its efficiency benchmark.

### 4. DQ6.1 — independently derived; original table checked in PDF

For the sketch use vertical heights 4,3,2,1 for best through worst ranks; these are ordinal plotting labels, not interpersonally comparable utilities. Along A,B,C,D the five profiles are:

| Voter | A | B | C | D | Single-peaked on this order? |
|---|---:|---:|---:|---:|---|
| 1 | 4 | 1 | 2 | 3 | No: utility rises again after B |
| 2 | 4 | 2 | 3 | 1 | No: utility rises again at C |
| 3 | 1 | 3 | 2 | 4 | No: utility falls then rises toward D |
| 4 | 1 | 3 | 4 | 2 | Yes: rises to C then falls |
| 5 | 1 | 4 | 3 | 2 | Yes: rises to B then falls |

Pairwise results are B over A (3–2), C over A (3–2), D over A (3–2), C over B (3–2), B over D (3–2), and C over D (3–2). For example C beats B because voters 1,2,4 prefer C; C beats D because voters 2,4,5 prefer C. Therefore **C is the Condorcet winner**, despite some non-single-peaked profiles. This is why failing the theorem's sufficient conditions does not prove that voting must cycle.

### 5. DQ6.10 — independently derived; original table checked in PDF

Part a: M beats H because John and Eleanor prefer M. L beats H because John and Eleanor prefer L. M beats L because John and Abigail prefer M. Each margin is 2–1. Thus M beats both rivals and is stable; a sincere elimination agenda including all alternatives cannot change the final winner.

Part b: after Eleanor changes, H beats M (Eleanor and Abigail), L beats H (John and Eleanor), and M beats L (John and Abigail). The relation cycles: $H\succ M\succ L\succ H$. To finish with H, first vote M against L (M wins), then H against M (H wins). To finish with M, first vote H against L (L wins), then M against L. To finish with L, first vote H against M (H wins), then L against H. Eleanor now prefers either endpoint to the middle, violating single-peakedness on L,M,H. The sequence matters under the stipulated sincere voting procedure.

### 6. DQ6.9 — independently derived from the book's model

(a) Competition gives $P_C=MC=2$, and $Q_C=100-10(2)=80$.

(b) Set $MR=MC$: $10-Q_M/5=2$. Subtract 2 and multiply by 5: $Q_M=40$. Invert demand: $10P=100-Q$, so $P=10-Q/10$. Therefore $P_M=10-40/10=6$. This maximises cartel profit, since total revenue $10Q-Q^2/10$ has second derivative (-1/5<0).

(c) Rents equal $(6-2)(40)=160$, assuming no extra fixed costs. Revenue is $6(40)=240$, variable production cost $2(40)=80$, so their difference agrees with 160.

(d) Farmers would pay at most their 160 rent gain to maintain the privilege. Lump-sum contributions transfer income rather than consume resources in this model. Deadweight loss is $\frac12(6-2)(80-40)=80$. Check via consumer surplus: before the cartel it is $\frac12(10-2)(80)=320$; after it is $\frac12(10-6)(40)=80$. Consumers lose 240, of which 160 transfers to producers and 80 disappears.

(e) Let $L_r$ be the real opportunity cost of lobbying and legal services; total loss becomes $80+L_r$. With full dissipation $L_r=160$, the loss is 240. The question gives no realised spending amount, so 240 is a conditional full-dissipation value, not an inevitable exact answer. Paying lobbyists does not make every euro a simple transfer: their time could have produced other services.

### 7. Constructed transfer — independently derived

X loses 1–2, and Y loses 1–2. Their social net benefits are $90-20-35=35$ and $-15+70-65=-10$. Building X alone is efficient in this net-benefit setting; building Y is not. If voters 1 and 2 trade, their package gains are $90-15=75>0$ and $-20+70=50>0$; both support both bills. Voter 3 loses $35+65=100$. The package's total is $75+50-100=25>0$, better than neither project but worse than X alone $35$. Logrolling improves the separate-vote outcome without reaching the efficient outcome. This example shows why both coalition arithmetic and all-person welfare arithmetic are needed.

## 2.13 Revision test

You should be able to solve a utility peak with a maximum check, count all pairwise votes, distinguish a sufficient single-peakedness condition from a necessary one, prove the median result in words, show agenda power in a cycle, assess logrolling using every voter's losses, state Arrow's conditions accurately, and distinguish resource waste from transfers in rent-seeking. Practise the two-sentence positive explanation separately from a normative answer. These are different reasoning tasks even when they concern the same government policy.
