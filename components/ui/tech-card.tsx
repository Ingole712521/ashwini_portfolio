"use client";

import type { CSSProperties } from "react";
import { accentHex, getTechAccent } from "@/lib/tech-colors";
import { TechIcon } from "@/components/ui/tech-icon";
import { cn } from "@/lib/utils";

type TechCardProps = {
  name: string;
  icon: string;
  className?: string;
};

export function TechCard({ name, icon, className }: TechCardProps) {
  const accent = getTechAccent(icon);
  const color = accentHex[accent];

  return (
    <div
      data-cursor-hover
      data-cursor-type="tech"
      data-cursor-magnetic
      className={cn(
        "group flex h-full flex-col items-center justify-center gap-2 border-2 border-black bg-card p-3 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg sm:gap-2.5 sm:p-3.5",
        `tech-glow-${accent}`,
        className,
      )}
      style={
        {
          "--tech-color": color,
        } as CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `4px 4px 0 0 var(--border), 0 8px 24px color-mix(in srgb, ${color} 25%, transparent)`;
        e.currentTarget.style.borderColor = color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "";
        e.currentTarget.style.borderColor = "";
      }}
    >
      <TechIcon
        icon={icon}
        className="text-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--tech-color)]"
      />
      <span className="text-center text-[10px] font-head leading-tight text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-xs">
        {name}
      </span>
    </div>
  );
}
