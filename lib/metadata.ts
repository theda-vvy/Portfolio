import type { Metadata } from 'next';
import { content, founder } from '@/lib/site-content';

export function pageMetadata(title: string, path: string, description = content.description): Metadata {
  const fullTitle = `${title} — ${founder.name}`;
  const url = new URL(path, founder.siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', title: fullTitle, description, url, siteName: founder.name, locale: 'en_NG' },
    twitter: { card: 'summary', title: fullTitle, description },
  };
}
