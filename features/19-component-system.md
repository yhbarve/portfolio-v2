# Component System: Shared Primitives for Consistency

## The Idea

Styling is currently written inline per component, so the same visual patterns (cards, chips, table rows, page headers) exist as slightly-drifted copies across files — `px-1` vs `px-2` chips, independently-written filter pills, two near-identical table row components. The fix is a small layer of shared primitives that *own* the styling, with thin domain components that own the arrangement.

**Core principle: share the shell, not the content layout.** A single mega-Card that renders education vs. experience vs. projects via props becomes a 20-optional-prop component with internal branches — worse than the duplication. Instead: generic primitives take `children`; domain components (`ExperienceCard`, `EducationCard`) stay, but shrink to ~15 lines of arrangement on top of the primitives. Restyling all cards = touch `Card`. Changing experience layout = touch `ExperienceCard`. Every change has exactly one home.

## The Three Layers

1. **Tokens** — CSS variables + Tailwind mapping (exists; see `18-design-token-system.md`).
2. **Primitives** — generic, styling-owning, content-agnostic (the missing layer, detailed below).
3. **Domain components** — thin arrangements composing primitives.

Use `cva` (class-variance-authority) for primitive variants — the standard companion to the existing `cn()` helper and the shadcn setup in `components.json`.

## Primitive Inventory (verified against the codebase)

### `Card`
The shell only: `bg-surface-1`, `border border-border/...`, radius, padding, hover shadow/border, transition. Props: `children`, optional `href` (many cards are links), optional `variant`. Nothing about columns, images, or dates.

### `Chip`
The classes `bg-surface-3 border border-border/20 text-accent-soft rounded-2xl px-1` are copy-pasted with drift across `ProjectListItem`, `EducationCard`, `ExperienceCardMobile`, and others (`px-1` vs `px-2`, `border-accent/20` vs `border-border/20`). One component, one look. Smallest and safest extraction — do it first.

### `ListRow` + `ListHeader` (the "tables")
`ProjectListItem` and `ReadListItem` are near-identical `grid grid-cols-12` row shells with the same hover/border/bg classes; `/projects` and `/reading` each hand-write a matching header row. Extract:

- `ListHeader` — accent-colored column label row; takes `columns: { label, span, hideOnMobile?, align? }[]`.
- `ListRow` — the link-wrapped grid shell with hover treatment; takes `href` + `children` (cells as spans with col-span from the same column spec).

**Bug found during audit:** both row components use `lg:hover:border-page-itemHoverBorder` — a class that doesn't exist in `tailwind.config.ts`, so the hover border silently does nothing on either page. Fix (probably intended `lg:hover:border-accent/60`) while extracting.

### `FilterPills`
The category filter on `/writings` and difficulty filter on `/puzzles` are the same interaction with independently-written active/inactive classes. Props: `options`, `selected`, `onSelect`. Reusable by future tag pages (feature 04) and notes hub (feature 05).

### `SectionHeader`
Every homepage section hand-writes its heading markup. One component: title, optional "view all →" link.

### `PageShell`
The gradient background (`from-background-1 via-background-2 to-background-3`) + `max-w-screen-xl` + padding wrapper that the homepage has and subpages half-have. Every page identical by construction.

### `SubpageHeader`
Shared header for the seven subpages: logo/home link, page title, `ThemeSwitcher`. (Also called for in `17-hub-curation-and-design.md`.)

### `ProseArticle` (worth considering)
`src/app/blog/[slug]/page.tsx` and `src/app/puzzle/[slug]/page.tsx` each carry a large duplicated `prose prose-*` class blob. Extract one `ProseArticle` wrapper so typography tweaks apply to both content types (and future ones — notes, TILs).

## The Bigger Duplication: Mobile Twins

Nearly every card has a `*Mobile` variant: `ExperienceCardMobile`, `EducationCardMobile`, `ProjectCardMobile`, `SkillsCardMobile`, `WritingsCardMobile` — 5 extra files where every styling decision is made twice. This is a bigger consistency tax than the cross-type duplication. Merge each pair into one responsive component: build mobile-first, add `lg:` overrides for the desktop arrangement. Do the merge *as* each card migrates onto the primitives — one pass per component. 10 card files → 5.

## Migration Strategy: Strangler, Not Big-Bang

1. **`Chip`** — create, replace every inline chip, eyeball all six themes once.
2. **`Card` + pilot migration on `ExperienceCard`** — it needs touching anyway for the `hidden`/`lg:flex` desktop bug (see `10-fixes-and-cleanup.md`). Merge `ExperienceCardMobile` in the same pass. Compare against production side by side.
3. **Remaining cards, one per sitting**, each deleting its Mobile twin.
4. **`ListRow`/`ListHeader`** on `/projects` and `/reading` (fixing the dead hover class).
5. **`PageShell` + `SubpageHeader`** across the seven page layouts.
6. **`FilterPills`, `SectionHeader`, `ProseArticle`** whenever those pages are next touched.

### Rules that keep it sane

- **Never restyle while extracting.** Extract pixel-identical first, improve after — otherwise refactor bugs and design changes are indistinguishable.
- **Check every migration against all six themes** — Slushie's hot-pink borders will expose any hardcoded color instantly.
- **Delete the old component in the same commit** — never two sources of truth.
- **Don't wrap things that appear once** (gallery grid, music pills). A component used in one place is indirection. The threshold is the second usage.

## Effort Estimate

- Chip: **~1 hour**. Card + Experience pilot: **~2–3 hours**. Each remaining card: **~1 hour**.
- ListRow/ListHeader: **~1.5 hours**. PageShell + SubpageHeader: **~2 hours**. The rest: **~1 hour each**.
- Total: **~2 focused days**, but designed to ship in independent slices.

## Success Criteria

- Chips, rows, cards, and page headers look identical across pages because they *are* the same component.
- No `*Mobile` component files remain.
- The dead `page-itemHoverBorder` class is gone and row hover borders actually render.
- A deliberate style change (e.g. card radius) is a one-file edit that propagates everywhere.
