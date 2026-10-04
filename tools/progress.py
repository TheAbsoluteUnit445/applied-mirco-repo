"""Per-person progress tracking for the exam map.

Commands (run from the repo root):
  python tools/progress.py template        regenerate progress/_TEMPLATE.md from the map
  python tools/progress.py sync <name>     create/update progress/<name>.md (keeps your scores, adds new items)
  python tools/progress.py struggles       rebuild progress/STRUGGLES.md from everyone's files

Items are read from map/_work/: tutorial exercises (exercises-public.md, exercises-personnel.md),
past-exam questions (exams-tagged.md) and MUST book questions (book-questions-*.md).
Each person only ever edits their own progress/<name>.md, so there are no merge conflicts.
"""
import re
import sys
from collections import OrderedDict, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WORK = ROOT / "map" / "_work"
PROG = ROOT / "progress"
ID_RE = re.compile(r"\b(?:PUB|PER)-[A-Z0-9-]+[A-Z0-9]\b")
COLS = ["Item", "Topics", "Attempts", "Conf (0-3)", "Last", "Notes"]
EXAM_NAMES = {"F24": "Final Oct 2024", "F25": "Final Oct 2025", "R25": "Resit Jul 2025",
              "R26": "Resit Jul 2026", "M23": "Midterm 2023", "M25": "Midterm 2025"}


def rows(path):
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.startswith("|") and not re.match(r"^\|\s*-", line):
            yield [c.strip() for c in line.strip().strip("|").split("|")]


def add(groups, section, key, cells, cols=slice(0, 4)):
    ids = ID_RE.findall(" ".join(cells[cols]))
    groups[section].setdefault(key, set()).update(ids)


def collect():
    g = OrderedDict((s, OrderedDict()) for s in [
        "Public tutorial exercises", "Personnel tutorial exercises",
        "Past exam questions", "Book questions (MUST)"])
    for c in rows(WORK / "exercises-public.md"):
        if len(c) > 2 and (m := re.match(r"^(W\d Ex\d+\.\d+)[a-z]*$", c[1])):
            add(g, "Public tutorial exercises", m.group(1), c)
    for c in rows(WORK / "exercises-personnel.md"):
        if len(c) > 2 and (m := re.match(r"^(T\d Ex\d+\.\d+)[a-z]*$", c[1])):
            add(g, "Personnel tutorial exercises", m.group(1), c)
    for c in rows(WORK / "exams-tagged.md"):
        if len(c) > 5 and c[0] in EXAM_NAMES and (m := re.match(r"^(\d+)", c[1])):
            add(g, "Past exam questions", f"{c[0]} Q{m.group(1)}", c, slice(5, 6))
    for fn, book in [("book-questions-rosen.md", "R&G"), ("book-questions-kuhn.md", "Kuhn")]:
        for c in rows(WORK / fn):
            if len(c) > 5 and re.match(r"^\d+\.\d+$", c[0]) and any("MUST" in x for x in c[4:6]):
                add(g, "Book questions (MUST)", f"{book} {c[0]}", c)
    return g


def parse_person(path):
    data = {}
    if path.exists():
        for c in rows(path):
            if len(c) >= 6 and c[0] not in ("Item",):
                data[c[0]] = c
    return data


def render(name, groups, old):
    out = [f"# Progress - {name}", "",
           "Only the owner edits this file. Conf: 0 = not attempted, 1 = needed the solution, "
           "2 = solved slowly / with a hint, 3 = could solve it cold in exam time. "
           "Attempts = how many times you've done it. Last = date (YYYY-MM-DD).", ""]
    for section, items in groups.items():
        out += [f"## {section}", "", "| " + " | ".join(COLS) + " |", "|" + "---|" * len(COLS)]
        for key, ids in items.items():
            prev = old.get(key)
            topics = ", ".join(sorted(ids))
            vals = prev[2:6] if prev else ["0", "0", "", ""]
            out.append(f"| {key} | {topics} | " + " | ".join(vals) + " |")
        out.append("")
    extra = [k for k in old if not any(k in it for it in groups.values())]
    if extra:
        out += ["## Other (kept from earlier versions)", "", "| " + " | ".join(COLS) + " |", "|" + "---|" * len(COLS)]
        out += ["| " + " | ".join(old[k][:6]) + " |" for k in extra]
    return "\n".join(out) + "\n"


def struggles():
    people = {p.stem: parse_person(p) for p in sorted(PROG.glob("*.md"))
              if not p.stem.startswith("_") and p.stem != "STRUGGLES"}
    stuck, helpers, topic_scores = defaultdict(list), defaultdict(list), defaultdict(lambda: defaultdict(list))
    for who, data in people.items():
        for key, c in data.items():
            try:
                conf = int(c[3])
            except ValueError:
                continue
            for t in ID_RE.findall(c[1]):
                topic_scores[t][who].append(conf)
            if conf == 1 or (conf == 2 and c[5]):
                stuck[key].append(f"{who} ({conf}{': ' + c[5] if c[5] else ''})")
            if conf == 3:
                helpers[key].append(who)
    names = list(people)
    out = ["# Group struggles (generated - do not edit)", "",
           f"Built by `python tools/progress.py struggles` from: {', '.join(names) or 'nobody yet'}.", "",
           "## Average confidence per topic", "",
           "| Topic | " + " | ".join(names) + " |", "|---|" + "---|" * len(names)]
    for t in sorted(topic_scores):
        cells = []
        for n in names:
            v = topic_scores[t].get(n, [])
            cells.append(f"{sum(v) / len(v):.1f}" if v else "-")
        out.append(f"| {t} | " + " | ".join(cells) + " |")
    out += ["", "## Stuck items (conf 1, or conf 2 with a note) - and who can help (conf 3)", "",
            "| Item | Stuck | Can help |", "|---|---|---|"]
    for k in sorted(stuck):
        out.append(f"| {k} | {'; '.join(stuck[k])} | {', '.join(helpers.get(k, [])) or '-'} |")
    (PROG / "STRUGGLES.md").write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"STRUGGLES.md built from {len(names)} progress file(s), {len(stuck)} stuck item(s)")


def main():
    PROG.mkdir(exist_ok=True)
    cmd = sys.argv[1] if len(sys.argv) > 1 else "template"
    if cmd == "template":
        g = collect()
        (PROG / "_TEMPLATE.md").write_text(render("<your name>", g, {}), encoding="utf-8")
        print("template:", {s: len(i) for s, i in g.items()})
    elif cmd == "sync":
        name = sys.argv[2]
        path = PROG / f"{name}.md"
        path.write_text(render(name, collect(), parse_person(path)), encoding="utf-8")
        print("synced", path)
    elif cmd == "struggles":
        struggles()
    else:
        sys.exit(__doc__)


if __name__ == "__main__":
    main()
