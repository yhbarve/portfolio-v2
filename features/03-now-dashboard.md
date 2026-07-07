# Live "Now" Dashboard

## The Idea

A `/now` page (or a homepage section) that shows what you're up to *right now*: recent GitHub activity, what you're listening to, what you're currently reading, and your latest post. Portfolios that feel alive stand out enormously — a recruiter landing on a page with this week's commit graph and today's playlist immediately knows this person ships.

## Why It Fits This Codebase

Most of the plumbing already exists:

- **GitHub contributions** are already fetched in `src/lib/github-contributions.ts` (via `github-contributions-api.jogruber.de`) — but the tooltip UI that displays them is commented out in `src/components/Socials.tsx`. The data is fetched and thrown away.
- **YouTube Music playlists** are already fetched server-side in `src/lib/ytmusic-playlist.ts` with 24h revalidation for the `/music` page.
- **Bookshelf data** exists (17 books) but is hardcoded in `src/app/reading/page.tsx` — extracting it to a data file lets you flag one as "currently reading."
- **Latest post** is a one-liner from Contentlayer's `allPosts`.

## Implementation

### Step 1: Extract and enrich data sources

- Move the bookshelf list from inline JSX in `src/app/reading/page.tsx` into `src/data/readingData.ts` with a `status: "reading" | "finished"` field. `/reading` renders from it; `/now` picks the `reading` entries.
- Add `src/lib/github-recent.ts`: fetch `https://api.github.com/users/<username>/events/public` (no auth needed for public events, 60 req/hr unauthenticated — plenty with ISR). Map push/PR/star events to a human feed: "Pushed 3 commits to portfolio-v2".

### Step 2: Build the page

`src/app/now/page.tsx` (server component, `export const revalidate = 3600`):

Layout as a bento-style grid of cards, reusing the existing card design language (`bg-surface-1`, `border-border`, gradient background):

| Card | Data source |
|------|-------------|
| **Contribution heatmap** | Existing `github-contributions.ts` — render a mini 52×7 grid of divs colored by `accent` opacity. Theme-aware for free since themes are CSS variables. |
| **Recent activity** | New `github-recent.ts` — last 5 events as a feed. |
| **On repeat** | First 5 tracks of one playlist from `ytmusic-playlist.ts`, with thumbnails. |
| **Currently reading** | `readingData.ts` entries with `status: "reading"`, cover + progress note. |
| **Latest writing** | Most recent published post from `allPosts`, reuse `WritingsCard`. |
| **Status blurb** | A hand-edited line in `src/data/nowData.ts` ("Interning at X, learning Y") with a `lastUpdated` date. |

### Step 3: Wire it into the site

- Add "Now" to `Navigation`, `MobileNavbar`, and the command palette (`CommandMenu.tsx`).
- Add a `generateMetadata` with an OG description like "What Yash is doing right now."
- Animate cards in with the existing `AnimatedSection` component.

### Step 4: Resurrect the GitHub tooltip (bonus)

Since the heatmap component will exist for `/now`, un-comment and rewire the mini contribution tooltip in `Socials.tsx` to reuse it — finishing a half-built feature for free.

## Effort Estimate

- Core page with heatmap + music + reading + latest post: **4–6 hours**
- GitHub events feed + Socials tooltip revival: **+2 hours**

## Success Criteria

- `/now` loads statically fast (ISR, no client fetch waterfalls) and updates within an hour of new activity.
- Heatmap colors adapt to all four themes.
- Page renders gracefully if the GitHub or YouTube APIs fail (cards hide individually, never a broken page).
