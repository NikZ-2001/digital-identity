import { Project } from "@/data/projects";

export default function ProjectCard({ title, description, tags, liveHref, githubHref }: Project) {
  return (
    <div className="glass-card rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
            {tag}
          </span>
        ))}
      </div>

      {(liveHref || githubHref) && (
        <div className="mt-5 flex gap-3">
          {liveHref && (
            <a href={liveHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue px-4 py-2 text-xs font-medium text-white transition-transform hover:scale-105">
              Live Site →
            </a>
          )}
          {githubHref && (
            <a href={githubHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium transition-colors hover:border-accent-purple dark:border-neutral-700">
              <i className="bi bi-github" /> GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}