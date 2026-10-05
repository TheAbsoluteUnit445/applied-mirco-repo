# Sources and interpretation

Primary course source: Peter Kuhn, *Personnel Economics*, local Markdown twins of the course PDF in `applied-mirco-repo/Textbooks/Kuhn - Personnel Economics (md)/`.

| Lecture section | PDF pages |
|---|---|
| Chapter16: Avoiding Bias |281–301|
| Chapter20: A Simple Model of Tournaments |364–389|
| Chapter21: Sabotage, Collusion, Risk-Taking |390–410|
| Chapter22: Unfair and Uneven Tournaments |411–435|
| Chapter23: Selection into Tournaments |436–447|

Page references are PDF pages, not the printed book numbering. Slides paraphrase rather than reproduce the chapters. Speaker notes identify the section, limits, and study names. Some extraction artifacts in the local Markdown require reading surrounding paragraphs; the Tiger Woods result is explained consistently with that discussion.

Actual exam: `Past exams/Finals/2025-10 Final (with solutions).md`, Q3, PDF7–8,10points. Its model and solution are used with a separately labeled constructed numerical example. Other practice prompts are textbook questions or original teaching prompts; they are not claimed past-exam questions. The local tournament map lists one direct tournament block in the examined past papers.

## Notation

In Kuhn chapter20, **R is the width of the uniform relative-luck distribution**, and α=1/R. In the final-exam model, **R is revenue per unit of output**, and π is probability sensitivity. These meanings must not be mixed.

Kuhn simple model: Qᵢ=dEᵢ+εᵢ, costEᵢ²/2, loser paya, prize spreadS. Interior uniform-noise solutionE=αdS. Symmetric efficient effortE*=d; implementingS*=1/α. Base pay follows the participation constraint. The linear probability formula is valid only inside its support; graphs explicitly clip it to[0,1]. First-order solutions need feasibility/global-optimum checks.

Final-exam model: two periods, base wageW in each, promotion raiseZ in the second, prideP, costθe²/2, outside utilityV per period. EU=2W+p(Z+P)−θe²/2; e=π(Z+P)/θ; W=V−(Z+P)/4+θe²/4; Π=2Re−4W−Z. Interior optimumZ*=R/π−P ande*=R/θ. Adding constraints such asZ≥0 orW≥0 can change the solution.

## Illustrative models

The taste-cost line, Bayesian signal-reliability example, training threshold, normal-noise risk and handicap graphs, sabotage extension, and mean–variance entry approximation are teaching models, not empirical fits or claimed verbatim textbook equations. Their assumptions are explicit in the slide notes. Audited callback teaching rates12%/8% demonstrate percentage-point versus relative gaps; they are not presented as exact study rates.

The testing calculation uses textbookDQ16.1: cost$100,000, success probability0.05, value$1million. Expected net value−$50,000 and break-even rate0.10 rely on treating that value as net of other hiring costs. Expected repeated testing costc/p assumes independent identical trials.

Historical evidence is presented in the context of the textbook, without claims about current law or present-day employment statistics.

Framework: [HyperFrames official repository](https://github.com/heygen-com/hyperframes), using the slideshow workflow and local player bundles.
