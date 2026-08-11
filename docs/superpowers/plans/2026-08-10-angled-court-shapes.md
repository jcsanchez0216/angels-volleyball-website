# Angled Court Shape & Motion System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply a sitewide diagonal-cut ("Angled Court") shape system and a restrained 3-part motion system (hero load-in, scroll reveal, stat count-up) across all 5 existing pages, replacing the current rounded-card-grid look with a signature that's unmistakably this club's.

**Architecture:** A small shared toolkit — CSS clip-path classes in `src/index.css`, two Tailwind keyframe animations, a `useScrollReveal` hook, and a `StatNumber` component — gets built once, then wired into each of the 5 existing page components in place of their current `rounded-xl`/flat-divider styling. No new dependencies; everything is Tailwind + a few lines of vanilla CSS/JS, consistent with round 1.

**Tech Stack:** React 18, Tailwind CSS v3 (already configured), CSS clip-path, IntersectionObserver (native browser API, no library).

## Global Constraints

- No new npm dependencies — CSS + a small hook + a small component only.
- No automated test suite exists in this project (pre-existing, out of scope to add) — "testing" a step means `npm run build` succeeds and/or visual verification via the dev server, not unit tests.
- All existing page content (copy, prices, names, contact info) carries over completely unchanged — this is a shape/motion pass only.
- `Navigation.js` and the `Footer` function in `App.js` are **not** touched by this plan.
- Two shape exceptions apply everywhere: circular avatars/icons (coach/leadership initials circles, Contact page method icons) stay circular. Buttons go sharp-cornered (no `rounded-lg`) but do not get a diagonal cut.
- Every new CSS class name introduced in Task 1 (`card-cut`, `divider-cut`, `rule-cut`, `reveal`/`is-visible`) and every new export (`useScrollReveal`, `StatNumber`) must be used with the exact same name/signature in every later task — do not rename or introduce variants.
- Brand tokens already exist in `tailwind.config.js` and must not change: `maroon` (`#6E1B2D`), `maroon.dark` (`#4E1220`), `maroon.light` (`#D98499`), `ink` (`#222425`), `paper` (`#FFFFFF`), `taupe`/`taupe.light`.

---

### Task 1: Shape/motion foundation — CSS, Tailwind animations, hook, component

**Files:**
- Modify: `src/index.css`
- Modify: `tailwind.config.js`
- Create: `src/hooks/useScrollReveal.js`
- Create: `src/components/StatNumber.js`

