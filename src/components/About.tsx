import { AnimateIn } from "./AnimateIn";
import type { PortfolioProfile } from "@/types/portfolio";

export function About({ profile }: { profile: PortfolioProfile }) {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/[0.06] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl scroll-reveal">
        <AnimateIn>
          <SectionHeading title="About" />
        </AnimateIn>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-5">
            {profile.bio.map((paragraph, i) => (
              <AnimateIn key={paragraph.slice(0, 40)} delay={i * 80}>
                <p className="text-base leading-[1.75] text-zinc-400 md:text-[17px]">
                  {paragraph}
                </p>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={150}>
            <dl className="grid grid-cols-2 gap-3">
              {[
                { value: "15+", label: "Projects" },
                { value: "8", label: "Shipped products" },
                { value: "3", label: "Mobile apps" },
                { value: "5+", label: "Stacks" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="surface-card p-5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <dt className="text-2xl font-medium tracking-tight text-zinc-100">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs text-zinc-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </h2>
      <div className="mt-3 h-px w-12 bg-amber-600/60" aria-hidden />
      {subtitle && (
        <p className="mt-4 max-w-xl text-base text-zinc-500">{subtitle}</p>
      )}
    </div>
  );
}
