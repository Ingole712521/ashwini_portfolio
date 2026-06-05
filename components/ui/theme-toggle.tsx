"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { MoonIcon } from "@/components/ui/icons/moon-icon";
import { SunIcon } from "@/components/ui/icons/sun-icon";
import { Button } from "@/components/retroui/Button";
import {
  applyThemeWithTransition,
  getThemeToggleOrigin,
  isThemeTransitionActive,
} from "@/lib/theme-transition";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isThemeTransitionActive()) return;

    const isDark = resolvedTheme === "dark";
    const nextTheme = isDark ? "light" : "dark";
    const origin = getThemeToggleOrigin(buttonRef.current, {
      x: event.clientX,
      y: event.clientY,
    });

    void applyThemeWithTransition(setTheme, nextTheme, origin);
  };

  if (!mounted) {
    return (
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Toggle theme"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      ref={buttonRef}
      type="button"
      variant="outline"
      size="icon"
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-toggle-btn relative overflow-hidden"
    >
      {isDark ? (
        <SunIcon className="h-5 w-5 transition-transform duration-300" />
      ) : (
        <MoonIcon className="h-5 w-5 transition-transform duration-300" />
      )}
    </Button>
  );
}
