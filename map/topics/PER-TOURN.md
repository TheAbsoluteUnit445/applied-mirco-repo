# PER-TOURN - Tournaments: simple model, sabotage, collusion, uneven tournaments, selection

**Status:** **upcoming** (lecture Wed 7 Oct; no exercise set yet) · **Exam weight:** in **1/4** finals/resits (F25 Q3 = 10 pts = 16.7% of that exam) · 4 F/R sub-Qs · **3.3% of a typical exam** (split) · **Priority B** (a one-off big block, but it is lectured this year, so expect it as a candidate for the "new block" on 23 Oct)

## How the exam asks it

Template **T15**: the linear-contract backbone, with the bonus replaced by a prize spread.

**F25 Q3 setup:** 2 workers, 2 periods. Period-1 wage W. The winner earns W + Z in period 2 and gets pride utility P. p_i = ½ + π(e_i − e_j). Effort cost ½θe². Outside option V per period.

| Exam Q | Type | Result |
|---|---|---|
| [F25 3a](<../../Past exams/Finals/2025-10 Final (with solutions).pdf>) | Numerical (2) | EU = [½ + π(e_i − e_j)](Z + P) + 2W − ½θe_i², so the FOC is **π(Z + P) − θe = 0** |
| [F25 3b](<../../Past exams/Finals/2025-10 Final (with solutions).pdf>) | Derivation (3) | Symmetric, so p = ½. PC: 2W + ½(Z + P) − ½θe² = 2V. **W = V − ¼(Z + P) + ¼θ(π(Z + P)/θ)²** |
| [F25 3c](<../../Past exams/Finals/2025-10 Final (with solutions).pdf>) | Verbal (2) | Higher P: (1) promotion is worth more, so the job is more attractive; (2) workers work harder in period 1, so effort costs are higher and the job is less attractive |
| [F25 3d](<../../Past exams/Finals/2025-10 Final (with solutions).pdf>) | Numerical (3) | Profit 2Re − Z − 4W. Substitute e(Z) and W(Z), take the FOC in Z: **Z = R/π − P** |

**Steps:**
1. Expected utility, with the win probability as a function of both efforts.
2. FOC for own effort, taking the rival's effort as given.
3. Impose symmetry: equal efforts, p = ½.
4. Set the binding PC over both periods, which gives the base wage.
5. Profit = revenue − all wages (4W + Z over 2 workers × 2 periods). Substitute and take the FOC in the prize.
6. Verbal: list the opposing effects.

**Pitfalls:**
- "No math in words" in 3c, 1 pt per effect.
- The correct prize is Z = R/π − P. `exam-inventory.md` and `upcoming-topics.md` say "Z = R − P"; that is a transcription error.
- Count every wage payment in profit (4W, not 2W).

## Tutorial exercises that train it

