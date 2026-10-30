import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project?.title ?? "Project not found" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <article className="page-shell project-detail">
      <Link className="back-link" href="/projects"><ArrowLeft size={15} /> Back to projects</Link>
      <div className="project-art detail-art">
        <span className="project-index">{project.category}</span>
        <span className="project-art-title">{project.shortTitle}</span>
      </div>
      <div className="detail-copy">
        <p className="eyebrow">PROJECT OVERVIEW</p>
        <h1>{project.title}<span className="text-accent">.</span></h1>
        <p>{project.details}</p>
        <h2>Built with</h2>
        <ul className="tag-list">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
      </div>
    </article>
  );
}
