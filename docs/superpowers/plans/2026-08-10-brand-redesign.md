# Angels of Albuquerque Brand Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the Angels of Albuquerque Volleyball Club site (5 pages + nav/footer) onto a real Tailwind CSS design-token system built from the club's actual logo colors, fixing the invisible-text bug and the broken mobile nav menu, with zero content changes.

**Architecture:** Add Tailwind CSS v3 (PostCSS-based, replacing the unused `cdn.tailwindcss.com` `<script>` tag already sitting in `public/index.html`) with a `tailwind.config.js` theme carrying the sampled brand tokens (`maroon`, `ink`, `paper`, `taupe`) and two Google Fonts (Barlow Condensed for headings, Inter for body). Generate transparent logo assets from the existing solid-background PNGs via a small Pillow script. Rewrite each page component from inline `style={{...}}` objects to Tailwind utility classes using the new tokens, preserving all existing content and copy verbatim.

**Tech Stack:** React 18, React Router 6, Create React App / `react-scripts` 5.0.1 (not ejected), Tailwind CSS v3, lucide-react (already a dependency, kept), Python 3 + Pillow (already installed on this machine) for one-time asset generation.

## Global Constraints

- Tailwind CSS must be **v3**, not v4 — v4's PostCSS plugin isn't compatible with unejected `react-scripts` 5.0.1.
- Do not eject CRA (`npm run eject`) and do not add a bundler-replacing tool (craco, vite migration, etc.) — out of scope.
- Brand tokens (exact hex, sampled from the club's own logo files, not approximations): `maroon` `#6E1B2D`, `maroon-dark` `#4E1220`, `ink` `#222425`, `paper` `#FFFFFF`, `taupe` `#978F84`, `taupe-light` `#E9E5E0`.
- Fonts: `font-display` = Barlow Condensed (headings), `font-body` = Inter (body), loaded via Google Fonts `<link>` tags.
- No new pages or sections. No content changes — every string of copy, every price, every coach bio, all contact info carries over exactly as it exists today.
- No photos — design must not require any (none are available yet).
- Deployment is GitHub Pages only (`gh-pages` branch via `npm run deploy`) — do not touch Netlify config, there isn't any left to touch.
- This codebase has no test suite (`react-scripts test` is wired up but no test files exist, and adding a testing framework for a static marketing site is out of scope / YAGNI). "Test" steps below mean: `npm run build` succeeds with no errors/warnings-as-errors, and a manual visual check against a specific checklist — not automated tests.

---

### Task 1: Repo cleanup

**Files:**
- Modify: `.gitignore`
- Delete (already pending in working tree, just needs committing): `src/src/` (stray duplicate folder), tracked `.DS_Store` files

**Interfaces:** None — this is pure repo hygiene, no code dependencies for later tasks.

- [ ] **Step 1: Confirm the pending deletions are safe**

Run: `git status -s`
Expected output includes deleted `src/src/components/Navigation.js`, `src/src/pages/*.js` — these are exact duplicates of the real files in `src/components/` and `src/pages/` (already verified identical during design). No other changes should be listed besides `.DS_Store`.

- [ ] **Step 2: Add `.DS_Store` to `.gitignore`**

Read the current `.gitignore` first (`cat .gitignore`). Append if not already present:

```
.DS_Store
**/.DS_Store
```

- [ ] **Step 3: Untrack `.DS_Store` files and stage the cleanup**

```bash
git rm --cached .DS_Store src/.DS_Store src/src/.DS_Store 2>/dev/null
git add .gitignore
git add -u
```

- [ ] **Step 4: Commit**

```bash
git commit -F- <<'EOF'
Clean up stray duplicate src/src folder and stop tracking .DS_Store

The nested src/src/ directory was an accidental duplicate of the real
src/components and src/pages files, already deleted locally. Also
ignore .DS_Store going forward.
EOF
```

---

### Task 2: Install and configure Tailwind CSS v3 with brand tokens

**Files:**
- Modify: `package.json` (new devDependencies)
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Modify: `src/index.css`
- Modify: `public/index.html`

**Interfaces:**
- Produces: Tailwind utility classes `bg-maroon`, `bg-maroon-dark`, `text-maroon`, `bg-ink`, `text-ink`, `bg-paper`, `text-paper`, `bg-taupe`, `bg-taupe-light`, `border-taupe`, `border-taupe-light`, `font-display`, `font-body` — every later task's JSX uses these exact class names.

- [ ] **Step 1: Install Tailwind and its peer dependencies, pinned to v3**

```bash
npm install -D tailwindcss@^3 postcss@^8 autoprefixer@^10
```

- [ ] **Step 2: Generate the base config files**

```bash
npx tailwindcss init -p
```

This creates `tailwind.config.js` and `postcss.config.js`. Overwrite `tailwind.config.js` with:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#6E1B2D',
          dark: '#4E1220',
        },
        ink: '#222425',
        paper: '#FFFFFF',
        taupe: {
          DEFAULT: '#978F84',
          light: '#E9E5E0',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

Confirm `postcss.config.js` contains:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 3: Replace `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
```

- [ ] **Step 4: Replace `public/index.html`**

Remove the `<script src="https://cdn.tailwindcss.com"></script>` tag (leftover from an earlier, unused attempt — it conflicts with the real PostCSS-based Tailwind build) and add the Google Fonts links:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#222425" />
    <meta
      name="description"
      content="Angels of Albuquerque Volleyball Club - Developing Elite Athletes Since 2010"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <title>Angels of Albuquerque Volleyball Club</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Note: `favicon.ico` doesn't exist yet — Task 3 creates it. The broken link is expected until then.

- [ ] **Step 5: Verify the build compiles**

Run: `npm run build`
Expected: builds successfully (favicon 404 in the build output is fine/expected at this point — no favicon exists until Task 3).

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json tailwind.config.js postcss.config.js src/index.css public/index.html
git commit -F- <<'EOF'
Add Tailwind CSS v3 with brand design tokens

Replaces the unused cdn.tailwindcss.com script tag with a real
PostCSS-based Tailwind build, configured with the club's actual
brand colors (sampled from the logo files) and Barlow
Condensed/Inter fonts.
EOF
```

---

### Task 3: Generate transparent logo assets

**Files:**
- Create: `scripts/generate-logo-assets.py`
- Create (generated output): `public/emblem.png`, `public/wordmark.png`, `public/favicon.ico`

**Interfaces:**
- Produces: `/emblem.png` (transparent wings+volleyball mark, used in Task 5 as the Home hero watermark and as the favicon source), `/wordmark.png` (transparent white-lettered wordmark on nothing, used in Task 4 nav/footer).

- [ ] **Step 1: Confirm source files exist**

Run: `ls "/Users/jaredsanchez/Desktop/Angels/Logos"`
Expected: includes `White Background Logo.png` and `AngelsLogo_Black_Background.png` among the other variants.

- [ ] **Step 2: Write the asset generation script**

```python
#!/usr/bin/env python3
"""Generate transparent-background logo assets from solid-background source files."""
from PIL import Image

def remove_background(src_path, out_path, tolerance=30, crop_padding=20):
    img = Image.open(src_path).convert("RGBA")
    bg = img.getpixel((2, 2))[:3]
    pixels = img.load()
    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            dist = ((r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2) ** 0.5
            if dist < tolerance:
                pixels[x, y] = (r, g, b, 0)
            elif dist < tolerance * 2.5:
                fade = int(255 * (dist - tolerance) / (tolerance * 1.5))
                pixels[x, y] = (r, g, b, min(a, max(0, fade)))
    bbox = img.getbbox()
    if bbox:
        left = max(bbox[0] - crop_padding, 0)
        top = max(bbox[1] - crop_padding, 0)
        right = min(bbox[2] + crop_padding, img.width)
        bottom = min(bbox[3] + crop_padding, img.height)
        img = img.crop((left, top, right, bottom))
    img.save(out_path)
    print(f"Saved {out_path} ({img.size[0]}x{img.size[1]})")

if __name__ == "__main__":
    LOGOS = "/Users/jaredsanchez/Desktop/Angels/Logos"
    remove_background(f"{LOGOS}/White Background Logo.png", "public/emblem.png")
    remove_background(f"{LOGOS}/AngelsLogo_Black_Background.png", "public/wordmark.png")

    emblem = Image.open("public/emblem.png")
    emblem.save("public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    print("Saved public/favicon.ico")
```

Save to `scripts/generate-logo-assets.py`.

- [ ] **Step 3: Run it**

```bash
python3 scripts/generate-logo-assets.py
```

Expected: prints three "Saved ..." lines, and `public/emblem.png`, `public/wordmark.png`, `public/favicon.ico` now exist.

- [ ] **Step 4: Visually sanity-check the output**

Open `public/emblem.png` and `public/wordmark.png` (e.g. `open public/emblem.png`). Confirm:
- `emblem.png`: wings + volleyball mark with a transparent background, no visible white halo/fringe.
- `wordmark.png`: white "ANGELS VOLLEYBALL" text + maroon volleyball accent, transparent background.

If there's a visible fringe, lower `tolerance` to 15-20 in the script and rerun.

- [ ] **Step 5: Remove the now-unused old logo, keep new assets**

`public/angels-logo.jpg` (the flat grey-background wordmark currently used in the nav) is superseded by `public/wordmark.png` — delete it in Task 4 once `Navigation.js` no longer references it (kept until then so nothing breaks mid-task).

- [ ] **Step 6: Commit**

```bash
git add scripts/generate-logo-assets.py public/emblem.png public/wordmark.png public/favicon.ico
git commit -F- <<'EOF'
Generate transparent logo assets from source branding files

Emblem and wordmark cutouts for use in the nav, footer, hero
watermark, and favicon, generated from the club's solid-background
logo PNGs via color-key background removal.
EOF
```

---

### Task 4: Rebuild Navigation and Footer, fix mobile menu bug

**Files:**
- Modify: `src/components/Navigation.js` (full rewrite)
- Modify: `src/App.js` (Footer function, full rewrite)
- Delete: `public/angels-logo.jpg`

**Interfaces:**
- Consumes: `/wordmark.png` (Task 3), Tailwind tokens (Task 2).
- Produces: no exports consumed elsewhere beyond the existing `Navigation` default export and `App` default export.

- [ ] **Step 1: Replace `src/components/Navigation.js`**

```jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/coaches', label: 'Coaches' },
  { to: '/tryouts', label: 'Tryouts' },
  { to: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-ink z-50 shadow-lg border-b-2 border-maroon">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="block" onClick={() => setMobileMenuOpen(false)}>
            <img src="/wordmark.png" alt="Angels of Albuquerque Volleyball" className="h-14 w-auto" />
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {links.map(link => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-bold uppercase tracking-wider pb-1 border-b-2 transition-colors ${
                    active ? 'text-maroon border-maroon' : 'text-white border-transparent hover:text-maroon'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-ink border-t border-maroon px-6 py-4">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-white font-bold text-sm uppercase tracking-wider border-b border-white/10 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
```

This fixes the mobile menu bug: the old code had the toggle button hardcoded to `display: none` (unreachable). Here, `md:hidden` on the button shows it only below the `md` breakpoint, and `hidden md:flex` on the desktop links does the opposite — standard responsive nav pattern.

- [ ] **Step 2: Replace the `Footer` function in `src/App.js`**

Keep the `App` function's routing untouched; replace only `Footer`:

```jsx
function Footer() {
  return (
    <footer className="bg-ink text-taupe py-12 px-6">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col items-center gap-4 text-center">
        <img src="/wordmark.png" alt="Angels of Albuquerque Volleyball" className="h-10 w-auto opacity-90" />
        <p className="text-sm text-white/70">&copy; 2026 Angels of Albuquerque Volleyball Club. A 501(c)(3) nonprofit organization. All rights reserved.</p>
        <p className="text-xs text-taupe">USAV Sanctioned • Sun Country Region • Albuquerque, New Mexico</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Delete the superseded logo file**

```bash
git rm public/angels-logo.jpg
```

- [ ] **Step 4: Verify**

```bash
npm start
```

Open http://localhost:3000, resize the browser below ~768px width, confirm the hamburger icon appears and tapping it opens/closes the mobile menu with all 5 links. At full width, confirm the desktop nav shows all 5 links with the active page underlined in maroon. Stop the dev server (`Ctrl+C`) when done.

- [ ] **Step 5: Commit**

```bash
git add src/components/Navigation.js src/App.js
git commit -F- <<'EOF'
Rebuild navigation and footer with Tailwind tokens, fix mobile menu

The mobile nav toggle button was hardcoded to display:none and could
never be shown, so the mobile menu was completely unreachable on
phones. Switched to responsive hidden/md:flex classes. Also swaps
in the real wordmark and brand colors.
EOF
```

---

### Task 5: Rebuild Home page

**Files:**
- Modify: `src/pages/Home.js` (full rewrite)

**Interfaces:**
- Consumes: `/emblem.png` (Task 3), Tailwind tokens (Task 2).

- [ ] **Step 1: Replace `src/pages/Home.js`**

```jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Trophy, Users } from 'lucide-react';

const stats = [
  { num: '15+', label: 'Years Strong', sub: 'Proven since 2010' },
  { num: '7', label: 'Master Coaches', sub: 'USAV Certified' },
  { num: '3', label: 'Program Levels', sub: 'Club, Hybrid, Academy' },
  { num: '✓', label: 'USAV Sanctioned', sub: 'Sun Country Region' },
];

const whyAngels = [
  { icon: Award, title: 'Expert Coaching', desc: 'Master coaches with decades of combined experience, certifications, and a track record of developing collegiate athletes.' },
  { icon: Trophy, title: 'Proven Results', desc: '15 years of developing athletes who succeed at the collegiate level and beyond. Our alumni speak for themselves.' },
  { icon: Users, title: 'Better Value', desc: 'Top-tier training at significantly lower costs than competing clubs. More money in your pocket, same excellence on court.' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-32 pb-20 px-6">
        <img
          src="/emblem.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-24 -top-16 w-[560px] max-w-none opacity-10"
        />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-6xl font-bold text-white tracking-tight mb-2 uppercase">Angels</h1>
            <div className="h-1.5 w-32 bg-maroon mb-6" />
            <p className="text-xl text-white/90 mb-8 max-w-md leading-relaxed font-medium">
              Developing elite athletes. Building champions. Albuquerque's trusted volleyball program since 2010.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => navigate('/tryouts')}
                className="bg-maroon hover:bg-maroon-dark text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-colors"
              >
                2026 Tryouts
              </button>
              <button
                onClick={() => navigate('/programs')}
                className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                View Programs
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                <div className="text-5xl font-bold mb-2">
                  {stat.num === '✓' ? (
                    <span className="text-emerald-400">✓</span>
                  ) : (
                    <span className="text-white">{stat.num}</span>
                  )}
                </div>
                <p className="text-white font-bold text-sm">{stat.label}</p>
                <p className="text-white/60 text-xs mt-2">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Why Angels?</h2>
            <div className="h-1 w-20 bg-maroon" />
          </div>
          <p className="text-xl text-ink/70 mb-16 max-w-2xl leading-relaxed">
            We're not just another volleyball club. We're a legacy built on proven coaching, competitive results, and genuine care for our athletes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyAngels.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white border border-taupe-light rounded-xl p-8 shadow-sm">
                  <Icon className="w-12 h-12 text-maroon mb-4" />
                  <h3 className="font-display text-2xl font-bold text-ink mb-3 uppercase">{item.title}</h3>
                  <p className="text-ink/70 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
```

This also fixes the confirmed contrast bug on this page: the "Why Angels?" section previously set `color: '#111827'` (near-black) headings on a `backgroundColor: '#1a1a1a'` (near-black) section — invisible text. It's now a `bg-paper` (white) section with `text-ink` headings, which also matches what the light card borders (`#e5e7eb` in the original) clearly intended.

- [ ] **Step 2: Verify**

```bash
npm start
```

Open http://localhost:3000/. Confirm: the emblem watermark is faintly visible top-right of the hero, all hero text is readable, all 4 stat cards show their numbers, and the "Why Angels?" section (white background) has fully readable dark headings and body text — not invisible.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Home.js
git commit -F- <<'EOF'
Rebuild Home page with brand tokens, fix invisible-text bug

The "Why Angels?" section had near-black headings on a near-black
background. Moved it to a proper light (paper) surface with correct
ink text, and added the emblem watermark to the hero.
EOF
```

---

### Task 6: Rebuild Programs page

**Files:**
- Modify: `src/pages/Programs.js` (full rewrite)

**Interfaces:** Consumes Tailwind tokens (Task 2). No new interfaces produced.

- [ ] **Step 1: Replace `src/pages/Programs.js`**

```jsx
import React from 'react';

const programs = [
  { name: 'Academy', price: '$20/session', description: 'Perfect for beginners and developing young athletes. Learn fundamentals in a supportive environment.', age: 'Ages 10-14', details: 'Focus on learning the basics, building confidence, and having fun. Great for new players!' },
  { name: 'Hybrid', price: '$2,700/season', description: 'Competitive training with flexible tournament schedule. Balance development with competition.', age: 'Ages 11-18', details: 'Train hard and compete! Mix of skill development and tournament play throughout the season.' },
  { name: 'Club', price: 'Contact for pricing', description: 'Elite competitive program. Multiple tournaments, advanced skill development, college prep.', age: 'Ages 14-18', details: 'Our most competitive program. Designed for serious athletes aiming for college recruitment.' },
];

const included = [
  { title: 'Expert Coaching', desc: 'Master coaches with IMPACT, SafeSport, and USAV certifications' },
  { title: 'Team Environment', desc: 'Build lifelong friendships in a supportive, competitive setting' },
  { title: 'Skill Development', desc: 'Progressive training focused on technical and mental growth' },
  { title: 'Tournament Play', desc: 'Compete against top clubs throughout the season' },
  { title: 'Leadership Training', desc: 'Develop life skills beyond volleyball' },
  { title: 'College Prep', desc: 'Resources and coaching to prepare for college recruitment' },
];

export default function Programs() {
  return (
    <div className="pt-20 bg-paper">
      <section className="pt-24 pb-16 px-6 bg-taupe-light">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Our Programs</h1>
          <div className="h-1 w-20 bg-maroon mb-8" />
          <p className="text-xl text-ink/70 max-w-2xl leading-relaxed">
            Choose the program that fits your goals. All programs include expert coaching, structured development, and a supportive team environment.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-paper">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <div key={i} className="bg-white border border-taupe-light rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <div className="bg-maroon px-8 py-8 text-white">
                <h2 className="font-display text-3xl font-bold uppercase">{prog.name}</h2>
                <div className="text-4xl font-bold mt-2">{prog.price}</div>
                <p className="text-xs font-bold text-white/80 uppercase tracking-wider mt-3">{prog.age}</p>
              </div>
              <div className="p-8">
                <p className="text-ink/80 leading-relaxed mb-4 font-medium">{prog.description}</p>
                <p className="text-ink/60 text-sm leading-relaxed">{prog.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-taupe-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">What's Included in All Programs</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {included.map((item, i) => (
              <div key={i} className="bg-white border border-taupe-light rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-ink mb-3 uppercase">{item.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify**

```bash
npm start
```

Open http://localhost:3000/programs. Confirm all 3 program cards (Academy, Hybrid, Club) show correct pricing/ages/descriptions with maroon headers, and the 6-item "What's Included" grid renders below.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Programs.js
git commit -m "Rebuild Programs page with brand tokens"
```

---

### Task 7: Rebuild Coaches page

**Files:**
- Modify: `src/pages/Coaches.js` (full rewrite)

**Interfaces:** Consumes Tailwind tokens (Task 2). No new interfaces produced.

- [ ] **Step 1: Replace `src/pages/Coaches.js`**

```jsx
import React from 'react';

const coaches = [
  { name: 'Brian Sanchez', title: 'Founder & Club Director', level: 'Master Coach', bio: '15+ years of coaching expertise. Developed athletes from beginners to NCAA Division I level.' },
  { name: 'Theresa Sanchez', title: 'Co-Founder & Co-Director', level: 'Master Coach', bio: '30 years in volleyball. IMPACT, CAP, NMAA Certified. Expert in all age levels.' },
  { name: 'Mariah Sanchez', title: 'Academy Director & Coach', level: 'Club Coach', bio: "Angels alumni, former Cibola High player. Specializes in fundamentals and mental toughness." },
  { name: 'Shannon Figueroa', title: '17U & 12U Head Coach', bio: 'Dedicated to competitive excellence and player development at multiple levels.' },
  { name: "Alejandra 'Ale' Jurado", title: '17U & 12U Assistant Coach', bio: '6 years competitive volleyball. Creates individualized coaching approaches for each player.' },
  { name: 'Trinity Williams', title: '14U & 16U Coach', bio: 'Emphasizes positive reinforcement, mental focus, and keeping the game fun.' },
  { name: 'Dylan Begley', title: '11U Coach', bio: 'Competitive since high school. Focuses on teamwork, fundamentals, and game understanding.' },
];

export default function Coaches() {
  return (
    <div className="pt-20 bg-paper">
      <section className="pt-24 pb-16 px-6 bg-taupe-light">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Our Coaching Staff</h1>
          <div className="h-1 w-20 bg-maroon mb-8" />
          <p className="text-xl text-ink/70 max-w-2xl leading-relaxed">
            Meet the world-class coaches who develop elite athletes. All coaches are IMPACT Certified, SafeSport trained, and registered with USAV.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-paper">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach, i) => (
            <div key={i} className="bg-taupe-light/40 border border-taupe-light rounded-xl p-8 hover:border-maroon transition-colors">
              <div className="w-14 h-14 bg-maroon rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                {coach.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-ink">{coach.name}</h3>
              <p className="text-sm font-semibold text-maroon mt-1.5">{coach.title}</p>
              {coach.level && (
                <p className="text-[11px] font-bold text-white uppercase tracking-wide mt-3 inline-block bg-ink px-2.5 py-1.5 rounded">
                  {coach.level}
                </p>
              )}
              <p className="text-ink/70 text-sm leading-relaxed mt-4">{coach.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify**

```bash
npm start
```

Open http://localhost:3000/coaches. Confirm all 7 coaches render with correct names/titles/bios, the 3 "Master Coach"/"Club Coach" level badges show on Brian, Theresa, and Mariah only, and hovering a card highlights its border in maroon.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Coaches.js
git commit -m "Rebuild Coaches page with brand tokens"
```

---

### Task 8: Rebuild Tryouts page

**Files:**
- Modify: `src/pages/Tryouts.js` (full rewrite)

**Interfaces:** Consumes Tailwind tokens (Task 2). No new interfaces produced.

- [ ] **Step 1: Replace `src/pages/Tryouts.js`**

```jsx
import React from 'react';

const expectations = [
  { title: 'Professional Evaluation', desc: 'Coaches assess your skills, attitude, and potential across all positions.' },
  { title: 'Team Placement', desc: 'Selected athletes are placed on teams matched to their skill level and age.' },
  { title: 'Fast Notification', desc: "You'll know the results within 48 hours of your tryout." },
  { title: 'Supportive Environment', desc: 'Tryouts are designed to be encouraging, not intimidating.' },
];

const programSummary = [
  { name: 'Academy', price: '$20/session', desc: 'Great for beginners' },
  { name: 'Hybrid', price: '$2,700/season', desc: 'Competitive & flexible' },
  { name: 'Club', price: 'Contact us', desc: 'Elite & intensive' },
];

export default function Tryouts() {
  return (
    <div className="pt-20 bg-paper">
      <section className="pt-24 pb-16 px-6 bg-ink text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl font-bold text-white mb-6 uppercase tracking-tight">2026 Tryouts</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Are you ready to join the Angels family? Tryouts are coming soon. Limited spots available for all age groups and program levels.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-paper">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-ink mb-6 uppercase tracking-tight">What to Expect</h2>
            <div className="space-y-6">
              {expectations.map((item, i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                  <p className="text-ink/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-taupe-light rounded-xl p-10 border-2 border-maroon">
            <h3 className="font-display text-3xl font-bold text-ink mb-6 uppercase">Tryout Details</h3>
            <div className="space-y-5">
              <div className="pb-5 border-b border-taupe">
                <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Tryout Fee</p>
                <p className="text-xl font-bold text-ink">$20</p>
              </div>
              <div className="pb-5 border-b border-taupe">
                <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Dates & Times</p>
                <p className="text-ink">August/September<br />Check back soon for specific dates</p>
              </div>
              <div className="pb-5 border-b border-taupe">
                <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Notification</p>
                <p className="text-ink">Within 48 hours</p>
              </div>
              <div>
                <p className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Age Groups</p>
                <p className="text-ink">10U - 18U<br />All skill levels welcome</p>
              </div>
            </div>
            <button className="w-full bg-maroon hover:bg-maroon-dark text-white font-bold py-4 rounded-lg mt-8 transition-colors">
              Register Interest
            </button>
            <p className="text-ink/60 text-xs text-center mt-3">Limited spots available</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-taupe-light">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">Choose Your Program</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programSummary.map((prog, i) => (
              <div key={i} className="bg-white border border-taupe-light rounded-xl p-6 text-center">
                <h3 className="text-xl font-bold text-ink mb-3">{prog.name}</h3>
                <p className="text-lg font-bold text-maroon mb-2">{prog.price}</p>
                <p className="text-ink/70 text-sm">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-ink text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-white mb-6 uppercase tracking-tight">Ready to Tryout?</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            Join a club known for developing elite athletes and building champions. Contact us with questions or to register.
          </p>
          <button className="bg-maroon hover:bg-maroon-dark text-white font-bold px-12 py-4 rounded-lg transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify**

```bash
npm start
```

Open http://localhost:3000/tryouts. Confirm the tryout fee ($20), dates placeholder, notification window, age groups (10U-18U), and the 3-program summary grid all render correctly.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Tryouts.js
git commit -m "Rebuild Tryouts page with brand tokens"
```

---

### Task 9: Rebuild Contact page

**Files:**
- Modify: `src/pages/Contact.js` (full rewrite)

**Interfaces:** Consumes Tailwind tokens (Task 2). No new interfaces produced.

- [ ] **Step 1: Replace `src/pages/Contact.js`**

```jsx
import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

const contactMethods = [
  { icon: Mail, label: 'Email', value: 'angelsofalbuquerque@hotmail.com', action: 'Send us an email anytime' },
  { icon: Phone, label: 'Phone', value: '(505) 280-9570', action: 'Call us during business hours' },
  { icon: Instagram, label: 'Instagram', value: '@angels_of_abq_volleyball', action: 'Follow us for updates' },
];

const leadership = [
  { name: 'Brian Sanchez', title: 'Founder & Executive Director', email: 'Brian@angelsofalbuquerque.com' },
  { name: 'Theresa Sanchez', title: 'Founder & Associate Director', email: 'Theresa@angelsofalbuquerque.com' },
  { name: 'Lucy Mora', title: 'Treasurer', email: 'Lucy@angelsofalbuquerque.com' },
];

export default function Contact() {
  return (
    <div className="pt-20 bg-paper">
      <section className="pt-24 pb-16 px-6 bg-taupe-light text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Get in Touch</h1>
          <div className="h-1 w-20 bg-maroon mx-auto mb-8" />
          <p className="text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
            Have questions? Want to register for tryouts? We'd love to hear from you. Reach out using any of the methods below.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {contactMethods.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-maroon" />
                  </div>
                  <h3 className="text-2xl font-bold text-ink mb-3">{item.label}</h3>
                  <p className="text-ink font-bold text-lg mb-2">{item.value}</p>
                  <p className="text-ink/60 text-sm">{item.action}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-taupe-light rounded-xl p-12 border border-taupe">
            <h2 className="font-display text-3xl font-bold text-ink mb-8 text-center uppercase tracking-tight">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((person, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-taupe-light">
                  <div className="w-14 h-14 bg-maroon rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {person.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-1">{person.name}</h3>
                  <p className="text-sm font-semibold text-maroon mb-3">{person.title}</p>
                  <p className="text-[13px] text-ink/60">{person.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-taupe-light text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-ink mb-8 uppercase tracking-tight">Mailing Address</h2>
          <div className="bg-white rounded-xl p-8 border border-taupe-light">
            <p className="text-ink leading-loose font-medium">
              Angels of Albuquerque Volleyball Club<br />
              PO Box 67171<br />
              Albuquerque, NM 87193
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-ink text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-6 uppercase tracking-tight">Questions?</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            We're here to help! Contact us with any questions about our programs, tryouts, or anything else.
          </p>
          <button className="bg-maroon hover:bg-maroon-dark text-white font-bold px-12 py-4 rounded-lg transition-colors">
            Send us a Message
          </button>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify**

```bash
npm start
```

Open http://localhost:3000/contact. Confirm email/phone/Instagram cards, all 3 leadership cards (Brian, Theresa, Lucy) with correct titles/emails, and the mailing address (PO Box 67171, Albuquerque, NM 87193) all render correctly.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Contact.js
git commit -m "Rebuild Contact page with brand tokens"
```

---

### Task 10: Full verification pass

**Files:** None modified — verification only.

- [ ] **Step 1: Production build**

```bash
npm run build
```

Expected: completes with no errors. Warnings about bundle size are fine; any Tailwind/PostCSS errors are not.

- [ ] **Step 2: Full manual walkthrough**

```bash
npm start
```

Go through every page (Home, Programs, Coaches, Tryouts, Contact) at both desktop and mobile widths (use browser dev tools device toolbar, or resize below 768px). For each page confirm:
- No text is the same color as its background (the original bug).
- The mobile hamburger menu opens/closes and every link works.
- Maroon (not the old bright red) is the accent color throughout.
- All original content/copy/prices/names is present and unchanged from before the redesign.

- [ ] **Step 3: Stop the dev server, final status check**

```bash
git status -s
```

Expected: clean (nothing uncommitted) — everything should already be committed task-by-task.

- [ ] **Step 4: Report back to the user**

Do not run `npm run deploy` (which publishes to the live `gh-pages` branch) — per the design spec, that only happens after the user explicitly confirms they want the redesign pushed live. Tell the user the redesign is complete locally/on `main` and ask if they want it deployed now.
