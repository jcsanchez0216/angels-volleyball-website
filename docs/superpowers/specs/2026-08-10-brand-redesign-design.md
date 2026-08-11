# Angels of Albuquerque Volleyball Club — Brand Redesign

## Context

The site (React + React Router, deployed via GitHub Pages from the `gh-pages` branch) was originally generated with AI assistance and looks it: it uses a generic bright Tailwind red (`#dc2626`) instead of the club's real maroon, relies entirely on ad hoc inline styles with no shared tokens, and — as a result of that drift — has a confirmed rendering bug where ~24 headings/body elements set near-black text (`#111827`) on dark backgrounds (`#1a1a1a`/`#111827`/`#111111`), making that copy nearly invisible. Git history (`fix text color`, `background fix?`, `Full dark theme overhaul`) shows this has been patched repeatedly without being fixed at the root.

The goal: restyle the site using the club's actual branding assets so it reads as a real, custom club site rather than an AI-generated template, while keeping all existing content intact.

## Scope

Visual/styling redesign of the 5 existing pages (Home, Programs, Coaches, Tryouts, Contact) and shared Navigation/Footer. No new pages or sections. No photos (none available yet — design is typography/color/emblem-driven, photo-ready for later). Content (program pricing, all 7 coach bios, tryout details, contact info, leadership, mailing address) carries over unchanged.

One functional bug is in scope as a targeted fix: the mobile nav toggle button is permanently `display: none`, so the mobile menu is currently unreachable on small screens.

## Design direction: "Established Program"

Confident, quiet, brand-forward — not loud. Standing out comes from correct, distinctive branding (real maroon, the actual wings/volleyball emblem, deliberate typography) rather than gradients, oversized icons, or color used everywhere. The wings emblem appears once as a large, low-opacity watermark on the Home hero rather than repeated across every section. Generous whitespace. Reads like a program that's been established 15+ years, not a sales landing page.

## Brand palette (sampled directly from the provided logo files via pixel analysis, not guessed)

| Token | Hex | Use |
|---|---|---|
| `brand-maroon` | `#6E1B2D` | Primary accent — CTAs, active nav state, section rules, icon accents |
| `brand-maroon-dark` | `#4E1220` | Hover/pressed states, deep accent sections |
| `ink` | `#222425` | Primary dark surface (sampled from the emblem's outline color; replaces the `#1a1a1a` / `#111827` / `#111111` mix) |
| `paper` | `#FFFFFF` | Primary light surface |
| `taupe` | `#978F84` | Neutral accent — dividers, muted labels, secondary backgrounds |
| `taupe-light` | `#E9E5E0` | Light neutral surface for card sections |

Text-on-surface pairing is enforced via reusable Tailwind component classes (not per-element inline colors), which is what eliminates the invisible-text bug at the root: no surface is ever paired with a same-tone text color by accident.

## Typography

- Headings/display: a bold condensed sans (Barlow Condensed via Google Fonts) — echoes the block-letter condensed style of the "ANGELS VOLLEYBALL" wordmark.
- Body: Inter (or system-ui fallback) for legibility.

## Logo/emblem usage

- **Navigation**: wordmark logo (dark-background version), left-aligned, on the existing dark nav bar.
- **Home hero**: wings + volleyball emblem as a large, low-opacity watermark graphic behind the headline.
- **Favicon**: cropped emblem only (no wings background rectangle), generated as a transparent PNG from the provided solid-background source since no transparent/vector source exists.
- **Footer**: small emblem + wordmark lockup.

## Per-page changes

All pages: replace inline `style={{...}}` objects with Tailwind utility classes using the tokens above; replace every `#dc2626`/`#b91c1c`/`#7f1d1d`/red-family color with `brand-maroon`/`brand-maroon-dark`; replace the `#111827`-on-dark contrast bug with correct token pairing; replace the `#1a1a1a`/`#111827`/`#111111` background mix with `ink`/`paper`/`taupe-light` per section.

- **Navigation**: fix mobile menu toggle button visibility (currently hardcoded `display: none`); move `NAV_BG`/`MAROON` local constants into the shared Tailwind theme.
- **Home**: hero on `ink` background with emblem watermark (replaces the current gradient-to-red hero); stat cards and "Why Angels" cards recolored to maroon/taupe; heading contrast fixed.
- **Programs**: card headers recolored from red gradient to maroon; consistent card surface colors (`paper`/`taupe-light`) instead of `#1a1a1a` cards with light-mode text.
- **Coaches**: initials-avatar circles recolored maroon; hover border recolored maroon.
- **Tryouts**: hero and CTA band gradients recolored maroon; program summary cards restyled with token surfaces.
- **Contact**: icon circles (email/phone/Instagram) and leadership avatar circles recolored maroon; card surfaces restyled with tokens.
- **Footer**: unchanged content, restyled with tokens.

## Implementation notes

- Add Tailwind CSS v3 to the CRA (`react-scripts` 5.0.1) app via the standard `npx tailwindcss init -p` flow — pinned to v3, since Tailwind v4's PostCSS setup isn't compatible with unejected CRA.
- Define `brand-maroon`, `brand-maroon-dark`, `ink`, `paper`, `taupe`, `taupe-light` and the two font families in `tailwind.config.js`.
- Load Barlow Condensed + Inter via Google Fonts link tags in `public/index.html`.
- Generate a transparent-background emblem PNG from an existing solid-background source (flat vector-style illustration, so a straightforward color-key removal works) for favicon/watermark use; replace `public/favicon.ico`/manifest icons.
- Repo cleanup: commit the already-pending deletion of the stray duplicate `src/src/` folder; add `.DS_Store` to `.gitignore` and untrack it.

## Out of scope

- New pages/sections (gallery, schedule, sponsors).
- Real photos (no source photos available yet; design must not require them).
- Content changes (e.g. stale "check back soon" tryout dates) — flagged for the user's awareness but not altered as part of this redesign.
- Netlify — the club now deploys solely via GitHub Pages (`gh-pages` branch); no Netlify config changes.

## Verification

- `npm start` locally and visually check all 5 pages plus mobile nav toggle.
- Confirm no text is ever the same tone as its background (the original bug) by reviewing each page against the token pairings above.
- `npm run build` succeeds with Tailwind compiling correctly.
- `npm run deploy` (gh-pages) only after the user explicitly confirms they want to push the redesign live.
