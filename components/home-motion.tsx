'use client';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

export function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;
    element.dataset.motion = 'ready';
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = 'true';
            reveal.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    element
      .querySelectorAll('[data-reveal]')
      .forEach((node) => reveal.observe(node));
    const sections = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            element.dataset.tone = (entry.target as HTMLElement).dataset.tone;
        }),
      { rootMargin: '-25% 0px -45% 0px', threshold: 0 },
    );
    element
      .querySelectorAll('section[data-tone]')
      .forEach((node) => sections.observe(node));
    return () => {
      reveal.disconnect();
      sections.disconnect();
      delete element.dataset.motion;
    };
  }, []);
  return (
    <div ref={root} className="home-sequence" data-tone="cream">
      {children}
    </div>
  );
}
