# PER-PA-AGENT - The agent's problem: effort FOC under a linear contract

**Status:** taught (lecture 1, Set 1) · **Exam weight:** in **3/4** finals/resits (F24, R25, R26) + M23, M25 · 5 F/R sub-Qs · **2.5% of a typical exam** (split; it is step 1 of every T10 question, so its real reach is larger) · **Priority A**

## How the exam asks it

Template **T10, step 1**. Almost always the first sub-question of a contract block.

| Exam Q | Type | Content |
|---|---|---|
| [M23 3a](<../../Past exams/Midterms/2023 Midterm (with solutions).pdf>) | Numerical + explain the steps | U = bQ − E², Q = E + K, so E = b/2 (then the principal step) |
| [M25 3a](<../../Past exams/Midterms/2025 Midterm (with solutions).pdf>) | Numerical | guilt: e = (μ/θ)(b − β), with corner e = 0 |
| [F24 3a](<../../Past exams/Finals/2024-10 Final (with solutions).pdf>) | Numerical | profit-care γ: e = κ[(1−γ)b + γP]/θ |
| [R25 4a](<../../Past exams/Resits/2025-07 Resit (with solutions).pdf>) | Numerical + intuition | positive effort iff b > β |
| [R25 5a](<../../Past exams/Resits/2025-07 Resit (with solutions).pdf>) | Derivation | concave V: bV′(a + be) − δ = 0 (see [PER-INCOME](PER-INCOME.md)) |
| [R26 6b](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | True/false | de/db = 1/θ does not depend on γ, so FALSE |
| [R26 8a](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | Verbal (2 sentences) | performance pay raises sales through the incentive effect + the sorting effect |

**Steps:**
1. Write income Y = a + bQ(e) and substitute it into U.
2. FOC: marginal pay b·Q′(e) (+ twist) = marginal cost of effort.
3. Solve for e(b).
4. Check the corner: if the marginal benefit is ≤ 0 at e = 0, then e = 0.
5. For comparative statics, differentiate e(b) and interpret.

**Pitfalls:** the corner is worth 0.5 pt (M25 3a). The M23 grading scheme demands *sentences explaining each step*. A T/F answer needs the derivative.

## Tutorial exercises that train it

| Exercise | Mirrors |
|---|---|
| [T1 Ex1.2a](<../../Personnel Economics (Dur)/Exercises and answers/Topic 1 - exercises and answers.pdf>) e = bκ/θ | M23 3a, M25 3a, R25 4a |
| [T1 Ex1.5a](<../../Personnel Economics (Dur)/Exercises and answers/Topic 1 - exercises and answers.pdf>) e = (b + γ)/2 | R26 6a-6b |
| [T1 Ex1.1](<../../Personnel Economics (Dur)/Exercises and answers/Topic 1 - exercises and answers.pdf>) = Kuhn DQ 2.2, 2.3 | M25 3a / R25 4a (corner) |
| [T4 Ex4.1a](<../../Personnel Economics (Dur)/Exercises and answers/Topic 4 - exercises and answers.pdf>) expected bonus, e = b/θ | M23 3a (FOC type) |

## Gap verdict: **COVERED**

The FOC skill is fully trained. The guilt and profit-care *twists* are handled in [PER-NONCLASS](PER-NONCLASS.md).

## Book (source of truth)

| Section | Pages | Tag | Why |
|---|---|---|---|
| Kuhn 2.1 A Mathematical Solution | pdf p. 34-36 | **MUST-READ** | The canonical FOC b·d = V′(E). Short |
| Kuhn 2.2 Comparative Statics | pdf p. 36-38 | **MUST-READ** | Result 2.1: E rises in b and is independent of a. This is the R26 6b logic |
| Kuhn 2.3 The Solution with Indifference Curves | pdf p. 38-39 | SKIP | The graph is never asked |

## Book discussion questions ([Kuhn ch 2](<../../Textbooks/Kuhn - Personnel Economics (md)/02 - Solving the Agent’s Problem.md>))

| DQ | Need | Assigned? | Approach hint |
|---|---|---|---|
| 2.2 Effort with V(E) = E³/3 | **MUST** | Set 1 (Ex 1.1) | MB = b·d equals MC = E² |
| 2.3 Linear cost V = mE | **MUST** | Set 1 (Ex 1.1) | Constant MB vs constant MC means a corner solution, not an interior FOC. This is the e = 0 logic |
| 2.1 Effort with V(E) = E² | USEFUL | - | Warm-up |

**Solve cold:** T1 1.2a, 1.5a; T4 4.1a; DQ 2.2-2.3 · M23 3a, M25 3a, F24 3a, R25 4a, R25 5a, R26 6b, R26 8a.
