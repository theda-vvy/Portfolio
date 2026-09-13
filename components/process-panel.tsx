'use client';
import { LinkArrow } from '@/components/link-arrow';

import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import type { ProjectStory } from '@/lib/portfolio';

export function ProcessPanel({ story }: { story: ProjectStory }) {
  return <Sheet><SheetTrigger className="text-link process-trigger">A closer look at the process <span aria-hidden="true"><LinkArrow /></span></SheetTrigger><SheetContent side="right" className="process-panel"><SheetTitle className="process-title">Behind the<br /><em>decisions.</em></SheetTitle><SheetDescription className="process-description">The question, the insight, and the choice that shaped the work.</SheetDescription><section><h3>The question</h3><p>{story.question}</p></section><section><h3>The insight</h3><p>{story.learning}</p></section><section><h3>The strategic decision</h3><p>{story.decision}</p></section></SheetContent></Sheet>;
}
