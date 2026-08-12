export const INTRO_SESSION_KEY = 'angels-intro-played';

// Should the emblem intro be skipped for this visit?
// Storage access throws in Safari private mode / storage-blocked configs, so
// this fails closed: when in doubt, skip the intro rather than break the page.
export default function shouldSkipIntro() {
  try {
    return (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !!window.sessionStorage.getItem(INTRO_SESSION_KEY)
    );
  } catch {
    return true;
  }
}
