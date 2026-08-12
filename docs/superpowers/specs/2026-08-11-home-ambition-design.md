# Round 3: Home Page Ambition (loading animation, real imagery, kill generic icons)

## Context

Round 2 shipped a sitewide diagonal-cut shape system the user likes — colors, font, and the subtler personality it added all landed well. But after seeing it live, the Home page specifically still reads as generic to them: the "USAV Sanctioned" stat uses a stock emerald-green checkmark, and the three "Why Angels?" cards use generic Lucide icons (Award/Trophy/Users) — both textbook "SaaS feature list" clichés that undercut the club-specific identity round 2 was going for. The user wants Home to feel ambitious and unmistakably like a real volleyball club's site, not a template, and asked specifically for a loading animation (pointing at 21st.dev for inspiration) and real-feeling photography (stock placeholders now, swappable for real club photos later). Separately, Lucy Mora was removed from the Contact page — already done, not part of this spec.

## Research and validation done before writing this spec

- **Loading animation reference:** 21st.dev's "Logo Trace Loader" pattern (SVG path tracing, ~2.2s, fill-mode-safe, configurable color, reduced-motion aware) is the model. Adapted here to trace the club's *actual* emblem rather than a generic logo.
- **Emblem vectorization — actually done, not just planned:** installed `potrace` via Homebrew, converted `public/emblem.png`'s alpha channel into a high-contrast silhouette, traced it, and cleaned the output (potrace emitted 60 separate closed-contour paths; dropped 29 sub-150-character noise specks from the upscale/threshold process, kept 31 real path segments covering the full wings+ball silhouette including the ball's internal segment lines). Combined into one `d` string (109,627 characters) and rendered it standalone to confirm it's visually correct and complete — see the rendered proof at the path list below. This is real, working vector data, not a placeholder.
- **Stock photography — sourced and visually verified, not just described:** searched Unsplash, downloaded, and *looked at* multiple candidates before ruling several out (three separate "volleyball" results turned out to be beach volleyball on visual inspection despite ambiguous captions). Confirmed two solid indoor, free-license (Unsplash License — free for commercial/noncommercial use, no attribution required) action photos:
  - `https://images.unsplash.com/photo-1547347298-4074fc3086f0` (Vince Fleming) — indoor gym, mid-celebration after a point, maroon/black uniforms.
  - `https://images.unsplash.com/photo-1567781830902-685fb3401f1d` (Raja Tilkian) — indoor gym, defensive ready-position, moody lighting.

## Design

### 1. Loading animation (Home page only, first visit per browser session)

A new `EmblemLoader` component renders as a fixed, full-viewport `bg-ink` overlay on top of the Home page, only when needed:
- **Skip conditions** (render nothing, resolve immediately): `prefers-reduced-motion: reduce` is set, OR `sessionStorage` already has the "intro played" flag (set the first time it plays, so navigating away and back to Home within the same browser session doesn't replay it).
- **Play sequence** (first visit, motion allowed): the real emblem path (see above) draws itself as a maroon stroke outline via the standard `getTotalLength()` + `stroke-dasharray`/`stroke-dashoffset` technique (~1.8s), then the outline fills solid maroon (~0.4s), holds briefly, then the whole overlay fades out (~0.5s) while — at the same moment the fade-out begins — the Home hero's existing round-2 entrance animations (diagonal band sweep, headline/tagline/button stagger) are triggered, so the loader dissolves directly into the hero already animating in underneath. Total: roughly 2.5-3s from page load to a fully settled hero.
- **Mechanism for the hand-off:** Home.js holds an `introDone` boolean (starts `false`). The hero's existing `animate-sweep-in`/`animate-fade-up*` classNames (built in round 2) become conditional on `introDone` instead of always-on. `EmblemLoader` takes an `onComplete` callback, invoked either immediately (skip conditions) or at the start of its fade-out phase (full play). This means the round-2 hero animations behave exactly as before (play on every Home mount) — they just now wait for the loader's signal first, which resolves near-instantly on repeat visits.

### 2. Kill the generic elements

- **"Why Angels?" cards:** the 3 Lucide icons (Award/Trophy/Users) are replaced with small stock photo thumbnails, `card-cut`-clipped (same diagonal shape system as every other card on the site) instead of a plain icon. Sourced from the two verified photos above, cropped to different focal points for visual variety. Structured as a single `image` field per card (a path under `public/photos/`) so swapping in real club photos later is a one-line change per card, no markup changes.
- **"USAV Sanctioned" checkmark:** the generic `text-emerald-400` Lucide check is replaced with the brand maroon (`text-maroon-light`, since it sits on the `bg-ink` hero — matching round 2's established on-dark maroon rule) and rendered bolder/larger so it reads as a deliberate mark rather than a borrowed UI-kit glyph, not a new icon dependency.

### 3. More presence beyond the icon swap

- **Hero stat cards:** the current frosted-glass treatment (`bg-white/10 backdrop-blur border border-white/20`) is replaced with the shape system's `card-cut` (solid `bg-maroon-dark` fill, no blur, no translucency) — consistent with every other card on the site now, and less "soft/bubbly."
- **New full-width photo band:** a new section added after "Why Angels?" (before the footer), using the Fleming photo full-width with a dark ink gradient overlay for text legibility, `divider-cut` transitions on both edges (matching the site's shape language, and incidentally resolving the "flat seam into the footer" question raised at the end of round 2 — for this page specifically, since the band's dark overlay flows naturally into the ink footer).

## File plan

- `src/data/emblemPath.js` (new) — exports the real vectorized path data (`EMBLEM_PATH_D`, `EMBLEM_VIEWBOX`, `EMBLEM_TRANSFORM`) as plain string/constant exports. Generated once from the potrace output; not regenerated at build time (no new build-time dependency).
- `src/components/EmblemLoader.js` (new) — the loading-animation component described above.
- `public/photos/` (new directory) — the sourced, cropped, compressed placeholder photos: 3 card thumbnails + 1 wide band image, downloaded from the verified URLs above (not hotlinked — downloaded, optimized, and committed, same pattern as round 1's logo assets).
- `src/pages/Home.js` (modified) — wires in `EmblemLoader` + `introDone` state, replaces the 3 Lucide icons with photo thumbnails, replaces the checkmark styling, replaces the stat cards' glass treatment with `card-cut`, adds the new photo band section.
- No other pages touched. No new npm dependencies (SVG animation is native browser APIs + Tailwind, consistent with rounds 1-2).

## Verification

- Production build passes.
- Real browser verification: first-visit load (loader plays, hands off into hero animation — verify via a fresh browser context / cleared sessionStorage), repeat-visit load within the same session (loader skipped, hero animation still plays normally), and `prefers-reduced-motion` (loader skipped, everything visible immediately) — same rigor as rounds 1-2, actually scrolling/reloading in a real or headless browser rather than trusting a single static screenshot.
- Confirm the photo thumbnails and band image are genuinely downloaded/optimized files under `public/photos/`, not remote-hotlinked URLs (avoids a live dependency on Unsplash staying up, and matches the "these get swapped for real photos later" plan — a real file path is what makes that swap trivial).
- Confirm all existing Home page content (headline, tagline, buttons, all 4 stat labels/values, all 3 card titles/descriptions) is unchanged — this is a shape/imagery pass, not a content or copy change.

## Out of scope

- Any other page besides Home.
- Real club photography (explicitly a future swap-in once the club supplies photos; out of scope now).
- Any new npm dependency for animation or image handling.
- Re-litigating the round-2 "footer seam on Programs/Coaches" open question — unrelated to this round.
