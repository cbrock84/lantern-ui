# Decision log

Every owner decision across the Lantern Learn repos, numbered `D<n>`. How
decisions are asked and recorded: see `CLAUDE.md`. Newest last.

## Entry format

Every entry has these fields:

- **Question**: what was being decided.
- **Options**: the choices offered. "Not recorded" means the decision predates
  this log and the rejected options were not written down at the time.
- **Choice**: what was chosen.
- **Date**.
- **Decided by**: `owner`, or `Claude (default)`. A default is a reasonable
  choice Claude made without asking; the owner may revisit it.
- **Status**: one of **Open** (waiting on the owner), **Decided** (chosen, work
  not finished), or **Done** (chosen and fully implemented).
- **Progress**: optional, a short note on implementation state.
- **Links**: PRs and files.

## Open

| ID | Question | Options | Notes |
| --- | --- | --- | --- |
| D19 | Tag lantern-ui `v0.1.0` | Owner creates the tag / leave sites pinned to commit `7add6fe` | Claude cannot push tags. https://github.com/cbrock84/lantern-ui/releases/new (Tag `v0.1.0`, Target `7add6fe`). |
| D20 | How reading level is set and checked per grade band | Grade-level vocabulary lists / sentence-length caps / a formal readability measure | `standards/content-standards.md` section 2. |
| D21 | Narration voice per imprint | Same "Sparkles for Kids" voice everywhere / one voice per imprint (owner picks in ElevenLabs) | Rocket & Raven uses Sparkles today. |
| D22 | Paper size for printable PDFs | US Letter only / US Letter and A4 | Content standards section 8. |
| D23 | Short-story length and structure per grade band | Owner sets targets / Claude proposes a table for approval | Content standards section 8. |
| D24 | Fox & Fern character cast | Owner describes the cast / Claude proposes options built around the logo fox / no cast | `bibles/fox-and-fern.md`. |

## Log

### D1: Crew Recruit reward
- **Question:** The Crew Recruit "sticker pack" reward implied mailing physical items, but no mailing addresses are collected. What should the reward be?
- **Options:** Not recorded.
- **Choice:** Drop the mailed sticker pack; use the existing digital diploma.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
- **Links:** rocket-and-raven-press.

### D2: GA4 analytics
- **Question:** Keep Google Analytics 4 on the sites, and how the privacy policy describes it.
- **Options:** Not recorded.
- **Choice:** Keep GA4 as is; keep the corrected privacy-policy text.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.

### D3: Bundles with fewer courses than advertised
- **Question:** The 5-pack and subscription bundles include fewer live courses than advertised. Discount them?
- **Options:** Not recorded.
- **Choice:** No discount; add an "unlocks as it ships" note.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.

### D4: CI not running on PRs
- **Question:** GitHub Actions CI had not run on any recent PR. What to do?
- **Options:** Not recorded.
- **Choice:** Investigate.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
- **Progress:** Root cause: the workflow had been disabled manually; the owner re-enabled it.

### D5: Pricing for Rocket & Raven courses
- **Question:** How should the Rocket & Raven courses be priced?
- **Options:** Keep paid / Free permanently / Free for now.
- **Choice:** Free for now (`FREE_ACCESS_MODE`), to mature the courses on real feedback; Stripe wiring kept dormant.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
- **Links:** rocket-and-raven-press #39, rocketandraven-site #8, #9.

### D6: Standardize the four sites
- **Question:** How to make the four sites cohesive and manage them centrally.
- **Options:** Chosen: a real shared component package now; blogs with structure only tonight; all four site groups. Other options not recorded.
- **Choice:** A shared component package (`@lanternlearn/ui`, this repo) for all four site groups; blogs get structure only, no articles yet.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
- **Links:** lantern-ui #1, lanternlearn-site #3, foxandfernbooks-site #3, hollyandhare-site #3, #4, rocketandraven-site #10.

### D7: Where parent feedback goes
- **Question:** Where should parent course feedback be stored and read?
- **Options:** Admin page in the app / email to the owner / an existing tool.
- **Choice:** Stored per parent, emailed to `SUPPORT_EMAIL`, listed at `/admin/feedback`. The form appears on parent-facing pages only, never on kids' workbook pages.
- **Date:** 2026-09-23. **Decided by:** Claude (default). **Status:** Done.
- **Links:** rocket-and-raven-press #40.

