# Upcoming / unfinished topics - skim-level preview

Status 5 Oct 2026 (exam Fri 23 Oct). Covers the 9 topic IDs that are not yet studied: W5 (unfinished), W6 (lecture **tomorrow 6 Oct**), W7, and Personnel discrimination / tournaments / teams. Exercise sets for these are not released yet, so the "how examined" part is all we have to train on.

Sources: `map/_work/exam-inventory.md`, `Past exams/**/*(with solutions).md`, `Textbooks/*/(md)`, `Public Economics (Delfgaauw)/Week 5 ...`, `Week 6 - Optimal taxation/Lectures/Lecture 6 - Optimal taxation.md`, `00 Course info/Course guide 2026-27.md`.
Exam codes: F24 = Final Oct 2024 (26 pts), R25 = Resit Jul 2025 (52 pts), F25 = Final Oct 2025 (60 pts), R26 = Resit Jul 2026 (60 pts). The midterms contain none of these topics. Page numbers are **PDF pages** (`<!-- pdf p. N -->` markers). R&G does not number its sections, so sections are cited by title.

## At a glance

| ID | Lecture | Exams (of 4 finals/resits) | Points seen | Most important model |
|---|---|---|---|---|
| PUB-TAX-INC | W5 (done 29 Sep) | 3: F24, F25, R26 | 8 | Linear D/S, pre/post-tax equilibrium; burden share = elasticity ratio |
| PUB-TAX-EB | W5 (done 29 Sep) | 3: F24, R25, F25 (+2 EB-in-CBA Qs) | 5 (+4) | Harberger triangle EB = ½·t·ΔQ = ½·ε·P·Q·t² |
| PUB-TAX-RAMSEY | W6, 6 Oct | 2: R25, F25 | 7 | Inverse elasticity rule t_X/t_Y = ε_Y/ε_X |
| PUB-TAX-OPTINC | W6, 6 Oct | 0 (direct) | 0 | Edgeworth (100% top rate) vs linear tax T = −α + tY |
| PUB-POL-VOTE | W7, 13 Oct | 1: F24 | 2 | Median voter theorem with single-peaked preferences |
| PUB-POL-GOVFAIL | W7, 13 Oct | 1: F25 | 2 (+2 normative half) | "Positive explanation": majority voting / rent-seeking / corruption |
| PER-BIAS | 9 Oct | 0 | 0 | Taste-based vs statistical discrimination (Becker) |
| PER-TOURN | 7 Oct | 1: F25 | 10 | Effort FOC with p_i = ½ + α(e_i − e_j); then PC and optimal prize |
| PER-TEAM | 14 Oct | 1: F24 | 5 | 1/N free-riding under equal sharing |

---

## PUBLIC ECONOMICS

### PUB-TAX-INC - Tax incidence (W5, R&G ch 14)

