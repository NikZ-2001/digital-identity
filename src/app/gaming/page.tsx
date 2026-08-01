import ScrollReveal from "@/components/layout/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";

const CURRENTLY_PLAYING = [
  { name: "Valorant", status: "ID: Nikz2002" },
];

export default function GamingPage() {
  return (
    <PageTransition>
      <main className="mx-auto max-w-3xl px-6 py-24">
        <ScrollReveal>
          <h1 className="gradient-text text-4xl font-semibold tracking-tight">Gaming</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            If you're looking for someone to queue up with or just chat about games, let's connect.
          </p>

          <div className="mt-10">
            <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">Currently Playing</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CURRENTLY_PLAYING.map((game) => (
                <div key={game.name} className="glass-card flex items-center justify-between rounded-2xl p-5">
                  <span className="text-sm font-medium">{game.name}</span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">{game.status}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </main>
    </PageTransition>
  );
}