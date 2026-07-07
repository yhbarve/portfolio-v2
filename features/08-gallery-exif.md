# Gallery Upgrade: EXIF Data + Map View

## The Idea

The gallery currently shows 20 photos in a lightbox grid. Extract EXIF metadata (camera, lens, aperture, shutter, ISO, date, GPS) at build time and display it in the lightbox like a photographer's portfolio — plus an optional map view plotting where each photo was taken. It turns the grid into a story and adds a layer of craft that photography-inclined visitors notice immediately.

## Why It Fits This Codebase

- Photos already live in `public/gallery/` with metadata in `src/data/galleryData.ts`, and `GalleryGrid` already has a lightbox with keyboard navigation — this feature enriches an existing surface rather than building a new one.
- EXIF extraction is a build-time script, so the page stays fully static.

## Implementation

### Step 1: Build-time EXIF extraction

- Add [`exifr`](https://github.com/MikeKovarik/exifr) as a dev dependency (fast, zero-config, handles HEIC-derived JPEGs).
- Script `scripts/extract-exif.mjs`:

```js
import exifr from "exifr";
// for each file in public/gallery/:
//   pick: Make, Model, LensModel, FNumber, ExposureTime, ISO,
//         FocalLength, DateTimeOriginal, latitude, longitude
// write src/data/galleryExif.json keyed by filename
```

- Run via `"prebuild": "node scripts/extract-exif.mjs"` in `package.json` and commit the JSON, so builds don't depend on re-reading originals. If some photos were stripped of EXIF by export, allow manual overrides in `galleryData.ts` (e.g. a `location` label).
- **Privacy check:** review GPS coordinates before publishing — round coordinates to ~city precision (2 decimal places) in the script, and support a per-photo `hideLocation` flag.

### Step 2: Lightbox EXIF panel

In `GalleryGrid`'s lightbox, add a bottom info bar (toggleable with `i`, matching the existing keyboard-nav pattern):

- Line 1: caption/title from `galleryData.ts` + date taken.
- Line 2: monospaced camera settings, the classic format: `f/1.8 · 1/250s · ISO 100 · 35mm` plus camera body.
- Style with existing tokens (`bg-surface-1/80` backdrop-blur, `text-text-1/70`).

Show settings on the grid tiles on hover (desktop) as a subtle overlay.

### Step 3: Map view (phase 2)

- Toggle on `/gallery`: **Grid | Map**.
- Use [MapLibre GL](https://maplibre.org/) with a free raster style, or embed a static approach with `react-leaflet` — either avoids API keys. Lazy-load the map bundle only when the toggle is activated (`next/dynamic`), keeping the default grid load light.
- Plot thumbnail markers at (rounded) coordinates; clicking a marker opens that photo's lightbox.
- Tint the map controls with the current theme's `--accent` for cohesion.

### Step 4: Nice-to-haves

- Sort/filter by year or camera.
- Dominant-color placeholder per photo (extract at build time with `sharp`, already implied by Next image tooling) for nicer loading.

## Effort Estimate

- EXIF extraction + lightbox panel: **~3 hours**
- Map view: **+3–4 hours**

## Success Criteria

- Opening any photo shows accurate camera settings without layout shift.
- No photo publishes precise GPS coordinates; flagged photos show no location at all.
- Map view loads zero map JavaScript until toggled.
