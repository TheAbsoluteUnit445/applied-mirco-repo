# Agent guide - Applied Microeconomics (FEB12001X) exam manual

Read this first if you are an AI agent working in this repo.

## Goal
Get the user(s) ready to solve the **final exam on Fri 23 Oct 2026, 09:30-12:30** (open questions, 50% Public Economics / 50% Personnel Economics, all material, no midterm this year). Everything here serves that: past exams -> topics -> exercises -> book.

## Layout
| Path | What |
|---|---|
| `00 Course info/` | Course guide (syllabus, chapters per week), tutorial schedule |
| `Public Economics (Delfgaauw)/Week N - <topic>/{Lectures,Exercises,Notes}/` | Public part, by week |
| `Personnel Economics (Dur)/{Lectures,Exercises and answers}/` | Personnel part, by topic set |
| `Past exams/{Finals,Resits,Midterms}/` | Past exams; `(with solutions)` = grading scheme |
| `Textbooks/` | Book PDFs + per-chapter Markdown in `Rosen & Gayer (md)/` and `Kuhn - Personnel Economics (md)/` |
| `map/` | **The exam map** - start at `map/EXAM-MAP.md`; topic IDs in `map/TOPICS.md` |
| `map/_work/` | Raw analysis tables the map is built from (exercise maps, tagged exam bank, book question triage) |
| `progress/` | One file per person (`progress/<name>.md`). **Only edit the file of the person you are working for.** |
| `tools/` | `convert_to_md.py` regenerates the `.md` text twins |

## Rules
1. **Every source file has a `.md` twin** with the same name (PDF pages / slides marked). Read the `.md`; open the original only when formulas or figures are garbled. After adding a new PDF/PPTX/DOCX/XLSX, run `python tools/convert_to_md.py`.
2. **Never delete or rename source files** without the user's say-so; the map links to them by path.
3. **Tag with topic IDs from `map/TOPICS.md`.** Add new IDs there (with book source) rather than inventing them elsewhere.
4. **The textbook is the source of truth** (Rosen & Gayer 10th ed., Kuhn). Lectures and tutorials select from it. Cite book material as `R&G 15.2, pdf p. 500-503` or `Kuhn 17.1, pdf p. 303`.
5. Book page markers (`<!-- pdf p. N -->`) are PDF page numbers, not printed page numbers.
6. Exam answer style matters: verbal parts are graded on 1-4 sentence intuition, no maths in words. See the "Answering style rules" in `map/_work/exams-tagged.md`.
