"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#070b14]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#"
          className="font-mono text-sm font-semibold tracking-tight text-white"
        >
          {name.split(" ")[0]}
          <span className="text-cyan-400">.</span>dev
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 ring-1 ring-cyan-500/30 transition hover:bg-cyan-500/20"
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className="text-zinc-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/5 bg-[#070b14] px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-zinc-400"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
