# Fixes & Cleanup: Experience Cards Bug, Project Data Unification, Dead Code

## The Idea

Not a new feature, but the highest ratio of impact to effort in the repo: one likely-invisible-content bug, one data-drift problem, and a pile of dead weight. Clearing these makes every other feature easier to build and keeps the site trustworthy (nothing worse than a portfolio whose work experience doesn't render).

## The Issues

### 1. Desktop experience cards appear to never render (bug)

`src/components/sections/experience.tsx` (line ~21) combines `hidden` with `lg:flex` in a way that leaves only the mobile experience cards rendering — meaning work experience may not show on desktop at all.

**Fix:** verify in the browser at ≥1024px width; correct the class combination so the desktop container is `hidden lg:flex` (hidden on mobile, flex on large screens) and the mobile container is `flex lg:hidden`. Re-test both breakpoints and all four themes.

### 2. Two diverging project sources

The homepage renders 6 projects from `src/data/projectData.ts`, while `/projects` hardcodes 17 projects inline in `src/app/projects/page.tsx`. They already disagree (Chattr is commented out in `projectData.ts` but listed on `/projects`), and every future edit risks widening the gap.

**Fix:** make `src/data/projectData.ts` the single source of truth:

- Extend its type with the fields the table needs (year, `madeAt`, `builtWith`, link) and a `featured: boolean` flag.
- Homepage: `projects.filter(p => p.featured)`.
- `/projects`: render the full array through the existing table markup.
- Migrate the 17 inline entries into the data file; resolve Chattr's status while doing so.

### 3. Dead dependencies (~200 KB+ of node_modules and mental overhead)

| Package | Status | Action |
|---------|--------|--------|
| `locomotive-scroll` | Zero imports | Remove |
| `@fortawesome/*` (4 packages) | Zero imports; icons are inline SVG + lucide-react | Remove |
| `@nextui-org/react` | Only the provider in `src/app/providers.tsx`, no components used | Remove provider + package (verify nothing depends on its style reset first) |
| `@iconify/tailwind` | Not registered in `tailwind.config.ts` plugins | Remove |

Run `npx depcheck` to confirm, remove, and verify `next build` still passes.

### 4. Commented-out / stale code — decide, don't hoard

- **GitHub contribution tooltip** in `src/components/Socials.tsx`: either revive it (see feature 03, which builds the heatmap anyway) or delete the commented block *and* the now-unused homepage fetch that feeds it.
- **`SplashScreen` / `Banner` / `MainNav`** commented out in `src/app/layout.tsx`: delete if abandoned.
- **`CourseCard`** imported in `education.tsx` but never rendered: remove the import (or wire it up if feature 05 lands).
- **Unused components**: `menubar-demo.tsx`, `main-navbar.tsx`, `InterestCard.tsx` — delete if truly unreferenced.
- **Unfinished touches**: the `console.log` in `ThemeSwitcher`; the draft post `building-my-website` (`published: false`) — finish and publish it, it's exactly the kind of post that pairs with shipping these features.
- **Empty data**: `PLAYLIST_LINKS` and `WEEKLY_TOP_TRACKS` in `music.ts` are empty arrays — remove or populate.

Git history keeps everything recoverable; commented-out code only rots.

## Effort Estimate

**2–3 hours total.** The experience-card fix is minutes once confirmed; project unification is the bulk of it.

## Success Criteria

- Work experience visibly renders on desktop and mobile.
- Homepage and `/projects` read from one data file; adding a project means editing one place.
- `npx depcheck` reports no unused runtime dependencies; `next build` passes clean.
- No commented-out component blocks remain in `layout.tsx` or `Socials.tsx`.
