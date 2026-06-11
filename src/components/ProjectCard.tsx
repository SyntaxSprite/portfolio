import { AnimateIn } from "./AnimateIn";
import { ExternalLink } from "lucide-react";
import { projectTypeLabel } from "@/lib/portfolio";
import type { Project } from "@/types/portfolio";

const typeColors: Record<Project["type"], string> = {
  mobile: "border-violet-500/20 bg-violet-500/10 text-violet-300",
  fullstack: "border-sky-500/20 bg-sky-500/10 text-sky-300",
  web: "border-blue-500/20 bg-blue-500/10 text-blue-300",
  backend: "border-amber-500/20 bg-amber-500/10 text-amber-300",
  ai: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-300",
  fintech: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
};

export function ProjectCard({
  project,
  githubBase,
  index = 0,
  compact = false,
}: {
  project: Project;
  githubBase: string;
  index?: number;
  compact?: boolean;
}) {
  const repoUrl = project.githubRepo
    ? `${githubBase}/${project.githubRepo}`
    : githubBase;

  return (
    <AnimateIn delay={index * 70}>
      <article
        className={`surface-card group flex h-full flex-col p-5 transition-all duration-300 hover:border-amber-500/15 hover:bg-white/[0.04] md:p-6 ${
          compact ? "" : ""
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <span
            className={`rounded-md border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${typeColors[project.type]}`}
          >
            {projectTypeLabel(project.type)}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-medium text-zinc-100 transition-colors duration-300 group-hover:text-amber-400/90">
          {project.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.slice(0, 2).map((h) => (
            <li
              key={h}
              className="flex gap-2 text-xs leading-relaxed text-zinc-600 before:mt-0.5 before:shrink-0 before:text-amber-600/80 before:content-['—']"
            >
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-zinc-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-white/[0.06] pt-4">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw text-xs text-zinc-500 transition-colors hover:text-zinc-200"
          >
            Source
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw inline-flex items-center gap-1 text-xs text-zinc-500 transition-all hover:gap-1.5 hover:text-amber-400/90"
            >
              Live demo
              <ExternalLink size={11} />
            </a>
          )}
        </div>
      </article>
    </AnimateIn>
  );
}

export function RepoCard({
  name,
  description,
  url,
  homepage,
  language,
  index = 0,
}: {
  name: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  isPinned: boolean;
  index?: number;
}) {
  return (
    <AnimateIn delay={index * 50}>
      <article className="surface-card group p-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
        <h4 className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100">
          {name}
        </h4>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-600">
          {description}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-zinc-600">
          <span>{language ?? "—"}</span>
          <div className="flex gap-3">
            <a href={url} target="_blank" rel="noopener noreferrer" className="link-draw hover:text-zinc-400">
              GitHub
            </a>
            {homepage && (
              <a href={homepage} target="_blank" rel="noopener noreferrer" className="link-draw hover:text-zinc-400">
                Live
              </a>
            )}
          </div>
        </div>
      </article>
    </AnimateIn>
  );
}
