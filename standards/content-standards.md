# Lantern Learn content standards

**Status:** Draft v0.1 (2026-09-23). Applies to every imprint (Rocket & Raven,
Fox & Fern Books, Holly & Hare) and every format: online workbooks, printable
PDF companions, short stories, and blog/guide articles.

Items marked **Proposed** are Claude's suggestions awaiting the owner's
approval. Items marked **To define** need owner input. Related decisions are
tracked in [`../decisions.md`](../decisions.md).

Imprint-specific rules live in the bibles: [`../bibles/`](../bibles/). Where a
bible and this document disagree, the bible wins for that imprint.

## 1. Principles

These apply everywhere. They are drawn from the Rocket & Raven bible and the
imprints' published positioning.

- Treat children as capable learners.
- Mistakes are part of learning. Content never mocks a wrong answer.
- Build strategy and understanding, not memorized answers. Worked examples model
  the thinking, not only the result.
- Short, predictable daily sessions.
- Inclusive and diverse people and settings.
- Never include weapons, bullying, mean-spirited humor, cynicism, scary imagery,
  brand parodies, pop-culture references, or real-world corporate logos.

## 2. Audiences

| Imprint | Grades / ages (as published) | Register |
| --- | --- | --- |
| Rocket & Raven | K through Grade 6+ (Code Crew, Science Launch) | Energetic, story-led, STEM |
| Fox & Fern Books | Pre-K through Grade 5, ages 4 to 10 (Tomorrow Trail) | Warm, playful, everyday practice |
| Holly & Hare | Grades 3 to 5, ages 8 to 11 (Gifted & Talented Puzzle Prep) | Quiet, rigorous, grown-up |

**Reading level (D20) and story length (D23).** Every story and lesson line
is held to its grade band's sentence cap, checked by an automated test. A
sentence is counted in words, split on spaces, ending at `.`, `!` or `?`.
Quoted speech counts as part of its sentence. A list of items in parentheses
still counts.

| Band | Sentence cap (words) | Day story (words) | Short story (words) | Structure |
| --- | --- | --- | --- | --- |
| Pre-K | 6 | 10 to 20 | 150 to 300 | One character, one small problem, solved in one try. Repeated line the child can say along. |
| K | 8 | 12 to 25 | 200 to 400 | Two or three short paragraphs: who and where, the problem, the fix. One new word at most. |
| Grade 1 | 10 | 15 to 30 | 300 to 500 | Beginning, middle, end. One try that fails before the one that works. |
| Grade 2 | 12 | 30 to 60 | 400 to 700 | Three or four paragraphs. A clue or choice the lesson picks up. Dialogue allowed. |
| Grade 3 | 15 | 40 to 80 | 600 to 1,000 | A problem with two steps. Dialogue carries part of the story. |
| Grades 4 to 5 | 18 | 60 to 120 | 800 to 1,500 | A subplot or a second viewpoint is allowed. Chapters of up to 500 words. |
| Grade 6+ | 22 | 80 to 150 | 1,000 to 2,000 | Adult-length paragraphs; still one idea per sentence in instructions. |

- **Day story**: the short scene that opens a lesson day and is narrated with
  word highlighting.
- **Short story**: a standalone story (for example the Fox & Fern short
  stories). At narration pace (about 110 words a minute) the top of each
  range is roughly 3 minutes for Pre-K and 18 minutes for Grade 6+.
- Instructions follow the same caps and keep one action per sentence.
- Vocabulary is the band's lower grade. A new word is introduced in the
  story, used again in the lesson, and appears in the glossary.

Short stories are read one screen at a time:

| Band | Words per screen | Screens per short story | Illustrations |
| --- | --- | --- | --- |
| Pre-K | 25 to 35 | 6 to 10 | One per screen, and a cover |
| K | 25 to 40 | 8 to 12 | One per screen, and a cover |
| Grade 1 | 30 to 45 | 8 to 14 | One per screen, and a cover |
| Grade 2 | 40 to 60 | 10 to 16 | One per screen, and a cover |
| Grade 3 | 60 to 80 | 10 to 16 | One every other screen, and a cover |
| Grades 4 to 5 | 80 to 100 | 10 to 16, in chapters of up to 5 screens | One per chapter or every three screens, and a cover |
| Grade 6+ | 100 to 120 | 10 to 18 | One every four screens, and a cover |

## 3. Curriculum standards alignment

- Each unit or week lists the standards it practices. The frameworks already
  used across the imprints are:
  - Common Core State Standards (CCSS) for math and English language arts;
  - Next Generation Science Standards (NGSS) for science;
  - CSTA K–12 Computer Science Standards for coding.
