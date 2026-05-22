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
  const extraRepos = githubRepos.filter((r) => !r.isPinned).slice(0, 12);

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="03"
          title="Featured Projects"
          subtitle="Production-oriented apps across mobile, full-stack, fintech, and AI."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              githubBase={profile.github.replace(/\/$/, "")}
            />
          ))}
        </div>

        {other.length > 0 && (
          <>
            <h3 className="mt-16 text-lg font-semibold text-white">
              More projects
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {other.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  githubBase={profile.github.replace(/\/$/, "")}
                />
              ))}
            </div>
          </>
        )}

        {extraRepos.length > 0 && (
          <>
            <h3 className="mt-16 text-lg font-semibold text-white">
              Latest from GitHub
              <span className="ml-2 text-sm font-normal text-zinc-500">
                (auto-synced hourly)
              </span>
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {extraRepos.map((repo) => (
                <RepoCard key={repo.url} {...repo} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
