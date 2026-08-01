import ScrollReveal from "@/components/layout/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";

export default function GymPage() {
  return (
    <PageTransition>
    <main className="mx-auto max-w-3xl px-6 py-24">
      <ScrollReveal>
        <h1 className="gradient-text text-4xl font-semibold tracking-tight">Gym</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          My fitness journey — coming soon.
        </p>
      </ScrollReveal>
    </main>
    </PageTransition>
  );
}