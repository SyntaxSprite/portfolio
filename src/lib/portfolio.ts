import portfolioData from "@/data/portfolio.json";
import type {
  GitHubRepo,
  PortfolioProfile,
  Project,
} from "@/types/portfolio";
import { fetchGitHubRepos, getGitHubUsername } from "./github";

export function getPortfolioProfile(): PortfolioProfile {
  return portfolioData as PortfolioProfile;
}

export function getFeaturedProjects(profile: PortfolioProfile): Project[] {
  return profile.projects.filter((p) => p.featured);
}

export function getOtherProjects(profile: PortfolioProfile): Project[] {
  return profile.projects.filter((p) => !p.featured);
}

export type MergedRepo = {
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  updatedAt: string;
  isPinned: boolean;
};

export async function getMergedGitHubRepos(
  profile: PortfolioProfile,
): Promise<MergedRepo[]> {
  const username = getGitHubUsername();
  if (!username) return [];

  const repos = await fetchGitHubRepos(username);
  const pinnedNames = new Set(
    profile.projects
      .map((p) => p.githubRepo?.toLowerCase())
      .filter(Boolean) as string[],
  );

  const merged = new Map<string, MergedRepo>();

  for (const project of profile.projects) {
    if (!project.githubRepo) continue;
    const gh = repos.find(
      (r) => r.name.toLowerCase() === project.githubRepo!.toLowerCase(),
    );
    merged.set(project.githubRepo.toLowerCase(), {
      name: project.title,
      description: project.description,
      url: gh?.html_url ?? `${profile.github}/${project.githubRepo}`,
      homepage: project.liveUrl ?? gh?.homepage ?? null,
      language: gh?.language ?? project.stack[0] ?? null,
      stars: gh?.stargazers_count ?? 0,
      updatedAt: gh?.updated_at ?? new Date().toISOString(),
      isPinned: true,
    });
  }

  for (const repo of repos) {
    const key = repo.name.toLowerCase();
    if (merged.has(key)) continue;
    if (repo.name.match(/local|old|temp|zip/i)) continue;

    merged.set(key, {
      name: repo.name,
      description: repo.description ?? "No description provided.",
      url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
      isPinned: pinnedNames.has(key),
    });
  }

  return Array.from(merged.values()).sort((a, b) => {
    if (a.isPinned !== b.isPinned) return a.isPinned ? -1 : 1;
    return (
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
  });
}

export function projectTypeLabel(
  type: Project["type"],
): string {
  const labels: Record<Project["type"], string> = {
    mobile: "Mobile",
    fullstack: "Full-Stack",
    web: "Web",
    backend: "Backend",
    ai: "AI",
    fintech: "Fintech",
  };
  return labels[type];
}
