export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  details: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: "portfolio-platform",
    title: "Portfolio Platform",
    shortTitle: "Personal site",
    category: "WEB DEVELOPMENT",
    description: "A personal home on the web built to share my work, process, and the ideas behind each project.",
    details: "A responsive portfolio concept with a clear editorial layout, reusable page components, and a focused project showcase.",
    technologies: ["Next.js", "TypeScript", "CSS"],
  },
  {
    slug: "engineering-dashboard",
    title: "Engineering Dashboard",
    shortTitle: "System overview",
    category: "UI / ENGINEERING",
    description: "A clean interface concept for turning complex technical information into an easy-to-scan overview.",
    details: "This dashboard concept explores information hierarchy, accessible contrast, and a component-based approach to presenting technical data.",
    technologies: ["React", "TypeScript", "Product design"],
  },
];
