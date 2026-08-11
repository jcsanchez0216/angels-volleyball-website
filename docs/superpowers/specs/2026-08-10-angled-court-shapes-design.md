# Angels of Albuquerque — Angled Court Shape & Motion System (Round 2)

## Context

Round 1 (Tailwind design tokens, real brand colors, bug fixes) is live and the user is happy with the colors and professionalism, but flagged that the site still feels generic/templated: every section uses the same rounded-card-grid pattern any Tailwind starter ships with. Round 1 fixed the palette problem, not the shape problem.

The user was shown three bold shape-language directions (built from the club's actual logo: the wordmark's arch, the wings' feather cuts, the volleyball's seam) as a comparison Artifact and picked **"Angled Court"** — diagonal cuts throughout, echoing court sidelines. They also asked for restrained motion, specifically: one animated moment on the homepage, and "those sites that have a subtle scroll animation." The goal, in the user's words, is for this to be "the best site for volleyball clubs in Albuquerque" — recognized here as: the ceiling code/design alone can reach is "unmistakably custom, not templated," which this pass targets. Real team/game photography would be the next lever beyond that, and is explicitly out of scope until the user has photos to provide.

## Shape system

One repeated visual signature, defined once and reused everywhere — this consistency (not novelty per page) is what makes it read as a real design system rather than five different tricks.

**Card cut.** Every card-like element gets a diagonal-cut top-right corner (clip-path, ~26px) plus a thin maroon top edge, replacing `rounded-xl`. Applies to: Home's stat cards and "Why Angels" cards, Programs' program cards and "What's Included" cards, Coaches' coach cards, Tryouts' detail card and program-summary cards, Contact's leadership cards and mailing-address card.

**Section dividers.** Every section-to-section boundary (not just the hero) gets an angled edge instead of a flat line — the bottom edge of a section is cut so its right side is shorter than its left (clip-path, percentage-based so it scales with content height), and the following section's top edge mirrors it. Same lean direction sitewide. Applies to every page's header→content and content→content transitions, and Tryouts' and Home's ink hero/CTA bands specifically.

**Heading rule.** The small accent bar under section headings (`h-1 w-20 bg-maroon`) becomes a small cut parallelogram instead of a plain rectangle.

**Two deliberate exceptions** (stated explicitly so they read as decisions, not gaps): coach/leadership initials-in-a-circle and the Contact page's method icons **stay circular** — one repeated round shape reads as intentional contrast against the angles, not inconsistency. **Buttons go sharp-cornered** (drop `rounded-lg`, no rounding) but do **not** get their own diagonal cut — the cut is reserved for cards and section edges; putting it on every button label would compete with the text.

## Motion system

Three behaviors, all one-time (not looping/parallax), all respecting `prefers-reduced-motion` by skipping straight to the end state.

1. **Home hero load-in** (Home only, plays once on mount, not scroll-triggered — it's above the fold). The diagonal maroon band sweeps into place via a `clip-path` animation (~600-700ms), followed by the headline and tagline settling in with a brief fade/translate stagger (~80-120ms apart). Easing: a standard ease-out curve, nothing bouncy.
2. **Site-wide scroll reveal.** Implemented once as a reusable `useScrollReveal` hook (IntersectionObserver-based): an element starts at `opacity: 0; translateY(16px)`, transitions to its resting state over ~400-500ms the first time it enters the viewport, and is never re-hidden after. Applied to every major section/card-grid on all 5 pages — same duration and easing everywhere so it reads as one behavior, not per-page tuning.
3. **Stat count-up** (Home hero only). The three numeric stats (15+, 7, 3 — the ✓ stat stays static, it isn't a number) count up from 0 to their value over ~1.1-1.3s, triggered the first time the stat grid scrolls into view (reuses the same visibility trigger as the scroll-reveal hook rather than a second observer).

**Explicitly not in scope**: parallax backgrounds, cursor-follow effects, auto-playing carousels, scroll-jacking, looping/ambient animation.

## Implementation shape

- `src/index.css`: add the reusable `.card-cut`, `.section-cut-down`, `.section-cut-up`, `.rule-cut`, and `.reveal`/`.reveal.is-visible` classes (plain CSS after the `@tailwind` directives — Tailwind processes the whole file, no plugin needed). A `prefers-reduced-motion` override neutralizes `.reveal`'s transition.
- `tailwind.config.js`: add a `keyframes`/`animation` entry for the Home hero band sweep (the only page-load, non-scroll animation) so it stays within the existing Tailwind-driven styling approach rather than introducing a separate animation library.
- `src/hooks/useScrollReveal.js` (new): the reusable IntersectionObserver hook — returns a ref to attach and a boolean visibility flag, unobserves after first trigger, short-circuits to `visible = true` immediately when `prefers-reduced-motion` is set.
- `src/components/StatNumber.js` (new): small reusable component that parses a stat's leading numeric value (e.g. `"15+"` → animates `0→15`, renders the `+` suffix statically; `"✓"` renders as-is with no animation), driven by the same visibility trigger as the surrounding reveal.
- All 5 page files (`Home.js`, `Programs.js`, `Coaches.js`, `Tryouts.js`, `Contact.js`): updated to use the new shape classes in place of `rounded-xl`/flat dividers, and wired to `useScrollReveal`/`StatNumber` where applicable.
- `Navigation.js` / `App.js` footer: **not** touched by this pass — the complaint was about generic content sections, not the nav/footer, and they're already working well. Out of scope, avoids unnecessary churn.

No new dependencies — everything is CSS + a small hook + a small component, consistent with round 1's approach (no animation library, no new npm packages).

## Verification

- Production build passes (`npm run build`).
- Real browser (Playwright) verification of all 5 pages at desktop and mobile widths, **including actually scrolling the page** (not a single full-page screenshot, which — as discovered while testing the comparison Artifact earlier in this project — does not reliably trigger scroll-linked IntersectionObserver reveals and can produce a false "blank page" result).
- Verify `prefers-reduced-motion: reduce` (via Playwright's `page.emulateMedia`) shows all content immediately, no animation.
- Verify the Home hero's emblem watermark doesn't visually collide with the new diagonal band.
- Same rigor as round 1: task-by-task subagent-driven build, per-task review, final whole-branch review before merging.

## Out of scope

- Real photography (flagged to the user as the next lever, not actionable without their photos).
- Any change to Navigation.js or the footer.
- Any new content, copy, or page changes — this is a shape/motion pass only, all existing content carries over unchanged (same rule as round 1).
- Any animation library/dependency — CSS + one small hook, no new packages.
