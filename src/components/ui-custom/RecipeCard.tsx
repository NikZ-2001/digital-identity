import Link from "next/link";
import { Recipe } from "@/data/recipes";

export default function RecipeCard({ slug, title, color, favorite }: Recipe) {
  return (
    <Link href={`/recipes/${slug}`} className="glass-card group relative block overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
      {favorite && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-accent-purple dark:bg-black/70">
          ★ Favorite
        </span>
      )}
      <div className={`flex h-36 items-center justify-center bg-gradient-to-br ${color}`}>
        <i className="bi bi-egg-fried text-3xl text-white/80" />
      </div>
      <div className="p-5">
        <h3 className="text-base font-medium">{title}</h3>
      </div>
    </Link>
  );
}