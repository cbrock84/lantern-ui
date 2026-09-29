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
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Decided.
- **Progress:** K→1 Stop 1 is live, unlisted for the owner's review, at https://learn.lanternlearn.com/courses/tomorrow-trail-k1 with every line recorded. Stops 2 to 12 are next.
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
- **Progress:** The owner then pointed to Canva, which already holds all twelve characters (color, line and pencil), all twelve badges, 41 icons and group scenes. That art replaces generated art wherever it exists, including the four characters and Stop 2's badge, helpers and tools. The rest (ten stop scenes, 38 icons, two coloring pages, a certificate border) is generated and awaits the owner's review. Stops 2 to 12 are written.
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
- **Date:** 2026-09-26. **Decided by:** owner. **Status:** Decided.

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
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. Workbook pages have a small "Back to course" link and no family bar (rocket-and-raven-press #62).

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
- **Date:** 2026-09-27. **Decided by:** owner. **Status:** Done. Terms, Privacy and Cookies read "operated by Chris Brock LLC dba Lantern Learn" (rocket-and-raven-press #63, live 2026-09-27).

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
- **Progress:** Art audit under way; the art sheet goes to the owner before anything ships.


### D81: Animals in the Code Crew exercise cards
- **Question:** Some Code Crew cards draw animals that are not in the cast (dog, duck, beetle, chick, fish, small bird) from primitive shapes. Does D80's rule cover them?
- **Options:** yes, replace them with generated art in the bible's style / no, keep the shape icons for non-cast animals.
- **Choice:** Yes. Six animal images are generated in the Rocket & Raven style and go on the same art sheet for owner approval.
- **Date:** 2026-09-29. **Decided by:** owner. **Status:** Decided.
- **Progress:** Art being generated.

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
