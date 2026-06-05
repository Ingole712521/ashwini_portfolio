import { experienceContent } from "@/data/experience";
import { ExperienceStack } from "@/components/ui/experience-stack";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      variant="muted"
      cursorZone="experience"
      reveal={false}
    >
      <SectionHeading
        label={experienceContent.label}
        title={experienceContent.title}
        description={experienceContent.description}
        badgeVariant="orange"
      />

      <ExperienceStack />
    </SectionWrapper>
  );
}
