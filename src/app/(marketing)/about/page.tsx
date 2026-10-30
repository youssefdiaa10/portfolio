import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "About" };

const skills = ["TypeScript", "React", "Next.js", "HTML & CSS", "UI Design", "Problem Solving"];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <SectionHeading
        eyebrow="A LITTLE ABOUT ME"
        title="Curious by nature"
        description="I’m Yosof, an engineering student and aspiring developer interested in the space where thoughtful design meets practical technology."
      />
      <section className="content-section">
        <h2>Learning by building</h2>
        <p>
          I enjoy taking an idea from a rough sketch to a working experience. I’m
          currently growing my skills in frontend development, engineering, and
          product design—and sharing what I learn along the way.
        </p>
        <h2>Things I work with</h2>
        <ul className="tag-list">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
      </section>
    </div>
  );
}
