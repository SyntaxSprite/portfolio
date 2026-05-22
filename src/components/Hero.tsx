import { ArrowDown, Code2, Globe, Link, Mail, MapPin } from "lucide-react";
import type { PortfolioProfile } from "@/types/portfolio";

export function Hero({ profile }: { profile: PortfolioProfile }) {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-24 pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        {profile.availableForWork && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Open to mobile & full-stack roles
          </div>
        )}

        <p className="mb-4 font-mono text-sm text-cyan-400">
          Hi, I&apos;m {profile.name} —
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {profile.headline}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          {profile.tagline}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-zinc-600" />
            {profile.location}
          </span>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#070b14] transition hover:bg-cyan-400"
          >
            View my work
            <ArrowDown size={16} />
          </a>
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5"
          >
            Download resume
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition hover:text-white"
            aria-label="GitHub"
          >
            <Code2 size={20} />
          </a>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition hover:text-white"
            aria-label="Portfolio"
          >
            <Globe size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition hover:text-white"
            aria-label="LinkedIn"
          >
            <Link size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-zinc-500 transition hover:text-white"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
