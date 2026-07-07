# /uses Page + Live Coding Stats

## The Idea

Two related additions that round out the "personal" layer of the site:

1. **`/uses`** — the dev-community-standard page listing your hardware, editor setup, terminal, apps, and desk gear. Simple, personal, and there's a real distribution channel: [uses.tech](https://uses.tech) indexes these pages and sends steady traffic.
2. **Live coding stats** — WakaTime coding hours, LeetCode solve counts (pairs perfectly with your `/puzzles` section), and language breakdowns, rendered as small live-updating cards.

Individually small, together they add the "this person is a real, active engineer" texture that static content can't.

## Why It Fits This Codebase

- The card design language and theme tokens make stat tiles trivial to style consistently.
- LeetCode stats directly reinforce the existing puzzles section — "4 writeups" becomes "4 writeups of 300+ solved."
- If the `/now` dashboard (feature 03) exists, these stats can share components and data fetchers with it.

## Implementation

### Step 1: /uses page (~2 hours)

- `src/app/uses/page.tsx`, content in `src/data/usesData.ts` grouped by category: Hardware, Editor & Terminal, Apps, Services, Desk.
- Each item: name, one-line why ("Ghostty — GPU-rendered and it starts instantly"), optional link. The *why* line is what makes these pages worth reading — skip items you have nothing to say about.
- Keep it honest and current; add a "last updated" date.
- Submit to uses.tech (a one-line PR to their repo) and add to `Navigation`/command palette/sitemap.

### Step 2: LeetCode stats (~2 hours)

- LeetCode has no official API, but the public GraphQL endpoint works server-side: query `matchedUser(username)` for `submitStatsGlobal` (solved counts by difficulty).
- `src/lib/leetcode-stats.ts` — fetch in a server component with `export const revalidate = 86400` (daily is plenty; also insulates you from the endpoint being flaky — cache last-good values by writing them to a JSON fallback committed periodically).
- Render on `/puzzles` as a header strip: Easy/Medium/Hard solved counts with the existing difficulty color coding, next to the writeup filters. This is the single best placement — it upgrades the whole section's credibility.

### Step 3: WakaTime coding hours (~2 hours)

- Install the WakaTime editor plugin (free tier keeps 2 weeks of detail, all-time totals forever).
- WakaTime provides **shareable JSON embeds** (Settings → Share) for last-7-days languages and activity — these need no API key and can be fetched from a server component.
- Render: "Coding time this week" bar + top languages donut or simple horizontal bars (plain divs with `--accent` tints; no chart library needed for two small charts).
- Place on `/now` (feature 03) or `/uses` — wherever fits the layout better.

### Step 4: Shared stat card component

`src/components/StatCard.tsx`: label, big number, small trend/subtitle, optional icon — reused across puzzles header, /now, and /uses so everything stays visually coherent.

## Effort Estimate

**~5–6 hours total**, cleanly splittable (each step ships independently).

## Success Criteria

- `/uses` is live, listed on uses.tech, and has a genuine one-liner for every item.
- `/puzzles` shows current LeetCode solved counts that update without redeploying.
- Stats fail soft: if WakaTime or LeetCode fetches error, the cards hide rather than breaking the page.
