/* oxlint-disable next/no-html-link-for-pages -- Native navigation avoids the deployed Vinext client-router failure. */
'use client';
import { Shapes, PanelsTopLeft, Play } from 'lucide-react';
import { LinkArrow } from '@/components/link-arrow';


import type { Project } from '@/lib/portfolio';
import { ProjectCover } from '@/components/project-cover';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const categories = [
  { id: 'brand', label: 'Brand and visual identity', icon: Shapes },
  { id: 'website', label: 'Website design', icon: PanelsTopLeft },
  { id: 'motion', label: 'Motion design', icon: Play },
] as const;

export function WorkCollection({ projects }: { projects: Project[] }) {
  return <Tabs defaultValue="brand" className="work-categories">
    <TabsList aria-label="Work categories" className="work-category-list">
      {categories.map(category => <TabsTrigger key={category.id} value={category.id} className="work-category-tab"><category.icon aria-hidden="true" className="category-icon" /><span>{category.label}</span><span className="category-count" aria-hidden="true">{projects.filter(project => (project.workCategory ?? 'brand') === category.id).length}</span></TabsTrigger>)}
    </TabsList>
    {categories.map(category => {
      const matching = projects.filter(project => (project.workCategory ?? 'brand') === category.id);
      return <TabsContent key={category.id} value={category.id}>
        {matching.length ? <section aria-label={`${category.label} projects`} className="archive-grid">
          {matching.map(project => <a className="project-card" key={project.slug} href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
            <ProjectCover project={project} />
            <div className="project-caption"><div><h2>{project.title}</h2><p className="project-summary">{project.summary}</p><p>{project.category}</p></div><span className="round-arrow" aria-hidden="true"><LinkArrow /></span></div>
          </a>)}
        </section> : <section className="work-category-empty"><h2>{category.label}</h2><p>No projects published here yet.</p></section>}
      </TabsContent>;
    })}
  </Tabs>;
}
