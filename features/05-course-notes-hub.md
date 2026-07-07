# Interactive Course Notes Hub

## The Idea

Turn course notes into a first-class content type with per-course pages, organized by term — a `/notes` hub where each UW course (CS 135, CS 136, MATH 137, ...) gets its own page with structured notes, rendered math, and code samples. This is the feature most likely to earn organic traffic and backlinks: UW students search for course notes constantly, and good ones get shared in course Discords and passed between cohorts. It positions the site as a resource, not just a portfolio.

## Why It Fits This Codebase

- The education section already links to a "university course notes" blog post — the demand signal exists, but one monolithic post doesn't scale.
- The exact pattern already exists: `Puzzle` is a second Contentlayer document type with its own folder (`puzzles/`), index page, and detail route. Notes are a copy of that pattern.
- KaTeX (`rehype-katex`) and syntax highlighting (`rehype-pretty-code`) are already in the markdown pipeline — math-heavy course notes render beautifully with zero new config.
- The scroll-spy table of contents (`ContentTimeline`) already used on posts/puzzles is ideal for long notes.

## Implementation

### Step 1: New Contentlayer document type

In `contentlayer.config.ts`:

```ts
export const CourseNote = defineDocumentType(() => ({
  name: "CourseNote",
  filePathPattern: "notes/**/*.md",
  fields: {
    course: { type: "string", required: true },      // "CS 135"
    courseTitle: { type: "string", required: true }, // "Designing Functional Programs"
    term: { type: "string", required: true },        // "1A", "1B", ...
    published: { type: "boolean", required: true },
    lastUpdated: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" } },
  },
  computedFields: { /* url, slug — same as Puzzle */ },
}));
```

Add to `documentTypes`, create a `notes/` folder in the repo root next to `blogs/` and `puzzles/`.

### Step 2: Routes (mirror the puzzle pattern)

- `src/app/notes/page.tsx` — hub page. Group `allCourseNotes` by `term` and render a vertical term timeline (1A → 1B → ...), each term listing its course cards. Filter pills by subject prefix (CS / MATH / STAT), same interaction as the difficulty filter on `/puzzles`.
- `src/app/notes/[slug]/page.tsx` + layout — copy `src/app/puzzle/[slug]/` structure: prose styling, `ContentTimeline` TOC on desktop, `generateStaticParams`, per-note `generateMetadata`.

### Step 3: Course page niceties

- Header block per note: course code badge (accent-colored), full title, term, last-updated date.
- "Prerequisite / next course" links between notes via an optional `related` frontmatter list.
- Long-note UX: the existing TOC handles navigation; consider `<details>` blocks for collapsible proofs/examples (GFM already enabled).

### Step 4: Integration

- Point the education section link (currently going to the single blog post) at `/notes`.
- Add Notes to `Navigation`, mobile nav, and the command palette — and to search (feature 01) if built.
- Migrate content from the existing `university-course-notes` post into individual note files; leave a short stub post linking to the hub.

## Effort Estimate

- Infrastructure (document type + both routes): **~3 hours**
- Content migration: depends on how much exists; ongoing thereafter.

## Success Criteria

- `/notes` shows courses grouped by term with working filters.
- A math-heavy note renders KaTeX and highlighted code identically to blog posts.
- Each note is statically generated and individually linkable/shareable.
