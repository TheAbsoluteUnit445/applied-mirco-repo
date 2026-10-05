# Public Economics: difficulty scoring per topic

Built 5 Oct 2026 for the final on Fri 23 Oct 2026. Scored from the actual grading schemes (`Past exams/*/(with solutions).md`, checked for F24 Q5-8, R25 Q1-3, F25 Q6-10 and R26 Q1-4), [exams-tagged.md](exams-tagged.md) (§1 bank, §4 answering rules), [exercises-public.md](exercises-public.md), [GAPS-PUBLIC.md](../GAPS-PUBLIC.md) and the topic pages in [`../topics/`](../topics/). Exam codes, template numbers (T1-T9) and rule numbers (rule 1-15) are the ones in exams-tagged.md.

## Rubric (1 = easy, 5 = hard)
- **D1 Math load**: derivation steps, algebra/calculus complexity (FOC systems, corners, integrals, parameters instead of numbers).
- **D2 Conceptual trickiness**: counter-intuitive results, traps the grading scheme punishes, setups that are easy to misread.
- **D3 Verbal precision**: share of the points that depend on a precise 1-4 sentence mechanism, where naming the term scores 0.
- **D4 Variability**: how much the question changes between exams (fixed recipe = 1, new twist every time = 5). For topics that have never been examined, D4 = 3 (format unknown).
- **D5 Material gap**: COVERED = 1, PARTIAL = 3, GAP = 5 (verdicts from GAPS-PUBLIC.md; lecture/book-only = 5).
- **Composite** = round(mean of D1-D5, 1).

**Composite is not priority.** It says how hard a topic is *if it comes up*. Read it together with the exam weight. The topics that are both hard and likely are POSNORM, REDIST-PROG, RAMSEY, EXT-INSTR, SWF, COASE and WELF (all Priority A or B with recent exam appearances). AI-SOCINS and TAX-OPTINC score high only because nothing trains them; they have never been examined (weight 0%).

## Summary table (sorted by composite, ties by exam weight)

