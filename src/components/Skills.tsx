import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./About";
import type { PortfolioProfile } from "@/types/portfolio";

export function Skills({ profile }: { profile: PortfolioProfile }) {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-white/[0.06] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl scroll-reveal">
        <AnimateIn>
          <SectionHeading
            title="Skills"
            subtitle="Technologies used across mobile, web, backend, and cloud."
          />
        </AnimateIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skillCategories.map((category, i) => (
            <AnimateIn key={category.name} delay={i * 60}>
              <div className="surface-card h-full p-5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                <h3 className="text-sm font-medium text-zinc-200">{category.name}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1 text-[11px] text-zinc-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
