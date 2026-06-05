"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/data/navigation";
import { MenuIcon } from "@/components/ui/icons/menu-icon";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/retroui/Button";
import { Text } from "@/components/retroui/Text";
import { cn } from "@/lib/utils";

const floatingPanelClassName =
  "border-2 border-black bg-card/95 shadow-md backdrop-blur-md";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed top-4 right-0 left-0 z-50 px-4 sm:top-6 sm:px-6">
      <nav
        className={cn(
          "pointer-events-auto mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6",
          floatingPanelClassName,
        )}
      >
        <a href="#home" className="transition-colors hover:text-primary">
          <Text as="h4" className="text-foreground">
            {siteConfig.shortName}
          </Text>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              render={<a href={link.href} />}
            >
              {link.label}
            </Button>
          ))}
          <ThemeToggle />
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
            "pointer-events-auto mx-auto mt-2 max-w-6xl px-4 py-4 md:hidden",
            floatingPanelClassName,
          )}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                className="justify-start"
                render={<a href={link.href} onClick={() => setOpen(false)} />}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
