import { projects, projectsContent } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Badge } from "@/components/retroui/Badge";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label={projectsContent.label}
        title={projectsContent.title}
        description={projectsContent.description}
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group flex w-full flex-col p-6 transition-all hover:translate-y-1 sm:p-8"
          >
            <div className="mb-4 flex h-32 items-center justify-center border-2 border-black bg-secondary">
              <span className="font-head text-3xl text-primary sm:text-4xl">
                {project.title.charAt(0)}
              </span>
            </div>
            <Text as="h3" className="text-card-foreground group-hover:text-primary">
              {project.title}
            </Text>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
