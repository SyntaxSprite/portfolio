"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="animate-on-load animate-fade-in-down fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#09090b]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="#"
          className="text-sm font-medium tracking-tight text-zinc-200 transition-colors duration-300 hover:text-white"
        >
          {name}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-draw text-sm text-zinc-500 transition-colors duration-300 hover:text-zinc-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="text-zinc-400 transition-transform duration-200 active:scale-95 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav
        className={`overflow-hidden border-t border-white/[0.06] bg-[#09090b] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-t-transparent"
        }`}
      >
        <div className="px-6 py-4">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm text-zinc-400 transition-all duration-300 hover:translate-x-1 hover:text-zinc-200"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