### D8: ElevenLabs narration
- **Question:** Ship the unmerged ElevenLabs narration work, and for which content?
- **Options:** Not recorded as a multiple-choice question. The owner confirmed the `ELEVENLABS_API_KEY` secret exists.
- **Choice:** Port `feat/lesson-narration` to current main and use the existing secret. Scope, chosen by Claude as a default: every story day of every live course, generated one week per run.
- **Date:** 2026-09-23. **Decided by:** owner (port), Claude (default) (scope). **Status:** Done.
- **Links:** rocket-and-raven-press #40.

### D9: Rocket & Raven canon
- **Question:** Are Rocket and Raven kid characters or mascots (a rocket ship and a raven bird)?
- **Options:** Kids (inventor and explorer) / mascots.
- **Choice:** Character Bible v1.0: Rocket (boy inventor), Raven (Black girl explorer), Nova (AI drone-bird). This replaces the old "rocket-ship mascot / raven bird" description.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
- **Links:** `bibles/rocket-and-raven.md`, rocket-and-raven-press #40.

### D10: Format for the other imprints
- **Question:** What should Fox & Fern and Holly & Hare publish?
- **Options:** Not recorded (stated by the owner).
- **Choice:** Free online workbooks on the same engine as the Rocket & Raven courses, an optional free PDF for printing, and short stories readable on a tablet.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.

### D11: Standards and bibles
- **Question:** Draft the content standards and skeleton bibles now, or wait for the owner's character descriptions?
- **Options:** Draft now with gaps marked / wait for the owner's input.
- **Choice:** Draft a Lantern Learn content-standards document and skeleton bibles for Fox & Fern and Holly & Hare.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.
- **Progress:** Drafts in `standards/` and `bibles/`; creative sections await the owner.

### D12: Home for the log, standards and bibles
- **Question:** Where should the decision log, content standards and imprint bibles live?
- **Options:** lantern-ui repo / lanternlearn-site repo / each imprint's own repo.
- **Choice:** lantern-ui repo, with a pointer in every other repo's `CLAUDE.md`.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.
- **Links:** lantern-ui #3 and the pointer PRs in D25.

### D13: Address of the shared learning platform
- **Question:** Where should the shared learning platform (workbooks, stories, narration for all imprints) live?
- **Options:** learn.lanternlearn.com / stay at courses.rocketandraven.com / one subdomain per imprint.
- **Choice:** learn.lanternlearn.com, with redirects from courses.rocketandraven.com.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.
- **Progress:** Not started.

### D14: Holly & Hare characters
- **Question:** Should Holly & Hare get a character cast?
- **Options:** Stay mascot-free / small understated cast / decide later.
- **Choice:** Stay mascot-free; its bible is a voice, design and puzzle-writing guide.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
- **Links:** `bibles/holly-and-hare.md`.

### D15: Fox & Fern blog post style
- **Question:** Keep the shared article style on Fox & Fern blog posts?
- **Options:** Keep the shared style / restore the old look.
- **Choice:** Keep the shared style (white header, green bullets).
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.

### D16: Merge rocket-and-raven-press PR #40
- **Question:** Merge PR #40 (feedback, narration, Character Bible, dashboard fix)?
- **Options:** Merge now / review first / split into separate PRs.
- **Choice:** Merge now.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
- **Links:** https://github.com/cbrock84/rocket-and-raven-press/pull/40.

### D17: Privacy policy wording for parent feedback
- **Question:** Who writes the privacy-policy wording for parent feedback?
- **Options:** Claude drafts for review / owner writes it.
- **Choice:** Claude drafts a short factual paragraph (what is collected, why, how long, how to delete) in a PR for the owner to approve.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.
- **Progress:** In progress.

### D18: Nike swoosh on the character art
- **Question:** The character art shows a Nike swoosh on both kids' sneakers, which the bible forbids. How should it be fixed?
- **Options:** Owner re-exports / Claude tries an AI edit for approval / leave for now.
- **Choice:** Claude tries an AI edit that removes the swoosh from the character PNGs and sends them for approval before replacing anything.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.
- **Progress:** Edits made and sent to the owner for approval; nothing replaced yet.

### D25: Merge the rules PRs
- **Question:** Merge lantern-ui #3 and the `CLAUDE.md` pointer PRs?
- **Options:** Merge all now / lantern-ui #3 only / review first.
- **Choice:** Merge all now.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.
- **Links:** lantern-ui #3, lanternlearn-site #4, foxandfernbooks-site #4, hollyandhare-site #5, rocketandraven-site #11.
