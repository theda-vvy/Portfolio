'use client';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ProjectFigure } from '@/components/project-cover';
import type { ProjectMedia } from '@/lib/portfolio';

export function ProjectGallery({ title, media }: { title: string; media: ProjectMedia[] }) {
  const [open, setOpen] = useState(false);
  return <section className="extended-gallery" aria-label={`More ${title} images`}>
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="gallery-invitation"><div><p className="eyebrow">A closer look</p><h2>More of the work.</h2><p>Campaigns, details and everyday applications.</p></div><CollapsibleTrigger className="pill-link">{open ? 'Hide extra images' : 'View more images'} <span aria-hidden="true">{open ? '−' : '+'}</span><span className="gallery-count">{media.length}</span></CollapsibleTrigger></div>
      <CollapsibleContent><div className="extended-gallery-grid">{media.map(item => <ProjectFigure key={item.src} media={item} className={item.width > item.height ? 'gallery-landscape' : 'gallery-portrait'} />)}</div></CollapsibleContent>
    </Collapsible>
  </section>;
}
