import { ExternalLink } from "lucide-react";
import { projectTypeLabel } from "@/lib/portfolio";
import type { Project } from "@/types/portfolio";

export function ProjectCard({
  project,
  githubBase,
}: {
  project: Project;
  githubBase: string;
}) {
  const repoUrl = project.githubRepo
    ? `${githubBase}/${project.githubRepo}`
    : githubBase;

  return (
    <article className="group flex flex-col border-t border-white/[0.06] py-8 transition first:border-t-0 md:py-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-600">
            {projectTypeLabel(project.type)}
          </p>
          <h3 className="mt-1 text-lg font-medium text-zinc-100 md:text-xl">
            {project.title}
          </h3>
        </div>
        <div className="flex shrink-0 gap-4 text-sm">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition hover:text-zinc-200"
          >
            Source
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-500 transition hover:text-zinc-200"
            >
              Live
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
        {project.description}
      </p>

      <p className="mt-4 text-xs text-zinc-600">
        {project.stack.slice(0, 6).join(" · ")}
      </p>
    </article>
  );
}

export function RepoCard({
  name,
  description,
  url,
  homepage,
  language,
}: {
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  isPinned: boolean;
}) {
  return (
    <article className="border border-white/[0.06] p-4">
      <h4 className="text-sm font-medium text-zinc-300">{name}</h4>
      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-600">
        {description}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-zinc-600">
        <span>{language ?? "—"}</span>
        <div className="flex gap-3">
          <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400">
            GitHub
          </a>
          {homepage && (
            <a href={homepage} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400">
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
