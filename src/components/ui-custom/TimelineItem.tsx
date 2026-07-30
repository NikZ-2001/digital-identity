import { CareerItem } from "@/data/career";

export default function TimelineItem({ title, role, period, description, tags, current }: CareerItem) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-gradient-to-br from-accent-purple via-accent-pink to-accent-blue" />
      {current && (
        <span className="absolute left-0 top-1.5 h-4 w-4 animate-ping rounded-full bg-accent-purple opacity-50" />
      )}
      <div className="glass-card rounded-2xl p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl font-medium">{title}</h3>
          <span className="text-xs uppercase tracking-widest text-neutral-500">{period}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-accent-purple">{role}</p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}