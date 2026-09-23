# Decision log

Every owner decision across the Lantern Learn repos, numbered `D<n>`. How
decisions are asked and recorded: see `CLAUDE.md`. Newest last.

Status values: **Decided** (owner chose), **Default (Claude)** (reasonable
default, owner may revisit), **Done** (decided and fully implemented),
**Open** (waiting on the owner).

## Open

| ID | Question | Options | Notes |
| --- | --- | --- | --- |
| D16 | Merge rocket-and-raven-press PR #40 (feedback, narration, Character Bible, dashboard fix)? | Merge now / Review first / Split into separate PRs | CI green. Blocks pushing the Code Crew G2 sample (only one push branch). https://github.com/cbrock84/rocket-and-raven-press/pull/40 |
| D17 | Privacy policy wording for parent feedback | Owner writes it / Claude drafts for review | Facts: rating, note, course/week and account email, kept until account deletion. |
| D18 | Re-export the four character images without the Nike swoosh on the sneakers | Owner re-exports / Claude generates cleaned versions for approval | Bible forbids real-world corporate logos. Published lesson crops do not show the shoes; raw files in `public/assets/brand/characters/` do. |
| D19 | Tag lantern-ui `v0.1.0` | Owner creates the tag / leave sites pinned to commit `7add6fe` | Claude cannot push tags. https://github.com/cbrock84/lantern-ui/releases/new (Tag `v0.1.0`, Target `7add6fe`). |
| D20 | How reading level is set and checked per grade band | Grade-level vocabulary lists / sentence-length caps / a formal readability measure | `standards/content-standards.md` section 2. |
| D21 | Narration voice per imprint | Same "Sparkles for Kids" voice everywhere / one voice per imprint (owner picks in ElevenLabs) | Rocket & Raven uses Sparkles today. |
| D22 | Paper size for printable PDFs | US Letter only / US Letter and A4 | Content standards section 8. |
| D23 | Short-story length and structure per grade band | Owner sets targets / Claude proposes a table for approval | Content standards section 8. |
| D24 | Fox & Fern character cast | Owner describes the cast / Claude proposes options built around the logo fox / no cast | `bibles/fox-and-fern.md`. |

## Log

### D1: Crew Recruit reward
- **Question:** The "sticker pack" reward implied mailing physical items, but no mailing addresses are collected.
- **Choice:** Drop the mailed sticker pack; use the existing digital diploma.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done (rocket-and-raven-press).

### D2: GA4 analytics
- **Choice:** Keep GA4 as is; keep the corrected privacy-policy text.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.

### D3: Bundles with fewer courses than advertised
- **Choice:** No discount; add an "unlocks as it ships" note.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.

### D4: CI not running on PRs
- **Choice:** Investigate. Root cause: the workflow was disabled manually; owner re-enabled it.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.

### D5: Pricing for Rocket & Raven courses
- **Options:** Keep paid / Free permanently / Free for now.
- **Choice:** Free for now (`FREE_ACCESS_MODE`), to mature the courses on real feedback; Stripe wiring kept dormant.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done (rocket-and-raven-press #39, rocketandraven-site #8, #9).

### D6: Standardize the four sites
- **Choice:** A real shared component package (`@lanternlearn/ui`, this repo) for all four site groups; blogs get structure only, no articles yet.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done (lantern-ui #1, site adoption PRs).

### D7: Where parent feedback goes
- **Choice:** Stored per parent, emailed to `SUPPORT_EMAIL`, listed at `/admin/feedback`; parent-facing pages only, never kids' workbook pages.
- **Date:** 2026-09-23. **Decided by:** Default (Claude). **Status:** In review (rocket-and-raven-press #40).

### D8: ElevenLabs narration
- **Choice:** Port the unmerged `feat/lesson-narration` branch; use the existing `ELEVENLABS_API_KEY` secret; widen to every story day of every live course, one week per generation run.
- **Date:** 2026-09-23. **Decided by:** owner (port), Default (Claude) (scope). **Status:** In review (rocket-and-raven-press #40).

### D9: Rocket & Raven canon
- **Choice:** Character Bible v1.0: Rocket (boy inventor), Raven (Black girl explorer), Nova (AI drone-bird). Replaces the old "rocket-ship mascot / raven bird" description.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided (`bibles/rocket-and-raven.md`).

### D10: Format for the other imprints
- **Choice:** Free online workbooks (same engine as the Rocket & Raven courses), optional free PDF for printing, and short stories readable on a tablet.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.

### D11: Standards and bibles
- **Choice:** Draft a Lantern Learn content-standards document and skeleton bibles for Fox & Fern and Holly & Hare.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Drafted (`standards/`, `bibles/`).

### D12: Home for the log, standards and bibles
- **Options:** lantern-ui repo / lanternlearn-site repo / each imprint's own repo.
- **Choice:** lantern-ui repo, with a pointer in every other repo's `CLAUDE.md`.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.

### D13: Address of the shared learning platform
- **Options:** learn.lanternlearn.com / stay at courses.rocketandraven.com / one subdomain per imprint.
- **Choice:** learn.lanternlearn.com, with redirects from courses.rocketandraven.com.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided, not started.

### D14: Holly & Hare characters
- **Options:** Stay mascot-free / small understated cast / decide later.
- **Choice:** Stay mascot-free; its bible is a voice, design and puzzle-writing guide.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided (`bibles/holly-and-hare.md`).

### D15: Fox & Fern blog post style
- **Options:** Keep the shared style / restore the old look.
- **Choice:** Keep the shared style (white header, green bullets).
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
