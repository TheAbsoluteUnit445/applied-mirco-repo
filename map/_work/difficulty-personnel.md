# Personnel Economics: difficulty scoring per topic ID

Built 5 Oct 2026 for the 23 Oct 2026 final. The scores come from the actual exam questions and grading schemes (`Past exams/*/(with solutions).md`: F24, R25, F25, R26, M23, M25), the tagged bank (`exams-tagged.md` §1, §3, §4), `exercises-personnel.md` and the `topics/PER-*.md` pages. They do not come from the topics' general reputation.

**Difficulty is not priority.** A topic can be hard and never examined (PER-BIAS, PER-PA-RISK). For where the points are, use `GAPS-PERSONNEL.md` (priority A/B/C). This file says *how hard each topic is to score on once it appears*.

## Rubric (1 = easy, 5 = hard)

| Dim | Measures | 1 | 5 |
|---|---|---|---|
| D1 Math load | Number of derivation steps and algebra complexity | one-line FOC or inequality | FOC with a probability or twist term, then a PC, then a second FOC in the instrument |
| D2 Conceptual trickiness | Counter-intuitive results, traps the scheme punishes, setups that are easy to misread | straightforward | result flips with a hidden condition; a scheme-punished trap |
| D3 Verbal precision | Share of the points that depend on a precise 1-4 sentence mechanism (name-dropping = 0) | almost all numerical | almost all capped verbal |
| D4 Variability | How much the question changes between exams | fixed recipe | a new model twist each time |
| D5 Material gap | How poorly the tutorials prepare it | COVERED = 1 | PARTIAL = 3, GAP / lecture-only / not in Kuhn / no drill = 5 (4 = PARTIAL where the exam-specific variant is undrilled) |

**Composite** = round(mean of D1-D5, 1). Ties are broken by exam weight (`exams-tagged.md` §2a).

## Summary table (sorted by composite, descending)

