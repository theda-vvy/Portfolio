import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { projects, publishedProjects, isProjectReady, findProject } from '@/lib/portfolio';
import { ProjectCover, ProjectFigure } from '@/components/project-cover';
import { ProjectGallery } from '@/components/project-gallery';
import { ProcessPanel } from '@/components/process-panel';
import { pageMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return projects.flatMap(project => [project.slug, ...project.aliases].map(slug => ({ slug })));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project || !isProjectReady(project)) return { title: 'Case study unavailable', robots: { index: false, follow: false } };
  return pageMetadata(project.title, `/work/${project.slug}`, project.summary);
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();
  if (slug !== project.slug) permanentRedirect(`/work/${project.slug}`);
  if (!isProjectReady(project)) notFound();
  const story = project.story;
  const next = publishedProjects[(publishedProjects.findIndex(item => item.slug === project.slug) + 1) % publishedProjects.length];
  return <main id="main" className={`case-page ${project.workCategory === 'website' ? 'website-case' : ''}`}>
    <section className="case-intro">
      <div className="case-label"><Link href="/work" className="text-link">← All work</Link><span className="eyebrow">Case study / {project.number}</span></div>
      <div><p className="eyebrow">{project.category}</p><h1>{project.title}</h1><p className="case-deck">{project.summary}</p></div>
    </section>
    {!project.hideHero && <div className="case-hero"><ProjectCover project={project} large /></div>}
    <section className="case-overview">
      <dl className="project-details">
        <div><dt>Project</dt><dd>{project.title}</dd></div>
        <div><dt>My role</dt><dd>{project.role}</dd></div>
        <div><dt>Scope</dt><dd>{project.disciplines.join(' · ')}</dd></div>
        {project.collaboration && <div><dt>Collaboration</dt><dd>{project.collaboration}</dd></div>}
        {project.year && <div><dt>Year</dt><dd>{project.year}</dd></div>}
      </dl>
      <div>
        <p className="eyebrow">01 / The situation</p><h2 className="preserve-lines">{project.situationTitle}</h2>
        <p className="case-copy">{story.situation}</p>
        <h3 className="story-subheading">The design challenge</h3><p className="case-copy">{story.problem}</p>
        <p className="eyebrow section-label">02 / Finding the direction</p><h2>{project.decisionTitle}</h2>
        <p className="case-question">{story.question}</p><p className="case-copy">{story.decision}</p>
        <ProcessPanel story={story} />
      </div>
    </section>
    <section className="identity-section">
      <div className="case-chapter-heading"><p className="eyebrow">{project.workCategory === 'website' ? '03 / The website' : '03 / The identity'}</p><div><h2>{project.identityTitle}</h2><p className="creative-idea">{story.creativeIdea}</p></div></div>
      <ProjectFigure media={project.identity} className="identity-figure" />
      {project.chapters.map(chapter => <section className={`case-chapter ${chapter.presentation ? `chapter-${chapter.presentation}` : ''}`} key={chapter.label}>
        <div className="case-chapter-heading"><p className="eyebrow">{chapter.label}</p><div><h3>{chapter.title}</h3><p className="case-copy">{chapter.body}</p></div></div>
        <div className={chapter.layout === 'pair' ? 'media-pair' : 'media-stack'}>{chapter.media.map(media => <ProjectFigure key={media.src} media={media} className={chapter.layout === 'pair' ? 'paired-figure' : ''} />)}</div>
      </section>)}
    </section>
    {project.gallery && <ProjectGallery title={project.title} media={project.gallery} />}
    <section className="case-outcome"><p className="eyebrow">04 / What changed</p><div><h2>A system to<br /><em>carry forward.</em></h2><p className="case-copy">{story.outcome}</p><div className="credits"><h3 className="eyebrow">Credits & project status</h3>{project.credits.map(credit => <p key={credit}>{credit}</p>)}<p>{project.projectStatus}</p></div></div></section>
    {next && next.slug !== project.slug && <Link className="next-project" href={`/work/${next.slug}`}><span className="eyebrow">Next project</span><span className="next-title">{next.title}<span aria-hidden="true">↗</span></span></Link>}
  </main>;
}
