# How This Website Works

> A deep dive into the architecture of yhbarve.me — what the pieces are, how they fit together, and why they were chosen. Starting version; update as the feature-file roadmap ships.

## The One-Paragraph Version

This is a **statically-generated Next.js site** where Markdown files are the source of truth for written content, TypeScript data files are the source of truth for structured content (projects, experience, education), and everything is compiled at build time into fast, pre-rendered pages. There is currently no database and almost no runtime server work — the only dynamic pieces are two server-side API integrations (YouTube Music and GitHub) that revalidate on a timer. Theming is done entirely with CSS custom properties, which is what makes six wildly different themes possible without touching a single component.

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 16 (App Router) + React 18 + TypeScript | Static generation with selective server rendering |
| Content compiler | Contentlayer2 (`contentlayer2` / `next-contentlayer2`) | Markdown → typed, importable data at build time |
| Styling | Tailwind CSS 3.4 + `@tailwindcss/typography` | Utility classes over CSS variables |
| Theming | `next-themes` + CSS custom properties | Class-based theme switching, zero flash |
| Animation | Framer Motion | Page fades, scroll-in sections, mobile drawers |
| Command palette | `cmdk` | Cmd/Ctrl+K navigation and actions |
| Fonts | Inter Tight via `next/font` | Self-hosted, no layout shift |
| Hosting | Vercel | Static + ISR out of the box |

One build quirk worth knowing: the project runs `next dev --webpack` and `next build --webpack` explicitly, because Contentlayer needs webpack and Next 16 defaults to Turbopack.

## Repository Layout

```
portfolio-v2/
├── blogs/                  # Blog posts (Markdown + frontmatter)
├── puzzles/                # LeetCode writeups (Markdown + frontmatter)
├── contentlayer.config.ts  # Content schema + markdown pipeline
├── public/                 # Static assets (gallery photos, blog covers, ...)
├── deepdives/              # Docs like this one
├── features/               # Feature roadmap (20 planning files)
└── src/
    ├── app/                # Routes (App Router)
    ├── components/         # UI components (cards, sections, nav, ...)
    ├── data/               # Structured content as TS files
    └── lib/                # Utilities, API clients, CommandMenu
```

## Routes

| Route | What it is | Rendering |
|-------|-----------|-----------|
| `/` | Single-page portfolio: sticky left sidebar (about, nav, socials, theme switcher) + scrolling sections (experience, projects, skills, education, writings, interests) | Static |
| `/writings` | Blog index with category filters (Build / Reflect / Explore) | Static |
| `/blog/[slug]` | Individual post with cover image, prose styling, scroll-spy table of contents | Static (`generateStaticParams`) |
| `/projects` | Full project table | Static |
| `/puzzles` + `/puzzle/[slug]` | LeetCode writeup index (difficulty filters) and detail pages | Static |
| `/reading` | Bookshelf | Static |
| `/gallery` | Photo grid with keyboard-navigable lightbox | Static |
| `/music` | YouTube Music playlist tabs | Server-fetched, revalidates every 24h |

## The Two Content Systems

### 1. Markdown content (Contentlayer)

Blog posts and puzzle writeups are plain `.md` files with YAML frontmatter. `contentlayer.config.ts` defines two document types — `Post` (from `blogs/`) and `Puzzle` (from `puzzles/`) — each with a schema (title, date, tags, `published`, category/difficulty, cover image) and a computed `slug` derived from the filename.

At build time, Contentlayer:

