# TIL Stream / Digital Garden

## The Idea

A `/til` (Today I Learned) feed of micro-posts: 5–15 lines each — a code snippet that surprised you, a debugging war story, something from lecture, a CLI trick. The insight: your blog has a *high publishing bar* (essays, structured writeups) so it updates slowly and the site can look dormant between posts. A TIL stream has a near-zero bar, so the site always looks alive, and over a year it compounds into a searchable personal knowledge base with long-tail search traffic ("nextjs contentlayer webpack turbopack error" is exactly the kind of thing TILs rank for).

## Why It Fits This Codebase

- It's a third Contentlayer document type — you've built this pattern twice already (`Post`, `Puzzle` in `contentlayer.config.ts`).
- The markdown pipeline (code highlighting, KaTeX, GFM) is exactly what TILs need with zero new config.
- Feeds directly into command palette search (feature 01), tags (feature 04), and RSS (feature 09) if those land.

## Implementation

### Step 1: Document type

```ts
export const Til = defineDocumentType(() => ({
  name: "Til",
  filePathPattern: "til/**/*.md",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" } },
    published: { type: "boolean", default: true },
  },
  computedFields: { /* slug/url like Post */ },
}));
```

Folder convention that keeps it frictionless: `til/2026/using-hnsw-indexes.md`. Title + date + body, nothing else required.

### Step 2: The feed page

`src/app/til/page.tsx`:

- **Render full entries inline** in a single reverse-chronological stream (they're short — no click-through needed). Group by month with sticky month headers.
- Tag filter pills at the top (same interaction as `/puzzles` difficulty filter).
- Entry anchor links (`/til#slug`) plus lightweight permalink pages (`/til/[slug]`) so individual TILs are shareable and indexable — permalinks are where search traffic lands.
- Show a count in the header ("87 things learned so far") — it gamifies your own consistency.

### Step 3: Reduce friction to zero (this decides whether it works)

The feature succeeds or fails on whether writing an entry takes under two minutes:

- `scripts/new-til.mjs` — `npm run til "Title here"` scaffolds the file with today's date and opens it in your editor.
- No cover images, no summary field, no category taxonomy. Tags optional.
- Decide a rule for yourself: anything worth a message to a friend is worth a TIL.

### Step 4: Surface it everywhere

- Homepage: 3 most recent TIL titles as one-liners in or near the Writings section — this is what makes the *homepage* look alive.
- Command palette group + inclusion in search index.
- Include TILs in the RSS feed and sitemap (feature 09).
- Cross-link: when a TIL grows up into a full blog post, link them both ways.

## Effort Estimate

**~4 hours** for infrastructure. The real cost is the habit — which is also the real payoff.

## Success Criteria

- Creating and publishing a TIL takes under 2 minutes end to end.
- `/til` renders 50+ entries without pagination pain (virtualize or paginate at ~100 if needed).
- Individual TIL permalinks get indexed and start receiving search impressions within a couple of months (visible in Search Console once feature 09 lands).
