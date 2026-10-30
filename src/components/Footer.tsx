import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Yosof Alwakil</span>
        <span>Built with curiosity and Next.js.</span>
        <div className="footer-links">
          <Link href="/projects">Work</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
