/* oxlint-disable next/no-html-link-for-pages -- Native navigation avoids the deployed Vinext client-router failure. */
import { notFound } from 'next/navigation';
import { musings, readingTime } from '@/lib/musings';
import { founder } from '@/lib/site-content';
import { pageMetadata } from '@/lib/metadata';
export function generateStaticParams() {
  return musings.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = musings.find((item) => item.slug === slug);
  return post
    ? pageMetadata(post.title, `/musings/${slug}`, post.excerpt)
    : { title: 'Article unavailable' };
}
export default async function MusingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = musings.find((item) => item.slug === slug);
  if (!post) notFound();
  const next = musings[(musings.indexOf(post) + 1) % musings.length];
  return (
    <main id="main" className="article-page">
      <a href="/musings" className="text-link">
        ← All musings
      </a>
      <article>
        <header className="article-heading">
          <p className="eyebrow">
            {post.category} / {readingTime(post.paragraphs)} min read
          </p>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.excerpt}</p>
          <p className="eyebrow">Words / {founder.name}</p>
        </header>
        <div className="article-body">
          {post.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
      <a href={`/musings/${next.slug}`} className="article-next">
        <span className="eyebrow">Keep reading</span>
        <span>{next.title} ↗</span>
      </a>
    </main>
  );
}