- Every code must be a real identifier from the official framework and must
  genuinely match the activity. If a match is uncertain, omit the code. Never
  guess.
- **Proposed.** Store codes in the content data (as the Code Crew generators do
  with `csta`/`ccss` fields), not only in marketing copy, so the site and the
  workbook can never disagree.

## 4. Sources and citations

- **Articles and guides** (blog, expertise content): every factual claim that
  is not common knowledge cites a source. Sources are listed in the article's
  frontmatter `sources` field (title, url, publisher, published/accessed dates).
  The shared layout renders them as a numbered list and as schema.org citations.
- **Workbooks and stories** that state facts (science, history, nature): the
  facts are checked against an authoritative source. The source is recorded in
  the content data or the course's source list, even when it isn't shown to the
  child.
- **Authoritative, in priority order (Proposed):**
  1. The standards bodies and official framework publishers.
  2. Government and public-research sources (for example .gov agencies and
     museums).
  3. Peer-reviewed research.
  4. Established education organizations.

  Commercial blogs and content farms are not sources.
- Never fabricate a source, quotation, statistic or URL. Every cited URL is
  opened and checked before publishing.
- Test-prep content names the frameworks it builds on and states
  non-affiliation where it matters. Holly & Hare already does this for CogAT®
  and NNAT®.

## 5. Child safety and privacy

Existing platform behavior, which remains a hard rule:

- Children never create accounts, sign in, or type personal information. Kids
  use a parent's account through kid profiles with a display name only.
- Anything that collects free text (feedback, contact) appears only on
  parent-facing pages and asks parents not to include children's names.
- No analytics or tracking pixels on kid-facing pages. The platform enforces
  this with a test.
- **Proposed.** No external links on kid-facing pages. Links out of a lesson go
  through a parent-facing page.
- **Proposed.** No chat, comments, or user-to-user interaction in kid-facing
  features.

## 6. Writing for read-aloud

All kid-facing text may be spoken aloud: stories through "Read to me", with
each word highlighted as it is spoken, and exercise lines as recorded clips.

- Short sentences. Spell out symbols that read badly aloud: write "3 plus 4",
  not "3+4", in narrated text.
- Don't rely on formatting to carry meaning in narrated passages. Bold and
  italics are not spoken.
- Dialogue attribution is clear: say who is speaking.
- Every imprint uses the "Sparkles for Kids" ElevenLabs voice for story
  narration (D21). Exercise lines (instructions, questions, feedback) use
  Cloudflare Workers AI, Deepgram Aura-2 (D33).

## 7. Visual and art standards

- Characters match their bible's reference art and appearance notes.
- Generated art contains no text, letters, logos, or brand marks, including on
  clothing and shoes.
- Every image has alt text that describes what matters for the lesson.
- Text and UI meet WCAG 2.1 AA contrast.
- **Proposed.** AI-generated images are reviewed by a person before publishing.
  The review checks model consistency, stray text or logos, and anything unsafe
  or off-brand.

## 8. Formats

### Online workbooks

- Weeks and days, with short daily sessions. Fox & Fern publishes 15 to 20
  minutes a day. The Code Crew course pages say 10 to 15 minutes a day.
- Each week lists its standards (section 3). Each day ends with a clear finish
  point.
- Answer checking gives encouraging feedback. For a wrong answer, it shows a
  hint before showing the answer.

### Printable PDF companions

- Free download. Prints in black and white without losing meaning.
- Includes an answer key for parents at the back.
- US Letter only (D22).

### Short stories (new)

- Read on a tablet or phone, with optional narration and word highlighting.
- Length, structure, screens and illustrations per grade band: section 2
  (D23).
- Stories follow the imprint bible's cast and voice, and sections 1, 5 and 6
  above.

### Articles

- Written for parents and educators, not children. Cites sources (section 4).
- Published only when complete. An empty blog stays out of search results and
  the sitemap.

## 9. Pre-publish checklist

- [ ] Follows the imprint bible (cast, voice, design rules).
- [ ] Standards codes are real and match the activities.
- [ ] Facts are checked, and sources are recorded or cited, with URLs opened.
- [ ] Read-aloud check done: narration reads cleanly.
- [ ] Art has alt text and contains no logos or text.
- [ ] (Proposed, section 7) A person has reviewed any AI-generated art.
- [ ] Nothing asks a child for personal information.
- [ ] (Proposed, section 5) No external links on kid pages.
- [ ] PDF prints legibly in black and white, with the answer key included.
- [ ] Owner sign-off, recorded in `decisions.md` when it involved a choice.

Items marked (Proposed) become required only once the owner approves the
matching rule; until then they are recommended, not blocking.
