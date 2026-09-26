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
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
- **Links:** lantern-ui #3 and the pointer PRs in D25.

### D13: Address of the shared learning platform
- **Question:** Where should the shared learning platform (workbooks, stories, narration for all imprints) live?
- **Options:** learn.lanternlearn.com / stay at courses.rocketandraven.com / one subdomain per imprint.
- **Choice:** learn.lanternlearn.com, with redirects from courses.rocketandraven.com.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
- **Progress:** Live on 2026-09-25. Every page on courses.rocketandraven.com answers with a 301 to the same path on learn.lanternlearn.com, sign-in links included; payment webhooks and the other APIs are served on both hosts. Canonical tags, the sitemap and the public catalog feed use the new host, and the marketing site links there. The shared footer's "Online courses" link (`src/network.ts`) points at the new host too; the sites show it once their lantern-ui pin moves past `7add6fe` (D40). Until then the redirect keeps the old footer link working.
- **Links:** rocket-and-raven-press #52, #53 and #54; rocketandraven-site #13; lantern-ui #12.

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
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
- **Progress:** Drafted in rocket-and-raven-press #41; approved in D26.
- **Links:** https://github.com/cbrock84/rocket-and-raven-press/pull/41.

### D18: Nike swoosh on the character art
- **Question:** The character art shows a Nike swoosh on both kids' sneakers, which the bible forbids. How should it be fixed?
- **Options:** Owner re-exports / Claude tries an AI edit for approval / leave for now.
- **Choice:** Claude tries an AI edit that removes the swoosh from the character PNGs and sends them for approval before replacing anything. The owner approved all three edits (Rocket, Raven, crew).
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
- **Progress:** PNGs replaced and Code Crew G1 lesson art regenerated; the owner confirmed the result.
- **Links:** https://github.com/cbrock84/rocket-and-raven-press/pull/42.

### D25: Merge the rules PRs
- **Question:** Merge lantern-ui #3 and the `CLAUDE.md` pointer PRs?
- **Options:** Merge all now / lantern-ui #3 only / review first.
- **Choice:** Merge all now.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
- **Links:** lantern-ui #3, lanternlearn-site #4, foxandfernbooks-site #4, hollyandhare-site #5, rocketandraven-site #11.

### D26: Privacy wording for parent feedback
- **Question:** Merge the drafted "Course feedback" privacy-policy section (D17)?
- **Options:** Merge as written / change wording first.
- **Choice:** Merge as written.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Done.
- **Links:** https://github.com/cbrock84/rocket-and-raven-press/pull/41.

### D27: Code Crew G2 direction
- **Question:** Build Code Crew G2 weeks 2 to 12 in the direction of the week-1 sample?
- **Options:** Build weeks 2 to 12 / revise week 1 first / pause G2.
- **Choice:** Build weeks 2 to 12 on the G1 generator, opened as an unpublished PR for review.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.
- **Progress:** All 12 weeks built; publishing decided in D29.
- **Links:** https://github.com/cbrock84/rocket-and-raven-press/pull/44.

### D28: Code Crew G2 page design
- **Question:** Light pages with big type (as G1) or a dark page design for G2?
- **Options:** Light, big type / dark page.
- **Choice:** Light, big type, matching G1.
- **Date:** 2026-09-23. **Decided by:** owner. **Status:** Decided.

### D29: Code Crew G2 release
- **Question:** Code Crew G2 (all 12 weeks) is green. What next?
- **Options:** Merge and keep unpublished, then preview / review in the PR first / merge and publish now.
- **Choice:** Merge and publish now.
- **Date:** 2026-09-24. **Decided by:** owner. **Status:** Done.
- **Progress:** Live on courses.rocketandraven.com; the marketing page was corrected in rocketandraven-site #12.
- **Links:** https://github.com/cbrock84/rocket-and-raven-press/pull/44.

### D30: CCSS SL.2.1 on Code Crew G2
- **Question:** Weeks 9 to 12 cited CCSS SL.2.1 for the Saturday talk with a grown-up, a loose match. Keep it?
- **Options:** Drop it / keep it.
- **Choice:** Drop it; cite only standards that clearly match the activity.
- **Date:** 2026-09-24. **Decided by:** owner. **Status:** Done.
- **Links:** https://github.com/cbrock84/rocket-and-raven-press/pull/44.

### D31: No text mode in Code Crew G2
- **Question:** The old G2 description promised an optional text mode. Build one?
- **Options:** Tap-only, as G1 / add a typed text mode.
- **Choice:** Tap-only; kids never type. The course description was corrected.
- **Date:** 2026-09-23. **Decided by:** Claude (default). **Status:** Done.
- **Links:** https://github.com/cbrock84/rocket-and-raven-press/pull/44.

