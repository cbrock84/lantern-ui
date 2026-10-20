# "How it works" figures (Colorfigures)

Lantern Learn's library of interactive "how it works" figures: one see-through machine per page that a child can
work with buttons, plus a free printable lesson pack and a Pinterest pin. The pilot (CF-D3) built the first three:
the hand pump, the flashlight and the toaster.

- Live pages: `learn.lanternlearn.com/colorfigures/<slug>` (built into `rocket-and-raven-press/public/colorfigures`).
- Lesson packs: `learn.lanternlearn.com/colorfigures/packs/<slug>` and `<slug>.pdf`.
- Pins: `learn.lanternlearn.com/colorfigures/pins/<slug>.png`.
- Source: `rocket-and-raven-press/scripts/colorfigures` (`figures/<slug>.html`, `lantern.js`, `packs.mjs`).
- Decisions: the pilot log at the end of this file, mirrored in `decisions.md` under "Colorfigures pilot".

These are separate from the stepped lesson figures in `public/figures` (D319 to D322, the Anatomy kit). Those sit
inside course lessons; these are standalone pages for packs and Pinterest. A subject already drawn there is not
redrawn here (see the ranked list).

## License and attribution (checked 2026-10-20)

Colorfigures (April Zhu) is MIT licensed, and so are ISO-GLOW (April Zhu) and iso-figure (Tolga Cohce), which it is
built on. MIT allows commercial use, including selling, if the copyright and permission notice travel with the code.

- `build.mjs` inlines the engine with its full MIT `LICENSE` text as a comment, so every built page carries it.
- Every page and every lesson pack ends with this credit, word for word:
  "Drawn with Colorfigures by April Zhu (MIT), built on ISO-GLOW by April Zhu (MIT) and iso-figure by Tolga Cohce
  (MIT). Figure and lesson by Lantern Learn, Chris Brock LLC."
- The engine is used as published. The only change is that the build turns its two em dashes into plain punctuation.
- The drawings, words, packs and pins are Lantern Learn's own. No text or picture is copied from a cited source;
  sources are cited for facts only.
- Check again before any paid sale: the source pages behind each figure are cited for facts, which needs no license,
  but any future figure that adapts outside material follows `sources.json` `_open_resources` (D307).

## Figure spec

Every figure meets all of these. `test/unit/colorfigures.test.mjs` in the press repo checks the starred ones.

1. **One machine, see-through.** A real object drawn in Colorfigures' isometric style, with a clear panel or a cutaway
   so the working parts show. No people or animals.
2. **3 to 5 controls, one learning point each.** Each button (or picker) changes one thing and teaches one point.
   The point is written in `points` in the same order as the buttons. Parts the points name are tagged in the drawing.
3. **Step labels panel.** Below the drawing: the numbered list of points, with the current one lit, and a "what is
   happening" line that narrates each change in plain words.
4. **Lantern Learn branding.** The Lantern Learn bar (mark, name, "How it works"), a figure number, a palette from the
   Colorfigures set, and a footer link to the course and the lesson pack.
5. **Accessibility.**
   - Every control is a real button: Tab, Enter and Space work. Number keys 1 to n press the buttons in order.
   - The drawing has `role="img"` and an alt description that is rewritten after every change to say what it shows.
   - The narration line is `aria-live`, so screen readers hear each step.
   - Colour swatches have names. The page sets `lang="en"`.
6. **Facts from listed sources.** Every fact on the page is checked on a page that is listed in `sources.json`
   (through the course `SOURCES.md`). The sources are listed in the page footer.
7. **Writing.** Follows `standards/content-standards.md`: kid-facing sentences of 18 words or fewer (grades 3 to 5),
   no invented facts, and no em dashes (the build fails on one).*
8. **Self-contained.*** One HTML file, with nothing loaded from another host.
9. **Attribution footer and MIT notice*** as above.
10. **States for pictures.** URL parameters set a still state (for example `?on=1`), and `?still=1` shows the drawing
    alone. `shots.mjs` uses them for the pack picture and the pin.

## Lesson pack format

One page per figure at `/colorfigures/packs/<slug>`, which prints to four US Letter pages, plus a PDF of the same.
It prints in black and white (the picture turns grey), and the answer key is at the back (content standards, 8).

1. **Worksheet.** A still of the figure, then:
   - "Try it": one question per control, in button order, with a writing line.
   - "Fill in the blanks": 4 sentences with a word bank.
   - "Think": one open question.
