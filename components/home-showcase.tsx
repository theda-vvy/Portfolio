/* oxlint-disable next/no-html-link-for-pages -- Native navigation avoids the deployed Vinext client-router failure. */
'use client';

import { useEffect, useRef, useState } from 'react';

type Snapshot = { src: string; width: number; height: number };

export function HomeShowcase({ slides }: { slides: Snapshot[] }) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [focused, setFocused] = useState(false);
  const [foreground, setForeground] = useState(true);
  const loaded = useRef(new Set<number>());
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(preference.matches);
    const visibility = () => {
      setForeground(!document.hidden);
      // Returning from history can restore focus from a pointer click.
      setFocused(Boolean(root.current?.querySelector('a:focus-visible')));
      root.current?.querySelectorAll('img').forEach((image, index) => {
        if (image.complete && image.naturalWidth > 0) loaded.current.add(index);
      });
    };
    sync(); visibility();
    preference.addEventListener('change', sync);
    document.addEventListener('visibilitychange', visibility);
    window.addEventListener('pageshow', visibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    if (root.current) observer.observe(root.current);
    return () => {
      preference.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', visibility);
      window.removeEventListener('pageshow', visibility);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!visible || reduced || focused || !foreground || slides.length < 2) return;
    const timer = setInterval(() => setActive(index => {
      // A slow or unavailable image must not hold up the entire reel.
      for (let offset = 1; offset < slides.length; offset++) {
        const next = (index + offset) % slides.length;
        if (loaded.current.has(next)) return next;
      }
      return index;
    }), 1000 / 3);
    return () => clearInterval(timer);
  }, [visible, reduced, focused, foreground, slides.length]);
  if (!slides.length) return null;
  return <div ref={root} className="showcase-wrap">
    <a href="/work" className="home-showcase snapshot-reel" aria-label="View all work" onFocus={(event) => setFocused(event.currentTarget.matches(':focus-visible'))} onBlur={() => setFocused(false)}>
      <div className="snapshot-stage" aria-hidden="true">
        {slides.map((slide, index) => <img ref={(image) => { if (image?.complete && image.naturalWidth > 0) loaded.current.add(index); }} key={slide.src} src={slide.src} alt="" width={slide.width} height={slide.height} loading="eager" decoding="async" fetchPriority={index === 0 ? 'high' : 'low'} onLoad={() => loaded.current.add(index)} className={active === index ? 'snapshot is-active' : 'snapshot'} />)}
      </div>
    </a>
  </div>;
}
