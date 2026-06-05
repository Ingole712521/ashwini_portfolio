import { siteConfig } from "@/config/site";
import { Button } from "@/components/retroui/Button";

export function Footer() {
  return (
    <footer className="relative z-10 border-t-2 border-black bg-background px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.
        </p>
        <Button
          variant="link"
          size="sm"
          render={<a href="#home" />}
        >
          Back to top ↑
        </Button>
      </div>
    </footer>
  );
}
