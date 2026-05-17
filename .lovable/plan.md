## Highlighter loading bar + scroll highlighter + hidden native cursor

### 1. New: Highlighter page-load bar
File: `src/components/portfolio/HighlighterLoader.tsx` (new), mounted at the top of `src/routes/index.tsx`.

- Full-screen overlay (`fixed inset-0 z-[80] bg-paper`) shown on first mount; fades out after the highlighter stroke completes (~1.6s) + 200ms hold, then unmounts.
- Centered composition (~480px wide):
  - Small handwritten label above: "loading the sketchbook…" in `font-sketch`, low opacity.
  - The bar itself is an inline SVG, ~480×40, drawn to look like a highlighter swipe across notebook paper:
    - **Base stroke**: thick `stroke-pastel-yellow` path with `stroke-linecap: round`, slight vertical jitter on the path (hand-drawn `d` with 4–5 control points, not straight).
    - **Overlap pass**: a second, shorter path on top with `mix-blend-multiply` and a touch more saturation — mimics the doubled-over spot where a marker overlaps itself.
    - **Streaks**: 2–3 thin translucent lines along the bar (lighter alpha) to suggest dry-marker streaks.
    - **Rough edge**: apply an SVG `<filter>` with `feTurbulence` + `feDisplacementMap` (baseFrequency ~0.9, scale ~2) so edges look fibrous, not crisp.
    - **Marker tip**: small highlighter SVG (cap + chisel nib) translated along the bar's leading edge.
  - Animation: animate `stroke-dashoffset` from full length → 0 on the base + overlap paths (staggered ~150ms) using Framer Motion or CSS keyframes; the marker tip's `x` transform is tied to the same timeline so it "draws" the stroke. Slight `rotate(-0.4deg)` on the whole group for imperfection.
- Percentage text under the bar (`0% → 100%`) in `font-sketch`, driven by the same timeline via a `useMotionValue` + `useTransform`.
- `prefers-reduced-motion`: skip displacement filter and shorten to a single 400ms fade-in/out with the bar shown filled.
- Accessibility: `role="status"`, `aria-live="polite"`, label "Loading portfolio".

### 2. Scroll-progress highlighter (top of page, after loader)
File: `src/components/portfolio/ScrollPencil.tsx` (replace contents, keep filename).

- Thin highlighter swipe fixed at `top-0 inset-x-0 z-50`, ~8px tall.
- Foreground `motion.div` with `scaleX` bound to `useScroll().scrollYProgress`, origin left, `bg-pastel-yellow`, `mix-blend-multiply`, very faint pencil baseline behind it.
- Same rough-edge SVG filter as the loader for visual consistency; tiny marker-nib indicator at the leading edge.

### 3. Hide native cursor, keep pencil cursor
Files: `src/styles.css`, `src/components/portfolio/PencilCursor.tsx`.

- `styles.css`: under `@media (hover: hover) and (pointer: fine)` add `html, body, body * { cursor: none; }`, and re-enable text caret on `input, textarea, [contenteditable] { cursor: text; }`.
- `PencilCursor`: bump opacity to ~0.9, size to ~28px, add a subtle scale-down on `mousedown`. When `prefers-reduced-motion` is set, the component sets `data-reduced-motion` on `<html>` and the CSS rule is scoped with `:root:not([data-reduced-motion]) ...` so the native cursor stays visible in that case.

### Technical notes
- No new dependencies; uses existing `framer-motion` and Tailwind v4 tokens (`--pastel-yellow`, `--pencil`, `--paper`).
- Loader runs once per full page load; not tied to route transitions.
- All changes are presentational — no data, routing, or backend touched.
