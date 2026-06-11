import type { PortfolioProfile } from "@/types/portfolio";

export function Hero({ profile }: { profile: PortfolioProfile }) {
  return (
    <section className="flex min-h-[90vh] flex-col justify-end px-6 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="mx-auto w-full max-w-6xl">
        {profile.availableForWork && (
          <p className="mb-8 text-sm text-zinc-500">
            Available for mobile & full-stack roles
          </p>
        )}

        <h1 className="max-w-4xl text-[2.5rem] font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-xl font-normal text-zinc-400 md:text-2xl">
          {profile.headline}
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg">
          {profile.tagline}
        </p>

        <p className="mt-4 text-sm text-zinc-600">{profile.location}</p>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="#projects"
            className="inline-flex h-11 items-center bg-amber-600 px-6 text-sm font-medium text-zinc-950 transition hover:bg-amber-500"
          >
            View work
          </a>
          <a
            href={profile.resumeUrl}
            className="inline-flex h-11 items-center border border-white/10 px-6 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-white"
          >
            Resume
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-zinc-200"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-zinc-200"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-zinc-200"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
