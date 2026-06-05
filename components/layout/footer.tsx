import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <a
          href="#home"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