2. **Quiz.** 5 multiple-choice questions with 4 options each, one per learning point.
3. **Teacher notes.** Grades, time, course, the NGSS performance expectation only when it fits for certain (with its
   text), the big idea, what children will do, set up, a talk prompt, a common mix-up to watch for, a "go further"
   idea, the sources and the credit.
4. **Answer key.** Answers to every worksheet and quiz item.

Packs are free during launch (CF-D4, D106). Bundles may sell in the printable store later.

## Pinterest flow

1. `node scripts/colorfigures/build.mjs`, then `node scripts/colorfigures/shots.mjs` (headless Chromium) make the
   still, the 1000 x 1500 pin and the pack PDF for each figure.
2. After the press PR merges and deploys, each pin's image is public at
   `https://learn.lanternlearn.com/colorfigures/pins/<slug>.png`, linking to
   `https://learn.lanternlearn.com/colorfigures/<slug>`.
3. Pins are queued in Metricool (blogId 6238542) **for review only**. Nothing posts without Chris's OK. By the standing
   rule, a Lantern Learn post goes to every connected Metricool channel.
4. Board: CF-D5 chose the existing boards. The Make scenarios "Pinterest create board, Lantern Learn"
   (s4699533 and s4699545) exist and are on demand; they only create a public board (inputs: name, description).
   Both Make Pinterest connections returned 401 before (D74), so a new board may need them reconnected first. They are
   not run without Chris's OK.

## Ranked subjects (20)

Ranked by teaching value (fit with the K to 5 and applied STEM courses, and how much a see-through view adds) and
Pinterest appeal (a clear, colourful machine people already search for). Scores are Claude's judgment, 1 to 5.
Applied STEM (coding, computers) ranks high, per Chris's post-launch focus.

