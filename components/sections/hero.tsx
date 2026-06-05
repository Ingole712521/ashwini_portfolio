import { siteConfig } from "@/config/site";
import { heroContent, heroSkills } from "@/data/hero";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24 pb-16"
    >
      <Card className="relative w-full max-w-5xl p-8 sm:p-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <Badge variant="surface">{heroContent.badge}</Badge>

            <div className="space-y-3">
              <Text as="h1" className="text-card-foreground">
                {heroContent.greeting}{" "}
                <span className="text-primary">{siteConfig.name}</span>
              </Text>
              <p className="font-head text-lg text-primary sm:text-xl">
                {siteConfig.role}
              </p>
              <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-4">
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
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                {heroContent.tagline}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
              <Button
                size="lg"
                variant="secondary"
                render={
                  <a
                    href={heroContent.resumeCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                {heroContent.resumeCta.label}
              </Button>
            </div>
          </div>

          <div className="border-t-2 border-black pt-8">
            <Text as="h3" className="mb-4 text-card-foreground">
              Skills & Abilities
            </Text>
            <ul className="grid gap-3 sm:grid-cols-2">
              {heroSkills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 border border-black bg-primary" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}
