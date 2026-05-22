import { SectionHeading } from "./About";
import type { PortfolioProfile } from "@/types/portfolio";

export function Skills({ profile }: { profile: PortfolioProfile }) {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="02"
          title="Skills"
          subtitle="Technologies I use across mobile, web, backend, and cloud."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skillCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
            >
              <h3 className="font-semibold text-white">{category.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
