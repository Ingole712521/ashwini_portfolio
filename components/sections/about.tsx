import { aboutContent, aboutServices, aboutStory } from "@/data/about";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        label={aboutContent.label}
        title={aboutContent.title}
        description={aboutContent.description}
      />

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="text-xl font-semibold text-card-foreground">My Story</h3>
          {aboutStory.map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="text-xl font-semibold text-card-foreground">What I Do</h3>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            {aboutServices.map((service) => (
              <li key={service} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