**Interfaces:**
- Produces CSS classes (used by every later task): `.card-cut` (diagonal-cut card corner + maroon top edge, apply to any card `div`, replaces `rounded-xl`/`border`), `.divider-cut` (absolutely-positioned angled section-boundary strip — parent must be `relative`; usage: `<div className="divider-cut bg-{next-section-color}" aria-hidden="true" />` placed as the **last child** of the section that comes **before** the color it names, so the wedge shows the *next* section's color intruding into the *current* section's bottom-right), `.rule-cut` (small parallelogram cut for heading accent bars), `.reveal` / `.reveal.is-visible` (fade+slide-up, apply `reveal` always and toggle `is-visible` based on a hook's boolean).
- Produces Tailwind animation utility classes: `animate-sweep-in` (for the Home hero's diagonal band, plays once on mount), `animate-fade-up`, `animate-fade-up-1`, `animate-fade-up-2` (staggered fade-up-on-mount, for hero headline/tagline/buttons).
- Produces `useScrollReveal()` from `src/hooks/useScrollReveal.js`: no arguments, returns `[ref, visible]` — `ref` is a React ref to attach to the element you want to observe, `visible` is a boolean (starts `false`, becomes `true` permanently the first time the element enters the viewport, or immediately if the user has `prefers-reduced-motion` set).
- Produces `<StatNumber value={string} active={boolean} />` from `src/components/StatNumber.js`: if `value` starts with digits (e.g. `"15+"`), renders an animated count from 0 to that number (holding any non-digit suffix like `+` static) once `active` becomes `true`, respecting `prefers-reduced-motion` (snaps instantly instead of animating). If `value` has no leading digits (e.g. `"✓"`), renders it unchanged with no animation.

- [ ] **Step 1: Add the shape/motion CSS to `src/index.css`**

Current file:
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

Append this block at the end of the file:
```css

/* Angled Court shape system (round 2) */
.card-cut {
  position: relative;
  clip-path: polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 0 100%);
}

.card-cut::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color: #6E1B2D;
}

.divider-cut {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 4rem;
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
  pointer-events: none;
}

.rule-cut {
  clip-path: polygon(0 0, 85% 0, 100% 100%, 15% 100%);
}

.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.45s ease-out, transform 0.45s ease-out;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    transition: none;
  }
  .animate-sweep-in,
  .animate-fade-up,
  .animate-fade-up-1,
  .animate-fade-up-2 {
    animation: none !important;
  }
}
```

- [ ] **Step 2: Add the Tailwind keyframe animations to `tailwind.config.js`**

Replace the file with:
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
          light: '#D98499',
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
      keyframes: {
        'sweep-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'sweep-in': 'sweep-in 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'fade-up-1': 'fade-up 0.5s ease-out 0.12s forwards',
        'fade-up-2': 'fade-up 0.5s ease-out 0.24s forwards',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 3: Create `src/hooks/useScrollReveal.js`**

```jsx
import { useEffect, useRef, useState } from 'react';

export default function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
```

- [ ] **Step 4: Create `src/components/StatNumber.js`**

```jsx
import React, { useEffect, useRef, useState } from 'react';

export default function StatNumber({ value, active }) {
  const match = value.match(/^(\d+)(.*)$/);
  const [display, setDisplay] = useState(match ? 0 : value);
  const started = useRef(false);

  useEffect(() => {
    if (!match || !active || started.current) return;
    started.current = true;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = parseInt(match[1], 10);
    if (prefersReduced) {
      setDisplay(target);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [active, match]);

  if (!match) return <>{value}</>;
  return <>{display}{match[2]}</>;
}
```

- [ ] **Step 5: Verify the build compiles**

Run: `npm run build`
Expected: succeeds with no errors. Nothing visually changes yet — these files aren't used by any page until later tasks.

- [ ] **Step 6: Commit**

```bash
git add src/index.css tailwind.config.js src/hooks/useScrollReveal.js src/components/StatNumber.js
git commit -m "Add Angled Court shape/motion foundation (CSS, animations, hook, component)"
```

---

### Task 2: Apply to Home page (shape + all 3 motion behaviors)

**Files:**
- Modify: `src/pages/Home.js` (full rewrite)

**Interfaces:**
- Consumes: `.card-cut`, `.divider-cut`, `.rule-cut`, `.reveal`/`.is-visible`, `animate-sweep-in`, `animate-fade-up`/`-1`/`-2` (Task 1 CSS/Tailwind), `useScrollReveal()` (Task 1), `<StatNumber value active />` (Task 1).

- [ ] **Step 1: Replace `src/pages/Home.js`**

```jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Trophy, Users } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';
import StatNumber from '../components/StatNumber';

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
  const [statsRef, statsVisible] = useScrollReveal();
  const [whyRef, whyVisible] = useScrollReveal();

  return (
    <div>
      <section className="relative overflow-hidden bg-ink pt-32 pb-24 px-6">
        <img
          src={`${process.env.PUBLIC_URL}/emblem.png`}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-24 -top-24 w-[420px] max-w-none opacity-10"
          width="420"
          height="257"
        />
        <div
          className="absolute left-0 right-0 bottom-0 h-2/5 bg-gradient-to-r from-maroon to-maroon-dark animate-sweep-in [clip-path:polygon(0_40%,100%_0%,100%_100%,0%_100%)]"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-6xl font-bold text-white tracking-tight mb-2 uppercase animate-fade-up">Angels</h1>
            <div className="h-1.5 w-32 bg-maroon-light mb-6 rule-cut animate-fade-up-1" />
            <p className="text-xl text-white/90 mb-8 max-w-md leading-relaxed font-medium animate-fade-up-1">
              Developing elite athletes. Building champions. Albuquerque's trusted volleyball program since 2010.
            </p>
            <div className="flex gap-4 flex-wrap animate-fade-up-2">
              <button
                onClick={() => navigate('/tryouts')}
                className="bg-maroon hover:bg-maroon-light text-white hover:text-ink font-bold px-8 py-3 shadow-lg transition-colors"
              >
                2026 Tryouts
              </button>
              <button
                onClick={() => navigate('/programs')}
                className="border-2 border-white text-white font-bold px-8 py-3 hover:bg-white/10 transition-colors"
              >
                View Programs
              </button>
            </div>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`card-cut bg-white/10 backdrop-blur p-6 reveal ${statsVisible ? 'is-visible' : ''}`}
              >
                <div className="text-5xl font-bold mb-2">
                  {stat.num === '✓' ? (
                    <span className="text-emerald-400">✓</span>
                  ) : (
                    <span className="text-white">
                      <StatNumber value={stat.num} active={statsVisible} />
                    </span>
                  )}
                </div>
                <p className="text-white font-bold text-sm">{stat.label}</p>
                <p className="text-white/60 text-xs mt-2">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="bg-paper py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div ref={whyRef} className={`reveal ${whyVisible ? 'is-visible' : ''}`}>
            <div className="mb-16">
              <h2 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Why Angels?</h2>
              <div className="h-1 w-20 bg-maroon rule-cut" />
            </div>
            <p className="text-xl text-ink/70 mb-16 max-w-2xl leading-relaxed">
              We're not just another volleyball club. We're a legacy built on proven coaching, competitive results, and genuine care for our athletes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyAngels.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="card-cut bg-taupe-light/60 p-8">
                    <Icon className="w-12 h-12 text-maroon mb-4" />
                    <h3 className="font-display text-2xl font-bold text-ink mb-3 uppercase">{item.title}</h3>
                    <p className="text-ink/70 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
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

Open http://localhost:3000/. On load, confirm: the maroon diagonal band sweeps in from the left over the lower hero, the headline/underline/tagline/buttons settle in with a brief stagger, and the emblem watermark (upper right) doesn't visually collide with the band. Scroll down and confirm the stat cards fade up into place and the numbers (15+, 7, 3) count up once (the ✓ appears immediately, no count). Keep scrolling and confirm the "Why Angels?" block fades up once. Confirm the diagonal seam between the hero and "Why Angels?" looks like a clean cut (no white gap or hard rectangular edge poking through). Reload and confirm the count-up/reveals don't replay (they're one-time).

- [ ] **Step 3: Commit**

```bash
git add src/pages/Home.js
git commit -m "Apply Angled Court shapes and motion to Home page"
```

---

### Task 3: Apply to Programs page (shape + scroll reveal)

**Files:**
- Modify: `src/pages/Programs.js` (full rewrite)

**Interfaces:**
- Consumes: `.card-cut`, `.divider-cut`, `.rule-cut`, `.reveal`/`.is-visible` (Task 1), `useScrollReveal()` (Task 1).

- [ ] **Step 1: Replace `src/pages/Programs.js`**

```jsx
import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

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
  const [headRef, headVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();
  const [includedRef, includedVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <section className="relative pt-24 pb-20 px-6 bg-taupe-light">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Our Programs</h1>
          <div className="h-1 w-20 bg-maroon mb-8 rule-cut" />
          <p className="text-xl text-ink/70 max-w-2xl leading-relaxed">
            Choose the program that fits your goals. All programs include expert coaching, structured development, and a supportive team environment.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-paper">
        <div ref={cardsRef} className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 reveal ${cardsVisible ? 'is-visible' : ''}`}>
          {programs.map((prog, i) => (
            <div key={i} className="card-cut bg-white overflow-hidden hover:-translate-y-1 transition-transform">
              <div className="bg-maroon px-8 py-8 text-white">
                <h2 className="font-display text-3xl font-bold uppercase">{prog.name}</h2>
                <div className="text-3xl md:text-4xl font-bold mt-2">{prog.price}</div>
                <p className="text-xs font-bold text-white/80 uppercase tracking-wider mt-3">{prog.age}</p>
              </div>
              <div className="p-8">
                <p className="text-ink/80 leading-relaxed mb-4 font-medium">{prog.description}</p>
                <p className="text-ink/70 text-sm leading-relaxed">{prog.details}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="divider-cut bg-taupe-light" aria-hidden="true" />
      </section>

      <section className="py-24 px-6 bg-taupe-light">
        <div ref={includedRef} className={`max-w-7xl mx-auto reveal ${includedVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">What's Included in All Programs</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-16 rule-cut" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {included.map((item, i) => (
              <div key={i} className="card-cut bg-white p-6">
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

Open http://localhost:3000/programs. Scroll through and confirm: header block fades up, the 3 program cards fade up as a group with diagonal-cut corners and a maroon top edge, "What's Included" fades up. Confirm all 3 section-to-section seams (header→cards, cards→included) show a clean diagonal cut with no gap or hard rectangular line. Confirm pricing text doesn't clip at tablet width (~768px).

- [ ] **Step 3: Commit**

```bash
git add src/pages/Programs.js
git commit -m "Apply Angled Court shapes and motion to Programs page"
```

---

### Task 4: Apply to Coaches page (shape + scroll reveal)

**Files:**
- Modify: `src/pages/Coaches.js` (full rewrite)

**Interfaces:**
- Consumes: `.card-cut`, `.divider-cut`, `.rule-cut`, `.reveal`/`.is-visible` (Task 1), `useScrollReveal()` (Task 1).

- [ ] **Step 1: Replace `src/pages/Coaches.js`**

```jsx
import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

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
  const [headRef, headVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <section className="relative pt-24 pb-20 px-6 bg-taupe-light">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Our Coaching Staff</h1>
          <div className="h-1 w-20 bg-maroon mb-8 rule-cut" />
          <p className="text-xl text-ink/70 max-w-2xl leading-relaxed">
            Meet the world-class coaches who develop elite athletes. All coaches are IMPACT Certified, SafeSport trained, and registered with USAV.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="py-24 px-6 bg-paper">
        <div ref={cardsRef} className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 reveal ${cardsVisible ? 'is-visible' : ''}`}>
          {coaches.map((coach, i) => (
            <div key={i} className="card-cut bg-taupe-light/40 hover:bg-taupe-light/70 transition-colors p-8">
              <div className="w-14 h-14 bg-maroon rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                {coach.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-ink">{coach.name}</h3>
              <p className="text-sm font-semibold text-maroon mt-1.5">{coach.title}</p>
              {coach.level && (
                <p className="text-[11px] font-bold text-white uppercase tracking-wide mt-3 inline-block bg-ink px-2.5 py-1.5">
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

Open http://localhost:3000/coaches. Scroll through and confirm all 7 coaches render with diagonal-cut cards, the circular initials avatar and level badges (Brian/Theresa/Mariah only) still render correctly, and hovering a card darkens its background slightly (replaces the old border-color hover).

- [ ] **Step 3: Commit**

```bash
git add src/pages/Coaches.js
git commit -m "Apply Angled Court shapes and motion to Coaches page"
```

---

### Task 5: Apply to Tryouts page (shape + scroll reveal, ink hero/CTA bookends)

**Files:**
- Modify: `src/pages/Tryouts.js` (full rewrite)

**Interfaces:**
- Consumes: `.card-cut`, `.divider-cut`, `.rule-cut`, `.reveal`/`.is-visible` (Task 1), `useScrollReveal()` (Task 1).

- [ ] **Step 1: Replace `src/pages/Tryouts.js`**

```jsx
import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

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
  const [detailsRef, detailsVisible] = useScrollReveal();
  const [summaryRef, summaryVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <section className="relative pt-24 pb-20 px-6 bg-ink text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-5xl font-bold text-white mb-6 uppercase tracking-tight">2026 Tryouts</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Are you ready to join the Angels family? Tryouts are coming soon. Limited spots available for all age groups and program levels.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="py-24 px-6 bg-paper">
        <div ref={detailsRef} className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center reveal ${detailsVisible ? 'is-visible' : ''}`}>
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

          <div className="card-cut bg-taupe-light p-10">
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
            <button className="w-full bg-maroon hover:bg-maroon-dark text-white font-bold py-4 mt-8 transition-colors">
              Register Interest
            </button>
            <p className="text-ink/70 text-xs text-center mt-3">Limited spots available</p>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-taupe-light">
        <div ref={summaryRef} className={`max-w-7xl mx-auto reveal ${summaryVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-ink mb-4 text-center uppercase tracking-tight">Choose Your Program</h2>
          <div className="h-1 w-20 bg-maroon mx-auto mb-16 rule-cut" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programSummary.map((prog, i) => (
              <div key={i} className="card-cut bg-white p-6 text-center">
                <h3 className="text-xl font-bold text-ink mb-3">{prog.name}</h3>
                <p className="text-lg font-bold text-maroon mb-2">{prog.price}</p>
                <p className="text-ink/70 text-sm">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="divider-cut bg-ink" aria-hidden="true" />
      </section>

      <section className="py-24 px-6 bg-ink text-center">
        <div ref={ctaRef} className={`max-w-4xl mx-auto reveal ${ctaVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold text-white mb-6 uppercase tracking-tight">Ready to Tryout?</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            Join a club known for developing elite athletes and building champions. Contact us with questions or to register.
          </p>
          <button className="bg-maroon hover:bg-maroon-light text-white hover:text-ink font-bold px-12 py-4 transition-colors">
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

Open http://localhost:3000/tryouts. Scroll through and confirm: the ink hero has an angled bottom seam into the paper section, the tryout-details card and program-summary cards show diagonal-cut corners, and the taupe-light→ink seam before "Ready to Tryout?" shows a clean angled transition (not a flat line). Confirm all original tryout info (fee, dates, notification, age groups) is present.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Tryouts.js
git commit -m "Apply Angled Court shapes and motion to Tryouts page"
```

---

### Task 6: Apply to Contact page (shape + scroll reveal)

**Files:**
- Modify: `src/pages/Contact.js` (full rewrite)

**Interfaces:**
- Consumes: `.card-cut`, `.divider-cut`, `.rule-cut`, `.reveal`/`.is-visible` (Task 1), `useScrollReveal()` (Task 1).

- [ ] **Step 1: Replace `src/pages/Contact.js`**

```jsx
import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';
import useScrollReveal from '../hooks/useScrollReveal';

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
  const [headRef, headVisible] = useScrollReveal();
  const [methodsRef, methodsVisible] = useScrollReveal();
  const [addressRef, addressVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="pt-20 bg-paper">
      <section className="relative pt-24 pb-20 px-6 bg-taupe-light text-center">
        <div ref={headRef} className={`max-w-7xl mx-auto reveal ${headVisible ? 'is-visible' : ''}`}>
          <h1 className="font-display text-5xl font-bold text-ink mb-4 uppercase tracking-tight">Get in Touch</h1>
          <div className="h-1 w-20 bg-maroon mx-auto mb-8 rule-cut" />
          <p className="text-xl text-ink/70 max-w-2xl mx-auto leading-relaxed">
            Have questions? Want to register for tryouts? We'd love to hear from you. Reach out using any of the methods below.
          </p>
        </div>
        <div className="divider-cut bg-paper" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-paper">
        <div ref={methodsRef} className={`max-w-7xl mx-auto reveal ${methodsVisible ? 'is-visible' : ''}`}>
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
                  <p className="text-ink/70 text-sm">{item.action}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-taupe-light p-12">
            <h2 className="font-display text-3xl font-bold text-ink mb-8 text-center uppercase tracking-tight">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((person, i) => (
                <div key={i} className="card-cut bg-white p-6">
                  <div className="w-14 h-14 bg-maroon rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {person.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-1">{person.name}</h3>
                  <p className="text-sm font-semibold text-maroon mb-3">{person.title}</p>
                  <p className="text-[13px] text-ink/70">{person.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="divider-cut bg-taupe-light" aria-hidden="true" />
      </section>

      <section className="relative py-24 px-6 bg-taupe-light text-center">
        <div ref={addressRef} className={`max-w-3xl mx-auto reveal ${addressVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-3xl font-bold text-ink mb-8 uppercase tracking-tight">Mailing Address</h2>
          <div className="card-cut bg-white p-8">
            <p className="text-ink leading-loose font-medium">
              Angels of Albuquerque Volleyball Club<br />
              PO Box 67171<br />
              Albuquerque, NM 87193
            </p>
          </div>
        </div>
        <div className="divider-cut bg-ink" aria-hidden="true" />
      </section>

      <section className="py-24 px-6 bg-ink text-center text-white">
        <div ref={ctaRef} className={`max-w-3xl mx-auto reveal ${ctaVisible ? 'is-visible' : ''}`}>
          <h2 className="font-display text-4xl font-bold mb-6 uppercase tracking-tight">Questions?</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            We're here to help! Contact us with any questions about our programs, tryouts, or anything else.
          </p>
          <button className="bg-maroon hover:bg-maroon-light text-white hover:text-ink font-bold px-12 py-4 transition-colors">
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

Open http://localhost:3000/contact. Scroll through and confirm: contact-method icons stay circular, leadership cards and the mailing-address card show diagonal-cut corners, all 3 section seams (header→methods, methods→address, address→CTA) show clean angled transitions, and all contact info (email, phone, Instagram, 3 leadership entries, PO Box address) is unchanged.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Contact.js
git commit -m "Apply Angled Court shapes and motion to Contact page"
```

---

### Task 7: Full verification pass

**Files:** None modified — verification only.

- [ ] **Step 1: Production build**

```bash
CI=true npm run build
```

Expected: succeeds with no errors (CI=true treats warnings as errors, matching round 1's final verification convention).

- [ ] **Step 2: Real-browser scroll-through verification (all 5 pages, desktop + mobile)**

Using a headless browser (Playwright — install into a scratch directory outside the repo if not already available, per the pattern used in round 1), for each of `/`, `/programs`, `/coaches`, `/tryouts`, `/contact` at both a desktop width (~1280px) and a mobile width (~375px):
- Load the page, then **actually scroll** through it in increments (not a single full-page screenshot — round 1's Artifact testing showed static full-page captures don't reliably trigger scroll-linked `IntersectionObserver` reveals and can produce a false "blank" result).
- Screenshot at each scroll position and visually confirm: no section is stuck at `opacity: 0` (a `.reveal` element that never got `is-visible`), every diagonal seam between sections shows a clean cut with no white/mismatched-color gap, card corners show the diagonal cut consistently, and circular elements (avatars, contact icons) are still round.
- On Home specifically: confirm the hero band sweep and headline/tagline stagger play on load, the stat numbers count up once when scrolled to, and the emblem watermark doesn't visually collide with the diagonal band.
- Check the browser console for errors on every page — should be none.

- [ ] **Step 3: Reduced-motion verification**

Using Playwright's `page.emulateMedia({ reducedMotion: 'reduce' })` (or equivalent), reload each page and confirm all content is immediately visible with no animation — no elements stuck hidden, no band/fade-up animation playing, stat numbers show their final value immediately.

- [ ] **Step 4: Fix anything found**

If any seam shows a gap, any element is stuck invisible, or the hero band/watermark look wrong together, adjust the relevant class (`divider-cut` height, the emblem's size/position, `card-cut`'s cut size) and re-verify. This is expected minor visual tuning, not a sign the approach is wrong.

- [ ] **Step 5: Final `git status` check**

```bash
git status -s
```

Expected: clean — everything already committed task-by-task.

- [ ] **Step 6: Report back to the user**

Summarize what changed, and remind them that nothing is pushed or deployed live yet — those remain separate, explicit decisions (same as round 1).
