import { SectionHeading } from "./About";
import type { PortfolioProfile } from "@/types/portfolio";

export function Experience({ profile }: { profile: PortfolioProfile }) {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="04"
          title="Experience"
          subtitle="What I've been building and how it maps to engineering roles."
        />
        <div className="mt-10 space-y-0">
          {profile.experience.map((item, i) => (
            <div
              key={item.title}
              className="relative grid gap-4 border-l border-white/10 py-8 pl-8 md:grid-cols-[200px_1fr]"
            >
              <span className="absolute -left-1.5 top-10 h-3 w-3 rounded-full border-2 border-cyan-500 bg-[#070b14]" />
              <p className="font-mono text-sm text-zinc-500">{item.period}</p>
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
              {i < profile.experience.length - 1 && (
                <div className="absolute bottom-0 left-0 h-px w-full bg-white/5 md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
