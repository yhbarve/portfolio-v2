# Theme Playground

## The Idea

Your four-theme system (neon, quartz, ferrari-hp, sapphire) is the site's most distinctive design feature. Lean into it: a small playground where visitors build their *own* theme — pick an accent hue, light or dark base, tweak a couple of sliders — and watch the entire site restyle live. Their custom theme persists in localStorage and shows up in the theme switcher as "Custom". It's memorable, interactive, and quietly shows off a well-architected design system.

## Why It Fits This Codebase

- Every theme is already pure CSS custom properties in `src/app/globals.css` (`--background-1/2/3`, `--surface-1/2/3`, `--text-1`, `--accent`, `--accent-soft`, `--border`), switched via `next-themes` class names in `src/components/theme-provider.tsx`. A custom theme is just setting those same variables inline on `<html>` — no refactor needed.
- The command palette and `ThemeSwitcher` already expose theme switching, so "Custom" slots into existing UI.

## Implementation

### Step 1: Theme model

`src/lib/custom-theme.ts`:

```ts
export type CustomTheme = {
  accentHue: number;       // 0–360
  accentSat: number;       // 40–100
  base: "dark" | "light";
  contrast: number;        // subtle bg separation, 0–1
};
```

A `themeToCssVars(theme)` function derives all ~10 CSS variables from these 4 inputs:

- `--accent: hsl(H S% 55%)`, `--accent-soft: hsl(H S% 55% / 0.15)`
- Dark base: backgrounds at L 4/6/8%, surfaces at 10/13/16%, text at 92% — mirroring the existing neon ratios (read them from `globals.css` and parameterize).
- Light base: mirror quartz's ratios.

Deriving everything from a hue + base guarantees the result always looks coherent — visitors can't create an unreadable theme.

### Step 2: Applying it

`src/components/CustomThemeProvider.tsx` (client):

- On mount, read `localStorage.custom-theme`; if present and `next-themes` theme is `"custom"`, apply vars with `document.documentElement.style.setProperty(...)`.
- Register `"custom"` in the `themes` array of the existing `ThemeProvider` so `next-themes` handles persistence of the *selection* while localStorage holds the *definition*.
- On theme change away from custom, clear the inline properties.

### Step 3: The playground UI

`src/app/themes/page.tsx` (or a dialog launched from the theme switcher):

- **Hue wheel/slider** (a plain `input[type=range]` 0–360 with a rainbow gradient track is fine), saturation slider, dark/light toggle.
- Changes apply to the real page live (`setProperty` on drag) — the whole site *is* the preview, which is the delightful part.
- Preview strip of the core tokens (background/surface/text/accent swatches) plus a sample card and button.
- "Save" writes localStorage and sets theme to `custom`; "Reset" returns to `neon`.
- A row of the four preset themes as one-click starting points.

### Step 4: Polish

- Add "Customize theme…" to the command palette's theme group.
- Guard contrast: clamp derived text/background lightness so WCAG AA holds regardless of slider positions.
- While at it, remove the leftover `console.log` in `ThemeSwitcher`.

## Effort Estimate

**4–5 hours**: 1–2 for the variable-derivation math (parameterizing the existing theme ratios), 2 for the playground UI, 1 for persistence and palette integration.

## Success Criteria

- Dragging the hue slider restyles the entire visible page in real time with no flicker.
- Custom theme survives reload and navigation; switching to a preset and back to Custom restores it.
- No possible slider combination produces unreadable text.
