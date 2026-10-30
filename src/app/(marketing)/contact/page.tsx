import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="page-shell">
      <SectionHeading
        eyebrow="HAVE A PROJECT IN MIND?"
        title="Let's talk"
        description="I’m open to new opportunities, interesting ideas, and conversations about engineering and the web."
      />
      <section className="contact-card">
        <Button href="mailto:hello@example.com"><Mail size={16} /> Email me <ArrowUpRight size={15} /></Button>
        <a className="text-link" href="/resume.pdf" download>Download resume <ArrowUpRight size={15} /></a>
      </section>
    </div>
  );
}
