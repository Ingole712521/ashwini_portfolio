"use client";

import type { CSSProperties } from "react";
import type { Project } from "@/types/portfolio";
import { getMetroAccent } from "@/lib/project-colors";
import { Badge } from "@/components/retroui/Badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  className?: string;
};

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  const accent = getMetroAccent(index);
  const initial = project.title.charAt(0).toUpperCase();
  const projectNum = String(index + 1).padStart(2, "0");

  return (
    <article
      data-cursor-hover
      data-cursor-type="project"
      data-cursor-magnetic
      className={cn(
        "metro-project-card group flex w-full flex-col overflow-hidden border-2 border-black bg-card shadow-md",
        className,
      )}
      style={
        {
          "--metro-bg": accent.bg,
          "--metro-fg": accent.fg,
        } as CSSProperties
      }
    >
      {/* Metro tile header */}
      <div className="metro-project-card__tile relative flex h-40 flex-col justify-between border-b-2 border-black p-5 sm:h-44 sm:p-6">
        <span
          className="metro-project-card__ghost font-head leading-none select-none"
          aria-hidden
        >
          {initial}
        </span>
        <div className="relative z-10 flex items-end justify-between gap-3">
          <span className="font-head text-5xl font-bold tracking-tighter sm:text-6xl">
            {initial}
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase opacity-80 sm:text-xs">
            Proj · {projectNum}
          </span>
        </div>
      </div>

      {/* Content body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-head text-xl font-bold tracking-tight text-card-foreground sm:text-2xl">
          {project.title}
        </h3>
        <p className="prose-body mt-3 flex-1 text-sm sm:text-base">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2 border-t-2 border-black/10 pt-5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
