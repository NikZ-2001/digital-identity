import { CareerItem } from "@/data/career";

export default function CareerCard({ title, role, description, tags }: CareerItem) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-xl font-medium">{title}</h3>
        <span className="text-sm text-neutral-500">{role}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}