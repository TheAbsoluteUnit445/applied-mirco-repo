# How to use this exam manual (for friends / new users)

This repo is a shared study system for **Applied Microeconomics FEB12001X** (Erasmus, final exam Fri 23 Oct 2026, 09:30-12:30). It maps **what the exam asks** to **which exercises train it** and **which book sections fill the gaps**, and lets a study group see where everyone is struggling.

## 1. Get it
1. Ask the repo owner to add you as a collaborator on GitHub.
2. `git clone https://github.com/TheAbsoluteUnit445/applied-mirco-repo`
3. Open the folder in any Markdown viewer. Obsidian works well: *Open folder as vault*.

## 2. Read the map
- **`map/EXAM-MAP.md`**: start here. It shows which topics carry the most exam weight, the recurring question templates, the gaps, and the must-read book sections.
- **`map/topics/<ID>.md`**: one page per topic, linking every exam question, tutorial exercise, book section and book exercise for that topic.
- **`map/TOPICS.md`**: the list of topic IDs everything is tagged with.
- The source material sits in the week/topic folders. Every PDF has a `.md` text version next to it.

## 3. Track your own progress without touching anyone else's
1. Run `python tools/progress.py sync <your-name>`. This creates `progress/<your-name>.md` with every tutorial exercise, past-exam question and MUST book question. Re-run it whenever the map gains new items (e.g. Week 6 exercises); your scores are kept.
2. Fill in **only your own file**: attempts, confidence 0-3, and notes per exercise and exam question.
3. Commit and push only that file:
   ```
   git add progress/<your-name>.md
   git commit -m "progress: <your-name>"
   git pull --rebase
   git push
   ```
   Everyone writes to a different file, so there are no merge conflicts.

**Never edit someone else's progress file.** The map files are maintained by the repo owner and their agent. If you think something is wrong, open an issue or tell them.

## 4. See where the group struggles
Run `python tools/progress.py struggles`. It reads every `progress/*.md` and regenerates `progress/STRUGGLES.md`: per exercise and topic, who is at confidence 0-1. Use it to split work. Whoever is confident on a topic explains it to the others.

## 5. Confidence scale
| Score | Meaning |
|---|---|
| 0 | Not attempted |
| 1 | Attempted, needed the solution |
| 2 | Solved, but slowly or with a hint |
| 3 | Could solve it cold, under exam time |

The goal is 3 on everything the map marks **MUST**, by about 16 Oct. That leaves the final week for full past exams under timed conditions.

## 6. Using an AI agent on this repo
Point your agent at `AGENTS.md` first. Tell it your name so it only edits `progress/<your-name>.md`.
