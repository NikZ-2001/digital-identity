import { Project } from "@/data/projects";

export default function ProjectCard({ title, description, tags, href }: Project) {
  const content = (
    <div className="rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-black dark:border-neutral-800 dark:hover:border-white">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}