"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link className="brand" href="/" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">Y.</span>
          <span>YOSOF ALWAKIL</span>
        </Link>
        <button
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-links${isOpen ? " is-open" : ""}`}>
          {links.map((link) => (
            <Link
              aria-current={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "page" : undefined}
              href={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link className="nav-contact" href="/contact" onClick={() => setIsOpen(false)}>
            Let&apos;s talk <ArrowUpRight size={14} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
