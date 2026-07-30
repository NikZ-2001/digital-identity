import { notFound } from "next/navigation";
import Link from "next/link";
import { RECIPES } from "@/data/recipes";
import ScrollReveal from "@/components/layout/ScrollReveal";

export default async function RecipeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = RECIPES.find((r) => r.slug === slug);

  if (!recipe) notFound();

  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <ScrollReveal>
        <Link href="/recipes" className="text-sm text-neutral-500 hover:text-accent-purple">← Back to Recipes</Link>

        <div className={`mt-6 flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br ${recipe.color}`}>
          <i className="bi bi-egg-fried text-5xl text-white/80" />
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight">{recipe.title}</h1>
        {recipe.favorite && <p className="mt-1 text-sm text-accent-purple">★ One of my favorites</p>}

        <div className="glass-card mt-8 rounded-2xl p-6">
          <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">Ingredients</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {recipe.ingredients.map((ing) => (
              <li key={ing} className="text-sm text-neutral-700 dark:text-neutral-300">• {ing}</li>
            ))}
          </ul>
        </div>

        <div className="glass-card mt-6 rounded-2xl p-6">
          <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">Steps</h2>
          <ol className="mt-3 flex flex-col gap-3">
            {recipe.steps.map((step, i) => (
              <li key={i} className="text-sm text-neutral-700 dark:text-neutral-300">
                <span className="font-medium text-accent-purple">{i + 1}.</span> {step}
              </li>
            ))}
          </ol>
        </div>
      </ScrollReveal>
    </main>
  );
}