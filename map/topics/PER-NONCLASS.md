# PER-NONCLASS - Non-classical motivators (intrinsic motivation, guilt, profit-care, status, pride)

**Status:** taught (lecture 4, Set 4) · **Exam weight:** in **4/4** finals/resits (F24, R25, F25, R26) + M25 · 18 F/R sub-Qs · **9.2% of a typical exam** (split weight; #1 of all 31 IDs) · **Priority A**

Every F/R exam has a linear contract with a "twist" term in the utility function. The twist changes every time, so learn the recipe, not the answer.

## How the exam asks it

Template **T10** (linear incentive contract) with a twist. **T14** (status), **T12** (crowding out), **T15** (pride in a tournament) also use it.

| Variant | Exam Q (link) | Type | Result to reach |
|---|---|---|---|
| Guilt per unit of output, −βq | [M25 3a](<../../Past exams/Midterms/2025 Midterm (with solutions).pdf>) | Numerical | e = (μ/θ)(b − β); e = 0 if b < β |
| | [M25 3b](<../../Past exams/Midterms/2025 Midterm (with solutions).pdf>) | Numerical | b = (p + β)/2 (no base salary) |
| | [R25 4a](<../../Past exams/Resits/2025-07 Resit (with solutions).pdf>) | Numerical + 1-sentence intuition | effort > 0 iff b > β ("money gain beats guilt cost") |
| | [R25 4d](<../../Past exams/Resits/2025-07 Resit (with solutions).pdf>) | Verbal (max 2 sentences) | lower guilt: (1) cheaper PC, (2) more effort for a given contract |
| Caring about profits, +γ·profit | [F24 3a](<../../Past exams/Finals/2024-10 Final (with solutions).pdf>) | Numerical | FOC bκ − θe + γ(P − b)κ = 0, so e = κ[(1−γ)b + γP]/θ |
| Intrinsic motivation, +γq | [R26 6a](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | Numerical | efficient e = (p + γ)/θ (bonus terms cancel) |
| | [R26 6b](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | True/false + derivation | de/db = 1/θ, so FALSE |
| | [R26 6c](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | Numerical (4 pts) | b = (p − γ)/2 |
| | [R26 6d](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | Verbal (max 3 sentences) | bonus is also paid on output that motivation would give anyway |
| Motivated public-sector workers (fixed wage) | [R26 7a-7c](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | Numerical (1 pt each) | e = 0 without motivation; e = γ/(2θ); wage U_alt − γ²/(4θ); 2θQ/γ workers |
| | [R26 7d](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | Reasoning | a wage between the two reservation wages self-selects the motivated type, so no problem |
| Status / relative income (rat race) | [R26 5a](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | Numerical | Nash hours h = (1 + μ)w/2 |
| | [R26 5b](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | Numerical | joint optimum w/2 (status terms cancel in the sum) |
| | [R26 5c](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | Model extension | yes: 100% marginal tax above w²/2, zero below |
| Pride in a tournament | [F25 3a, 3c](<../../Past exams/Finals/2025-10 Final (with solutions).pdf>) | FOC + verbal | see [PER-TOURN](PER-TOURN.md) |
| Crowding out | [R26 8b](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | Verbal (max 2 sentences) | reverse causality, or performance pay crowds out intrinsic motivation |
| Volunteers | [F24 1b](<../../Past exams/Finals/2024-10 Final (with solutions).pdf>) | Verbal | N(0) > 0 means volunteers; see [PER-MONOPSONY](PER-MONOPSONY.md) |

**Solution recipe (T10 with a twist):**
1. Substitute q(e) and the pay into U, including the twist term (−βq, +γq, +γ·Π, +μ·relative income).
2. Take the FOC in e and solve. **State the corner:** e = 0 if b ≤ β.
3. If there is a base salary, set the binding PC U(e*) = U_alt, which gives a(b). The twist lowers the wage needed if it is pleasant (γ) and raises it if it is unpleasant (β).
4. Write profit = pq − a − bq, substitute e(b) (and a(b)), take the FOC in b, and solve.
5. Efficiency benchmark: maximise U + Π. The transfers a and bq cancel.
6. Status: take each player's FOC as Nash. Then maximise the *sum*, where the relative-income terms cancel. Over-work is a positional externality.

**Pitfalls (grading schemes):** a missing corner costs 0.5 (M25 3a). A bare result scores 0, because points go to each step. The verbal parts need the economic channel, not "math in words" (R26 6d). "Two reasons" means two distinct channels, 1 point each (R25 4d). A T/F answer needs the derivative (R26 6b).

## Tutorial exercises that train it

| Exercise | Trains | Mirrors exam Q |
|---|---|---|
| [T1 Ex1.4](<../../Personnel Economics (Dur)/Exercises and answers/Topic 1 - exercises and answers.pdf>) | Q = E + k "free" output; b* = (1−k)/2 | M23 3b, R26 6c-6d (logic of "bonus paid on output not caused by it") |
| [T1 Ex1.5a-c](<../../Personnel Economics (Dur)/Exercises and answers/Topic 1 - exercises and answers.pdf>) | γe joy of work; b = (p − γ − c)/2 | R26 6a-6d, M25 3b (same algebra as guilt with the sign flipped) |
| [T2 Ex2.2a](<../../Personnel Economics (Dur)/Exercises and answers/Topic 2 - exercises and answers.pdf>) | fixed salary with intrinsic motivation; e = γ/θ, a = V − ½γ²/θ | R26 7a-7b |
| [T2 Ex2.2b](<../../Personnel Economics (Dur)/Exercises and answers/Topic 2 - exercises and answers.pdf>) | two-part contract with joy of work; b = p | R25 4c, R26 6 |
| [T2 Ex2.5a](<../../Personnel Economics (Dur)/Exercises and answers/Topic 2 - exercises and answers.pdf>) | intrinsic γ in a multitask job | none |
| [T4 Ex4.1b-e, 4.2, 4.3c](<../../Personnel Economics (Dur)/Exercises and answers/Topic 4 - exercises and answers.pdf>) | loss aversion, present bias | none (never examined) |

## Gap verdict: **PARTIAL**

- **Covered:** intrinsic motivation γ in the linear contract (T1 1.5, T2 2.2).
- **Not trained by any exercise:**
  - guilt per unit (M25 Q3, R25 Q4). T1 1.5c is the closest: the same algebra with the opposite sign.
  - profit-care (F24 3a)
  - status / rat race with the corrective tax (R26 Q5)
  - the count of motivated workers and self-selection (R26 7c-7d)
  - crowding out (R26 8b)
- **Where it is filled:** the algebra is **lecture/tutorial only - not in Kuhn**. Kuhn 9.2 is narrative and has no contract model. Drill these variants with the past exam questions themselves. The concepts are in the book: Kuhn 9.1 (crowding out), 9.2 (intrinsic/image motivation) and 10.7 (the relative-income utility H(Y) = Y + n(Y − Ȳ), eq. 10.1, pdf p. 190).

## Book (source of truth)

| Section | Pages | Tag | Why |
|---|---|---|---|
| Kuhn 9.1 Pay Enough or Don't Pay at All | pdf p. 124-127 | **MUST-READ** | Results 9.1-9.2: crowding out. This is the R26 8b argument, and no exercise trains it |
| Kuhn 9.2 Non-Monetary Incentives: Intrinsic, Symbolic, and Image Motivation | pdf p. 127-134 | **MUST-READ** | The concepts behind the γ/β terms, for the 1-sentence interpretations |
| Kuhn 9.3-9.4 Large Stakes and Big Mistakes / Are High Stakes Really a Problem? | pdf p. 134-140 | SKIP | Choking; never examined |
| Kuhn 9.5-9.6 Reference Points (theory, workplace) | pdf p. 140-149 | SKIM | Loss aversion (T4 4.1); never examined |
| Kuhn 9.7 Present Bias and Procrastination | pdf p. 149-160 | SKIM | Results 9.8-9.10 (T4 4.2-4.3); never examined |
| Kuhn 10.7 Fairness Among Workers | pdf p. 188-195 | SKIM | Eq. 10.1 relative-income utility (p. 190) = the status term in R26 Q5. Pay-disclosure evidence |
| Kuhn 3.1-3.2 (principal's problem) | pdf p. 40-48 | see [PER-PA-PRINC](PER-PA-PRINC.md) | The backbone every twist is bolted onto |

## Book discussion questions ([Kuhn ch 9](<../../Textbooks/Kuhn - Personnel Economics (md)/09 - Some Non-Classical Motivators.md>), [ch 10](<../../Textbooks/Kuhn - Personnel Economics (md)/10 - Reciprocity at Work- Gift Exchange, Implicit Contracts, and.md>))

| DQ | Need | Assigned? | Approach hint |
|---|---|---|---|
| 9.1 When do financial incentives work vs backfire? | **MUST** | not on any set | Sort the cases by channel: crowding out of intrinsic/image motivation, small pay as a negative signal, choking. Contrast with routine, measurable tasks |
| 9.4 Award winners vs non-winners | **MUST** | Set 4 (+ "how to fix it") | Selection on ability/motivation and reverse causality; the fix is random assignment of awards. Shared with [PER-EMP](PER-EMP.md) |
| 9.2 Intrinsic vs image motivation | USEFUL | Set 4 | Definitions |
| 9.5 "Doing well" vs "doing good" | USEFUL | - | Image-motivation crowding out |
| 10.6 Disclose pay rules or pay results? | USEFUL | - | Relative-income concerns |

**Solve cold:** T1 1.4, 1.5a-c; T2 2.2a-b · M25 3a-b; R25 4a, 4d; F24 3a; R26 5a-c, 6a-d, 7a-d, 8b.
