import ScrollReveal from "@/components/layout/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";

export default function CyclingPage() {
  return (
    <PageTransition>
    <main className="mx-auto max-w-3xl px-6 py-24">
      <ScrollReveal>
        <h1 className="gradient-text text-4xl font-semibold tracking-tight">Cycling</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          I haven't started cycling yet, but it's on my list — updates will be added here once I begin.
        </p>
      </ScrollReveal>
    </main>
    </PageTransition>
  );
}