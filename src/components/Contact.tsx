import { SectionHeading } from "./About";
import type { PortfolioProfile } from "@/types/portfolio";

export function Contact({ profile }: { profile: PortfolioProfile }) {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/[0.06] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Contact" />
        <p className="mt-8 max-w-lg text-base leading-relaxed text-zinc-500">
          Open to mobile and full-stack roles, remote or on-site. For
          collaborations, interviews, or contract work.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="text-base text-zinc-200 transition hover:text-white"
          >
            {profile.email}
          </a>
          <span className="hidden text-zinc-700 sm:inline">/</span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-zinc-500 transition hover:text-zinc-200"
          >
            GitHub
          </a>
          <span className="hidden text-zinc-700 sm:inline">/</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-zinc-500 transition hover:text-zinc-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
