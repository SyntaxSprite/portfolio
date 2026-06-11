import { ArrowUpRight } from "lucide-react";
import { projectTypeLabel } from "@/lib/portfolio";
import type { PortfolioProfile } from "@/types/portfolio";

export function Hero({ profile }: { profile: PortfolioProfile }) {
  const highlights = profile.projects
    .filter((p) => p.featured)
    .slice(0, 3);

  return (
    <section className="page-grid relative overflow-hidden px-6 pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-amber-600/[0.07] blur-[100px]" />
        <div className="absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-rose-900/[0.12] blur-[90px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          {profile.availableForWork && (
            <p className="animate-on-load animate-fade-in-up mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1 text-xs text-emerald-400/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for mobile & full-stack roles
            </p>
          )}

          <p className="animate-on-load animate-fade-in-up delay-100 font-mono text-xs tracking-wide text-amber-500/80">
            Mobile · Full-Stack · React Native · Next.js
          </p>

          <h1 className="animate-on-load animate-fade-in-up delay-100 mt-3 max-w-2xl text-4xl font-medium leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl">
            {profile.name}
          </h1>

          <p className="animate-on-load animate-fade-in-up delay-200 mt-3 text-xl text-zinc-400">
            {profile.headline}
          </p>

          <p className="animate-on-load animate-fade-in-up delay-300 mt-6 max-w-xl text-base leading-relaxed text-zinc-500">
            {profile.tagline}
          </p>

          <p className="animate-on-load animate-fade-in-up delay-400 mt-3 text-sm text-zinc-600">
            {profile.location}
          </p>

          <div className="animate-on-load animate-fade-in-up delay-500 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex h-11 items-center bg-amber-600 px-6 text-sm font-medium text-zinc-950 transition-all duration-300 hover:bg-amber-500 hover:shadow-[0_0_28px_rgba(217,119,6,0.2)]"
            >
              View work
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex h-11 items-center border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              Resume
            </a>
          </div>

          <div className="animate-on-load animate-fade-in delay-600 mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw transition-colors hover:text-zinc-200"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw transition-colors hover:text-zinc-200"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="link-draw transition-colors hover:text-zinc-200"
            >
              Email
            </a>
          </div>
        </div>

        <div className="animate-on-load animate-fade-in-up delay-300 hidden lg:block">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
            Recent work
          </p>
          <div className="space-y-3">
            {highlights.map((project) => (
              <a
                key={project.id}
                href={project.liveUrl ?? `#projects`}
                className="surface-card group flex items-start justify-between gap-4 p-4 transition-all duration-300 hover:border-amber-500/20 hover:bg-white/[0.04]"
              >
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    {projectTypeLabel(project.type)}
                  </p>
                  <p className="mt-1 truncate text-sm font-medium text-zinc-200 transition-colors group-hover:text-amber-400/90">
                    {project.title}
                  </p>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-zinc-600">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="mt-1 shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-500"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
