import type { PortfolioProfile } from "@/types/portfolio";

export function Hero({ profile }: { profile: PortfolioProfile }) {
  return (
    <section className="flex min-h-[90vh] flex-col justify-end px-6 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="mx-auto w-full max-w-6xl">
        {profile.availableForWork && (
          <p className="animate-on-load animate-fade-in-up mb-8 text-sm text-zinc-500">
            Available for mobile & full-stack roles
          </p>
        )}

        <h1 className="animate-on-load animate-fade-in-up delay-100 max-w-4xl text-[2.5rem] font-medium leading-[1.08] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>

        <p className="animate-on-load animate-fade-in-up delay-200 mt-4 text-xl font-normal text-zinc-400 md:text-2xl">
          {profile.headline}
        </p>

        <p className="animate-on-load animate-fade-in-up delay-300 mt-8 max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg">
          {profile.tagline}
        </p>

        <p className="animate-on-load animate-fade-in-up delay-400 mt-4 text-sm text-zinc-600">
          {profile.location}
        </p>

        <div className="animate-on-load animate-fade-in-up delay-500 mt-12 flex flex-wrap items-center gap-6">
          <a
            href="#projects"
            className="inline-flex h-11 items-center bg-amber-600 px-6 text-sm font-medium text-zinc-950 transition-all duration-300 hover:bg-amber-500 hover:shadow-[0_0_24px_rgba(217,119,6,0.25)]"
          >
            View work
          </a>
          <a
            href={profile.resumeUrl}
            className="inline-flex h-11 items-center border border-white/10 px-6 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-white/25 hover:text-white"
          >
            Resume
          </a>
        </div>

        <div className="animate-on-load animate-fade-in delay-600 mt-14 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw transition-colors duration-300 hover:text-zinc-200"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw transition-colors duration-300 hover:text-zinc-200"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="link-draw transition-colors duration-300 hover:text-zinc-200"
          >
            Email
          </a>
        </div>

        <div
          className="animate-on-load animate-line-grow delay-600 mt-16 h-px w-full max-w-xs origin-left bg-white/[0.08]"
          aria-hidden
        />
      </div>
    </section>
  );
}
