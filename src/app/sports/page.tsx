import ScrollReveal from "@/components/layout/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";

const SPORTS = ["Badminton", "Basketball", "Volleyball", "Cricket"];

export default function SportsPage() {
  return (
    <PageTransition>
      <main className="mx-auto max-w-3xl px-6 py-24">
        <ScrollReveal>
          <h1 className="gradient-text text-4xl font-semibold tracking-tight">Sports</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            I enjoy playing sports.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            If you're looking for someone to play with, feel free to reach out.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {SPORTS.map((sport) => (
              <span key={sport} className="glass-card rounded-full px-5 py-2 text-sm">{sport}</span>
            ))}
          </div>
        </ScrollReveal>
      </main>
    </PageTransition>
  );
}