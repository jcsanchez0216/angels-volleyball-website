import React, { useEffect, useMemo, useRef, useState } from 'react';
import { EMBLEM_PATH_D, EMBLEM_VIEWBOX, EMBLEM_TRANSFORM } from '../data/emblemPath';
import shouldSkipIntro, { INTRO_SESSION_KEY as SESSION_KEY } from '../utils/introSkip';

const TRACE_MS = 1800;
const FILL_MS = 400;
const HOLD_MS = 300;
const FADE_MS = 500;

// The traced silhouette is a single flat color (it was vectorized from just
// the PNG's alpha channel, so it never had the real logo's color/line detail
// to work with). Once it's filled solid, crossfade in the real raster
// emblem.png on top of it so the animation resolves into the actual logo
// instead of staying a plain maroon shape.
const REVEAL_DELAY_MS = FILL_MS;
const REVEAL_MS = 250;

// Fraction of TRACE_MS spent handing off from the first subpath to the last.
// The remainder is how long any single subpath takes to draw itself.
const STAGGER_SPAN = 0.6;

export default function EmblemLoader({ onComplete }) {
  // SVG restarts stroke-dasharray at every `M`, so a single <path> holding all
  // 31 subpaths cannot be traced — every subpath would draw at once. Split it.
  const subpaths = useMemo(
    () => EMBLEM_PATH_D.split(/(?=M)/).filter((s) => s.trim()),
    []
  );
  const pathRefs = useRef([]);
  const [phase, setPhase] = useState('trace');
  // Decided during render (not in an effect) so a skipped intro never paints
  // the opaque overlay for a frame.
  const [skip] = useState(shouldSkipIntro);
  const calledRef = useRef(false);

  useEffect(() => {
    if (skip) {
      if (!calledRef.current) {
        calledRef.current = true;
        onComplete();
      }
      return undefined;
    }

    try {
      window.sessionStorage.setItem(SESSION_KEY, '1');
    } catch {
      // Writes can be blocked even when reads succeed — the intro still plays.
    }

    const paths = pathRefs.current.filter(Boolean);

    // Sweep left-to-right: order the subpaths by their horizontal position.
    const order = paths
      .map((p) => ({ p, x: p.getBBox().x }))
      .sort((a, b) => a.x - b.x)
      .map((entry) => entry.p);

    order.forEach((p) => {
      const length = p.getTotalLength();
      p.style.strokeDasharray = String(length);
      p.style.strokeDashoffset = String(length);
    });
    order[0]?.getBoundingClientRect(); // force reflow before starting transitions

    const staggerTotal = TRACE_MS * STAGGER_SPAN;
    const step = order.length > 1 ? staggerTotal / (order.length - 1) : 0;
    const drawMs = TRACE_MS - staggerTotal;
    order.forEach((p, i) => {
      p.style.transition = `stroke-dashoffset ${drawMs}ms ease-in-out ${Math.round(i * step)}ms`;
    });

    const raf = requestAnimationFrame(() => {
      order.forEach((p) => {
        p.style.strokeDashoffset = '0';
      });
    });

    const t1 = setTimeout(() => setPhase('fill'), TRACE_MS);
    const t2 = setTimeout(() => {
      setPhase('hide');
      if (!calledRef.current) {
        calledRef.current = true;
        onComplete();
      }
    }, TRACE_MS + FILL_MS + HOLD_MS);
    const t3 = setTimeout(() => setPhase('done'), TRACE_MS + FILL_MS + HOLD_MS + FADE_MS);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete, skip]);

  if (skip || phase === 'done') return null;

  const filled = phase === 'fill' || phase === 'hide';

  return (
    <div
      className={`fixed inset-0 z-[100] bg-ink flex items-center justify-center transition-opacity duration-500 ${
        phase === 'hide' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="relative w-56 sm:w-72">
        <svg viewBox={EMBLEM_VIEWBOX} className="block w-full h-auto" role="presentation">
          <g transform={EMBLEM_TRANSFORM}>
            {/* Fill uses the combined path so counters/holes still punch out
                correctly under the nonzero fill rule. */}
            <path
              d={EMBLEM_PATH_D}
              fill={filled ? '#6E1B2D' : 'none'}
              stroke="none"
              style={{ transition: `fill ${FILL_MS}ms ease-in` }}
            />
            {subpaths.map((d, i) => (
              <path
                key={i}
                ref={(el) => {
                  pathRefs.current[i] = el;
                }}
                d={d}
                fill="none"
                stroke="#D98499"
                // The group is scaled 0.1x, so strokeWidth is divided by 10 too:
                // 320 renders as 32 viewBox units ≈ 2.8px on screen at desktop.
                strokeWidth="320"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </g>
        </svg>
        {/* Rendered from mount (not just once filled) so the browser has the
            full ~1.8s trace phase to fetch/decode it before it's needed. */}
        <img
          src={`${process.env.PUBLIC_URL}/emblem.png`}
          alt=""
          className={`absolute inset-0 w-full h-full object-contain transition-opacity ease-in ${
            filled ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionDuration: `${REVEAL_MS}ms`,
            transitionDelay: filled ? `${REVEAL_DELAY_MS}ms` : '0ms',
          }}
        />
      </div>
    </div>
  );
}
