import { projects, projectsContent } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label={projectsContent.label}
        title={projectsContent.title}
        description={projectsContent.description}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-secondary">
              <span className="text-4xl font-bold text-primary/40">
                {project.title.charAt(0)}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
