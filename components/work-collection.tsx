'use client';

import Link from 'next/link';
import type { Project } from '@/lib/portfolio';
import { ProjectCover } from '@/components/project-cover';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const categories = [
  { id: 'brand', label: 'Brand and visual identity' },
  { id: 'website', label: 'Website design' },
  { id: 'motion', label: 'Motion design' },
] as const;

export function WorkCollection({ projects }: { projects: Project[] }) {
  return <Tabs defaultValue="brand" className="work-categories">
    <TabsList aria-label="Work categories" className="work-category-list">
      {categories.map(category => <TabsTrigger key={category.id} value={category.id} className="work-category-tab">{category.label}</TabsTrigger>)}
    </TabsList>
    {categories.map(category => {
      const matching = projects.filter(project => (project.workCategory ?? 'brand') === category.id);
      return <TabsContent key={category.id} value={category.id}>
        {matching.length ? <section aria-label={`${category.label} projects`} className="archive-grid">
          {matching.map(project => <Link className="project-card" key={project.slug} href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
            <ProjectCover project={project} />
            <div className="project-caption"><div><h2>{project.title}</h2><p className="project-summary">{project.summary}</p><p>{project.category}</p></div><span className="round-arrow" aria-hidden="true">↗</span></div>
          </Link>)}
        </section> : <section className="work-category-empty"><h2>{category.label}</h2><p>No projects published here yet.</p></section>}
      </TabsContent>;
    })}
  </Tabs>;
}
