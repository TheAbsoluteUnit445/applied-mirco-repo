# Tournament source and algebra audit

Checked 7 October 2026. Scope: PER-TOURN, Kuhn 20–23; PER-NONCLASS bridge explicitly separate. Original sources and progress files were preserved.

## Evidence checked

- Read `AGENTS.md`, topic map and relevant book/exercise finding aids. Used their links to the originals rather than accepting readiness claims.
- Read current [Topic 8 question/answer twin](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.md>) and checked original PDF extraction, pages 1–5. Exercises 8.1–8.4 are available. Questions 8.2 span pages 1–2; their official answers are on page 4.
- Read all Kuhn 20–23 chapter twins, including results, extensions and selected discussion questions. Relevant original book pages: chapter 20 begins 364; 21 begins 390; 22 begins 411; 23 begins 436. Chapter 23 substantive text ends 445, references 446–447. Its Markdown twin accidentally includes Part 5 introductory pages 448–451; these are not chapter 23 theory.
- Checked original F25 grading PDF 7–8: Q3 **10 marks**, a2/b3/c2/d3. The paper is the final of **24 October 2025**. Pride $P$ is conditional utility, not expenditure; optimal cash increment **$R/\pi-P$**, not (R-P).
- Checked original R26 grading PDF 12–13: Q5 **6 marks**, a2/b2/c2, resit **7 July 2026**. It has independent hours, joint hours and tax; tutorial 8.4 adds a separate utility calculation.
- Current lecture directory contains original Dur PPTX lectures 1–3, and repository-authored later interactive lectures. The competition decks supply teaching coverage, not proof of the original 7 October lecture's actual delivered content.
- Scanned question headings and relevant promotion/competition/relative-performance text directly from all four original final/resit grading PDFs (F24, R25, F25, R26). Only F25 Q3 is a direct tournament block. R26 Q5 is a relative-income bridge; F24 Q2 is the separate team block. Merely seeing the word “compete” in labor-market or public-good questions does not make them tournaments.

## Discrepancies preserved and explained

| Source | Verified issue | Treatment in module |
|---|---|---|
| [PER-TOURN map](<../../map/topics/PER-TOURN.md>) | Says no exercise set yet; current Topic 8 PDF is present | Explicit readiness correction; no originals changed |
| Old upcoming/inventory map results | Some entries omit division by promotion sensitivity | F25 result checked directly: $Z=R/\pi-P$ |
| [Tutorial 8.3b, answer PDF 4](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=4>) | Says lagging funds sell safe and buy “low-risk” stocks | Follow [Kuhn Result21.7 PDF406](<../../Textbooks/Personnel Economics.pdf#page=406>): active movement into riskier assets; label mismatch |
| [Tutorial 8.4, answer PDF 5](<../../Personnel Economics (Dur)/Exercises and answers/Topic 8 of Personnel Economics Exercises and Answers.pdf#page=5>) | Omits asked utility comparison; tax answer labelled c instead of d | Independently compute $U^N=w^2(1-\mu^2)/4$, $U^J=w^2/4$; label tax properly |
| [R26 Q5b PDF12](<../../Past exams/Resits/2026-07 Resit (with solutions).pdf#page=12>) | First duplicated answer says $wh_A-2h_A=0$; grading text below correctly says $w-2h_A=0$ | Differentiate explicitly; preserve correct official result $h=w/2$ |
| [Kuhn Result22.2 PDF416](<../../Textbooks/Personnel Economics.pdf#page=416>) | Box reverses Tiger present/absent; same page's preceding paragraph says rivals took more strokes with Tiger present and explanatory box agrees | Original page was visually inspected. Use surrounding discussion's present-worse direction, retain causal qualifications |
| [Kuhn20.6 numerical example PDF373–374](<../../Textbooks/Personnel Economics.pdf#page=373>) | Interior effort4 at $d4,R10,S10,a9$ gives utility6, but bounded probability allows effort0 with utility9 | Preserve interior textbook calculation; flag absence of global equilibrium for those values |

## Independently checked algebra and graph equations

Book uniform probability: $p=\operatorname{clip}[1/2+d(E_i-E_j)/R,0,1]$. Its interior derivative is $d/R$; derivative is zero on saturated segments. Worker utility $a+pS-E_i^2/2$, stationary effort $dS/R$. Efficient effort $d$, implementing interior spread $R$. The symmetric candidate is globally stable under the clipped model when $d^2S\leq R^2$; at efficient spread this needs $d^2\leq R$. Graphs must not extrapolate probabilities or silently apply the FOC beyond its domain.

Course model: define $q=1-\rho$. Outsider version $EU=2W+qpZ-\Theta e^2/2$, $e=q\pi Z/\Theta$, unconditional probability $q/2$, $W=V-qZ/4+q^2\pi^2Z^2/(4\Theta)$. Salary derivative $Z/4-q\pi^2Z^2/(2\Theta)$. Pride version $A=Z+P$, $e=\pi A/\theta$, $W=V-A/4+\pi^2A^2/(4\theta)$, $\Pi=(2R\pi A-\pi^2A^2)/\theta-4V+P$. Optimum $Z=R/\pi-P$, second derivative $-2\pi^2/\theta$. If cash increment nonnegative, interior concave problem gives max(0, result). Probability-bound global condition is $\pi^2A/\theta\leq1$, separate from official algebra.

Normal-luck constructed graph: $p=\Phi(x/\sigma)$, $dp/d\sigma=-x\phi(x/\sigma)/\sigma^2$. Clearly label it as an illustration, not Kuhn's uniform assumption. Confidence illustration: safe14 versus 0/40 prize gives risk-neutral entry threshold perceived probability0.35.

Relative-income bridge: $h^N=(1+\mu)w/2$, $h^J=w/2$, utility gain $\mu^2w^2/4$. Tax $T(y)=\max(0,y-w^2/2)$ implies after-tax income cap $\min(y,w^2/2)$. Verify own-hours derivative positive on the left and negative on the right of $w/2$, using **after-tax** comparisons. A graph should label gross income and after-tax income separately.

## Limits of this record

Numerical global-best-response checks on five representative uniform-luck cases agreed with the stated probability-bound condition, including the failing book example. Four pride-model configurations verified salary substitution, two-period participation and profit accounting. Inline and display math delimiters were counted, and source-file links were checked against the filesystem. The central-index link is supplied by the integrating agent.

Historical four-paper direct-tournament frequency was checked against original question text; no next-exam probability is inferred. Other modules' source/exam audits belong to their records. Discussion-question solutions are independently derived, not alleged official keys. The new module flags genuine source disagreements and mathematical domain restrictions rather than overwriting the sources. Browser/HyperFrames verification is recorded centrally by the integrating agent.
