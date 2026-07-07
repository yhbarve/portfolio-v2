# SEO Foundation: Sitemap, RSS, robots.txt, Domain Unification, Analytics

## The Idea

The site currently has **no sitemap, no robots.txt, no RSS feed, no analytics**, and its metadata is split across two domains (`yhbarve.me` in the root layout, `yashbarve.vercel.app` in subpage layouts like `src/app/writings/layout.tsx`). For a site with 14+ posts, this leaves real search traffic on the table and gives you zero visibility into what's working. This isn't a flashy feature, but it multiplies the value of every other one — do it first.

## Implementation

### Step 1: Unify the canonical domain (~30 min)

- Create `src/lib/site.ts`:

```ts
export const SITE_URL = "https://yhbarve.me";
export const SITE_NAME = "Yash Barve";
```

- Replace every hardcoded URL in `src/app/layout.tsx` and all subpage layouts (`writings`, `projects`, `puzzles`, `reading`, `gallery`, `music`) with imports from it.
- Set `metadataBase: new URL(SITE_URL)` in the root layout so all relative OG images resolve correctly.
- In Vercel, ensure `yashbarve.vercel.app` 308-redirects to the primary domain (automatic when the custom domain is set as primary).
- While in there: consolidate the two divergent resume URLs (`src/lib/data.ts` vs the hardcoded Google Drive link in `experience.tsx`) into one constant here too.

### Step 2: Sitemap + robots (~30 min)

Next.js App Router makes these file conventions:

- `src/app/sitemap.ts` — return entries for static routes (`/`, `/writings`, `/projects`, `/puzzles`, `/reading`, `/gallery`, `/music`) plus every published post from `allPosts` and puzzle from `allPuzzles`, using each doc's date as `lastModified`.
- `src/app/robots.ts` — allow all, point at `${SITE_URL}/sitemap.xml`.
- Submit the sitemap in Google Search Console (site verification meta tag is already present in the root layout).

### Step 3: RSS feed (~1 hour)

- `src/app/feed.xml/route.ts` — a route handler that builds RSS 2.0 XML from published `allPosts` (title, summary, link, pubDate, categories from tags). No library needed; a template literal is fine for ~15 items, or use the tiny `feed` package.
- Add `<link rel="alternate" type="application/rss+xml">` to the root layout head and an RSS icon in the footer/socials.
- Bonus: include puzzles as a second feed or merge into one.

### Step 4: Structured data (~1 hour)

- JSON-LD `BlogPosting` on each post page (headline, datePublished, author, image from coverImage) and `Person` on the homepage — a small `<script type="application/ld+json">` in each page's server component.
- Verify with Google's Rich Results test.

### Step 5: Analytics (~15 min)

- `npm i @vercel/analytics` and drop `<Analytics />` into the root layout (`@vercel/speed-insights` too, optionally). Zero-config on Vercel, privacy-friendly, free tier is plenty.
- If you'd rather have page-level detail with no cookie banner concerns, Plausible or Umami are the alternatives — but Vercel Analytics is the two-line default.

### Step 6: OG images (stretch, ~2 hours)

- `src/app/blog/[slug]/opengraph-image.tsx` using `next/og` (`ImageResponse`): post title + site name on a theme-colored background. Every shared link then gets a branded card instead of the generic cover-or-nothing behavior.

## Effort Estimate

**~3 hours** for steps 1–5; OG image generation is an optional +2.

## Success Criteria

- `/sitemap.xml`, `/robots.txt`, and `/feed.xml` all resolve in production and validate.
- Every page's OG tags point at the canonical domain; sharing a post in Slack/X shows correct title, description, and image.
- Search Console shows the sitemap indexed; Vercel Analytics dashboard shows traffic within a day of deploy.
