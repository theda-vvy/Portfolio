/* oxlint-disable next/no-html-link-for-pages -- Native navigation avoids the deployed Vinext client-router failure. */
'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { founder, content, navigation } from '@/lib/site-content';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <a href="/" className="wordmark" aria-label={`${founder.name} home`}>{founder.name}<span className="name-dot" aria-hidden="true">·</span></a>
    <span className="header-note">Independent designer & strategist</span>
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="menu-trigger">Menu <Menu size={18} aria-hidden="true" /></SheetTrigger>
      <SheetContent side="top" className="menu-panel" showCloseButton={false}>
        <div className="menu-top"><span className="wordmark">{founder.name}</span><SheetClose className="menu-trigger">Close <X size={20} aria-hidden="true" /></SheetClose></div>
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <SheetDescription className="sr-only">Explore my work, musings, approach, and contact details.</SheetDescription>
        <nav className="menu-links" aria-label="Main navigation">
          {navigation.map(({ label, href }, i) => <a key={label} href={href} onClick={() => setOpen(false)}><span className="menu-index">0{i + 1}</span>{label}<span className="menu-arrow" aria-hidden="true">↗</span></a>)}
        </nav>
        <div className="menu-bottom"><p>Lagos, Nigeria.<br />Working internationally.</p><a className="text-link" href={`mailto:${founder.email}`}>{founder.email}<span aria-hidden="true">↗</span></a></div>
      </SheetContent>
    </Sheet>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top"><p className="eyebrow">Start a conversation</p><a className="contact-title" href="/contact">Tell me<br /><em>what you’re building.</em><span aria-hidden="true">↗</span></a><p className="footer-invitation">{content.contact.body}</p><a className="text-link footer-email" href={`mailto:${founder.email}`}>{founder.email}<span aria-hidden="true">↗</span></a></div>
    <div className="footer-bottom"><a href="/" className="wordmark">{founder.name}</a><nav aria-label="Footer navigation">{navigation.map(({ label, href }) => <a href={href} key={label}>{label}</a>)}</nav><span className="footer-location">Lagos, Nigeria · {new Date().getFullYear()}</span></div>
  </footer>;
}