| ID | D1 | D2 | D3 | D4 | D5 | Composite | Why, in one line |
|---|---|---|---|---|---|---|---|
| [PER-NONCLASS](#per-nonclass) | 4 | 4 | 4 | 5 | 4 | **4.2** | A new twist in every exam (guilt, profit-care, intrinsic, status, pride). The algebra is not in Kuhn, and the corner e = 0 and T/F traps cost points |
| [PER-TOURN](#per-tourn) | 5 | 4 | 3 | 4 | 5 | **4.2** | The heaviest algebra in Personnel (p_i term, 2-period PC, 4W, Z = R/π − P), and no set has been released |
| [PER-TEAM](#per-team) | 3 | 4 | 3 | 4 | 5 | **3.8** | The F24 2c share rule must be simplified before differentiating, and 2e needs both partners' efforts. No set; ch 25-27 could add a new twist |
| [PER-MONOPSONY](#per-monopsony) | 3 | 3 | 4 | 3 | 4 | **3.4** | Non-profit FOC with the 1/p term (lecture-only), 1 pt per FOC term in economic words, N′ = ∞ needs value + reason |
| [PER-BIAS](#per-bias) | 1 | 3 | 4 | 4 | 5 | **3.4** | Never examined and no set, so anything asked is novel and verbal. Taste vs statistical and survival under competition are counter-intuitive |
| [PER-EMP](#per-emp) | 1 | 3 | 5 | 3 | 4 | **3.2** | Fully verbal with sentence caps. Wrong population = 0 (R26 8c), technical terms must be explained, and no exercise asks for an RCT design |
| [PER-INCOME](#per-income) | 2 | 3 | 5 | 3 | 3 | **3.2** | The easy FOC hides a 0-for-name-dropping verbal (F25 4b). You must argue through how the MB term changes |
| [PER-PA-RISK](#per-pa-risk) | 3 | 4 | 3 | 3 | 3 | **3.2** | Multitask 2×2 system and crowding out of the other task; risk aversion untrained. Never examined |
| [PER-SEL-SCREEN](#per-sel-screen) | 3 | 4 | 2 | 3 | 1 | **2.6** | The unravelling iteration, the costly-certificate cutoff (q* − 20 = (q*+20)/2) and the pW_u branch are easy to set up wrong, but Set 5 has twins |
| [PER-EFFWAGE](#per-effwage) | 2 | 3 | 3 | 2 | 3 | **2.6** | No dedicated exercise; the "pay above market to stop shirking" logic is counter-intuitive. Never examined |
| [PER-PA-PRINC](#per-pa-princ) | 3 | 3 | 3 | 2 | 1 | **2.4** | Fixed 4-step recipe, but a bare b = p scores 0 and the "why b falls in K/γ" verbal needs the exact channel |
| [PER-PA-EFFDIST](#per-pa-effdist) | 2 | 3 | 4 | 2 | 1 | **2.4** | Easy algebra (transfers cancel), but the points sit in rent-extraction and "two distinct channels" verbals (M23 3d, R25 4d) |
| [PER-PA-MONITOR](#per-pa-monitor) | 3 | 3 | 2 | 2 | 1 | **2.2** | Two-period no-shirking constraints with lost future rents; fully trained by T3 3.2; never examined |
| [PER-TRAIN](#per-train) | 3 | 3 | 2 | 2 | 1 | **2.2** | PV sums, Nash split and anticipated hold-up; fully trained by T6 6.4-6.5; never examined |
| [PER-PA-AGENT](#per-pa-agent) | 2 | 3 | 2 | 2 | 1 | **2.0** | A one-line FOC, but the corner e = 0 (0.5 pt) and the de/db T/F are the traps |
| [PER-AMENITY](#per-amenity) | 1 | 3 | 3 | 2 | 1 | **2.0** | Answer flips with whether the PC binds; T3 3.1 is a near-verbatim twin of R25 Q6 |
| [PER-SEL-QUAL](#per-sel-qual) | 2 | 3 | 2 | 2 | 1 | **2.0** | Bang-per-buck vs per-worker and option value; heavily trained, never examined |
| [PER-RECIP](#per-recip) | 1 | 2 | 3 | 2 | 1 | **1.8** | Trust-game threshold is one inequality; any exam item would be a short verbal |
| [PER-HC-EDU](#per-hc-edu) | 2 | 2 | 2 | 2 | 1 | **1.8** | PV study-or-not cutoff with taxes; trained by T6 6.3; never examined |
| [PER-PA-SETUP](#per-pa-setup) | 1 | 1 | 2 | 1 | 1 | **1.2** | Notation only (Y, U, Π, PC, backward induction) |

**Reading the table:**
- The top three (NONCLASS, TOURN, TEAM) are hard for different reasons. NONCLASS is hard because it changes every time. TOURN and TEAM are hard because they are undrilled and algebra-heavy, and both are lectured this October.
- PER-EMP and PER-INCOME are low on maths but high on D3. Students tend to underrate them, and they lose whole points to vague or name-dropping answers.
- The contract backbone (AGENT, PRINC, EFFDIST) is easy *on its own*. The difficulty sits in the twist, which is scored under NONCLASS.

---

## PER-NONCLASS
**Non-classical motivators: guilt, profit-care, intrinsic motivation, status, pride, crowding out** · D1 4 · D2 4 · D3 4 · D4 5 · D5 4 · **Composite 4.2** · Priority A (9.2%, in 4/4 F/R)

**Why it's hard**
- **The twist changes every exam (D4 = 5).** The variants so far are guilt −βq (M25 Q3, R25 Q4), profit-care +γ(PQ − a − bQ) (F24 3a), intrinsic +γe (R26 Q6), motivated public-sector workers with no bonus (R26 Q7), status μ(wh_A − wh_B) (R26 Q5) and pride P (F25 3a). F24 3a's FOC bκ − θe + γ(P − b)κ = 0 is easy to get wrong because the bonus enters twice: once as pay and once as a cost to the profit the worker cares about.
- **Scheme-punished traps.** The corner is worth 0.5 pt: e = 0 if b < β, and effort cannot be negative (M25 3a). R26 6b is a true/false item that needs e = (b + γ)/θ and then de/db = 1/θ; the intuitive answer "true" is wrong. R26 5c, the tax as a commitment device (100% marginal rate above w²/2, zero below), needs a model extension that no exercise trains.
- **Verbal channels.** R26 6d: "the bonus is also paid on output that motivation would produce anyway". R25 4d: two *distinct* channels (a cheaper PC, and more effort for a given contract), 1 pt each. R25 4a needs a one-sentence intuition ("the money gain exceeds the guilt cost").

**Typical point losses (grading schemes)**
- −0.5 for omitting the corner e = 0 when b < β (M25 3a).
- 0 for a bare result without profit → substitute → FOC → solve (R26 6c is 4 × 1 pt; R25 4c "just writing b = p … does not result in any point").
- R26 6a: −1 for not showing that the bq terms cancel in U + Π.
- R26 6d: −1 to −2 for "math in words" (restating the FOC) instead of the cost-of-paying-for-motivated-output channel.
- R25 4d: two versions of the same channel earn only 1 of 2.

**Crack it by**
1. Write every variant cold, timed, against the scheme: M25 3a-b → R25 4a-4d (guilt, with and without a base salary), F24 3a (profit-care), R26 6a-6d, R26 7a-7d, R26 5a-5c. Then make up a new twist yourself, for example guilt with a base salary and q = μe + K.
2. Redo the closest tutorial algebra: T1 Ex1.4 (free output k), T1 Ex1.5a-c (γe; the same as guilt with the sign flipped), T2 Ex2.2a-b (fixed salary plus joy of work = R26 7b).
3. Concepts for the 1-sentence interpretations: Kuhn 9.1-9.2 (pdf p. 124-134), crowding out for R26 8b, and Kuhn 10.7 eq. 10.1 (pdf p. 190) for the status term. Do DQ 9.1.

## PER-TOURN
**Tournaments** · D1 5 · D2 4 · D3 3 · D4 4 · D5 5 · **Composite 4.2** · Priority B (F25 Q3 = 10 of 60 pts; lecture 7 Oct)

**Why it's hard**
- **The longest derivation chain in Personnel (D1 = 5).** F25 Q3 runs: EU with p_i = ½ + π(e_i − e_j) → FOC π(Z + P) − θe = 0 → impose symmetry *after* the FOC (p = ½) → 2-period PC 2W + ½(Z + P) − ½θe² = 2V → W = V − ¼(Z + P) + ¼θ(π(Z + P)/θ)² → profit 2Re − Z − 4W → FOC in Z → **Z = R/π − P**. That is 8 graded points of algebra.
- **Easy-to-miss setup details.** Profit pays 4W (2 workers × 2 periods), not 2W. The direct prize cost −Z cancels against the +Z inside −4W, because the expected prize is clawed back through a lower W. What remains is the effort-cost term. π ends up in the *denominator* of the prize (a noisier contest needs a bigger prize). Our own `exam-inventory.md` mis-transcribed the result as "Z = R − P", which shows how easily it goes wrong.
- **F25 3c "two opposing effects of P"** (1 pt each, "no math in words"): pride makes winning worth more (more attractive) *and* induces more period-1 effort (higher effort cost, less attractive). There is no tutorial drill, and Kuhn's model has no pride term.

**Typical point losses (grading schemes)**
- 3a: 1 pt for expected utility, 1 pt for the FOC. Differentiating with the rival's effort not held fixed, or imposing p = ½ before differentiating, loses both.
- 3b: 1 pt each for p_i = p_j = ½, the PC = 2V, and substituting e.
- 3d: 1 pt each for profit, substitution and solving. Writing 2W, or forgetting the period-2 prize cost, breaks the chain.
- 3c: restating the W formula in words scores 0.

**Crack it by**
1. Kuhn 20.1-20.5 (pdf p. 364-373) by hand: p_i = 0.5 + αd(E_i − E_j) (eq. 20.8, p. 368) → E = αdS → efficient prize S = R → a from the PC. Then map Kuhn's notation onto F25's (α ↔ π, S ↔ Z).
2. Do F25 3a-3d cold, twice: once as asked, and once with P = 0 (check that you get Z = R/π) and with a lower π (the prize must rise).
3. After 7 Oct, do the new tournament set. Read the Results boxes of Kuhn 21.1 (sabotage, pdf p. 390-399) and 22.1 (uneven contests lower *both* efforts, pdf p. 411-414); these are the most likely verbal add-ons.

## PER-TEAM
**Teams, free riding, sharing rules** · D1 3 · D2 4 · D3 3 · D4 4 · D5 5 · **Composite 3.8** · Priority B (F24 Q2 = 5 of 26 pts; lecture 14 Oct)

**Why it's hard**
- **F24 2c setup trap.** Under the share e_a/(e_a + e_b), Arno's income is e_a/(e_a + e_b) · p(e_a + e_b) = **p·e_a**. Simplify first and the FOC is p = θe_a, so e_a = p/θ (efficient). If you differentiate the quotient directly, the algebra blows up.
- **"Describe the steps" items (F24 2d-2e, rule 10).** In 2e you must plug *Bea's* effort under each rule into *Arno's* utility, then compare. Leaving out the other partner's effort is the classic slip. No computation is wanted.
- **Variability.** Only one exam so far. Kuhn ch 24-27 offer new twists: group bonuses that break the budget (24.4), weakest link and complementarity (26), and the Groucho Marx rule (27.1). Any of them could become the October block.

**Typical point losses (grading schemes)**
- 2e: 0 if Bea's efforts under both rules are not substituted into Arno's U (the scheme lists all four substitutions).
- 2d: computing instead of describing wastes time, and stopping at "compare welfare" without "compare induced vs efficient efforts" is incomplete.
- 2a-2c are 1 pt each, all or nothing, so one algebra slip costs the point.

**Crack it by**
1. Kuhn 24.1-24.3 (pdf p. 452-462): Results 24.2-24.4 (E* = 1, E = 1/N, unequal shares). Do DQ 24.3 (lake road, ln Q, gives N·B′ = 1 vs B′ = 1).
2. Do F24 2a-2e cold, then a self-made variant: N partners with shares α_i; which rule restores efficiency and why it is not budget-balanced.
3. Link it to Public T1 (Nash vs Samuelson public-good provision): the same 1/N logic. After 14 Oct, do the teams set and skim the Results boxes of Kuhn 26.1-26.4 (pdf p. 500-532) and 27.1 (pdf p. 547-555).

## PER-MONOPSONY
**Monopsony, markdown, non-profit N(W), volunteers** · D1 3 · D2 3 · D3 4 · D4 3 · D5 4 · **Composite 3.4** · Priority A (7.5%, in 3/4 F/R)

**Why it's hard**
- **The non-profit version is lecture-only (D5 = 4).** F24 1c: maximise N(w)Q + Z subject to B = wN(w) + pZ. Substitute Z = (B − wN)/p, which gives the FOC N′Q − (1/p)[N + wN′] = 0. Neither T6 6.2 nor Kuhn has the budget or the 1/p term.
- **Interpretation is graded per term in economic words (D3 = 4).** F25 1b: MC = N (every *current* worker gets the €1 raise); MB = N′·(Q − W) (extra hires, each earning a margin Q − W). F24 1c: the second term means "a bigger wage bill leaves less budget for market purchases". Saying "derivative of the wage bill" is math in words.
- **Counter-intuitive limits.** Under perfect competition N′ = **+∞**, not 0 (F25 1a: a small wage cut and every worker quits). Monopsony power iff N′ < ∞ (R26 9b). N(0) > 0 means volunteers (F24 1b).

**Typical point losses (grading schemes)**
- F25 1a: 1 pt for the value (+∞) and 1 pt for the reason; giving the value alone scores half.
- F25 1b / F24 1c: 1 pt per term, and only if it is explained as an economic margin.
- R26 9a: 1 pt for writing the total cost WN(W) first, 1 pt for the derivative N + WN′. Jumping straight to N loses the WN′ term.
- F25 1c: profit per worker (Q − W = 2000) is a separate point; it is easy to stop at W = 4000.

**Crack it by**
1. T6 Ex6.2a-b (derive W = ηQ/(1+η) by multiplying the FOC by W/N). Mind the answer-key typo at η = 1 (20 − 10).
2. Do F24 1a-1c and R26 9a-9b cold for the non-profit model, then F25 1a-1c for the for-profit one. Write each FOC-term interpretation in ≤ 2 sentences.
3. Kuhn 17.1 (pdf p. 303-309), especially footnote 3 on p. 304, which has the exact MB/MC wording the scheme rewards.

## PER-BIAS
**Discrimination / avoiding bias** · D1 1 · D2 3 · D3 4 · D4 4 · D5 5 · **Composite 3.4** · Priority C (0/4; lecture 9 Oct)

**Why it's hard**
- **No precedent.** There is no past question, set or answer key, so whatever appears will be novel (D4 = 4, D5 = 5).
- **Counter-intuitive results.** Employer-taste discrimination lowers profits and competition erodes it, but customer or co-worker tastes and statistical discrimination can be profitable and persist (Kuhn Result 16.3). Some policies also backfire ("ban the box", pdf p. 293-294).
- **Likely verbal or design form.** A likely item is an audit or correspondence study written in the PER-EMP T12 style (randomise names on otherwise identical CVs, compare callback rates). That falls under the same sentence-cap rules.

**Typical point losses** (inferred from the T12 and verbal rules, since there is no scheme): naming "statistical discrimination" without the mechanism (group average used as a signal of unobserved productivity); a design without random assignment or without a stated outcome.

**Crack it by**
1. Kuhn 16.2-16.3 (pdf p. 283-290): classify Result 16.2's four sources and say for each whether it survives competition.
2. Write a 3-sentence audit-study design using the R26 8c template. Do DQ 16.1 (statistical-discrimination arithmetic) if lecture 9 has a model.
3. Add the new set's IDs here once it is released after 9 Oct. D5 would then drop.

## PER-EMP
**Empirical methods: causality, RCTs, incentive vs sorting** · D1 1 · D2 3 · D3 5 · D4 3 · D5 4 · **Composite 3.2** · Priority A (6.3%, in 4/4 F/R)

**Why it's hard**
- **All points are verbal under tight caps (D3 = 5).** F25 5a is one sentence; R26 8b has a 2-sentence cap with "you can use technical terms, but you need to explain them"; R26 8c has a 3-sentence cap.
- **Easy-to-misread setups.** R26 8c asks you to randomise *among the 400 stores that use performance pay*, not all 900, and to *abandon* the pay in the treatment group (the reverse of the usual design). F24 3b adds a heterogeneity test (a smaller effect for high-γ workers), so a plain RCT gets only 1 of 2.
- **R26 8b is counter-intuitive:** performance-pay stores do *worse*. The answers are reverse causality (failing stores adopt performance pay) or crowding out of intrinsic motivation. No exercise asks for a design or a requirements list (F25 5b), and the DQ 7.x answers have no key.

**Typical point losses (grading schemes)**
- R26 8c: the wrong population (900 stores) loses the randomisation point.
- F24 3b: no heterogeneity comparison by γ loses 1 of 2. Measuring γ is optional.
- R25 7a / F25 5a: "correlation is not causation" with no concrete confounder or "may differ in other respects" is thin. Give one concrete channel (booming economy, competitor bankrupt).
- R26 8a: two versions of the incentive effect = 1 of 2. You need incentive (moral hazard) + sorting (adverse selection).

**Crack it by**
1. Kuhn 7.1-7.2 (pdf p. 98-107) for the T/C/randomisation language and confounders; Kuhn 8.2 (pdf p. 113-117, Result 8.3: 44% split into incentive vs sorting).
2. Write all seven exam items to the sentence cap and grade them against the scheme: F24 3b, R25 7a-7b, F25 5a-5b, R26 8a-8c.
3. Do DQ 7.1-7.4 (Set 3), DQ 8.3 (not on any set) and DQ 9.4 + "how to fix" (Set 4). Memorise the five requirements: randomisation, scale, duration, no contamination, reliable measurement.

## PER-INCOME
**Income effects, labour supply** · D1 2 · D2 3 · D3 5 · D4 3 · D5 3 · **Composite 3.2** · Priority B (4.1%, R25 + F25)

**Why it's hard**
- **The trap is the verbal, not the FOC.** F25 4b: "just name-dropping yields no points". You must say that an hour pays more (more hours) *and* that the worker is richer for given hours, so V′ falls (fewer hours). Each is 1 pt.
- **Must argue through the FOC term (R25 5b).** A higher base salary a lowers V′(a + be), so the marginal benefit bV′ falls and effort falls. That is a pure income effect, and it is counter-intuitive because a does not enter the linear-utility FOC at all (Kuhn Result 2.1).
- **Formulation changes.** The effort version bV′(a + be) − δ = 0 (R25) and the hours version W·V′(WH) − X′(24 − H) = 0 (F25) differ, and only the effort version is drilled (T4 4.5c).

**Typical point losses (grading schemes)**
- F25 4b: 0 for "substitution effect and income effect, so ambiguous" with no mechanism.
- F25 4a: each FOC term needs its own interpretation (income gain vs lost leisure), 1 pt each.
- R25 5c: one sentence on basic needs; "diminishing marginal utility" alone is a name.

**Crack it by**
1. T4 Ex4.5a-c, then R25 5a-5c and F25 4a-4b cold, writing each verbal answer in exactly 2 sentences.
2. Kuhn 11.1-11.2 (pdf p. 201-206) and 11.4 (pdf p. 209-211) for the concave H(Y) model.
3. DQ 11.1 (not on any set): $5,000/hr for a day vs for life, which separates the temporary (substitution) effect from the permanent (income) effect.

## PER-PA-RISK
**Uncertainty, risk aversion, multitasking** · D1 3 · D2 4 · D3 3 · D4 3 · D5 3 · **Composite 3.2** · Priority C (0/4)

**Why it's hard**
- T2 Ex2.5a has the 2×2 FOC system with interacting cost ½θ(g + h)², giving g = (2γ − b)/3θ and h = (2b − γ)/3θ. That is the heaviest algebra in the tutorials.
- Counter-intuitive: a bonus on task 2 *lowers* task-1 effort (T2 2.5b). Risk aversion means b < 1 (insurance vs incentives), and no exercise trains that.
- No exam history, so the form is unknown.

**Typical point losses:** no exam scheme exists. In T2 2.5b the answer key wants the marginal-cost channel in ≤ 3 sentences.

**Crack it by:** T2 Ex2.5a-d; Kuhn 5.2-5.3 (pdf p. 63-67) for Results 5.1-5.2 in one sentence each; Kuhn 5.5 (pdf p. 68-77) Results boxes only.

## PER-SEL-SCREEN
**Self-selection, screening, unravelling, certificates** · D1 3 · D2 4 · D3 2 · D4 3 · D5 1 · **Composite 2.6** · Priority A (4.5%, in 3/4 F/R)

**Why it's hard**
- **Setups that are easy to misread.** F24 Q4: the unskilled PC must include the detected-and-fired branch, W1 + (1 − p)W2 + pW_u < 2W_u. The skilled PC is W1 + W2 ≥ 2W_s (no detection risk). F25 2c: the uncertified wage is the mean of the *uncertified pool*, (q* + 20)/2, not the overall mean 50.
- **The unravelling logic (F25 2b)** has to be iterated (50 → 35 → 27.5 → …) and concluded: everyone certifies and earns their productivity. Unravelling and certificates are not in Kuhn.
- **The format changes each time:** probation (F24), certificates (F25), self-selection of motivated workers (R26 7d). But Set 5 has a twin for each.

**Typical point losses (grading schemes)**
- F25 2c: 1 pt each for the certified income q − 20, the uncertified mean (q* + 20)/2, and solving q* = 60 plus the wage 40.
- F25 2a: the zero-profit logic is a separate point from "50".
- F24 Q4 (1 pt, all or nothing): missing pW_u, or swapping the strict and weak inequalities.

**Crack it by**
1. T5 Ex5.7 (= F24 Q4), T5 Ex5.8a-c (= F25 2a-2c), T5 Ex5.5a-b, T5 Ex5.6b-c.
2. Do F24 Q4, F25 2a-2c and R26 7d cold. Then vary the certificate cost (20 → 10) and the productivity range.
3. Kuhn 15.4 (pdf p. 273-277, Result 15.3 backloaded wages) for the F24 Q4 model.

## PER-EFFWAGE
**Efficiency wages** · D1 2 · D2 3 · D3 3 · D4 2 · D5 3 · **Composite 2.6** · Priority C (0/4)

**Why it's hard:** no dedicated exercise (Set 6's title promises it, but the set does not deliver). The no-shirking logic (pay above the outside option so that getting fired costs a rent) is counter-intuitive. The closest drill is T3 3.2 (w > c/π).

**Typical point losses:** no scheme. Expect a verbal "why pay above market" item; "to motivate" without the lost-rent-if-caught mechanism would score 0 under rule 3.

**Crack it by:** T3 Ex3.2a-c; Kuhn 18.1 (pdf p. 317-320, Result 18.1); skim 18.3 (pdf p. 324-335) deferred pay.

## PER-PA-PRINC
**Principal's problem: optimal b, PC, base salary** · D1 3 · D2 3 · D3 3 · D4 2 · D5 1 · **Composite 2.4** · Priority A (3.1% + 70% of midterm points)

**Why it's hard**
- **Fixed recipe, strict step scoring.** Profit (1) → substitute e(b) and a(b) (1) → FOC (1) → solve (1). R25 4c: "just writing b = p without a derivation does not result in any point".
- **Two regimes that must not be mixed up.** Without a base salary b = (p ± shift)/2 (M23 P/2 − K, M25 (p + β)/2, R26 (p − γ)/2). With a base salary b = p, because a extracts the rent. The R25 4c substitution with guilt (p − β)μ(μ/θ)(b − β) − V − ½θ(…)² is long.
- **Verbals:** "why b falls in K/γ" (M23 3b, R26 6d) needs "the bonus is also paid on output it did not cause".

**Typical point losses:** a bare b = p scores 0 (R25 4c). M23 3a needs *sentences explaining the steps*. A correct method with an arithmetic slip keeps full credit (M23 3c), so always write the method.

**Crack it by:** T1 Ex1.2b-c, 1.4, 1.5c; T2 Ex2.1a, 2.2a-b, 2.4a; M23 3a-3c, M25 3b, R25 4b-4c, R26 6c-6d, 7b cold. Kuhn 3.1-3.2 (pdf p. 40-48, Results 3.1-3.2). DQ 3.2.

## PER-PA-EFFDIST
**Efficiency vs distribution, rent extraction** · D1 2 · D2 3 · D3 4 · D4 2 · D5 1 · **Composite 2.4** · Priority A (1.6%, the verbal add-on to T10)

**Why it's hard**
- The algebra is trivial (maximise U + Π; a and bq cancel; R26 6a), but the cancellation itself is a graded point.
- M23 3d asks why adding a base salary *raises* the optimal b: the bonus paid on K is clawed back through a lower a (rent extraction). This is counter-intuitive, verbal-only, and easy to answer as math in words.
- R25 4d needs two distinct channels (PC cost and effort), 1 pt each.

**Typical point losses:** R26 6a, −1 for not showing the cancellation; R25 4d, two phrasings of one channel = 1 of 2; M23 3d, restating the FOC instead of the claw-back mechanism.

**Crack it by:** T2 Ex2.1a, 2.3, 2.4a-b (max profit s.t. PC vs max utility s.t. Π ≥ 0); M23 3d, R25 4c-4d, R26 6a cold; Kuhn 4.1 (pdf p. 54-56, Result 4.1).

## PER-PA-MONITOR
**Noisy measures, monitoring, no-shirking constraints** · D1 3 · D2 3 · D3 2 · D4 2 · D5 1 · **Composite 2.2** · Priority C (0/4)

**Why it's hard:** the young worker's IC includes the loss of the future old-age rent (w_y > c_y/π − (w_o − c_o − v_o), T3 3.2b). The result that the young wage is *lower* because more is at stake is counter-intuitive. The constraint-writing skill transfers to F24 Q4.

**Typical point losses:** no scheme. In T3 3.2, forgetting the PC alongside the IC, or picking the wrong binding constraint.

**Crack it by:** T3 Ex3.2a-e; Kuhn 6.1-6.3 (pdf p. 89-93, Result 6.1).

## PER-TRAIN
**General vs specific training, hold-up** · D1 3 · D2 3 · D3 2 · D4 2 · D5 1 · **Composite 2.2** · Priority C (0/4)

**Why it's hard:** PV sums with an early-retirement risk (T6 6.4b; the `.md` formulas are garbled, so use the PDF). The Nash split of the period-2 surplus (95) and the anticipated hold-up (firm profit −5, so no training) need backward induction. Who pays for general vs specific training is a classic verbal.

**Typical point losses:** no scheme. Likely slips are forgetting the 3 months of forgone output in the cost (75, not 50) and not anticipating hold-up.

**Crack it by:** T6 Ex6.4a-c (from the PDF), T6 Ex6.5a-e; Kuhn 19.3-19.4 (pdf p. 345-356, Results 19.3-19.7).

## PER-PA-AGENT
**Agent's effort FOC** · D1 2 · D2 3 · D3 2 · D4 2 · D5 1 · **Composite 2.0** · Priority A (2.5%, step 1 of every T10 block)

**Why it's hard:** the FOC is one line, but the traps are scheme-punished. The corner e = 0 is worth 0.5 (M25 3a; effort cannot be negative). The R26 6b T/F needs de/db = 1/θ, so the statement is false. R26 8a needs the incentive effect stated as a mechanism. The twisted versions are scored under NONCLASS.

**Typical point losses:** a missing corner (−0.5); a T/F answered without the derivative; M23 3a without sentences explaining the steps.

**Crack it by:** T1 Ex1.2a, 1.5a; T4 Ex4.1a; DQ 2.2-2.3 (2.3 = linear cost → corner solution); Kuhn 2.1-2.2 (pdf p. 34-38, Result 2.1: e independent of a).

## PER-AMENITY
**Amenities, compensating differentials** · D1 1 · D2 3 · D3 3 · D4 2 · D5 1 · **Composite 2.0** · Priority B (R25 Q6, 6 pts)

**Why it's hard:** the answer flips with whether the PC binds. R25 6b: a high binding minimum wage leaves the PC slack, so the manager ignores V and bans. R25 6c: the wage sits at the PC, so the firm internalises V through the wage and allows iff V > X. Efficiency (6a) ignores the wage transfer. There is no maths, but the reasoning carries 2 pts per part.

**Typical point losses:** R25 6b-6c, not stating the decision rule (ban, or allow iff V > X) and the reason (the wage adjusts by V); R25 6a, bringing in third parties or transfers.

**Crack it by:** T3 Ex3.1a-e (near-verbatim R25 Q6, plus the monitoring cost C and the penalty F < V extensions); T6 Ex6.1a-d (numerical compensating differential); Kuhn ch 17 box (pdf p. 308-310).

## PER-SEL-QUAL
**Choosing qualifications, risky vs safe workers** · D1 2 · D2 3 · D3 2 · D4 2 · D5 1 · **Composite 2.0** · Priority C (0/4)

**Why it's hard:** the ranking criterion changes with the binding constraint: profit per worker (one slot), per unit of space, or per euro of output when demand is capped (T5 5.2a-c). The option value of a risky hire (T5 5.4b) needs backward induction.

**Typical point losses:** no scheme. A likely slip is using the wrong denominator for bang-per-buck.

**Crack it by:** T5 Ex5.1-5.4; Kuhn 12.1 (pdf p. 218-225) and 13.1 (pdf p. 233-238), Results only.

## PER-RECIP
**Reciprocity, gift exchange, trust** · D1 1 · D2 2 · D3 3 · D4 2 · D5 1 · **Composite 1.8** · Priority C (0/4)

**Why it's hard:** the maths is a single inequality (10 − X + 3αX ≥ 10, so α ≥ 1/3, T4 4.4a). Any exam item would most likely be a 2-sentence verbal (intention-based reciprocity, the hidden cost of control), with the usual name-dropping risk.

**Typical point losses:** no scheme. Expect a loss for "reciprocity" named without the mechanism.

**Crack it by:** T4 Ex4.4a-b; Kuhn 10.1-10.2 (pdf p. 167-170), 10.6 (pdf p. 183-188) Results only.

## PER-HC-EDU
**Schooling investment** · D1 2 · D2 2 · D3 2 · D4 2 · D5 1 · **Composite 1.8** · Priority C (0/4)

**Why it's hard:** a PV cutoff a > (1+r)t/[p − (1+r)w] with comparative statics. A tax cuts the return (τpa) more than the forgone income (τwa), and deductible tuition makes τ drop out (T6 6.3b-c). The signalling side is examined under PER-SEL-SCREEN.

**Typical point losses:** no scheme. A likely slip is forgetting forgone income as a cost.

**Crack it by:** T6 Ex6.3a-c; Kuhn 19.1 (pdf p. 339-343).

## PER-PA-SETUP
**Structure of the P-A problem** · D1 1 · D2 1 · D3 2 · D4 1 · D5 1 · **Composite 1.2** · Priority C (notation for every T10 block)

**Why it's hard:** it isn't. Write Y = a + bQ, U = Y − V(E), Π = PQ − Y, the PC U ≥ U_alt and the backward-induction order in under a minute. T2 2.5e has a one-sentence "why models" item.

**Typical point losses:** none directly. A wrong Π (for example, forgetting −a or −bQ) propagates into every T10 point.

**Crack it by:** Kuhn 1.3-1.7 (pdf p. 27-32), skim once; DQ 1.2 and 1.4 (a negative base salary is admissible).
