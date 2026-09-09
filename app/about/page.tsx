import Image from 'next/image';
import Link from 'next/link';
import { content, founder } from '@/lib/site-content';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('About', '/about');

export default function About() {
  return <main id="main">
    <section className="page-intro"><p className="eyebrow">About Oluwaseyi</p><h1>Clearer thinking.<br /><em>A clearer expression.</em></h1><p className="intro-summary">{content.positioning}</p></section>
    <section className="about-story"><div className="portrait-slot">{founder.portrait ? <Image src={founder.portrait.src} alt={founder.portrait.alt} width={founder.portrait.width} height={founder.portrait.height} decoding="async" /> : <><span className="eyebrow">{founder.name}</span><span className="portrait-label">Lagos,<br /><em>Nigeria.</em></span><span className="portrait-placeholder">{founder.portraitPlaceholder} · Photograph to follow</span></>}</div><div className="about-bio"><p className="eyebrow">{content.about.introduction}</p><h2>I ask questions early,<br /><em>so there is less guessing later.</em></h2>{content.about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<p>{content.about.personal}</p><Link className="text-link" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link></div></section>
    <section className="capabilities"><div><p className="eyebrow">Across the practice</p><h2>What I can<br /><em>help shape.</em></h2><p className="capability-note">{content.capabilityNote}</p></div><div className="capability-list">{content.capabilities.map(({ title, body }, i) => <div key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div></div>)}</div></section>
    <section id="approach" className="approach-section" aria-labelledby="approach-heading"><div><p className="eyebrow">How I work</p><h2 id="approach-heading">A question.<br /><em>Then a direction.</em></h2></div><ol className="approach-list">{content.approach.map(({ title, body }, i) => <li key={title}><span className="step-number">0{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></section>
    <section className="relationship-section"><p className="eyebrow">Working together</p><div><h2>Serious about the work.<br /><em>Easy to work with.</em></h2><ul>{content.relationship.map(line => <li key={line}>{line}</li>)}</ul></div></section>
    <section id="mien" className="mien-section"><p className="eyebrow">The studio I’m building</p><div><h2>Mien.</h2><p>{content.about.mien}</p><p className="mien-note">I lead the work, with collaboration shaped around what each project needs.</p></div></section>
  </main>;
}
