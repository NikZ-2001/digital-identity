import ProjectCard from "@/components/ui-custom/ProjectCard";
import ScrollReveal from "@/components/layout/ScrollReveal";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Websites and apps I've built, from e-commerce platforms to service booking sites.
        </p>
      </ScrollReveal>

      <div className="mt-12 flex flex-col gap-4">
        {PROJECTS.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 0.1}>
            <ProjectCard {...project} />
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}