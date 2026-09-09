import Image from 'next/image';
import type { Project, ProjectMedia } from '@/lib/portfolio';

function Artwork({ media, eager = false, sizes }: { media: ProjectMedia; eager?: boolean; sizes: string }) {
  return <picture>
    <source srcSet={`${media.src.replace('.webp', '-960.webp')} ${Math.min(media.width, Math.round(media.width * Math.min(960 / media.width, 1100 / media.height, 1)))}w, ${media.src} ${media.width}w`} sizes={sizes} type="image/webp" />
    <Image unoptimized src={media.src} alt={media.alt} width={media.width} height={media.height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" style={{ objectFit: media.fit ?? 'contain', objectPosition: media.position ?? 'center' }} />
  </picture>;
}

export function ProjectCover({ project, large = false }: { project: Project; large?: boolean }) {
  const media = large ? project.hero : project.cover;
  return <div className={`project-cover project-artwork ${project.theme} ${large ? 'cover-large' : ''}`}>
    <Artwork media={{ ...media, fit: large ? 'contain' : 'cover' }} eager={large} sizes={large ? '100vw' : '(max-width: 700px) 100vw, 65vw'} />
  </div>;
}

export function ProjectFigure({ media, className = '' }: { media: ProjectMedia; className?: string }) {
  return <figure className={`project-figure ${className}`}>
    <Artwork media={media} sizes={className.includes('paired-figure') ? '(max-width: 700px) 100vw, 50vw' : '100vw'} />
    {media.caption && <figcaption className="media-caption">{media.caption}</figcaption>}
  </figure>;
}