None yet. A Topic 7/8 set is expected after the 7 Oct lecture. Add it here once released.
- **Closest existing chain** (FOC → PC → principal's FOC): [T2 Ex2.1a](<../../Personnel Economics (Dur)/Exercises and answers/Topic 2 - exercises and answers.pdf>) and [T1 Ex1.2](<../../Personnel Economics (Dur)/Exercises and answers/Topic 1 - exercises and answers.pdf>).

## Gap verdict: **GAP** (until the set is released)

- **Missing:** any practice of the tournament FOC, the symmetric PC and the optimal prize.
- **Where it is filled:**
  - BOOK Kuhn 20.1-20.5, pdf p. 364-373. Kuhn's p_i = 0.5 + αd(E_i − E_j) gives E = αdS and the efficient prize S = R.
  - Lecture 7 Oct.
  - F25 Q3 as the drill.
- **Sabotage, collusion and uneven tournaments** (ch 21-22) are likely verbal add-ons. Read the Results boxes.

## Book (source of truth)

| Section | Pages | Tag | Why |
|---|---|---|---|
| Kuhn 20.1 The Basic Elements of a Two-Player Tournament | pdf p. 364-366 | **MUST-READ** | Setup: Y = a or a + S |
| Kuhn 20.2 Effort and the Probability of Winning the Promotion | pdf p. 366-369 | **MUST-READ** | Result 20.1, eq. 20.8 (p. 368): p_i = 0.5 + αd(E_i − E_j). This is the exam's p_i function |
| Kuhn 20.3 The Agents' Problem: Optimal Individual Effort | pdf p. 369-370 | **MUST-READ** | E = αdS; Result 20.2: symmetric effort, so luck decides the winner |
| Kuhn 20.4 Efficiency: Which Effort Levels Maximize the Size of the Pie? | pdf p. 370-372 | **MUST-READ** | Result 20.3: E* = d |
| Kuhn 20.5 Achieving Efficiency with the Optimal Tournament | pdf p. 372-373 | **MUST-READ** | S = 1/α = R; a from the PC sets the split. This is F25 3b-3d |
| Kuhn 20.6 The Equivalence of Tournaments and Piece Rates | pdf p. 373-375 | SKIM | Results 20.4-20.5 (needs risk neutrality; strategic, so behaviour is more variable) |
| Kuhn 20.7-20.8 Extensions: Many Players, Prizes, Stages; relative riskiness | pdf p. 375-385 | SKIM | Results 20.6-20.10. **Relative pay insures against common shocks** (p. 385) |
| Kuhn 20.9 The Market for Broilers | pdf p. 385-387 | SKIP | Case |
| Kuhn 21.1 Helping and Sabotage in Tournaments | pdf p. 390-399 | SKIM | Results 21.1-21.4: a likely verbal caveat |
| Kuhn 21.2 Collusion in Tournaments | pdf p. 399-403 | SKIM | Result 21.5: small group, observability, repetition |
| Kuhn 21.3 Tournaments and Risk-Taking | pdf p. 404-407 | SKIM | Results 21.6-21.7 |
| Kuhn 22.1 Effort and the Probability of Winning (asymmetric) | pdf p. 411-414 | SKIM | Result 22.1: uneven contests lower *both* players' effort |
| Kuhn 22.2 Tiger Woods Effect | pdf p. 414-417 | SKIP | Evidence |
| Kuhn 22.3 Leagues, Handicaps, and Affirmative Action | pdf p. 417-421 | SKIM | Results 22.3-22.5 |
| Kuhn 22.4 Multistage Contests and Promotion Ladders | pdf p. 421-432 | SKIP | |
| Kuhn 23.1 Ability, Risk Aversion, and Tournament Entry | pdf p. 436-439 | SKIM | Result 23.1: who self-selects in |
| Kuhn 23.2 Gender, Confidence, and Competitiveness | pdf p. 439-445 | SKIP | Evidence (Result 23.3) |

## Book discussion questions ([ch 20](<../../Textbooks/Kuhn - Personnel Economics (md)/20 - A Simple Model of Tournaments.md>), [ch 21](<../../Textbooks/Kuhn - Personnel Economics (md)/21 - Some Caveats- Sabotage, Collusion, and Risk-Taking in Tourna.md>), [ch 22](<../../Textbooks/Kuhn - Personnel Economics (md)/22 - Unfair and Uneven Tournaments.md>))

No MUST DQ: none trains the F25 Q3 derivation, so work 20.2-20.5 by hand. None are assigned yet. The best USEFUL ones:
- 20.2: two reasons pay jumps at promotion (tournament incentive vs a more productive job).
- 21.3: curve-graded exam collusion with 10 vs 50 students (Result 21.5).
- 21.1-21.2: problems with relative measures, and remedies.
- 22.4: re-seeding rules ("even contests maximise effort").

**Solve cold:** F25 3a-3d (+ the new set once released). Variant drill: a lower α (noisier measure) means S must rise. Add a base salary. With no pride, Z = R/π.