1. Reads every matching file and **validates frontmatter against the schema** (a typo'd field fails the build instead of silently rendering wrong).
2. Runs the Markdown body through a unified pipeline:
   - **remark plugins** (operate on Markdown): `remark-gfm` for tables/task lists, `remark-math` for math syntax.
   - **rehype plugins** (operate on the HTML tree): `rehype-slug` adds heading IDs, `rehype-autolink-headings` wraps headings in anchor links, `rehype-external-links` opens external links in new tabs, `rehype-katex` renders math, `rehype-pretty-code` syntax-highlights code (github-dark theme).
3. Writes typed output to `.contentlayer/generated` — most importantly `allPosts` and `allPuzzles`, arrays of fully-typed objects where `body.html` is the compiled HTML string.

Pages then just import and filter:

```ts
const posts = allPosts
  .filter((p) => p.published)
  .sort((a, b) => +new Date(b.date) - +new Date(a.date));
```

The detail route (`src/app/blog/[slug]/page.tsx`) declares every slug via `generateStaticParams`, finds the post by slug (404 if missing), and injects the compiled HTML:

```tsx
<div
  id="blog-content"
  className="prose prose-base md:prose-lg ..."
  dangerouslySetInnerHTML={{ __html: post.body.html }}
/>
```

Two things worth understanding here:

- **`dangerouslySetInnerHTML` is fine in this context** because the HTML comes from local, version-controlled Markdown compiled at build time — not user input. React would otherwise escape the string and render it as text.
- **Tailwind Typography's `prose` classes style the output; they don't produce it.** Markdown→HTML happened at build time; `prose` just makes the resulting `<h2>`, `<p>`, `<pre>`, `<table>` elements look right.

The table of contents (`ContentTimeline`) is a client component that scans `#blog-content` for `h2`/`h3` elements in the browser and builds scroll-spy anchor links from the IDs that `rehype-slug` generated at compile time.

**Key takeaway:** nothing reads Markdown at request time. The runtime page is lookup and presentation; all compilation happened at build.

### 2. Structured content (TypeScript data files)

Everything that isn't long-form writing lives as typed data in `src/data/`:

- `projectData.ts` — featured projects (homepage)
- `experienceData.ts` — work experience entries
- `galleryData.ts` — photo metadata for `/gallery`
- education, skills, and socials data alongside

Components import these directly. The trade-off: adding a project means editing code, but you get type safety, no CMS, and content deploys atomically with the site. (Known wart: `/projects` currently hardcodes its own list separately from `projectData.ts` — unification is planned in `features/10-fixes-and-cleanup.md`.)

## The Theme System

The most distinctive part of the site. Six themes — **neon** (black/lime, default), **quartz** (light gray/red), **ferrari-hp** (red/white), **sapphire** (navy/cyan), **fable** (enchanted-forest emerald/gold), **slushie** (magenta→indigo/banana/cyan) — implemented with zero theme-specific component code.

How it works:

1. `src/app/globals.css` defines a set of HSL CSS custom properties per theme, scoped to a class on `<html>` (e.g. `html.fable { --accent: 42 88% 60%; ... }`). The token set: `--background-1/2/3`, `--surface-1/2/3`, `--text-1/2/3`, `--accent`, `--accent-soft`, `--accent-foreground`, `--border`, `--ring`, `--shadow`.
2. `tailwind.config.ts` maps each variable to a Tailwind color (`bg-surface-1`, `text-accent`, `border-border`, ...) using the `hsl(var(--x) / <alpha-value>)` pattern, which keeps Tailwind's opacity modifiers working (`bg-surface-1/50`).
3. `next-themes` (configured in `src/components/theme-provider.tsx`) swaps the class on `<html>` and persists the choice in localStorage. Because it's a class swap, switching is instant and there's no flash of the wrong theme.
4. Components only ever reference token classes — never raw colors — so every theme "just works" everywhere, including text selection (`::selection` uses `--accent`/`--accent-foreground`) and the shadow scale (box shadows are tinted by `--shadow`).

Themes are switchable from the `ThemeSwitcher` dropdown or the command palette (shortcuts 1–6). Planned evolution of the token set (real `--accent-soft` values, `--text-muted`, `--radius`, `--code-bg`, per-theme display fonts) is written up in `features/18-design-token-system.md`.

## The Command Palette

`src/lib/CommandMenu.tsx`, built on `cmdk`, opens with Cmd/Ctrl+K anywhere on the site. It currently handles: page navigation, section anchors, theme switching, copying the email address, and social links. It's registered once in the root layout so it exists on every page. (Planned: full-text search over posts and puzzles — `features/01-command-palette-search.md`.)

## External Integrations

The two places the site talks to the outside world, both server-side:

- **YouTube Music** (`src/lib/ytmusic-playlist.ts`, via `ytmusic-api`): fetches four playlists for `/music`. The page uses ISR with a 24-hour revalidation, so visitors get cached data and the API is hit at most once a day.
- **GitHub contributions** (`src/lib/github-contributions.ts`, via the public `github-contributions-api.jogruber.de`): fetched on the homepage. The UI that displays it is currently commented out in `Socials.tsx`; reviving it is part of `features/03-now-dashboard.md`.

No API keys are required for either in the basic setup (YouTube Music supports an optional `YTMUSIC_COOKIE` env var).

## Layout & Interaction Patterns

- **Two-column homepage**: left column is `lg:sticky` and viewport-height; right column scrolls. On mobile, the layout collapses to a single column with a `MobileNavbar` drawer.
- **Page/section animation**: `PageAnimation` wraps route content in a fade; `AnimatedSection` uses Framer Motion + IntersectionObserver to slide sections in on scroll.
- **Responsive card pattern**: many cards currently have separate desktop and `*Mobile` component variants — merging them into single responsive components is planned (`features/19-component-system.md`).
- **The webring**: the `Watering` component renders the UW CS webring — the arrows navigate to other UW CS students' personal sites.

## Build & Deploy

```
npm run dev    →  next dev --webpack   (Contentlayer regenerates on file change)
npm run build  →  next build --webpack (validates content, compiles everything static)
```

Deployment is Vercel: push to main, build runs, static pages + the ISR music route ship to the edge. `.contentlayer/` is generated output and should not be tracked in git (see `features/20-final-sweep-and-closing-notes.md` for the cleanup command).

## Design Philosophy (why it's built this way)

- **Static-first**: everything that can be known at build time is compiled at build time. Fast, free to host, nothing to break at 3am.
- **Markdown for prose, TypeScript for structure**: each kind of content lives in the format that's easiest to edit and hardest to get wrong.
- **Tokens over themes**: components know about roles (`surface`, `accent`, `border`), never colors. That's why theme #6 cost minutes, not days.
- **No backend until a feature demands one**: the first database-backed features (view counters, guestbook, AI chat) are planned in `features/` but nothing on the current site needs a server.

## Where This Doc Should Grow

As roadmap features ship, add sections for: the Supabase layer (view counts, guestbook, embeddings), the search index, the SEO surface (sitemap/RSS/OG images), and the shared component primitives. The `features/` folder is the forward-looking counterpart to this document.
