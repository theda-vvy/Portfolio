import { LinkArrow } from '@/components/link-arrow';
/* oxlint-disable next/no-html-link-for-pages -- Native navigation avoids the deployed Vinext client-router failure. */
export default function NotFound(){return <main id="main" className="page-intro"><p className="eyebrow">404 / Page not found</p><h1>This page<br/><em>isn’t here.</em></h1><a href="/#work" className="text-link">Back to selected work <span aria-hidden="true"><LinkArrow /></span></a></main>}
