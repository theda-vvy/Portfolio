import Link from 'next/link';
import { publishedProjects } from '@/lib/portfolio';
import { ProjectCover } from '@/components/project-cover';
import { Empty, EmptyHeader, EmptyDescription } from '@/components/ui/empty';
import { founder, content } from '@/lib/site-content';

export const metadata = { alternates: { canonical: founder.siteUrl }, openGraph: { title: `${founder.name} — ${founder.role}`, description: content.description, url: founder.siteUrl, type: 'website' as const } };

export default function Home() {
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: founder.name, url: founder.siteUrl, email: founder.email, jobTitle: founder.role, address: { '@type': 'PostalAddress', addressLocality: founder.city, addressCountry: 'NG' }, knowsAbout: content.capabilities.map(item => item.title) };
  return <main id="main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }} />
    <section className="home-hero"><div className="hero-kicker"><span className="eyebrow">Independent designer & strategist</span><span className="location-note">Lagos, Nigeria / Working internationally</span></div><h1><span>{content.hero.headline}</span><br /><em>{content.hero.emphasis}</em></h1><div className="hero-bottom"><p>{content.hero.supporting}</p><div className="hero-actions"><a href="#work" className="text-link">View selected work <span aria-hidden="true">↓</span></a><Link href="/contact" className="text-link">Start a conversation <span aria-hidden="true">↗</span></Link></div></div></section>
    <section id="work" className="work-section" aria-labelledby="work-heading"><div className="section-heading"><h2 id="work-heading">Selected work</h2>{publishedProjects.length > 0 && <span className="eyebrow">Strategy, identity & expression</span>}</div>
      {publishedProjects.length > 0 ? <div className="project-grid">{publishedProjects.map((project, index) => <Link href={`/work/${project.slug}`} key={project.slug} aria-label={`View ${project.title} case study`} className={`project-card project-0${index + 1}`}><ProjectCover project={project} /><div className="project-caption"><div><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><p>{project.disciplines.join(' · ')}{project.year ? ` / ${project.year}` : ''}</p></div><span className="round-arrow" aria-hidden="true">↗</span></div></Link>)}</div> : <Empty className="work-empty"><EmptyHeader className="work-empty-header"><h3>Selected case studies<br /><em>are being prepared.</em></h3><EmptyDescription className="work-empty-description">For a conversation about your business and what needs to become clearer, get in touch.</EmptyDescription></EmptyHeader><Link className="text-link" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></Empty>}
    </section>
    <section className="perspective-section"><p className="eyebrow">Where I come in</p><div><h2>Sometimes the business is good,<br /><em>but people cannot see it yet.</em></h2><p>{content.introduction.body}</p><Link href="/about" className="text-link">More about me <span aria-hidden="true">↗</span></Link></div></section>
  </main>;
}
