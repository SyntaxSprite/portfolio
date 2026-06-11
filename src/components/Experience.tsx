import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./About";
import type { PortfolioProfile } from "@/types/portfolio";

export function Experience({ profile }: { profile: PortfolioProfile }) {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-white/[0.06] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl scroll-reveal">
        <AnimateIn>
          <SectionHeading title="Experience" />
        </AnimateIn>
        <div className="mt-10 space-y-3">
          {profile.experience.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 80}>
              <div className="surface-card grid gap-2 p-5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] sm:grid-cols-[160px_1fr] sm:gap-10 sm:p-6">
                <p className="text-sm text-zinc-600">{item.period}</p>
                <div>
                  <h3 className="text-base font-medium text-zinc-200">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
