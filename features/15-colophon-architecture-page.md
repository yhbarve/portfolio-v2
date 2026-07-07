# Interactive Colophon / "How This Site Is Built"

## The Idea

A `/colophon` page with a clickable diagram of the site's own architecture — the Contentlayer pipeline, the four-theme CSS variable system, the YouTube Music integration, the Supabase pieces as you add them — where hovering or clicking each component reveals what it does and *why you chose it*. Meta, but portfolios are judged by engineers, and engineers love seeing the machinery and the trade-off reasoning. It's low effort, high charm, and gives your unpublished `building-my-website` draft post a proper home.

## Why It Fits This Codebase

- The architecture is genuinely interesting to explain: Contentlayer2 on Next 16 (with the webpack-vs-turbopack constraint), a multi-theme system done with raw CSS variables instead of a library, server-side YouTube Music fetching, static-first with selective dynamic islands.
- You already have a draft post about building the site (`published: false`) — this page is the better format for that content, with the post as the narrative companion.

## Implementation

### Step 1: The diagram

`src/app/colophon/page.tsx` with a client component `ArchitectureDiagram`:

- **Build it as plain absolutely-positioned divs + SVG connector lines** (or CSS grid boxes with drawn edges) rather than a diagram library — ~8 nodes don't need React Flow, and hand-built matches your design language perfectly. Nodes: Markdown files → Contentlayer → Next.js App Router → Vercel; side branches for Theme system, Command palette, YouTube Music API, GitHub API, Supabase (dashed "coming soon" if not yet live).
- Each node is a button; selecting it fills a detail panel beside/below the diagram with: what it is, why you chose it, one honest trade-off ("Contentlayer2 fork because original is unmaintained; forces webpack builds"), and a link to the relevant code on GitHub if the repo is public.
- Animate node highlights and edge pulses with Framer Motion (already a dependency); tint active nodes with `--accent` so the diagram restyles with each theme — which itself demonstrates the theme system.

### Step 2: The stats strip

A row of small live/build-time facts that make it feel like a systems page, computed at build time:

- Number of posts / puzzles / photos (from Contentlayer + data files)
- Total words written (`allPosts` word count sum)
- Build-time Lighthouse-ish claims kept honest: bundle-free static pages count
- Site version from `package.json` + last deploy date (`new Date()` at build)

### Step 3: The decisions list

Below the diagram, a short "Decisions & trade-offs" section — 5–7 entries in prose ("Why four themes instead of light/dark", "Why no CMS", "Why the command palette"). This is the part senior engineers actually read, and it doubles as interview material.

### Step 4: Integration

- Finish and publish the `building-my-website` draft as the narrative version; cross-link both ways.
- Footer link ("How this site works") — footers are exactly where curious engineers look.
- Command palette entry.

## Effort Estimate

**~4–6 hours**: diagram component ~3, content writing ~2 (mostly transplanting the draft post's material).

## Success Criteria

- Every node in the diagram has a real explanation with at least one honest trade-off, not marketing copy.
- The diagram adapts to all four themes and works on mobile (vertical stack layout below `lg`).
- The draft post is finally published and cross-linked.
