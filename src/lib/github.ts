import type { GitHubRepo } from "@/types/portfolio";

const REVALIDATE_SECONDS = 3600;

export async function fetchGitHubRepos(
  username: string,
): Promise<GitHubRepo[]> {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    {
      headers,
      next: { revalidate: REVALIDATE_SECONDS },
    },
  );

  if (!res.ok) {
    console.error(`GitHub API error: ${res.status}`);
    return [];
  }

  const repos: GitHubRepo[] = await res.json();

  return repos
    .filter((r) => !r.fork)
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    );
}

export function getGitHubUsername(): string | null {
  const fromEnv = process.env.GITHUB_USERNAME?.trim();
  if (fromEnv) return fromEnv;

  const profileUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  if (!profileUrl) return null;

  try {
    const match = profileUrl.match(/github\.com\/([^/?#]+)/);
    return match?.[1] ?? null;
  } catch {
    return null;
  }
}
