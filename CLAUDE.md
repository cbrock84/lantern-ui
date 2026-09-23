# Working rules for the Lantern Learn repos

This repo is the central home for Lantern Learn's shared code (`src/`), the
decision log (`decisions.md`), content standards (`standards/`) and the imprint
bibles (`bibles/`). Every other Lantern Learn repo points here from its own
`CLAUDE.md`.

## Decisions: always ask interactively, always log

1. Surface every decision the owner needs to make as a multiple-choice question
   (the AskUserQuestion tool), never as an open-ended question buried in prose.
   Put the recommended option first and label it "(Recommended)". Give each
   option a one-line description of its consequence. Ask up to four at a time.
2. Number each decision `D<n>`, continuing from the highest number in
   `decisions.md`, and put the number in the question text (e.g. "D16: ...").
3. Before asking, check `decisions.md` for an earlier decision on the same topic.
   If one exists, follow it, or ask whether to revisit it, citing its number.
4. After the answer, add or update the entry in `decisions.md` in the same
   change set as the work it affects: question, options, choice, date, who
   decided, status and links (PRs, files).
5. A reasonable default Claude picks without asking is still logged, marked
   `Default (Claude)`, so the owner can revisit it.
6. Keep the "Open" section of `decisions.md` current: anything waiting on the
   owner is listed there with its D number until it is answered.

## Content

- Anything written for children follows `standards/content-standards.md` and
  the relevant bible in `bibles/`.
- Never invent facts, sources, standards codes or citations. If something
  cannot be verified, leave it out and say so.
