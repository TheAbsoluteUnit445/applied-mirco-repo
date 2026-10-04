# Applied Microeconomics FEB12001X — Past-exam inventory

Sources: the "(with solutions)" PDFs in `C:\Users\User\study\Applied Microeconomics\Past exams\`. All six are ANS grading-scheme printouts with a text layer (none scanned); `pdftotext -layout` extracted everything. Greek letters (alpha, beta, gamma, theta, lambda) were mostly lost in extraction, so parameter names below are reconstructed from context.

Notes on files:
- **"2025-07 Final" (now filed as `Resits/2025-07 Resit`)** is actually the **Resit of 8 July 2025 (online proctored)**, academic year 24/25.
- **"2026-07 Resit"** is the Resit of 7 July 2026, academic year 25/26.
- The point scales differ by year: 2024-10 = 26 pts, 2025-07 = 52 pts, 2025-10 and 2026-07 = 60 pts, and the midterms = 10 pts.

Legend: **Pub** = Public Economics (Delfgaauw, Rosen & Gayer); **Pers** = Personnel Economics (Dur, Kuhn).

---

## 1. Midterm 20 Sept 2023 (10 pts)

| Q | Pts | Part | Topic | Type | Skill | What is asked |
|---|---|---|---|---|---|---|
| 1a | 1 | Pub | Public goods: non-rivalry | Verbal | Read rivalry off the model setup | Explain how the MRS functions show that G is non-rival and x is rival (the MRS depends on the other person's G but not on their x) |
| 1b | 1 | Pub | Public goods: Samuelson rule | Numerical | MRS_A + MRS_B = MRT with MRS = x/(G_A+G_B) | Find the efficient G_A+G_B (= y/p_G) |
| 1c | 1 | Pub | Public goods: private provision / Nash | Numerical | Best-response functions (MRS_i = p_G), solve the system | Find the Nash contributions G_A = G_B = y/(3p_G); total 2y/(3p_G), which is too low |
| 2a | 1 | Pub | Externalities: negative externality in a 2x2 game | Verbal + game table | Find the dominant strategy and the efficient cell | Explain why the Nash equilibrium (Inside, Fire) differs from the efficient outcome (Outside, No fire). Max 4 sentences |
| 2b | 1 | Pub | Coase theorem | Verbal | State both conditions (property rights, low transaction costs) | Explain why both Coase conditions are likely met here |
| 3a | 2 | Pers | Incentive pay: linear piece rate (no base salary) | Numerical | Worker FOC, then firm maximises profit over b | Q = E+K, U = bQ − E²: derive the optimal b (= P/2 − K) and explain the steps |
| 3b | 1 | Pers | Piece rate: paying for output not due to effort | Verbal | Intuition for why b falls in K | Explain why the optimal b decreases in K |
| 3c | 1 | Pers | Participation constraint / base salary | Numerical | Set the PC to bind with outside option 0 | Show that the base salary a = −Kb − b²/4 |
| 3d | 1 | Pers | Two-part contract: rent extraction | Verbal (derivation optional) | Base salary claws back rents, so b → P/2 | Explain why adding a base salary raises the optimal b |

## 2. Midterm 17 Sept 2025 (10 pts)

| Q | Pts | Part | Topic | Type | Skill | What is asked |
|---|---|---|---|---|---|---|
| 1a | 1 | Pub | Public goods: Samuelson rule (quasi-linear) | Numerical | MU_A + MU_B = MC with U = aQ − ½Q² | Find the efficient Q = (a+b−c)/2 |
| 1b | 1 | Pub | Public goods: Nash / free riding | Numerical + reasoning | A provides a−c and B provides 0; B still consumes a−c | Find how much B consumes in the Nash equilibrium (trap: consumption ≠ provision) |
| 2a | 1 | Pub | Coase theorem: bargaining transfer | Numerical | Private optimum q = k, efficient q = k−c, profit loss = DWL triangle | Show that the minimum transfer from B to A is ½c² |
| 2b | 1 | Pub | Coase: comparative statics | Verbal (max 3 sentences) | Higher c means a bigger cut in q, so a bigger profit loss to compensate | Explain why T rises in c (link it to A's lost profit, not just "higher cost") |
| 2c | 1 | Pub | SWF / equity versus efficiency | Verbal (1 sentence) | Efficiency is already reached, so the reason must be redistribution | Give one reason for government intervention when Coase works |
| 3a | 2 | Pers | Incentive pay with "guilt" (tobacco), no base salary | Numerical | Worker FOC with a corner at e = 0 | U = bq − (quadratic effort cost) − γq (guilt per unit): derive e (∝ (b−γ), and 0 if b < γ) |
| 3b | 3 | Pers | Optimal piece rate | Numerical | Profit (p−b)q, substitute e(b), take the FOC | Derive the optimal b = (p+γ)/2 |

**Midterm coverage.** Both midterms are held in the 3rd week of September, so they cover only the first weeks.
- **Public:** market failure and efficiency. This means Samuelson public goods, private provision with Nash free-riding, externalities, the Coase theorem, and SWF/equity in one-liners only. These are Rosen & Gayer ch 3–5 (welfare economics, public goods, externalities), roughly lectures 1–2.
- **Personnel:** the incentive-pay basic model only. This means a linear bonus or piece rate, the worker's effort FOC, the firm's optimal b, and the participation constraint with a base salary (Kuhn's early incentive-pay chapters).
- Midterms contain **no** tax incidence, excess burden, optimal tax, voting, redistribution programmes, monopsony, tournaments, signalling or empirical-design questions.

---

## 3. Final 25 Oct 2024 (26 pts)

| Q | Pts | Part | Topic | Type | Skill | What is asked |
|---|---|---|---|---|---|---|
| 1a | 1 | Pers | Non-profit / monopsony labour supply N(w) | Model setup | Write the budget constraint | B = wN(w) + pZ |
| 1b | 1 | Pers | Volunteers / intrinsic motivation | Verbal interpretation | Interpret N(0) > 0 | Explain that some people work for free (volunteers) |
| 1c | 2 | Pers | Non-profit wage setting (monopsony-type FOC) | Derivation + interpretation | Substitute Z from the budget, take the FOC in w, interpret each term | FOC N′(w)Q − (1/p)[N + wN′] = 0, with the meaning of each term |
| 2a | 1 | Pers | Teams / partnership free-riding (1/N problem) | Numerical | Effort FOC with an equal revenue share | Arno's effort under the 50/50 split (p/(2γ_a)) |
| 2b | 1 | Pers | Teams: efficient effort | Numerical | Maximise the sum of utilities | Efficient e_a = p/γ_a and e_b = p/γ_b |
| 2c | 1 | Pers | Teams: alternative sharing rule | Numerical | FOC under a proportional-to-effort share | Arno's effort when he gets e_a/(e_a+e_b) of revenue (= p/γ_a) |
| 2d | 1 | Pers | Teams: checking efficiency | Describe method | Compare the induced efforts with the efficient efforts | Describe how to check whether the rule maximises welfare |
| 2e | 1 | Pers | Teams: individual welfare comparison | Describe method | Substitute both regimes' equilibrium efforts into Arno's utility and compare | Describe how to check whether Arno is worse off |
| 3a | 1 | Pers | Prosocial / profit-caring worker plus bonus | Numerical | Effort FOC with altruism toward profits | e = [b + λ(P−b)]/γ |
| 3b | 2 | Pers | Empirical design (RCT, heterogeneous effects) | Research design | Randomise the bonus across plants, measure λ, test heterogeneity | Design a study to test that high-λ workers respond less to the bonus |
| 4 | 1 | Pers | Screening / self-selection via probation (two-period pay) | Derive conditions | Two incentive/participation constraints | Conditions on W1 and W2 so that only skilled agents apply |
| 5a | 1 | Pub | Public goods: Samuelson with three people, increasing MC | Numerical | Sum MRS = MRT (= θQ) | Efficient Q = (α+b+d)/θ |
| 5b | 1 | Pub | Public goods: efficiency loss intuition | Verbal | The provider internalises her own MU and ignores others | Explain why the efficiency loss ½(b+d)²/θ does not depend on Anne's α |
| 5c | 1 | Pub | Coase-style partial bargaining / willingness to pay | Numerical | Efficient Q for the bargaining pair, then WTP = d × ΔQ | Max transfer Dikra pays Anne (= d²/θ) |
| 6a | 1 | Pub | Externalities: ban versus laissez-faire | Numerical | Total surplus = CS + PS − external cost versus 0 | Condition on α under which a ban reduces efficiency (α > 30) |
| 6b | 1 | Pub | Externalities: intuition | Verbal | Higher α means higher CS, so a ban costs more | Explain the dependence on α |
| 6c | 1 | Pub | Tax incidence | Numerical | Pre- and post-tax equilibrium, split the burden | Consumers' share of a €30 unit tax (2/3) |
| 6d | 1 | Pub | Tax incidence intuition | Verbal | Supply elasticity lets producers shift the tax | Why consumers bear part of a tax levied on producers |
| 7a | 1 | Pub | Excess burden | Numerical | Harberger triangle ½·t·ΔQ (or the elasticity formula) | EB of a €50 champagne tax (= 5000) |
| 7b | 2 | Pub | Cost-benefit with a weighted SWF (marginal utility of income λ for the poor) | Numerical | Benefits minus (revenue + EB), weighted by MU of income | λ for which building the park raises SW (λ > 1.25) |
| 7c | 1 | Pub | Second Fundamental Welfare Theorem | Verbal | Efficiency and distribution become separable | How lump-sum redistribution changes the park decision |
| 8a | 1 | Pub | Collective decisions: single-peaked preferences | Numerical | Maximise U = 5 ln m − m/3, then the SOC | Find m_E = 15 and show single-peakedness |
| 8b | 1 | Pub | Median voter theorem | Reasoning | Identify the median of the peaks | Which m wins pairwise majority voting (m = 20) |

Split: **Personnel Q1–4 = 13 pts; Public Q5–8 = 13 pts.**

## 4. Resit 8 July 2025 (file "2025-07 Final", 52 pts)

| Q | Pts | Part | Topic | Type | Skill | What is asked |
|---|---|---|---|---|---|---|
| 1a | 2 | Pub | Congestion / tragedy of the commons | Numerical | Nash: travel times equal across modes | Number of car users in equilibrium (C = 2000) |
| 1b | 4 | Pub | Commons: efficient versus Nash | Numerical + verbal | Minimise total travel time; explain the externality | Show the efficient C = 1000 < 2000 and explain why (negative externality) |
| 1c | 2 | Pub | Commons: policy comparison | Numerical | Recompute the Nash equilibrium under each proposal | Total time saved from road expansion (0, induced demand) versus bike lanes (25,000 min) |
| 1d | 2 | Pub | Pigouvian tax versus subsidy | Verbal (max 3 sentences) | With a binary choice, only relative cost matters | Is a bike subsidy or a car tax better for efficiency? (Equivalent) |
| 2a | 2 | Pub | Asymmetric info: adverse selection (lemons) | Proof / derivation | Expected buyer WTP < high-quality seller reservation price | Prove adverse selection iff B_H < 300 + 200/π |
| 2b | 2 | Pub | Adverse selection comparative statics | Verbal | Higher share of good units raises expected WTP | Why the threshold B_H falls in π |
| 2c | 2 | Pub | Adverse selection equilibrium prices | Verbal | Only lemons trade: S_L ≤ p ≤ B_L | Range of possible prices (100–300) |
| 3a | 2 | Pub | Pareto improvement with a lump-sum tax | Numerical | Compare the per-head tax with individual benefits | Is the dyke a Pareto improvement? (No: 15 < 20) |
| 3b | 2 | Pub | Excess burden | Numerical | ½·t·ΔQ with perfectly elastic supply | EB of a €5 tax on X (= 50) |
| 3c | 2 | Pub | Optimal tax: inverse elasticity rule | Numerical + rule | Compute the demand elasticity at equilibrium and compare | Should t_X be above or below t_Y? (ε_X = 5/7 < 2, so t_X higher) |
| 3d | 2 | Pub | Ramsey rule intuition | Verbal (max 4 sentences) | Elastic demand means large substitution and DWL | Why tax elastic goods at lower rates |
| 3e | 2 | Pub | Weighted utilitarian SWF + lump-sum financing | Numerical | Weighted benefits versus weighted costs | For what λ (MU of the poor) to build the dyke (λ < 2) |
| 4a | 3 | Pers | Incentive pay with guilt (tobacco), base salary allowed | Numerical + interpretation | Effort FOC with a corner | Condition for positive effort (b > γ) and its intuition |
| 4b | 2 | Pers | Participation constraint | Derivation | U ≥ V, solve for a | Lowest base salary a that attracts the worker |
| 4c | 3 | Pers | Optimal bonus with a two-part contract | Numerical | Substitute e(b) and a(b) into profit, FOC | Optimal b = p (sell the job to the worker) |
| 4d | 2 | Pers | Comparative statics of guilt γ | Verbal (2 sentences) | PC effect plus effort effect | Two reasons why lowering γ raises profit |
| 5a | 2 | Pers | Effort with concave utility of income | Derivation | FOC bV′(a+be) − c = 0 | Write down the effort FOC |
| 5b | 2 | Pers | Income effect of the base salary | Comparative statics via the FOC | Higher a lowers V′, so marginal benefit falls | Effect of a higher base salary on effort (falls) |
| 5c | 2 | Pers | Diminishing marginal utility | Verbal (1 sentence) | Motivate the concavity | Why utility of income is concave |
| 6a | 2 | Pers | Workplace amenities / compensating differentials (social media ban) | Reasoning | Compare the worker's loss V with the firm's gain X | When is a ban efficient? (X > V) |
| 6b | 2 | Pers | Amenities with a binding minimum wage | Reasoning | The firm ignores worker utility when the PC is slack | Manager's choice (ban) |
| 6c | 2 | Pers | Amenities with wages set at the PC | Reasoning | The wage adjusts by V, so the firm internalises it | Manager's choice (allow if V > X) |
| 7a | 2 | Pers | Empirical: causality versus before/after | Verbal | Confounders and time trends | Why a 20% sales rise does not prove the bonus works |
| 7b | 2 | Pers | Empirical: RCT design | Research design | Randomise stores into treatment and control | How to identify the effect reliably |

Split: **Public Q1–3 = 26 pts; Personnel Q4–7 = 26 pts.**

## 5. Final 24 Oct 2025 (60 pts)

| Q | Pts | Part | Topic | Type | Skill | What is asked |
|---|---|---|---|---|---|---|
| 1a | 2 | Pers | Monopsony versus perfect competition | Verbal | Labour supply to the firm is infinitely elastic | Value of N′(W) under perfect competition (+∞) and why |
| 1b | 2 | Pers | Monopsony FOC interpretation | Interpretation | MC = N (wage bill); MB = N′(Q−W) | Explain the marginal benefits and costs of a raise |
| 1c | 2 | Pers | Monopsony markdown formula W = εQ/(1+ε) | Numerical | Plug in the elasticity | W at ε = 2 and Q = 6000 (W = 4000; profit 2000 per worker) |
| 2a | 2 | Pers | Pooling wages / symmetric uncertainty | Numerical | Zero profit means wage = expected productivity | Salary distribution (everyone earns 50) |
| 2b | 2 | Pers | Free certification: unravelling (disclosure) | Reasoning + iteration | Iterate the pooled wage 50 → 35 → 27.5 → ... | Equilibrium (full unravelling; all earn their productivity) |
| 2c | 3 | Pers | Costly certificate: signalling / screening equilibrium | Numerical | Indifference: q* − 20 = (q*+20)/2 | Who buys the certificate (q ≥ 60; uncertified earn 40) |
| 3a | 2 | Pers | Tournaments / promotion with pride utility | Numerical | Effort FOC with p_i = ½ + α(e_i − e_j) | FOC α(Z+P) − e = 0 |
| 3b | 3 | Pers | Tournament participation constraint | Derivation | Symmetric p = ½, PC = 2V, substitute e | Show the minimum W formula |
| 3c | 2 | Pers | Comparative statics of pride P | Verbal | Prize-value effect versus effort-cost effect | Two opposing effects of P on the job's attractiveness |
| 3d | 3 | Pers | Optimal tournament prize | Numerical | Profit = 2Re − Z − 4W, substitute, take the FOC in Z | Optimal Z = R/π − P (corrected against grading scheme) |
| 4a | 2 | Pers | Labour supply (hours) FOC | Interpretation | MB of hours versus MC (lost leisure) | Interpret W·V′(WH) − X′(24−H) = 0 |
| 4b | 2 | Pers | Wage change: substitution versus income effect | Comparative statics via the FOC | Explain both effects in words | Effect of a higher W on hours |
| 5a | 1 | Pers | Empirical: correlation is not causation | Verbal (1 sentence) | Selection / confounders | Can we conclude variable pay hurts performance? (No) |
| 5b | 2 | Pers | Empirical: experiment requirements | Verbal | Randomisation, scale, duration, no contamination, measurement | Two requirements for a reliable experiment |
| 6a | 2 | Pub | Redistribution: weighted SWF with concave (√) utility | Numerical | Lagrange / w·MU_A = MU_B | Optimal I_A and I_B given weight w and parameter α |
| 6b | 2 | Pub | SWF weights intuition | Verbal (2 sentences) | A higher weight means society values A's utility more | Why I_A rises in w |
| 6c | 2 | Pub | Equity–efficiency trade-off (leaky bucket) | Verbal | Redistribution costs efficiency, so redistribute less | Does Berta get more, less or the same? (Less) |
| 7a | 2 | Pub | MRS derivation | Numerical | MRS = MU_y/MU_x | Show MRS_C = 8/√y_C |
| 7b | 2 | Pub | Private good efficiency | Numerical | MRS_i = MRT for each person | Efficient y_C = 4 and y_D = 1 |
| 7c | 2 | Pub | Public goods: Samuelson rule | Numerical | Sum MRS = MRT with common y | Efficient y = 9 |
| 7d | 2 | Pub | Public goods: Nash / free riding | Numerical + reasoning | D's corner solution; C sets MRS = MRT | Nash: D provides 0 and C provides 4 |
| 8a | 2 | Pub | Normative explanation of government "failure" | Verbal (max 2 sentences) | Distributional SWF weights | Normative reason for over-extracting resources |
| 8b | 2 | Pub | Positive explanation (political economy / public choice) | Verbal (max 2 sentences) | Majority voting, rent-seeking or corruption | Positive reason for over-extraction |
| 9a | 2 | Pub | Excess burden | Numerical | Equilibria with and without the tax, ½·t·ΔQ | EB of a €30 tax (= 150) |
| 9b | 2 | Pub | Tax incidence and elasticity | Verbal | Less elastic demand means consumers bear more | Larger or smaller consumer share if demand is less elastic? (Larger) |
| 9c | 2 | Pub | Pigouvian tax with MEC = βQ | Numerical | Efficient Q from D = S + MEC; tax = MEC(Q*) | Show the Pigouvian tax = 180β/(3+β) |
| 9d | 3 | Pub | Ban versus laissez-faire with an externality | Numerical | CS + PS − external cost ≥ 0? | β for which a ban improves efficiency (β > 3) |
| 10a | 2 | Pub | Optimal commodity tax: Ramsey / inverse elasticity | Numerical relations | t_i proportional to 1/ε_i | t_R = t_M/3 = t_P/9 |
| 10b | 1 | Pub | Tax progressivity | Verbal (1 sentence) | Average tax rate versus income | Is the Ramsey system progressive? (Regressive) |

Split: **Personnel Q1–5 = 30 pts; Public Q6–10 = 30 pts.**

## 6. Resit 7 July 2026 (60 pts)

| Q | Pts | Part | Topic | Type | Skill | What is asked |
|---|---|---|---|---|---|---|
| 1a | 2 | Pub | Public goods: Samuelson rule (quasi-linear) | Numerical | MU_A + MU_B = MC | Efficient q = (a+b−c)/2 |
| 1b | 2 | Pub | Public goods: Nash / free riding | Numerical + reasoning | A buys a−c, B buys 0 but consumes a−c | Ben's consumption in the Nash equilibrium (same trap as Midterm 2025 1b) |
| 1c | 3 | Pub | Pigouvian subsidy for a public good | Verbal (max 3 sentences) | B's MU is the marginal external benefit | Why the subsidy ½(b+c−a) rises in b |
| 1d | 2 | Pub | Coase theorem and public goods | Verbal (max 4 sentences) | Non-excludability means high transaction or enforcement costs | Which public-good characteristic violates Coase, and why |
| 2a | 3 | Pub | Welfare programme with a phase-out: budget constraint | **Graphical** | Draw a kinked income–leisure BC with numbers | Draw the BC with kinks at (L=175, Y=1100) and (L=115, Y=1700) |
| 2b | 2 | Pub | Work incentives of welfare (implicit tax 50%) | Graphical / verbal | Tangency argument: the opportunity cost of leisure drops to €10 | Does Bert work more or less than 85 h? (Less) |
| 2c | 2 | Pub | Efficiency loss of a transfer (equivalent variation) | Describe method | Grant received versus EV | Steps to compute the efficiency loss |
| 3a | 2 | Pub | Externality among consumers | Verbal (max 2 sentences) | An individual ignores costs imposed on other consumers | Why market failure arises even though victims are consumers |
| 3b | 2 | Pub | Tax incidence (tax on consumers) | Numerical | Pre- and post-tax equilibrium | Incidence of a €30 tax (producers bear 2/3) |
| 3c | 2 | Pub | Incidence and supply elasticity | Verbal | Elastic supply shifts the burden to consumers | Effect of higher supply elasticity |
| 3d | 2 | Pub | Welfare effect of a tax under an externality | Numerical | Total surplus with and without the tax (incl. revenue and external cost) | Does a €30 tax raise efficiency? (Yes, +800) |
| 3e | 2 | Pub | Pigouvian tax | Numerical | D = S + MEC, then tax = MEC(Q*) | Pigouvian tax (= 45) |
| 4a | 2 | Pub | Job search decision (welfare and labour supply) | Numerical | Expected utility of search versus no search with √Y | Which citizens search (θ ≥ 0.25) |
| 4b | 1 | Pub | Work requirements / conditionality | Verbal (max 3 sentences) | A mandate induces inefficient search (or monitoring costs) | Why mandatory search could reduce efficiency |
| 4c | 1 | Pub | Equity versus efficiency (normative) | Verbal (max 2 sentences) | Distributional / moral argument | Why not mandate search even if it is efficient |
| 5a | 2 | Pers | Relative income concerns / status (rat race) | Numerical | Nash FOC in hours | Hours each sister works (½(1+α)w) |
| 5b | 2 | Pers | Status externality: cooperative solution | Numerical | Maximise the sum of utilities (status terms cancel) | Jointly optimal hours (½w) |
| 5c | 2 | Pers | Correcting a positional externality with a tax | Model extension / reasoning | 100% marginal tax above the efficient income | Would they adopt an income tax, and what kind? |
| 6a | 2 | Pers | Intrinsic motivation: efficient effort | Numerical | Maximise utility + profit (bonus transfers cancel) | Efficient e = (p+θ)/γ |
| 6b | 2 | Pers | Intrinsic motivation and bonus response | True/false with derivation | de/db = 1/γ | Does higher θ weaken the bonus effect? (False) |
| 6c | 4 | Pers | Optimal piece rate with intrinsic motivation | Numerical | e(b), profit (p−b)q, FOC | Optimal b = ½(p−θ) |
| 6d | 2 | Pers | Intuition: paying a bonus on "free" output | Verbal (max 3 sentences) | The bonus also pays for intrinsically motivated output | Why the optimal b falls in θ (same logic as Midterm 2023 3b) |
| 7a | 1 | Pers | Public-sector motivation: unmotivated worker | Numerical | FOC with no bonus gives e = 0 | Output of an unmotivated worker (0) |
| 7b | 1 | Pers | Motivated worker: effort and participation | Numerical | e = θ/2; PC gives w ≥ U_alt − θ²/4 | Show higher θ means higher effort and a lower reservation wage |
| 7c | 1 | Pers | Staffing | Numerical | Q/(θ/2) | Number of motivated workers needed (2Q/θ) |
| 7d | 1 | Pers | Self-selection via low wages (screening) | Reasoning | A wage between U_alt − θ²/4 and U_alt attracts only the motivated | Is unobservable type a problem? (No) |
| 8a | 2 | Pers | Performance pay: incentive versus sorting effect | Verbal | Moral hazard (effort) plus adverse selection (sorting) | Two reasons performance pay can raise sales |
| 8b | 2 | Pers | Empirical: reverse causality / crowding out | Verbal | Selection into the treatment; crowding out of intrinsic motivation | Why stores with performance pay may do worse |
| 8c | 2 | Pers | Empirical: field experiment design | Research design | Randomise among the 400 stores, remove pay in the treatment group, compare | Sketch a credible experiment |
| 9a | 2 | Pers | Non-profit wage cost | Derivation | d(WN(W))/dW = N + WN′ | Marginal cost of a €1 higher wage |
| 9b | 2 | Pers | Monopsony definition | Verbal | N′ < ∞ | When does the organisation have monopsony power? |

Split: **Public Q1–4 = 30 pts; Personnel Q5–9 = 30 pts.**

---

## 7. Summary

### 7.1 Public / Personnel split per exam

| Exam | Total | Public | Personnel | Order |
|---|---|---|---|---|
| Midterm 2023 | 10 | 5 (Q1–2) | 5 (Q3) | Pub first |
| Midterm 2025 | 10 | 5 (Q1–2) | 5 (Q3) | Pub first |
| Final Oct 2024 | 26 | 13 (Q5–8) | 13 (Q1–4) | Pers first |
| Resit Jul 2025 | 52 | 26 (Q1–3) | 26 (Q4–7) | Pub first |
| Final Oct 2025 | 60 | 30 (Q6–10) | 30 (Q1–5) | Pers first |
| Resit Jul 2026 | 60 | 30 (Q1–4) | 30 (Q5–9) | Pub first |

Every exam is split exactly 50/50. The October finals put Personnel first, and the July resits and midterms put Public first.

### 7.2 Topic frequency (counts are exams where the topic appears / sub-questions)

**Public Economics**

| Topic | Exams (of 6) | Sub-Qs | Where |
|---|---|---|---|
| Public goods: Samuelson rule (efficient level) | 5 | 5 | M23, M25, F24, F25-10, R26 |
| Public goods: private provision / Nash free-riding | 4 | 4 | M23, M25, F25-10, R26 |
| Externalities: Pigouvian tax or subsidy | 3 | 4 | R25 (tax vs subsidy), F25-10, R26 (tax + subsidy for public good) |
| Externalities: ban versus laissez-faire / welfare effect of a tax with external cost | 3 | 4 | F24, F25-10, R26 |
| Coase theorem (conditions, transfer, bargaining) | 4 | 5 | M23, M25, F24 (5c), R26 |
| Commons / congestion | 1 | 4 | R25 |
| Externality / market-failure intuition (game table, consumer externality) | 2 | 2 | M23, R26 |
| Tax incidence (compute shares + elasticity intuition) | 3 | 6 | F24, F25-10, R26 |
| Excess burden (Harberger triangle) | 3 | 3 | F24, R25, F25-10 |
| Optimal tax: Ramsey / inverse elasticity | 2 | 3 | R25, F25-10 |
| Progressivity of a tax system | 1 | 1 | F25-10 |
| Weighted / utilitarian SWF, cost-benefit with MU-of-income weights | 4 | 5 | M25 (verbal), F24, R25, F25-10 |
| Equity–efficiency trade-off, 2nd welfare theorem, Pareto improvement | 4 | 5 | F24, R25, F25-10, R26 |
| Welfare / poverty programmes: budget constraint, work incentives, job search | 1 | 6 | R26 (Q2 + Q4) |
| Asymmetric info: adverse selection (lemons) | 1 | 3 | R25 |
| Collective decisions: median voter / single-peakedness | 1 | 2 | F24 |
| Positive versus normative explanation (political economy) | 1 | 2 | F25-10 |

**Personnel Economics**

| Topic | Exams (of 6) | Sub-Qs | Where |
|---|---|---|---|
| Linear piece rate / bonus: worker effort FOC + firm's optimal b | 5 | 14 | M23, M25, R25, F24 (3a), R26 |
| Participation constraint / base salary (two-part contract) | 4 | 5 | M23, R25, F25-10 (tournament), R26 (Q7) |
| Intrinsic / prosocial motivation, guilt, "caring about profits" | 4 | 11 | M25, R25, F24, R26 |
| Empirical design: RCT, correlation versus causation, selection | 4 | 8 | F24, R25, F25-10, R26 |
| Monopsony / non-profit labour supply N(W) | 3 | 8 | F24, F25-10, R26 |
| Screening / self-selection / signalling / certification | 3 | 5 | F24 (Q4), F25-10 (Q2), R26 (7d) |
| Tournaments / promotions | 1 | 4 | F25-10 |
| Teams / partnership free-riding | 1 | 5 | F24 |
| Labour supply (hours), income versus substitution effects; concave V(·) | 2 | 5 | R25 (Q5), F25-10 (Q4) |
| Relative income concerns / status (positional externality) | 1 | 3 | R26 |
| Amenities / compensating differentials (social media ban) | 1 | 3 | R25 |
| Performance pay: incentive versus sorting effect, crowding out | 1 | 2 | R26 |
| Efficiency wages, discrimination (taste-based), deferred-pay/Lazear | 0 | 0 | Not examined in these papers (2024 Q4 probation screening is the closest to deferred pay) |

### 7.3 Question types (rough share of sub-questions)

- **Numerical derivation**, about 55%. Mostly: maximise utility (worker effort, consumer), firm maximises profit over b or Z, Samuelson sum, Nash best responses, equilibrium with and without a tax, DWL triangle, efficient Q from D = S + MEC.
- **Verbal explanation / intuition**, about 35%. These have a strict sentence limit (1–4 sentences) and "no math in words". The marks hinge on the economic mechanism, not the term.
- **Describe-the-method / research design**, about 8%. Examples: "what steps would you take", RCT design, EV steps.
- **Graphical**, rare: only R26 Q2a (kinked welfare budget constraint).
- **True/false with derivation**, rare: R26 6b.

### 7.4 Recurring templates

1. **Samuelson plus Nash public-good pair.** This appears in every exam except R25. Either quasi-linear U = aQ − ½Q² (M25, R26 copy it nearly verbatim) or MRS-based (M23, F25-10). The Nash part is often a **corner solution**: the low-valuation person provides 0 but *consumes* the other's provision. The marking scheme explicitly penalises saying "Ben consumes 0".
2. **Linear market with an externality.** Linear demand and supply, then (i) a tax-incidence share via pre/post equilibria (often the answer is 2/3), (ii) the excess burden ½·t·ΔQ, (iii) a Pigouvian tax = MEC at Q* where D = S + MEC, (iv) a ban versus laissez-faire comparison of CS + PS − external cost, solved for a parameter. Seen in F24 Q6, F25-10 Q9 and R26 Q3. Each also has a 2-sentence "why does incidence depend on elasticity" part.
3. **Coase.** State the two conditions, compute the minimum or maximum transfer as a DWL-type triangle, or explain why public goods violate Coase (non-excludability means transaction costs).
4. **Weighted SWF cost-benefit.** A project financed by a (distortionary or lump-sum) tax, with groups having MU of income 1 and λ. Solve for λ. Seen in F24 Q7 and R25 Q3, followed by a 2nd-welfare-theorem or Pareto question.
5. **Ramsey / inverse elasticity.** Compute the elasticity at the equilibrium and rank the tax rates, or give t-ratios. Sometimes followed by "progressive or regressive?" (answer: regressive when the poor have inelastic demand).
6. **"Normative versus positive" or "efficiency is already reached, so why intervene?"** The answer is always distribution or SWF weights (normative) or voting/corruption (positive). Efficiency answers get 0.
7. **Linear incentive contract.** This is the backbone of Personnel and appears in nearly every exam. The template is: Q = e (+K), U = a + bq − ½γe² (+θe intrinsic motivation, −γq guilt, +λ·profit). Steps: (a) effort FOC, (b) PC gives the base salary, (c) the optimal b by substituting into profit, (d) a verbal "why does b fall in K/θ" (the bonus is paid on output not caused by the bonus) or "why does a base salary raise b" (rent extraction, so b → p).
8. **Monopsony / non-profit N(W).** Write the budget or profit, FOC, interpret MB versus MC terms, N′ = ∞ under competition, markdown W = εQ/(1+ε), and N(0) > 0 = volunteers. Seen in F24, F25-10 and R26.
9. **Empirical-methods question in every final and resit** (F24 3b, R25 Q7, F25-10 Q5, R26 Q8). Typical parts: correlation is not causation (confounders, reverse causality such as failing stores adopting performance pay), then designing an RCT (random assignment of stores or plants, treatment versus control, enough scale and duration, no contamination), sometimes with heterogeneity by a measured trait.
10. **Information / sorting in the labour market.** Self-selection through the contract (probation in F24, low wage attracting the motivated in R26, unravelling with free certificates and an indifference-cutoff signalling equilibrium in F25-10).
11. **Recycled questions.** The M25 Q3 tobacco/guilt model reappears in R25 Q4 with a base salary added. The M25 Q1 public good reappears almost verbatim in R26 Q1. The M23 Q3 "bonus decreases in K" intuition reappears as R26 6d (intrinsic motivation θ). The F24 non-profit N(W) reappears in R26 Q9. **Midterm questions are a strong predictor of final and resit questions.**
