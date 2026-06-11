import { AnimateIn } from "./AnimateIn";
import type { PortfolioProfile } from "@/types/portfolio";

export function About({ profile }: { profile: PortfolioProfile }) {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/[0.06] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl scroll-reveal">
        <AnimateIn>
          <SectionHeading title="About" />
        </AnimateIn>
        <div className="mt-12 max-w-3xl space-y-5">
          {profile.bio.map((paragraph, i) => (
            <AnimateIn key={paragraph.slice(0, 40)} delay={i * 80}>
              <p className="text-base leading-[1.75] text-zinc-400 md:text-[17px]">
                {paragraph}
              </p>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn delay={200}>
          <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-white/[0.06] pt-10 sm:grid-cols-4">
            {[
              { value: "15+", label: "Projects" },
              { value: "8", label: "Shipped products" },
              { value: "3", label: "Mobile apps" },
              { value: "5+", label: "Stacks" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="transition-transform duration-500 hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <dt className="text-2xl font-medium tracking-tight text-zinc-100 md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-zinc-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </AnimateIn>
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
      {subtitle && (
        <p className="mt-3 max-w-xl text-base text-zinc-500">{subtitle}</p>
      )}
    </div>
  );
}
