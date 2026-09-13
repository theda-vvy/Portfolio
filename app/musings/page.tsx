import Link from 'next/link';
import { musings, readingTime } from '@/lib/musings';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Musings',
  '/musings',
  'Notes on identity, judgement and the work of making things.',
);
export default function MusingsPage() {
  return (
    <main id="main" className="collection-page musings-page">
      <header className="collection-intro">
        <p className="eyebrow">Notes from the practice</p>
        <h1>
          Musings<span>.</span>
        </h1>
        <p>
          Things I’m thinking about,
          <br />
          in and around the work.
        </p>
      </header>
      <section className="musing-list" aria-label="Articles">
        {musings.map((post, index) => (
          <Link
            href={`/musings/${post.slug}`}
            key={post.slug}
            className="musing-card"
          >
            <span className="eyebrow musing-number">0{index + 1}</span>
            <div>
              <p className="eyebrow">
                {post.category} / {readingTime(post.paragraphs)} min read
              </p>
              <h2>{post.title}</h2>
              <p className="musing-excerpt">{post.excerpt}</p>
            </div>
            <span className="round-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
