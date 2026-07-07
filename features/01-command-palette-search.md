# Full-Text Search in the Command Palette

## The Idea

Extend the existing `Cmd/Ctrl+K` command palette so visitors can search across all blog posts and puzzle writeups — by title, summary, tags, and even body text — and jump straight to the result. The palette already handles navigation, theme switching, and social links, so search slots in naturally and makes the whole site feel like a real product instead of a static page.

This is the single highest-leverage UX feature for a content site: it rewards return visitors, makes older posts discoverable, and shows engineering polish the moment someone hits Cmd+K.

## Why It Fits This Codebase

- The palette already exists at `src/lib/CommandMenu.tsx`, built with `cmdk` — which ships fuzzy filtering out of the box.
- Contentlayer generates all content as importable JSON (`.contentlayer/generated`), so the full corpus of 14+ posts and 4 puzzles is available at build time. No backend, no API route, no search service needed.

## Implementation

### Step 1: Build a search index at the data layer

Create `src/lib/search-index.ts`:

```ts
import { allPosts, allPuzzles } from "contentlayer/generated";

export type SearchDoc = {
  type: "post" | "puzzle";
  title: string;
  summary: string;
  tags: string[];
  url: string;
  body: string; // raw markdown, stripped of syntax
};

export const searchDocs: SearchDoc[] = [
  ...allPosts
    .filter((p) => p.published)
    .map((p) => ({
      type: "post" as const,
      title: p.title,
      summary: p.summary ?? "",
      tags: p.tags ?? [],
      url: `/blog/${p._raw.flattenedPath}`,
      body: p.body.raw.replace(/[#*`>\[\]]/g, " ").slice(0, 5000),
    })),
  ...allPuzzles.filter((p) => p.published).map((p) => ({ /* same shape */ })),
];
```

### Step 2: Add a search group to the palette

In `src/lib/CommandMenu.tsx`, add a `Command.Group heading="Writings"` that maps over `searchDocs`. cmdk's built-in filtering handles fuzzy matching on the `value` prop — set `value={`${doc.title} ${doc.tags.join(" ")} ${doc.summary}`}` so tags and summaries are matchable without rendering them.

For body-text search (optional, phase 2), swap cmdk's default filter for [FlexSearch](https://github.com/nextapps-de/flexsearch) or Fuse.js:

- Set `shouldFilter={false}` on the `Command` root.
- Run the query through a FlexSearch `Document` index (fields: title ×3 weight, tags ×2, body ×1).
- Render only the top ~8 hits.

### Step 3: Result UX details

- Show a small badge per result (`Post` / `Puzzle`) and the category (Build/Reflect/Explore) that the writings page already uses.
- On select: `router.push(doc.url)` and close the palette (the palette already does this pattern for nav items).
- Empty state: "No results — try browsing /writings".

### Step 4: Keep the bundle small

The index for ~20 documents is tiny (<100 KB even with body excerpts), so importing it directly into the client component is fine. If the blog grows past ~100 posts, move to a `searchDocs.json` generated in a build script and fetch it lazily on first palette open.

## Effort Estimate

- Basic (title/tag/summary via cmdk's native filter): **~2 hours**
- Full-text with FlexSearch ranking: **+2–3 hours**

## Success Criteria

- Cmd+K → type "nostalgia" → the *Paradox of Nostalgia* post appears and Enter navigates to it.
- Searching a tag (e.g. "networking") surfaces every post with that tag.
- No visible lag while typing; no layout shift in the palette.
