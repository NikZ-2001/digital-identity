import RecipeCard from "@/components/ui-custom/RecipeCard";
import ScrollReveal from "@/components/layout/ScrollReveal";
import { RECIPES } from "@/data/recipes";
import PageTransition from "@/components/layout/PageTransition";

export default function RecipesPage() {
  return (
    <PageTransition>
    <main className="mx-auto max-w-3xl px-6 py-24">
      <ScrollReveal>
        <h1 className="gradient-text text-4xl font-semibold tracking-tight">Recipes</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Dishes I cook regularly — favorites are marked with a star.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {RECIPES.map((recipe, index) => (
          <ScrollReveal key={recipe.slug} delay={index * 0.1}>
            <RecipeCard {...recipe} />
          </ScrollReveal>
        ))}
      </div>
    </main>
    </PageTransition>
  );
}