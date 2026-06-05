"use client";

import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/retroui/Badge";
import { Text } from "@/components/retroui/Text";
import { cn } from "@/lib/utils";
import { useRef } from "react";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <div
      ref={ref}
      data-cursor-hover
      data-cursor-type="project"
      data-cursor-magnetic
      className={cn(
        "project-card-border group flex w-full flex-col border-2 border-black bg-card p-6 shadow-md transition-[transform,box-shadow] duration-300 ease-out hover:shadow-xl sm:p-8",
        className,
      )}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "6px 6px 0 0 var(--border), 0 16px 40px rgba(139, 92, 246, 0.15)";
      }}
    >
      <div className="mb-5 flex h-36 items-center justify-center border-2 border-black bg-secondary transition-colors duration-300 group-hover:bg-purple/10">
        <span className="font-head text-4xl text-purple transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
          {project.title.charAt(0)}
        </span>
      </div>
      <Text
        as="h3"
        className="text-xl font-bold tracking-tight text-card-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl"
      >
        {project.title}
      </Text>
      <p className="prose-body mt-4 flex-1 text-sm sm:text-base">
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="purple" size="sm">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
