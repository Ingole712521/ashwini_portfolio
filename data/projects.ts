import type { Project, SectionContent } from "@/types/portfolio";

export const projectsContent: SectionContent = {
  label: "Projects",
  title: "Things I've built",
  description:
    "A selection of projects that showcase my style, skills, and attention to detail.",
};

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A single-page portfolio with a soft pink theme, dark/light mode, and smooth section navigation.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Beauty Brand Landing Page",
    description:
      "An elegant landing page for a skincare brand with soft gradients, product cards, and a newsletter signup.",
    tags: ["React", "UI Design", "Responsive"],
  },
  {
    title: "Task Manager App",
    description:
      "A clean to-do app with categories, priorities, and a calming pink interface for everyday productivity.",
    tags: ["JavaScript", "Local Storage", "CSS"],
  },
];
