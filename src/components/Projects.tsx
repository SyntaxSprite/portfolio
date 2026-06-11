import { AnimateIn } from "./AnimateIn";
import { SectionHeading } from "./About";
import { ProjectCard, RepoCard } from "./ProjectCard";
import type { MergedRepo } from "@/lib/portfolio";
import type { PortfolioProfile } from "@/types/portfolio";

export function Projects({
  profile,
  githubRepos,
}: {
  profile: PortfolioProfile;
  githubRepos: MergedRepo[];
}) {
  const featured = profile.projects.filter((p) => p.featured);
  const other = profile.projects.filter((p) => !p.featured);
  const extraRepos = githubRepos.filter((r) => !r.isPinned).slice(0, 8);

  return (
    <section id="projects" className="scroll-mt-24 border-t border-white/[0.06] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl scroll-reveal">
        <AnimateIn>
          <SectionHeading
            title="Selected work"
            subtitle="Production applications across mobile, fintech, logistics, and AI."
          />
        </AnimateIn>

        <div className="mt-12">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              githubBase={profile.github.replace(/\/$/, "")}
              index={i}
            />
          ))}
        </div>

        {other.length > 0 && (
          <div className="mt-16 border-t border-white/[0.06] pt-4">
            <AnimateIn>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Additional projects
              </h3>
            </AnimateIn>
            {other.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                githubBase={profile.github.replace(/\/$/, "")}
                index={i}
              />
            ))}
          </div>
        )}

        {extraRepos.length > 0 && (
          <div className="mt-16 border-t border-white/[0.06] pt-12">
            <AnimateIn>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                GitHub
              </h3>
            </AnimateIn>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {extraRepos.map((repo, i) => (
                <RepoCard key={repo.url} {...repo} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
