import { Code2, ExternalLink, Star } from "lucide-react";
import { projectTypeLabel } from "@/lib/portfolio";
import type { Project } from "@/types/portfolio";

const typeColors: Record<Project["type"], string> = {
  mobile: "bg-violet-500/10 text-violet-400 ring-violet-500/20",
  fullstack: "bg-cyan-500/10 text-cyan-400 ring-cyan-500/20",
  web: "bg-blue-500/10 text-blue-400 ring-blue-500/20",
  backend: "bg-amber-500/10 text-amber-400 ring-amber-500/20",
  ai: "bg-fuchsia-500/10 text-fuchsia-400 ring-fuchsia-500/20",
  fintech: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
};

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
    <article className="group flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-cyan-500/20 hover:bg-white/[0.04]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">
          {project.title}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${typeColors[project.type]}`}
        >
          {projectTypeLabel(project.type)}
        </span>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.slice(0, 3).map((h) => (
          <li
            key={h}
            className="flex gap-2 text-xs text-zinc-500 before:content-['→'] before:text-cyan-600"
          >
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-zinc-500"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-zinc-500 transition hover:text-white"
        >
          <Code2 size={14} />
          Code
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-500 transition hover:text-cyan-400"
          >
            <ExternalLink size={14} />
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}

export function RepoCard({
  name,
  description,
  url,
  homepage,
  language,
  stars,
  isPinned,
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
    <article className="flex flex-col rounded-xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-white/10">
      <div className="flex items-center justify-between gap-2">
        <h4 className="font-mono text-sm font-medium text-white">{name}</h4>
        {isPinned && (
          <span className="text-[10px] uppercase tracking-wider text-cyan-500">
            Featured
          </span>
        )}
      </div>
      <p className="mt-2 flex-1 text-xs leading-relaxed text-zinc-500 line-clamp-2">
        {description}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-zinc-600">
        <span>{language ?? "—"}</span>
        {stars > 0 && (
          <span className="flex items-center gap-1">
            <Star size={12} />
            {stars}
          </span>
        )}
      </div>
      <div className="mt-3 flex gap-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-zinc-500 hover:text-white"
        >
          GitHub
        </a>
        {homepage && (
          <a
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-cyan-400"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
