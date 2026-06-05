"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { experience } from "@/data/experience";
import { Badge } from "@/components/retroui/Badge";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

/** How much of the card below stays visible (0.2 = next card covers 80%) */
const PEEK_RATIO = 0.2;

function getNavOffset() {
  return window.matchMedia("(min-width: 640px)").matches ? 120 : 112;
}

export function ExperienceStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [stickyTops, setStickyTops] = useState<number[]>([]);

  const measure = useCallback(() => {
    const navOffset = getNavOffset();
    let cumulativePeek = 0;
    const tops: number[] = [];

    itemRefs.current.forEach((el, i) => {
      if (!el) return;

      tops[i] = navOffset + cumulativePeek;

      const card = el.querySelector<HTMLElement>("[data-stack-card]");
      const height = card?.offsetHeight ?? 0;
      cumulativePeek += height * PEEK_RATIO;
    });

    setStickyTops(tops);
  }, []);

  useEffect(() => {
    measure();
    document.fonts?.ready.then(measure).catch(() => undefined);

    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return (
    <div ref={containerRef} className="experience-stack mx-auto max-w-4xl">
      {experience.map((job, i) => (
        <div
          key={`${job.company}-${job.period}`}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="experience-stack__item"
          style={
            {
              top: stickyTops[i] ?? getNavOffset(),
              zIndex: i + 1,
            } as CSSProperties
          }
        >
          <Card
            data-stack-card
            className="w-full p-5 sm:p-7 lg:p-9"
            data-cursor-hover
            data-cursor-type="card"
            data-cursor-magnetic
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <Text as="h3" className="text-card-foreground">
                  {job.company}
                </Text>
                <p className="role-title mt-2 text-base text-primary sm:text-lg">
                  {job.role}
                </p>
              </div>
              <Badge variant="orange" className="w-fit shrink-0">
                {job.period}
              </Badge>
            </div>
            <ul className="mt-6 space-y-3">
              {job.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="prose-body flex items-start gap-3 text-sm sm:text-base"
                >
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-orange" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      ))}
      <div className="experience-stack__spacer" aria-hidden />
    </div>
  );
}
