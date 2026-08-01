import ScrollReveal from "@/components/layout/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";

const GAMES = [
  { name: "Valorant", status: "Currently Playing" },
  { name: "Clash of Clans", status: "Ongoing" },
  { name: "Roblox", status: "Ongoing" },
  { name: "Story-driven games", status: "To be updated" },
];

export default function GamingPage() {
  return (
    <PageTransition>
    <main className="mx-auto max-w-3xl px-6 py-24">
      <ScrollReveal>
        <h1 className="gradient-text text-4xl font-semibold tracking-tight">Gaming</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          A mix of competitive, casual, and story-driven games. Artwork, screenshots, and stats coming soon.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {GAMES.map((game) => (
            <div key={game.name} className="glass-card flex items-center justify-between rounded-2xl p-5">
              <span className="text-sm font-medium">{game.name}</span>
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">{game.status}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </main>
    </PageTransition>
  );
}