| ID | D1 | D2 | D3 | D4 | D5 | Composite | Why (one line) |
|---|---|---|---|---|---|---|---|
| [PUB-POSNORM](#pub-posnorm) | 1 | 5 | 5 | 3 | 5 | **3.8** | A-prio. Pure 1-2 sentence verbal, the most common 0 (an efficiency argument in a normative question), and no exercise drills it |
| [PUB-REDIST-PROG](#pub-redist-prog) | 3 | 4 | 4 | 4 | 3 | **3.6** | B-prio, 10 pts in R26. Graph with numeric kinks, tangency argument without numbers, EV steps, job search EU cutoff (no exercise) |
| [PUB-POL-VOTE](#pub-pol-vote) | 2 | 3 | 3 | 4 | 5 | **3.4** | B-prio. W7 not yet lectured; the two exam uses differ completely (median voter + SOC vs positive explanation) |
| [PUB-POL-GOVFAIL](#pub-pol-govfail) | 1 | 3 | 4 | 4 | 5 | **3.4** | B-prio (0.3%). Verbal "positive explanation" that must stay positive and be applied to the case; book/lecture only |
| [PUB-TAX-RAMSEY](#pub-tax-ramsey) | 2 | 3 | 3 | 3 | 5 | **3.2** | A-prio, examined twice in a row. Elasticity at the pre-tax point, ratios not just ordering, 4-sentence EB chain; no sheet yet |
| [PUB-EXT-INSTR](#pub-ext-instr) | 3 | 3 | 3 | 2 | 5 | **3.2** | A-prio (both Oct finals). Ban vs laissez-faire with a parameter: CS + PS − total EC, inequality direction; no drill anywhere |
| [PUB-SWF](#pub-swf) | 3 | 4 | 3 | 3 | 3 | **3.2** | A-prio. EB belongs in the cost (F24 7b), net losers flip the inequality (R25 3e: α < 2), Lagrange with two parameters |
| [PUB-EXT-COASE](#pub-ext-coase) | 2 | 4 | 4 | 3 | 3 | **3.2** | A-prio. Pay only for the *increase* (F24 5c), chain must end at the right-holder's profit (M25 2b), "listing" = 0 (R26 1d) |
| [PUB-AI-SOCINS](#pub-ai-socins) | 2 | 3 | 3 | 3 | 5 | **3.2** | C-prio, never examined. Only book DQs; high score reflects zero training, not exam risk |
| [PUB-TAX-OPTINC](#pub-tax-optinc) | 2 | 3 | 3 | 3 | 5 | **3.2** | C-prio, never examined. Edgeworth model is not even on the W6 slides; book-only |
| [PUB-WELF](#pub-welf) | 2 | 3 | 3 | 4 | 3 | **3.0** | A-prio. Three different asks in three exams (MRS per person, Pareto net of tax, 2nd welfare theorem verbal) |
| [PUB-PG-CLASS](#pub-pg-class) | 1 | 4 | 4 | 3 | 3 | **3.0** | B-prio. Two verbal traps: arguing rivalry via prices = 0 (M23 1a), listing both traits = 0 (R26 1d) |
| [PUB-PG-NASH](#pub-pg-nash) | 3 | 5 | 3 | 2 | 1 | **2.8** | A-prio. The "consumes vs provides" trap (R26 1b: "Ben consumes 0" = half, "Ben buys b−c" = 0); both BRs *and* solve |
| [PUB-EXT-COMMONS](#pub-ext-commons) | 3 | 4 | 3 | 3 | 1 | **2.8** | B-prio, 10-pt block. Minimise total (not average) time, induced demand gives 0 saving, tax ≡ subsidy; verbatim tutorial copy |
| [PUB-TAX-MCPF](#pub-tax-mcpf) | 2 | 3 | 2 | 3 | 3 | **2.6** | B-prio. Hidden inside F24 7b (cost = revenue + EB); MCPF concept is lecture-only |
| [PUB-TAX-PROG](#pub-tax-prog) | 1 | 3 | 3 | 3 | 3 | **2.6** | B-prio, 1-pt one-liner. Use the *average* rate; Ramsey taxes necessities so it is regressive |
| [PUB-EXT-PIGOU](#pub-ext-pigou) | 3 | 3 | 3 | 2 | 1 | **2.4** | A-prio. Tax = MEC at Q* with a parameter (180α/(3+α)), revenue in the welfare sum (R26 3d), "others + not taken into account" |
| [PUB-AI-ADVSEL](#pub-ai-advsel) | 2 | 3 | 3 | 3 | 1 | **2.4** | B-prio. State the definition (1 of 2 pts), lemons-only price range, direction of the λ effect |
| [PUB-REDIST-THEORY](#pub-redist-theory) | 3 | 3 | 3 | 2 | 1 | **2.4** | B-prio. √-utility Lagrange with w and β; leaky bucket answer is "less" plus the trade-off |
| [PUB-TAX-EB](#pub-tax-eb) | 3 | 3 | 2 | 2 | 1 | **2.2** | A-prio, in all 4 F/R exams. ½tΔQ is easy, but R26 adds an externality (EB ≠ welfare loss) and the EV method |
| [PUB-TAX-INC](#pub-tax-inc) | 2 | 2 | 4 | 1 | 1 | **2.0** | A-prio, highest weight. Fixed recipe (always 2/3), points lost on the verbal "alternatives → substitute → burden" chain |
| [PUB-CBA](#pub-cba) | 2 | 4 | 1 | 2 | 1 | **2.0** | B-prio. Easy arithmetic with two traps: EB in the cost, and who the net losers are |
| [PUB-EDU](#pub-edu) | 2 | 2 | 2 | 3 | 1 | **2.0** | C-prio, never examined. Technique (subsidy = MEB at q*) is examined under PIGOU |
| [PUB-AI-MORAL](#pub-ai-moral) | 2 | 2 | 2 | 3 | 1 | **2.0** | C-prio, never examined. EU-with-√Y technique reappears in R26 4a |
| [PUB-PG-SAM](#pub-pg-sam) | 2 | 2 | 1 | 1 | 1 | **1.4** | A-prio. ΣMU = MC (or ΣMRS = MRT) and solve; near-verbatim recycling (M25 1a → R26 1a) |
| [PUB-EXT-GAME](#pub-ext-game) | 1 | 2 | 2 | 1 | 1 | **1.4** | C-prio, midterm only. 2×2 dominant strategy vs max-sum cell |

---

## Per-topic detail

### PUB-POSNORM
**D1 1 · D2 5 · D3 5 · D4 3 · D5 5 → 3.8** · Priority A, 0.9% per exam (M25 2c, F25 8a-8b, R26 4c)
- **Why it's hard**
  - The scheme gives 0 to any efficiency argument once efficiency is reached or the question says "normative": M25 2c ("correct market failure" = wrong), F25 8a ("reduction of distortionary taxation" = 0 pts), R26 4c ("efficiency argument = 0"). Students instinctively reach for efficiency.
  - F25 8a-8b ask for normative *and* positive explanations of the same policy back to back, and you must keep them apart: normative = SWF weights/distribution, positive = voting, minorities, corruption.
  - It is 100% verbal under a 1-2 sentence cap, and every context is new (Coase, resource extraction, job search mandate).
- **Typical point losses**: an efficiency or revenue argument (0 of 2 in F25 8a); a positive mechanism given for a normative question or vice versa; a generic definition without linking it to the case (who has the low weight / who is outvoted).
- **Crack it by**
  1. Read R&G 3.4-3.5, pdf p. 104-109, and Lecture 1 slides 2-5, 14-15. Write a two-column cheat sheet: normative = {SWF weights, MU of income, ethics/paternalism}, positive = {median voter/majority, rent-seeking, corruption, bureaucrats}.
  2. Write model answers to M25 2c, F25 8a, F25 8b and R26 4c within the sentence caps, then compare word by word with the schemes (F25 solutions p. 15, R26 p. 10).
  3. For every Coase or Pigou exercise you redo (Ex 2.3d, 2.1c), add the line "why intervene anyway? → distribution".

### PUB-REDIST-PROG
**D1 3 · D2 4 · D3 4 · D4 4 · D5 3 → 3.6** · Priority B, 3.8% per exam (R26 Q2 + Q4, 10 pts)
- **Why it's hard**
  - R26 2a: the points go to the numeric endpoints and kinks ((0, 4000), (200, 600), (175, 1100), (115, 1700)). You must compute the disregard, phase-out (effective wage 10) and break-even points correctly under time pressure.
  - R26 2b: "calculations are neither necessary nor possible". You must argue that the IC tangent at the old point (slope 20) cuts the new, flatter phase-out segment (slope 10), so Bert works *less*. Many students try to compute or just assert "income effect".
  - R26 4a: EU(search) = 0.8·√(2500α) + 0.2·√225 − 8 vs √225, solve α ≥ 0.25. 4b is counter-intuitive: a search mandate can *reduce* efficiency (people search whose cost exceeds the expected gain). No exercise trains the search block.
- **Typical point losses**: missing or wrong kink labels (1 of 3); arguing 2b by calculation or by naming effects instead of slope comparison; R26 2c "naming terms is not enough" (grant received → utility → EV → loss = grant − EV, 0.5 pt each); 4c with an efficiency argument (0).
- **Crack it by**
  1. Redo Ex 4.3a-f cold (the twin of R26 Q2), then do Ex 5.3 (tangency) and Ex 5.2d (EV − revenue), both still open.
  2. Do R26 Q2 and Q4 timed against the scheme (R26 solutions p. 4 and p. 10), then DQ 13.1 (kinked BC numerics) and DQ 13.6.
  3. Read R&G 13.3, pdf p. 419-430 (incl. work requirements p. 428-429), and R&G 13.7, pdf p. 436-440, for the job-search logic.

### PUB-POL-VOTE
**D1 2 · D2 3 · D3 3 · D4 4 · D5 5 → 3.4** · Priority B, 2.2% per exam (F24 8a-8b, F25 8b)
- **Why it's hard**
  - F24 8a gives 0.5 pt for the FOC and 0.5 pt for the SOC; single-peakedness needs the SOC (U'' = −5/m² < 0), not just a peak.
  - F24 8b: the median *peak* wins pairwise voting, not the average peak. You must order the three groups' peaks.
  - The two exam uses have nothing in common, and W7 (13 Oct) may add cycles, agenda setting, logrolling or Arrow, which have never been asked.
- **Typical point losses**: no SOC (0.5 lost); picking the mean instead of the median; in F25 8b giving a normative reason.
- **Crack it by**
  1. Read R&G 6.1 Direct Democracy, pdf p. 192-204 (cycling Table 6.2, single vs double peaks p. 196-198, median voter p. 198-199, logrolling, Arrow).
  2. Do F24 Q8 (F24 solutions p. 13), then DQ 6.1 and DQ 6.10 (pairwise votes, check single-peakedness, agenda setter).
  3. Do the W7 sheet as soon as it is released after the 13 Oct lecture.

### PUB-POL-GOVFAIL
**D1 1 · D2 3 · D3 4 · D4 4 · D5 5 → 3.4** · Priority B, 0.3% per exam (F25 8b)
- **Why it's hard**
  - F25 8b wants a *positive* mechanism (majority outvotes the North; corruption) in at most 2 sentences. Normative or efficiency content scores 0.
  - Only one appearance, so the next one may be numerical: rent-seeking (Fig 6.4: DWL triangle plus the lobbying rectangle as waste, DQ 6.9).
  - Nothing on the sheets trains it; Ex 1.3c-d is only a loose match.
- **Typical point losses**: naming "government failure" without a mechanism; not applying the mechanism to the case; drifting into "the government cares about the poor" (normative).
- **Crack it by**
  1. Read R&G 6.2 Representative Democracy, pdf p. 204-215, especially rent-seeking p. 211-214.
  2. Do DQ 6.9 (milk cartel: rents, maximum lobbying, DWL with and without rent-seeking).
  3. Write F25 8b in 2 sentences and compare with the scheme (F25 solutions p. 15); memorise the 6-item list on the topic page.

### PUB-TAX-RAMSEY
**D1 2 · D2 3 · D3 3 · D4 3 · D5 5 → 3.2** · Priority A, 3.2% per exam (R25 3c-3d, F25 10a-10b)
- **Why it's hard**
  - R25 3c: you must compute ε_X = |dQ/dP·P/Q| at the *untaxed* equilibrium (5/7) yourself before applying the rule. With perfectly elastic supply the price is the MC.
  - F25 10a wants the *relations* t_R = t_M/3 = t_P/9. Only ordering the rates gets 1 of 2.
  - The direction is easy to flip: the *less* elastic good gets the *higher* rate. The verbal part (R25 3d, ≤ 4 sentences) needs substitutes → large quantity response → large EB per euro.
- **Typical point losses**: ordering instead of ratios (F25 10a, −1); elasticity at the wrong point; R25 3d stated as "because of the inverse elasticity rule" without the mechanism; missing the regressivity follow-up (F25 10b).
- **Crack it by**
  1. Read R&G 16.1, pdf p. 530-538 (Ramsey rule p. 532-536, eq 16.9 inverse elasticity, equity p. 536-537) with Lecture 6 slides 4-23.
  2. Do R25 3c-3d and F25 10a-10b against the schemes (R25 solutions p. 6, F25 p. 18), then DQ 16.1 and DQ 16.8.
  3. Do the W6 sheet as soon as it appears; redo Ex 5.1a for the point-elasticity step.

### PUB-EXT-INSTR
**D1 3 · D2 3 · D3 3 · D4 2 · D5 5 → 3.2** · Priority A, 3.2% per exam (F24 6a-6b, F25 9d)
- **Why it's hard**
  - Ban vs laissez-faire with a parameter: market Q = 60, then CS 3600 + PS 1800 − EC 1800α ≤ 0, so α ≥ 3 (F25 9d). EC is the *area* under MEC = αQ, not αQ·Q.
  - F25 9d gives 1 pt for just saying "a ban means zero CS, PS and EC", which students skip. Watch the direction (when is the ban *better* vs *worse*).
  - F24 6b: "higher β → higher quantity → more value" = 0. You must say "higher *consumer surplus*".
- **Typical point losses**: forgetting one of the three components; using marginal instead of total external cost; flipped inequality; missing the "consumer surplus" phrase.
- **Crack it by**
  1. Read R&G 5.2 Graphical Analysis, pdf p. 145-152 (Fig 5.2 surplus/damage areas).
  2. Do F24 6a-6b and F25 9d against the schemes (F24 solutions p. 9, F25 p. 16-17). They *are* the drill.
  3. Make a self-made variant on Ex 2.2 (MPB = 10, MPC = 2Q, MD = ½Q): ban vs laissez-faire; then Ex 2.5c for the surplus accounting.

### PUB-SWF
**D1 3 · D2 4 · D3 3 · D4 3 · D5 3 → 3.2** · Priority A, 2.7% per exam (F24 7b, R25 3e, F25 6a-6b, F25 8a, M25 2c)
- **Why it's hard**
  - F24 7b: the rich bear 20000 *plus* EB 5000. "Forgetting EB in cost is the trap", giving the wrong α threshold (correct: α > 1.25).
  - R25 3e flips the intuition: the poor are *net losers* (benefit 15 < tax 20), so the project passes only for α < 2. A higher weight on the poor works *against* it.
  - F25 6a: Lagrange with w·√I_A + β·√I_B gives I_A = w²/(w²+β²)·Y; parameters only, no numbers. 6b must give the channel, not "w is in the numerator".
- **Typical point losses**: no EB in cost (−1); wrong inequality direction (R25 3e); bare result without FOC; 6b restating the formula; normative one-liners with efficiency content (F25 8a = 0).
- **Crack it by**
  1. Redo Ex 4.1a-b and Ex 4.4a-b (near-copies of F25 6a-6b), then do Ex 5.4a-e (EB in the cost; still open) and DQ 8.5 (break-even weight).
  2. Do F24 7b and R25 3e back to back (F24 solutions p. 11, R25 p. 6): list each group's net amount first, then weight.
  3. Read R&G 8.6, pdf p. 267-268, and R&G 3.3, pdf p. 99-104.

### PUB-EXT-COASE
**D1 2 · D2 4 · D3 4 · D4 3 · D5 3 → 3.2** · Priority A, 0.9% per exam but 4 of 6 papers (M23 2b, M25 2a-2b, F24 5c, R26 1d)
- **Why it's hard**
  - F24 5c: Dikra pays only for the *increase* from α/λ to the bilateral optimum (d²/λ). "Wrongly assuming Dikra pays for all Q" = 0.
  - M25 2b: the chain c↑ → q*↓ → bigger cut → bigger profit loss for A → bigger T must end at A's profit. "B willing to pay more" = 0, "q* lower" alone = 0.5.
  - R26 1d: you must pick *non-excludability* and explain enforcement/transaction costs. "Just lists both characteristics" = 0, and property rights are *not* necessarily violated (lighthouse). M23 2b: one condition only = 0.
- **Typical point losses**: paying for the whole Q; incomplete causal chain; listing instead of explaining; naming one Coase condition.
- **Crack it by**
  1. Redo Ex 2.3b-d and Ex 2.1b-c (transfer = right-holder's profit-loss triangle, reversed rights).
  2. Do DQ 5.7 all four parts with R&G 5.3, pdf p. 152-156: for each case name which condition fails and why.
  3. Write M25 2b and R26 1d answers within the caps and compare (M25 solutions p. 2, R26 p. 2).

### PUB-AI-SOCINS
**D1 2 · D2 3 · D3 3 · D4 3 · D5 5 → 3.2** · Priority C, never examined (0%)
- **Why it's hard** (if it appears)
  - No Additional Exercise; only book DQs 11.8, 10.6, 11.3 with answers in the W3/W4 sheets.
  - The saving crowd-out effect (two-period model) and annuity adverse selection have ambiguous or counter-intuitive signs.
- **Typical point losses**: none on record. Expect a verbal add-on to a lemons question ("why mandate insurance?").
- **Crack it by**
  1. Read the sheet answers to DQ 11.8 (W3 ans. p. 8-9) and DQ 11.3 (W4 ans. p. 11).
  2. Skim R&G 11.1, pdf p. 348-353 (annuity adverse selection p. 349-350). About 45 min total; don't invest more.

### PUB-TAX-OPTINC
**D1 2 · D2 3 · D3 3 · D4 3 · D5 5 → 3.2** · Priority C, never examined (0%)
- **Why it's hard** (if it appears)
  - The Edgeworth model (utilitarian, identical U, fixed income → equal incomes, 100% top rate) is not on the W6 slides, so it is book-only.
  - The counter-intuitive part is why the modern optimum is far below 100%: labour-supply responses create EB.
- **Typical point losses**: none on record. A likely 1-2 sentence verbal: "why not a 100% top rate?"
- **Crack it by**
  1. Skim R&G 16.3, pdf p. 543-546 (Fig 16.4 linear tax).
  2. Redo Ex 4.2b (leaky bucket, same equity-efficiency logic) and DQ 16.8d.

### PUB-WELF
**D1 2 · D2 3 · D3 3 · D4 4 · D5 3 → 3.0** · Priority A, 3.6% per exam (F25 7a-7b, R25 3a, F24 7c)
- **Why it's hard**
  - F25 7b vs 7c on the same page: a private good means MRS_i = MRT *per person* (y_C = 4, y_D = 1), a public good means ΣMRS = MRT (y = 9). Mixing them is the classic error.
  - R25 3a: total benefit 1400 > cost 1200, but the 40 citizens with benefit 15 pay 20, so it is *not* a Pareto improvement.
  - F24 7c asks the 2nd welfare theorem verbally: with lump-sum transfers efficiency and distribution separate, so build iff 23000 > 20000. No exercise trains this.
- **Typical point losses**: summing MRSs for a private good; equating "efficient" with "Pareto improvement"; a 7c answer that does not say "build iff total benefits exceed total costs".
- **Crack it by**
  1. Do F25 Q7 a-d in one go (F25 solutions p. 13-14), then redo Ex 1.4a-d (same structure).
  2. Do R25 3a and Ex 5.4a, then Ex 2.7e-f and Ex 4.5b (Pareto tests).
  3. Read R&G 3.3, pdf p. 99-104, then write F24 7c in 2 sentences (F24 solutions p. 11).

### PUB-PG-CLASS
**D1 1 · D2 4 · D3 4 · D4 3 · D5 3 → 3.0** · Priority B, 0.4% per exam (M23 1a, R26 1d)
- **Why it's hard**
  - M23 1a: read rivalry off the *MRS functions* (G_A + G_B enters both, x_i only one's own). "Arguing via cost difference (p_G vs 1) = 0 pts".
  - R26 1d: the link non-excludability → enforcement/transaction costs → Coase fails is on no sheet, and "just lists both characteristics" = 0.
- **Typical point losses**: the wrong argument route in M23 1a; claiming property rights cannot exist for public goods.
- **Crack it by**
  1. Redo Ex 1.5a (M23 1a verbatim) and Ex 2.7c.
  2. Read R&G 4.1, pdf p. 116-119, plus R&G 5.3, pdf p. 152-155; then DQ 4.2.
  3. Write R26 1d in ≤ 4 sentences and compare with the three accepted answers (R26 solutions p. 2).

### PUB-PG-NASH
**D1 3 · D2 5 · D3 3 · D4 2 · D5 1 → 2.8** · Priority A, 3.7% per exam, 5 of 6 papers (M23 1c, M25 1b, F24 5b-5c, F25 7d, R26 1b-1c)
- **Why it's hard**
  - The trap the scheme punishes most: the question asks what the free rider *consumes*. R26 1b: correct NE but "Ben consumes 0" = 1 of 2; any answer where Ben *buys* a positive amount (e.g. b − c) = 0.
  - Corner check: verify the low-valuer's MU at the high-valuer's Q is below MC (F25 7d: MRS_D < 4 for y > 1).
  - M23 1c: derive *both* best responses *and* solve the system (G_i = y/(3p_G)); stopping at the BRs = 0. F24 5b asks why the efficiency loss is independent of α (the provider internalises only her own MU).
- **Typical point losses**: consumes ≠ provides (half or all points); interior solution where a corner applies; unsolved BR system.
- **Crack it by**
  1. Redo Ex 1.3b ("Britt buys 0 but consumes α/c") and Ex 1.4d, then M25 1b and R26 1b (M25 solutions p. 1, R26 p. 2).
  2. Redo Ex 1.5d-e (M23 1c verbatim) and Ex 1.2b-d (corner, efficiency-loss triangle for F24 5b).
  3. Always end with one line: "X provides …, Y provides 0, both consume …".

### PUB-EXT-COMMONS
**D1 3 · D2 4 · D3 3 · D4 3 · D5 1 → 2.8** · Priority B, 4.3% per exam (R25 Q1, 10 pts)
- **Why it's hard**
  - R25 1b: efficient C minimises *total* time C·t_car(C) + (N − C)·t_bike with a piecewise (jam above 500) travel-time function; the marginal car's cost includes the delay to others.
  - R25 1c is counter-intuitive: extra road capacity saves 0 (Nash time stays 40, induced demand), while better bike lanes save 25,000 min. Policies must be recomputed via the *Nash* condition.
  - R25 1d: with a binary choice a car tax and a bike subsidy are equivalent; students argue distribution instead.
- **Typical point losses**: 1b verbal (2 of 4 pts) without "others" and "not taken into account"; solving efficient C with average instead of total time; recomputing the policies with the efficient condition.
- **Crack it by**
  1. Redo Ex 2.6a-d cold (R25 Q1 verbatim), then compare with R25 solutions p. 2.
  2. Do Ex 2.7a-b, d (sheep: average vs marginal product) and DQ 4.12 so a different commons setup does not throw you.

### PUB-TAX-MCPF
**D1 2 · D2 3 · D3 2 · D4 3 · D5 3 → 2.6** · Priority B, about 1.9% per exam (embedded in F24 7a-7b)
- **Why it's hard**
  - The concept never appears by name. F24 7b just expects you to know that a project financed by a distortionary tax costs revenue + EB (MCPF = 25000/20000 = 1.25).
  - Contrast trap: a lump-sum-financed project (R25 3a/3e) has *no* EB term.
  - The W6 lecture adds new framing (MB = 1 + MEB for the optimal project size, Ex 5.4e), which may become a question.
- **Typical point losses**: leaving EB out of the cost; adding EB to a lump-sum-financed project.
- **Crack it by**
  1. Do Ex 5.4b-e (still open): revenue requirement, EB, "1000 < 800 + 400", optimal size.
  2. Read Lecture 6 slides 24-27 and R&G 15.2, pdf p. 509-510 (EB ∝ t², marginal EB).

### PUB-TAX-PROG
**D1 1 · D2 3 · D3 3 · D4 3 · D5 3 → 2.6** · Priority B, 0.4% per exam (F25 10b, 1 pt)
- **Why it's hard**
  - Progressivity is judged by the *average* tax rate, not the marginal rate. A flat t with a grant (T = −a + tI) is progressive.
  - F25 10b: the Ramsey system taxes the poor's inelastic good at 9× the rich's rate, so the ATR falls with income: *regressive*. One sentence, and it must include the reason.
- **Typical point losses**: answering with marginal rates; "regressive" without the ATR link.
- **Crack it by**
  1. Do DQ 14.8 (ATR = a/I + t) from the W5 sheet (ans. p. 5).
  2. Read R&G 14.1, pdf p. 457-459, and R&G 16.1 "Equity Considerations", pdf p. 536-537.

### PUB-EXT-PIGOU
**D1 3 · D2 3 · D3 3 · D4 2 · D5 1 → 2.4** · Priority A, 4.0% per exam (F25 9c, R26 1c, 3a, 3d, 3e, R25 1d, M25 2a)
- **Why it's hard**
  - F25 9c in parameters: D = S + MEC gives Q* = 180/(3+α), tax = MEC(Q*) = 180α/(3+α). 1 pt is just for stating "tax = MEC at the efficient Q".
  - R26 3d: a non-Pigouvian €30 tax *raises* efficiency (+800). You need CS + PS + revenue − EC with and without the tax; forgetting revenue or EC flips the sign.
  - Verbal: R26 3a (consumers hurt other consumers: still a market failure, 1 pt "others" + 1 pt "not taken into account"); R26 1c (3 pts: subsidy = Ben's MU at Q* = the MEB Anne ignores).
- **Typical point losses**: tax = MEC at the market Q; missing revenue in 3d; "because there is an externality" without "others / not taken into account".
- **Crack it by**
  1. Redo Ex 2.2a-d (t*(c) comparative statics) and Ex 2.5a-d (subsidy = MEB(q*), full surplus accounting).
  2. Do DQ 15.12 (exact twin of R26 3d), then the full T2 chain F25 Q9 and R26 Q3 timed (F25 solutions p. 16-17, R26 p. 8).
  3. Read R&G 5.2, 5.4, 5.8, pdf p. 145-160, 182-184.

### PUB-AI-ADVSEL
**D1 2 · D2 3 · D3 3 · D4 3 · D5 1 → 2.4** · Priority B, 2.9% per exam (R25 2a-2c)
- **Why it's hard**
  - R25 2a: half the proof points go to *stating the definition* (expected WTP λB_H + (1−λ)B_L < S_H), which students skip to do the algebra.
  - R25 2b: the threshold falls in λ because a higher share of good units raises expected WTP. Easy to argue in the wrong direction.
  - R25 2c: the price range uses the *lemon* values only (S_L ≤ p ≤ B_L).
- **Typical point losses**: no definition sentence; mixing high- and low-quality values in the price range.
- **Crack it by**
  1. Redo Ex 3.2a-c (near-identical to R25 2a, 2c) and Ex 3.1a-d (cutoff fixed point, which also trains Personnel F25 Q2).
  2. Do R25 Q2 against the scheme (R25 solutions p. 4); read R&G 9.1, pdf p. 293-298.

### PUB-REDIST-THEORY
**D1 3 · D2 3 · D3 3 · D4 2 · D5 1 → 2.4** · Priority B, 1.9% per exam (F25 6a-6c, R26 4c)
- **Why it's hard**
  - F25 6a is a parameter-only Lagrange (w, β) with √-utility; the 1st point is for the method (Lagrange or w·MU_A = MU_B).
  - F25 6c: with a leaky bucket the answer is a direction (Berta gets *less*) plus the trade-off reason, for 1 pt each.
- **Typical point losses**: bare result; 6b/6c restating maths in words; R26 4c with an efficiency argument.
- **Crack it by**
  1. Redo Ex 4.1a-b, 4.2a-b and 4.4a-b (near-copies of F25 Q6).
  2. Do F25 Q6 against the scheme (F25 solutions p. 11-12); read R&G 12.2, pdf p. 395-401.

### PUB-TAX-EB
**D1 3 · D2 3 · D3 2 · D4 2 · D5 1 → 2.2** · Priority A, 3.6% per exam, in all 4 F/R exams (F24 7a, R25 3b, F25 9a, R26 3d, R26 2c)
- **Why it's hard**
  - The core ½·t·ΔQ is a fixed recipe (F25 9a: ½·30·10 = 150), but R25 3b needs the perfectly-elastic-supply case and F24 7a feeds into the CBA in 7b.
  - R26 3d: with an externality the tax's welfare effect is not −EB (it is +800); R26 2c: EV method as a "describe the steps" question.
  - Ex 5.2 shows EB > 0 even when hours don't change (Cobb-Douglas), which is counter-intuitive. Ex 5.2-5.4 are still open.
- **Typical point losses**: ΔQ not between the untaxed and taxed equilibria; counting revenue as a loss; naming "equivalent variation" without the steps (R26 2c).
- **Crack it by**
  1. Finish Ex 5.2a-d, 5.3 and 5.4b-c (the open W5 items).
  2. Redo Ex 5.1c, then F24 7a, R25 3b, F25 9a in one sitting; do DQ 15.12.
  3. Read R&G 15.1-15.2, pdf p. 496-511 (EB = ½·η·P·q·t², p. 509).

### PUB-TAX-INC
**D1 2 · D2 2 · D3 4 · D4 1 · D5 1 → 2.0** · Priority A, 4.4% per exam (F24 6c-6d, F25 9b, R26 3b-3c)
- **Why it's hard**
  - The numerics never change (always 2/3 for the less elastic side), but you must shift the right curve: F24 taxes producers (D = S + t), R26 taxes consumers (D − t = S).
  - The verbal parts carry the risk: F24 6d "naming the term is not enough"; F25 9b and R26 3c give 1 pt for "fewer/better alternatives" and 1 pt for "so they substitute less/more and bear more/less".
- **Typical point losses**: "because supply is more elastic" without the alternatives → substitution → burden chain; confusing statutory with economic incidence.
- **Crack it by**
  1. Redo Ex 5.1a-b and DQ 14.5-14.6.
  2. Do DQ 14.12 (exact verbal pattern of F25 9b / R26 3c), then write F24 6d, F25 9b and R26 3c and check them against the schemes.

### PUB-CBA
**D1 2 · D2 4 · D3 1 · D4 2 · D5 1 → 2.0** · Priority B, 1.4% per exam (F24 7b, R25 3e)
- **Why it's hard**
  - The arithmetic is trivial, but both instances hide a trap: EB in the cost (F24 7b) and net losers flipping the inequality (R25 3e: α < 2).
  - Discounting, shadow prices and the value of life are taught but have never been asked.
- **Typical point losses**: totals wrong because EB is missing (1 of 2 pts); wrong inequality direction.
- **Crack it by**
  1. Do Ex 5.4a, d, e and DQ 8.5 (break-even weight).
  2. Read R&G 8.6, pdf p. 267-268; then do F24 7b and R25 3e (see PUB-SWF).

### PUB-EDU
**D1 2 · D2 2 · D3 2 · D4 3 · D5 1 → 2.0** · Priority C, never examined (0%)
- **Why it's hard** (if it appears): full surplus accounting with an external benefit (Ex 2.5c, free tuition overshoots, −75); equity is a *normative* reason, not an externality.
- **Typical point losses**: none on record.
- **Crack it by**: redo Ex 2.5a-d (counts for PIGOU too); skim R&G 7.1, pdf p. 226-229.

### PUB-AI-MORAL
**D1 2 · D2 2 · D3 2 · D4 3 · D5 1 → 2.0** · Priority C, never examined (0%)
- **Why it's hard** (if it appears): EU with U = 8√Y and fair premia with or without commitment (Ex 3.3a-e); the same EU technique is used in R26 4a.
- **Typical point losses**: none on record.
- **Crack it by**: redo Ex 3.3a-e (also trains R26 4a); skim R&G 9.1, pdf p. 298-305.

### PUB-PG-SAM
**D1 2 · D2 2 · D3 1 · D4 1 · D5 1 → 1.4** · Priority A, 2.6% per exam, 5 of 6 papers (M23 1b, M25 1a, F24 5a, F25 7c, R26 1a)
- **Why it's hard**: it mostly isn't. The risks are writing ΣMRS = MRT without solving (M23 1b = 0), using a non-Samuelson route (M23 "wrong"), and the MRS-with-budgets version (M23 1b: substitute x_A + x_B = 2y − p_G·G).
- **Typical point losses**: the condition alone without the solution; R26 1a scheme is 1 pt condition + 1 pt MUs.
- **Crack it by**: redo Ex 1.2a, 1.3a, 1.4b-c, 1.5b-c; do M25 1a/R26 1a (near-verbatim) and DQ 4.3, 4.11.

### PUB-EXT-GAME
**D1 1 · D2 2 · D3 2 · D4 1 · D5 1 → 1.4** · Priority C, midterm only (M23 2a)
- **Why it's hard**: you need the Nash cell *and* the max-sum cell *and* "negative externality Scott ignores"; either cell wrong = 0.
- **Typical point losses**: all-or-nothing on the cells.
- **Crack it by**: redo Ex 2.1a, c and Ex 1.1a (15 min).
