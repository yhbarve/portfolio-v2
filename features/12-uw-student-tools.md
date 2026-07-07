# Free Tools for UW Students

## The Idea

A `/tools` section with 2–3 small, genuinely useful web apps aimed at your own community — UW students. Candidates:

1. **Schedule → Calendar exporter**: paste your Quest class schedule text, get an `.ics` file with recurring events for the whole term.
2. **UW GPA calculator**: understands UW's percentage grading and term/cumulative averages, with sliders for "what do I need on the final."
3. **Co-op decision helper**: rank offers/interviews across weighted criteria (pay, location, tech stack, return-offer odds) with a simple scoring matrix.

This is the strategy most likely to bring **strangers** to your site repeatedly: tools get shared in class group chats, linked from Reddit/Discord, and bookmarked. Every visitor who comes for the tool sees your name, your design, and one click to your work. A personal blog almost never earns backlinks; a useful tool does.

## Why It Fits This Codebase

- Each tool is a self-contained, fully client-side page — no backend, no accounts, no cost.
- Your design system (themes, cards, typography) makes even a small utility look far more polished than the usual bare-HTML calculators students find.
- You have domain knowledge competitors don't: you actually navigate Quest, UW grading, and co-op.

## Implementation

### Step 1: Section scaffolding

- `src/app/tools/page.tsx` — index listing each tool as a card (name, one-line pitch, screenshot). Reuse the project card styling.
- `src/app/tools/[tool]/page.tsx` or individual routes (`/tools/schedule-export`, etc.) — individual routes are simpler and better for SEO since each gets its own metadata and can rank for "uw schedule to google calendar".
- Add Tools to `Navigation` and the command palette.

### Step 2: Schedule exporter (the highest-value one)

- Input: a `<textarea>` where the student pastes the text of their Quest "My Class Schedule" page (students can't give you API access; paste-parsing is the proven approach — this is how the popular older tools worked).
- Parser: regex/line-based extraction of course code, section, days (MWF/TTh patterns), start/end times, location, instructor, and term date range. Build a test suite from 3–4 real anonymized schedule pastes; Quest's format is stable.
- Output: generate an iCalendar string client-side (the `ics` npm package or hand-rolled `RRULE` lines — `FREQ=WEEKLY;BYDAY=MO,WE,FR;UNTIL=<term end>`), then `Blob` + download link. Include exam-friendly features later.
- Zero data leaves the browser — say so prominently; it matters to students.

### Step 3: GPA calculator

- Pure client-side state: table of courses (name, grade %, credit weight), computed term and cumulative averages.
- "Target mode": enter current course components + weights, slider shows the final-exam mark needed for a target grade.
- Persist to `localStorage` so it survives reloads.

### Step 4: Distribution (this is half the feature)

- Per-tool `generateMetadata` with search-intent titles ("UW Class Schedule to Google Calendar Exporter — free").
- OG images per tool so shared links look good in Discord.
- Post them where students are (UW subreddit, class Discords) once each is genuinely solid — one good tool shared at the right moment (course enrollment week, exam season) can outdraw the entire rest of the site.

## Effort Estimate

- Section + GPA calculator: **~4 hours**
- Schedule exporter: **~6–8 hours** (parsing robustness is the work)
- Co-op helper: **~3 hours** (optional third)

## Success Criteria

- Schedule exporter round-trips a real Quest paste into a correct `.ics` that imports cleanly into Google Calendar with right times/recurrence.
- Tools work fully offline after load; no data sent anywhere.
- Within a term, at least one tool page gets meaningful non-referral (search/social) traffic — visible once analytics (feature 09) is in.
