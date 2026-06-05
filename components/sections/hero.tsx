import { siteConfig } from "@/config/site";
import { heroContent } from "@/data/hero";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="pointer-events-none absolute top-32 right-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-lg shadow-primary/10 sm:p-14">
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            {heroContent.badge}
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-card-foreground sm:text-6xl">
              {heroContent.greeting}{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {heroContent.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={heroContent.primaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
            >
              {heroContent.primaryCta.label}
            </a>
            <a
              href={heroContent.secondaryCta.href}
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
