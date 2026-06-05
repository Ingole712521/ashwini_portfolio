import { skills, skillsContent } from "@/data/skills";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function Skills() {
  return (
    <SectionWrapper id="skills" variant="muted">
      <SectionHeading
        label={skillsContent.label}
        title={skillsContent.title}
        description={skillsContent.description}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-medium text-card-foreground">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
