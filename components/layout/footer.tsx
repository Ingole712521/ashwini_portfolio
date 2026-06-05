import { siteConfig } from "@/config/site";
import { Button } from "@/components/retroui/Button";

export function Footer() {
  return (
    <footer className="border-t-2 border-black px-6 py-8">
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
