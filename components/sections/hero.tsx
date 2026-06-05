import { siteConfig } from "@/config/site";
import { heroContent, heroTechStack } from "@/data/hero";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { ResumeModalTrigger } from "@/components/ui/resume-modal";
import { TechIcon } from "@/components/ui/tech-icon";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24 pb-16"
    >
      <Card className="relative w-full max-w-5xl p-8 sm:p-12">
        <div className="flex flex-col gap-8">
          <div className="flex w-full flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:justify-start">
              <Badge variant="surface">{heroContent.badge}</Badge>
              <Badge variant="outline">{heroContent.availability}</Badge>
            </div>

            <div className="w-full space-y-3">
              <Text as="h1" className="text-card-foreground">
                {heroContent.greeting}{" "}
                <span className="text-primary">{siteConfig.name}</span>
              </Text>
              <p className="font-head text-lg text-primary sm:text-xl">
                {siteConfig.role}
              </p>
              <div className="flex flex-col items-center gap-1 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {siteConfig.email}
                </a>
                <span className="hidden sm:inline">|</span>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-primary"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground sm:mx-0 sm:text-lg">
                {heroContent.tagline}
              </p>
              <p className="mx-auto max-w-3xl text-base leading-7 text-primary sm:mx-0 sm:text-lg">
                {heroContent.availabilityNote}
              </p>
            </div>

            <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-start">
              <Button
                size="lg"
                render={<a href={heroContent.primaryCta.href} />}
              >
                {heroContent.primaryCta.label}
              </Button>
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
          </div>

          <div className="border-t-2 border-black pt-8">
            <Text as="h3" className="mb-5 text-card-foreground">
              Tech Stack
            </Text>
            <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8">
              {heroTechStack.map((tech) => (
                <li key={tech.name}>
                  <div className="flex h-full flex-col items-center justify-center gap-2 border-2 border-black bg-background p-3 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-sm">
                    <TechIcon icon={tech.icon} className="text-foreground" />
                    <span className="text-center text-[10px] font-head leading-tight text-muted-foreground sm:text-xs">
                      {tech.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}
