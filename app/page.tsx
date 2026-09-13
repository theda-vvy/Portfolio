import { LinkArrow } from '@/components/link-arrow';
/* oxlint-disable next/no-html-link-for-pages -- Native navigation avoids the deployed Vinext client-router failure. */
import homepageFrames from '@/lib/project-assets/homepage-frame.json';
import { featuredProjects } from '@/lib/portfolio';
import { ProjectCover } from '@/components/project-cover';
import { Empty, EmptyHeader, EmptyDescription } from '@/components/ui/empty';
import { founder, content } from '@/lib/site-content';
import { HomeShowcase } from '@/components/home-showcase';
import { HomeMotion } from '@/components/home-motion';

export const metadata = {
  alternates: { canonical: founder.siteUrl },
  openGraph: {
    title: `${founder.name} — ${founder.role}`,
    description: content.description,
    url: founder.siteUrl,
    type: 'website' as const,
  },
};

export default function Home() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: founder.name,
    url: founder.siteUrl,
    email: founder.email,
    jobTitle: founder.role,
    address: {
      '@type': 'PostalAddress',
      addressLocality: founder.city,
      addressCountry: 'NG',
    },
    knowsAbout: content.capabilities.map((item) => item.title),
  };
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, '\\u003c'),
        }}
      />
      <HomeMotion>
        <section className="home-opening" data-tone="cream">
          <div className="opening-heading">
            <h1>
              You’ve put a lot into your brand.
              <br />
              <em>Let’s help people see it.</em>
            </h1>
            <p className="opening-note">
              Brand strategy, identity and websites.
              <br />
              Based in Lagos. Working with you, wherever you are.
            </p>
          </div>
          <HomeShowcase slides={homepageFrames} />
        </section>
        <section
          className="home-help"
          data-tone="cream"
          aria-labelledby="help-heading"
        >
          <div className="home-section-lead" data-reveal>
            <p className="eyebrow">Where I can help</p>
            <div>
              <h2 id="help-heading">
                Good work deserves
                <br />
                <em>to be understood.</em>
              </h2>
              <p>
                You know what goes into your business. Helping other people see
                its value can be harder. Maybe you’re starting something new,
                finding a new direction, or looking at a brand that no longer
                feels like you.
              </p>
              <p>
                We’ll work out what needs to change, what’s worth keeping, and
                how to make the next step feel right.
              </p>
              <a href="/contact" className="pill-link">
                Let’s talk it through <span aria-hidden="true"><LinkArrow /></span>
              </a>
            </div>
          </div>
          <div className="help-scenarios" data-reveal>
            <div>
              <span className="eyebrow">Starting something</span>
              <h3>
                Give your idea
                <br />a clear beginning.
              </h3>
              <p>
                Find the words and identity that help people understand why it
                matters.
              </p>
            </div>
            <div>
              <span className="eyebrow">Growing or changing</span>
              <h3>
                Feel like yourself.
                <br />
                At your next stage.
              </h3>
              <p>
                Bring your brand closer to the business you’ve become, without
                losing what people already value.
              </p>
            </div>
            <div>
              <span className="eyebrow">Bringing it together</span>
              <h3>
                Make every part
                <br />
                feel connected.
              </h3>
              <p>
                Give your identity, website and everyday communication a shared
                way of showing up.
              </p>
            </div>
          </div>
        </section>
        <section
          id="how-i-work"
          className="home-how"
          data-tone="lime"
          aria-labelledby="how-heading"
        >
          <div className="home-section-lead" data-reveal>
            <p className="eyebrow">How we’ll work</p>
            <div>
              <h2 id="how-heading">
                A little less guessing.
                <br />
                <em>A clear way forward.</em>
              </h2>
              <p>
                You don’t need to arrive with all the answers. We’ll get there
                through honest conversations, clear decisions and work you can
                respond to.
              </p>
            </div>
          </div>
          <ol className="home-steps" data-reveal>
            {content.approach.map((step, index) => (
              <li key={step.title}>
                <span className="eyebrow">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <a href="/about#approach" className="pill-link" data-reveal>
            More about working together <span aria-hidden="true"><LinkArrow /></span>
          </a>
        </section>
        <section
          id="work"
          className="work-section home-selected"
          data-tone="dark"
          aria-labelledby="work-heading"
        >
          <div className="section-heading" data-reveal>
            <h2 id="work-heading">Selected work</h2>
            {featuredProjects.length > 0 && (
              <span className="eyebrow">A few ideas, out in the world</span>
            )}
          </div>
          {featuredProjects.length > 0 ? (
            <div className="project-grid">
              {featuredProjects.map((project, index) => (
                <a
                  href={`/work/${project.slug}`}
                  key={project.slug}
                  aria-label={`View ${project.title} case study`}
                  className={`project-card project-0${index + 1}`}
                  data-reveal
                >
                  <ProjectCover project={project} />
                  <div className="project-caption">
                    <div>
                      <h3>{project.title}</h3>
                      <p className="project-summary">{project.summary}</p>
                      <p>
                        {project.disciplines.join(' · ')}
                        {project.year ? ` / ${project.year}` : ''}
                      </p>
                    </div>
                    <span className="round-arrow" aria-hidden="true">
                      <LinkArrow />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <Empty className="work-empty">
              <EmptyHeader className="work-empty-header">
                <h3>
                  Selected case studies
                  <br />
                  <em>are being prepared.</em>
                </h3>
                <EmptyDescription className="work-empty-description">
                  For a conversation about your business and what needs to
                  become clearer, get in touch.
                </EmptyDescription>
              </EmptyHeader>
              <a className="text-link" href="/contact">
                Start a conversation <span aria-hidden="true"><LinkArrow /></span>
              </a>
            </Empty>
          )}
          <div className="all-work-action">
            <a href="/work" className="pill-link">
              Show all work <span aria-hidden="true"><LinkArrow /></span>
            </a>
          </div>
        </section>
      </HomeMotion>
    </main>
  );
}
