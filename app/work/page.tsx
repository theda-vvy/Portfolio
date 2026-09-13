import { publishedProjects } from '@/lib/portfolio';
import { WorkCollection } from '@/components/work-collection';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'All work',
  '/work',
  'Brand strategy, identities and the worlds they live in. A collection of work by Oluwaseyi David.',
);
export default function WorkPage() {
  return (
    <main id="main" className="collection-page">
      <header className="collection-intro">
        <p className="eyebrow">
          The collection / {String(publishedProjects.length).padStart(2, '0')}{' '}
          projects
        </p>
        <h1>
          All work<span>.</span>
        </h1>
        <p>
          Different businesses. Different questions.
          <br />A considered answer for each.
        </p>
      </header>
      <WorkCollection projects={publishedProjects} />
    </main>
  );
}
