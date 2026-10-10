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

### D147: Round the numbers in marketing copy
- **Question:** Should public copy give exact catalog counts (for example "16 courses")?
- **Options:** None offered. The owner set this as a standing rule on 2026-10-10: round, for example "15+ courses" or "nearly 20 courses", so material doesn't need updating as the catalog grows.
- **Choice:** Round any count that grows with the catalog: courses, series, lessons across the catalog. Use "15+" or "nearly 20", never the exact number. Claude (default): a fixed fact about one course stays exact, because rounding it would mislead. That covers things like "12 weeks" per course, "60 days" on the Code Crew K diploma, and Builder's Lab's 12 challenges. Counts the code computes from data (for example "{n} weeks") also stay exact. Internal docs, such as the launch README inventory, keep exact counts.
- **Date:** 2026-10-10. **Decided by:** owner (rule); Claude (default) for the scope. **Status:** Done.
- **Progress:** "16 courses" changed to "15+ courses" on the lanternlearn.com hero badge, in the social kit images, and in the Reddit, Facebook and directory launch drafts. On rocketandraven.com, "Four series" and the stale "Two series so far" are now worded without a count. Rule added to standards/content-standards.md section 8 and to the launch README.
- **Links:** Related: D138.
