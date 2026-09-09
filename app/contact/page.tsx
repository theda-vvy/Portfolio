import Link from 'next/link';
import { content, founder } from '@/lib/site-content';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Contact', '/contact', `Start a conversation with ${founder.name}, an independent designer and strategist based in Lagos.`);

export default function Contact() {
  return <main id="main" className="contact-page"><section className="page-intro"><p className="eyebrow">Start a conversation</p><h1>Tell me<br /><em>what changed.</em></h1><p className="intro-summary">{content.contact.body}</p></section><section className="contact-details"><div><p className="eyebrow">Write to me</p><a className="contact-email" href={`mailto:${founder.email}`}>{founder.email}<span aria-hidden="true">↗</span></a><p className="contact-location">{content.contact.location}</p></div><div><p className="eyebrow">A useful place to begin</p><p>{content.contact.invitation}</p><Link href="/#work" className="text-link">View selected work <span aria-hidden="true">↗</span></Link></div></section></main>;
}
