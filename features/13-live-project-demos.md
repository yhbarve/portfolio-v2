# Live Playable Project Demos

## The Idea

Your 17 projects are currently rows in a table with external links. Pick the 2–3 best and make them runnable *inside* the site — an embedded interactive demo, a simulation with sample data, a "try it now" panel. A project a visitor can poke at is worth ten they can read about, and almost nobody does this, so it immediately differentiates the portfolio. It changes the visitor's question from "did he build things?" to "this works."

## Why It Fits This Codebase

- You already have per-project data (`src/data/projectData.ts`) and, once feature 10's unification lands, a single place to add a `demo` field.
- Next.js App Router handles embedding client-side demos in otherwise-static pages cleanly with `next/dynamic` — heavy demo code loads only on the demo page.

## Implementation

### Step 1: Pick demos by embeddability, not impressiveness

Triage your projects into three tiers and pick the top of each:

| Tier | Criteria | Treatment |
|------|----------|-----------|
| **Fully embeddable** | Client-side logic (algorithm, visualization, game, parser, ML model that runs via ONNX/tfjs) | Real interactive demo component |
| **Backend-dependent** | Needs a server/DB but has a demoable core | Sandboxed demo mode with canned data, or deploy a free-tier instance and iframe it |
| **Not embeddable** | Infra, mobile, or dead services | 30-second screen recording (`<video>` with poster, muted, loop) — still far better than a link |

### Step 2: Project detail pages

Right now projects link straight out. Add `src/app/projects/[slug]/page.tsx`:

- Header: name, year, tech chips, GitHub/live links.
- **Demo section at the top** — the demo is the hero, not the description.
- Below: a short "how it works" writeup (2–3 paragraphs: problem, architecture, hardest part). This is also prime interview-prep material — you're pre-writing your project deep-dive answers.
- Add `slug` and `demo: { type: "component" | "iframe" | "video", src?: string }` to the project data type; table rows on `/projects` link to detail pages when a slug exists, external links otherwise.

### Step 3: Demo component pattern

- `src/components/demos/` — one client component per embeddable demo, loaded via `next/dynamic(() => import(...), { ssr: false })` so demo bundles never affect other pages.
- Wrap each in a shared `DemoFrame` component: consistent border, "Live demo — try it" label, reset button, and an error boundary so a crashing demo can't take down the page.
- For iframe-tier demos, lazy-load the iframe on scroll-into-view (`IntersectionObserver`) and pin the free-tier deployment so it doesn't cold-start into an error.

### Step 4: Homepage tie-in

- Featured project cards on the homepage get a small "▶ Live demo" badge when a demo exists — it's a strong click incentive.
- Add the demos to the command palette ("Demo: <project>").

## Effort Estimate

- Detail-page infrastructure + one video-tier demo: **~4 hours**
- Each embeddable demo: **2–8 hours** depending on how much extraction from the original repo is needed (budget one weekend for the flagship one).

## Success Criteria

- At least one project is fully usable inside the site with zero setup.
- Demo pages load fast: demo JS is code-split and doesn't affect the projects table or homepage.
- A visitor can go homepage → featured card → interacting with the demo in two clicks.
