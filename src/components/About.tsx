import type { PortfolioProfile } from "@/types/portfolio";

export function About({ profile }: { profile: PortfolioProfile }) {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="01" title="About" />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            {profile.bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-lg leading-relaxed text-zinc-400"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="15+" label="Projects built" />
            <StatCard value="8+" label="Featured products" />
            <StatCard value="3" label="Mobile apps shipped" />
            <StatCard value="5+" label="Tech stacks mastered" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
      <p className="text-3xl font-bold text-white">{value}</p>
      <p className="mt-1 text-sm text-zinc-500">{label}</p>
    </div>
  );
}

export function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <p className="font-mono text-sm text-cyan-400">{label} — {title}</p>
      {subtitle && (
        <p className="mt-2 max-w-xl text-zinc-500">{subtitle}</p>
      )}
    </div>
  );
}
