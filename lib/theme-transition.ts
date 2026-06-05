type Theme = "light" | "dark";

type ThemeOrigin = {
  x: number;
  y: number;
};

const THEME_STORAGE_KEY = "theme";
const REVEAL_DURATION_MS = 1000;

let themeTransitionActive = false;

function applyThemeClass(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function syncThemeStorage(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore storage errors */
  }
}

function getRevealRadius(x: number, y: number) {
  return (
    Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    ) + 24
  );
}

function setRevealVars(x: number, y: number, radius: number) {
  const root = document.documentElement;
  root.style.setProperty("--theme-reveal-x", `${x}px`);
  root.style.setProperty("--theme-reveal-y", `${y}px`);
  root.style.setProperty("--theme-reveal-radius", `${radius}px`);
}

function clearRevealVars() {
  const root = document.documentElement;
  root.style.removeProperty("--theme-reveal-x");
  root.style.removeProperty("--theme-reveal-y");
  root.style.removeProperty("--theme-reveal-radius");
  root.classList.remove("theme-revealing");
}

function animateOldLayerOut(
  x: number,
  y: number,
  endRadius: number,
) {
  const root = document.documentElement;

  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      root
        .animate(
          {
            clipPath: [
              `circle(${endRadius}px at ${x}px ${y}px)`,
              `circle(0px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: REVEAL_DURATION_MS,
            easing: "ease-in",
            fill: "forwards",
            pseudoElement: "::view-transition-old(root)",
          },
        )
        .finished.then(() => resolve())
        .catch(() => resolve());
    });
  });
}

/**
 * Peel the old theme into the toggle button. The new theme sits underneath as
 * a real browser snapshot — no DOM clone.
 */
function animateViewTransitionReveal(
  x: number,
  y: number,
  onCommitDom: () => void,
  onCommitReact: () => void,
) {
  const endRadius = getRevealRadius(x, y);
  const root = document.documentElement;

  root.classList.add("theme-revealing");
  setRevealVars(x, y, endRadius);

  const transition = document.startViewTransition(() => {
    onCommitDom();
    void root.offsetHeight;
  });

  const peelAnimation = transition.ready.then(() =>
    animateOldLayerOut(x, y, endRadius),
  );

  return Promise.all([peelAnimation, transition.finished])
    .then(() => {
      onCommitReact();
    })
    .finally(() => {
      themeTransitionActive = false;
      clearRevealVars();
    });
}

export function isThemeTransitionActive() {
  return themeTransitionActive;
}

export function applyThemeWithTransition(
  setTheme: (theme: Theme) => void,
  theme: Theme,
  origin: ThemeOrigin,
) {
  if (themeTransitionActive) {
    return Promise.resolve();
  }

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const commitThemeDom = () => {
    applyThemeClass(theme);
    syncThemeStorage(theme);
  };

  const commitThemeFull = () => {
    commitThemeDom();
    setTheme(theme);
  };

  if (prefersReduced) {
    commitThemeFull();
    return Promise.resolve();
  }

  const { x, y } = origin;
  const supportsViewTransition =
    typeof document.startViewTransition === "function";

  if (!supportsViewTransition) {
    commitThemeFull();
    return Promise.resolve();
  }

  themeTransitionActive = true;

  return animateViewTransitionReveal(x, y, commitThemeDom, () =>
    setTheme(theme),
  ).catch(() => {
    commitThemeFull();
    themeTransitionActive = false;
    clearRevealVars();
  });
}

export function getThemeToggleOrigin(
  element: HTMLElement | null,
  fallback: ThemeOrigin,
): ThemeOrigin {
  if (!element) return fallback;

  const rect = element.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}
