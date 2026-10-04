# Applied Microeconomics FEB12001X: tagged exam question bank (canonical)

Built 5 Oct 2026 for the 23 Oct 2026 final (3 h, open questions, 50/50 Public/Personnel, no midterm this year).
Sources: the six "(with solutions)" grading schemes in `Past exams/` (via their `.md` twins, with the PDFs checked where Greek symbols were lost). Topic IDs are the ones in `map/TOPICS.md`. Any new IDs are only *proposed* in section 2c and are not used in the tags.

Exam codes: **F24** = Final 25 Oct 2024 (26 pts). **R25** = Resit 8 Jul 2025, online proctored (52 pts). **F25** = Final 24 Oct 2025 (60 pts). **R26** = Resit 7 Jul 2026 (60 pts). **M23** / **M25** = Midterms 20 Sep 2023 / 17 Sep 2025 (10 pts each). Finals and resits (F/R) are the primary evidence. The midterms only cover weeks 1-2.

**Corrections to `exam-inventory.md` (first pass), checked against the grading schemes:**
- F25 3d: the optimal tournament prize is **Z = R/π − P**, where π is the sensitivity of the promotion probability, p_i = ½ + π(e_i − e_j), and effort cost is ½e². The inventory had "Z = R − P".
- Parameter names restored from the md/PDF. F24 Q3: the profit-care weight is γ, the effort cost is θ, and Q = κe. F24 Q5: MC = λQ, so Q* = (α+b+d)/λ (not θ). F24 Q7: the MU of the poor is α (α > 1.25). F25 Q9: MEC = αQ, so the Pigouvian tax is 180α/(3+α) and the ban is better iff α ≥ 3. R25 Q2: the high-quality share is λ, so the condition is B_H < 300 + 200/λ. R25 3e: the MU of the poor is α, and the answer is α < 2. R26 Q4: productivity is α, π = 0.8, c = 8. R26 Q5: the status weight is μ, h = ½(1+μ)w. R26 Q6: intrinsic motivation is γ, effort cost θ, b = ½(p−γ). R26 Q7: e = γ/(2θ), reservation wage U_alt − γ²/(4θ), 2θQ/γ workers.
- R25 3e is subtle. The poor are the *net losers* from the lump-sum dyke (benefit 15 < tax 20), so the project passes only for a *low* weight on the poor (α < 2). It is not a "λ for the poor" story in which a higher weight helps.
- M25 1b, R26 1b: the grading scheme gives *partial* credit (0.5 of 1, 1 of 2) for the correct Nash equilibrium combined with "B consumes 0". Any answer where Ben *buys* a positive amount gets 0.
- R26 3b: the tax is levied on **consumers**, and producers bear 2/3. Contrast F24 6c, where the tax is levied on producers and consumers bear 2/3. In both cases the less elastic side bears 2/3.
- The point totals and the 50/50 split were verified by summing every sub-question (script check).

---

## 1. Question bank: every sub-question

% exam = points / exam total. Types: Numerical, Derivation, Verbal (sentence cap noted), Interpretation (of a given FOC), Describe method (steps only), Research design, Graphical, True/false.

