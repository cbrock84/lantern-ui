# Decision log

Every owner decision across the Lantern Learn repos, numbered `D<n>`. How
decisions are asked and recorded: see `CLAUDE.md`. Entries are in number order.
Since 2026-10-10, parallel work threads take numbers from reserved blocks
(D200-D219, D220-D239, D240-D259, D260-D279, D280 and up) so they don't
collide, so a lower number can be logged after a higher one.

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
- **Progress:** Caps set with D23 (6 words for Pre-K up to 22 for Grade 6+). Test for day stories in rocket-and-raven-press #54. Exercise lines are deferred (D41).
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
- **Note (2026-09-29):** names in this entry predate D77, which renamed the bear Bennie and the bobcat Bruce.
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
- **Date:** 2026-09-26. **Decided by:** owner (approved the table Claude proposed on 2026-09-25 at the owner's request). **Status:** Decided.
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
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Done.

### D42: Next build
- **Question:** What to build next?
- **Options:** Tomorrow Trail on the platform / Holly & Hare workbooks / Code Crew G3 polish.
- **Choice:** Tomorrow Trail on the platform (D37, D38).
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Done.
- **Progress:** All 12 stops are live at https://learn.lanternlearn.com/courses/tomorrow-trail-k1 with every line recorded (D48, D50).
- **Links:** rocket-and-raven-press #55.

### D43: First Tomorrow Trail grade band online
- **Question:** Which grade band goes online first?
- **Options:** K→1 (the only band with a curriculum map and page outline) / Pre-K→K.
- **Choice:** K→1, built from the owner's `grades/k-1/CURRICULUM-MAP.md` and `PAGE-BY-PAGE-OUTLINE.md`.
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Decided.

### D44: Size of the first Tomorrow Trail slice
- **Question:** How big is the first slice?
- **Options:** Stop 1 end to end / all 12 stops at once / companion pages only.
- **Choice:** Stop 1 end to end: its week of online activities and its companion page (read-aloud story, answer key in the parent area, coloring page, badge), published unlisted for the owner's review. The other 11 stops follow.
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Done.
- **Progress:** Stop 1 live and unlisted; answer key at /account/answers/tomorrow-trail-k1/01; QR link /trail/k1/stop-1. Two simplifications from the outline: the Friday maze became a listen-and-find game, and name tracing became writing on a drawing pad (the engine has no tracing activity yet).
- **Links:** rocket-and-raven-press #55.

### D45: Trail stop pages across online days
- **Question:** How do a trail stop's 11 pages split across online days?
- **Options:** 5 days / 4 days / every page its own day.
- **Choice:** 5 days. Mon: Chris's introduction, reading and phonics. Tue: reading activity, writing. Wed: two math pages. Thu: critical thinking, comprehension story. Fri: discovery, weekly review, Freddy's fun page and the stop badge.
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Decided.

### D46: Tomorrow Trail addresses
- **Question:** Where do the Tomorrow Trail pages live on learn.lanternlearn.com?
- **Options:** `/courses/tomorrow-trail-k1` on the course engine / its own `/tomorrow-trail/k1/stop-1` section.
- **Choice:** `/courses/tomorrow-trail-k1`, the same engine and URLs as Code Crew. QR codes use a short `/trail/k1/stop-1` that redirects to the stop.
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Decided.

### D47: Outer look of learn.lanternlearn.com
- **Question:** The platform still wears Rocket & Raven's header and footer everywhere, so a Fox & Fern course page looks like a Rocket & Raven page. What should its outer look be?
- **Options:** Lantern Learn header and footer, with each course page in its imprint's look / imprint look per course only, keeping the Rocket & Raven shell as the default / leave as is for now.
- **Choice:** A neutral Lantern Learn header and footer for the platform, which hosts every imprint (D13). Each course page takes its imprint's logo and colours (Fox & Fern orange and green, Rocket & Raven dark).
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Done.
- **Progress:** Live. The home page's copy still describes Rocket & Raven; rewriting it for Lantern Learn is content work not yet done.
- **Links:** rocket-and-raven-press #56.

### D48: Next piece of work after Stop 1
- **Question:** With Stop 1 live and its audio fixed (rocket-and-raven-press #57), what comes next?
- **Options:** Tomorrow Trail Stop 2 / Lantern Learn home page copy / small fixes (tag contrast, failing login-email test) / all three.
- **Choice:** Tomorrow Trail Stop 2, built end to end like Stop 1 and unlisted for the owner's review.
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Done. Stop 2 shipped after the owner's art review, and Stops 3 to 12 followed; all 12 stops are live.

### D49: Art for Tomorrow Trail Stop 2
- **Question:** Stop 2 needs art the owner's image folder does not have: the stop scene, the Pinecone Pathfinder badge, a Rosie coloring page, rhyme pictures, community helpers and their tools, and a car for "which one doesn't belong". How is it sourced?
- **Options:** simple flat drawings made by Claude, replaced later by the owner's art / AI-generated art, reviewed by the owner before Stop 2 goes live / hold publishing until the owner adds Stop 2 art.
- **Choice:** AI-generated art, matched to the character reference art, with no text, letters or logos (content standards section 7). The owner reviews it before Stop 2 goes live.
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Done. The owner approved the art on 2026-09-27 (see D50).

### D50: Art and new characters for Tomorrow Trail Stops 3 to 12
- **Note (2026-09-29):** names in this entry predate D77, which renamed the bear Bennie and the bobcat Bruce.
- **Question:** Stops 6 to 9 are hosted by Donnie the Deer, Riley the Raccoon, Samantha the Squirrel and Benny the Bobcat, who are in the character bible (D24) but have no art. How are they, and the other new art for Stops 3 to 12, handled?
- **Options:** generate them, owner reviews / use characters that already have art until the owner supplies it / hold Stops 6 to 9 for the owner's art.
- **Choice:** Same as D49 for every remaining stop. The four characters are generated from their bible descriptions in the existing cast's style, then used as references for their stops. Nothing goes live until the owner has reviewed it.
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Done.
- **Progress:** The owner then pointed to Canva, which already holds all twelve characters (color, line and pencil), all twelve badges, 41 icons and group scenes. That art replaces generated art wherever it exists, including the four characters and Stop 2's badge, helpers and tools. The rest (ten stop scenes, 38 icons, two coloring pages, a certificate border) was generated; the owner approved it on 2026-09-27 (see Review) and all 12 stops are live.
- **Review:** On 2026-09-27 the owner approved all 52 generated pictures (11 stop scenes, 38 activity pictures, 3 printables) with no redos, and Stops 2 to 12 went live.
- **Links:** rocket-and-raven-press #58.

### D51: How the character intro videos are made
- **Question:** How should the 30 to 45 second intro videos of each Tomorrow Trail character be made?
- **Options:** hybrid (HyperFrames motion graphics from the owner's art, plus two or three short AI-animated shots per character) / full AI video of each character talking / HyperFrames only.
- **Choice:** Hybrid. HyperFrames builds each video from the owner's Canva art (camera moves, name card, word-by-word captions, end card); Higgsfield animates a few short shots per character.
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Done. All 13 intros (the twelve characters plus Lucy, D54) are made and play on the Tomorrow Trail course page.

### D52: Who speaks in the character intros
- **Note (2026-09-29):** names in this entry predate D77, which renamed the bear Bennie and the bobcat Bruce.
- **Question:** Who speaks in each intro?
- **Options:** each character introduces themself in their own ElevenLabs voice / Chris the Coyote narrates every intro.
- **Choice:** Each character introduces themself, in twelve distinct ElevenLabs voices matched to the bible's voice notes. The owner approves short auditions before the videos are made.
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Done. All 13 intros use the owner's picks (Lucy speaks as Luna, D54).
- **Progress:** The owner picked from three auditions per character (2026-09-27): Ferris Benji, Hazel Daisy, Rosie Zoe, Lizzy Evie, Bruce Bram, Oliver Alistair, Donnie Alden, Riley Quinn, Samantha Gracie, Benny Landon, Chris Gideon, Freddy Evan. Voice ids are in rocket-and-raven-press `video/character-intros/scripts.json`.

### D53: Shapes of the character intro videos
- **Question:** Which shapes should the videos be?
- **Options:** both 16:9 and 9:16 / 16:9 only / 9:16 only.
- **Choice:** Both: 16:9 for course pages and the website, 9:16 for Reels, Shorts and TikTok, rendered from one HyperFrames composition.
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Done.
- **Progress:** All 26 videos (13 characters, each in 16:9 and 9:16) are in R2 (D56).

### D54: Lucy the Ladybug joins the cast
- **Question:** The owner asked for a new character, a ladybug named Lucy. What is her role, and which art and voice does she use?
- **Options:** art: holding a daisy / waving from a big daisy / heart spot and leaf scarf. Voice: Annie / Luna / Isla.
- **Choice:** Lucy is the kindness and feelings friend (naming feelings, calm-down breathing, sharing, taking turns); her seven spots double as a counting helper. Art: waving from a big daisy (generated in the cast's style). Voice: Luna (ElevenLabs). She gets an intro video like the other twelve.
- **Date:** 2026-09-27. **Decided by:** owner (role proposed by Claude, open to change). **Status:** Decided.
- **Progress:** Lucy's color and line art are saved in the owner's Canva design "Fox & Fern Books - Animal Characters - Solo" (pages 13 and 26), and her intro video is made.

### D55: How many animated shots per character intro
- **Question:** A 5-second Higgsfield shot costs 35 credits at 720p. After the Ferris pilot (two shots), how many shots do the other twelve intros get?
- **Options:** one shot each, about 420 credits / two shots each, about 840 credits.
- **Choice:** One shot each, to use fewer credits. The rest of each video is the owner's still art with slow camera moves. Ferris keeps his two pilot shots.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. The twelve other intros have one animated shot each; Ferris has two.

### D56: Where the character intro videos are hosted
- **Question:** Where should the 26 intro videos (about 500 MB, too large for git) live so the site can show them?
- **Options:** Cloudflare R2 / Cloudflare Stream / YouTube (unlisted) / files only for now.
- **Choice:** Cloudflare R2, in the existing public media bucket (`rocket-and-raven-media`), served by the site's `/api/media` route with byte-range support. They play on the Tomorrow Trail pages.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. All 26 videos are in R2, and all 13 play on the Tomorrow Trail course page ("Meet the trail friends").
- **Links:** rocket-and-raven-press #60.

### D57: Brand model across Lantern Learn, the imprints and the series
- **Question:** The sites and the learning platform mix Rocket & Raven, Lantern Learn, Fox & Fern and Tomorrow Trail looks. Should each imprint have its own branding, or should there be one universal look?
- **Options:** one Lantern Learn design system with a small fixed brand skin per imprint / one universal Lantern Learn look / fully separate imprint brands.
- **Choice:** One Lantern Learn design system with imprint skins. Lantern Learn owns structure: navigation, type scale, spacing, components, account, checkout and dashboard. Each imprint supplies a fixed, small skin: logo, display font, two or three colors, illustration style and corner shape, applied on its marketing site and its course pages. Series (Tomorrow Trail, Code Crew) inherit their imprint's skin and add only a series logo and hero art. Children's activity pages get a play layer (large targets, one readable font per age band) themed by the imprint. Extends D6 and D47.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Decided.

### D58: Base look of the Lantern Learn system
- **Question:** What should the shared base (header, account, checkout, dashboard) look like?
- **Options:** warm light, from lanternlearn.com / neutral white / dark, as the learning platform is now.
- **Choice:** Warm light, from lanternlearn.com: cream background, deep navy text, lantern-amber accent. The learning platform's dark Rocket & Raven base is retired as the default; Rocket & Raven keeps its dark look inside its own brand areas.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Decided.

### D59: Navigation across the sites
- **Question:** How should navigation work across lanternlearn.com, learn.lanternlearn.com and the imprint sites?
- **Options:** a shared family bar plus each site's short menu / shared menus only, no bar / one identical menu everywhere.
- **Choice:** A thin Lantern Learn family bar on every property (Lantern Learn, the three imprints, Courses, Sign in), then each site's short menu. lanternlearn.com: Imprints, Courses, For parents, About (Blog added by D62). learn.lanternlearn.com: Courses (filtered by imprint and grade), Help, and when signed in Dashboard, Reports, Account. Imprint sites: Books, Courses (the catalog filtered to that imprint), series pages, Blog, About.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. The family bar and short menus are live on all five properties, with Blog in every imprint menu (D62).
- **Links:** rocket-and-raven-press #61, lanternlearn-site #7, rocketandraven-site #15, foxandfernbooks-site #7, hollyandhare-site #8.

### D60: Order of the design system build
- **Question:** Where should the design system build start?
- **Options:** the learning platform first / the marketing sites first / everything in one pass.
- **Choice:** Everything in one pass: lantern-ui, learn.lanternlearn.com and the four marketing sites together.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. All six repos merged and live on 2026-09-27.
- **Progress:** lantern-ui v0.2.0 adds the base, the imprint skins and the family bar. The learning platform and the four marketing sites use it in rocket-and-raven-press #61, lanternlearn-site #7, rocketandraven-site #15, foxandfernbooks-site #7 and hollyandhare-site #8.

### D61: List Tomorrow Trail in the catalog
- **Question:** Tomorrow Trail is unlisted (D44), so the new Fox & Fern "Courses" links open an empty catalog. List it now?
- **Options:** list it now / keep it unlisted until all 12 stops are reviewed / list it on the Fox & Fern site only.
- **Choice:** List it now: tomorrow-trail-k1 appears in the platform catalog, the sitemap and the public catalog feed, and the course page is indexable. Supersedes the "unlisted" part of D44.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. Tomorrow Trail is in the live catalog, sitemap and feed (16 courses).
- **Links:** rocket-and-raven-press #61.

### D62: Where the Blog link goes
- **Question:** lanternlearn.com, rocketandraven.com and hollyandhare.com have blogs but no Blog link in the menu or footer. Where should Blog go?
- **Options:** menu / footer only / both.
- **Choice:** In each site's short menu, as on Fox & Fern. For rocketandraven.com and hollyandhare.com this carries out D59; for lanternlearn.com it supersedes D59's menu (Imprints, Courses, For parents, About), which becomes Imprints, Courses, For parents, Blog, About.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. Blog is in the menus of lanternlearn.com, rocketandraven.com and hollyandhare.com (live 2026-09-27; empty blogs shipped per D69).
- **Links:** lanternlearn-site #8, rocketandraven-site #16, hollyandhare-site #9.

### D63: Phone menu
- **Question:** On phones the site menus wrap onto two or three lines. How should the phone menu work?
- **Options:** a menu button / one sideways-scrolling row / leave as is.
- **Choice:** A tap-to-open menu button under 768px, built once in lantern-ui and used by the four sites and the learning platform.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. The four sites (lantern-ui 0.2.1, #33) and learn.lanternlearn.com (rocket-and-raven-press #62) have the phone menu, live 2026-09-27.

### D64: Holly & Hare's Courses link
- **Question:** Holly & Hare has no courses on the platform yet, so its Courses link opens an empty list. What should the link do?
- **Options:** the full catalog for now / hide Courses / keep the empty list with a "coming soon" state.
- **Choice:** Link to the full catalog until a Holly & Hare course exists, then switch to the filtered list automatically.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. /courses?imprint=holly-and-hare shows the full catalog with an "on the way" note until a Holly & Hare course is listed (rocket-and-raven-press #62).

### D65: learn.lanternlearn.com home page hero
- **Question:** The learning platform's home page hero still speaks as Rocket & Raven. Rewrite it?
- **Options:** Lantern Learn voice / keep Rocket & Raven / make it a slim sign-in and catalog page.
- **Choice:** Rewrite it in the Lantern Learn voice, introducing all imprints, with the skinned imprint cards below.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. The learn.lanternlearn.com hero now reads "Playful online courses for curious kids." and introduces the three imprints, each in its own skin (rocket-and-raven-press #62). The copy can be changed at /admin/home.

### D66: Imprint logos
- **Question:** Rocket & Raven has no image logo, and the Fox & Fern logo sits on a white box. How should the logos be fixed?
- **Options:** Claude prepares, the owner approves / the owner supplies files / styled text wordmarks.
- **Choice:** Claude cuts the Fox & Fern logo to a transparent background and drafts two or three Rocket & Raven logo options; the owner picks before anything ships.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. rocketandraven.com shows the option B badge beside its wordmark (rocketandraven-site #16); foxandfernbooks.com shows the transparent logo (foxandfernbooks-site #8).
- **Progress:** The owner picked option B for Rocket & Raven (the two kid characters in a starry navy badge, with an Orbitron "ROCKET & RAVEN" wordmark) over A (a rocket and a raven bird) and C (a flat rocket-raven mark), and approved the transparent Fox & Fern logo (2026-09-27).

### D67: Family bar on kids' play pages
- **Question:** Workbook and lesson pages (the play layer) have no family bar. Should they?
- **Options:** no bar, one small exit link / the full family bar / leave as is.
- **Choice:** No family bar on kids' pages; add one small "Back to course" link for grown-ups.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done.
- **Progress:** Workbook pages have a small "Back to course" link and no family bar (rocket-and-raven-press #62). Checked 2026-10-13 on rocket-and-raven-press main: all four workbook pages under `src/pages/courses/[slug]/workbook/` (course index, week index, day, week review) have the "Back to course" link; the Code Crew K lesson player (`src/pages/courses/code-crew-k/lessons/[lesson]/[day].astro`) has an exit link to the course page labeled "Back to Code Crew K" instead; none of these pages render the family bar.

### D68: Close finished decisions
- **Question:** D48, D51, D52 and D55 were still In progress although the work had shipped. Mark them Done?
- **Options:** mark Done after checking what is live / leave them.
- **Choice:** Mark Done. Checked on 2026-09-27: all 12 Tomorrow Trail stops and all 13 intro videos are live on learn.lanternlearn.com.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done.

### D69: Blog link on sites with no posts yet
- **Question:** Correction to D62: the blogs on lanternlearn.com, rocketandraven.com and hollyandhare.com have no posts yet (only Fox & Fern has posts), so a Blog link opens an empty page. What now?
- **Options:** show the link only once a site has a post / ship the link now / drop D62.
- **Choice:** Ship the link now on all three sites, empty pages included.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. Shipped with D62.

### D70: How completion certificates are branded
- **Question:** Every completion certificate says "a Rocket & Raven course", including Tomorrow Trail (a Fox & Fern course). How should certificates be branded?
- **Options:** name the course's imprint with Lantern Learn as issuer / "a Lantern Learn course" for all / keep Rocket & Raven.
- **Choice:** Name the course's imprint ("a Fox & Fern Books course", "a Rocket & Raven course"), with Lantern Learn as the issuer. Existing verify links keep working.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. Certificates, the verify page and share images name the course's imprint with Lantern Learn as issuer (rocket-and-raven-press #63, live 2026-09-27).

### D71: Email sender name
- **Question:** Emails go out with the sender in the RESEND_FROM setting, currently a Rocket & Raven sender. What sender name should parents see?
- **Options:** "Lantern Learn" with the current address / keep Rocket & Raven.
- **Choice:** Display name "Lantern Learn", keeping the current sending address so deliverability is unaffected. Email body copy uses Lantern Learn too.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. Every email is sent as "Lantern Learn" from the configured address, and RESEND_FROM in wrangler.toml carries the same name (rocket-and-raven-press #63).

### D72: Operator line in Terms and Privacy
- **Question:** Terms and Privacy say the platform is "operated by Chris Brock LLC dba Rocket & Raven, an imprint of Lantern Learn". What should they say?
- **Options:** keep the operator line and only retitle the pages / "Chris Brock LLC dba Lantern Learn".
- **Choice:** "Chris Brock LLC dba Lantern Learn". Claude flagged that a dba is a legal registration; the owner chose this option.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done.
- **Progress:** Terms, Privacy and Cookies read "operated by Chris Brock LLC dba Lantern Learn" (rocket-and-raven-press #63, live 2026-09-27). The hello@ inbox test passed 2026-10-11 13:55 UTC: Chris received the sign-in email sent to hello@.

### D73: Support address on the learning platform
- **Question:** The platform tells parents to email hello@rocketandraven.com for support, refunds and data requests. Which address should it show?
- **Options:** keep hello@rocketandraven.com for now / switch to hello@lanternlearn.com.
- **Choice:** hello@lanternlearn.com. lanternlearn.com has mail (MX to Microsoft 365, checked 2026-09-27).
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. The platform shows hello@lanternlearn.com, and SUPPORT_EMAIL in wrangler.toml is set to it (rocket-and-raven-press #63, live 2026-09-27).

### D74: Social media plan
- **Question:** Only Pinterest exists for Lantern Learn (1 follower, no pins, connected in Metricool). What should the social plan be?
- **Options:** Pinterest now, others later / Pinterest plus the owner creates Instagram, Facebook and TikTok now / hold social.
- **Choice:** Pinterest now, and the owner creates Instagram, Facebook and TikTok accounts now from Claude's sign-up steps and profile copy; once they are connected in Metricool, Claude schedules there too.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Decided.
- **Progress:** Board creation through Make is blocked: both Make Pinterest connections for Lantern Learn (the standard and the full-scope one) return 401 and need re-authorizing by the owner.

### D75: Pinterest boards
- **Question:** How should the Pinterest boards be organized?
- **Options:** by what parents look for / one board per imprint.
- **Choice:** By what parents look for: Free Printables and Coloring Pages for Kids; Kindergarten Summer Practice; Coding for Kids (K to Grade 3); Parent Guides: Learning at Home. Pins link to the matching course or post.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Decided.
- **Progress:** Superseded by D317 (2026-10-15); these boards were never created.

### D76: Next build on the websites and courses
- **Question:** What should the next build be?
- **Options:** fill the empty blogs / Code Crew Grade 4 / Tomorrow Trail's next grade / the first Holly & Hare course.
- **Choice:** Fill the empty blogs: three sourced parent guides each on lanternlearn.com, rocketandraven.com and hollyandhare.com.
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. Nine sourced parent guides are live (2026-09-28): three each on lanternlearn.com (lanternlearn-site #9), rocketandraven.com (rocketandraven-site #17) and hollyandhare.com (hollyandhare-site #10). The Holly & Hare posts are written for grades 3 to 5, per its bible.

### D77: Swapping the bear's and bobcat's names on Tomorrow Trail
- **Question:** The owner asked to swap two characters' names: Bruce the Bear becomes Bennie the Bear, and Benny the Bobcat becomes Bruce the Bobcat. The bobcat's name was spelled "Benny"; the owner wrote "Bennie". How is the bear's new name spelled?
- **Options:** Bennie / Benny.
- **Choice:** Bennie. The bear is now Bennie the Bear and the bobcat is Bruce the Bobcat. The animals keep their art, roles and traits; only the names swap. Every line, caption, name card and the Fox & Fern bible change.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.
- **Progress:** Being applied to the Tomorrow Trail exercises, audio and intro videos.

### D78: Voices after the name swap
- **Question:** When the names swap, do the voices follow the animal or the name? The bear speaks as Bram and the bobcat as Landon.
- **Options:** voices stay with the animal / voices follow the name.
- **Choice:** Voices stay with the animal: Bennie the Bear keeps Bram, Bruce the Bobcat keeps Landon. Lines that say either name are re-recorded, and both intro videos get new narration and name cards.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.
- **Progress:** Both intro narrations re-recorded with the same voices; exercise lines being re-recorded.

### D79: Letter-sound wording in Tomorrow Trail exercises
- **Question:** The exercise voice reads spelled-out sounds literally ("B says buh", "Buh, buh, book"). How should letter-sound exercises be worded?
- **Options:** whole words only / keep the sounds but force pronunciation with tags.
- **Choice:** Whole words only ("B is for book. Which one starts with B?"). No spelled-out sounds or stuttered word beginnings anywhere; real words and rhyme sounds such as "hoot, hoot" stay. Every affected line is re-recorded.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.
- **Progress:** Exercise lines being rewritten and re-recorded.

### D80: Rocket & Raven exercise art
- **Question:** The Code Crew exercise graphics do not match the Rocket & Raven bible, and some characters are built from shapes. How should the new art be made?
- **Options:** bible art plus new poses generated from it, owner approves / only the four existing images / the owner supplies art.
- **Choice:** The bible's reference images (Rocket, Raven, Nova, the crew) plus any new poses generated from them as references; the owner approves an art sheet before anything ships. Shape-built characters are removed everywhere, including the K diploma. Standing rule, now in the content standards section 7: never build characters from primitive shapes.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.
- **Progress:** Art sheets approved (D97); integrated in rocket-and-raven-press #67.


### D81: Animals in the Code Crew exercise cards
- **Question:** Some Code Crew cards draw animals that are not in the cast (dog, duck, beetle, chick, fish, small bird) from primitive shapes. Does D80's rule cover them?
- **Options:** yes, replace them with generated art in the bible's style / no, keep the shape icons for non-cast animals.
- **Choice:** Yes. Six animal images are generated in the Rocket & Raven style and go on the same art sheet for owner approval.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.
- **Progress:** Approved; integrated in rocket-and-raven-press #67.

### D82: The Kindergarten "robot"
- **Question:** Code Crew K weeks 3, 4 and 10 use a generic box robot as the program runner, plus a robot dance. What should it be?
- **Options:** Nova / a generic robot redrawn as raster art.
- **Choice:** Nova, matching Grade 1. The Grade 1 week 12 "grumpy robot" card becomes an object card, because the bible says Nova is always friendly.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D83: "Raven teaches a baby crow"
- **Question:** Code Crew K week 1 day 4 says "Raven teaches a baby crow", which reads as if Raven is a bird. Change it?
- **Options:** rewrite it / keep it.
- **Choice:** Rewrite it (for example "Raven helps a baby bird learn order") and re-record the line.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D84: Code Crew covers and heroes
- **Question:** The K, G1, G2 and G3 covers and hero images are off-model: orange vests, jeans instead of cargo pants, Raven's headband tied as a bow, no tablet or wrist computer, and in G3 Nova is a literal crow. Fix them?
- **Options:** regenerate them from the canonical references / leave them.
- **Choice:** Regenerate all eight from the bible's reference images; they go on the same art sheet for owner approval.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D85: Who speaks in lessons
- **Question:** One narrator voice reads every lesson line, including characters speaking in the first person (about 120 "I'm Rocket" lines in Code Crew, 6 Tomorrow Trail Monday introductions such as "I am Bennie the Bear"), so a character sounds different in lessons and in its intro video.
- **Options:** third-person narrator everywhere / per-character voices.
- **Choice:** Per-character voices. Lesson lines get an optional speaker; a character's lines are recorded in that character's voice (Tomorrow Trail: the D52/D78 intro voices; Rocket, Raven and Nova get their own voices), and the narrator reads everything else. About 300 lines are re-recorded.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D86: Nova's pronoun and presence in every grade
- **Question:** The Rocket & Raven bible gave Nova no pronoun (G1 and G2 use "she"), and Code Crew G3 never mentions Nova although the bible puts her in every lesson.
- **Options:** she/her and add Nova to G3 / she/her only / "it" and add Nova to G3.
- **Choice:** She/her, now in the bible, and G3 gets "Nova's hint" callouts plus a meet-the-crew line in week 1.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D87: Code Crew K diploma signatures
- **Question:** The K diploma signs as "Captain Rocket / Mission Commander" and "Co-Captain Raven / Navigator", ranking Raven below Rocket.
- **Options:** equals / keep the ranks.
- **Choice:** Equals: "Rocket / Inventor" and "Raven / Explorer".
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D88: More art brought on-model
- **Question:** The continuity audit found more off-model art: Tomorrow Trail's 12 character images lack the bible's props and all wear a backpack the bible gives only to Ferris and Lucy; 20 more covers and heroes; the Tomorrow Trail catalog cover; the Nova hint icon; pixel-robot share images.
- **Options:** fix the art with owner approval / change the bible to match the art / only live courses now.
- **Choice:** Fix the art: the Tomorrow Trail characters are edited from the owner's Canva originals to add the bible's props and drop extra backpacks; the covers, the catalog cover, the hint icon and the share images are regenerated. Everything goes on the owner's approval sheet first (D80).
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D89: Old and off-brand Canva designs
- **Question:** Canva holds 14 Rocket & Raven designs from before the current cast, about 12 Holly & Hare designs with a cartoon hare, a Lantern Learn brand draft with mascot icons, and a second Ferris style.
- **Options:** archive and rebuild / leave Canva as is.
- **Choice:** Move them to an "Archive (off-model)" folder; nothing is deleted. The Solo pages are the canonical Fox & Fern art. The Science Launch covers are rebuilt from the crew art before KDP. Live Holly & Hare designs get Grades 3 to 5, the test-publisher disclaimer, and no template leftovers.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D90: Imprint data in internal tools
- **Question:** The ops API and KDP dashboard carry imprint colors and badges that differ from the bibles.
- **Options:** copy the bibles / keep separate print palettes.
- **Choice:** Copy the bibles: Rocket & Raven leads with orange and cyan accents; Holly & Hare uses its bible palette, the domain hollyandhare.com and an "H&H" badge in navy on cream.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D91: Fox & Fern grade range
- **Question:** The bible said Pre-K to Grade 5 and six books; the sites sell a seventh (5th to 6th grade).
- **Options:** update the bible / drop the seventh book.
- **Choice:** Update the bible: Pre-K through Grade 6, ages 4 to 11, seven books.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Done.

### D92: Tomorrow Trail cast use
- **Question:** Lucy the Ladybug (D54) never appears in the course, and the bible's Chris and Bruce roles did not match the course.
- **Options:** add Lucy and bring the bible to the course / add Lucy and change the course / Lucy from the next grade.
- **Choice:** Lucy takes the existing feelings and kindness items, with her art, re-recorded. The bible now says each stop's host opens its Monday, Chris opens the trail and tells the Thursday stories, and Bruce hosts challenge stops and stretch items.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D93: One imprint's words on another's pages
- **Question:** Emails sent as Lantern Learn use Code Crew wording ("get your crew started", "This week in your crew").
- **Options:** imprint-neutral / "crew" everywhere.
- **Choice:** Imprint-neutral emails; "Crew" only on Code Crew pages.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D94: Fox & Fern favicon
- **Question:** foxandfernbooks.com's favicon is a fox face built from shapes.
- **Options:** a crop of the logo fox / keep it.
- **Choice:** A crop of the approved logo fox.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D95: Fox & Fern blog images
- **Question:** The five foxandfernbooks.com posts use old "Summer Bridge" covers hosted on catbox.moe, with a realistic fox unlike Ferris.
- **Options:** Tomorrow Trail art hosted in the repo / keep them.
- **Choice:** Current Tomorrow Trail art, hosted in the site repo.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D96: Jacket patches on the kids
- **Question:** The canonical reference art has small "R" and rocket patches on Rocket's and Raven's jackets and sleeves, and generated art copies them, while the art prompts ban logos on clothing.
- **Options:** allowed as a character detail / remove them everywhere.
- **Choice:** Allowed: they are part of the canonical outfit, not a brand logo. Noted in the art prompts.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Done.

### D97: Editing the owner's Tomorrow Trail art with Higgsfield
- **Question:** Adding the bible's props to the 12 Tomorrow Trail characters (D88) means sending the owner's own Canva art to Higgsfield for editing.
- **Options:** use Higgsfield / the owner edits in Canva.
- **Choice:** Use Higgsfield. The owner approves the result sheet before anything ships. The Rocket & Raven art sheets (cutouts, 9 poses, 6 animals, hint icon, share image, 30 covers and heroes) were approved the same day.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D98: Tomorrow Trail story scenes match the cast
- **Question:** After the character cards gained their bible props (D88), the Stop 1 to 12 story scenes and the course hero still showed the old look, and Lucy, Freddy, Lizzy, Samantha and Bruce appeared in few or no scenes.
- **Options:** update all scenes / only the hero and Stop 1 / leave them.
- **Choice:** Update all scenes: every friend shows their bible props (only Ferris and Lucy keep a backpack), no baked text, and all 13 friends appear at least twice across Stops 1 to 11 plus all together at Stop 12, with Lucy in the group scenes, the group coloring page, the cover, the course banner and the Fox & Fern blog banner. The owner then asked for the Stop 1 to 11 casts to be randomized (three friends each, every friend at least twice; Lucy at Stops 5 and 10), and the course banner to be a wide version of the cover.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided. Approved art is in rocket-and-raven-press #66 and foxandfernbooks-site #9.

### D99: Which Kindergarten robots become Nova
- **Question:** D82 named weeks 3, 4 and 10, but the same generic robot also runs programs in week 5 (reads a traffic light), week 7 (press start) and week 12 (a garden robot planting seeds).
- **Options:** Nova everywhere / Nova except the week 12 garden robot / only weeks 3, 4 and 10.
- **Choice:** Nova everywhere, weeks 3, 4, 5, 7, 10 and 12, with she/her pronouns (D86); the week 12 garden robot becomes Nova planting seeds. Changed lines are re-recorded.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided. In rocket-and-raven-press #67.

### D100: Character art in Grades 1 and 2
- **Question:** G1 and G2 already show the bible art of Rocket, Raven and Nova as waist-up crops on white. The approved sheet also has full-body transparent cutouts.
- **Options:** keep the crops / use the cutouts (taller headers on every page).
- **Choice:** Keep the crops.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.

### D101: The Kindergarten "Rocket" cards
- **Question:** Two K cards (the Day 5 sky show and the Day 46 path goal) used a red rocket-ship icon labelled "Rocket", the same name as the boy.
- **Options:** show Rocket the boy / keep a rocket ship.
- **Choice:** Rocket the boy: flying on his rocket pack in the sky show, standing at the path goal.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided. In rocket-and-raven-press #67.

### D102: Which initiatives continue
- **Question:** Revenue that can be verified is $0 for every brand. The KDP account was terminated on 2026-05-21 and no new account is allowed. Every course is free (D5), and the audience is near zero. Which initiatives continue?
- **Options:** Code Crew only / courses only (Code Crew paid, Tomorrow Trail as a free funnel) / sunset everything / keep everything.
- **Choice:** Courses only.
  - **Continue:** Code Crew on learn.lanternlearn.com, aiming at paid access; Tomorrow Trail as a free funnel.
  - **Sunset:** the KDP tooling (kdp-admin-dashboard, lanternlearn-ops-api, the Worker `kdp-admin`, the Make KDP scenarios), the Science Launch print covers, and Holly & Hare.
  - **Not decided yet:** whether the Science Launch courses continue or end.
  - **Supersedes:** D89's "rebuild the Science Launch covers before KDP", because there is no KDP path.
- **Date:** 2026-10-05. **Decided by:** owner. **Status:** Decided.
- **Progress:** The sunset steps are listed in `/mnt/project-files/context/sunset-plan.md`. Each irreversible step (deleting the Worker, archiving repos, taking down a site) waits for the owner's OK.

### D103: hollyandhare.com
- **Question:** D102 sunsets Holly & Hare. What happens to its site and domain?
- **Options:** redirect to lanternlearn.com / freeze the site as is / let the domain lapse.
- **Choice:** Redirect. hollyandhare.com sends every path to lanternlearn.com with a 301. Holly & Hare is removed from the family bar, the site list and the platform catalog filters. The domain stays registered.
- **Date:** 2026-10-05. **Decided by:** owner. **Status:** Done.
- **Progress:** Merged 2026-10-05: hollyandhare-site #11 (redirect), lantern-ui #43 (v0.3.0 family without H&H), rocket-and-raven-press #68 (platform), lanternlearn-site #10, rocketandraven-site #20 and foxandfernbooks-site #11 (copy and the 0.3.0 pin).

### D104: KDP tooling teardown
- **Question:** Delete the KDP admin Worker, and archive the two retired KDP repos?
- **Options:** yes, all (Worker, both repos, the Make KDP scenarios) / Worker only / not yet.
- **Choice:** Yes, all.
- **Date:** 2026-10-05. **Decided by:** owner. **Status:** Decided.
- **Progress:** The 4 Make KDP scenarios (4679077, 4679093, 4679263, 4679268) were deleted on 2026-10-05. The owner deleted the Worker `kdp-admin` (admin.lanternlearn.com) on 2026-10-05 and revoked its Anthropic API key. Still for the owner, later:
  - archive `kdp-admin-dashboard` and `lanternlearn-ops-api`.

  Claude's tools cannot delete Workers or archive repos.

### D105: Science Launch courses
- **Question:** After D102, keep the 6 Science Launch course scaffolds (K-G5) on the platform?
- **Options:** hide them and discard the cover drafts / keep them as planned and keep the covers as course art.
- **Choice:** Keep them as planned. The G2-G4 Canva covers (DAHH4VqffAQ, DAHH4ffWm18, DAHH4cX5jLY) are now course art and have moved from "Archive (off-model)" to Rocket & Raven / Sample Covers. They are no longer KDP covers.
- **Date:** 2026-10-05. **Decided by:** owner. **Status:** Done.

### D106: Code Crew price at launch
- **Question:** D102 aimed Code Crew at paid access. Does Code Crew launch paid or free?
- **Options:** free, like every other course / keep Code Crew paid.
- **Choice:** Free. Every course launches free, Code Crew included. Overrides D102's "aiming at paid access". A free parent account is still needed to save progress; no card is asked for.
- **Date:** 2026-10-05. **Decided by:** owner. **Status:** Decided.
- **Progress:** Paywall and pricing copy removed or switched on `FREE_ACCESS_MODE` in the open PRs below; done when they merge.
- **Links:** rocket-and-raven-press #69, rocketandraven-site #19, lanternlearn-site #11, foxandfernbooks-site #10.

### D107: Contact address on rocketandraven.com
- **Question:** rocketandraven.com listed hello@, wholesale@ and press@rocketandraven.com. Which address should it show?
- **Options:** hello@lanternlearn.com everywhere / keep the rocketandraven.com addresses.
- **Choice:** hello@lanternlearn.com, the address the course platform already uses. Wholesale and press addresses are dropped because print is sunset (D102).
- **Date:** 2026-10-05. **Decided by:** Claude (default). **Status:** Decided.
- **Links:** rocketandraven-site #19.

### D108: Filling out Code Crew Grade 3
- **Question:** The Grade 3 workbook had lessons merged into long days and few graded checks. How to fill it?
- **Options:** re-split days at their headings and add a short story and Quick Check per day / leave the structure and only add checks.
- **Choice:** Re-split at the day headings (6 days a week, 72 days), add a short story to every day, add 40 Quick Checks and make 24 table rows gradable. NOVA is described as an "AI companion drone".
- **Date:** 2026-10-05. **Decided by:** Claude (default). **Status:** Decided.
- **Progress:** After merge, the owner regenerates "Lesson audio" and "Read to me" narration for code-crew-g3 in the admin. 2026-10-07: 33 of the Quick Checks (15 short answers, 18 fill-in rows) had no block-level `gradable` flag, so the server never marked them; fixed in the D110 PR.
- **Links:** rocket-and-raven-press #69.

### D109: Teachers Pay Teachers listing
- **Question:** How should Lantern Learn appear on Teachers Pay Teachers?
- **Options:** a free, self-contained printable with no outbound link (recommended) / skip TPT for now / a link-only course listing.
- **Choice:** Free, self-contained printables with no outbound link, listed as free sample packs: Code Crew Kindergarten Week 1 Coding Puzzles (8 pages), Builder's Lab Week 1 Cup Tower Challenge (17 pages) and Science Launch Kindergarten Week 1 (13 pages), each with an answer key.
- **Date:** 2026-10-05; widened to three sample packs 2026-10-07 (owner approved the final launch posts). **Decided by:** owner. **Status:** Decided.
- **Progress:** TPT help center: "Don't link to stores outside of TPT" (article 360044219551); for Basic Sellers "the product should not be composed of content that is available for free or a lower price somewhere else" (article 360042199032).
- **Links:** `/mnt/project-files/launch/tpt.md` (listing text), PDFs in `/mnt/project-files/launch/tpt/`. The owner uploads them to TPT; Done once listed.

### D110: Building the remaining catalog courses
- **Question:** The owner asked to build out and publish every remaining catalog course overnight. 11 of 16 catalog courses were empty scaffolds (Code Crew G4, G5, G6+; Science Launch K to G5; Builder's Lab; Astronomy Year). How are they built?
- **Options:** text workbooks on the existing workbook engine (as Code Crew G3), generated from source files with automated checks, all published on merge / publish only the Code Crew grades / build drafts and publish nothing.
- **Choice:** Text workbooks, all published on merge. One shared generator (`scripts/course-gen` in rocket-and-raven-press) builds each course from one file per week and fails the build on any rule break: the D20/D23 reading level for every sentence (not only stories), day story length, real CSTA and NGSS codes, answer keys, no dashes, no allergen or money words, no links, Nova is "she" and never a robot or bird. 12 weeks of 6 days each (Monday to Friday plus a weekend day), 2 or more checked activities a weekday, each with a hint before the answer. No new art and no video: the course descriptions that promised a weekly video (Science Launch), a star map for your latitude and an observation-log certificate (Astronomy Year), and a shared photo notebook (Builder's Lab) are rewritten to match what was built.
- **Date:** 2026-10-07. **Decided by:** Claude (default), on the owner's request to publish. **Status:** Done.
- **Progress:** "Lesson audio" and "Read to me" narration for the 11 courses are generated by the owner in the admin, as for G3 (D108). Until then the pages read aloud with the device voice. Merged and deployed 2026-10-07: all 16 catalog courses are live and free.
- **Links:** cbrock84/rocket-and-raven-press#70; marketing copy in cbrock84/lanternlearn-site#12 and the rocketandraven-site PR of the same branch.

### D111: Code Crew G4 to G6+ language
- **Question:** Which language do Code Crew Grades 4, 5 and 6+ teach, and where do kids write code?
- **Options:** real Python 3, read and traced on the page in G4 and G5, typed in IDLE on a computer in G6+ / keep G3's pseudocode through G5.
- **Choice:** Real Python 3. G4 and G5 kids read, trace and complete Python on the page; every program and expected answer was run with python3. G6+ uses IDLE, which comes with Python from python.org (a grown-up installs it once), standard library only. Third-party packages and git are left out of G6+; saving numbered snapshot copies replaces git. The G6+ and G5 learning goals were updated to match.
- **Date:** 2026-10-07. **Decided by:** Claude (default). **Status:** Done.

### D112: Science Launch format
- **Question:** What does a Science Launch week contain, now that print is sunset (D102) and there is no video?
- **Options:** one question a week with daily lessons, one hands-on investigation with household materials, and a Saturday family Launch Lab with a grown-up debrief note / lessons only, no hands-on work.
- **Choice:** The first. K to Grade 2 answer by tapping only. Each week lists its NGSS performance expectations. Every fact a lesson states is checked against an authoritative source and listed in the course's `SOURCES.md`. A grown-up handles anything hot, sharp or electrical; nothing is tasted.
- **Date:** 2026-10-07. **Decided by:** Claude (default). **Status:** Done.

### D113: Astronomy Year sky and pacing
- **Question:** Which sky does Astronomy Year teach, and is it weekly or monthly?
- **Options:** Northern Hemisphere, 12 missions done weekly or monthly / ask each family for their latitude.
- **Choice:** Northern Hemisphere (the US and Canada), 12 missions that work one a week or one a month. No location is asked for. Every Sky Night has a cloudy-night backup. Never look at the Sun.
- **Date:** 2026-10-07. **Decided by:** Claude (default). **Status:** Done.

### D114: Reading level of the all-ages courses
- **Question:** Builder's Lab and Astronomy Year are for K to 5 with a grown-up. Which reading-level cap applies?
- **Options:** the Grade 2 cap (12-word sentences, 30 to 60 word day stories) / the Grade 3 cap.
- **Choice:** Grade 2, so the youngest can follow with a grown-up reading along.
- **Date:** 2026-10-07. **Decided by:** Claude (default). **Status:** Done.

### D115: "Books" on rocketandraven.com
- **Question:** rocketandraven.com's menus and URLs still said Books (/books/) and "Open Workbook", but everything it lists is an online course. Rename them?
- **Options:** rename to Courses, with redirects from the old URLs / leave as is.
- **Choice:** Rename. Menu and footer say "Courses" (/courses/); the footer's "Open Workbook" becomes "Sign in". /books, /books/ and /books/* 301 to the matching /courses URL (`public/_redirects`). The menu's second "Courses" item, which went straight to learn.lanternlearn.com, is dropped as a duplicate (Claude default); "Start learning" still goes there.
- **Date:** 2026-10-07. **Decided by:** owner. **Status:** Done.
- **Progress:** Merged and deployed 2026-10-09; checked live on rocketandraven.com.
- **Links:** cbrock84/rocketandraven-site#22.

### D116: Builder's Lab and Astronomy Year on rocketandraven.com
- **Question:** Builder's Lab and Astronomy Year are live and free on learn.lanternlearn.com (D110) but not listed on rocketandraven.com. List them?
- **Options:** add both / add neither.
- **Choice:** Add both: a course page and a series page each, on /courses and on the home page. Copy and week lists come from the platform course data (rocket-and-raven-press#70). No pricing copy beyond "Free" (D106).
- **Date:** 2026-10-07. **Decided by:** owner. **Status:** Done.
- **Progress:** Merged and deployed 2026-10-09; checked live on rocketandraven.com.
- **Links:** cbrock84/rocketandraven-site#22.

### D117: Loose standards tags on the new courses
- **Question:** A few weeks of the new courses were only a loose match for the standard they list: Astronomy Year weeks 5, 10 and 11 (NGSS 5-ESS1-1), Science Launch K week 12 (K-ESS3-1) and Code Crew G4 (CSTA 1B-DA-06, 1B-AP-16). Rewrite the lessons to fit the standards, or change the tags?
- **Options:** remap (keep lessons as published; change each tag to a better-fitting real standard or drop it) / rewrite the lessons to fit the listed standards / leave as is.
- **Choice:** Remap (owner). Applied per week (Claude default on each call):
  - Astronomy Year week 11 (Dark Skies): 5-ESS1-1 replaced by K-ESS3-3, since its lessons are ways to cut light pollution and help animals.
  - Astronomy Year week 10 (Shooting Stars): keeps 5-ESS1-1 for its Thursday lesson on near meteors and faraway stars, and adds CCSS.MATH.CONTENT.2.NBT.A.2 (skip-count by 5s) for the tally-mark counting. No K to 5 NGSS standard covers meteors.
  - Astronomy Year week 5 (Planet or Star?): keeps 5-ESS1-1. Its Friday lesson teaches it directly (the Sun looks bigger and brighter because it is closer), and no K to 5 NGSS standard covers planets.
  - Science Launch K week 12 (Care for Earth): K-ESS3-1 dropped (no modeling activity); K-ESS3-3 stays.
  - Code Crew G4: 1B-DA-06 stays on week 8 (its Saturday has kids collect counts and present them as a bar chart to compare); 1B-AP-16 stays on week 12 (kids take and swap driver and navigator roles). Both have a real activity behind them.
- **Date:** 2026-10-07. **Decided by:** owner (remap); Claude (default) for the per-week picks. **Status:** Decided.
- **Progress:** lessons unchanged; tags, course plans, SOURCES notes and rocketandraven.com's Science Launch K standards line updated.
- **Links:** cbrock84/rocket-and-raven-press and cbrock84/rocketandraven-site, branch `claude/remap-standards-rg2h8l`.

### D118: lanternlearn.com copy after the courses-only pivot
- **Question:** lanternlearn.com's hero ("Educational books that meet kids where they are"), mission ("Books that respect the reader") and "Get release alerts... when a new title ships" still describe books, though the focus is courses only (D102) and every course is free (D106). Rewrite the copy for courses?
- **Options:** Rewrite the umbrella copy for free courses (recommended); keep the current copy.
- **Choice:** Rewrite the umbrella copy for free courses.
- **Date:** 2026-10-08. **Decided by:** owner. **Status:** Done.
- **Progress:** Hero, mission, imprint cards, methodology teaser, signup ("Get new-course alerts"), footer, about, imprints, contact, methodology and privacy pages rewritten. Merged 2026-10-09.
- **Links:** lanternlearn-site PR #13 (merged); QA report /mnt/project-files/qa/2026-10-08-e2e-report.md.

### D119: How lanternlearn.com course-alert signups work
- **Question:** The lanternlearn.com alert form posted addresses to a Resend list (`/api/notify`), falling back to a pre-filled email, and the privacy policy named Resend. Keep the Resend list, or make signups a plain email to hello@?
- **Options:** Email link (the form opens a pre-filled email to hello@lanternlearn.com; the privacy policy drops Resend) / keep the Resend list.
- **Choice:** Email link.
- **Date:** 2026-10-09. **Decided by:** owner. **Status:** Decided.
- **Progress:** Form and privacy policy changed in lanternlearn-site #13. Done once it merges. The other sites' forms are unchanged.
- **Links:** lanternlearn-site PR #13.

### D120: Favicons and BIMI logos for the brand domains
- **Question:** What art to use for the favicon sets and the BIMI email logos on lanternlearn.com, rocketandraven.com and foxandfernbooks.com, and where to host the logos.
- **Options:** Trace each site's existing badge art into an SVG Tiny PS file / draw new simplified vector marks.
- **Choice:** Trace the existing badge art (Lantern Learn lantern badge, Rocket & Raven crew badge, Fox & Fern fox face) into square SVG Tiny PS logos of 32 KB or less, hosted at `/bimi/logo.svg` on each site. Each site also gets `favicon.ico` (16/32/48), `icon-192.png`, `icon-512.png` and `site.webmanifest`, from the same art. Rocket & Raven's `.ico` uses its existing rocket tab icon (`favicon.svg`), which stays the main tab icon, because the crew badge does not read at 16 px. `@lanternlearn/ui` gains optional `icons` and `manifest` site settings. hollyandhare.com is skipped (redirects, D103).
- **Date:** 2026-10-09. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Build scripts in /mnt/project-files/brand-icons/. All four PRs merged 2026-10-09; logos live at `/bimi/logo.svg`; `default._bimi` TXT records added in Cloudflare 2026-10-09.
- **Links:** lantern-ui, lanternlearn-site, rocketandraven-site, foxandfernbooks-site, branch `claude/project-thread-ezv1sl`.

### D121: DMARC policy for BIMI
- **Question:** BIMI logos only show when DMARC is enforced (p=quarantine or p=reject, pct=100). All three domains are at p=none today. Which policy?
- **Options:** quarantine (recommended: failing mail goes to spam, not dropped) / reject / leave at none and skip BIMI.
- **Choice:** quarantine (`p=quarantine; pct=100`) on all three domains.
- **Date:** 2026-10-09. **Decided by:** owner. **Status:** Done.
- **Progress:** `_dmarc` records set to `p=quarantine; pct=100` on all three domains via the Cloudflare API 2026-10-09 (rua unchanged). Microsoft 365 DKIM is still off on all three (owner step in security.microsoft.com; see /mnt/project-files/brand-icons/README.md).

### D122: Launch-page polish on learn.lanternlearn.com
- **Question:** Before the public launch, the course app's home page featured the first six live courses alphabetically (Astronomy Year first) and both the home page and the empty catalog filter promised "new courses ship monthly", which nothing backs. Change them?
- **Options:** lead the featured row with the flagships and drop the promise (recommended) / leave as is.
- **Choice:** Featured row leads with Code Crew K, Tomorrow Trail, Science Launch K, Builder's Lab, Code Crew G1, Astronomy Year. "New courses ship monthly" is replaced by "every course free" on the home page and dropped from the empty catalog filter.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** shipped in cbrock84/rocket-and-raven-press #73 (merged 2026-10-10).
- **Links:** cbrock84/rocket-and-raven-press, branch `claude/project-thread-fvczkb`.

### D123: How long a lesson day is, and how it is checked
- **Question:** The owner wants every course day to take 10 to 15 minutes (2026-10-10). What is the target, and how is it checked?
- **Options:** Floor of 10 minutes for every day, target 10 to 15 for K to G2 and 15 to 20 for G3+ (keeps the grade-banded time chosen earlier), checked by an estimator / one flat 10 to 15 for all / no automated check.
- **Choice:** Floor of 10 minutes for every day (weekdays and the weekend day); target 10 to 15 for K to G2, 15 to 20 for G3+. `scripts/course-audit/minutes.mjs` in rocket-and-raven-press estimates minutes from the built workbook (narration or reading time plus a fixed time per checked item and open task); `test/unit/lesson-length.test.mjs` holds each expanded course to the floor in CI.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Audit: 887 of 972 weekday lessons were under 10 minutes. All 16 courses expanded on 2026-10-10: every day of every course is now 10.3 minutes or more (course medians 11.3 to 15.4). CI holds every course to the floor. Most G3+ weekdays sit at 11 to 14 minutes, under the 15 to 20 target.
- **Links:** rocket-and-raven-press #74; /mnt/project-files/lessons/2026-10-10-lesson-length-audit.md.

### D124: Sight-word list
- **Question:** Which sight-word list should the K to G2 courses teach?
- **Options:** Dolch by grade (recommended: Pre-primer and Primer for K, Grade 1, Grade 2) / Fry first 300 / both merged.
- **Choice:** Both, merged. Dolch by grade, plus the Fry first 300 words Dolch lacks: Fry First 100 into K (17 words), Second 100 into G1 (55), Third 100 into G2 (78), added after each week's Dolch words. Left out: "buy" (money-word rule), "American" and "Indians" (proper nouns), and the Dolch noun list. The Fry source printing lists 96 words in its third 100. Words are taught look, say, spell, find, then read in a sentence.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Done.
- **Progress:** Plans in `scripts/sight-words/` (K 109 words, G1 96, G2 124). Live in Tomorrow Trail (full K list), and as a daily Word Spot in Code Crew K, G1, G2 and Science Launch K, G1, G2.
- **Links:** rocket-and-raven-press #74 (`scripts/sight-words/`).

### D125: Where sight words are taught
- **Question:** Tomorrow Trail carries the full K list. Should Code Crew and Science Launch K to G2 also review sight words daily?
- **Options:** All K to 2 courses (recommended: a short daily Word Spot) / Tomorrow Trail only.
- **Choice:** All K to 2 courses: Tomorrow Trail teaches the K list in full; Code Crew and Science Launch K, G1 and G2 add a daily Word Spot.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Done.
- **Links:** rocket-and-raven-press #74.

### D126: Rollout of the longer lessons
- **Question:** In what order are the 16 courses expanded, and how are they shipped?
- **Options:** Not recorded.
- **Choice:** Tomorrow Trail first, then every other course in parallel, all on one rocket-and-raven-press PR (#74) with a commit per course group. New blocks are added before each day's closing block or with their own ids, so saved answers keep their block ids.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** All 16 courses shipped in rocket-and-raven-press #74, merged 2026-10-10.
- **Links:** rocket-and-raven-press #74.

### D127: Redesign direction for the sites
- **Question:** The owner finds the site design, UI/UX and branding dated and asked for motion-rich redesign options built from the vibld.com templates, in the style of chrisbrockllc.com and chrisbrock.io. Which direction should lanternlearn.com, rocketandraven.com, foxandfernbooks.com and learn.lanternlearn.com move to?
- **Options:** A Lantern Glow: vibld Luminous template + Warm paper preset; light paper, cursor-reactive lantern glow, one dark band; keeps D58 (recommended) / B Night Launch: vibld Cinematic + Aurora; dark night sky of rising paper lanterns, glass pill nav; reverses D58 / C Playground: vibld Vibrant blocks + Claymorphism + Bento; bold colour blocks, bouncy clay tiles; most kid-facing.
- **Choice:** C Playground: bold flat colour blocks, clay-style tiles, bouncy display type (Bricolage Grotesque, Nunito), course marquee and bento catalog. Each imprint keeps its own two or three colours inside the same clay system (D57 still holds). Marketing sites stay light, so D58's light base holds; its cream/navy/amber palette is replaced by the Playground palette.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Progress:** Merged and live 2026-10-10 at the owner's request (lantern-ui #57, lanternlearn-site #15, rocketandraven-site #27, foxandfernbooks-site #15, rocket-and-raven-press #75; sites pinned to kit commit b615775). Kit v0.4.0 built in this repo (PR #57: Playground palette, clay kit, motion, header/footer/family bar). Draft PRs open for every surface, each pinned to this branch so #57 merges first: lanternlearn-site #15, rocketandraven-site #27 (dark navy block, orange and cyan clay), foxandfernbooks-site #15 (warm fox block, leafy clay), rocket-and-raven-press #75 (app frame, skins, emails, certificate images). Social kit (avatars, Facebook covers, banners, Pinterest pins) in the shared project folder. New logos: D128.
- **Links:** [A](https://claude.ai/artifact/3EdbQLyLb3P44vzCUnUsaJ), [B](https://claude.ai/artifact/5DRzCAyXnDdNjNzN5xNZFJ), [C](https://claude.ai/artifact/X3sYbRYpQVJtuXhH8DJYFE); vibld/vibld `templates/luminous`, `packages/ai/src/style-presets.ts`. Related: D57, D58.

### D128: New logos for Lantern Learn and both imprints
- **Question:** The owner allowed new logos for Lantern Learn, Rocket & Raven and Fox & Fern so they match the Playground direction (D127). What should they look like?
- **Options:** Claude-designed clay marks with a Bricolage Grotesque wordmark for all three (recommended) / keep the existing logos (D66, D94) and only restyle the sites.
- **Choice:** Clay marks on each brand's color with a Bricolage Grotesque ExtraBold wordmark: a glowing lantern on grape for Lantern Learn ("Learn" in grape), an orange rocket on navy with a cyan window for Rocket & Raven (orange ampersand), a fox face with a fern frond on fox orange for Fox & Fern (fern-green ampersand). Each ships as SVG, PNG sizes, favicon, app icons, OG image and BIMI SVG Tiny PS. Old file names are overwritten in place so existing links pick up the new art. Replaces the D66 badge and the D94 fox crop.
- **Date:** 2026-10-10. **Decided by:** owner (allowed the change), Claude (default design). **Status:** Decided.
- **Progress:** Merged and live 2026-10-10. The vector fox and rocket marks were then replaced by the illustrated character roundels (D129); the Lantern Learn lantern mark stays. Generator and exporters in the shared project folder (brand-icons/playground). Canva brand kits and social profile images still need uploading by the owner.
- **Links:** lanternlearn-site #15, rocketandraven-site #27, foxandfernbooks-site #15, rocket-and-raven-press #75. Related: D66, D90, D94, D120, D127.

### D129: Imprint marks use the illustrated characters, not shape-built ones
- **Question:** The owner rejected rigid shape-built characters ("ugly and bland") and wants the existing cast (the Rocket & Raven crew and Raven, Nova, the Tomorrow Trail characters, the fox) kept for animated learning-adventure shorts. What replaces the D128 vector fox and rocket marks?
- **Options:** The pre-D128 illustrated roundels (the Rocket & Raven crew badge, the Fox & Fern fox portrait) as each imprint's mark, with the Bricolage wordmark kept and the crew art on share images (recommended) / return to the full pre-D128 logos (D66 badge, D94 banner).
- **Choice:** Illustrated roundels as the Rocket & Raven and Fox & Fern marks inside the Playground wordmark lockups; favicons, app icons and BIMI restored to the pre-D128 illustrated versions; the crew art (crew-v1) on the Lantern Learn, Rocket & Raven and learn app share images and the fox portrait on the Fox & Fern share image. No character is ever drawn from primitive shapes. All character art stays in rocket-and-raven-press `public/assets/brand/characters`, `public/assets/courses/tomorrow-trail-k1/characters` and `public/assets/courses/code-crew/art`; nothing was deleted.
- **Date:** 2026-10-10. **Decided by:** owner (rejected shape characters, keep the cast), Claude (default: roundels in the new lockups). **Status:** Decided.
- **Progress:** Draft PRs on branch claude/project-thread-bwq92e in lanternlearn-site, rocketandraven-site, foxandfernbooks-site and rocket-and-raven-press. Social kit regenerated in brand-icons/playground/social. Animated shorts are a separate piece of work.
- **Links:** Related: D66, D94, D127, D128.

### D130: How the extra practice is stored and checked
- **Question:** Where does the added content live, and what gets fixed along the way?
- **Options:** Not recorded.
- **Choice:** Code Crew K's daily practice is generated into separate files (`src/data/code-crew-k-lessons/practice/`) so the hand-written weeks 1 and 2 stay as approved and the free-preview bundle stays small. Weekend days in Code Crew K get an offline Word Hunt with a grown-up. Code Crew G3 now has a reproducible build (`npm run gen:code-crew-g3`, checked for drift in CI); its existing text had milk, butter and peanut butter swapped for water and banana, "money" swapped for "plates", a dash removed, and the Code.org and ScratchJr pointer replaced with "pick a kids' coding app with a grown-up".
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Links:** rocket-and-raven-press #74.

### D131: Order of multiple-choice answers
- **Question:** In most courses built by the course generator, the right answer is listed first (for example 272 of 272 in Code Crew G3, 251 of 258 in Science Launch G4). How should this be fixed?
- **Options:** Shuffle the display order in the app, fixed per question, so saved answers keep working (recommended) / reorder the choices in the course files / leave as is.
- **Choice:** Shuffle in the app. Choices show in a stable order derived from the block id and round (the same on every visit); answers stay saved and graded by choice id. Applies to every workbook's multiple-choice rounds and the Code Crew K lesson predict rounds. With the shuffle the right answer is first about as often as chance (29% to 48% by course).
- **Date:** 2026-10-10. **Decided by:** owner (card in the project chat). **Status:** Done.
- **Links:** rocket-and-raven-press #74 (`src/lib/choiceOrder.ts`).

### D132: Packaging for the iOS, Android and Amazon apps
- **Question:** When the catalog is built out, the owner wants free apps with no ads and no tracking on the App Store, Google Play and the Amazon Appstore. How should the learn app (learn.lanternlearn.com, rocket-and-raven-press) be packaged?
- **Options:** Capacitor hybrid: native shell with offline packs, native audio and a parental gate, loading the Astro app in app mode (recommended) / thin Capacitor or TWA wrapper of the website (likely rejected by Apple 4.2) / native rewrite in Expo or React Native.
- **Choice:** Capacitor hybrid: native shell (Capacitor 8) with offline course packs, native narration audio, a native kid picker and parental gate, loading the Astro app in app mode (D137).
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Progress:** Plan only; the build starts when the catalog is built out.
- **Links:** /mnt/project-files/apps/app-store-plan.md.

### D133: Store developer accounts: organization or personal
- **Question:** Enroll the Apple, Google and Amazon developer accounts as Chris Brock LLC or as Chris personally?
- **Options:** Organization (Chris Brock LLC) with a free D-U-N-S number; seller shows as the LLC; skips Google's 12-tester, 14-day closed test (recommended) / personal; faster to start, seller shows Chris's own name, Google requires the closed test.
- **Choice:** Organization accounts as Chris Brock LLC on Apple, Google and Amazon, using a free D-U-N-S number.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Done.
- **Progress:** Done in practice. All three organization accounts already exist for Chris Brock LLC: Apple approved 2026-08-10, Google Play and Amazon registered, D-U-N-S verified against the Georgia filing (games-v1 `docs/store-accounts.md`; owner confirmed Apple 2026-10-10). Lantern Learn gets its own app record in each.
- **Links:** /mnt/project-files/apps/app-store-plan.md section 5.

### D134: Amazon Appstore
- **Question:** Amazon's new Alexa Tablets (announced 2026-10-08) run Google Play; the Amazon Appstore still serves existing Fire tablets. Ship to the Amazon Appstore too?
- **Options:** Yes, same Android build as a signed APK; $0 account (recommended) / Google Play only.
- **Choice:** Yes: the same Android build ships to the Amazon Appstore as a signed APK, for Fire tablets, alongside Google Play.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Links:** /mnt/project-files/apps/app-store-plan.md section 5.3.

### D135: Apple Kids Category and age band
- **Question:** List the iOS app in Apple's Kids Category, and for which age band? Kids Category rules stick to later updates even if deselected (guideline 1.3), and only Kids apps may say "for kids" in metadata (2.3.8).
- **Options:** Kids Category, ages 6-8, matching the K-G3 bulk of the catalog (recommended) / Kids Category, ages 9-11 / Education only, not Kids.
- **Choice:** Kids Category, ages 6-8.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Links:** /mnt/project-files/apps/app-store-plan.md section 4.1.

### D136: Sign-in inside the apps
- **Question:** Sign-in is an email magic link, which opens in the phone's browser and can't be used by App Review. How do people sign in inside the apps?
- **Options:** Add a 6-digit code to the existing sign-in email, typed into the app, plus a documented review account (recommended) / universal links and App Links / passwords.
- **Choice:** 6-digit email code plus a review account; universal links later.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Progress:** Not started; part of the app build.
- **Links:** /mnt/project-files/apps/app-store-plan.md section 3.4.

### D137: App mode on learn.lanternlearn.com
- **Question:** What changes when the learn app runs inside the store apps?
- **Options:** Not recorded beyond the choice.
- **Choice:** The shell tags its user agent `LanternLearnApp/<version>`. In app mode: no GA4, Meta Pixel or consent banner; no store, checkout, pricing or marketing links; every link out, mailto, legal page and settings screen sits behind a native parental gate; start at /dashboard. The websites keep GA4 as decided in D2.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Progress:** Not started; part of the app build.
- **Links:** /mnt/project-files/apps/app-store-plan.md sections 3.2, 3.3. Related: D2, D106.

### D138: Market every course as 100% free, never a preview
- **Question:** Some copy still sold the courses as a free preview, free weeks or samples, with pricing in the nav, even though every course is free in full (D106). How should the sites, app, emails, launch drafts and social kit describe the price?
- **Options:** Say "100% free, start to finish" everywhere, drop preview, sample and pricing wording, and keep the `/pricing/` URL with a "100% free" label (recommended) / keep the "Pricing" label and only fix the preview lines.
- **Choice:** Every surface says the full course is free: every week, every lesson, no preview, no card. The Rocket & Raven nav and footer say "100% free" (the URL stays `/pricing/`). Paid code paths stay dormant behind `FREE_ACCESS_MODE`.
- **Date:** 2026-10-10. **Decided by:** owner ("market everything as 100% free, not just previews"), Claude (default: wording and the nav label). **Status:** Decided.
- **Progress:** Draft PRs: rocketandraven-site #29, lanternlearn-site #17, foxandfernbooks-site #17, rocket-and-raven-press #77. Launch drafts (`/mnt/project-files/launch`) and the social kit (`brand-icons/playground/social`) were updated in place. TPT listings are unchanged because TPT rules bar store links.
- **Links:** Related: D106, D109.

### D139: Free sign-in after week 4
- **Question:** Signed-out visitors can open weeks 1 to 4. From week 5 the app asks for a free parent account (no card). Should every week open with no account?
- **Options:** Keep the free sign-in after week 4: it saves progress and builds the parent list (recommended) / open every week to anyone, with progress saved only after signing in.
- **Choice:** Open all weeks. While `FREE_ACCESS_MODE` is on, every week of every course opens for anyone, signed in or not. A free parent account only saves progress.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Done.
- **Progress:** Merged in rocket-and-raven-press #78 (checkWeekAccess opens every week in free mode; unit and e2e tests updated).
- **Links:** Related: D106, D138.

### D140: Bundle id for the Lantern Learn apps
- **Question:** Which bundle id / package name do the iOS, Android and Amazon apps use? It is permanent once submitted and never shown to users. On 2026-10-10 the owner said everything published uses chrisbrockllc.com, not chrisbrock.io.
- **Options:** `com.chrisbrockllc.lanternlearn`, matching the chrisbrockllc.com rule (recommended) / `io.chrisbrock.lanternlearn`, matching the games-v1 titles' `io.chrisbrock.<title>` convention.
- **Choice:** `com.chrisbrockllc.lanternlearn`. `.dev` and `.staging` suffixes for test builds; same id on all three stores.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Links:** /mnt/project-files/apps/app-store-plan.md section 3.5; games-v1 `docs/store-accounts.md` (bundle identifiers).

### D141: Which expansion course to build first
- **Question:** The expansion course study (2026-10-10) ranked eight ideas: Body Lab (human body), Inside the Machine (computer parts and troubleshooting), Home Helpers (life skills), Backyard Explorer (plants and animals by US region), Everyday Machines, Bike Shop, Grow It, and vehicle repair (deferred). Which is built first?
- **Options:** Body Lab (recommended) / Inside the Machine / Home Helpers / Backyard Explorer.
- **Choice:** Inside the Machine: computer parts, how hardware and software work together, and troubleshooting, under Code Crew (Rocket & Raven), as a G1-G2 tap-only course and a G3-G5 course. CSTA 1A-CS-02, 1A-CS-03, 1B-CS-02, 1B-CS-03. "Repair" stays at restart, check the cable, check the charge, swap the mouse; nothing with a case open or a power supply.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Progress:** Both courses built and illustrated (D155); live once rocket-and-raven-press #81 merges. Report: https://claude.ai/artifact/7fUtRuv2AZZq8cCWyTJbaj
- **Links:** rocket-and-raven-press #81. Related: D102, D106, D110, D155.

### D142: "blood" allowed in a Body Lab course
- **Question:** The course generator's violence check bans the word "blood" in every course, which blocks teaching circulation in a human body course. How should Body Lab handle it?
- **Options:** Per-course exception for Body Lab, global ban kept elsewhere (recommended) / keep the ban and write around it / skip circulation.
- **Choice:** Per-course exception. Body Lab may use "blood" and heart words; the global rule stays for every other course.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Done.
- **Progress:** `WORD_EXCEPTIONS` in rocket-and-raven-press scripts/course-gen/rules.mjs allows "blood" for body-lab-k2 and body-lab-g3-5 only, with a unit test; the rest of the violence list still applies to them.
- **Links:** rocket-and-raven-press #80. Related: D141, D154.

### D143: Real cooking gets its own Kitchen course
- **Question:** Four generator rules collide with cooking (a grown-up does anything hot or sharp, nothing is tasted, the allergen list removes dairy, nuts, soy and sesame, shopping words are banned). Does Lantern Learn teach real cooking?
- **Options:** No heat, no knives: Kitchen Helper weeks inside Home Helpers (recommended) / separate G3+ Kitchen course with its own food rules / no cooking content.
- **Choice:** A separate Kitchen course for G3 and up under Fox & Fern, with its own food rule set: a grown-up handles heat and knives, tasting is allowed, every recipe carries an allergy-swap note. Needs a liability review before it ships. Home Helpers keeps the no-heat Kitchen Helper weeks for younger children.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Progress:** Not started. The generator needs a per-course food rule set (scripts/course-gen rules.mjs, code-crew-lib rules.mjs) before this course can build.
- **Links:** Related: D141.

### D144: Backyard Explorer picks a region from the kid profile
- **Question:** How does a regional plants-and-animals course know the family's region, and which imprint owns it?
- **Options:** Parent-chosen coarse region on the kid profile, the generator builds one variant per region, Rocket & Raven (recommended) / same under Fox & Fern with the Tomorrow Trail animals as guides / one national course where families look up local species.
- **Choice:** Parent-chosen region on the kid profile (optional, default Whole United States, never zip or city), eight regions grouped from EPA Level III ecoregions, one generated workbook variant per region, Rocket & Raven. Data from public-domain or CC0/CC-BY sources only (USDA PLANTS, GBIF filtered by license, EPA, USFWS, NPS); iNaturalist and eBird excluded by their terms.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Progress:** Built under D178 with one refinement: one workbook per course and a render-time field guide instead of a variant per region.
- **Links:** Related: D141, D178.

### D145: Roadmap: K-12 through adult, steered by web signals
- **Question:** The owner's long-term objective is to expand through high school and into adult training (coding and more), with young children as the early focus. A web scan on 2026-10-10 found the signals to steer by. How are they cemented into the plan?
- **Options:** Write `roadmap.md` in this repo with staged scope (K-5 now, grades 6-8 next, high school electives later, adult applied AI) and the signals behind each stage, re-scanned quarterly (recommended) / keep the signals only in the study artifact.
- **Choice:** `roadmap.md` added. Stages: K-5 breadth plus a new AI Explorers course; grades 6-8 bridge; high school CS and AI electives; adult applied AI in the same daily format, not a bootcamp. Reach: ESA vendor registration (D146) and microschool outreach. Fox & Fern leans phonics and decodable text.
- **Date:** 2026-10-10. **Decided by:** owner ("Let's cement these into our plans"). **Status:** Decided.
- **Progress:** roadmap.md written. Inside the Machine (D141) shipped in rocket-and-raven-press #81, and the AI Explorers courses (K-2, Grades 3-5, Grades 6-8; D156, D173) are published on main.
- **Links:** roadmap.md; https://claude.ai/artifact/7fUtRuv2AZZq8cCWyTJbaj. Related: D106, D138, D141.

### D146: ESA vendor registration: research and plan
- **Question:** Register as an education savings account (ESA) vendor in two or three states for paid add-ons (printed packs, live help, a family pass) while every course stays free?
- **Options:** Yes, Arizona (ClassWallet) and Texas (Odyssey) first (recommended) / yes, later / no.
- **Choice:** Yes, researching. The owner first parked it ("not now"), then reversed the same day and asked for a thread to research and plan taking Lantern Learn to the ESA states. Which states come first is part of that plan.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Progress:** Plan delivered 2026-10-10 (ESA plan artifact): lead with per-student printable course packs; wave 1 Wyoming, Alabama, Arizona, New Hampshire; Texas in wave 2; tutoring and family passes out. Open follow-ups D148-D151, defaults D152. Nothing filed. Added to roadmap.md.
- **Links:** roadmap.md; plan: https://claude.ai/artifact/GrTF4QcoTv4YsHoX7yCeny. Related: D106, D138, D145, D148-D152.

### D147: Round the numbers in marketing copy
- **Question:** Should public copy give exact catalog counts (for example "16 courses")?
- **Options:** None offered. The owner set this as a standing rule on 2026-10-10: round, for example "15+ courses" or "nearly 20 courses", so material doesn't need updating as the catalog grows.
- **Choice:** Round any count that grows with the catalog: courses, series, lessons across the catalog. Use "15+" or "nearly 20", never the exact number. Claude (default): a fixed fact about one course stays exact, because rounding it would mislead. That covers things like "12 weeks" per course, "60 days" on the Code Crew K diploma, and Builder's Lab's 12 challenges. Counts the code computes from data (for example "{n} weeks") also stay exact. Internal docs, such as the launch README inventory, keep exact counts.
- **Date:** 2026-10-10. **Decided by:** owner (rule); Claude (default) for the scope. **Status:** Done.
- **Progress:** "16 courses" changed to "15+ courses" on the lanternlearn.com hero badge, in the social kit images, and in the Reddit, Facebook and directory launch drafts. On rocketandraven.com, "Four series" and the stale "Two series so far" are now worded without a count. Rule added to standards/content-standards.md section 8 and to the launch README.
- **Links:** Related: D138.

### D148: ESA add-on to lead with
- **Question:** Which paid add-on should Lantern Learn list first in ESA marketplaces, with every course still free?
- **Options:** Printable PDF course packs, per student (recommended): no shipping or staff, reuses the hidden PDF store and existing workbooks / printed workbooks: needs a print-on-demand partner and 48-hour shipping / microschool kits: sold to schools, not through ESA marketplaces / live tutoring: needs credentialed, background-checked tutors.
- **Choice:** Printable PDF course packs, priced per student per course.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Progress:** Waiting on D151 (public store prices), then render full-course PDFs from the workbook data.
- **Links:** https://claude.ai/artifact/GrTF4QcoTv4YsHoX7yCeny. Related: D106, D138, D146.

### D149: First ESA states
- **Question:** Which states' ESA programs to apply to first?
- **Options:** Wyoming, Alabama, Arizona, New Hampshire (recommended): no in-state registration or fingerprinting for a product-only vendor / Texas first: largest, but $750 registration and fingerprinting / every eligible state at once.
- **Choice:** Wave 1 is Wyoming, Alabama, Arizona and New Hampshire.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Progress:** Owner files the applications using the plan's clickpaths. Nothing filed yet.
- **Links:** https://claude.ai/artifact/GrTF4QcoTv4YsHoX7yCeny. Related: D106, D138, D146.

### D150: Texas registration for TEFA
- **Question:** Register Chris Brock LLC as a foreign LLC in Texas so it can join Texas Education Freedom Accounts?
- **Options:** Yes, in wave 2 (recommended): $750 plus yearly franchise-tax filings, after wave 1 proves sales / yes, now / no: skip Texas.
- **Choice:** Yes, in wave 2, after wave 1 proves sales.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Progress:** Not filed. Owner files Form 304 on SOSDirect ($750) when wave 2 starts.
- **Links:** https://claude.ai/artifact/GrTF4QcoTv4YsHoX7yCeny. Related: D106, D138, D146.

### D151: Reopen the printable store with public prices
- **Question:** ESA programs pay only a vendor's normal public price. Reopen the hidden printable store (rocket-and-raven-press /store) with public prices for course packs?
- **Options:** Yes, packs only (recommended): course pages stay free with no price / marketplaces only: no public price, so listings may fail price review.
- **Choice:** Yes, packs only. Course pages stay free with no price on them.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Progress:** Pack prices are the next owner question; the store stays hidden until they are set.
- **Links:** https://claude.ai/artifact/GrTF4QcoTv4YsHoX7yCeny. Related: D106, D138, D146.

### D152: ESA pricing and vendor defaults
- **Question:** Defaults for any ESA listing.
- **Options:** None offered (Claude default).
- **Choice:** Price per student per course, never per family (Missouri and Utah reject family and lifetime plans). Same price inside and outside ESAs (Texas SB 2 §29.365, West Virginia). No rebates or refunds to families; refunds go back to the account. Apply as Chris Brock LLC until the DBA is filed. Checkout and email go to parents only. Tutoring stays out until there is staff.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Links:** https://claude.ai/artifact/GrTF4QcoTv4YsHoX7yCeny. Related: D106, D138, D146.

### D153: Course PDF pack price
- **Question:** What public price per student should each course PDF pack have? ESAs pay only this price (D152).
- **Options:** $15 per pack (recommended): under the dormant $19 single-course price, fits a $2,000 homeschool ESA across several courses / $9: impulse price, less per ESA order / $25: more per sale, may draw Odyssey price review. No competitor prices were checked.
- **Choice:** $15 per pack, per student. Same price everywhere (D152).
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Decided.
- **Progress:** Pack products, store gate and admin pack grant built in rocket-and-raven-press; the store opens once the owner creates the $15 Stripe price. 16 full-course PDFs built (scripts/print-packs) and uploaded to R2. Parked 2026-10-10 by the owner (prioritize expansion and course content): press #79 stays unmerged and the store stays hidden; no Stripe price yet.
- **Links:** https://claude.ai/artifact/GrTF4QcoTv4YsHoX7yCeny. rocket-and-raven-press #79. Related: D148, D151, D152.

### D154: Body Lab course shape
- **Question:** How Body Lab is built: course split, reading level, sight words and catalog grade.
- **Options:** None offered (Claude default).
- **Choice:** Two Rocket & Raven courses in a new Body Lab series: Body Lab K to 2 (`body-lab-k2`, Grade 1 reading level, tap-only, daily Word Spot on the Grade 1 Dolch + Fry list) and Body Lab Grades 3 to 5 (`body-lab-g3-5`, Grade 3 reading level, typed answers allowed). 12 weeks each, 15-minute days (10+ minutes enforced), Saturday "Body Lab Day". Course meta gains an optional `grades` list so the catalog grade filter finds each course under every grade it covers and the card shows "Grades K to 2". Covers and heroes made in Higgsfield from the existing Rocket, Raven and Nova art. No injuries, illness, private anatomy, dairy foods or questions about a child's own body.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live (all PRs below merged 2026-10-10). Built when the owner asked on 2026-10-10 to prioritize expansion content and to keep building. It does not change D141: Inside the Machine is still the owner's pick and is tracked there.
- **Links:** rocket-and-raven-press #80, rocketandraven-site #31, lanternlearn-site #19, lantern-ui #69. Related: D141, D142.

### D155: Inside the Machine course shape and art
- **Question:** How Inside the Machine (D141) is built: course split, reading level, sight words, catalog grades and artwork.
- **Options:** None offered (Claude default).
- **Choice:** Two Code Crew courses: Inside the Machine: Grades 1 to 2 (`inside-the-machine-g1-g2`, Grade 1 reading cap, tap-only, daily Word Spot on the Grade 1 list, Crew Pilot rank) and Inside the Machine: Grades 3 to 5 (`inside-the-machine-g3-g5`, Grade 3 reading cap, typed answers allowed, Crew Engineer rank). 12 weeks each, 15-minute days (10+ minutes enforced), Saturday "Crew Quest". Catalog uses the shared `grades` list (D154) so each course shows under every grade it covers. Setting: the Fix-It Bay at Beacon Station; Rocket brings the problem, Raven asks "What do you notice?", Nova hints. Safety line: grown-ups do plugs, chargers, batteries and cases; kids may tell a grown-up, check a cable, wait, restart with a grown-up, swap a mouse, change volume, or wipe with a dry cloth. No brand names, prices or personal information. Art: covers, heroes and one lesson illustration per week (24) generated in Higgsfield from the approved Rocket, Raven and Nova art; characters stay illustrated, never shape-built. Animation not used: the lesson engine shows still images only.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Progress:** Built; live once rocket-and-raven-press #81 merges.
- **Links:** rocket-and-raven-press #81. Related: D141, D154.

### D156: AI Explorers course shape
- **Question:** How AI Explorers (K-5 AI literacy, roadmap stage Now) is built: course split, imprint, series, reading level, standards and art.
- **Options:** None offered (Claude default).
- **Choice:** Two Rocket & Raven courses in a new AI Explorers series, kept off the Code Crew rank ladder: AI Explorers K-2 (`ai-explorers-k2`, K reading level, tap-only, daily Word Spot on the K Dolch + Fry list) and AI Explorers Grades 3-5 (`ai-explorers-g3-5`, Grade 3 reading level, typed answers allowed, running thread: the crew trains and tests a paper sorting model for mission photos). 12 weeks each, 15-minute days (every day 11+ minutes by the audit), Saturday "Explorer Quest". Nova guides. Each week maps to a CSTA 2017 code, and the arc follows the AI4K12 Five Big Ideas. Covers and heroes were made in Higgsfield from the existing crew art. Marketing copy says 100% free.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Progress:** Built; live once the PRs below merge. After Body Lab (D154) lands, adopt its optional `grades` field so the catalog grade filter lists each course under every grade it covers.
- **Links:** rocket-and-raven-press #82, rocketandraven-site #33, lanternlearn-site (home tile). Research: https://claude.ai/artifact/7fUtRuv2AZZq8cCWyTJbaj. Related: D145, D138, D147.

### D157: AI Explorers safety and fact rules
- **Question:** Do children use a real AI tool in AI Explorers, and how are AI facts checked?
- **Options:** None offered (Claude default).
- **Choice:** Fully unplugged. No lesson connects a child to a chatbot, image generator or any live AI. Nova is a story character, and the lessons say AI is a tool people build that can be wrong. Each course's `SOURCES.md` holds a fact bank (AI4K12, NIST AI 100-1 and 600-1, SUNY Geneseo, Gordon College, CSTA). A claim about AI that is not in the fact bank stays out of the lessons. A privacy fact that rested on the FTC COPPA page was dropped because that page could not be fetched.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Links:** rocket-and-raven-press #82 (`scripts/course-gen/courses/ai-explorers-*/SOURCES.md`). Related: D156.

### D158: Where new site content lives
- **Question:** Chris asked for course pages, a parent how-it-works/FAQ page and evergreen guide posts across the sites. Where does each piece go?
- **Options:** None offered (Claude default).
- **Choice:** lanternlearn.com gets `/courses` plus one page per course (generated from the platform by `scripts/sync-courses.py`, so copy never drifts) and `/how-it-works` (parent guide and FAQ); its nav "Courses" now opens `/courses` instead of the course app. rocketandraven.com already had pages for every Rocket & Raven course, so it is unchanged. Each guide post lives on one site only (no duplicates): sight words on foxandfernbooks.com, free homeschool STEM on lanternlearn.com. Every post cites its sources.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Links:** lanternlearn-site #21, foxandfernbooks-site #18, rocket-and-raven-press #83 (parent help said "first weeks free to try"; now "every course is free", per D138).

### D159: Home Helpers course shape and art
- **Question:** How Home Helpers (life skills, roadmap stage Now) is built: course split, imprint, reading level, sight words, safety rules, standards and artwork.
- **Options:** None offered (Claude default).
- **Choice:** Two Fox & Fern courses in a new Home Helpers series: Home Helpers: Kindergarten to Grade 2 (`home-helpers-k2`, Grade 1 reading cap, tap-only, daily Word Spot on the Grade 1 list) and Home Helpers: Grades 3 to 5 (`home-helpers-g3-5`, Grade 3 reading cap, typed answers allowed). 12 weeks each, 15-minute days (10+ minutes enforced), Saturday "Family Helper Day". Catalog uses the shared `grades` list (D154). Setting: Fern Hollow, with Ferris, Hazel, Bennie, Lucy, Lizzy and Oliver hosting weeks and Chris the Coyote, Rosie and Freddy in their usual roles. Weeks: making the bed, socks and towels, setting the table, kitchen helper (no heat, no knives, no tasting, per D143), plants and pets, clock time, packing a bag, the ten-minute tidy, kind words, ready and safe, and a helper celebration; the older course adds laundry start to finish, mending, lists and errands. Safety line: nothing hot, sharp or electrical; a grown-up runs every machine and handles sprays, needles and scissors; no allergen words, money words or personal information typed on screen; scrapes are "stop, wash, cover, tell". Standards: CCSS only (speaking and listening, informational reading, writing, measurement and data). Art: covers, heroes and one lesson illustration per week (24) generated in Higgsfield from the Fox & Fern character references; renders with stray words were redone so no image carries text.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live. rocket-and-raven-press #81 and lanternlearn-site #20 merged 2026-10-10.
- **Links:** rocket-and-raven-press #81, lanternlearn-site #20 (home tile). Related: D141, D143, D154, D155.

### D160: Grow It course shape
- **Question:** How Grow It (plants and gardening, expansion study idea) is built: course split, reading level, sight words, safety rules and catalog grade.
- **Options:** None offered (Claude default).
- **Choice:** Two Rocket & Raven courses in a new Grow It series: Grow It K to 2 (`grow-it-k2`, Grade 1 reading level, tap-only, daily Word Spot on the Grade 1 Dolch + Fry list) and Grow It Grades 3 to 5 (`grow-it-g3-5`, Grade 3 reading level, typed answers allowed). 12 weeks each, 15-minute days (10+ minutes enforced), Saturday "Grow It Day". A windowsill is enough: kids sprout and look after a bean plant across the weeks. Garden safety: gloves for soil and handwashing after, nothing found outside or grown in an activity is eaten, a grown-up handles tools, potting mix and cutting, no fertilizer or bug spray. Approved foods only, no nuts (acorns appear only as food for animals), no celery. Decomposition ("dead leaves") is taught in Grades 3 to 5 as part of 5-LS2-1. Covers and heroes made in Higgsfield from the existing Rocket, Raven and Nova art.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live on learn.lanternlearn.com (press #84 merged 2026-10-10). Built at the owner's 2026-10-10 request to keep building expansion content.
- **Links:** rocket-and-raven-press #84, rocketandraven-site #35, lanternlearn-site #26. Related: D141, D154.

### D161: Kitchen liability review
- **Question:** Who does the Kitchen course liability review before it goes live?
- **Options:** Chris reviews, with a parent safety notice and reviewer checklist (recommended) / an attorney reviews a packet first / keep it hidden until decided. Re-asked 2026-10-11 as "Publish the Fox & Fern Kitchen course now?".
- **Choice:** Publish now.
- **Date:** 2026-10-11. **Decided by:** Chris, via project-chat decision card (relayed by coordinator). **Status:** Done.
- **Progress:** Published 2026-10-11: `draft` removed, `publish: true`, workbook loaded (press #106). Listed on lanternlearn.com via sync-courses.
- **Links:** rocket-and-raven-press #86, #106. Related: D143.

### D162: Naming allergens in the Kitchen allergy week
- **Question:** Can the Kitchen allergy week name peanuts and tree nuts (and the other major allergens)?
- **Options:** Name all nine, no recipe uses them (recommended) / grown-up note only / never name them.
- **Choice:** Name all nine, no recipe uses them. An `allergyLabels` marker lets a marked day name the nine allergens in lessons; they stay banned in recipe cards, method steps, vocab and titles.
- **Date:** 2026-10-11. **Decided by:** Chris, via project-chat decision card (relayed by coordinator). **Status:** Done.
- **Progress:** Built this way; live with Kitchen (press #106).
- **Links:** rocket-and-raven-press #86. Related: D143.

### D163: Kitchen healthy-eating guide
- **Question:** Which healthy-eating guide does the Kitchen course teach?
- **Options:** Colorful produce only (recommended) / MyPlate (page could not be verified) / the 2025-2030 New Pyramid.
- **Choice:** Colorful produce only: the course teaches only "eat many colorful fruits and vegetables" and "water is a great drink".
- **Date:** 2026-10-11. **Decided by:** Chris, via project-chat decision card (relayed by coordinator). **Status:** Done.
- **Progress:** Built this way; live with Kitchen (press #106).
- **Links:** rocket-and-raven-press #86. Related: D143.

### D164: Kitchen course name
- **Question:** What should the Fox & Fern cooking course be called?
- **Options:** Fox & Fern Kitchen (recommended) / Kitchen Crew / Little Chefs Lab.
- **Choice:** Fox & Fern Kitchen. Built as "Fox & Fern Kitchen Grades 3 to 5" (`kitchen-g3-5`).
- **Date:** 2026-10-11. **Decided by:** Chris, via project-chat decision card (relayed by coordinator). **Status:** Done.
- **Progress:** Live with Kitchen (press #106).
- **Links:** rocket-and-raven-press #86. Related: D143.

### D165: Bike Shop course shape
- **Question:** How Bike Shop (the G3+ reframe of the deferred vehicle-repair idea in the expansion study, D141) is built: grades, reading level, safety rules and standards.
- **Options:** None offered (Claude default).
- **Choice:** One Rocket & Raven course in a new Bike Shop series: Bike Shop Grades 3 to 5 (`bike-shop-g3-5`, Grade 3 reading level, typed answers allowed), 12 weeks, 15-minute days (10+ minutes enforced), Saturday "Bike Shop Day". Weeks: parts and jobs, forces, friction, tires and air, gears and chain, patterns of motion, brakes, fit and helmets, being seen, a flat tire, the pre-ride quick check, and a design capstone. NGSS 3-PS2-1, 3-PS2-2, 4-PS4-2 and 3-5-ETS1-1 to 3. Safety: bike work only with the bike standing still; a grown-up holds and turns the bike and handles every tool, pump gauge and chain oil; hands away from chain, gears and spokes when anything turns; helmet for every ride and riding only where a grown-up says; no traffic-rule teaching beyond sourced pages. Every activity has a no-bike path. Kids' own measurements go in ungraded blocks. Cover and hero made in Higgsfield from the existing Rocket, Raven and Nova art.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-10 on learn.lanternlearn.com/courses/bike-shop-g3-5, rocketandraven.com and lanternlearn.com. Numbered D165 because D161 to D164 were taken by the Kitchen thread's decision cards.
- **Links:** rocket-and-raven-press #85, rocketandraven-site #36, lanternlearn-site #29. Related: D141, D160.

### D166: Kitchen course shape
- **Question:** How the Fox & Fern Kitchen course (D143) is built.
- **Options:** None offered (Claude default).
- **Choice:** One Fox & Fern course, Grades 3 to 5 only (`kitchen-g3-5`, Grade 3 reading cap, typed answers), 12 weeks, 15-minute days (10+ enforced), Saturday "Family Cook Day". Generator `foodRules: 'kitchen'`: every recipe card has an "Allergy swap:" line, no recipe uses a major allergen, any stove, oven, knife or hot pan comes with a "grown-up handles" callout, tasting allowed. Facts only from CDC, FDA and NIST pages in SOURCES.md; CCSS math and reading codes checked on thecorestandards.org. Cast: Ferris, Bennie, Lizzy, Riley, Oliver, Hazel, Rosie, Freddy, Lucy. Cover and hero from the Ferris and Bennie art, with no milk or allergen foods shown.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11 (press #106, D161 Publish now).
- **Links:** rocket-and-raven-press #86. Related: D143.

### D167: Course workbooks served as private static assets
- **Question:** The Pages Functions bundle hit the ~25 MiB limit (26.5 MB) with every workbook bundled into the Worker. How to fix it?
- **Options:** None offered (Claude default; coordinator assigned the fix).
- **Choice:** Each workbook is written to `dist/wb-data/<slug>.<hash>.json` at build time and read through the Pages ASSETS binding with a per-isolate cache; a `/wb-data/` route returns 404 so the files are not public. New courses register in `BUNDLED_WORKBOOK_SLUGS` and use the async loaders. Worker went from 25.0 MB to 7 MB.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Links:** rocket-and-raven-press #82.

### D168: Applied AI course length
- **Question:** How long should the adult "Applied AI for parents, teachers and small business" course be?
- **Options:** 8 weeks, about 15 minutes a day, ending with a one-page AI plan (recommended) / 6 weeks / 12 weeks to match AI Explorers.
- **Choice:** 8 weeks (owner tapped the card, 2026-10-10). Built that way.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Done.
- **Links:** press #88, lanternlearn-site #32 (live 2026-10-10). Related: D145, D156, D157.

### D169: Applied AI track delivery
- **Question:** How are the parent, teacher and small-business tracks delivered?
- **Options:** One course with a track section each Thursday (recommended) / three separate courses / parent track first, as D145's roadmap said.
- **Choice:** One course with track days. Built that way.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Done.
- **Links:** press #88, lanternlearn-site #32 (live 2026-10-10). Related: D145, D156, D157.

### D170: Learners' own AI tools in "Try it" tasks
- **Question:** Can adult learners use their own AI tool in the Saturday "Try it" tasks?
- **Options:** Optional, after the never-paste checklist, and every task also works on paper (recommended) / offline only.
- **Choice:** Optional, after the never-paste checklist; every task also works on paper. The course itself never embeds or calls an AI service (D157 style). Built that way.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Done.
- **Links:** press #88, lanternlearn-site #32 (live 2026-10-10). Related: D145, D156, D157.

### D171: Applied AI brand
- **Question:** Which brand does the adult Applied AI course carry?
- **Options:** Lantern Learn with no kid cast (recommended) / Rocket & Raven with Nova.
- **Choice:** Lantern Learn, no kid cast. Built that way.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Done.
- **Links:** press #88, lanternlearn-site #32 (live 2026-10-10). Related: D145, D156, D157.

### D172: Applied AI certificate
- **Question:** Does the adult Applied AI course give a completion certificate?
- **Options:** None offered (Claude default).
- **Choice:** Yes, the platform's existing completion certificate, like the kids' courses.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Links:** plan and fact bank in progress (Applied AI thread). Related: D145, D156, D157.

### D173: AI Explorers Grades 6 to 8 course shape
- **Question:** How the first course in the roadmap's grades 6-8 lane (D145) is built: AI Explorers for middle school.
- **Options:** None offered (Claude default).
- **Choice:** One Rocket & Raven course in the AI Explorers series: AI Explorers Grades 6 to 8 (`ai-explorers-g6-8`, G6+ reading level, 22-word sentences), 12 weeks, about 20-minute days (10+ enforced), Wednesday Explorer Lab and Saturday Explorer Quest like Grades 3-5. Same D157 rules: unplugged, no live AI tool, every fact about real AI from a fact bank in SOURCES.md (AI4K12, NIST AI 100-1, NIST AI 600-1, CSTA). Running thread: Sky Sorter, a paper classifier for telescope snapshots (encode, features, decision tree as flowchart and pseudocode, train/test/refine, bias), then generative AI as next-word prediction, confabulation, automation bias, synthetic media, privacy trade-offs and an AI review board using NIST's trustworthy-AI characteristics. CSTA 2-CS-02, 2-DA-07 to 09, 2-AP-10, 2-AP-15, 2-IC-20, 2-IC-21, 2-IC-23, 2-NI-05. Meta `grade_band` is `all-ages` with "Grades 6 to 8" in the title (like Code Crew G6+), since the grade filter stops at G5. Cover and hero from the existing cast in Higgsfield, at their canonical bible ages (about 10 to 12).
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-10 on learn.lanternlearn.com, rocketandraven.com/series/ai-explorers/ and lanternlearn.com.
- **Links:** rocket-and-raven-press #87, lanternlearn-site #30, rocketandraven-site #37. Related: D145, D156, D157.

### D174: Cast ages in the high-school course
- **Question:** The bible fixes Rocket and Raven at about 10 to 12, but Intro to Computer Science Grades 9 to 10 is for ages 14 to 16. How should the cast appear?
- **Options:** Keep bible ages; the cast is the crew whose app the learner builds and reviews (recommended) / Age the cast up for grades 9 and up, with a bible amendment and new reference art / A new older cast for the high-school lane.
- **Choice:** A new older cast for the high-school lane (owner chose "New characters" on the decision card, 2026-10-10). The new characters' names, looks and roles are D225.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Done.
- **Progress:** Bible section and reference art added; Intro to Computer Science and Data and Society use Comet and Wren (live 2026-10-10).
- **Links:** rocket-and-raven-press #89, rocket-and-raven-press #93, lantern-ui #83. Related: D145, D175, D221, D225.

### D175: Intro to Computer Science Grades 9 to 10 course shape
- **Question:** How the first course in the roadmap's high-school lane (D145) is built.
- **Options:** None offered (Claude default).
- **Choice:** One Rocket & Raven course in the Code Crew series: Intro to Computer Science Grades 9 to 10 (`intro-cs-g9-10`, G6+ reading level, the top band), 12 weeks, about 20-minute days (10+ enforced), a Wednesday Beacon Lab and a Saturday Mission Quest. It is unplugged, written in pseudocode in the AP CSP reference-sheet style, and needs no accounts, apps or AI tools. Security lessons are defensive only. Running thread: Beacon, a paper app for the crew's Moon greenhouse, taken from requirements through pseudocode, search, testing, binary, compression, packets and a launch review. Every computing fact comes from the SOURCES.md fact bank (CSTA 2017 standards, AP CSP Course and Exam Description, Fall 2023). Title follows the "Grades 6 to 8" pattern. Meta `grade_band` is `all-ages`, since the grade filter stops at G5. The course-gen build now knows the 30 CSTA Level 3A codes.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-10 on learn.lanternlearn.com/courses/intro-cs-g9-10, lanternlearn.com/courses/intro-cs-g9-10/ and the rocketandraven.com home page. Listed under the Mission Commander rank so /courses shows it.
- **Links:** rocket-and-raven-press #89, lanternlearn-site #33, rocketandraven-site #38. Related: D145, D174, D176, D177.

### D176: Which CSTA standards the high-school course uses
- **Question:** CSTA published new 2026 PK-12 standards with new codes. Which set does Intro to Computer Science map to?
- **Options:** None offered (Claude default). Alternatives: wait for and map to the 2026 standards; list both.
- **Choice:** The 2017 Level 3A codes, which the build, every other course and the AP crosswalks use, and which were verified against the source. The 2026 codes were not verified; revisit when they are mapped.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Links:** rocket-and-raven-press #89. Related: D175.

### D177: How the high-school course describes its alignment
- **Question:** How course pages describe the link to CSTA and AP Computer Science Principles.
- **Options:** None offered (Claude default). Alternative: say "aligned to", which CSTA reserves for courses through its paid review (currently paused); only an audited school course may be labeled AP.
- **Choice:** "Covers the five big ideas of AP Computer Science Principles and practices CSTA Level 3A standards", plus "not an AP course and not affiliated with College Board". Never "aligned to" or "AP course".
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Links:** rocket-and-raven-press #89. Related: D175.

### D178: Backyard Explorer course shape, region field and field guide
- **Question:** How Backyard Explorer (D144, roadmap stage Now) is built: course split, reading level, how the region reaches the lesson, where the species lists come from, standards and artwork.
- **Options:** None offered (Claude default). One point refines D144: D144 planned one generated workbook variant per region; this builds one workbook per course with a `field_guide` block that fills in at render time from the resolved region, so the lessons stay identical everywhere and only the species table changes.
- **Choice:** Two Rocket & Raven science courses in a new Backyard Explorer series: Backyard Explorer: Kindergarten to Grade 2 (`backyard-explorer-k2`, Grade 1 reading cap, tap-only, daily Word Spot on the Grade 1 list, Saturday "Explorer Day") and Backyard Explorer: Grades 3 to 5 (`backyard-explorer-g3-5`, Grade 3 reading cap, typed answers allowed). 12 weeks each, 15-minute days (10+ minutes enforced). Weeks: explorer eyes and the sit spot, birds, insects, plants, mammals, reptiles and amphibians, animal homes, weather, young and grown-up, seasons, counting and comparing, explorer badge (K-2); the field notebook, habitat maps, birds, insects and pollinators, plants, signs and safety, food webs, living in groups, life cycles, seasons and migration, when habitats change, citizen scientist (3-5). Region: an optional `region` field on the kid profile (nine coarse regions: Whole United States, Northeast and Great Lakes, Southeast, Great Plains and Texas, Mountain West, Desert Southwest, Pacific Coast, Alaska, Hawaii; default Whole United States; never a town or ZIP), set when a kid is created or from the kid page; a lesson page resolves `?region=` first, then the active kid's region, then Whole United States, and the field-guide block carries a region picker. Species lists: the top species per region and group (birds, mammals, insects, reptiles, amphibians, plants) by GBIF human-observation record counts in the region's states, carrying only names and the months with the most records; no habits, sizes or other facts. Lessons never grade a question on the list (regions differ), only open tasks use it. Safety block on every outdoor day: look, do not touch; a grown-up comes along; no eating anything found. Standards: NGSS K-LS1-1, K-ESS2-1, K-ESS3-1, K-ESS3-3, 1-LS1-1, 1-LS3-1, 1-ESS1-2, 2-LS4-1, 3-LS1-1, 3-LS2-1, 3-LS4-3, 3-LS4-4, 4-LS1-1, 4-LS1-2, 5-LS1-1, 5-LS2-1, 5-ESS3-1 (one CCSS code, 3.MD.B.3, on the graphing week). "Milk" is an allergen-rule word, so mammals "nurse" their young. Art: covers, heroes and one lesson illustration per week (24) generated in Higgsfield from the Rocket, Raven and Nova references; three renders (flat colour band, wrong outfits, quadcopter Nova) were redone.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live on the platform (rocket-and-raven-press #90 merged 2026-10-10). Site listings: lanternlearn-site #34, rocketandraven-site #39.
- **Links:** rocket-and-raven-press #90, lanternlearn-site #34, rocketandraven-site #39. Related: D141, D144, D154, D159.

### D179 (Everyday Machines): Everyday Machines course shape
- **Note:** D179 was also used by the Intro to Computer Science thread; this entry is the Everyday Machines one.
- **Question:** The expansion study (D141) listed Everyday Machines (how a zipper, a lock, a faucet, a toilet, a light switch, a fridge, a thermostat, a car and an elevator work) as idea 5. What shape does it take, and how does it avoid overlapping Builder's Lab and Bike Shop?
- **Options:** One all-ages course (K to 5 with a grown-up, Grade 2 reading level, tap-only answers), the same shape as Builder's Lab, under Rocket & Raven, one home object a week, take-apart items limited to unplugged, battery-free, grown-up-approved objects such as an old click pen (recommended) / two courses, K to 2 and Grades 3 to 5 / fold the objects into Builder's Lab as extra weeks.
- **Choice:** One all-ages course, `everyday-machines`, series `everyday-machines`, 12 weeks, Saturday "Machine Day". Weeks: machines everywhere (wheel and axle), the zipper, lock and key, the faucet, the toilet, the light switch, magnets at home, the refrigerator, the thermostat, springs and click pens, how a car moves, the elevator and a Machine Show. Levers, pulleys, parachutes, boats and balloon cars stay in Builder's Lab; bike parts and repairs stay in Bike Shop; each gets a one-sentence pointer. Only AA or smaller batteries, in a flashlight a grown-up loads; nothing plugged in is opened. Every fact is checked against an official, museum, university or extension page listed in the course's SOURCES.md.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live on lanternlearn.com 2026-10-10: 12 weeks, 72 days, 13 to 15 minutes each, every fact listed in SOURCES.md, cover, hero and 12 lesson illustrations. Course pages on lanternlearn.com and rocketandraven.com.
- **Links:** rocket-and-raven-press #91, lanternlearn-site #36, rocketandraven-site #40. Related: D141, D165.

### D200: First Grades 6 to 8 science course
- **Question:** The K to 5 expansion queue (Home Helpers, Backyard Explorer, Everyday Machines) is finished and the Grades 6 to 8 lane has only AI Explorers 6 to 8 and Intro to Computer Science. Which middle-school science course is built first?
- **Options:** Weather Lab, weather and climate with a home weather station and real NOAA and NASA data (recommended; richest free public data, no heat, chemicals or tools, covers the uncovered MS-ESS2 and MS-ESS3 standards) / Sports Physics, forces, motion and energy measured in a yard or park / Matter Lab, home chemistry with a grown-up at every heat step.
- **Choice:** Weather Lab Grades 6 to 8, `weather-lab-g6-8`, series `weather-lab`, Rocket & Raven, band G6+, 12 weeks, about 20 minutes a day, Saturday "Station Day". Weeks: weather or climate, the Sun heats the Earth unevenly, air pressure, wind, water in the air, clouds, precipitation, air masses and fronts, storms and safety, oceans and climate zones, the climate record, forecast and design. Climate is taught as NOAA and NASA state it, no politics; storm week is safety first. The build's NGSS allow-list gains the middle-school codes checked on nextgenscience.org (MS-PS1, MS-PS3, MS-PS4, MS-ESS2, MS-ESS3, MS-ETS1).
- **Date:** 2026-10-10. **Decided by:** Claude (default), confirmed by owner on the decision card 2026-10-10. **Status:** Done.
- **Progress:** Live 2026-10-10: 12 weeks, 72 days at 14 to 21 minutes, every fact in SOURCES.md, cover, hero and 12 lesson illustrations. Course pages on lanternlearn.com and rocketandraven.com.
- **Links:** rocket-and-raven-press #96, lanternlearn-site #38, rocketandraven-site #42. Related: D145, D173, D179 (Everyday Machines).

### D201: Second Grades 6 to 8 science course
- **Question:** With Weather Lab live (D200), which middle-school science course comes next?
- **Options:** Matter Lab, kitchen-bench chemistry covering MS-PS1 (recommended; the one NGSS middle-school strand with no course, kitchen materials only, builds on the Weather Lab format) / Sports Physics, forces, motion and energy measured outdoors / Cells and Systems, life science (MS-LS codes are not yet in the build's allow-list).
- **Choice:** Matter Lab Grades 6 to 8, `matter-lab-g6-8`, series `matter-lab`, Rocket & Raven, band G6+, 12 weeks, about 20 minutes a day, Saturday "Bench Day". Weeks: matter and atoms, states of matter, heat and changing state, density, mixtures and solutions, molecules, physical or chemical change, conservation of mass, acids and bases with a cabbage indicator, reactions that give or take energy, natural to synthetic materials, design project. Kitchen materials only, never cleaners; nothing tasted; a grown-up handles heat and cutting; safety glasses on fizzing weeks. Every fact from NIST, PubChem, USGS, NASA, EIA, FDA or a university page in SOURCES.md. Chris can switch the pick on the decision card in the thread.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11: 12 weeks, 72 days at 15 to 22 minutes, SOURCES.md complete; course at learn.lanternlearn.com/courses/matter-lab-g6-8, listed on lanternlearn.com and rocketandraven.com.
- **Links:** rocket-and-raven-press #98, lanternlearn-site #40, rocketandraven-site #43, lantern-ui #91. Related: D145, D200, D202.

### D202: Grades 6 to 8 and 9 to 12 bands on the course platform
- **Question:** The platform's grade band model stops at Grade 5 (K, G1 to G5, all-ages, adult), so Weather Lab, AI Explorers 6 to 8, Intro to Computer Science, Data and Society and Matter Lab are labeled "All ages" on course cards and in the catalog filter (raised by Codex review on rocket-and-raven-press #96). Add real middle and high school bands?
- **Options:** Add both bands, G6-8 and G9-12, to the course label, the /courses grade filter and the kid profile grade picker (recommended) / add G6-8 only / keep "All ages".
- **Choice:** Add both bands: G6-8 and G9-12 on course cards and detail pages, in the /courses grade filter and in the kid profile grade picker. Weather Lab, AI Explorers 6 to 8 and Matter Lab move to G6-8; Intro to Computer Science and Data and Society to G9-12. Mission Commander (Grade 6 and up), Builder's Lab, Astronomy Year and Everyday Machines stay all-ages.
- **Date:** 2026-10-10. **Decided by:** owner (decision card). **Status:** Done.
- **Progress:** Done 2026-10-11: rocket-and-raven-press #102 and lanternlearn-site #44 merged. Weather Lab, AI Explorers 6-8 and Matter Lab are G6-8; Intro CS, Data and Society and AI and You are G9-12.
- **Links:** rocket-and-raven-press #102, lanternlearn-site #44. Related: D145, D200, D201.

### D203: Third Grades 6 to 8 science course
- **Question:** With Weather Lab (earth science) and Matter Lab (chemistry) live, which middle-school science course comes next?
- **Options:** Sports Physics, forces, motion and energy measured with sports gear, MS-PS2 and MS-PS3 (recommended; completes the physical-science pair, codes verified on nextgenscience.org, same no-purchase format) / Cells and Systems, life science, MS-LS1 (needs the MS-LS codes added to the build's allow-list and more careful sourcing) / Earth and Space, MS-ESS1 and MS-ESS2, with night-sky observation / Pause the lane and take the next roadmap gap.
- **Choice:** Sports Physics Grades 6 to 8, `sports-physics-g6-8`, series `sports-physics`, Rocket & Raven, band G6+, grade band G6-8 (D202), 12 weeks, about 20 minutes a day, Saturday "Game Day". Weeks: measuring motion, balanced and unbalanced forces, mass and motion, gravity, friction and air, kinetic energy, potential energy, bounce and energy transfer, action and reaction, magnets and static (fields), throws and arcs, a landing-pad design project. Gear a family already has: a soft ball, a tape measure, a timer, masking tape, a cardboard ramp, a rubber band, a fridge magnet. Soft balls only, nothing thrown at a person, drops from standing height. Every fact from NASA, NIST or a university page in SOURCES.md. MS-PS2-1 to MS-PS2-5 added to the course-gen allow-list after checking the nextgenscience.org DCI page. Chris can switch the pick on the decision card in the project chat.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11 on learn.lanternlearn.com/courses/sports-physics-g6-8, lanternlearn.com/courses/sports-physics-g6-8/ and rocketandraven.com/series/sports-physics/. 72 days at 17 to 20 minutes, every fact traced in SOURCES.md.
- **Links:** rocket-and-raven-press #104, lanternlearn-site #45, rocketandraven-site #45, lantern-ui #96. Related: D145, D200, D201, D202.

### D204: Fourth Grades 6 to 8 science course
- **Question:** With Weather Lab (earth science), Matter Lab (chemistry) and Sports Physics (physics) live, which middle-school course comes next?
- **Options:** Cells and Systems 6-8, life science, MS-LS1-1 to MS-LS1-8 (recommended; the last NGSS middle-school science domain missing, same windowsill-and-jars no-purchase format, codes verified on nextgenscience.org) / Earth and Space 6-8, MS-ESS1, with night-sky observation (codes already in the allow-list) / Ratios and Data 6-8, extending Number Trail into CCSS 6-8 math / Pause the Grades 6-8 lane and take the next roadmap gap.
- **Choice:** Cells and Systems Grades 6 to 8, `cells-systems-g6-8`, series `cells-systems`, Rocket & Raven, band G6+, grade band G6-8 (D202), 12 weeks, about 20 minutes a day, Saturday "Nature Day". Weeks: living or not, one cell or many (yeast and a balloon), inside a cell (a bag-of-water model), plant cells (celery in tinted water), cells to tissues to organs (pulse), systems working together (breaths after a run), senses and signals (ruler-drop reaction test), photosynthesis (a leaf in the dark), food becoming you (a paper-chain model), environment and inheritance (sprouts in light and dark), making more (flowers, seeds, nests and herds only, no anatomy), a growing-station design project. Gear a family already has: jars, paper towels, pantry beans or lentils, a hand lens, a ruler, a timer, a flashlight, foil, a celery stalk, a balloon, baking yeast. Nothing tasted; pulse and breath counts are science readings, never medical advice. Every fact from MedlinePlus and MedlinePlus Genetics, genome.gov, OpenStax, NIST, NASA, USDA ARS or the nextgenscience.org DCI pages in SOURCES.md (NCBI Bookshelf and NASA Climate Kids were unreachable while writing and are not cited). "Blood" stays a restricted word in this course, so lessons say vessels, fluid or materials (the D142 exception is Body Lab only). MS-LS1-1 to MS-LS1-8 added to the course-gen allow-list after checking the nextgenscience.org DCI page. The decision card is in the project chat; a different tap switches the course.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11 on learn.lanternlearn.com/courses/cells-systems-g6-8, lanternlearn.com/courses/cells-systems-g6-8/ and rocketandraven.com/series/cells-systems/. Every day 17 to 20 minutes; 51 courses in the manifest.
- **Links:** rocket-and-raven-press #107, lanternlearn-site #47, rocketandraven-site #47, lantern-ui #100, scripts/course-gen/courses/cells-systems-g6-8. Related: D142, D145, D200, D201, D202, D203.

### D205: Fifth Grades 6 to 8 science course
- **Question:** With all four NGSS middle-school science domains live (Weather Lab, Matter Lab, Sports Physics, Cells and Systems), which Grades 6 to 8 course comes next?
- **Options:** Earth and Space 6-8, MS-ESS1-1 to MS-ESS1-4 plus MS-ESS2-1, with lamp-and-ball models, NASA data tables and the rock record (recommended; codes already allow-listed, same no-purchase format, fills the space-systems and deep-time gap Weather Lab left) / Ratios and Data 6-8, extending Number Trail into CCSS 6-8 math (opens a math lane; needs a new CCSS allow-list) / Reading and Writing 6-8, extending Story Trail into middle-school ELA (standards research first) / Pause Grades 6-8 and move to the high-school stage.
- **Choice:** Earth and Space Grades 6 to 8, `earth-space-g6-8`, series `earth-space`, Rocket & Raven, band G6+, grade band G6-8 (D202), 12 weeks, about 20 minutes a day, Saturday "Sky Night". Weeks: day and night, Moon phases, eclipses, seasons (tilt, never distance), gravity holding the solar system, the disk of dust and gas it formed from, planet distances walked to scale, planet sizes and properties from the NASA fact sheet, the rock cycle, reading rock layers (relative dating), a 4.6-billion-year timeline, and a solar-system model design project. Gear a family already has: a flashlight or lamp, two balls, paper, a tape measure, string, a plastic bottle with sand and soil, a toilet-paper roll, a few loose rocks. Safety: never look at the Sun, night observation only with a grown-up, rocks only from a path or own yard. Astronomy Year stays the observation course; this is the modeling and data course and does not repeat its sky missions. Every fact from NASA (science.nasa.gov, NSSDC fact sheets, Space Place), OpenStax Astronomy 2e, USGS publications, LibreTexts Physical Geology or the National Park Service in SOURCES.md. MS-ESS1-4 added to the course-gen allow-list after checking the nextgenscience.org DCI page. The decision card is in the project chat; a different tap switches the course.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11 on learn.lanternlearn.com/courses/earth-space-g6-8, lanternlearn.com/courses/earth-space-g6-8/ and rocketandraven.com/series/earth-space/. Twelve weeks, 17 to 21 minutes a day, SOURCES.md with every fact traced.
- **Links:** rocket-and-raven-press #108, lanternlearn-site #48, rocketandraven-site #48, lantern-ui #101. Related: D145, D200, D201, D202, D203, D204.

### D206: First Grades 6 to 8 math course
- **Question:** With all five Grades 6 to 8 science courses live, which course does the expansion thread build next?
- **Options:** Ratios and Data 6-8, extending Number Trail K-5 into middle-school math (ratios, rates, percents, dividing fractions, decimals, negative numbers, proportional relationships, statistics, probability), CCSS 6-8 codes checked on thecorestandards.org (recommended; the catalog has no math above grade 5, same no-purchase format, Number Trail's computed-answer helpers already exist) / Reading and Writing 6-8, extending Story Trail into middle-school ELA (standards research first) / Civics and Government 6-8 under Rocket & Raven (C3 Framework research first) / Pause Grades 6-8 and build the next high-school course.
- **Choice:** Ratios and Data Grades 6 to 8, `ratios-data-g6-8`, series `ratios-data`, subject math, Rocket & Raven, band G6+, grade band G6-8 (D202), 12 weeks, about 20 minutes a day, Saturday "Data Day". Weeks: ratios; rates and speed; percents; dividing fractions; decimals, factors and multiples; below zero; adding and subtracting signed numbers; multiplying and dividing signed numbers; proportional relationships (with a first look at scatter plots, 8.SP.A.1); statistical questions and plots; center and spread; probability and the Data Fair. Running thread: the Numbers Desk at the kitchen table, planning a Field Day for younger kids. Gear a family already has: two colors of counters, paper strips, masking tape, a tape measure, a timer, a paper plate and a paper clip. No money anywhere (MONEY_RE): rates are speeds, recipes, plant growth, temperatures and game points. The decision card is in the project chat; a different tap switches the course.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11 on learn.lanternlearn.com/courses/ratios-data-g6-8, lanternlearn.com/courses/ratios-data-g6-8/ and rocketandraven.com/series/ratios-data/. Twelve weeks, every answer computed in code, CCSS 6.RP, 6.NS, 6.SP, 7.RP, 7.NS, 7.SP and 8.SP.A.1 quoted in SOURCES.md.
- **Links:** rocket-and-raven-press #109, lanternlearn-site #49, rocketandraven-site #49, lantern-ui #102. Related: D145, D202, D205, D207, D247 to D249, D251.

### D207: Ratios and Data method, scope and computed answers
- **Question:** How the first middle-school math course is built.
- **Options:** None offered (Claude default).
- **Choice:** Same method as Number Trail (D248, D249): systematic, concrete-then-picture-then-number, number lines, word problems, no timed drills; every answer computed by `scripts/course-gen/mathviz.mjs` and the new `scripts/course-gen/mathviz68.mjs` (ratio tables, tape diagrams, double number lines, hundred grids, signed number lines, four-quadrant planes, dot plots, histograms, box plots, scatter plots, proportional graphs, spinners; unit-rate, percent, statistics and probability questions). `calcQ` and the build's number-sentence check now read negative numbers. Scope: CCSS 6.RP, 6.NS, 6.SP, 7.RP, 7.NS, 7.SP and 8.SP.A.1 (parent codes only); 6.EE, 7.EE, 7.G, 8.EE, 8.F and 8.G are left for a later Expressions and Equations course. Quartiles are the medians of the lower and upper halves, the median left out when the count is odd.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Used by all twelve weeks of Ratios and Data 6-8, live 2026-10-11.
- **Links:** rocket-and-raven-press #109. Related: D206, D248, D249.

### D208: Second Grades 6 to 8 math course
- **Question:** With Ratios and Data 6-8 live, which Grades 6 to 8 course does the expansion thread build next?
- **Options:** Expressions and Equations 6-8, the second middle-school math course (CCSS 6.EE, 7.EE, 8.EE, 8.F: powers, variables, equivalent expressions, equations and inequalities, slope, linear functions, systems, scientific notation), reusing the mathviz68 helpers so it builds fastest (recommended; middle-school math is complete after it) / Reading and Writing 6-8, extending Story Trail into middle-school ELA (CCSS ELA research first, no computed-answer helpers) / Civics and Government 6-8 under Rocket & Raven (C3 Framework research first; the hardest to source) / Pause Grades 6-8 and build the next high-school course.
- **Choice:** Expressions and Equations Grades 6 to 8, `expressions-equations-g6-8`, series `expressions-equations`, subject math, Rocket & Raven, band G6+, grade band G6-8 (D202), 12 weeks, about 20 minutes a day, Saturday "Puzzle Day". Weeks: powers and the order of operations; letters stand for numbers; equivalent expressions; the balance (one-step equations); inequalities; two-step equations; two quantities that change together; slope; linear functions; solving linear equations; two equations at once; big numbers, small numbers and Puzzle Night. Running thread: the Puzzle Post, a garage-corner algebra workshop (a coat-hanger balance with paper cups, beans, envelopes that hide a number, index cards, a cardboard rule machine, graph paper), writing a weekly puzzle for the kids on the street. No money anywhere (MONEY_RE). The decision card is in the project chat; a different tap switches the course.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11: https://learn.lanternlearn.com/courses/expressions-equations-g6-8, https://lanternlearn.com/courses/expressions-equations-g6-8/, https://rocketandraven.com/series/expressions-equations/. Twelve weeks, 72 days, every day 18 to 21 minutes, workbook bundled. Middle-school math (Ratios and Data plus Expressions and Equations) is complete.
- **Links:** rocket-and-raven-press #110, lanternlearn-site #50, rocketandraven-site #50, lantern-ui #103. Related: D145, D202, D206, D207, D209, D248, D249.

### D209: Expressions and Equations method, scope and computed answers
- **Question:** How the second middle-school math course is built.
- **Options:** None offered (Claude default).
- **Choice:** Same method as Number Trail and Ratios and Data (D248, D249, D207): concrete (beans, envelopes, a coat-hanger balance), then picture, then symbols; no timed drills; every answer computed by `scripts/course-gen/mathvizalg.mjs` (a one-letter linear-expression engine: evaluate, simplify, factor, solve equations and inequalities, solve two-by-two systems, slope and intercept, scientific notation, roots and exponent rules; pictures of the balance, inequality number lines, rule machines, line graphs and slope triangles) on top of mathviz.mjs and mathviz68.mjs. Scope: CCSS 6.EE, 7.EE, 8.EE and 8.F (parent codes only); 6.G, 7.G, 8.G and 8.NS are left for a later geometry course. The balance model: an equation is a level coat hanger, and solving means doing the same to both cups.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Done 2026-10-11 with D208. Writers added local wrappers in week files where a helper was missing (two-letter formulas, words-to-expression, function tables, system solution counts, negative exponents); hanger() caps at 12 beans a side and lineGraph at 20, so larger data are tables only.
- **Links:** rocket-and-raven-press #110. Related: D208, D207, D248, D249.

### D210: Third Grades 6 to 8 math course
- **Question:** With Expressions and Equations 6-8 live, which Grades 6 to 8 course does the expansion thread build next?
- **Options:** Geometry and Measurement 6-8, the third middle-school math course (CCSS 6.G, 7.G, 8.G, 8.NS: area, nets and volume, scale drawings, triangles, circles, angles, transformations, the Pythagorean theorem, round solids, irrational numbers), reusing the mathviz68 helpers so it builds fastest and completes every CCSS 6-8 math domain (recommended) / Reading and Writing 6-8, extending Story Trail into middle-school ELA (CCSS ELA research first) / Civics and Government 6-8 under Rocket & Raven (C3 Framework research first) / Pause Grades 6-8 and build the next high-school course.
- **Choice:** Geometry and Measurement Grades 6 to 8, `geometry-measurement-g6-8`, series `geometry-measurement`, subject math, Rocket & Raven, band G6+, grade band G6-8 (D202), 12 weeks, about 20 minutes a day, Saturday "Build Day". Weeks: area by cutting and composing; polygons on the grid; nets and surface area; volume; scale drawings; triangles with rules, and slices; circles; angles; slides, flips and turns; dilations and similar figures; the Pythagorean theorem; round solids, irrational numbers and Build Day. Running thread: the Blueprint Table, a garage design studio where the crew designs, draws and builds a cardboard model clubhouse (cardboard, scissors, a ruler and tape measure, string, a protractor, graph paper, cubes, straws, an empty can, a flashlight), and every week's math makes one part of the build work. No money anywhere (MONEY_RE). The decision was sent to the project chat; a different tap switches the course.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11: https://learn.lanternlearn.com/courses/geometry-measurement-g6-8, https://lanternlearn.com/courses/geometry-measurement-g6-8/, https://rocketandraven.com/series/geometry-measurement/. Twelve weeks, 72 days, every day 17 to 21 minutes, workbook bundled. Every CCSS Grade 6 to 8 math domain now has a course.
- **Links:** rocket-and-raven-press #111, lanternlearn-site #51, rocketandraven-site #51, lantern-ui #104. Related: D145, D202, D206, D208, D209, D211, D248, D249.

### D211: Geometry and Measurement method, scope and computed answers
- **Question:** How the third middle-school math course is built.
- **Options:** None offered (Claude default).
- **Choice:** Same method as Number Trail, Ratios and Data and Expressions and Equations (D248, D249, D207, D209): concrete (cut paper, string around a can, straws, cubes, a leaned ladder), then picture, then symbols; no timed drills; every answer computed by `scripts/course-gen/mathvizgeo.mjs` (exact areas, surface areas and volumes with pi as 3.14, coordinate moves and their rules, scale, triangle inequality, angle pairs, the Pythagorean theorem and distance, roots to one decimal place, repeating decimals as fractions; SVG figures, nets, grids, angle pairs, transversals, transformations, right triangles with squares on the sides, solids and root number lines) on top of mathviz.mjs and mathviz68.mjs. Scope: CCSS 6.G, 7.G, 8.G and 8.NS (parent codes only); with it every Grade 6 to 8 CCSS math domain has a course. Pi is 3.14 throughout and every circle question says so. Safety: scissors only, never a craft knife; empty smooth-rim cans; clay sliced with string; the ladder is leaned and measured, never climbed; the flashlight never shines in eyes.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Done 2026-10-11 with D210. Writers added local wrappers in week files where a helper was missing (composite solids, scale factor from two lengths, angle-angle similarity, box diagonals, sequences of moves, cone-fuls); polyGrid draws coordinates only up to 10, and transform() alt text needs shortening for figures with three or more points.
- **Links:** rocket-and-raven-press #111. Related: D210, D209, D207, D248, D249.

### D212: Fourth Grades 6 to 8 course after the math domains
- **Question:** With Geometry and Measurement 6-8 live and every CCSS 6-8 math domain covered, which Grades 6 to 8 course does the expansion thread build next?
- **Options:** Reading and Writing 6-8 under Rocket & Raven, extending Story Trail into middle-school English language arts (CCSS RL, RI, W and L for Grades 6 to 8: evidence, theme, plot and character, word choice, point of view, informational texts, arguments, and narrative, explanatory and argument writing with revision), the one core subject the middle-school catalog still lacks (recommended) / Civics and Government 6-8 under Rocket & Raven (C3 Framework research first) / A second middle-school coding course (Code Crew 6-8, D220) / Pause Grades 6-8 and build the next high-school course.
- **Choice:** Reading and Writing Grades 6 to 8, `reading-writing-g6-8`, series `reading-writing`, subject reading, Rocket & Raven, band G6+, grade band G6-8 (D202), 12 weeks, about 20 minutes a day, Saturday "Press Day". Weeks: Evidence Hunters; Theme and Central Idea; Plot and Character; Word Choice and Tone; Structure and Point of View; Narrative Writing; Informational Texts; Explanatory Writing; Tracing Arguments; Argument Writing; Comparing Texts and Poems; Revise, Edit and Press Day. Running thread: The Signal, the crew's neighborhood paper, run from the Signal Desk on the porch; every week's reading teaches a skill the week's writing needs; the student keeps a Signal notebook. The decision was sent to the project chat; a different tap switches the course.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11: https://learn.lanternlearn.com/courses/reading-writing-g6-8, https://lanternlearn.com/courses/reading-writing-g6-8/, https://rocketandraven.com/series/reading-writing/. Twelve weeks, 72 days, every day 16 to 20 minutes, workbook bundled. The first middle-school English language arts course.
- **Links:** rocket-and-raven-press #112, lanternlearn-site #52, rocketandraven-site #52, lantern-ui #105. Related: D145, D202, D210, D213, D245, D246.
- **Owner tap (2026-10-11):** after the course was live, Chris tapped "QA and polish: stop new courses and polish the live grades 6-8 courses" on the card. Reading and Writing stays live; the polish pass is D284.

### D213: Reading and Writing method, scope and fact policy
- **Question:** How the middle-school English language arts course is built.
- **Options:** None offered (Claude default).
- **Choice:** Reading days follow the WWC guide "Improving Adolescent Literacy" (explicit vocabulary, explicit comprehension strategy instruction, discussion of text meaning, engagement) and writing days follow the WWC guide "Teaching Secondary Students to Write Effectively" (Model, Practice, Reflect; writing tied to reading; a checklist for feedback). Every weekday: crew story, Learn it with a modeled example, a new 150 to 300 word passage in a Read it callout, 2 to 4 checked blocks whose retry lines point back at the text (choose, true/false, sequence, short typed answers the passage contains), a Signal notebook journal, Wednesday Writing Lab with a checklist, Friday review, Saturday Press Day with a family partner activity. Scope: parent codes only from CCSS RL, RI, W and L, Grades 6 to 8. Fact policy as Story Trail (D246): original crew fiction and made-up-world Signal nonfiction; the only outside texts are two public-domain poems (Frost, "The Road Not Taken", Gutenberg #29345; Dickinson, "'Hope' is the thing with feathers", Gutenberg #12242), quoted exactly. No money words, nothing eaten, no dashes used or taught anywhere.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Done 2026-10-11 with D212. Writers kept every passage original; the two poems are quoted line for line from the Gutenberg texts; one near-fact story line (cork and damp) was reworded to an observation about the crew's own board. Minutes land at 16.5 to 19.8 per day.
- **Links:** rocket-and-raven-press #112. Related: D212, D245, D246.

### D214: First high-school math course
- **Question:** With Reading and Writing 6-8 live, which course does the expansion thread build next?
- **Options:** Algebra 1 Grades 9 to 12 under Rocket & Raven with the high-school crew, covering the Common Core high-school algebra, functions, number and statistics standards usually taught in Algebra 1, reusing and extending the computed-answer math helpers (recommended) / Civics and Government 6-8 under Rocket & Raven (C3 Framework and public-domain documents, a sourcing pass first) / Biology 9-12 under Rocket & Raven (NGSS HS-LS) / Pause and wait for direction.
- **Choice:** Algebra 1 Grades 9 to 12, `algebra-1-g9-12`, series `algebra-1`, subject math, Rocket & Raven, band G6+, grade band G9-12 (D202), 12 weeks, about 20 minutes a day, Saturday "Loft Day", cast Comet, Wren and Nova (D225). Weeks: Quantities and the Shape of an Expression; Equations and Inequalities in One Variable; Functions; Linear Graphs and Rates of Change; Linear Models and Sequences; Systems of Equations and Inequalities; Exponents and Exponential Change; Polynomials; Factoring; Quadratic Equations; Quadratic Functions and Their Graphs; Data from the Loft and Fair Day. Running thread: the Loft, the crew's garage-loft workshop, where they build a ramp course and a bottle-rocket launcher for a neighborhood Maker Fair; every week's math makes a build work; the student keeps a Loft Log. The decision was sent to the project chat; a different tap switches the course.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11: 12 weeks, 72 days, 17.6 to 21 minutes a day, every number question computed by the math helpers, 14 high-school-crew images. https://learn.lanternlearn.com/courses/algebra-1-g9-12, https://lanternlearn.com/courses/algebra-1-g9-12/, https://rocketandraven.com/series/algebra-1/.
- **Links:** rocket-and-raven-press #113, lanternlearn-site #53, rocketandraven-site #53, lantern-ui #106. Related: D145, D202, D208, D215, D225.

### D215: Algebra 1 method, scope and fact policy
- **Question:** How the first high-school math course is built.
- **Options:** None offered (Claude default).
- **Choice:** Method from the WWC guide "Teaching Strategies for Improving Algebra Knowledge in Middle and High School Students" (a solved problem to study on Mondays, the structure of expressions, comparing solution strategies on Tuesdays and for quadratics). Scope: parent codes only from CCSS N-Q, N-RN, A-SSE, A-APR, A-CED, A-REI, F-IF, F-BF, F-LE and S-ID; the course build's CCSS check now accepts high-school codes. Every number question and picture comes from the math helpers (mathviz, mathviz68, mathvizalg and the new mathvizquad: polynomial arithmetic, factoring, exact and decimal roots, vertex form, rational exponents, sequences, least-squares fits, parabola and exponential pictures, algebra tiles). Fact policy: no facts about the world, no physics constants (the rocket's height rule is the crew's model from their own stopwatch data), no money words, every data set the crew's own made-up Loft data. Rocket launches say a grown-up is present. No dashes.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Applied across all 12 weeks; the course build's week checks pass (sources, standards codes, minutes, reading band).
- **Links:** rocket-and-raven-press #113, lantern-ui #106. Related: D214, D209, D249.

### D216: Second high-school math course
- **Question:** With Algebra 1 9-12 live, which course does the expansion thread build next?
- **Options:** Geometry Grades 9 to 12 under Rocket & Raven with the high-school crew, covering the Common Core high-school geometry standards and reusing the geometry and algebra helpers (recommended) / Biology 9-12 under Rocket & Raven (NGSS HS-LS, a fact-sourcing pass first) / Civics and Government 6-8 under Rocket & Raven (C3 Framework and public-domain documents, a sourcing pass first) / Pause and wait for direction.
- **Choice:** Geometry Grades 9 to 12, `geometry-g9-12`, series `geometry`, subject math, Rocket & Raven, band G6+, grade band G9-12 (D202), 12 weeks, about 20 minutes a day, Saturday "Shop Day", cast Comet, Wren and Nova (D225). Weeks: Points, Lines and the Chalk Grid; Rigid Motions and Symmetry; Congruence from Rigid Motions; Proofs about Lines, Angles, Triangles and Parallelograms; Dilations and Similarity; Similar Triangles and Proof; Right Triangles and Trigonometry; Circles; Coordinates: Lines, Segments and Figures; Equations of Circles and Parabolas; Volume: Where the Formulas Come From; Modeling the Set and Opening Night. Running thread: the Scene Shop behind the neighborhood theater, where the crew builds the set for the spring show; every week's geometry makes a piece of the set work; the student keeps a Shop Book. The decision was sent to the project chat; a different tap switches the course.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11. Twelve weeks, 72 days at 18 to 21 minutes, every number answer computed by the helpers, per-week sources merged into SOURCES.md. Course page https://lanternlearn.com/courses/geometry-g9-12, learner app https://learn.lanternlearn.com/courses/geometry-g9-12.
- **Links:** rocket-and-raven-press #114 (merged), lanternlearn-site #54, rocketandraven-site #54, lantern-ui #107. Related: D145, D202, D210, D214, D217, D225.

### D217: Geometry method, scope and fact policy
- **Question:** How the second high-school math course is built.
- **Options:** None offered (Claude default).
- **Choice:** Method from the standards' own high-school Geometry introduction: congruence defined by rigid motions and similarity by rigid motions plus dilations, the triangle criteria established from rigid motions and then used in proofs, trigonometry built on similarity, coordinates connecting algebra and geometry; Monday worked examples and proofs read before they are completed (the WWC solved-problem practice). Scope: parent codes only from CCSS G-CO, G-SRT, G-C, G-GPE, G-GMD and G-MG, no (+) codes. Every number question and picture comes from the math helpers (mathviz, mathviz68, mathvizgeo, mathvizalg, mathvizquad and the new mathvizhsgeo: coordinate geometry, general reflections and rotations, dilations about a center, polygon angles, congruence criteria, right-triangle trigonometry, arcs, sectors, radians, circle and parabola equations, volumes, and labeled pictures including constructions). Proof questions are choose, order and one-word fill. Pi is 3.14; roots and trig values are decimals. Fact policy: no facts about the world, no named buildings or distances, no money words, every data set the crew's own made-up Scene Shop data. Ladders are held by a grown-up; cutting is scissors on cardboard. No dashes.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Applied in all twelve weeks; check-weeks reports 0 rule errors and 0 short days; build passed CI.
- **Links:** rocket-and-raven-press #114 (merged). Related: D216, D211, D215, D249.

### D218: Third high-school math course
- **Question:** With Geometry 9-12 live, which course does the expansion thread build next?
- **Options:** Algebra 2 Grades 9 to 12 under Rocket & Raven with the high-school crew, finishing the high-school algebra sequence and reusing the algebra, quadratic and geometry helpers (recommended) / Biology 9-12 under Rocket & Raven (NGSS HS-LS, a fact-sourcing pass first) / Civics and Government 6-8 under Rocket & Raven (C3 Framework and public-domain documents, a sourcing pass first) / Pause and wait for direction.
- **Choice:** Algebra 2 Grades 9 to 12, `algebra-2-g9-12`, series `algebra-2`, subject math, Rocket & Raven, band G6+, grade band G9-12 (D202), 12 weeks, about 20 minutes a day, Saturday "Garden Day", cast Comet, Wren and Nova (D225). Weeks: Complex Numbers and the Arc That Never Lands; Polynomial Functions; Dividing Polynomials; Rational Expressions and Equations; Radicals and Inverse Functions; Exponential Functions and Geometric Series; Logarithms; The Function Toolkit; Trigonometry on the Unit Circle; Periodic Models; Probability in the Seed Trays; Seedling Heights and the Open House. Running thread: the Glass House, the empty greenhouse behind the community center that the crew restores for a spring Open House; every week's algebra makes a piece of the greenhouse work; the student keeps a Glass House Log. The decision was sent to the project chat; a different tap switches the course.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11. Twelve weeks, 72 days at 18 to 22 minutes, every number answer computed by the helpers, per-week sources merged into SOURCES.md. Course page https://lanternlearn.com/courses/algebra-2-g9-12, learner app https://learn.lanternlearn.com/courses/algebra-2-g9-12.
- **Links:** rocket-and-raven-press #115 (merged), lanternlearn-site #55, rocketandraven-site #54, lantern-ui #108. Related: D145, D202, D214, D216, D219, D225.

### D219: Algebra 2 method, scope and fact policy
- **Question:** How the third high-school math course is built.
- **Options:** None offered (Claude default).
- **Choice:** Method from the WWC algebra practice guide (solved problems to study, the structure of expressions, comparing solution strategies) with Monday worked examples. Scope: parent codes only from CCSS N-CN, N-RN, A-SSE, A-APR, A-CED, A-REI, F-IF, F-BF, F-LE, F-TF, S-CP, S-ID and S-IC, no (+) codes, no `.a` sub-codes; Algebra 1 9-12 (D214) and Geometry 9-12 (D216) are the feeders and each prerequisite is reviewed in a worked example. Every number question and picture comes from the math helpers (mathviz, mathviz68, mathvizalg, mathvizquad, mathvizhsgeo and the new mathvizalg2: complex arithmetic and complex roots, polynomial division, remainder and factor theorems, identities, rational expressions and extraneous solutions, radical equations, inverses, exponential and logarithm solving, geometric series, composition and transformations, unit-circle values as exact fractions and surds, sinusoid parameters, two-way tables with conditional probability as fractions, mean and standard deviation, the normal model and dot-plot simulations). Fact policy: no facts about the world, every data set the crew's own made-up Glass House log (no real cooling law, growth rate, population, sunrise time or interest rate), no money words, nothing eaten. A grown-up is present for ladders and hot water. No dashes.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Applied in all twelve weeks; check-weeks reports 0 rule errors and 0 short days; build passed CI.
- **Links:** rocket-and-raven-press #115 (merged). Related: D218, D215, D217, D249.

### D220: A separate Code Crew Grades 6 to 8 coding course
- **Question:** Should a new Code Crew Grades 6 to 8 coding course fill the middle-school coding lane?
- **Options:** None offered (Claude default). Alternatives: build an unplugged CSTA Level 2 course alongside it.
- **Choice:** No new course. Code Crew: Mission Commander (`code-crew-g6-plus`, Grade 6 and up, real Python in IDLE, 12 weeks) is live and already practices CSTA Level 2 AP and DA standards, so a second 6-8 coding course would duplicate it. AI Explorers Grades 6 to 8 covers the AI side of the lane.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Progress:** Nothing to build.
- **Links:** Related: D145, D173.

### D221: Data and Society Grades 9 to 12 course shape
- **Question:** How the second high-school course is built.
- **Options:** None offered (Claude default).
- **Choice:** One Rocket & Raven course in the Code Crew series (Mission Commander rank): Data and Society Grades 9 to 12 (`data-society-g9-12`, G6+ reading level), 12 weeks, about 20-minute days (10+ enforced), a Wednesday Count Lab, Impact Friday and a Saturday Mission Quest. It is unplugged, uses only small made-up data sets tallied and graphed by hand (the one exception is the tightly limited Saturday family opinion tally in D223), and needs no accounts, apps, spreadsheets or AI tools. Running thread: Commons Count, the crew's survey of the members of Starling Commons, a made-up community maker hall, from question to consent, collection, storage, cleaning, graphs, typical values, a dice simulation, a bias audit and a data story. Members are known only by invented IDs. It practices 14 CSTA 2017 Level 3A and 3B Data & Analysis and Impacts of Computing standards and covers AP CSP Big Ideas 2 and 5, worded per D177. Every fact comes from the course's SOURCES.md (CSTA, AP CSP CED, NCES Kids' Zone, NIST/SEMATECH e-Handbook, Census Bureau pages).
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-10 on learn.lanternlearn.com/courses/data-society-g9-12, lanternlearn.com/courses/data-society-g9-12/ and the rocketandraven.com home page.
- **Links:** rocket-and-raven-press #93, lanternlearn-site #37, rocketandraven-site #41, scripts/course-gen/courses/data-society-g9-12. Related: D145, D174, D175, D177, D222, D223, D224.

### D222: Level 3B CSTA codes in the course build
- **Question:** The course build only knew CSTA 2017 codes up to Level 3A. Add Level 3B?
- **Options:** None offered (Claude default).
- **Choice:** Add all 28 Level 3B codes (3B-CS-01 to 3B-IC-28), numbered as the 2017 standards print them, to the build's CSTA set.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-10 on learn.lanternlearn.com/courses/data-society-g9-12, lanternlearn.com/courses/data-society-g9-12/ and the rocketandraven.com home page.
- **Links:** rocket-and-raven-press #93, lanternlearn-site #37, rocketandraven-site #41. Related: D176, D221.

### D223: Real data from families in Data and Society
- **Question:** Can the Saturday family quests collect real answers from family members?
- **Options:** Allow a fixed-choice opinion tally with a family member's yes, tally marks only, no names or details, kept at home (recommended) / made-up data only, with families tallying objects, never opinions.
- **Choice:** Allow the opinion tally on Saturdays only, on those terms. Everything about people on the other days uses the made-up Commons Count data.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-10 on learn.lanternlearn.com/courses/data-society-g9-12, lanternlearn.com/courses/data-society-g9-12/ and the rocketandraven.com home page.
- **Links:** rocket-and-raven-press #93, lanternlearn-site #37, rocketandraven-site #41. Related: D221.

### D224: Naming a law in Data and Society
- **Question:** Can the course name a privacy law?
- **Options:** Name only Title 13 (the Census Bureau's confidentiality law), worded as the Census Bureau states it, with a "not legal advice" line (recommended) / name no law.
- **Choice:** Week 12 may name Title 13 as the source words it. No other law is named, and consent is taught as an ethical habit, not a legal rule. Children's privacy law is left out because its source pages could not be opened to verify.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-10 on learn.lanternlearn.com/courses/data-society-g9-12, lanternlearn.com/courses/data-society-g9-12/ and the rocketandraven.com home page.
- **Links:** rocket-and-raven-press #93, lanternlearn-site #37, rocketandraven-site #41. Related: D221.

### D225: The high-school cast
- **Question:** Who the new older cast for the high-school lane (D174) is.
- **Options:** None offered (Claude default; revisit names and looks any time).
- **Choice:** Two new teens, about 15 to 16, plus Nova, who already appears in every grade. Comet, a South Asian girl, is the builder who asks "What can we make?" and sometimes rushes. Wren, a Latino boy, is the analyst who asks "What does the evidence say?" They are the senior crew at the Mission Commander rank. Rocket and Raven stay as they are in the K to 8 courses and do not appear in the high-school courses. Drawn in the same warm painterly style as the existing cast, organic and expressive, never shape-built. Reference art: `public/assets/brand/characters/hs-crew-v1.png`, `hs-crew-scene-v1.png` and `hs-expressions-v1.png` in rocket-and-raven-press.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Bible section added; Intro to Computer Science and Data and Society use Comet and Wren (live 2026-10-10).
- **Links:** rocket-and-raven-press #93, lantern-ui #83. Related: D174, D175, D221.

### D226: AI and You Grades 9 to 12 course shape
- **Question:** How the high-school AI literacy elective is built.
- **Options:** None offered (Claude default).
- **Choice:** One Rocket & Raven course in the AI Explorers series: AI and You Grades 9 to 12 (`ai-and-you-g9-12`, G6+ reading level), 12 weeks, about 20-minute days (10+ enforced), Wednesday Explorer Lab, Impact Friday and a Saturday Explorer Quest. Same D157 rules: unplugged, no live AI tool, no product names, every AI fact from the course's SOURCES.md (NIST AI 100-1, NIST AI 600-1, AI4K12, CSTA; 95 rows). High-School Crew cast (D225). Running thread: the SH-1 Review, in which Comet, Wren and the student review a proposed AI study helper for a made-up school: a hand-run next-word model (Tiny Text), a test set, the nine NIST generative AI risks as a risk register, and a final model card and go-with-conditions recommendation. It practices 12 CSTA Level 3A and 3B DA, IC and AP codes, worded per D177. Grade band `all-ages` with "Grades 9 to 12" in the title, like the other high-school courses.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-10 on learn.lanternlearn.com, lanternlearn.com and rocketandraven.com.
- **Links:** rocket-and-raven-press #99, lanternlearn-site #41, rocketandraven-site #44 (scripts/course-gen/courses/ai-and-you-g9-12). Related: D157, D173, D177, D225, D227.

### D227: Careers in AI and You
- **Question:** How the course covers careers in AI.
- **Options:** None offered (Claude default). Alternative: add salary and job-growth figures from the US Bureau of Labor Statistics.
- **Choice:** Each Friday spotlights one kind of person who works on AI, using the AI actor tasks in NIST AI 100-1 Appendix A (design, development, deployment, operation and monitoring, TEVV, human factors, domain expert, impact assessment, procurement, governance and oversight). No salaries, job counts or growth figures: the BLS pages could not be fetched to verify them, so none are stated.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-10 on learn.lanternlearn.com, lanternlearn.com and rocketandraven.com.
- **Links:** Related: D226.

### D230: Python Programming Grades 11 to 12 course shape
- **Question:** How the Grades 11 to 12 Python course that bridges Code Crew: Mission Commander to AP Computer Science A readiness is built.
- **Options:** None offered (Claude default).
- **Choice:** One Rocket & Raven course in the Code Crew series, Mission Commander rank: Python Programming Grades 11 to 12 (`python-g11-12`, G6+ reading level), 12 weeks, about 30-minute sessions (10+ minutes enforced), Wednesday Sim Lab, Trace Friday and a Saturday Mission Quest. Real Python 3 in IDLE, standard library only. Running thread: FieldSim, a made-up rover simulator on a grid test field, built up across the weeks with classes, encapsulation, has-a objects, 2D grids, tests, inheritance, searching, sorting and recursion. Weeks 11 and 12 show the same programs in Java to read and trace (no Java install). Every Python and Java program on a page is run by the course's `check-code.mjs` before publishing, and every output shown comes from that run. CSTA 2017 Level 3A and 3B Algorithms and Programming codes. Wording: "prepares for the ideas in AP Computer Science A"; course pages add that it is not an AP course and not affiliated with College Board (D177 style). Facts about Python, Java, CSTA and AP CSA come from the course SOURCES.md (CSTA, the AP CSA Course and Exam Description effective Fall 2025, docs.python.org, Oracle Java Tutorials). High-School Crew cast (D225).
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11 at learn.lanternlearn.com/courses/python-g11-12. Its meta moves to the D202 Grades 9 to 12 band in press #105. Listed on lanternlearn.com and rocketandraven.com.
- **Links:** rocket-and-raven-press #103, #105 (scripts/course-gen/courses/python-g11-12); lanternlearn-site #46; rocketandraven-site #46. Related: D177, D225, D231 to D235.

### D231: Inheritance week in Python 11-12
- **Question:** The 2025 AP CSA course description puts designing and writing inheritance outside the course and exam. Keep an inheritance week?
- **Options:** Keep it, labelled as going beyond AP CSA (recommended) / Replace it with AP CSA core material (list algorithms, text data sets).
- **Choice:** Keep week 7 on inheritance and polymorphism, labelled as going beyond AP CSA.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Done.
- **Progress:** Live in week 7 (press #103).
- **Links:** Related: D230.

### D232: Where Python 11-12 lessons name AP Computer Science A
- **Question:** Where may lessons name AP CSA?
- **Options:** Only week 11 Monday and week 12 Saturday, with the not-affiliated line, never the exam (recommended) / Never in lessons, only on course and marketing pages.
- **Choice:** Two mentions: AP CSA is named only on week 11 Monday and week 12 Saturday, each with the not-affiliated line, never the exam.
- **Date:** 2026-10-11. **Decided by:** owner (decision card). **Status:** Done.
- **Progress:** Live in python-g11-12 (press #103).
- **Links:** Related: D177, D230.

### D233: Writing recursive code in Python 11-12
- **Question:** The AP CSA course description leaves writing recursive code out of scope. Should learners write it?
- **Options:** None offered (Claude default).
- **Choice:** Yes. Week 10 has learners write small recursive functions; Trace Friday stays on reading and tracing recursion, which the course description does cover.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Links:** Related: D230.

### D234: Testing style in Python 11-12
- **Question:** How the course tests code.
- **Options:** None offered (Claude default). Alternative: the `unittest` module.
- **Choice:** Plain `assert` test files, as in Code Crew: Mission Commander, so the tests read like the earlier course.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Links:** Related: D230.

### D235: A program checker for Python 11-12
- **Question:** How to make sure every program and output on a page is real.
- **Options:** None offered (Claude default).
- **Choice:** The course adds `check-code.mjs` and a `java()` helper: it runs every recorded Python program with python3 and compiles and runs every Java program with javac and java, and fails on any difference from the page. Code Crew: Mission Commander records programs the same way but the repo had no runner.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Links:** Related: D230.

### D240: Name of the Fox & Fern phonics courses
- **Question:** What the Fox & Fern phonics courses (Pre-K to K and Grade 1) are called.
- **Options:** Sound Trail (recommended; matches Tomorrow Trail and the Sound Map Ferris carries) / Letter Trail / Fox & Fern Phonics.
- **Choice:** Sound Trail (owner tapped the card, which was labeled D179 from before the number blocks). Live as Sound Trail Pre-K to K, Grade 1 and Grade 2.
- **Date:** 2026-10-10. **Decided by:** owner. **Status:** Done.
- **Links:** rocket-and-raven-press #92, #94; lanternlearn-site #35, #39. Related: D241, D242, D243, D244.

### D241: How lesson audio names a sound
- **Question:** Lesson audio is an ElevenLabs text-to-speech voice (eleven_multilingual_v2), which cannot say an isolated phoneme on cue. How do phonics lessons name sounds?
- **Options:** None offered (Claude default). Alternative: record a person saying each phoneme (better, needs a human recording session).
- **Choice:** Name a sound by its key word ("the first sound in moon"; x is "the sound at the end of box"). Stretch only sounds you can hold (mmm, sss, fff, lll, nnn, vvv, zzz); never stretch a vowel or a stop. No slash notation (/m/) anywhere: the build rejects it. Blending shows spaced letters ("s a t") and asks which word they make.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Links:** rocket-and-raven-press #92, scripts/course-gen/phonics.mjs. Related: D34, D240.

### D242: Sound Trail scope and sequence, and the decodability check
- **Question:** In what order the phonics courses teach letters and patterns, and how the build keeps "Read it yourself" text decodable.
- **Options:** None offered (Claude default).
- **Choice:** Pre-K to K (12 weeks): m s a; t p; i n; c o d; g h; e r b; u l f; k j w; v x y z qu; ff ll ss zz; ck and plural s; review. Grade 1 (12 weeks): short vowel review; sh ch tch; th wh ng nk; initial blends; final blends; a_e i_e; o_e u_e e_e; ee ea ai ay; oa ow igh and y at the end; ar or er ir ur; -s -es -ed -ing; two-syllable words. Each week follows Hear it, See it, Blend it, Build it, Read it yourself (WWC foundational-skills practice guide, recommendations 2 to 4). CCSS RF.K.1 to RF.K.4 and RF.1.1 to RF.1.4. The build (phonics.mjs) checks every word in every "Read it yourself" block: it must use only graphemes taught by that week (with traps such as vowel pairs, r- and w-controlled vowels, silent e, soft c and g, and endings on a known base word rejected until taught) or be a Word Spot heart word taught by that week; at least three such blocks a week. Days are tap-only and 10+ minutes with Word Spot sight words (K list, then Grade 1 list).
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-10 (press #92 merged). Plural -s is gated until K week 11 by the checker.
- **Links:** rocket-and-raven-press #92, scripts/course-gen/courses/phonics-prek-k/PLAN.md and SOURCES.md. Related: D123, D124, D125, D241.

### D243: Sound Trail course split, series and catalog placement
- **Question:** How the phonics work is packaged and listed.
- **Options:** None offered (Claude default).
- **Choice:** Two Fox & Fern courses (`phonics-prek-k`, band K; `phonics-g1`, band G1) in a new `phonics` series, listed right after Tomorrow Trail on /courses as "Sound Trail: Phonics from Fox & Fern Books", with a new `reading` subject filter. Tomorrow Trail cast, Ferris hosts, Freddy runs Friday games, Saturday is a Sound Hunt at home. 100% free. 70+ new picture icons in the shared Tomorrow Trail icon set; covers and heroes generated in Higgsfield from the cast references.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-10 on learn.lanternlearn.com/courses (press #92) and lanternlearn.com (lanternlearn-site #35).
- **Links:** rocket-and-raven-press #92, lanternlearn-site #35. Related: D240, D242.

### D244: Sound Trail Grade 2 scope and checker extensions
- **Question:** What Sound Trail Grade 2 teaches, and how the decodability check grows to cover it.
- **Options:** None offered (Claude default).
- **Choice:** One 12-week Fox & Fern course, `phonics-g2` ("Sound Trail: Grade 2 Phonics", band G2, series `phonics`). Weeks: review; oo ew ue ie oe; ou oi oy; aw au all al; air are ear eer ore oar; soft c and g, dge; silent letters kn wr gn mb and ph; closed and open syllables; consonant-le; suffixes -er -est -ful -less -ly -ness -y and y to i; contractions; ind ild old olt. CCSS RF.2.3 every week, RF.2.4 on fluency weeks. The checker (phonics.mjs, scope `g2`) adds these graphemes, rejects kn/wr at the start and gn/mb at the end until taught, lets a vowel team before a final soft e pass (goose, house), checks suffixes against a decodable base, and checks contractions from week 11. Same day shape and 10+ minute floor as D242; Grade 2 Word Spot heart words. 36 new shared picture icons.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Progress:** All 12 weeks pass the checker (11 to 15 min a day). Known leak: "tiger" and "bigger" pass from week 6 via the soft-g token.
- **Links:** rocket-and-raven-press #94, scripts/course-gen/courses/phonics-g2/PLAN.md. Related: D240, D242, D243.

### D245: Story Trail reading comprehension course: name, series and method
- **Question:** What the Fox & Fern reading comprehension course for Grades 2 to 3 is called, where it is listed, and how it teaches.
- **Options:** None offered (Claude default; revisitable).
- **Choice:** "Story Trail: Reading Comprehension" (`story-trail-g2-3`, grades G2 and G3, band G2 caps), a new `story-trail` series listed after Sound Trail on /courses, subject `reading`. Tomorrow Trail cast at the Story Stump; Chris the Coyote is the storyteller, Ferris leads the reading, Freddy runs Friday review, Saturday is a Story Hunt with any book at home. Each week teaches one strategy or text structure (questions, story parts, characters, main topic, steps, problem and solution, cause and effect, word meaning, text features, author's purpose, fables, compare and contrast), following the five recommendations of the WWC practice guide "Improving Reading Comprehension in Kindergarten Through 3rd Grade". Tap-only checks that send the child back to the text. 10+ minutes a day. 100% free.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Links:** scripts/course-gen/courses/story-trail-g2-3/PLAN.md and SOURCES.md. Related: D243, D246.

### D246: Story Trail fact policy
- **Question:** What real-world facts a reading comprehension passage may state.
- **Options:** None offered (Claude default).
- **Choice:** Stories and Fern Hollow nonfiction (guides, signs, notes about the made-up world) carry no real-world claims. Real-world nonfiction (weeks 4, 7 and 9) uses only facts already sourced in another course's SOURCES.md, copied with their source row into Story Trail's SOURCES.md. Fables are retold from Aesop (Project Gutenberg eBook #21). Nothing else is stated as fact.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Links:** scripts/course-gen/courses/story-trail-g2-3/PLAN.md. Related: D245.


### D247: Math courses: name, series and split
- **Question:** What the new Fox & Fern K-2 math courses are called and how they are split.
- **Options:** None offered (Claude default).
- **Choice:** "Number Trail", series `number-trail`, subject math, Fox & Fern imprint with the Tomorrow Trail cast (Bennie the Bear leads). One 12-week course per grade: `math-k`, `math-g1`, `math-g2`.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Links:** rocket-and-raven-press #100. Related: D248, D249.

### D248: Number Trail scope, sequence and method
- **Question:** What the K-2 math courses teach, in what order, and how.
- **Options:** None offered (Claude default).
- **Choice:** Common Core K, 1 and 2 (codes in each course's PLAN.md). The method follows WWC practice guides 18 (Teaching Math to Young Children) and 26 (Assisting Students Struggling with Mathematics): a developmental progression, concrete then pictures then numbers, math words out loud, number lines, story problems, math every day. No timed activities. Left for later: K-2 line plots (2.MD.D.9), Grade 1 data (1.MD.C.4) and composing shapes (1.G.A.2).
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Links:** rocket-and-raven-press #100, scripts/course-gen/courses/math-k/PLAN.md. Related: D247.

### D249: Computed math answers
- **Question:** How math answers are kept correct.
- **Options:** None offered (Claude default).
- **Choice:** Every math picture and number question comes from scripts/course-gen/mathviz.mjs, which computes the answer. The build re-checks every question written as a number sentence with one "?" and fails on a wrong answer.
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Links:** rocket-and-raven-press #100. Related: D247.

### D250: Coins and dollars in Grade 2 math
- **Question:** Add a coins week to Grade 2 math (2.MD.C.8), allowing coin and dollar words in math courses?
- **Options:** Leave coins out, keep the money-word ban for kids (recommended) / Allow coin words in math courses and add a coins week.
- **Choice:** Allow coin words in math courses and add a coins week to Grade 2.
- **Date:** 2026-10-11. **Decided by:** Chris, via project-chat decision card (relayed by coordinator). **Status:** Decided.
- **Progress:** Not started; course building is paused for launch. When built: a coins week in `math-g2` (2.MD.C.8), with coin and dollar words allowed in math courses only.
- **Links:** rocket-and-raven-press #100. Related: D247, D248.

### D251: Number Trail Grades 3 to 5
- **Question:** How should Number Trail extend past Grade 2, and with what checks?
- **Options:** One 12-week course per grade (math-g3, math-g4, math-g5), all Common Core 3 to 5 clusters, exact computed answers (chosen) / One combined Grades 3 to 5 course / Stop at Grade 2.
- **Choice:** One course per grade, same series, cast and day shape. Sequence follows the CCSS domains per grade (PLAN.md in each course). Sources: CCSS Grades 3 to 5, WWC practice guides 26 (struggling students, K to 6) and 15 (fractions, K to 8). Answers are computed in exact fractions and the build fails on a wrong answer, a second right choice, or a wrong true/false number sentence. Money stays out (4.MD.A.2 uses distance, time, volume and mass instead; see D250).
- **Date:** 2026-10-10. **Decided by:** Claude (default). **Status:** Decided.
- **Progress:** Courses being written.
- **Links:** rocket-and-raven-press (PR to follow). Related: D247, D248, D249, D250.

### D280: Fourth high-school math course
- **Question:** With Algebra 2 9-12 live, which course does the expansion thread build next?
- **Options:** Precalculus Grades 9 to 12 under Rocket & Raven with the high-school crew, finishing the high-school math line from the CCSS (+) standards and reusing the algebra, quadratic, geometry and Algebra 2 helpers (recommended) / Biology 9-12 under Rocket & Raven (NGSS HS-LS, a fact-sourcing pass first) / Civics and Government 6-8 under Rocket & Raven (C3 Framework and public-domain documents, a sourcing pass first) / Pause and wait for direction.
- **Choice:** Precalculus Grades 9 to 12, `precalculus-g9-12`, series `precalculus`, subject math, Rocket & Raven, band G6+, grade band G9-12 (D202), 12 weeks, about 20 minutes a day, Saturday "Dock Day", cast Comet, Wren and Nova (D225). Weeks: The Complex Plane; Every Polynomial Factors; Rational Functions; Inverses Everywhere; Tangent, Symmetry and the Turn; The Addition Formulas; Inverse Trig and the Water Wave; Laws of Sines and Cosines; Ellipses and Hyperbolas; Vectors; Matrices; Counting, Expected Value and Regatta Day. Running thread: the Boathouse, the old rowing shed on the lake that the crew readies for a spring Regatta Day; every week's math makes a piece of the regatta work; the student keeps a Boathouse Log. The card was posted in the project chat as D280; a different tap switches the course.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11. Twelve weeks, 72 days at 18 to 23 minutes, every number answer computed by the helpers, per-week sources merged into SOURCES.md. Course page https://lanternlearn.com/courses/precalculus-g9-12, learner app https://learn.lanternlearn.com/courses/precalculus-g9-12.
- **Links:** rocket-and-raven-press #116 (merged), lanternlearn-site #56, rocketandraven-site #55, lantern-ui #109. Related: D145, D202, D218, D281, D225.

### D281: Precalculus method, scope and fact policy
- **Question:** How the fourth high-school math course is built.
- **Options:** None offered (Claude default).
- **Choice:** Method from the WWC algebra practice guide (solved problems to study, the structure of expressions, comparing solution strategies) with Monday worked examples and Thursday derivations as ordered steps. Scope: the CCSS high-school (+) standards from N-CN, N-VM, A-APR, A-REI, F-IF, F-BF, F-TF, G-SRT, G-GPE, S-CP and S-MD plus the parent codes they extend, no `.a` sub-codes; Algebra 2 9-12 (D218) and Geometry 9-12 (D216) are the feeders and each prerequisite is reviewed in a worked example. Every number question and picture comes from the math helpers (mathviz, mathviz68, mathvizalg, mathvizquad, mathvizhsgeo, mathvizalg2 and the new mathvizprecalc: exact surd trigonometry at multiples of 15 degrees, conjugates, moduli, quotients and polar form, factoring over the complex numbers, the Binomial Theorem and Pascal's triangle, rational expressions and rational function features, inverses of rational and exponential rules, the addition and double-angle formulas, inverse trig and trigonometric equations, the Laws of Sines and Cosines, ellipse and hyperbola equations with foci, vectors, 2 by 2 matrices with determinants, inverses and transformations, permutations, combinations and expected value). Fact policy: no facts about the world, every data set the crew's own made-up Boathouse log (no real current, tide, boat speed, lake or sunrise), no money words, nothing eaten. Life vests on the water and a grown-up on the dock or a ladder. No dashes.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Applied in all twelve weeks; check-weeks reports 0 rule errors and 0 short days; build passed CI.
- **Links:** rocket-and-raven-press #116 (merged). Related: D280, D219, D217, D249.

### D282: Fifth high-school math course
- **Question:** With Precalculus 9-12 live, which course does the expansion thread build next?
- **Options:** Statistics Grades 9 to 12 under Rocket & Raven with the high-school crew, covering the CCSS S-ID, S-IC, S-CP and S-MD standards with the (+) codes and reusing the Algebra 2 and Precalculus helpers (recommended) / Biology 9-12 under Rocket & Raven (NGSS HS-LS, a fact-sourcing pass first) / Civics and Government 6-8 under Rocket & Raven (C3 Framework and public-domain documents, a sourcing pass first) / Pause and wait for direction.
- **Choice:** Statistics Grades 9 to 12, `statistics-g9-12`, series `statistics`, subject math, Rocket & Raven, band G6+, grade band G9-12 (D202), 12 weeks, about 20 minutes a day, Saturday "Track Day", cast Comet, Wren and Nova (D225). Weeks: Shape, Center and Spread; Outliers and the Normal Model; Two-Way Tables; Scatter Plots and Lines of Fit; Correlation and Causation; Samples, Surveys and Studies; Does the Model Fit?; Margin of Error; Comparing Two Treatments; Probability Rules; Counting and the Multiplication Rule; Random Variables, Expected Value and Race Day. Running thread: the Lantern Loop, the community center's first spring fun run that the crew organizes; every week's statistics makes a piece of Race Day work; the student keeps a Run Log. The card was posted in the project chat as D282; a different tap switches the course.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-11 at learn.lanternlearn.com/courses/statistics-g9-12: 12 weeks, 72 days, every day 16 to 22 minutes, 0 rule errors; workbook and manifest built; both marketing sites list it.
- **Links:** rocket-and-raven-press #117 (merged), lanternlearn-site #57, rocketandraven-site #56, lantern-ui #110. Related: D145, D202, D280, D283, D225.

### D283: Statistics method, scope and fact policy
- **Question:** How the fifth high-school math course is built.
- **Options:** None offered (Claude default).
- **Choice:** Method from the WWC algebra practice guide (solved problems to study, the structure of formulas, comparing solution strategies) with Monday worked examples and Thursday procedures and derivations as ordered steps. Scope: all of CCSS S-ID, S-IC, S-CP and S-MD including the (+) codes in S-CP.B and S-MD, parent codes only; Algebra 1 (D214), Algebra 2 (D218) and Precalculus (D280) are the feeders and each prerequisite is reviewed in a worked example. Every number question and picture comes from the math helpers (mathviz68 displays, mathvizalg2 normal model, two-way tables, study types, margins and simulation, mathvizprecalc counting and expected value, and the new mathvizstats: shape and spread, the 1.5 IQR outlier rule, normal counts, joint, marginal and conditional relative frequencies, least-squares lines, residuals and the correlation coefficient, bias and study types, binomial models and the 2-standard-deviation consistency rule, re-randomization fractions and the 5% rule, set, addition, multiplication and conditional rules, combinations, empirical distributions and a worn-tire check in place of medical testing). Standard deviation divides by n; the margin of error is the crew's rule 2√(p(1 - p)/n). Fact policy: no facts about the world, every data set the crew's own made-up Run Log (no real race, record, survey, study, health claim or test accuracy; the standards' own examples of lung cancer, TV sets, medical tests and hockey goalies are replaced with crew situations), no money or betting words, nothing eaten, running only on the park loop with a grown-up aware. No dashes.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Applied in all twelve weeks; per-week CCSS quotes and "Left out" notes are in the course's SOURCES.md. One deviation from PLAN.md: the standard deviation procedure is week 1 Thursday's derivation and the median-resists-an-outlier proof moved to week 2 Thursday.
- **Links:** rocket-and-raven-press #117 (merged). Related: D282, D281, D219, D249.

### D284: Grades 6 to 8 QA and polish pass
- **Question:** How the QA and polish pass Chris chose on the D212 card covers the ten live Grades 6 to 8 courses (Weather Lab, Matter Lab, Sports Physics, Cells and Systems, Earth and Space, Ratios and Data, Expressions and Equations, Geometry and Measurement, Reading and Writing, AI Explorers 6-8).
- **Options:** None offered (Claude default).
- **Choice:** Rule checks and minute audit on every week; a scan of the built workbooks for garbled text and risky answer keywords; a full read of every graded item and lesson fact against each course's SOURCES.md; every week page checked live at phone width. Fix in place without new courses or new art. Grader default: a number keyword now respects sign and fractions, so "-6", "negative 6" and "minus 6" no longer pass for 6 and "11/2" no longer passes for 1/2; typographic minus signs, "18,000" and ".8" are read as plain numbers. Short word keywords that matched wrong answers (balance in unbalanced, metres in kilometres, one in none, no in not sure) are fixed by rewording the item, not by changing the grader, so other courses are untouched. Prompt narration ("?." joins) is left alone so recorded audio is not re-made for every course.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Done 2026-10-11: rocket-and-raven-press #120 merged (CI green). It also fixed ci.yml, which had stopped parsing after the Statistics scaffold, and a share-preview test the home page change (rocket-and-raven-press #119, D300) had broken.
- **Links:** rocket-and-raven-press #120. Related: D212, D202, D39.

### D285: Pause course expansion for launch
- **Question:** Keep building new courses (Biology 9-12 was next), or stop and focus on launch?
- **Options:** Keep building / Pause new courses and QA and polish the live ones / Pause for launch.
- **Choice:** Pause all new course building until after launch. Chris (2026-10-11): "Let's focus on getting everything launch ready right now. We will resume course expansion after launch and gradually release new content. My main goal now is to get users in the system and using it." When expansion resumes, new courses favor real-world applied STEM, coding, software and computers first (Chris, 2026-10-11). Biology 9-12 is dropped for now; its scaffold stays unmerged on draft PRs and is not published.
- **Date:** 2026-10-11. **Decided by:** owner. **Status:** Decided.
- **Progress:** Statistics 9-12 (D282) was finished and is live; no further course was started. Biology 9-12 scaffold (rules, registrations, plan, pictures; no weeks) is parked on rocket-and-raven-press #118 and lanternlearn-site #58, both draft and unmerged. Its rocketandraven.com entries were reverted from rocketandraven-site #56.
- **Links:** rocket-and-raven-press #118, lanternlearn-site #58, rocketandraven-site #56. Related: D282, D284, D300.

### D300: Launch home pages: free, K-12, find-your-grade chips
- **Question:** The launch priority (Chris, 2026-10-11) is getting families in. The learn.lanternlearn.com home page headline and description didn't say free and described only kindergarten; How it works said weeks unlock one at a time; lanternlearn.com said 15+ courses for K to Grade 6+; foxandfernbooks.com still described a workbook publisher. How should the home pages present the catalog?
- **Options:** Keep it (recommended) / Drop the grade row / Revert all copy.
- **Choice:** Say "free" and "kindergarten through high school" in every home page title, description and hero; use the round "60+ courses" (D147); describe Fox & Fern as free phonics, reading, math and life-skills courses for pre-K to Grade 5; say every week is open from day one (D139); add a "Find your kid's grade" chip row (K, 1 to 5, 6-8, 9-12, Adults) under the learn home hero linking to the catalog's grade filter. The D122 featured row is unchanged.
- **Date:** 2026-10-11. **Decided by:** owner (tapped Keep it on the card, 15:35 UTC). **Status:** Done.
- **Progress:** Live on learn.lanternlearn.com, lanternlearn.com and foxandfernbooks.com 2026-10-11.
- **Links:** rocket-and-raven-press, lanternlearn-site, foxandfernbooks-site (rocket-and-raven-press #119, lanternlearn-site #59, foxandfernbooks-site #21, lantern-ui #112, all merged). Related: D122, D139, D147, D202.

### D301: How to bring Human Atlas into Body Lab
- **Question:** Chris asked whether Human Atlas (github.com/ashemag/human-atlas, a 3D anatomy viewer) can be embedded in the Body Lab courses. Iframe the public demo, vendor the whole app, or port a kid-safe part of it?
- **Options:** Iframe the public demo (third-party host, full adult model including genitals, 33 MB download, can change anytime); vendor the full app (same content and size problems, React 19 app with its own build); port a small, self-hosted viewer with a whitelisted set of structures per lesson.
- **Choice:** Port. A self-hosted viewer at learn.lanternlearn.com/body-atlas/ (three.js, no third-party requests) loads a per-lesson model built from a whitelist; reproductive anatomy, skin and hair are blocked in the build script. First model: digestion (2.4 MB). New `model3d` lesson block.
- **Date:** 2026-10-11. **Decided by:** Claude (default). **Status:** Decided.
- **Progress:** Proof of concept in Body Lab 3-5, week 6 Thursday, in a draft PR. Licenses: app code MIT, geometry BodyParts3D CC BY 4.0 (credited in the viewer and public/body-atlas/ATTRIBUTION.md). The source has no lung or whole-liver meshes, so lungs (week 5) cannot use it.
- **Links:** rocket-and-raven-press #121.

### D302: Ship the 3D body model in Body Lab?
- **Question:** Merge the D301 proof of concept (one 3D model in Body Lab 3-5 week 6 Thursday) now, or wait until after launch?
- **Options:** Ship in one lesson now, more models after launch (Recommended); hold the PR until after launch; drop it.
- **Choice:** Ship now (Chris, card tap and "Merge" in the thread, 2026-10-11).
- **Date:** 2026-10-11. **Decided by:** owner. **Status:** Done.
- **Links:** rocket-and-raven-press #121.

### D303: Keep Cloudflare Web Analytics on the lanternlearn.com sites
- **Question:** Keep Cloudflare Web Analytics on the lanternlearn.com sites?
- **Options:** Not recorded.
- **Choice:** Keep it.
- **Date:** 2026-10-11. **Decided by:** owner (card tap, 21:09). **Status:** Done.
- **Progress:** Logged late: the thread that asked could not commit the entry at the time.
- **Links:** Related: D2, D119.

### D304: Save a signed-in parent's work when no learner is picked
- **Question:** Chris signed in and finished an exercise, but nothing saved (2026-10-12). Saving needs a selected kid profile (the `rr_active_kid` cookie). A parent signing in on a new device, or one who never made a profile, had none, so the lesson treated them as a guest and told them to sign in. What should happen?
- **Options:** Use the parent's first profile, or make a default "Learner" profile when they have none, and save (recommended); make the parent create a profile before any lesson saves; keep guest behavior.
- **Choice:** Use the first profile, or create "Learner" (renamable from the dashboard) on the first graded or autosaved work. Sign-in also points the cookie at the account's first profile, or clears a cookie left by another account. Just opening a lesson creates nothing. The guest "sign in" link now returns to the lesson.
- **Date:** 2026-10-12. **Decided by:** owner (tapped Auto profile on the card, 15:17 UTC). **Status:** Done.
- **Progress:** Live 2026-10-12 (rocket-and-raven-press #122 merged).
- **Links:** rocket-and-raven-press #122 (src/lib/kidAuth.ts, api/grade.ts, api/save.ts, api/auth/verify.ts).

### D305: How removing a kid profile works
- **Question:** Chris asked for parents to rename, delete and edit kid profiles (2026-10-12). Rename, grade and region already existed; the Remove button pointed at an endpoint that didn't exist. Should removal be immediate or recoverable?
- **Options:** Remove immediately after a confirm prompt, deleting the profile's progress and saved work (recommended); keep it 30 days like account deletion; hide it and keep the data.
- **Choice:** Remove immediately after the confirm prompt. Also: avatar can be changed, the dashboard links to each profile, and the profile page lists courses the kid started.
- **Date:** 2026-10-12. **Decided by:** owner (card, 16:31 UTC; confirmed the Claude default). **Status:** Done.
- **Progress:** live on learn.lanternlearn.com 2026-10-12.
- **Links:** rocket-and-raven-press #123 (src/pages/api/kids/delete.ts, src/pages/kids/[id].astro). Related: D304.

### D306: Where the shared source catalog lives
- **Question:** Chris asked to review 51 free educational sites (an r/Homeschooling "50 free resources" post plus morelessonslessplanning.com) for borrowable content and for our educational sources catalog. No central catalog existed; each course keeps its own `SOURCES.md`. Where should the catalog go?
- **Options:** A new `standards/source-catalog.md` in lantern-ui, next to the content standards (recommended); a data file in rocket-and-raven-press; only per-course `SOURCES.md`.
- **Choice:** `standards/source-catalog.md`, grouped Reuse, Fact source, Link only and Avoid, with each site's license URL and the courses it fits. Content standards section 4 points to it. Course facts still go in each course's `SOURCES.md`.
- **Date:** 2026-10-12. **Decided by:** Claude (default). **Status:** Done.
- **Links:** standards/source-catalog.md. Related: D307.

### D307: Adapting NonCommercial-licensed material
- **Question:** Code.org (now CodeAI) curriculum, Exploratorium Science Snacks, PhET sims published since 2026-03-29 and some Common Sense Media items are licensed NonCommercial (NC), several also ShareAlike (SA). Our courses are free and ad-free but run by Chris Brock LLC. Do we adapt NC material?
- **Options:** Link only until a licensor confirms in writing (recommended); treat our free, ad-free courses as noncommercial and adapt, with SA material in marked blocks; never use NC material.
- **Choice:** Treat our free, ad-free courses as noncommercial and adapt NC material now, with the credit each license asks for. ShareAlike material goes in a clearly marked block carrying the same license. NoDerivatives (ND) material stays link only.
- **Date:** 2026-10-12. **Decided by:** owner (card tap, 20:10 UTC). **Status:** Done.
- **Links:** standards/source-catalog.md. Related: D306.

### D308: How the foundation source list is rebuilt
- **Question:** Chris's original `sources.json` (June 2026, Pre-K to Grade 5, six subjects) was never committed and later versions were lost. He asked for it to be rebuilt with newer data and columns and made the base for all content. How should the rebuild work?
- **Options:** Keep the original verbatim and generate v2 from it plus what the live courses already cite, with a builder script (recommended); hand-write a new list from scratch; keep only the original.
- **Choice:** `standards/sources-v1-2026-06.json` is the untouched original. `standards/sources.json` (v2) is generated by `scripts/build_sources.py`: every v1 entry kept with new columns (publisher, kind, frameworks, reuse, license, cited_by, origin, url_status); grade ids 6th_8th, 9th_12th and adult and subjects coding_cs, ai_literacy, engineering_technology, health_body, nutrition_cooking and life_skills added from the live courses' cited pages; `_courses` maps each course to its keys and flags untraced content; `_open_resources` carries the source catalog with licenses. CLAUDE.md now requires content to trace to it.
- **Date:** 2026-10-12. **Decided by:** Claude (default). **Status:** Decided.
- **Progress:** v2 built: 85 keys, 725 sources, 61 courses mapped. 16 courses are flagged: 14 have no SOURCES.md (Code Crew K to G6+, Backyard Explorer, Home Helpers, Inside the Machine, Tomorrow Trail) and 2 cite sites not yet judged authoritative (Bike Shop, Everyday Machines). Seven v1 links return 404 and need replacements from the same publisher. 2026-10-12: audits for 15 courses merged (press #126); 3 still flagged: Home Helpers K-2 and 3-5 (audit in progress) and Bike Shop (tire pressure range, see D309). After D309 (press #128): 0 flagged.
- **Links:** standards/sources.json, standards/sources-v1-2026-06.json, scripts/build_sources.py. Related: D306, D307.

### D309: Unverified lesson lines found by the source audits
- **Question:** The audits of the 16 flagged courses (D308) found lesson lines no authoritative page supports. Wrong or unsafe ones are fixed in press #126 (fish washed with soap, wrong CSTA codes, moon at night only, owls, the square). About 60 low-risk lines remain (for example "A raincoat keeps you dry"), plus Bike Shop's tire "pressure range", which only a tire maker's FAQ supports. How should they be handled?
- **Options:** Fix wrong lines now and list the rest under "Needs a fix" in each SOURCES.md, sourced after launch (recommended); source or rewrite every line now; fix only the unsafe lines.
- **Choice:** Source or rewrite every line now ("Source all now"), including Bike Shop's tire pressure lesson, so every flagged course is fully traced. Chris then wrote "Ok great. Please merge/deploy when done." (project chat, 22:09 UTC).
- **Date:** 2026-10-12. **Decided by:** owner (card tap, 22:00 UTC). **Status:** Done.
- **Progress:** The project-chat card was posted labeled "D308" by mistake (D308 was already used); this entry is that card. The pass covers about 210 lines (Backyard Explorer, Inside the Machine, Tomorrow Trail, Code Crew K-2, Bike Shop) plus the Home Helpers audit findings. 2026-10-12: all 262 "Needs a fix" bullets across 10 courses are marked FIXED (D309) in their SOURCES.md, each sourced as written or reworded to match an opened page; Home Helpers K-2 and 3-5 audits added. Bike Shop week 4 now teaches the recommended pressure printed on the sidewall and never above the maximum (16 CFR 1512.10). Rebuilt sources.json: 0 flagged courses.
- **Links:** rocket-and-raven-press #126, #128. Related: D308.

### D310: Fix the still-valid Codex review findings
- **Question:** Fix the 33 still-valid Codex review findings now?
- **Options:** Fix all, one PR per repo, P1s first (recommended) / P1 only, leave P2s for after launch / Hold, report only.
- **Choice:** Fix all.
- **Date:** 2026-10-13. **Decided by:** owner (card, 15:25 UTC; confirmed "Go" in thread 16:08 UTC). **Status:** Decided.
- **Progress:** Report at /mnt/project-files/reviews/codex-findings-2026-10-13.md. rocketandraven-site #57 and lanternlearn-site #60 merged. rocket-and-raven-press #129 open (15 of 17 fixed; bike-tire wording kept per D309 sources; caption timings not used). lantern-ui fixes in this PR: build_sources.py keeps every cited page (no per-key cap) and no longer treats json.org as a standards body; SeoHead loads the imprint skin's font stylesheet; roadmap.md analytics wording; decision-log corrections (D42, D50, D53, D67, D72, D122, D145, D166, D305).
- **Links:** rocketandraven-site #57, lanternlearn-site #60, rocket-and-raven-press #129. Related: D309.

### D311: Metricool web tracking on lanternlearn.com
- **Question:** Chris asked for Metricool's tracking script on the Lantern Learn marketing site. Where does it go, and what does the privacy page say?
- **Options:** Shared layout head via `site.analytics.metricoolHash` in `SeoHead`, so every page (blog posts included) gets it and other sites can opt in (recommended); paste the snippet into lanternlearn-site's own layout only (misses blog posts, which use the shared ArticleLayout).
- **Choice:** `SiteConfig.analytics.metricoolHash` renders Metricool's loader in the shared `SeoHead`. lanternlearn.com sets it; the learn app and imprint sites are unchanged. lanternlearn.com/privacy names Metricool alongside Google Analytics 4 and Cloudflare Web Analytics (D303). No CSP header is set on lanternlearn.com, so nothing blocks tracker.metricool.com.
- **Date:** 2026-10-15. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-15: every lanternlearn.com page loads the tracker.
- **Links:** lantern-ui #126, lanternlearn-site #61. Related: D2, D303.

### D312: Cookie consent banner on the marketing sites
- **Question:** Chris asked whether the sites have a consent banner and to add one if not. The learn app already had one (site setting on); lanternlearn.com, rocketandraven.com and foxandfernbooks.com loaded GA4 (and Metricool on lanternlearn.com, D311) with no consent. How should the banner work?
- **Options:** One shared banner in `@lanternlearn/ui` for every site with a tracker: GA4 starts in Consent Mode with analytics storage denied, Metricool waits, and both start only after "Allow analytics"; shown to every visitor; equal "No thanks" and "Allow analytics" buttons; a "Cookie settings" footer button reopens it (recommended); region-only banner (EU/UK), with tracking on by default elsewhere; a notice-only banner with tracking on.
- **Choice:** The shared opt-in banner, for every visitor. Cloudflare Web Analytics is cookieless and is not gated. The choice is stored per domain for a year (`ll_consent` cookie plus localStorage). Each site's privacy page says analytics cookies are set only after consent. The learn app keeps its own banner (two toggles, `rr_consent`).
- **Date:** 2026-10-15. **Decided by:** owner (asked for the banner); opt-in for everyone is Claude (default). **Status:** Done.
- **Progress:** Live 2026-10-15 on lanternlearn.com, rocketandraven.com and foxandfernbooks.com: GA4 starts denied, banner shows until a choice is made.
- **Links:** lantern-ui #128, lanternlearn-site #62, rocketandraven-site #58, foxandfernbooks-site #22. Related: D2, D303, D311.

### D313: "Fox & Fern", not "Fox & Fern Books"
- **Question:** Chris asked to drop "Books" from the imprint name everywhere, matching "Rocket & Raven".
- **Options:** Rename every user-facing mention (site copy, page titles, JSON-LD, RSS, manifests, certificates, logo alt text) and keep the domain foxandfernbooks.com, the hello@foxandfernbooks.com address and repo names (recommended); also move to a new domain.
- **Choice:** Rename user-facing text only. Domains, email addresses, repo names and the names of existing Canva designs stay as they are. Past entries in this log keep the old name as written.
- **Date:** 2026-10-15. **Decided by:** owner. **Status:** Done.
- **Progress:** Live 2026-10-15 on all four sites.
- **Links:** lantern-ui #128, lanternlearn-site #62, rocketandraven-site #58, foxandfernbooks-site #22, rocket-and-raven-press #132.

### D314: No workbooks or PDF downloads on foxandfernbooks.com
- **Question:** foxandfernbooks.com still listed the Tomorrow Trail (formerly Summer Bridge) activity workbooks with covers, inside-page previews and "Download free printable pages" PDF links (hosted on catbox.moe). Chris: Tomorrow Trail is online course content only, with no downloadable or purchasable workbooks. What goes?
- **Options:** Remove the series page, the seven book pages, the cover and preview images, the sample-PDF links and the "why we made the workbooks" post; 301 the old URLs to the Fox & Fern courses; rewrite blog calls to action to point at the free courses (recommended); hide the PDF buttons only.
- **Choice:** Remove all of it and redirect. The home page lists the Fox & Fern courses instead. The PDFs themselves were anonymous catbox.moe uploads with no delete key on record, so they can't be deleted at the host; nothing on any Lantern Learn site links to them any more.
- **Date:** 2026-10-15. **Decided by:** owner. **Status:** Done.
- **Progress:** Live 2026-10-15: /books/* and /series/* 301 to the Fox & Fern courses.
- **Links:** foxandfernbooks-site #22, lanternlearn-site #62. Related: D102, D104.

### D315: No "Live now" badges
- **Question:** Chris: if a course is listed it's implied it's live, so remove "Live now" badges and use a badge only for "Coming soon".
- **Options:** Remove every "Live now" / "Live" badge and status line, keep "Coming soon" (recommended); keep them.
- **Choice:** Removed on the learn app course pages and home page, and on rocketandraven.com (home rank cards, Code Crew page, grade pages). "Coming soon" stays where a course isn't open yet.
- **Date:** 2026-10-15. **Decided by:** owner. **Status:** Done.
- **Progress:** Live 2026-10-15.
- **Links:** rocket-and-raven-press #132, rocketandraven-site #58.

### D316: Unreadable text (contrast sweep)
- **Question:** Chris reported the "Listen to the story" button was brown on dark green and asked for a sweep of every page for unreadable text.
- **Options:** Fix every failing spot found by an automated WCAG AA contrast check of every sitemap page on the four sites plus two workbook days of every course, and give skins explicit "text on fill" colors so new pages inherit readable pairs (recommended); fix the one button.
- **Choice:** Automated sweep and fix. Root cause: Fox & Fern and Lantern Learn workbook skins put the ink color on their green and violet fills. Skins now set `--on-green` / `--on-cyan`; the navy day header, top bar and table headers take light accents; magenta labels use dark text; course page titles use the heading color; Fox & Fern site accent and small orange text darkened.
- **Date:** 2026-10-15. **Decided by:** owner. **Status:** Done.
- **Progress:** Live 2026-10-15. Re-audit of local builds: 0 contrast failures across 167 marketing pages, the course pages and 122 workbook days.
- **Links:** rocket-and-raven-press #132, foxandfernbooks-site #22.

### D317: Pinterest boards (revisits D75)
- **Question:** Which Pinterest boards should Lantern Learn create so Metricool can pin launch graphics and videos? D75's boards predate the K-12 catalog and were never created.
- **Options:** 4 boards by parent search topic (recommended); keep D75's 4 boards; one "Lantern Learn" board.
- **Choice:** 4 boards: Free Online Courses for Kids, Coding for Kids, Homeschool Curriculum Ideas, Homeschool High School. Each pin goes to the board matching its topic. Replaces D75.
- **Date:** 2026-10-15. **Decided by:** owner. **Status:** Decided.
- **Progress:** Chris creates the boards on Pinterest (Metricool can't create boards; Make's Pinterest connection is expired). Then the 7 launch pins get scheduled in Metricool.
- **Links:** /mnt/project-files/launch/metricool-drafts.md.

### D318: Course pages set up for search
- **Question:** How should every course page be set up so parents searching for things like "free 3rd grade science curriculum" find it?
- **Options:** Generate each course's search title, description and structured data from its metadata on both sites (recommended); hand-write copy for each of the 61 courses; leave the pages as they are.
- **Choice:** Generate from metadata. Titles lead with "Free", the grade and the subject ("Free 3rd Grade Science Course | Science Launch Grade 3 | Lantern Learn"). Descriptions open with the course length and grade, followed by the tagline. Course JSON-LD carries isAccessibleForFree, educationalLevel, a price-0 Offer, an online CourseInstance (one week at a time) and a BreadcrumbList. The learn app's home page adds a WebSite block. lanternlearn.com canonicals use the trailing-slash URLs the host serves (the slashless form 308-redirects). Both sites keep their own self-canonical course pages.
- **Date:** 2026-10-16. **Decided by:** Claude (default). **Status:** Done.
- **Progress:** Merged 2026-10-16 (press #133, lanternlearn-site #63, lantern-ui #131). Next: Chris adds lanternlearn.com to Google Search Console and submits both sitemaps.
- **Links:** [rocket-and-raven-press #133](https://github.com/cbrock84/rocket-and-raven-press/pull/133), [lanternlearn-site #63](https://github.com/cbrock84/lanternlearn-site/pull/63).
