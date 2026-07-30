import { Outfit } from "@/data/outfits";

export default function OutfitCard({ title, color, items }: Outfit) {
  return (
    <div className="glass-card overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
      <div className={`flex h-48 items-center justify-center bg-gradient-to-br ${color}`}>
        <i className="bi bi-bag text-4xl text-white/80" />
      </div>
      <div className="p-5">
        <h3 className="text-base font-medium">{title}</h3>
        <div className="mt-3 flex flex-col gap-2">
          {items.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-lg bg-neutral-100 px-3 py-2 text-xs text-neutral-600 transition-colors hover:text-accent-purple dark:bg-neutral-900 dark:text-neutral-400">
              {item.name} <i className="bi bi-arrow-up-right" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}