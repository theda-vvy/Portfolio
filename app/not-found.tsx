import Link from 'next/link';
export default function NotFound(){return <main id="main" className="page-intro"><p className="eyebrow">404 / Page not found</p><h1>This page<br/><em>isn’t here.</em></h1><Link href="/#work" className="text-link">Back to selected work <span aria-hidden="true">↗</span></Link></main>}
