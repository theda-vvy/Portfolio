import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader, SiteFooter } from '@/components/portfolio-shell';
import { content, founder } from '@/lib/site-content';

const title = `${founder.name} — ${founder.role}`;
export const metadata: Metadata = {
  metadataBase: new URL(founder.siteUrl),
  title: { default: title, template: `%s — ${founder.name}` },
  description: content.description,
  // Keep the unfinished, owner-private portfolio out of search until launch.
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
  authors: [{ name: founder.name }],
  openGraph: { title, description: content.description, type: 'website', siteName: founder.name, locale: 'en_NG' },
  twitter: { card: 'summary', title, description: content.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
