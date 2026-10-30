import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/Button";
import personalImage from "@/data/images/Personal Image 4.png";
import { projects } from "@/data/projects";
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero page-shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p>
            <h1>
              I build things
              <br />
              for the <span className="text-accent">web.</span>
            </h1>
            <p className="hero-description">
              Hey, I&apos;m Yosof — an engineering student and developer who
              enjoys turning thoughtful ideas into useful digital experiences.
            </p>
            <div className="hero-actions">
              <Button href="/projects">Explore my work <ArrowRight size={16} /></Button>
              <Link className="text-link" href="/about">More about me <ArrowUpRight size={15} /></Link>
            </div>
            <div className="hero-location"><MapPin size={15} />Based in the Egypt</div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <Image
                src={personalImage}
                alt="Portrait of Yosof"
                fill
                priority
                sizes="(max-width: 760px) 80vw, 420px"
                className="portrait-image"
              />
            </div>
            <div className="portrait-label"><span className="label-mark">Y.</span><span>ENGINEER IN PROGRESS<br /><strong>DESIGN-MINDED DEVELOPER</strong></span></div>
          </div>
          <a className="scroll-cue" href="#selected-work" aria-label="Scroll to selected work"><ArrowDown size={16} />SCROLL TO EXPLORE</a>
        </section>

        <section className="work-s ection page-shell" id="selected-work">
          <div className="section-heading">
            <div><p className="eyebrow">A FEW THINGS I&apos;VE MADE</p><h2>Selected work<span className="text-accent">.</span></h2></div>
            <Link className="text-link" href="/projects">View all projects <ArrowUpRight size={15} /></Link>
          </div>
          <div className="project-grid">
            {projects.slice(0, 2).map((project, index) => (
              <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
                <div className={`project-art project-art-${index + 1}`}>
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-art-title">{project.shortTitle}</span>
                  <span className="project-art-arrow"><ArrowUpRight size={20} /></span>
                </div>
                <div className="project-card-meta"><h3>{project.title}</h3><span>{project.category}</span></div>
                <p>{project.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
