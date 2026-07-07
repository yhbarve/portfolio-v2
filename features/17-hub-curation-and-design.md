# Hub Curation & Design Polish

## The Idea

Not a new feature — a curation pass that makes the "personal hub, not just a resume" goal actually land. The verdict from reviewing the site: **remove nothing, upgrade the thin parts.** The guiding principle: a hub page earns its place if it shows *taste* (curation with a point of view), *life* (updates over time), or *craft* (the page itself is well made). A page that's just a list anyone could write is dead weight.

Per-page verdicts:

| Page | Verdict | Why |
|------|---------|-----|
| **Gallery** | Keep as-is | Your own work; craft + taste. Strongest personality page. |
| **Music** | Keep as-is | Live data, distinctive design. Nobody else has this. |
| **Puzzles** | Keep | Your writing > a list. Thin at 4 entries — keep adding, or add LeetCode stats (feature 16) so the section feels bigger. |
| **Reading** | Keep, but fix | Currently a title/author/page-count table with raw Amazon links — inventory, not curation. Fix below. |
| **Skills (homepage)** | Shrink or cut | Skill grids are unverifiable claims; projects/experience already prove the stack. |

## Implementation

### 1. Fix the reading page (~2 hours)

The page is ~600 lines of hardcoded `ReadListItem` JSX in `src/app/reading/page.tsx`, using `flex flex-col-reverse` to fake ordering, with tracking-parameter-laden Amazon URLs.

- Extract to `src/data/readingData.ts`:

```ts
export type Book = {
  title: string;
  author: string;
  link?: string;
  status: "reading" | "finished";
  note?: string;   // the one-liner that makes this page worth visiting
  year?: number;   // year read, for grouping
};
```

- **Drop the page-count column** (says nothing about you) and replace it with the `note` — one line per book: why it stuck with you, when you read it, who you'd recommend it to. Curation with commentary is taste; a list is inventory. If writing the one-liners feels like a chore, that's the signal to fold reading into the interests section instead of keeping a page.
- Add a **"Currently reading"** slot at the top from `status: "reading"` — instant life.
- **Clean the Amazon links**: strip everything after the `/dp/ASIN/` segment (shorter, no tracking params, won't rot).
- Render the array in order — delete the `flex-col-reverse` hack.

### 2. Make the homepage actually be the hub (~3 hours) — highest impact item here

The hobby pages are only reachable via the command palette and the `Interest` section, which is currently a plain word list (`["Reading", "Leetcode", "Photography", ...]` passed as strings into `src/components/sections/interest.tsx`). Someone who never presses Cmd+K may never discover half the site.

Replace it with a grid of small preview cards, each linking to its page:

| Card | Preview content (all available at build time) |
|------|----------------------------------------------|
| Photography → `/gallery` | One photo thumbnail from `galleryData.ts` |
| Reading → `/reading` | Current book title from `readingData.ts` |
| Music → `/music` | "4 playlists" or a playlist thumbnail |
| Puzzles → `/puzzles` | Latest writeup title + difficulty badge |
| Writings → `/writings` | Already has its own section — skip or link only |

Style like the existing project cards (`bg-surface-1`, hover accent border). Interests without a page (Formula 1, Movies & TV, Sports, Graphic Design) stay as plain chips below the cards.

### 3. Shrink the Skills section (~30 min)

Reduce `src/components/sections/skills.tsx` to a single compact row of chips (or cut it entirely) and let the reclaimed vertical space go to Projects. Prerequisite: fix the experience-cards desktop bug first (see `10-fixes-and-cleanup.md`) — Experience is the section that matters most and may currently not render on desktop at all.

### 4. Unify the subpage shell (~2 hours)

Each hub page has its own layout with inconsistent header/back-navigation. Create a shared `SubpageHeader` component — small name/logo linking home, page title, `ThemeSwitcher` — and use it across `writings`, `projects`, `puzzles`, `reading`, `gallery`, and `music` layouts. Also apply the homepage's gradient background (`from-background-1 via-background-2 to-background-3`) and `AnimatedSection` entrance motion to hub pages that currently render statically, so the whole site feels like one product.

### 5. Typography personality (~1 hour)

`tailwind.config.ts` declares Xanh Mono, Instrument Serif, and Space Mono but everything renders in Inter Tight. Pick one:

- **Use them**: Instrument Serif for page titles and section headings over Inter Tight body — a cheap, big step toward the editorial "hub/zine" feel that matches the multi-theme system. Load it via `next/font` in `layout.tsx` alongside Inter Tight.
- **Or delete the declarations** — unused config is noise.

(Recommended: try the serif on one page title first; it either clicks immediately or it doesn't.)

## Effort Estimate

**~1 day total**, but every item ships independently. Order of impact: interests-as-hub-cards (2) → reading fix (1) → subpage shell (4) → skills (3) → type (5).

## Success Criteria

- Every hub page is reachable in one click from the homepage without the command palette.
- The reading page says something about you that a stranger couldn't have written (notes + currently-reading).
- No page-count columns, no tracking-parameter URLs, no `flex-col-reverse` ordering hacks.
- Subpages share one header pattern and the homepage's background/motion treatment.