### D32: The Code Crew G2 auto-pilot bug
- **Question:** What exactly is the bug the G2 mystery builds toward?
- **Options:** Not recorded as a multiple-choice question.
- **Choice:** Inside the job `check height`, the line `if steps over 4` reads the wrong box; the fix is `if height over 4`. Clues: Week 4 (the drop comes when `steps` reaches 5) and Week 8 (the drop is inside `check height`).
- **Date:** 2026-09-23. **Decided by:** Claude (default). **Status:** Done.
- **Links:** `scripts/code-crew-g2-gen/PLAN.md` in rocket-and-raven-press.

### D33: Voice service for exercise audio
- **Question:** Which text-to-speech service records the exercise lines (instructions, questions, feedback) for Code Crew K, G1 and G2, about 5,800 lines and 690,000 characters?
- **Options:** ElevenLabs, same voice as the stories / Google Chirp 3 HD / OpenAI gpt-4o-mini-tts / Cloudflare Workers AI.
- **Choice:** Cloudflare Workers AI, Deepgram Aura-2 (about $0.03 per 1,000 characters, roughly $21 for the three courses). The story narration stays on ElevenLabs. Default speaker `luna` (Claude default); the owner can audition and change the speaker in the admin area.
- **Date:** 2026-09-24. **Decided by:** owner. **Status:** Decided.
- **Links:** https://github.com/cbrock84/rocket-and-raven-press/pull/45.

### D19: Tag lantern-ui `v0.1.0`
- **Question:** Tag lantern-ui `v0.1.0` so the sites point at a named release?
- **Options:** Owner creates the tag / leave sites pinned to commit `7add6fe`.
- **Choice:** Leave the sites pinned to commit `7add6fe`.
- **Date:** 2026-09-24. **Decided by:** owner. **Status:** Done.

### D20: Reading level per grade band
- **Question:** How is reading level set and checked per grade band?
- **Options:** Sentence-length caps / grade vocabulary lists / a formal readability score.
- **Choice:** Sentence-length caps per grade band, enforced by an automated test.
- **Date:** 2026-09-24. **Decided by:** owner. **Status:** Decided.
- **Progress:** Caps set with D23 (6 words for Pre-K up to 22 for Grade 6+). Test for day stories in rocket-and-raven-press #54; exercise lines next.
- **Links:** `standards/content-standards.md` section 2.

### D21: Narration voice per imprint
- **Question:** Which story narration voice does each imprint use?
- **Options:** "Sparkles for Kids" everywhere / one voice per imprint.
- **Choice:** "Sparkles for Kids" for story narration in every imprint. Exercise lines stay on Workers AI (D33).
- **Date:** 2026-09-24. **Decided by:** owner. **Status:** Decided.
- **Links:** `standards/content-standards.md` section 6.

### D22: Paper size for printable PDFs
- **Question:** Which paper sizes do the printable PDFs support?
- **Options:** US Letter only / US Letter and A4.
- **Choice:** US Letter only.
- **Date:** 2026-09-24. **Decided by:** owner. **Status:** Decided.
- **Links:** `standards/content-standards.md` section 8.

### D34: Auto-record lesson audio on publish
- **Question:** When new or changed lessons go live, what records automatically?
- **Options:** Exercise lines only / exercise lines and stories.
- **Choice:** Exercise lines (Workers AI) and story narration (ElevenLabs). Only missing lines and changed story text are recorded.
- **Date:** 2026-09-24. **Decided by:** owner. **Status:** Done.
- **Progress:** Live. The first automatic run after the merge started by itself and found nothing missing. Next: D13, the move to learn.lanternlearn.com (owner, 2026-09-24).
- **Links:** https://github.com/cbrock84/rocket-and-raven-press/pull/50.

### D35: Auto-play on lesson pages
- **Question:** How should auto-play work on the lesson pages?
- **Options:** Auto-play on with a switch to turn it off / auto-play off with a switch to turn it on / no auto-play.
- **Choice:** On by default. After the kid's first tap, an activity's question plays when it scrolls into view and each new round's question when it comes up. An "Auto-play" switch turns it off; the device remembers it. "Hear again" became a Play/Pause button.
- **Date:** 2026-09-24. **Decided by:** owner. **Status:** Decided.
- **Links:** https://github.com/cbrock84/rocket-and-raven-press/pull/51.

### D36: Answer feedback while a question is being read
- **Question:** Clips now always finish. When the kid answers while a question is still being read, what happens?
- **Options:** Feedback waits / feedback cuts in.
- **Choice:** Feedback waits for the question to finish; only the latest waiting line plays.
- **Date:** 2026-09-24. **Decided by:** owner. **Status:** Decided.
- **Links:** https://github.com/cbrock84/rocket-and-raven-press/pull/51.