**How past exams asked it** (3 of 4 finals/resits, about 8 pts):
- F24 6c (1, numerical): consumers' share of a €30 unit tax on producers (answer 2/3). 6d (1, verbal): why consumers bear part of a tax levied on producers.
- F25 9b (2, verbal): consumer share larger or smaller if demand is less elastic? (larger).
- R26 3b (2, numerical): incidence of a €30 tax on consumers (producers bear 2/3). 3c (2, verbal): effect of more elastic supply.
- Always the first sub-question of the **"linear market + externality" template** (inventory §7.4 #2). It is followed by EB, the Pigouvian tax and ban vs laissez-faire.
- Standard steps: (1) equilibrium without the tax. (2) Shift S up (or D down) by u and find the new Q. (3) Find P_consumer and P_producer = P_c − u. (4) ΔP_c/u = consumer share. Check: shares × Q_t add up to the revenue. Verbal part: "elasticity = how easily you can escape to alternatives; the side that escapes more easily bears less". Who legally pays is irrelevant.

**Core model in the book** (`14 - Taxation and Income Distribution.md`, pdf 453-494):
- *Tax Incidence: General Remarks*, pdf 454-459: statutory vs economic incidence, "only people bear taxes", progressivity measured by the **average** tax rate (pdf 457-459).
- *Partial Equilibrium Models: Unit Taxes on Commodities*, pdf 460-467 (**core**): wedge P_c = P_s + u. Incidence is independent of the side of the market that is taxed (pdf 464). More elastic side bears less (pdf 465). Polar cases: perfectly inelastic supply (Fig 14.4) and perfectly elastic supply (Fig 14.5), pdf 465-466.
- *Ad Valorem Taxes* pdf 467-470. *Taxes on Factors / payroll tax* pdf 470-472 (labour bears most of it). *Commodity Taxation without Competition* pdf 473-476. *Capitalization* pdf 478-479.
- *General Equilibrium / Harberger model*, pdf 479-489: skim only, never examined.
- Key results: consumer share ≈ ε_S/(ε_S + |ε_D|). To get ε from P = f(Q), use dQ/dP = 1/(dP/dQ). ATR rising in income = progressive. T = a + tI is progressive iff a < 0.

**Your W5 material:** the summary `Notes/Week 5 - Taxation (summary).md` §1-2 already covers this, with Exercise 5.1 worked through.

**Minimum prep (30 min):** reread summary §1-2. Redo Exercise 5.1 without notes. Then do F24 Q6c-d from the exam.
**Full prep:** R&G pdf 460-472 plus Fig 14.4-14.5. Do the full template F25 Q9 and R26 Q3 (incidence → EB → Pigou → ban), timed. Write a 2-sentence elasticity answer and check it against the grading scheme wording.

---

### PUB-TAX-EB - Excess burden (W5, R&G ch 15)

**How past exams asked it** (3 of 4, about 5 pts, plus 4 pts of EB inside a cost-benefit question):
- F24 7a (1): EB of a €50 champagne tax (= 5000), using ½·t·ΔQ.
- R25 3b (2): EB of a €5 tax on X with perfectly elastic supply (= 50).
- F25 9a (2): EB of a €30 tax (= 150) from the equilibria with and without the tax.
- Linked: F24 7b (2) and R25 3e (2). A project financed by a distortionary tax, where cost = revenue + EB, weighted by the SWF λ. This is the W6 lecture's "MCPF" part (slides 24-27). Exercise 5.4 (park) is the same template.
- R26 2c (2, describe a method): efficiency loss of a transfer = EV vs the grant. This is the same EV logic as EB at the individual level.
- Standard steps: find Q_0 and Q_t (same as for incidence), then EB = ½·u·(Q_0 − Q_t). Or use EB = ½·ε·P·Q·t² for an ad valorem tax with perfectly elastic supply. Individual level: EB = EV − revenue. EV = the parallel shift of the pre-tax budget line down to the post-tax indifference curve.

**Core model in the book** (`15 - Taxation and Efficiency.md`, pdf 495-529):
- *Excess Burden Defined*, pdf 496-507 (**core**): EV (pdf 499), lump-sum tax has no EB (pdf 500-501), income tax ≠ lump-sum tax when labour is variable (pdf 503-504), the EB comes from the **substitution (compensated) effect** (pdf 505-506), plus Q&A pdf 501-507.
- *Excess Burden Measurement with Demand Curves*, pdf 507-510 (**core**): Harberger triangle, EB = ½·η·P·Q·(t)², where η is the **compensated** elasticity. Also preexisting distortions (pdf 510), EB of a subsidy (511), EB of income taxation (513-516).
- *Differential Taxation of Inputs*, pdf 516-521: skim. *Appendix: Formula for EB* pdf 525-527. *Second best* pdf 527-529 (links to the W6 Ramsey rule).
- Key results: EB rises with the **square** of t, so spreading taxes is better. EB rises with elasticity. EB = 0 if the compensated response is 0 (e.g. perfectly inelastic supply or demand). Revenue is a transfer, not a loss.

**Your W5 material:** summary §3-5 (EB triangle, EV, worked example slide 39, lump-sum). Exercises 5.2 (Betty, income tax EB), 5.3 (Harry, redistribution rotates the BC) and 5.4 (park plus EB) are the parts most likely still unfinished.

**Minimum prep (30 min):** summary §3-4. Redo the slide 39 example (U = √C + 4√B). Do F25 9a.
**Full prep:** R&G pdf 496-510. Exercises 5.2-5.4. Then F24 Q7 (a-c) and R25 Q3 (b, e) as a pair. Both test "EB is an extra cost in the CBA" and lead straight into W6.

---

### PUB-TAX-RAMSEY - Optimal commodity taxation (W6, R&G ch 16)

**How past exams asked it** (2 of 4, 7 pts; in two consecutive exams, R25 and F25, but not R26):
- R25 3c (2, numerical + rule): compute the demand elasticity of X at equilibrium (ε_X = 5/7), compare with ε_Y = 2, so t_X > t_Y. 3d (2, verbal, max 4 sentences): why tax elastic goods at lower rates.
- F25 10a (2): three groups each consume one good with ε = 3, 1, 1/3, so t_R = t_M/3 = t_P/9. 10b (1, one sentence): is the system progressive? **Regressive**, because the poor's inelastic good is taxed most.
- Standard steps: (1) State the Ramsey / inverse elasticity rule. (2) Compute ε = |dQ/dP · P/Q| at the pre-tax equilibrium. (3) Rank or ratio the rates. Verbal answer: elastic demand means good substitutes, so a tax causes a big quantity distortion and a big EB per euro of revenue. A partial point is given for "EB increases in elasticity" without naming the rule.

**Core model in the book** (`16 - Efficient and Equitable Taxation.md`, pdf 530-566):
- *Optimal Commodity Taxation* intro, pdf 530-532: a uniform tax on all goods **including leisure** = lump-sum tax. Since leisure can't be taxed, a uniform tax on goods only = a proportional income tax, and it distorts.
- *The Ramsey Rule*, pdf 532-536 (**core**): minimise total EB subject to revenue R. Equate marginal EB per € of revenue across goods (eq 16.7), which means an **equal percentage reduction in quantity demanded** for every good.
- *Inverse elasticity rule* (eq 16.9, pdf 535-536): t_X/t_Y = η_Y/η_X for unrelated goods. *Corlett-Hague* (pdf 536): tax complements of leisure at higher rates.
- *Equity Considerations*, pdf 536-537: the inverse elasticity rule hits necessities, so equity modifies it. *Taxation of the family* pdf 537-538 (apply the rule to the elasticities of 2nd earners).
- *Optimal User Fees*, pdf 538-543: P = MC with lump-sum financing of the deficit, otherwise Ramsey pricing across public enterprises. Lower priority.

**Week 6 lecture slides (33 pp.), in order:**
1. pp. 1-4: recap W5. Three questions: least-inefficient way to raise R, does a proposal still raise SW once EB counts, how to evaluate tax systems.
2. pp. 5-9: *Minimising EB*. A uniform tax on X, Y **and leisure** is lump-sum. Without leisure it equals an income tax and distorts.
3. pp. 10-16: assumptions (perfectly elastic supply, zero cross-elasticities). Ad valorem EB triangle = ½·t·P₀·ΔQ = **½·ε·P₀·Q₀·t²** (unit-tax version on p. 15). Lessons: EB is quadratic in t (spread taxes) and rises in ε.
4. pp. 17-23: *Ramsey rule derivation*. dt/dR = 1/(P·Q). dEB/dt = ε·P·Q·t. So **MEB_X = ε_X·t_X**. Setting MEB_X = MEB_Y gives **t_X/t_Y = ε_Y/ε_X**. Then the Dutch VAT 21% vs 9% on food question (p. 22) and the Lagrange derivation (p. 23).
5. pp. 24-27: *Government intervention and EB*. EB is a cost in CBA (Betuwelijn). **Marginal Cost of Public Funds** MCPF = 1 + MEB, about 1.2-1.3 in the OECD and 1.5 in the NL (Jacobs). Jacobs (2018): governments choose distortive taxes for redistribution. The slide roadmap says "old exam exercise" here, which is the F24 Q7 / R25 Q3 type.
6. pp. 28-32: *Evaluating tax systems*. Criteria (Mankiw): efficiency, egalitarianism, intergenerational equity, (stabilisation). Equity-efficiency trade-off examples.
7. p. 33: next week, positive analysis (collective decision-making).
- **Note:** the slides do **not** cover Edgeworth / optimal income taxation, horizontal equity, user fees or tax evasion. The lecture is Ramsey + MCPF + criteria.

**Minimum prep before the 6 Oct lecture (40 min):** read R&G pdf 530-536 (stop after Corlett-Hague). Flip through slides pp. 12-21 and try to follow MEB = ε·t. Then try R25 Q3c-d **cold**, to see the exam format before the lecture.
**Full prep after:** R&G pdf 536-538 (equity) plus a skim of 538-543 (user fees). Do R25 Q3 a-e and F25 Q10 timed. Write the 4-sentence intuition and the "regressive" one-liner and compare with the scheme. Practise computing ε from a linear demand at the equilibrium point.

---

### PUB-TAX-OPTINC - Optimal income taxation, other criteria (W6, R&G ch 16)

**How past exams asked it:** **never examined directly in the 6 exams we have.** Nearby items:
- F25 10b: progressivity of a commodity tax system (concept from R&G ch 14, pdf 457-459).
- F24 7c: 2nd welfare theorem / lump-sum redistribution.
- R26 5c (Personnel): an income tax to correct a positional externality.
- Expect at most a 1-2 sentence verbal part, e.g. "why is the optimal marginal rate below 100%?" or "is a flat tax progressive?"

**Core model in the book** (`16 - Efficient and Equitable Taxation.md`):
- *Optimal Income Taxation: Edgeworth's Model*, pdf 543-544. Utilitarian SWF, identical concave utility, fixed total income, so equalise MU. Incomes are levelled from the top, which means **100% marginal tax at the top**.
- *Modern Studies*, pdf 544-546: with labour-supply incentives and a **linear income tax T = −α + t·Y** (eq 16.11: lump-sum grant α plus constant marginal rate t), the schedule is progressive in the ATR sense. Mankiw-Weinzierl-Yagan find the optimal t is about 48-50% with α about 60% of average income. A higher t means more redistribution but a larger EB.
- *Politics and the Time Inconsistency Problem*, pdf 546-548: a one-off capital levy is efficient ex ante but not credible.
- *Other Criteria for Tax Design*, pdf 548-561: horizontal equity (utility vs rule definition, capitalisation undoes it), administration costs, tax evasion (expected-penalty model), architectural avoidance. *Overview* pdf 561-563.
- This is the same equity-vs-efficiency logic as PUB-REDIST-THEORY (ch 12 "leaky bucket", F25 Q6c).

**Not on the W6 slides.** The lecture covers ch 16 but the slides stop at Ramsey + MCPF + criteria.

**Minimum prep (20 min):** read pdf 543-546. Be able to say in 2 sentences why Edgeworth gives 100% and why incentives pull it down to about 50%. Also know that a linear tax with α > 0 is progressive.
**Full prep:** skim pdf 546-556 (horizontal equity, evasion). Do 2-3 R&G ch 16 discussion questions (pdf 563-566). Low priority relative to Ramsey.

---

### PUB-POL-VOTE - Collective decision-making, direct democracy (W7, R&G ch 6)

**How past exams asked it** (1 of 4, 2 pts):
- F24 8a (1): maximise U = 5 ln m − m/3, which gives m_E = 15. Show single-peakedness with the SOC (U'' < 0, so one maximum).
- F24 8b (1): with three equal groups (East's peak 15 is derived in 8a; North's peak is 20, the median; West's is higher), which m wins pairwise majority voting? The median peak, m = 20. You get credit for a correctly used median even if 8a was wrong.
- Standard steps: (1) FOC for each group's ideal point. (2) SOC (or argue concavity) for single-peakedness. (3) Order the peaks and pick the median; it beats every alternative in pairwise votes. Likely variations: show a **cycle** with a double-peaked voter, or explain why the median outcome need not be efficient (it ignores intensity of preferences).

**Core model in the book** (`06 - Political Economy.md`, pdf 191-224):
- *Direct Democracy: Unanimity Rules*, pdf 192-194: Lindahl prices (tax shares where both want the same G, giving Samuelson efficiency). Problems: strategic behaviour, decision costs.
- *Majority Voting Rules*, pdf 194-200 (**core**): cycling / voting paradox (Table 6.2, pdf 195-196), agenda manipulation, single- vs double-peaked preferences (pdf 196-197). **Median voter theorem** (pdf 198-199): with single-peaked preferences on one dimension, the median's peak wins. The outcome is generally not efficient (efficiency is about the mean/sum, not the median).
- *Logrolling*, pdf 200-202: vote trading can raise welfare (Table 6.4) or pass inefficient pork (Table 6.5).
- *Arrow's Impossibility Theorem*, pdf 202-204: no rule satisfies all of: transitive ranking for any preferences, Pareto, independence of irrelevant alternatives, non-dictatorship.

**Minimum prep before 13 Oct (30 min):** pdf 194-200 (majority voting through the median voter theorem). Then do F24 Q8 a-b.
**Full prep:** pdf 192-204. Build your own 3-voter cycle example. Do R&G ch 6 discussion questions on median voter and logrolling (pdf 220-224). Expect a W7 exercise set to be released around 13 Oct.

---

### PUB-POL-GOVFAIL - Representative democracy, bureaucrats, rent-seeking, government growth (W7, R&G ch 6)

**How past exams asked it** (1 of 4. The 4-pt question is half this topic and half PUB-POSNORM):
- F25 8 (resource extraction hurting the North): 8a (2) **normative** reason for over-extraction = distribution / SWF weights. 8b (2) **positive** reason = the majority votes for politicians promising high extraction (the North is a minority), or corruption / rent-seeking. Efficiency arguments get 0 points.
- Standard steps: name the mechanism (median voter / majority tyranny, rent-seeking, bureaucrat budget-maximising, rational ignorance, corruption) and link it to *this* case in at most 2 sentences.

**Core model in the book** (`06 - Political Economy.md`):
- *Representative Democracy: Elected Politicians*, pdf 204-208: Downsian two-candidate competition, where vote-maximisers converge to the **median voter** (Fig 6.3). It breaks down with multiple dimensions, ideology, personality, leadership, or decisions by special interests. Rational ignorance.
- *Public Employees*, pdf 208-209: bureaucrats maximise perks, power and budget, so G can exceed the level where MSB = MC.
- *Special Interests*, pdf 209-214: group formation by income source, size and industry. **Rent-seeking** (Fig 6.4, peanut farmers, pdf 211-214): the social cost is the DWL triangle **plus** the resources spent lobbying for the rent rectangle (area abce).
- *Other Actors* pdf 214-215 (judiciary, journalists, experts).
- *Explaining Government Growth*, pdf 215-219: citizen preferences (income elasticity > 1 / Wagner, Baumol-type relative price of G), chance events, social attitudes, income redistribution (middle class / majority), and controlling growth.

**Minimum prep before 13 Oct (30 min):** pdf 204-205 (median voter for elections) and pdf 208-214 (bureaucrats, rent-seeking). Then do F25 Q8 and write both 2-sentence answers.
**Full prep:** pdf 204-219. Make a one-line list of "positive explanations" you can drop into any "why does government do X inefficient thing" question.

---

## PERSONNEL ECONOMICS

### PER-BIAS - Discrimination / avoiding bias (lecture 9 Oct, Kuhn ch 16)

**How past exams asked it:** **never examined in the 6 exams we have** (the inventory notes "discrimination (taste-based) ... not examined"). If it appears, expect a verbal question or empirical design: e.g. "design a correspondence/audit study", "why might taste-based discrimination not survive competition", "statistical vs taste-based". This fits the recurring **empirical-methods** template (correlation is not causation, randomise names on CVs).

**Core model in the book** (`16 - Avoiding Bias.md`, pdf 281-301). The chapter is mainly verbal / evidence, with no FOC model:
- 16.1 *Detecting Discrimination in Hiring*, pdf 282-283: definition 16.1. Bertrand-Mullainathan resume audit: white names get **50% more callbacks** (Result 16.1).
- 16.2 *Why Does Discrimination Occur?*, pdf 283-287: four conscious sources (Result 16.2): (1) employer tastes and (2) co-worker/customer tastes = **taste-based** (Becker 1971). (3) Unbiased beliefs = **statistical discrimination**. (4) Biased beliefs. Plus unconscious bias (IAT).
- 16.3 *Consequences*, pdf 287-290 (Result 16.3): employer-taste, biased-belief and unconscious discrimination **lower profits**, so in the long run competition punishes them (Becker). Customer/co-worker tastes and statistical discrimination can be **profitable**, so the market does not remove them. Statistical discrimination can be **self-fulfilling** (lowers the group's incentive to invest).
- 16.4 *Reducing Bias in Employee Evaluation*, pdf 290-295 (Result 16.4): change the recruiter's decision environment, monitor recruiters, **blind recruiting** (orchestra screens, pdf 293).

**Minimum prep before 9 Oct (30 min):** chapter summary pdf 295-296, then 16.2-16.3 (pdf 283-290). Be able to classify any example into the 4 sources and say whether it is profitable.
**Full prep:** whole chapter plus discussion questions (pdf 296-301, Q3 is the co-worker-tastes case). Link to PER-EMP: practise a 3-sentence audit-study design. Low weight given zero exam history.

---

### PER-TOURN - Tournaments (lecture 7 Oct, Kuhn ch 20-23)

**How past exams asked it** (1 of 4, **10 pts** = 1/6 of F25):
- F25 Q3: two workers, period-1 wage W, the winner is promoted to W + Z and gets pride utility P. Probability p_i = ½ + π(e_i − e_j). Cost ½θe².
  - 3a (2): FOC **π(Z + P) − θe = 0**.
  - 3b (3): symmetric so p = ½. Set the PC: expected utility of 2 periods = 2V. Substitute e to get the minimum W.
  - 3c (2, verbal): two opposing effects of P. The prize is worth more (more attractive), but it induces more effort (more costly).
  - 3d (3): profit = 2Re − Z − 4W. Substitute e(Z) and W(Z), take the FOC, giving **Z = R/π − P** (corrected against grading scheme) (the firm "uses" pride to save on the prize).
- Standard steps are the linear-contract backbone with the bonus b replaced by the prize spread: agent FOC → symmetric equilibrium → PC binds and gives the base wage → principal maximises over the prize → verbal comparative static.

**Core model in the book:**
- Ch 20 *A Simple Model of Tournaments* (`20 - ...md`, pdf 364-389), **core 20.1-20.6, pdf 364-375**:
  - 20.1-20.2 (pdf 364-370): Q_i = d·E_i + ε_i. With relative luck uniform on [−R/2, R/2], **p_1 = ½ + αd(E_1 − E_2)** with α = 1/R (Result 20.1).
  - 20.3 (pdf 369-370): EU = a + p·S − E²/2, so **E = α·d·S**. Effort is independent of base pay a and rises in the prize spread S, productivity d and measurement precision α. Symmetric players choose equal effort, so the winner is decided by luck (Result 20.2).
  - 20.4-20.5 (pdf 370-373): efficient E* = d (Result 20.3), so set **S = 1/α = R**. Base pay a then sets the split between worker and firm (Table 20.1).
  - 20.6 (pdf 373-375): **equivalence of tournaments and piece rates** (Result 20.4). Tournaments are strategic, so behaviour is more variable (Result 20.5).
  - 20.7 (pdf 375-380): many players / prizes / stages. 1/N effect vs competition effect (20.6), sequential contests and feedback (20.7-20.8), convex salary scales. 20.8-20.9 (pdf 380-387): risk; relative pay **insures against common shocks** (Result 20.10).
- Ch 21 *Sabotage, Collusion, Risk-Taking* (pdf 390-410): sabotage aimed at the leaders (Carpenter et al.), collusion when output is observable (Bandiera fruit farm), risk-taking by those behind (mutual funds). Verbal only.
- Ch 22 *Unfair and Uneven Tournaments* (pdf 411-435): asymmetric ability lowers **both** players' effort (Result 22.1, the Tiger Woods effect). Fixes: leagues (22.4), handicaps / affirmative action (22.5). Fair rules maximise profit with equal players (22.3).
- Ch 23 *Selection into Tournaments* (pdf 436-451): the confident and those who enjoy competition enter, risk aversion deters entry. Gender gap in competitiveness (Niederle-Vesterlund, Result 23.3).

**Minimum prep before 7 Oct (45 min):** Kuhn pdf 364-373 (20.1-20.5). Then do F25 Q3a-b **as a warm-up**. It is exactly the 20.3 FOC with S replaced by Z + P.
**Full prep:** finish 20.6-20.9 and read the chapter summaries of ch 21-23 (pdf 408, 432, 445) plus the Results boxes. Do F25 Q3 c-d timed. Do the Topic 8 exercise set when it is released. Practise one variant: add base pay, a different p function, or a noisier measure (lower α means S has to rise).

---

### PER-TEAM - Teams (lecture 14 Oct, Kuhn ch 24-27)

**How past exams asked it** (1 of 4, **5 pts** = about 1/5 of F24):
- F24 Q2 (Arno and Bea, revenue R = p(e_a + e_b), costs ½θe_a² and ½λe_b²):
  - a (1): 50/50 split gives e_a = p/(2θ).
  - b (1): sum of utilities gives efficient e_a = p/θ and e_b = p/λ.
  - c (1): Arno gets share e_a/(e_a + e_b), so his income = p·e_a and e_a = p/θ (efficient).
  - d (1, method): compare the induced efforts with the efficient ones. Note that welfare also depends on how revenue is divided only through effort.
  - e (1, method): substitute both regimes' equilibrium efforts into Arno's utility and compare.
- Standard steps: individual FOC under the sharing rule → social planner FOC (sum of utilities, transfers cancel) → compare → verbal: "each partner bears the full cost of effort but gets only 1/N of its return".

**Core model in the book:**
- Ch 24 *Incentives in Teams and the Free-Rider Problem* (`24 - ...md`, pdf 452-473), **core**:
  - 24.1 (pdf 452-456): Q = ΣE_i, U_i = Y_i − E_i²/2. If individual effort is contractible there is no problem (Result 24.1).
  - 24.2 (pdf 456-457): efficient **E_i = 1** (Result 24.2).
  - 24.3 (pdf 457-462): equal sharing Y_i = Q/N gives **E_i = 1/N** (the 1/N free-rider problem, Result 24.3). Unequal shares α_i give E_i = α_i (Result 24.4). With budget balance, Σα_i = 1, so you cannot get everyone to E = 1.
  - 24.4 (pdf 462-470): a **group piece rate** (each gets the full marginal group output, with an entry fee to balance the budget in equilibrium, Result 24.5). **Group bonuses** with a target and withheld output make efficient effort a Nash equilibrium (Result 24.6, Holmström budget-breaker).
- Ch 25 *Team Production in Practice* (pdf 474-499): linear VCM / public-goods game, free-riding in the lab, **altruistic punishment** sustains contributions (Fehr-Gächter). Peer pressure (Babcock et al.). Koret garment factory teams +18% productivity (14% incentive / 4% selection).
- Ch 26 *Complementarity, Substitutability, Ability Differences* (pdf 500-545): weakest-link (extreme complementarity) makes efficient effort an equilibrium even with equal sharing, but coordination is the problem (Result 26.2). Moderate complementarity gives multiple equilibria, and unequal shares help (26.4-26.6). Perfect substitutes give the volunteer's dilemma (26.8). Optimal team size maximises average product (26.10-26.13). With complements, mixed-ability teams are best (26.14-26.15).
- Ch 27 *Choosing Teams* (pdf 546-571): **Groucho Marx rule**: with equal sharing you only want to join teams whose average ability exceeds yours (27.1-27.2). Positive assortative matching (27.3-27.5). Skill diversity and hierarchy vs teams (27.6-27.9).

**Minimum prep before 14 Oct (40 min):** Kuhn pdf 452-462 (24.1-24.3). Then do F24 Q2 a-c. It is the 1/N model with heterogeneous costs and revenue p.
**Full prep:** 24.4 (group piece rate / bonus), chapter summaries of 25-27 (pdf 495, 538, 567) plus the Results boxes. Do F24 Q2 d-e in writing. Do the Topic 9 exercises when released. Variant to practise: N partners, share α_i, efficient vs Nash effort, and "which sharing rule restores efficiency and why it is not budget-balanced".

---

## Suggested order for the next 2.5 weeks

1. **Before Tue 6 Oct:** W6 minimum prep (Ramsey, 40 min). Finish W5 exercises 5.2-5.4 if possible, since W6 slides 24-27 build on EB in CBA.
2. **Before Wed 7 Oct:** tournaments minimum prep (45 min, F25 Q3a-b).
3. **Before Fri 9 Oct:** bias minimum prep (30 min).
4. **Before Tue 13 Oct:** voting + govfail minimum prep (60 min total, F24 Q8 + F25 Q8).
5. **Before Wed 14 Oct:** teams minimum prep (40 min, F24 Q2a-c).
6. **After each lecture:** the "full prep" block plus the new exercise set. Priority by exam weight: TOURN ≈ TEAM ≈ INC/EB template > RAMSEY > VOTE/GOVFAIL > OPTINC, BIAS.
