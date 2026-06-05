import { experience, experienceContent } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/retroui/Badge";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

export function Experience() {
  return (
    <SectionWrapper id="experience" variant="muted">
      <SectionHeading
        label={experienceContent.label}
        title={experienceContent.title}
        description={experienceContent.description}
      />

      <div className="flex flex-col gap-6">
        {experience.map((job) => (
          <Card key={`${job.company}-${job.period}`} className="w-full p-6 sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <Text as="h3" className="text-card-foreground">
                  {job.company}
                </Text>
                <p className="mt-1 font-head text-primary">{job.role}</p>
              </div>
              <Badge variant="outline" className="w-fit shrink-0">
                {job.period}
              </Badge>
            </div>
            <ul className="mt-5 space-y-2.5">
              {job.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 border border-black bg-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
