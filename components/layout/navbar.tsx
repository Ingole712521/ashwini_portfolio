"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/data/navigation";
import { MenuIcon } from "@/components/ui/icons/menu-icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/retroui/Button";
import { cn } from "@/lib/utils";

const panelClassName =
  "border-2 border-black bg-card shadow-md";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.35, rootMargin: "-20% 0px -55% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="pointer-events-none fixed top-5 right-0 left-0 z-50 px-4 sm:top-6 sm:px-6">
      <nav
        className={cn(
          "pointer-events-auto mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8",
          panelClassName,
        )}
      >
        <a
          href="#home"
          data-cursor-hover
          data-cursor-type="link"
          className="font-head text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          {siteConfig.shortName}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                data-cursor-type="link"
                data-active={active === id ? "true" : "false"}
                className="nav-link px-3 py-2 text-sm text-muted-foreground hover:text-purple"
              >
                {link.label}
              </a>
            );
          })}
          <div className="ml-2 border-l-2 border-black/10 pl-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <MenuIcon open={open} className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {open && (
        <div
          className={cn(
            "pointer-events-auto mx-auto mt-2 max-w-6xl px-5 py-4 md:hidden",
            panelClassName,
          )}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  data-cursor-hover
                  data-cursor-type="link"
                  data-active={active === id ? "true" : "false"}
                  className="nav-link px-3 py-2.5 text-sm text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
