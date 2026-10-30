import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <SectionHeading
        eyebrow="SELECTED WORK"
        title="Projects"
        description="A collection of ideas, experiments, and projects I’ve been working on."
      />
      <section className="project-list">
        {projects.map((project, index) => (
          <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
            <div className={`project-art project-art-${(index % 2) + 1}`}>
              <span className="project-index">0{index + 1}</span>
              <span className="project-art-title">{project.shortTitle}</span>
              <span className="project-art-arrow"><ArrowUpRight size={20} /></span>
            </div>
            <div className="project-card-meta"><h2>{project.title}</h2><span>{project.category}</span></div>
            <p>{project.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