### D24: Fox & Fern character cast
- **Question:** Does Fox & Fern have a character cast, and who is in it?
- **Options:** Owner describes the cast / Claude proposes options / no cast.
- **Choice:** The owner's cast: the twelve Tomorrow Trail characters led by Ferris the Fox (Hazel, Rosie, Lizzy, Bruce, Oliver, Donnie, Riley, Samantha, Benny, Chris the Coyote as narrator, Freddy).
- **Date:** 2026-09-25. **Decided by:** owner. **Status:** Done.
- **Links:** `bibles/fox-and-fern.md`; source `KDP/01 - Fox & Fern/Tomorrow Trail/02-CHARACTER-BIBLE.md` in the owner's OneDrive.

### D37: Home of the Tomorrow Trail companion pages
- **Question:** Where do the companion pages behind each trail stop's QR code live?
- **Options:** learn.lanternlearn.com / a separate trailtotomorrow.com site.
- **Choice:** learn.lanternlearn.com, on the shared platform (D13).
- **Date:** 2026-09-25. **Decided by:** owner. **Status:** Decided.
- **Progress:** The platform is live at learn.lanternlearn.com (D13). The Tomorrow Trail pages are not built yet.

### D38: Reach of the Tomorrow Trail cast
- **Question:** Does the Tomorrow Trail cast cover every Fox & Fern line or only Tomorrow Trail?
- **Options:** All Fox & Fern / Tomorrow Trail only.
- **Choice:** All Fox & Fern, the new short stories included.
- **Date:** 2026-09-25. **Decided by:** owner. **Status:** Done.
- **Links:** `bibles/fox-and-fern.md`.

### D39: Tomorrow Trail daily time, answer keys and page count
- **Question:** The site copy and the owner's series documents disagree (15 to 20 or 10 to 15 minutes a day; answer keys in the back or online; 158 pages). Which is right?
- **Options:** The documents / the site. The owner asked Claude to weigh both and pick the more accurate, educational and realistic, and dropped page-count targets for the digital-first version.
- **Choice:** Grade-banded time (10 to 15 minutes for Pre-K→K and K→1, 15 to 20 for 1→2 to 4→5); answers checked as the child works, with the full key in the parent area and the optional PDF; no page-count target. The site keeps describing the printed books until the digital version launches.
- **Date:** 2026-09-25. **Decided by:** Claude (default, at the owner's request). **Status:** Decided.
- **Links:** `bibles/fox-and-fern.md`.

### D23: Short-story length and structure per grade band
- **Question:** How long should stories be, and how are they built, in each grade band?
- **Options:** Claude proposes a table / owner sets targets.
- **Choice:** The owner asked Claude to propose. The table in content standards section 2 sets, per band, a sentence cap (D20), a length for the short story that opens each lesson day, a length for standalone short stories and a structure; a second table sets words per screen, screens per story and illustrations. It is based on the live Code Crew stories: every K, G1 and G2 day story already fits; one Code Crew G3 sentence (16 words) was over the Grade 3 cap of 15.
- **Date:** 2026-09-25. **Decided by:** Claude (default, at the owner's request); approved by the owner 2026-09-26. **Status:** Decided.
- **Progress:** Table written. The D20 test for day stories and the G3 fix: rocket-and-raven-press #54. Exercise lines are not checked yet.
- **Links:** `standards/content-standards.md` section 2.

### D40: Move the sites' lantern-ui pin
- **Question:** Move the four sites' lantern-ui pin from `7add6fe` to current main, so the shared footer's "Online courses" link shows learn.lanternlearn.com?
- **Options:** Move the pin in all four sites / leave pinned (D19).
- **Choice:** Move the pin. Supersedes D19's pin for these sites.
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Decided.

### D41: Reading level of exercise lines
- **Question:** Exercise lines (instructions, questions, feedback) are often over the D23 sentence caps (about 450 lines in K, 1,360 in G1, 800 in G2, 12 in G3), and some are grown-up text. What happens to them?
- **Options:** Sort kid-facing from grown-up lines, then rewrite the kid-facing ones / report only / leave for now.
- **Choice:** Leave for now. Only day stories are checked (rocket-and-raven-press #54).
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Decided.

### D42: Next build
- **Question:** What to build next?
- **Options:** Tomorrow Trail on the platform / Holly & Hare workbooks / Code Crew G3 polish.
- **Choice:** Tomorrow Trail on the platform (D37, D38).
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Decided.
