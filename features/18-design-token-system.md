# Design Token System Upgrade

## The Idea

An audit of the CSS variable system in `src/app/globals.css` (checked against actual usage across `src/`) showed the token *set* is roughly right, but several variables are dead or no-ops, and four genuinely useful ones are missing. Fixing this makes every theme — current and future — more expressive without touching component markup, because the variables are already wired through `tailwind.config.ts`.

## Current State (verified by usage search)

| Token | Status | Detail |
|-------|--------|--------|
| `--background-1/2/3` | Real | Feed the page gradient (`from-background-1 via-background-2 to-background-3`). Older themes set all three nearly identical so the gradient was invisible; Fable and Slushie now prove the machinery works. |
| `--surface-1/2/3` | Real, underused | `surface-1` = card/pill base, `surface-2` = hover states (writings filter pills), `surface-3` = tech-stack chips (`ProjectListItem`, `EducationCard`, `ExperienceCardMobile`). Most themes define all three nearly identically, which is why they feel like one surface. |
| `--accent-soft` | **No-op** | Referenced widely (blog prose headings, chips, hover text) but set equal to `--accent` in every theme. A knob wired to everything, turned to "same" everywhere. |
| `--text-2` | **Trap** | Same value in all themes (`0 100% 30%` dark red — never themed). Only consumer is generated shadcn `menubar.tsx`. Would be unreadable on dark themes if used. |
| `--text-3` | **Dead** | Same value in all themes; zero consumers. |
| `--ring`, `--shadow` | Real | Shadow feeds the custom `boxShadow` scale in `tailwind.config.ts`. |

## Implementation

### 1. Give `--accent-soft` real values (~5 min per theme, do first)

Define it as a genuinely softer accent per theme — lighter and less saturated on dark themes, deeper on light ones:

```css
html.neon     { --accent-soft: 71 70% 65%; }   /* softened lime */
html.sapphire { --accent-soft: 193 55% 65%; }  /* hazier cyan */
html.fable    { --accent-soft: 42 60% 72%; }   /* champagne gold */
/* etc. */
```

Every blog post heading and chip instantly gains tonal range, per theme, with zero component changes — this is the cheapest win in the whole file.

### 2. Add `--text-muted` (the biggest gap)

Secondary text (dates, subtitles, descriptions) currently uses opacity hacks like `text-text-1/60`, which themes cannot control — on Fable, faded cream just goes gray when a warm parchment-tinted muted would look better.

- Tidy approach: **repurpose the dead `--text-2` slot** since Tailwind already maps it (`text-text-2`), and update the one shadcn menubar consumer.
- Define per theme (e.g. neon: `0 0% 60%`; fable: `42 25% 70%`).
- Migrate high-traffic opacity hacks (`text-text-1/60`, `/70`, `/50`) to `text-text-2` incrementally — cards and post metadata first.
- Delete `--text-3` outright (zero consumers).

### 3. Add `--radius`

All rounding is currently hardcoded (`rounded-2xl` chips, `rounded-md` selects, etc.). Follow the shadcn convention:

```css
:root { --radius: 0.5rem; }
html.fable { --radius: 0.75rem; }  /* soft, bookish */
```

```ts
// tailwind.config.ts
borderRadius: {
  lg: "var(--radius)",
  md: "calc(var(--radius) - 2px)",
  sm: "calc(var(--radius) - 4px)",
},
```

Then migrate components from hardcoded `rounded-*` to the tokenized sizes. Themes gain a personality axis beyond color — a future brutalist theme sets `--radius: 0` and instantly feels different.

### 4. Add `--code-bg` (+ optional `--code-text`)

Code blocks are hardcoded to the `github-dark` highlight theme, which looks wrong on quartz and any light theme (Fable's parchment variant would have suffered too). Add a themeable code-block background applied via the prose styles on `src/app/blog/[slug]/page.tsx` and `src/app/puzzle/[slug]/page.tsx`; consider a dual-theme setup in `rehype-pretty-code` (it supports light/dark theme pairs) keyed off a `light`/`dark` class per theme.

### 5. Add `--font-display` (stretch, most fun)

A per-theme heading font. `tailwind.config.ts` already declares Instrument Serif, Space Mono, and Xanh Mono (currently unloaded/unused). If headings used `font-[family-name:var(--font-display)]` (or a mapped `font-display` family):

- Fable → Instrument Serif (storybook)
- Neon → Space Mono (terminal)
- Others → Inter Tight (default)

Load the extra fonts via `next/font` in `layout.tsx` only if this ships. Themes would then differ in *typography*, not just palette — a customization axis almost no theme system has.

### 6. Card surface gradients (uses existing tokens)

The original observation that prompted this audit: cards render flat `bg-surface-1`. With surfaces now genuinely separated per theme, cards can do:

```tsx
className="bg-gradient-to-br from-surface-1 to-surface-3 ..."
```

Apply to `ProjectCard`, `ExperienceCard`, `WritingsCard` and evaluate per theme — subtle depth on Fable/Slushie where surface separation is real, invisible (harmless) on themes where surfaces are close.

## What NOT to Add

Success/warning colors, more surface steps, more text steps — knobs nothing would turn. The discipline that keeps a token system good: **every variable has at least one real consumer and at least two themes that set it differently.**

## Effort Estimate

- Step 1 (accent-soft values): **~30 min** across all six themes
- Step 2 (text-muted + migration of common spots): **~2 hours**
- Step 3 (radius): **~1–2 hours** including component migration
- Steps 4–6: **~1 hour each**, independent

## Success Criteria

- No variable exists that is identical across all themes (that's a constant, not a token).
- Secondary text color is theme-controlled, not an opacity hack, in cards and post metadata.
- Switching themes visibly changes at least: palette, accent softness, corner radius — and optionally heading typography and code-block colors.
- Code blocks are readable on light themes.