| # | Subject | What the controls teach | Teach | Pin | Status |
| --- | --- | --- | --- | --- | --- |
| 1 | Hand pump with see-through panel | lever, one-way valves, air pressure | 5 | 4 | Built (Fig. 01) |
| 2 | Flashlight | closed circuit, switch, battery, energy to light | 5 | 4 | Built (Fig. 02) |
| 3 | Toaster | heating wire, bimetal strip, latch, chemical change | 5 | 5 | Built (Fig. 03) |
| 4 | Traffic light controller | sequence, timer, sensor input (first coding figure) | 5 | 5 | Next |
| 5 | Keyboard key to letter on screen | switch, scan code, computer turns a press into a letter | 5 | 4 | Next |
| 6 | Gumball machine with coin check | coin size and weight check, gear turn, money | 4 | 5 | Next |
| 7 | Bike pump with see-through valve | air pressure, one-way valve (pairs with the hand pump) | 4 | 4 | Next |
| 8 | Wind turbine | wind to motion to electricity | 5 | 4 | |
| 9 | Doorbell | electromagnet, circuit, sound | 4 | 4 | |
| 10 | Kettle that clicks off | heating element, bimetal switch (reuses the toaster's idea) | 4 | 4 | |
| 11 | Pulley crane | fixed and moving pulleys, force and distance | 4 | 4 | |
| 12 | Music box | pins on a drum as a stored program | 4 | 5 | |
| 13 | Mechanical adding machine | carrying digits with gears (computing history) | 4 | 3 | |
| 14 | Water wheel grain mill | moving water to motion, gears | 4 | 4 | |
| 15 | Printing press | screw press, moveable type, mirror images | 3 | 4 | |
| 16 | Balance scale | levers, balance, comparing mass | 4 | 3 | |
| 17 | Hourglass and water clock | measuring time with a steady flow | 3 | 4 | |
| 18 | Washing machine cycles | fill, wash, rinse, spin as a program | 3 | 4 | Colorfigures ships a washer example to adapt |
| 19 | Bicycle gears | gear ratio, speed and effort | 4 | 4 | Overlaps the gear bench figure (D320); only if it adds something |
| 20 | Four-stroke engine | intake, squeeze, power, exhaust | 4 | 4 | Overlaps the car engine figure (D322); hold |

## Tech catalog (CF-D11)

Chris (2026-10-20): "Build out a large number of how it works diagrams for various tech equipment like laptops,
tablets, computer workstations, IoT devices that may be in a household". These go in two catalog sections, Computers
and Smart home, for grades 3 to 5, linked to Inside the Machine 3 to 5. Each figure keeps its pack in
`scripts/colorfigures/packs/<slug>.mjs` and its source rows in the Inside the Machine `SOURCES.md`.

| Fig. | Subject | Section | What the controls teach | Wave |
| --- | --- | --- | --- | --- |
| 04 | Laptop | Computers | start-up, memory and storage, processor heat and fan, battery | 1 |
| 05 | Desktop workstation | Computers | power supply, processor, memory, storage, graphics card, airflow | 1 |
| 06 | Tablet | Computers | touch input, screen output, motion and light sensors, charging | 1 |
| 07 | Keyboard key to letter | Computers | switch, key code, cable, letter on screen | 1 |
| 08 | Optical mouse | Computers | light, tiny camera, comparing pictures, pointer | 1 |
| 09 | Screen pixels | Computers | pixels, red, green and blue, pictures as numbers | 1 |
| 10 | Home router | Smart home | packets, addresses, Wi-Fi, the internet link | 1 |
| 11 | Smart speaker | Smart home | microphones, wake word, data over the internet, mute | 1 |
| 12 | Smart thermostat | Smart home | sensor, set point, switching heat and cooling, schedule | 1 |
| 13 | Video doorbell | Smart home | button, camera, motion sensor, Wi-Fi, infrared at night | 1 |
| 14 | Robot vacuum | Smart home | sense, decide, act; bump and cliff sensors; docking | 1 |
| 15 | TV remote | Smart home | switch, infrared light pattern, sensor, code | 1 |
| | Smartphone | Computers | radios, cameras, sensors, battery | 2 |
| | Game console and controller | Computers | buttons and joysticks as input, graphics, wireless link | 2 |
| | Solid state drive and USB stick | Computers | storage that keeps data with the power off | 2 |
| | Hard drive | Computers | spinning disk, read and write head | 2 |
| | Inkjet printer | Computers | print head, paper path, dots make a picture | 2 |
| | 3D printer | Computers | layers, heated nozzle, moving axes | 2 |
| | Wireless earbuds | Smart home | Bluetooth, microphone, speaker, charging case | 2 |
| | Wireless charger | Smart home | coils, magnetic field, charging without a plug | 2 |
| | Fitness tracker | Smart home | motion sensor counts steps, light-based heart rate | 2 |
| | Smart bulb and smart plug | Smart home | Wi-Fi switch, app, schedules | 2 |
| | Smart lock | Smart home | motor bolt, code, wireless unlock | 2 |
| | Security camera | Smart home | camera, motion, storage, cloud | 2 |
| | Traffic light controller | Smart home | sequence, timer, sensor input (from the ranked list) | 2 |
| | Smoke and carbon monoxide alarm | Smart home | covered by the D322 stepped figure; only if it adds something | 2 |

Every new figure gets its facts from pages listed in `sources.json` first, and adds any new source to the course
`SOURCES.md` in the same change.

## Pilot decision log

Numbered `CF-D<n>` (Colorfigures pilot), continuing from Chris's CF-D3, so they never clash with project decisions
D1 to D322. Each is mirrored in `decisions.md`.

| ID | Question | Choice | Decided by | Status |
| --- | --- | --- | --- | --- |
| CF-D3 | Use the Colorfigures skill for "how it works" figures? | Yes: pilot 3 figures, packs and pins | owner | Decided |
| CF-D4 | Sell figures and packs? | A: free during launch; bundles may sell in the printable store later | owner | Decided |
| CF-D5 | Which Pinterest board, and queue the pins? | A: existing boards via Metricool, queued for review | owner | Decided |
| CF-D6 | Where do the figures live? | A: standalone pages, linked from packs and pins only | owner | Decided |
| CF-D7 | Hosting path | `learn.lanternlearn.com/colorfigures/<slug>`, built in the press repo | Claude (default) | Decided |
| CF-D8 | First three subjects and level | Hand pump, flashlight, toaster; Everyday Machines; grades 3 to 5; NGSS 4-PS3-2 on the flashlight and toaster only | Claude (default) | Decided |
| CF-D9 | License check before any commercial use | MIT allows it with the notice; notice in every page, credit in every footer | Claude (default) | Done |
| CF-D10 | Order of the next 17 | As ranked above | Claude (default) | Decided |
| CF-D11 | Tech catalog | Computers and Smart home sections, grades 3 to 5, built in waves (table above) | Claude (default) | Decided |
