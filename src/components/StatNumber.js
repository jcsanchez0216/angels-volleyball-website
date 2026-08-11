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
    let frameId;

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
    // match is recomputed from value on every render, so depending on value is equivalent and stable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, value]);

  if (!match) return <>{value}</>;
  return <>{display}{match[2]}</>;
}
