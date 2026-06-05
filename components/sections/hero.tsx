import type { CSSProperties } from "react";
import { siteConfig } from "@/config/site";
import { heroContent, heroTechStack } from "@/data/hero";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { ResumeModalTrigger } from "@/components/ui/resume-modal";
import { TechCard } from "@/components/ui/tech-card";

export function Hero() {
  return (
    <section
      id="home"
      data-cursor-zone="hero"
      className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-28 pb-20"
    >
      {/* Decorative watermarks */}
      <div
        className="hero-watermark pointer-events-none absolute top-[12%] right-[-5%] hidden text-[12rem] lg:block"
        aria-hidden
      >
        8+
      </div>
      <div
        className="hero-watermark pointer-events-none absolute bottom-[18%] left-[-8%] hidden text-[6rem] lg:block"
        aria-hidden
      >
        DEVELOPER
      </div>
      <div
        className="hero-watermark pointer-events-none absolute top-[35%] left-[40%] hidden text-[5rem] lg:block"
        aria-hidden
      >
        FULL STACK
      </div>

      {/* Floating shapes */}
      <div
        className="animate-float-shape pointer-events-none absolute top-[18%] right-[12%] hidden h-20 w-20 border-2 border-black bg-primary shadow-lg lg:block"
        style={{ "--rotate": "4deg" } as CSSProperties}
        aria-hidden
      />
      <div
        className="animate-float-shape pointer-events-none absolute bottom-[28%] left-[8%] hidden h-14 w-14 border-2 border-black bg-yellow shadow-md lg:block"
        style={
          { "--rotate": "-3deg", animationDelay: "2s" } as CSSProperties
        }
        aria-hidden
      />
      <div
        className="animate-float-shape pointer-events-none absolute top-[45%] right-[6%] hidden h-3 w-3 bg-cyan lg:block"
        style={{ animationDelay: "1s" } as CSSProperties}
        aria-hidden
      />

      <Card className="relative w-full max-w-5xl p-8 sm:p-12 lg:p-14">
        <div className="flex flex-col gap-10">
          <div className="flex w-full flex-col items-center gap-8 text-center sm:items-start sm:text-left">
            <div className="animate-hero-reveal stagger-1 flex w-full flex-wrap items-center justify-center gap-3 sm:justify-start">
              <Badge variant="orange">{heroContent.badge}</Badge>
              <Badge variant="outline" className="gap-2">
                <span
                  className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-orange"
                  aria-hidden
                />
                {heroContent.availability}
              </Badge>
            </div>

            <div className="w-full space-y-5">
              <p className="animate-hero-reveal stagger-2 font-mono text-sm tracking-[0.2em] text-muted-foreground uppercase">
                {heroContent.greeting}
              </p>
              <h1
                className="animate-hero-reveal stagger-3 text-gradient-hero text-balance font-head font-bold tracking-[-0.05em]"
                style={{
                  fontSize: "clamp(2.5rem, 10vw, 7rem)",
                  lineHeight: 0.95,
                }}
              >
                {siteConfig.name}
              </h1>
              <p className="animate-hero-reveal stagger-4 role-title text-xl text-foreground sm:text-2xl">
                {siteConfig.role}
              </p>
              <p className="animate-hero-reveal stagger-5 prose-body mx-auto max-w-3xl text-base sm:mx-0 sm:text-lg">
                {heroContent.tagline}
              </p>
              <p className="animate-hero-reveal stagger-5 mx-auto max-w-3xl border-l-4 border-primary py-1 pl-4 text-base leading-relaxed text-foreground sm:mx-0 sm:text-lg">
                {heroContent.availabilityNote}
              </p>
            </div>

            <div className="animate-hero-reveal stagger-6 flex w-full flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-start">
              <div data-cursor-magnetic data-cursor-type="cta">
                <Button
                  size="lg"
                  render={<a href={heroContent.primaryCta.href} />}
                >
                  {heroContent.primaryCta.label}
                </Button>
              </div>
              <Button
                size="lg"
                variant="outline"
                render={<a href={heroContent.secondaryCta.href} />}
              >
                {heroContent.secondaryCta.label}
              </Button>
              <ResumeModalTrigger size="lg" variant="secondary">
                {heroContent.resumeCta.label}
              </ResumeModalTrigger>
            </div>

            <div className="animate-hero-reveal stagger-7 flex flex-col items-center gap-1 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:gap-4 sm:text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                data-cursor-hover
                className="link-hover"
              >
                {siteConfig.email}
              </a>
              <span className="hidden text-border sm:inline" aria-hidden>
                /
              </span>
              <a
                href={`tel:${siteConfig.phone}`}
                data-cursor-hover
                className="link-hover"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <div
            className="animate-hero-reveal stagger-7 border-t-2 border-black pt-10"
            data-cursor-zone="tech"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="font-head text-lg font-semibold text-foreground">
                Tech Stack
              </h3>
              <Badge variant="cyan" size="sm">
                {heroTechStack.length} technologies
              </Badge>
            </div>
            <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8">
              {heroTechStack.map((tech) => (
                <li key={tech.name}>
                  <TechCard name={tech.name} icon={tech.icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}
