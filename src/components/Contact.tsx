import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./About";
import type { PortfolioProfile } from "@/types/portfolio";

export function Contact({ profile }: { profile: PortfolioProfile }) {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/[0.06] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl scroll-reveal">
        <AnimateIn>
          <div className="surface-card relative overflow-hidden border-amber-500/10 bg-gradient-to-br from-amber-500/[0.04] to-transparent p-8 md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-600/[0.06] blur-3xl" />
            <SectionHeading title="Contact" />
            <p className="relative mt-6 max-w-lg text-base leading-relaxed text-zinc-500">
              Open to mobile and full-stack roles, remote or on-site. For
              collaborations, interviews, or contract work.
            </p>

            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-11 items-center bg-amber-600 px-5 text-sm font-medium text-zinc-950 transition-all hover:bg-amber-500"
              >
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw text-sm text-zinc-500 transition-colors hover:text-zinc-200"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw text-sm text-zinc-500 transition-colors hover:text-zinc-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