| Exam | Q | Pts | % exam | Part | Topic ID(s) | Type | Technique | Paraphrase | Grading scheme rewards / pitfalls |
|---|---|---|---|---|---|---|---|---|---|
| F24 | 1a | 1 | 3.8 | Pers | PER-MONOPSONY | Model setup | Budget: wage bill + market purchases | Budget constraint of non-profit: B = wN(w) + pZ | - |
| F24 | 1b | 1 | 3.8 | Pers | PER-MONOPSONY, PER-NONCLASS | Verbal (max 2 sentences) | Interpret N(0)>0 | Meaning of N(0) > 0 | Some people work for zero wage = volunteers. 'No math in words' |
| F24 | 1c | 2 | 7.7 | Pers | PER-MONOPSONY | Derivation + interpretation | Substitute Z from budget, FOC in w, interpret terms | FOC N'(w)Q - (1/p)[N + wN'] = 0 and meaning of each term | 1 pt FOC, 1 pt interpretation: more hires x output vs bigger wage bill leaves less budget for market goods |
| F24 | 2a | 1 | 3.8 | Pers | PER-TEAM | Numerical | Effort FOC under 50/50 revenue share | Arno's effort under equal split (= p/(2 theta)) | - |
| F24 | 2b | 1 | 3.8 | Pers | PER-TEAM | Numerical | Max sum of utilities | Welfare-max efforts e_a = p/theta, e_b = p/lambda | - |
| F24 | 2c | 1 | 3.8 | Pers | PER-TEAM | Numerical | FOC under effort-proportional share | Arno's effort when he gets e_a/(e_a+e_b) of revenue (= p/theta) | - |
| F24 | 2d | 1 | 3.8 | Pers | PER-TEAM | Describe method | Compare induced vs efficient efforts | How to check the rule maximises welfare | Steps only, no computation required |
| F24 | 2e | 1 | 3.8 | Pers | PER-TEAM | Describe method | Plug both regimes' efforts (both partners!) into Arno's U | How to check whether Arno is worse off | Must include Bea's effort under each rule in Arno's utility, then compare |
| F24 | 3a | 1 | 3.8 | Pers | PER-PA-AGENT, PER-NONCLASS | Numerical | Effort FOC with weight gamma on firm profit | U = a + bQ - theta e^2/2 + gamma(PQ - a - bQ), Q = kappa e: effort | - |
| F24 | 3b | 2 | 7.7 | Pers | PER-EMP | Research design | RCT across plants + heterogeneity by measured trait | Design study testing high-gamma workers respond less to bonus | 1 pt randomise bonus increase across plants (treatment/control); 1 pt compare productivity and test smaller effect for high gamma (measuring gamma via survey/dictator game optional) |
| F24 | 4 | 1 | 3.8 | Pers | PER-SEL-SCREEN | Derive conditions | Two participation constraints (self-selection) | Conditions on W1, W2 so only skilled apply (probation, detection prob p) | Unskilled: W1 + (1-p)W2 + p W_u < 2W_u; skilled: W1 + W2 >= 2W_s |
| F24 | 5a | 1 | 3.8 | Pub | PUB-PG-SAM | Numerical | Sum MU = MC with MC = lambda Q | Efficient Q = (alpha+b+d)/lambda | Using MU and MC directly also fine |
| F24 | 5b | 1 | 3.8 | Pub | PUB-PG-NASH | Verbal | Provider internalises own MU only | Why efficiency loss 1/2(b+d)^2/lambda does not depend on alpha | Anne counts her own alpha, ignores Ben and Dikra |
| F24 | 5c | 1 | 3.8 | Pub | PUB-EXT-COASE, PUB-PG-NASH | Numerical | Bilateral efficient Q, WTP = gain on the INCREASE | Max transfer Dikra pays Anne (= d^2/lambda) | Paying for all Q instead of only the increase from alpha/lambda = 0 |
| F24 | 6a | 1 | 3.8 | Pub | PUB-EXT-INSTR | Numerical | Total surplus CS+PS-EC vs 0 | Condition on beta under which a ban reduces efficiency (beta > 30) | Integral or separate CS, PS, TEC both fine |
| F24 | 6b | 1 | 3.8 | Pub | PUB-EXT-INSTR | Verbal | Higher demand intercept = more CS | Why the condition depends on beta | 'Higher beta -> higher quantity -> more value' alone = 0; must name consumer surplus |
| F24 | 6c | 1 | 3.8 | Pub | PUB-TAX-INC | Numerical | Pre/post-tax equilibria | Consumers' share of EUR 30 producer tax (2/3) | - |
| F24 | 6d | 1 | 3.8 | Pub | PUB-TAX-INC | Verbal | Supply elasticity / producers' alternatives | Why consumers bear part of a tax on producers | Naming the term is not enough; mechanism: producers cut supply, raising consumers' MWTP/price |
| F24 | 7a | 1 | 3.8 | Pub | PUB-TAX-EB | Numerical | Harberger 1/2 t dQ (or elasticity formula) | EB of EUR 50 champagne tax (= 5000) | - |
| F24 | 7b | 2 | 7.7 | Pub | PUB-CBA, PUB-SWF | Numerical | Weighted benefits vs cost incl. EB | Alpha (MU of poor) for which park raises SW (alpha > 1.25) | 1 pt totals: rich cost = 20000 + EB 5000; 1 pt inequality. Forgetting EB in cost is the trap |
| F24 | 7c | 1 | 3.8 | Pub | PUB-WELF | Verbal | 2nd welfare theorem separates efficiency/distribution | How lump-sum redistribution changes park decision | Build iff efficient (23000 > 20000); Pareto-improvement framing also ok |
| F24 | 8a | 1 | 3.8 | Pub | PUB-POL-VOTE | Numerical | FOC + SOC | Peak m_E = 15 and show single-peakedness | 0.5 FOC, 0.5 SOC (U''<0) |
| F24 | 8b | 1 | 3.8 | Pub | PUB-POL-VOTE | Reasoning | Median voter theorem | Which m wins pairwise majority voting (m = 20) | Follow-through credit if 8a wrong but median applied correctly |
| R25 | 1a | 2 | 3.8 | Pub | PUB-EXT-COMMONS | Numerical | Nash: travel times equalise | Number of cars in Nash (C = 2000) | 1 pt equal-time condition, 1 pt solve |
| R25 | 1b | 4 | 7.7 | Pub | PUB-EXT-COMMONS | Numerical + verbal | Minimise total travel time; FOC | Show efficient C = 1000 < 2000 and explain | 2 pts maths; 2 pts 'tragedy of commons / negative externality: driver ignores extra delay on others' |
| R25 | 1c | 2 | 3.8 | Pub | PUB-EXT-COMMONS | Numerical | Recompute Nash under each policy | Time saved: road expansion (0, induced demand) vs bike lanes (25,000) | Road: Nash time stays 40 for all |
| R25 | 1d | 2 | 3.8 | Pub | PUB-EXT-PIGOU, PUB-EXT-COMMONS | Verbal (max 3 sentences) | Binary choice: only relative cost matters | Pigouvian bike subsidy vs car tax for efficiency | Equivalent: both by definition reach efficient split |
| R25 | 2a | 2 | 3.8 | Pub | PUB-AI-ADVSEL | Proof | Expected WTP < high-quality seller reservation | Prove adverse selection iff B_H < 300 + 200/lambda | 1 pt definition (expected WTP < S_H), 1 pt algebra |
| R25 | 2b | 2 | 3.8 | Pub | PUB-AI-ADVSEL | Verbal (max 3 sentences) | Higher share of good units raises expected WTP | Why threshold B_H falls in lambda | - |
| R25 | 2c | 2 | 3.8 | Pub | PUB-AI-ADVSEL | Verbal (max 2 sentences) | Only lemons trade: S_L <= p <= B_L | Range of possible prices (100-300) | - |
| R25 | 3a | 2 | 3.8 | Pub | PUB-WELF | Numerical | Compare lump-sum tax per head with each group's benefit | Is dyke a Pareto improvement? (No: 15 < 20) | 1 pt tax 20 each, 1 pt conclusion |
| R25 | 3b | 2 | 3.8 | Pub | PUB-TAX-EB | Numerical | 1/2 t dQ, perfectly elastic supply | EB of EUR 5 tax (= 50) | - |
| R25 | 3c | 2 | 3.8 | Pub | PUB-TAX-RAMSEY | Numerical + rule | Compute elasticity at equilibrium, inverse elasticity rule | Should t_X exceed t_Y? (eps_X = 5/7 < 2 -> t_X higher) | 1 pt elasticity, 1 pt rule applied |
| R25 | 3d | 2 | 3.8 | Pub | PUB-TAX-RAMSEY | Verbal (max 4 sentences) | Elastic = good substitutes = bigger quantity response = bigger DWL | Why tax elastic goods at lower rates | - |
| R25 | 3e | 2 | 3.8 | Pub | PUB-SWF, PUB-CBA | Numerical | Weighted benefits vs weighted lump-sum costs | For which alpha (MU of poor) build the dyke (alpha < 2) | Note poor are net losers here, so higher weight on poor works AGAINST the project |
| R25 | 4a | 3 | 5.8 | Pers | PER-PA-AGENT, PER-NONCLASS | Numerical + interpretation | Effort FOC with guilt, corner | Condition for positive effort (b > beta) + one-sentence intuition | 1 FOC, 1 solve, 1 'money gain exceeds guilt cost' |
| R25 | 4b | 2 | 3.8 | Pers | PER-PA-PRINC | Derivation | U >= V, solve for a | Lowest base salary that attracts worker | - |
| R25 | 4c | 3 | 5.8 | Pers | PER-PA-PRINC, PER-PA-EFFDIST | Numerical | Substitute e(b) and a(b) into profit, FOC | Optimal b with two-part contract (b = p) | Just writing b = p without derivation = 0 |
| R25 | 4d | 2 | 3.8 | Pers | PER-PA-EFFDIST, PER-NONCLASS | Verbal (max 2 sentences) | PC effect + effort effect | Two reasons lower guilt raises profit | 1 pt lower wage needed (PC), 1 pt more effort for given contract |
| R25 | 5a | 2 | 3.8 | Pers | PER-INCOME, PER-PA-AGENT | Derivation | FOC with concave V | Effort FOC: bV'(a+be) - delta = 0 | - |
| R25 | 5b | 2 | 3.8 | Pers | PER-INCOME | Comparative statics via FOC | Higher a lowers V' | Effect of higher base salary on effort (falls) | Must argue through the FOC (marginal benefit term) |
| R25 | 5c | 2 | 3.8 | Pers | PER-INCOME | Verbal (1 sentence) | Diminishing MU of income | Why utility of income is concave | Basic needs satisfied first |
| R25 | 6a | 2 | 3.8 | Pers | PER-AMENITY | Reasoning | Worker loss V vs firm gain X | When is a social-media ban efficient (X > V) | Ignore third parties |
| R25 | 6b | 2 | 3.8 | Pers | PER-AMENITY | Reasoning | Slack PC: firm ignores worker utility | Manager's choice with high binding minimum wage (ban) | - |
| R25 | 6c | 2 | 3.8 | Pers | PER-AMENITY | Reasoning | Wage at PC: firm internalises V via wage | Manager's choice when wage keeps worker indifferent (allow iff V > X) | - |
| R25 | 7a | 2 | 3.8 | Pers | PER-EMP | Verbal | Confounders / time trends | Why 20% sales rise doesn't prove bonus works | - |
| R25 | 7b | 2 | 3.8 | Pers | PER-EMP | Research design | Randomise stores into treatment/control | Reliable way to identify bonus effect | - |
| F25 | 1a | 2 | 3.3 | Pers | PER-MONOPSONY | Verbal (max 2 sentences) | Perfect competition = infinitely elastic supply to firm | N'(W) under perfect competition (+inf) and why | 1 pt value, 1 pt explanation (small cut -> all quit) |
| F25 | 1b | 2 | 3.3 | Pers | PER-MONOPSONY | Interpretation | MC = N (wage bill); MB = N'(Q-W) | Marginal benefits/costs of a raise from the FOC | 1 pt per term, explained in economic words |
| F25 | 1c | 2 | 3.3 | Pers | PER-MONOPSONY | Numerical | Markdown W = eta Q/(1+eta) | W at eta = 2, Q = 6000 (4000) and profit per worker (2000) | 1 pt each |
| F25 | 2a | 2 | 3.3 | Pers | PER-SEL-SCREEN | Numerical | Zero profit: wage = expected productivity | Salary distribution under symmetric ignorance (all earn 50) | 1 pt zero-profit logic, 1 pt 50 |
| F25 | 2b | 2 | 3.3 | Pers | PER-SEL-SCREEN | Reasoning + iteration | Unravelling 50 -> 35 -> 27.5 -> ... | Equilibrium with free certificates (full unravelling) | - |
| F25 | 2c | 3 | 5.0 | Pers | PER-SEL-SCREEN | Numerical | Marginal-type indifference q*-20 = (q*+20)/2 | Who buys costly certificate (q >= 60; uncertified earn 40) | - |
| F25 | 3a | 2 | 3.3 | Pers | PER-TOURN, PER-NONCLASS | Numerical | Expected utility, FOC with p_i = 1/2 + pi(e_i - e_j) | Effort FOC pi(Z+P) - e = 0 | 1 pt expected utility, 1 pt FOC |
| F25 | 3b | 3 | 5.0 | Pers | PER-TOURN | Derivation | Symmetric p=1/2, PC = 2V, substitute e | Show min W = V - (Z+P)/4 + (pi(Z+P))^2/4 | - |
| F25 | 3c | 2 | 3.3 | Pers | PER-TOURN, PER-NONCLASS | Verbal | Prize-value effect vs effort-cost effect | Two opposing effects of pride P on attractiveness | 1 pt each; 'no math in words' |
| F25 | 3d | 3 | 5.0 | Pers | PER-TOURN | Numerical | Profit 2Re - Z - 4W, substitute e and W, FOC in Z | Optimal prize Z = R/pi - P | 1 pt profit, 1 pt substitution, 1 pt solve (inventory's 'Z = R - P' was a transcription error) |
| F25 | 4a | 2 | 3.3 | Pers | PER-INCOME | Interpretation | MB of an hour vs lost leisure | Interpret W V'(WH) - X'(24-H) = 0 | - |
| F25 | 4b | 2 | 3.3 | Pers | PER-INCOME | Comparative statics via FOC | Substitution vs income effect in words | Effect of higher W on hours (ambiguous) | Name-dropping 'income/substitution effect' = 0; describe how MB changes |
| F25 | 5a | 1 | 1.7 | Pers | PER-EMP | Verbal (1 sentence) | Correlation is not causation | Can we conclude variable pay hurts performance? (No) | Chains with variable pay may differ in other respects |
| F25 | 5b | 2 | 3.3 | Pers | PER-EMP | Verbal | List experimental requirements | Two requirements for a reliable experiment | Random assignment; large scale; long enough; no contamination; reliable measurement |
| F25 | 6a | 2 | 3.3 | Pub | PUB-SWF, PUB-REDIST-THEORY | Numerical | Lagrange / w MU_A = MU_B with sqrt utility | SW-max I_A, I_B (I_A = w^2/(w^2+beta^2) Y) | - |
| F25 | 6b | 2 | 3.3 | Pub | PUB-SWF, PUB-REDIST-THEORY | Verbal (max 2 sentences) | Higher weight = society values A's utility more | Why I_A rises in w | 1 pt weight higher, 1 pt values redistributing to A more |
| F25 | 6c | 2 | 3.3 | Pub | PUB-REDIST-THEORY | Verbal | Leaky bucket: equity-efficiency trade-off | Berta gets more/less/same when redistribution is costly? (Less) | - |
| F25 | 7a | 2 | 3.3 | Pub | PUB-WELF | Numerical | MRS = MU_y/MU_x | Show MRS_C = 8/sqrt(y_C) | - |
| F25 | 7b | 2 | 3.3 | Pub | PUB-WELF | Numerical | MRS_i = MRT for each person (private good) | Efficient y_C = 4, y_D = 1 | - |
| F25 | 7c | 2 | 3.3 | Pub | PUB-PG-SAM | Numerical | Sum MRS = MRT, common y | Efficient public-good y = 9 | - |
| F25 | 7d | 2 | 3.3 | Pub | PUB-PG-NASH | Numerical + reasoning | Corner: D free-rides, C sets MRS = MRT | Nash: D provides 0, C provides 4 | - |
| F25 | 8a | 2 | 3.3 | Pub | PUB-POSNORM, PUB-SWF | Verbal (max 2 sentences) | Normative = SWF / distribution | Normative reason gov over-extracts resources | Low SWF weight on (rich) northerners. Efficiency arguments (revenue, less distortionary tax) = wrong |
| F25 | 8b | 2 | 3.3 | Pub | PUB-POSNORM, PUB-POL-GOVFAIL, PUB-POL-VOTE | Verbal (max 2 sentences) | Positive = collective decision-making | Positive reason for over-extraction | Minority north outvoted; corruption/bribes |
| F25 | 9a | 2 | 3.3 | Pub | PUB-TAX-EB | Numerical | Equilibria with/without tax, 1/2 t dQ | EB of EUR 30 tax (= 150) | - |
| F25 | 9b | 2 | 3.3 | Pub | PUB-TAX-INC | Verbal | Less elastic demand = worse alternatives | Consumer share if demand less elastic? (Larger) | 1 pt 'fewer/less valuable alternatives', 1 pt 'substitute less so bear more' |
| F25 | 9c | 2 | 3.3 | Pub | PUB-EXT-PIGOU | Numerical | D = S + MEC, tax = MEC(Q*) | Show Pigouvian tax = 180 alpha/(3+alpha) | 1 pt 'tax = MEC at efficient Q', 1 pt algebra |
| F25 | 9d | 3 | 5.0 | Pub | PUB-EXT-INSTR | Numerical | CS + PS - EC vs 0 | Alpha for which ban beats laissez-faire (alpha >= 3) | 1 pt 'ban = zero CS, PS, EC'; then surplus 5400 - 1800 alpha |
| F25 | 10a | 2 | 3.3 | Pub | PUB-TAX-RAMSEY | Numerical relations | t_i proportional to 1/eps_i | Relations t_R = t_M/3 = t_P/9 | Ordering t_R < t_M < t_P with EB-elasticity reasoning gets 1 of 2 |
| F25 | 10b | 1 | 1.7 | Pub | PUB-TAX-RAMSEY | Verbal (1 sentence) | Average tax rate vs income | Is the Ramsey system progressive? (Regressive) | Proposed ID PUB-TAX-PROG (see below) |
| R26 | 1a | 2 | 3.3 | Pub | PUB-PG-SAM | Numerical | MU_A + MU_B = MC | Efficient q = (a+b-c)/2 | 1 pt condition, 1 pt MUs (near-copy of M25 1a) |
| R26 | 1b | 2 | 3.3 | Pub | PUB-PG-NASH | Numerical + reasoning | Corner: Anne buys a-c, Ben 0 | Ben's consumption in Nash (= a-c) | 'Ben consumes 0' = 1 of 2; Ben buying anything (e.g. b-c) = 0 (near-copy of M25 1b) |
| R26 | 1c | 3 | 5.0 | Pub | PUB-EXT-PIGOU, PUB-PG-NASH | Verbal (max 3 sentences) | Ben's MU = marginal external benefit | Why Pigouvian subsidy (b+c-a)/2 rises in b | - |
| R26 | 1d | 2 | 3.3 | Pub | PUB-EXT-COASE, PUB-PG-CLASS | Verbal (max 4 sentences) | Non-excludability -> enforcement/transaction costs | Which public-good characteristic violates Coase and why | Just listing both characteristics and concluding = 0; property rights not necessarily violated (lighthouse) |
| R26 | 2a | 3 | 5.0 | Pub | PUB-REDIST-PROG | Graphical | Kinked budget constraint with phase-out | Draw income-leisure BC: kinks (175,1100), (115,1700); endpoints (0,4000),(200,600) | 1 endpoints, 1 three segments, 1 at least one kink |
| R26 | 2b | 2 | 3.3 | Pub | PUB-REDIST-PROG | Graphical / verbal | Tangency at old point; opportunity cost of leisure drops to 10 | Does Bert work more/less than 85 h? (Less) | Calculation neither necessary nor possible; must argue via slope of IC vs new BC |
| R26 | 2c | 2 | 3.3 | Pub | PUB-REDIST-PROG, PUB-TAX-EB | Describe method | Grant received vs equivalent variation | Steps to compute the efficiency loss of the programme | 0.5 grant received, 0.5 utility after, EV, loss = grant - EV; naming terms not enough |
| R26 | 3a | 2 | 3.3 | Pub | PUB-EXT-PIGOU | Verbal (max 2 sentences) | Individual ignores cost on OTHER consumers | Why market failure even though victims are consumers | 1 pt cost falls on others, 1 pt not taken into account |
| R26 | 3b | 2 | 3.3 | Pub | PUB-TAX-INC | Numerical | Pre/post-tax equilibria (tax on consumers) | Incidence of EUR 30 tax (producers bear 2/3) | Elasticity route also accepted |
| R26 | 3c | 2 | 3.3 | Pub | PUB-TAX-INC | Verbal (max 2 sentences) | Elastic supply = better alternatives | Effect of higher supply elasticity on incidence | 1 pt alternatives, 1 pt shift burden to consumers |
| R26 | 3d | 2 | 3.3 | Pub | PUB-EXT-PIGOU, PUB-TAX-EB | Numerical | CS+PS-EC+revenue with and without tax | Does a EUR 30 tax raise efficiency? (Yes, +800) | Don't forget tax revenue and external cost |
| R26 | 3e | 2 | 3.3 | Pub | PUB-EXT-PIGOU | Numerical | D = S + MEC, tax = MEC(Q*) | Pigouvian tax (= 45) | 1 pt Q*=90, 1 pt MEC(Q*) |
| R26 | 4a | 2 | 3.3 | Pub | PUB-REDIST-PROG | Numerical | EU(search) vs U(no search), sqrt utility | Which citizens search (alpha >= 0.25) | - |
| R26 | 4b | 1 | 1.7 | Pub | PUB-REDIST-PROG | Verbal (max 3 sentences) | Mandate induces search whose cost > expected gain | Why mandatory search could reduce efficiency | Alt: high monitoring costs |
| R26 | 4c | 1 | 1.7 | Pub | PUB-POSNORM, PUB-REDIST-THEORY | Verbal (max 2 sentences) | Normative = distribution/ethics | Why not mandate search even if efficient | Efficiency argument = 0 |
| R26 | 5a | 2 | 3.3 | Pers | PER-NONCLASS | Numerical | Nash FOC in hours with relative-income term | Hours each sister works (h = (1+mu)w/2) | - |
| R26 | 5b | 2 | 3.3 | Pers | PER-NONCLASS | Numerical | Max sum of utilities (status terms cancel) | Jointly optimal hours (w/2) | - |
| R26 | 5c | 2 | 3.3 | Pers | PER-NONCLASS | Model extension / reasoning | Tax as commitment device | Would they adopt an income tax and what kind? | Yes: 100% marginal rate above w^2/2, zero below |
| R26 | 6a | 2 | 3.3 | Pers | PER-NONCLASS, PER-PA-EFFDIST | Numerical | Max U + profit (bonus transfers cancel) | Efficient e = (p+gamma)/theta | 1 pt cancel bq terms, 1 pt solve |
| R26 | 6b | 2 | 3.3 | Pers | PER-PA-AGENT, PER-NONCLASS | True/false with derivation | de/db = 1/theta | Higher intrinsic motivation weakens bonus effect? (False) | - |
| R26 | 6c | 4 | 6.7 | Pers | PER-PA-PRINC, PER-NONCLASS | Numerical | e(b), profit (p-b)q, FOC | Optimal b = (p-gamma)/2 | 1 profit, 1 effort, 1 FOC, 1 solve |
| R26 | 6d | 2 | 3.3 | Pers | PER-PA-PRINC, PER-NONCLASS | Verbal (max 3 sentences) | Bonus also paid on motivation-driven output | Why optimal b falls in gamma (same logic as M23 3b) | Economic reasoning, not maths |
| R26 | 7a | 1 | 1.7 | Pers | PER-NONCLASS | Numerical | FOC without bonus -> e = 0 | Output of unmotivated public-sector worker (0) | - |
| R26 | 7b | 1 | 1.7 | Pers | PER-NONCLASS, PER-PA-PRINC | Numerical | e = gamma/(2 theta); PC w >= U_alt - gamma^2/(4 theta) | Higher gamma -> more effort and lower reservation wage | - |
| R26 | 7c | 1 | 1.7 | Pers | PER-NONCLASS | Numerical | Q / e | Number of motivated workers needed (2 theta Q/gamma) | - |
| R26 | 7d | 1 | 1.7 | Pers | PER-SEL-SCREEN, PER-NONCLASS | Reasoning | Wage between U_alt - gamma^2/4theta and U_alt self-selects | Is unobservable type a problem? (No) | - |
| R26 | 8a | 2 | 3.3 | Pers | PER-PA-AGENT, PER-SEL-SCREEN | Verbal (2 sentences) | Moral hazard (effort) + adverse selection (sorting) | Two reasons performance pay raises sales | 1 pt incentive effect, 1 pt attracts productive workers |
| R26 | 8b | 2 | 3.3 | Pers | PER-EMP, PER-NONCLASS | Verbal (max 2 sentences) | Reverse causality / crowding out | Why performance-pay stores do worse | Explain technical terms you use |
| R26 | 8c | 2 | 3.3 | Pers | PER-EMP | Research design (max 3 sentences) | Randomise among the 400 stores | Field experiment on abandoning performance pay | 1 pt random split of the 400 (not 900), 1 pt abandon in treatment, compare over time |
| R26 | 9a | 2 | 3.3 | Pers | PER-MONOPSONY | Derivation | d(WN(W))/dW | Marginal cost of a EUR 1 higher wage (N + WN') | 1 pt total cost WN, 1 pt derivative |
| R26 | 9b | 2 | 3.3 | Pers | PER-MONOPSONY | Verbal | N' < infinity | When does the organisation have monopsony power? | - |
| M23 | 1a | 1 | 10.0 | Pub | PUB-PG-CLASS | Verbal | Read rivalry off the MRS functions | Show from the MRS functions that G is non-rival and x is rival | MRS depends on the OTHER person's G but not on their x. Arguing via cost difference (p_G vs 1) = 0 pts |
| M23 | 1b | 1 | 10.0 | Pub | PUB-PG-SAM | Numerical | Sum MRS = MRT with MRS_i = x_i/(G_A+G_B) | Efficient G_A+G_B (= y/p_G) | Writing only MRS_A+MRS_B=MRT without solving = 0; any route not using Samuelson = wrong |
| M23 | 1c | 1 | 10.0 | Pub | PUB-PG-NASH | Numerical | Two best responses MRS_i = p_G/p_x, solve system | Nash contributions G_A = G_B = y/(3p_G) | Must derive BOTH best responses AND solve; stopping at BR functions = 0 |
| M23 | 2a | 1 | 10.0 | Pub | PUB-EXT-GAME | Verbal + 2x2 table | Dominant strategy vs max-sum cell | Why Nash (Inside, Fire) differs from efficient (Outside, No fire); max 4 sentences, name the market failure | Need correct NE AND efficient cell AND 'negative externality Scott ignores'; either cell wrong = 0 |
| M23 | 2b | 1 | 10.0 | Pub | PUB-EXT-COASE | Verbal | State both Coase conditions, apply to case | Why both Coase conditions likely hold (max 4 sentences) | Both conditions named; low TC linked to 'only two people' / 'easy to verify'. Only one condition = 0 |
| M23 | 3a | 2 | 20.0 | Pers | PER-PA-AGENT, PER-PA-PRINC | Numerical + explain steps | Worker FOC, substitute into profit, FOC in b | Q=E+K, U=bQ-E^2, no base salary: profit-max b (= P/2 - K) | 1 pt worker FOC E=b/2, 1 pt profit FOC; must write sentences explaining steps |
| M23 | 3b | 1 | 10.0 | Pers | PER-PA-PRINC | Verbal | Bonus is paid on all output | Why optimal b falls in K | Key: bonus also paid on the K units not caused by effort, so raising b is costlier |
| M23 | 3c | 1 | 10.0 | Pers | PER-PA-PRINC | Derivation | Binding PC with outside option 0 | Show base salary a = -Kb - b^2/4 | Full marks for correct approach even with calculation slip |
| M23 | 3d | 1 | 10.0 | Pers | PER-PA-EFFDIST | Verbal (derivation optional) | Base salary extracts rent | Why adding a base salary raises optimal b | Rent extraction: bonus paid on K is clawed back via lower a, so the K-cost term cancels |
| M25 | 1a | 1 | 10.0 | Pub | PUB-PG-SAM | Numerical | MU_A + MU_B = MC, U_i = a_iQ - Q^2/2 | Efficient Q = (a+b-c)/2 | Either max U_A+U_B-cQ or Samuelson |
| M25 | 1b | 1 | 10.0 | Pub | PUB-PG-NASH | Numerical + reasoning | Corner solution: low-valuer provides 0 | How much B CONSUMES in Nash (= a-c) | Correct NE but 'B consumes 0' = half marks; consumption != provision (non-rival) |
| M25 | 2a | 1 | 10.0 | Pub | PUB-EXT-COASE, PUB-EXT-PIGOU | Numerical | Private q=k vs efficient q=k-c; profit loss = triangle | Show minimal Coase transfer B->A = c^2/2 | Lost profit of A = transfer; triangle 1/2*(k-(k-c))*c or integral also fine |
| M25 | 2b | 1 | 10.0 | Pub | PUB-EXT-COASE | Verbal (max 3 sentences) | Chain: c up -> q* down -> bigger profit loss -> bigger T | Why T rises in c | 'Because external cost is higher' / 'B willing to pay more' = 0. Only q* lower without link to A's profit = 0.5 |
| M25 | 2c | 1 | 10.0 | Pub | PUB-SWF, PUB-POSNORM | Verbal (1 sentence) | Efficiency already reached -> distribution | One reason for intervention when Coase works | Distribution / different MU of income. 'Improve efficiency / correct market failure' = wrong |
| M25 | 3a | 2 | 20.0 | Pers | PER-PA-AGENT, PER-NONCLASS | Numerical | Effort FOC with guilt term, corner e=0 | U = bq - theta e^2/2 - beta q, q=mu e: effort e = (mu/theta)(b-beta) | 1 FOC, 0.5 solve, 0.5 corner e=0 if b<beta (non-negativity!) |
| M25 | 3b | 3 | 30.0 | Pers | PER-PA-PRINC, PER-NONCLASS | Numerical | Profit (p-b)q, substitute e(b), FOC | Optimal b = (p+beta)/2 | 1 pt profit expression, 1 substitution, 1 FOC+solve |

---

## 2. Topic-ID frequency

### 2a. Weight table (sorted by F/R weight, split across tags)

- **Full credit per tag**: a multi-tagged sub-question counts in full for each of its IDs, so these weights overlap.
- **Split**: the sub-question's % is divided equally over its tags, so the column sums to 400% over the four F/R exams. This is the fairer ranking.
- **Avg % per F/R exam** = split weight / 4. This is roughly the share of a typical exam you can expect from that ID.
- The midterm weight is shown separately (sum of % of a 10-point midterm) and is not included in the F/R weight.

| Rank | Topic ID | Exams (of 6) | F/R exams (of 4) | # sub-Qs (all / F+R) | Weight F/R: sum % (full credit per tag) | **Weight F/R: sum % (split across tags)** | Avg % per F/R exam (split) | Midterm weight (sum %) | Last seen | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | PER-NONCLASS | 5 (F24, R25, M25, F25, R26) | 4 | 20 / 18 | 60.6 | 37.0 | 9.2 | 50 | Resit Jul 2026 |  |
| 2 | PER-MONOPSONY | 3 (F24, F25, R26) | 3 | 8 / 8 | 32.1 | 30.1 | 7.5 | 0 | Resit Jul 2026 |  |
| 3 | PER-EMP | 4 (F24, R25, F25, R26) | 4 | 7 / 7 | 27.1 | 25.4 | 6.3 | 0 | Resit Jul 2026 |  |
| 4 | PER-TEAM | 1 (F24) | 1 | 5 / 5 | 19.2 | 19.2 | 4.8 | 0 | Final Oct 2024 |  |
| 5 | PER-SEL-SCREEN | 3 (F24, F25, R26) | 3 | 6 / 6 | 20.5 | 18.0 | 4.5 | 0 | Resit Jul 2026 |  |
| 6 | PUB-TAX-INC | 3 (F24, F25, R26) | 3 | 5 / 5 | 17.7 | 17.7 | 4.4 | 0 | Resit Jul 2026 |  |
| 7 | PUB-EXT-COMMONS | 1 (R25) | 1 | 4 / 4 | 19.2 | 17.3 | 4.3 | 0 | Resit Jul 2025 |  |
| 8 | PER-INCOME | 2 (R25, F25) | 2 | 5 / 5 | 18.2 | 16.3 | 4.1 | 0 | Final Oct 2025 |  |
| 9 | PUB-EXT-PIGOU | 4 (R25, M25, F25, R26) | 3 | 7 / 6 | 22.2 | 16.1 | 4.0 | 10 | Resit Jul 2026 |  |
| 10 | PUB-REDIST-PROG | 1 (R26) | 1 | 5 / 5 | 16.7 | 15.0 | 3.8 | 0 | Resit Jul 2026 |  |
| 11 | PUB-PG-NASH | 5 (M23, F24, M25, F25, R26) | 3 | 7 / 5 | 19.4 | 14.9 | 3.7 | 20 | Resit Jul 2026 |  |
| 12 | PUB-WELF | 3 (F24, R25, F25) | 3 | 4 / 4 | 14.4 | 14.4 | 3.6 | 0 | Final Oct 2025 |  |
| 13 | PUB-TAX-EB | 4 (F24, R25, F25, R26) | 4 | 5 / 5 | 17.7 | 14.4 | 3.6 | 0 | Resit Jul 2026 |  |
| 14 | PER-TOURN | 1 (F25) | 1 | 4 / 4 | 16.7 | 13.3 | 3.3 | 0 | Final Oct 2025 |  |
| 15 | PUB-EXT-INSTR | 2 (F24, F25) | 2 | 3 / 3 | 12.7 | 12.7 | 3.2 | 0 | Final Oct 2025 |  |
| 16 | PUB-TAX-RAMSEY | 2 (R25, F25) | 2 | 4 / 4 | 12.7 | 12.7 | 3.2 | 0 | Final Oct 2025 |  |
| 17 | PER-PA-PRINC | 4 (M23, R25, M25, R26) | 2 | 9 / 5 | 21.3 | 12.6 | 3.1 | 70 | Resit Jul 2026 |  |
| 18 | PUB-AI-ADVSEL | 1 (R25) | 1 | 3 / 3 | 11.5 | 11.5 | 2.9 | 0 | Resit Jul 2025 |  |
| 19 | PER-AMENITY | 1 (R25) | 1 | 3 / 3 | 11.5 | 11.5 | 2.9 | 0 | Resit Jul 2025 |  |
| 20 | PUB-SWF | 4 (F24, R25, M25, F25) | 3 | 6 / 5 | 21.5 | 10.8 | 2.7 | 10 | Final Oct 2025 |  |
| 21 | PUB-PG-SAM | 5 (M23, F24, M25, F25, R26) | 3 | 5 / 3 | 10.5 | 10.5 | 2.6 | 20 | Resit Jul 2026 |  |
| 22 | PER-PA-AGENT | 5 (M23, F24, R25, M25, R26) | 3 | 7 / 5 | 20.1 | 10.1 | 2.5 | 40 | Resit Jul 2026 |  |
| 23 | PUB-POL-VOTE | 2 (F24, F25) | 2 | 3 / 3 | 11.0 | 8.8 | 2.2 | 0 | Final Oct 2025 |  |
| 24 | PUB-REDIST-THEORY | 2 (F25, R26) | 2 | 4 / 4 | 11.7 | 7.5 | 1.9 | 0 | Resit Jul 2026 |  |
| 25 | PER-PA-EFFDIST | 3 (M23, R25, R26) | 2 | 4 / 3 | 12.9 | 6.5 | 1.6 | 10 | Resit Jul 2026 |  |
| 26 | PUB-CBA | 2 (F24, R25) | 2 | 2 / 2 | 11.5 | 5.8 | 1.4 | 0 | Resit Jul 2025 |  |
| 27 | PUB-POSNORM | 3 (M25, F25, R26) | 2 | 4 / 3 | 8.3 | 3.6 | 0.9 | 10 | Resit Jul 2026 |  |
| 28 | PUB-EXT-COASE | 4 (M23, F24, M25, R26) | 2 | 5 / 2 | 7.2 | 3.6 | 0.9 | 30 | Resit Jul 2026 |  |
| 29 | PUB-PG-CLASS | 2 (M23, R26) | 1 | 2 / 1 | 3.3 | 1.7 | 0.4 | 10 | Resit Jul 2026 |  |
| 30 | PUB-POL-GOVFAIL | 1 (F25) | 1 | 1 / 1 | 3.3 | 1.1 | 0.3 | 0 | Final Oct 2025 |  |
| 31 | PUB-EXT-GAME | 1 (M23) | 0 | 1 / 0 | 0.0 | 0.0 | 0.0 | 10 | Midterm Sep 2023 | MIDTERM-ONLY |

**Reading the table**
- **Personnel's linear-contract family dominates.** PER-NONCLASS (37.0), PER-PA-PRINC (12.6), PER-PA-AGENT (10.1) and PER-PA-EFFDIST (6.5) together make up about 66% split F/R weight, about 16% of a typical exam. Every F/R exam has an effort-FOC question with a twist (guilt, profit-care, intrinsic motivation, pride, status).
- **Topics in all 4 F/R exams:** PER-NONCLASS, PER-EMP (empirics/RCT) and PUB-TAX-EB (excess burden). **In 3 of 4:** PER-MONOPSONY, PER-SEL-SCREEN, PER-PA-AGENT, PUB-TAX-INC, PUB-EXT-PIGOU, PUB-PG-SAM, PUB-PG-NASH, PUB-WELF, PUB-SWF.
- **Single-exam "big blocks"** rank high only because one question was large: PER-TEAM (F24), PUB-EXT-COMMONS (R25), PUB-REDIST-PROG (R26), PER-TOURN (F25), PUB-AI-ADVSEL (R25), PER-AMENITY (R25). Each F/R exam seems to contain one or two such blocks drawn from the rest of the syllabus, so expect 1-2 "new" blocks on 23 Oct.
- **Midterm-heavy:** PER-PA-PRINC (70% of midterm points summed), PER-PA-AGENT (40%), PUB-EXT-COASE (30%), PUB-PG-SAM/NASH (20% each). These topics are front-loaded in the course but keep returning in F/R, usually as single sub-questions.
- **MIDTERM-ONLY:** PUB-EXT-GAME (M23 2a). The 2×2-game framing never reappeared in F/R, but the idea "the individual ignores the cost imposed on others" is reused everywhere (R25 1b, R26 3a).
- **Never examined in these 6 papers:** PER-PA-SETUP (implicit only), PER-PA-RISK, PER-PA-MONITOR, PER-SEL-QUAL, PER-TRAIN, PER-EFFWAGE, PER-BIAS, PUB-EDU, PUB-AI-MORAL, PUB-AI-SOCINS, PUB-TAX-OPTINC. PER-TOURN and PER-TEAM have appeared once each in a final (F25, F24), although TOPICS.md has them as "upcoming" weeks 8-9, so they are examinable in October.

### 2b. Public/Personnel split per exam (verified)

| Exam | Total pts | Public | Personnel | Order |
|---|---|---|---|---|
| Final Oct 2024 | 26 | 13 | 13 | Pers first |
| Resit Jul 2025 | 52 | 26 | 26 | Pub first |
| Final Oct 2025 | 60 | 30 | 30 | Pers first |
| Resit Jul 2026 | 60 | 30 | 30 | Pub first |
| Midterm Sep 2023 | 10 | 5 | 5 | Pub first |
| Midterm Sep 2025 | 10 | 5 | 5 | Pub first |

Every exam is exactly 50/50. The October finals put Personnel first, while the July resits and the midterms put Public first. The 26-point F24 scale (1-2 points per sub-question) changed to 52/60 points from R25 onwards (2-4 points per sub-question).

### 2c. Proposed new IDs (not used in the tags above; TOPICS.md left untouched)

| Proposed ID | Description | Source of truth | Evidence |
|---|---|---|---|
| PUB-TAX-PROG | Progressivity of a tax system: average vs marginal rates, progressive/proportional/regressive | R&G ch 14 (tax progressivity) | F25 10b (currently tagged PUB-TAX-RAMSEY) |
| PER-PA-CORNER (optional) | Non-negativity / corner solutions in the effort FOC (e = 0 if b < guilt) | Kuhn ch 2 | M25 3a, R25 4a, R26 7a. Could stay under PER-PA-AGENT |

Borderline tags to be aware of:
- F25 Q2 (pooling wage → unravelling with free certificates → costly-certificate cutoff) is tagged PER-SEL-SCREEN. It is really "disclosure/unravelling + signalling", which TOPICS.md folds into PER-SEL-SCREEN.
- R26 2c (equivalent-variation efficiency loss of a transfer) is tagged PUB-REDIST-PROG + PUB-TAX-EB.
- R26 3a (consumers harming other consumers) is tagged PUB-EXT-PIGOU, because it is about the market failure itself.

---

## 3. Question templates (recurring setups)

**T1. Public good: Samuelson + Nash (+ Coase/Pigou add-on).** *Used:* M23 Q1, M25 Q1, F24 Q5, F25 Q7, R26 Q1 (every exam except R25). *Setup:* either quasi-linear U_i = a_iQ − ½Q² with price c, or MRS-based (MRS_i = x_i/G or 8/√y).
1. If asked, derive the MRS = MU_G/MU_x (F25 7a). For a *private* good set MRS_i = MRT for each person separately (F25 7b).
2. Efficient level: ΣMRS_i = MRT (or ΣMU_i = MC). Write the condition explicitly, then solve.
3. Nash: write each best response MRS_i(own + other's G) = p. Check the corner: the low-valuer provides 0 because their MU at the high-valuer's level is < MC.
4. State what each person **consumes**. Non-rivalry means the free rider consumes the full amount the other provides.
5. Add-ons: Pigouvian subsidy = the free rider's MU at Q* (marginal external benefit); bilateral Coase bargaining pays only for the *increase* in Q; Coase fails for public goods because of non-excludability (enforcement/transaction costs).

**T2. Linear market + external cost: incidence, EB, Pigou, ban vs laissez-faire.** *Used:* F24 Q6 (+7a EB), F25 Q9, R26 Q3. (R25 3b is EB-only with perfectly elastic supply.)
1. Pre-tax equilibrium D = S. Post-tax: D − t = S (or D = S + t). Read off the consumer and producer prices. Burden shares = ΔP_c/t and ΔP_p/t. The answer has always been 2/3 for the less elastic side.
2. EB = ½·t·ΔQ (or ½ε·PQ·t² for an ad valorem tax).
3. Pigou: efficient Q* from D = S + MEC(Q). The tax equals MEC(Q*), not MEC at the market Q.
4. Ban vs laissez-faire: ban gives 0. Laissez-faire gives CS + PS − total external cost at the market Q (triangles or ∫(D − S − MEC)dQ). Solve "≤ 0" for the parameter.
5. A non-Pigouvian tax under an externality: compare CS + PS + revenue − EC with and without the tax (R26 3d, +800).
6. Verbal tag-on (2 sentences): incidence depends on elasticity. The more elastic side has *better alternatives*, so it reduces quantity and shifts the burden.

**T3. Coase bargaining transfer.** *Used:* M23 2b, M25 Q2, F24 5c, R26 1d.
1. Name both conditions: assigned property rights, and low transaction costs (few parties, verifiable agreement).
2. Private optimum: the producer's FOC (q = k). Efficient: subtract MEC (q* = k − c).
3. Minimal transfer = the right-holder's profit loss = the triangle between private and efficient q (½c²). Maximal WTP = the victim's gain.
4. Comparative statics: higher c → lower q* → larger cut → larger loss to compensate. Always link back to the right-holder's profit.
5. "Why intervene if Coase works?" The answer is distribution (SWF weights). Efficiency gets 0.

**T4. Weighted-SWF project appraisal / redistribution.** *Used:* F24 Q7, R25 Q3, F25 Q6 (and M25 2c, F25 Q8 as one-liners).
1. List each group's money benefits and money costs. Costs include the tax *plus its excess burden* if the tax is distortionary (F24 7b: 20000 + 5000).
2. Multiply each group's net amount by its MU of income (1 for the rich, α for the poor). The project passes iff the weighted sum > 0. Solve for α, and check the direction: who are the net losers?
3. Pareto test: does *every* group gain net of its own tax share (R25 3a)?
4. Second welfare theorem: with lump-sum redistribution, efficiency and distribution separate, so build iff total benefits > total costs.
5. Redistribution with √-utility: w·MU_A = MU_B, so I_A = w²/(w²+β²)·Y. A leaky bucket means redistributing less.

**T5. Ramsey / inverse elasticity (+ progressivity).** *Used:* R25 3c-3d, F25 Q10.
1. Compute ε = (dQ/dP)(P/Q) at the untaxed equilibrium if it is not given.
2. Inverse elasticity rule: t_i ∝ 1/ε_i, so give the ratios (t_R = t_M/3 = t_P/9).
3. Intuition: elastic demand = good substitutes = large quantity response = large DWL, so tax these goods lightly.
4. Progressivity: if the poor buy inelastic goods, they face the highest rates, so the average tax rate falls with income and the system is regressive.

**T6. Congestion / commons (Nash vs efficient use).** *Used:* R25 Q1 (10 pts).
1. Nash: users enter until private costs are equal across options (40 = 25 + f(C)).
2. Efficient: minimise total cost C·t_car(C) + (N−C)·t_bike, using the FOC.
3. Explain: each entrant ignores the extra delay imposed on others (negative externality / tragedy of the commons).
4. Policies: recompute Nash. Extra road capacity is absorbed (induced demand, no gain). Improving the outside option lowers everyone's time.
5. With a binary choice, a Pigouvian tax on one option and a subsidy on the other are equivalent for efficiency.

**T7. Welfare programme: kinked budget constraint / job search.** *Used:* R26 Q2 and Q4.
1. Draw Y against leisure: endpoints, the guaranteed-income segment, the phase-out segment (effective wage w·(1−reduction rate)), and the rejoin point. Label the kinks with numbers.
2. Labour supply: at the old optimum, MRS = old wage. Under the programme, the opportunity cost of leisure there is lower, so the person works less. Argue with indifference-curve tangency; no maths is needed.
3. Efficiency loss: grant received − equivalent variation (list the steps).
4. Search decision: EU(search) − cost ≥ U(no search), then solve for the productivity cutoff. Conditionality (mandatory search) can induce search whose cost exceeds its expected gain, or impose monitoring costs. The normative objection is distributional/ethical.

**T8. Adverse selection (lemons).** *Used:* R25 Q2.
1. Buyers' max WTP = expected value λB_H + (1−λ)B_L.
2. Adverse selection iff that expected value < the high-quality seller's reservation price S_H. Rearrange to the threshold.
3. Comparative statics: a higher share of good units raises expected WTP, so the threshold falls.
4. Lemons-only equilibrium: S_L ≤ p ≤ B_L.

**T9. Median voter / positive vs normative.** *Used:* F24 Q8 (voting), F25 Q8 (positive vs normative).
1. Peak from the FOC. Single-peakedness from the SOC (U'' < 0, inverted U).
2. Order the group peaks. The median peak beats every alternative in pairwise voting.
3. Normative explanation of a "bad" policy = SWF weights/distribution. Positive explanation = majority voting, rent-seeking, corruption.

**T10. Linear incentive contract (the Personnel backbone).** *Used:* M23 Q3, M25 Q3, F24 Q3, R25 Q4, R26 Q6 (+ R26 Q7 without a bonus). Setup: q = μe (+K); U = a + bq − ½θe² + {−βq guilt | +γe intrinsic | +γ·profit care}.
1. Agent: substitute q and w into U, take the FOC in e, solve. State the corner e = 0 if b ≤ guilt.
2. PC (if there is a base salary): U(e*) = outside option, which gives a(b).
3. Principal: profit = pq − a − bq. Substitute e(b) (and a(b)), take the FOC in b, solve. Derivation steps earn the points, and the bare result gets 0.
4. Benchmark results: no base salary gives b = (p ± shift)/2 (M23 P/2 − K; M25 (p+β)/2; R26 (p−γ)/2). With a base salary, b = p ("sell the job", R25), because a extracts the rent.
5. Verbal: "why does b fall in K/γ?" Because the bonus is also paid on output that is not caused by the bonus. "Why does a base salary raise b?" Rent extraction: a claws the bonus back. "Why does lower guilt raise profit?" Through a cheaper PC plus more effort. "Does motivation weaken the bonus effect?" de/db = 1/θ, so no.
6. Efficiency benchmark: maximise U + profit. Transfers bq cancel, giving e = (p + γ)/θ.

**T11. Monopsony / non-profit N(W).** *Used:* F24 Q1, F25 Q1, R26 Q9.
1. Constraint: profit (Q−W)N(W), or non-profit budget B = WN(W) + pZ.
2. Marginal cost of a €1 raise = N + WN′ (every current worker gets the raise).
3. FOC interpretation term by term: MB = N′·(Q−W) (or N′Q of output), MC = the wage bill on existing workers / less budget for market purchases.
4. Markdown formula W = ηQ/(1+η). Profit per worker = Q − W.
5. Perfect competition means N′ = ∞ (a small wage cut and all workers quit). Monopsony power iff N′ < ∞. N(0) > 0 means volunteers.

**T12. Empirical methods.** *Used:* F24 3b, R25 Q7, F25 Q5, R26 Q8 (every F/R exam).
1. "Can we conclude …?" No: it is a correlation or before/after comparison. Name the confounder (booming economy, competitor exit) or the reverse causality (failing stores adopt performance pay), or crowding-out of intrinsic motivation.
2. Design: randomly assign *units* (stores or plants, within the relevant population, e.g. the 400 stores that currently use performance pay) to treatment and control. Change only the policy, then compare outcomes over time.
3. Requirements: randomisation, a large enough scale (noise), long enough duration, no contamination between groups, and reliable measurement.
4. Heterogeneity: measure the trait beforehand (survey or incentivised game), then test whether the treatment effect differs by it.
5. Theory: performance pay raises output through an incentive effect (moral hazard) and a sorting effect (adverse selection).

**T13. Information and sorting in the labour market.** *Used:* F24 Q4, F25 Q2, R26 7d (+8a).
1. Self-selection: write a PC for each type, so that only the desired type's earnings ≥ its outside option. Probation: W1 + (1−p)W2 + pW_u < 2W_u for the unskilled.
2. Symmetric ignorance plus zero profit: wage = expected productivity.
3. Free verifiable certificate: unravelling (the pooled wage keeps dropping until everyone certifies).
4. Costly certificate: the marginal type is indifferent, q* − cost = mean productivity of the uncertified, which gives the cutoff.
5. Motivated workers: set the wage between the motivated type's reservation wage and U_alt, so only the motivated apply.

**T14. Labour supply / income effects / status.** *Used:* R25 Q5, F25 Q4, R26 Q5.
1. FOC: wage × V′(income) = marginal disutility (X′ of leisure, or δ).
2. A higher base salary lowers V′, so effort falls (pure income effect).
3. A higher wage has two effects: each hour pays more (substitution, so more hours), and a richer worker has lower V′ (income, so fewer hours). Describe the mechanism; do not just name it.
4. Concavity: the first euros meet basic needs.
5. Status/relative income (rat race): Nash hours exceed joint-optimal hours because the status terms cancel in the sum. The fix is a 100% marginal tax above the efficient income.

**T15. One-off Personnel blocks with a shared skeleton.** These are teams with 1/N free riding and alternative sharing rules (F24 Q2), a tournament with a pride term (F25 Q3), and amenities/compensating differentials (R25 Q6: efficient iff X > V; a slack PC means the firm ignores V; a binding PC means the firm internalises V through the wage). Common steps:
1. The individual FOC.
2. The welfare/joint optimum (sum of utilities).
3. The PC under symmetry (p = ½), which gives the minimum wage.
4. The principal's FOC in the prize or sharing parameter.
5. A "describe how you would check" or "two opposing effects" verbal part.

### Recycled questions (earlier exam → later exam)

| Origin | Reappears as | What changed |
|---|---|---|
| M25 Q1 (public good, U = aQ − ½Q², "how much does B *consume*") | R26 1a-1b | Nearly verbatim. Pigouvian-subsidy and Coase-public-good verbal parts added (1c, 1d) |
| M25 Q3 (tobacco guilt β, no base salary, b = (p+β)/2) | R25 Q4 | Base salary added: PC → a(b), b = p, plus a "two reasons lower guilt raises profit" part |
| M23 Q3b ("why does b fall in K": bonus paid on output not due to effort) | R26 6d (intrinsic motivation γ) | Same logic, with K replaced by intrinsically motivated output |
| M23 Q3c-d (base salary, rent extraction) | R25 4b-4c | Same PC → a(b) → b = p chain |
| M23 Q1 (Samuelson + Nash via MRS) | F25 Q7 | MRS-based again, private-good benchmark added |
| M23 2b / M25 Q2 (Coase) | F24 5c, R26 1d | Bilateral bargaining over a public good; Coase violated by non-excludability |
| F24 Q1 (non-profit N(W), budget, FOC) | R26 Q9 (F25 Q1 is the for-profit version) | Marginal cost of a raise N + WN′, plus the monopsony definition |
| F24 Q6 (linear market, ban vs laissez-faire, incidence 2/3) | F25 Q9, R26 Q3 | Same structure with MEC = αQ or ½Q, plus Pigouvian tax |
| R25 Q7 / F25 Q5 (correlation vs RCT) | R26 Q8 | Reverse causality and crowding out added |

Lesson: every midterm Personnel question and the M25 public-good question were recycled into a later resit within a year. Final-to-later-exam recycling (F24 Q1 → R26 Q9; F24 Q6 → F25 Q9/R26 Q3) is just as strong. For 23 Oct 2026, the 2025 midterm and the R26 resit are the most likely recycling sources.

---

## 4. Answering-style rules (from the grading schemes)

1. **Respect the sentence cap** ("max 2/3/4 sentences", "one clear sentence"). The model answers fit it exactly. Points come from the mechanism, not from length.
2. **No "math in words".** Do not restate a formula in prose (F24 1b, 1c, 6b; F25 3c). Give the economic channel: who gains, who loses, which margin changes.
3. **Naming a term is worth 0.** "Supply elasticity", "income and substitution effect" or "Coase conditions" earn nothing without the explanation (F24 6d, F25 4b "just name-dropping yields no points", R26 1d, R26 2c "not sufficient to mention terms").
4. **Answer the exact causal link asked.** M25 2b: "higher external cost → higher transfer" = 0, and "q* falls" without linking to A's lost profit = half. F24 6b: "higher β → higher Q" = 0, you must say "higher consumer surplus".
5. **Normative ≠ efficiency.** When efficiency is already achieved (Coase) or the question asks for a *normative* reason, only distribution/SWF-weight/ethical arguments score. Efficiency arguments get 0 (M25 2c, F25 8a, R26 4c). *Positive* reasons = voting, majority/minority, corruption, rent-seeking (F25 8b).
6. **Show the derivation path; points are per step.** Typically: set up the objective (1), substitute (1), FOC (1), solve (1). A bare final answer gets 0 ("just writing b = p without a derivation does not result in any point", R25 4c). A correct approach with an arithmetic slip still gets full credit (M23 3c), and follow-through credit is given (F24 8b).
7. **Writing only the condition is not enough.** Write ΣMRS = MRT *and* solve it (M23 1b). Derive both best responses *and* solve the system (M23 1c).
8. **Check corners and non-negativity.** Effort = 0 if b < β (0.5 pt in M25 3a). The free rider provides 0. Still state what the free rider *consumes*, or you lose partial credit.
9. **Include every welfare component.** CS + PS − external cost (+ tax revenue when there is a tax). EB belongs in the cost of a project financed by a distortionary tax. Bilateral bargaining pays only for the *increase* in Q (F24 5c: paying for all Q = 0).
10. **"Describe the steps" questions** want an ordered recipe, with no computation: derive X under rule 1, derive X under rule 2, plug *both* players' choices into the utility, compare (F24 2d-2e, R26 2c).
11. **Empirical answers**: say *random* assignment, name the treatment and control groups and the outcome being compared, and keep it within the population asked about (R26 8c: the 400 stores that use performance pay). One reason = one concrete confounder or mechanism. Explain any technical term you use (R26 8b).
12. **"Give two reasons/effects"** = two distinct channels, 1 point each (R25 4d, F25 3c, R26 8a, F25 5b). Do not give two versions of the same channel.
13. **Graph questions**: the points go to the labelled endpoints, the right number of segments, and the numeric kinks (R26 2a). For "more or less?" questions with a graph, argue through the slope of the BC versus the slope of the IC at the old optimum.
14. **True/false**: derive the expression, then state the verdict with the derivative (de/db = 1/θ, so the statement is false).
15. **Additional answer space** is only read if you point to it from the original box, and it is not for overlong answers.
