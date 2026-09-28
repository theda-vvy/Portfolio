import { ProjectFigure } from '@/components/project-cover';
import type { ProjectMedia } from '@/lib/portfolio';

export function ProjectGallery({ title, media }: { title: string; media: ProjectMedia[] }) {
  if (!media.length) return null;
  return <section className="extended-gallery" aria-label={`More ${title} images`}>
    <div className="gallery-invitation"><div><p className="eyebrow">A closer look</p><h2>More of the work.</h2><p>Campaigns, details and everyday applications.</p></div></div>
    <div className="extended-gallery-grid">{media.map(item => <ProjectFigure key={item.src} media={item} className={item.width > item.height ? 'gallery-landscape' : 'gallery-portrait'} />)}</div>
  </section>;
}
