# PER-EMP - Empirical methods: causality, RCTs, confounders, Safelite

**Status:** taught (lecture 3, Set 3 + DQs) · **Exam weight:** in **4/4** finals/resits (F24, R25, F25, R26) · 7 F/R sub-Qs · **6.3% of a typical exam** (split; #3 overall) · **Priority A**

## How the exam asks it

Template **T12**. It is in every final and resit, and it is mostly verbal with tight sentence caps.

| Exam Q | Type | Content |
|---|---|---|
| [F24 3b](<../../Past exams/Finals/2024-10 Final (with solutions).pdf>) | Research design (2) | Randomise a bonus increase across plants (T vs C). Compare productivity, and test for a smaller effect among high-γ workers. Measuring γ (survey or dictator game) is optional |
| [R25 7a](<../../Past exams/Resits/2025-07 Resit (with solutions).pdf>) | Verbal (2) | Why a 20% sales rise does not prove the bonus works: confounders / time trends |
| [R25 7b](<../../Past exams/Resits/2025-07 Resit (with solutions).pdf>) | Research design (2) | Randomise stores into treatment and control |
| [F25 5a](<../../Past exams/Finals/2025-10 Final (with solutions).pdf>) | Verbal (1 sentence) | No: chains with variable pay may differ in other respects |
| [F25 5b](<../../Past exams/Finals/2025-10 Final (with solutions).pdf>) | Verbal (2) | Two requirements: random assignment; large scale; long enough; no contamination; reliable measurement |
| [R26 8b](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | Verbal (max 2 sentences) | Reverse causality (failing stores adopt performance pay) or crowding out |
| [R26 8c](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | Research design (max 3 sentences) | Randomly split **the 400** performance-pay stores (not all 900). Abandon performance pay in the treatment group and compare over time |
| [R26 8a](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf>) | Verbal (2) | Incentive effect + sorting effect (tagged PER-PA-AGENT / SEL-SCREEN) |

**Steps:**
1. "Can we conclude?" No. Name **one concrete** confounder, reverse causality, or selection mechanism.
2. Design: **randomly** assign *units* (stores or plants) *within the population asked about* to treatment and control. Change only the policy. Compare the outcome over time.
3. Requirements: randomisation, scale, duration, no contamination, reliable measurement.
4. Heterogeneity: measure the trait first, then test whether the effect differs by trait.

**Pitfalls:** explain every technical term you use (R26 8b). Wrong population scores 0 for that point (R26 8c). One reason = one channel.

## Tutorial exercises that train it

| Exercise | Mirrors |
|---|---|
| [T3 Ex3.3a](<../../Personnel Economics (Dur)/Exercises and answers/Topic 3 - exercises and answers.pdf>) read an RCT result | R25 7a, F25 5a |
| [T3 Ex3.3b](<../../Personnel Economics (Dur)/Exercises and answers/Topic 3 - exercises and answers.pdf>) random assignment removes reverse causality | R26 8b, R25 7b |
| [T3 (assigned) Kuhn DQ 7.1-7.4](<../../Personnel Economics (Dur)/Exercises and answers/Topic 3 - exercises and answers.pdf>) | R25 7, F25 5, R26 8 |
| [T4 (assigned) Kuhn DQ 9.4 + "how to fix"](<../../Personnel Economics (Dur)/Exercises and answers/Topic 4 - exercises and answers.pdf>) | F24 3b, R26 8c |

## Gap verdict: **PARTIAL**

- **Not trained by any exercise:** designing an experiment (with T/C, the outcome, and the population), listing the requirements of a reliable experiment, the heterogeneity test (F24 3b), and the incentive vs sorting split (R26 8a). The DQ 7.x answers are "discussed in class", with no answer key.
- **Where it is filled:**
  - BOOK: Kuhn 7.1-7.2 (pdf p. 98-107) and Kuhn 8.2 (pdf p. 113-117, Result 8.3: half incentive, half sorting).
  - The past exam questions themselves. Write F24 3b, R25 7b and R26 8c to the sentence cap and compare with the scheme.

## Book (source of truth)

| Section | Pages | Tag | Why |
|---|---|---|---|
| Kuhn 7.1 Inferring Causality: The Advantages of RCTs (CTrip WFH) | pdf p. 98-102 | **MUST-READ** | The treatment/control/randomisation language every exam uses |
| Kuhn 7.2 Inferring Causality in Non-Experimental Settings: Regression Analysis | pdf p. 102-107 | **MUST-READ** | Confounders (Pizza Hut example), the "can we conclude?" questions |
| Kuhn 8.1 Safelite's PPP and Its Predicted Effects | pdf p. 110-113 | SKIM | Result 8.1: the P-A model applied |
| Kuhn 8.2 How Did the PPP Affect Employee Performance? | pdf p. 113-117 | **MUST-READ** | Results 8.2-8.3: time trend controls, and the 44% splits into incentive vs sorting. This is R26 8a |
| Kuhn 8.3-8.5 Profits, Lessons, Epilogue | pdf p. 117-122 | SKIP | Case narrative |
| Kuhn 9.1 (crowding out) | pdf p. 124-127 | see [PER-NONCLASS](PER-NONCLASS.md) | R26 8b |

## Book discussion questions ([Kuhn ch 7](<../../Textbooks/Kuhn - Personnel Economics (md)/07 - Empirical Methods in Personnel Economics.md>), [ch 8](<../../Textbooks/Kuhn - Personnel Economics (md)/08 - Performance Pay at Safelite Glass- Higher Productivity, Pay,.md>), [ch 9](<../../Textbooks/Kuhn - Personnel Economics (md)/09 - Some Non-Classical Motivators.md>))

| DQ | Need | Assigned? | Approach hint |
|---|---|---|---|
| 7.1 Why not compare before/after WFH? | **MUST** | Set 3 | No counterfactual: time trends, seasonality, simultaneous changes (= R25 7a) |
| 7.2 Why not let workers choose? | **MUST** | Set 3 | Selection: choosers differ systematically (= F25 5a, R26 8b) |
| 7.3 Screen only the treatment group? | **MUST** | Set 3 | Screen *before* randomising so T and C stay comparable |
| 7.4 Other confounders in the Pizza Hut comparison | **MUST** | Set 3 | Traits that drive both adoption and speed |
| 8.3 How worker fixed effects split the 44% | **MUST** | **not on any set** | The within-worker change is the incentive effect; the rest is sorting |
| 9.4 Award winners vs non-winners, and the fix | **MUST** | Set 4 | Selection + random assignment of awards |
| 8.4 Hawthorne effects ruled out? | USEFUL | - | Short critique drill |
| 9.7, 9.10 | USEFUL | - | Natural experiment vs endogeneity; why randomise |

**Solve cold:** T3 3.3a-b; DQ 7.1-7.4, 8.3, 9.4 · F24 3b, R25 7a-7b, F25 5a-5b, R26 8a-8c.
