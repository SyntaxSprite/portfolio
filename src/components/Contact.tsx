import { Code2, Globe, Link, Mail, Send } from "lucide-react";
import { SectionHeading } from "./About";
import type { PortfolioProfile } from "@/types/portfolio";

export function Contact({ profile }: { profile: PortfolioProfile }) {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-indigo-600/5 p-10 md:p-14">
          <SectionHeading label="05" title="Let's work together" />
          <p className="mt-4 max-w-lg text-zinc-400">
            I&apos;m open to mobile and full-stack developer roles — remote or
            on-site. Reach out for collaborations, interviews, or freelance
            projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#070b14] transition hover:bg-cyan-400"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/5"
            >
              <Globe size={16} />
              Portfolio
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/5"
            >
              <Code2 size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/5"
            >
              <Link size={16} />
              LinkedIn
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-xs text-zinc-600">
            <Send size={12} />
            Tip: add your resume PDF to{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-zinc-400">
              public/resume.pdf
            </code>
          </p>
        </div>
      </div>
    </section>
  );
}
