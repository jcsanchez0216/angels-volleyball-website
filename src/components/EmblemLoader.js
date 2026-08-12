import React, { useEffect, useRef, useState } from 'react';
import { EMBLEM_PATH_D, EMBLEM_VIEWBOX, EMBLEM_TRANSFORM } from '../data/emblemPath';

const SESSION_KEY = 'angels-intro-played';
const TRACE_MS = 1800;
const FILL_MS = 400;
const HOLD_MS = 300;
const FADE_MS = 500;

export default function EmblemLoader({ onComplete }) {
  const pathRef = useRef(null);
  const [phase, setPhase] = useState('trace');
  const [skip, setSkip] = useState(false);
  const calledRef = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadyPlayed = sessionStorage.getItem(SESSION_KEY);

    if (prefersReduced || alreadyPlayed) {
      setSkip(true);
      if (!calledRef.current) {
        calledRef.current = true;
        onComplete();
      }
      return;
    }

    sessionStorage.setItem(SESSION_KEY, '1');

    const path = pathRef.current;
    const length = path.getTotalLength();
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
    path.getBoundingClientRect(); // force reflow before starting the transition
    path.style.transition = `stroke-dashoffset ${TRACE_MS}ms ease-in-out`;

    const raf = requestAnimationFrame(() => {
      path.style.strokeDashoffset = '0';
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
  }, [onComplete]);

  if (skip || phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-ink flex items-center justify-center transition-opacity duration-500 ${
        phase === 'hide' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <svg viewBox={EMBLEM_VIEWBOX} className="w-56 sm:w-72" role="presentation">
        <g transform={EMBLEM_TRANSFORM}>
          <path
            ref={pathRef}
            d={EMBLEM_PATH_D}
            fill={phase === 'fill' || phase === 'hide' ? '#6E1B2D' : 'none'}
            stroke="#6E1B2D"
            strokeWidth="8"
            style={{ transition: 'fill 0.4s ease-in' }}
          />
        </g>
      </svg>
    </div>
  );
}
