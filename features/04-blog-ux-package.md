# Blog UX Package: Tags, Related Posts, Reading Time, Share

## The Idea

Four small features that together make the blog feel finished rather than minimal:

1. **Tag pages** — clickable tags on every post leading to `/tags/[tag]` listing pages.
2. **Related posts** — 2–3 suggestions at the bottom of each post, computed from shared tags.
3. **Reading time** — "6 min read" next to the date.
4. **Share links** — copy-link and X/LinkedIn share buttons on each post.

Each is cheap individually; the compound effect is a blog that keeps readers moving between posts instead of bouncing after one.

## Why It Fits This Codebase

- Posts already have `tags` in frontmatter (defined in `contentlayer.config.ts`) but nothing renders or links them.
- Contentlayer's `computedFields` make reading time a build-time one-liner.
- Everything here is static — no backend required.

## Implementation

### 1. Reading time (30 min)

In `contentlayer.config.ts`, add to the `Post` and `Puzzle` computed fields:

```ts
readingTime: {
  type: "string",
  resolve: (doc) => {
    const words = doc.body.raw.split(/\s+/).length;
    return `${Math.max(1, Math.round(words / 200))} min read`;
  },
},
```

Render next to the date in `src/app/blog/[slug]/page.tsx` and in `WritingsCard`.

### 2. Tag pages (~2 hours)

- `src/app/tags/[tag]/page.tsx` with `generateStaticParams` returning every unique tag from `allPosts` + `allPuzzles` (normalize: lowercase, kebab-case via a `slugifyTag` helper in `src/lib/utils.ts`).
- Page body reuses the `/writings` list layout filtered to that tag; include matching puzzles in a second section.
- Render tag pills on post pages and cards, each linking to its tag page. Style with the existing `accent-soft` / `border` tokens.
- Add `generateMetadata` per tag ("Posts tagged 'networking'").

### 3. Related posts (~1.5 hours)

`src/lib/related.ts`, pure build-time function:

```ts
export function getRelated(current: Post, all: Post[], n = 3) {
  return all
    .filter((p) => p.published && p._id !== current._id)
    .map((p) => ({
      post: p,
      score:
        (p.tags?.filter((t) => current.tags?.includes(t)).length ?? 0) * 2 +
        (p.category === current.category ? 1 : 0),
    }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((r) => r.post);
}
```

Render a "Keep reading" section under the post body using the existing `WritingsCard`. If no scored matches, fall back to the 2 most recent posts.

### 4. Share buttons (~1 hour)

`src/components/ShareButtons.tsx` (client component) at the end of each post:

- **Copy link** — `navigator.clipboard.writeText(url)` with a brief "Copied" state (the command palette already has a copy-email pattern to mirror).
- **Share on X** — `https://twitter.com/intent/tweet?text={title}&url={url}`.
- **Share on LinkedIn** — `https://www.linkedin.com/sharing/share-offsite/?url={url}`.
- Use `lucide-react` icons (already a dependency). Build URLs from the canonical domain — see the domain unification note in `09-seo-foundation.md`; do that first so share links point at the right host.

## Effort Estimate

**~5 hours total** for all four, independent enough to ship one at a time.

## Success Criteria

- Every tag in frontmatter resolves to a working `/tags/[tag]` page at build time.
- Post pages show reading time, tappable tags, related posts, and working share buttons.
- `next build` output confirms tag pages are statically generated.
