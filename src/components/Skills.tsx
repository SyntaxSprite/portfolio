import { SectionHeading } from "./About";
import type { PortfolioProfile } from "@/types/portfolio";

export function Skills({ profile }: { profile: PortfolioProfile }) {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-white/[0.06] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills" />
        <div className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {profile.skillCategories.map((category) => (
            <div
              key={category.name}
              className="grid gap-4 py-6 sm:grid-cols-[140px_1fr] sm:gap-8 sm:py-7"
            >
              <h3 className="text-sm font-medium text-zinc-300">{category.name}</h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                {category.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
