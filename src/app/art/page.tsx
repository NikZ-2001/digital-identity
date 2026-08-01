import ScrollReveal from "@/components/layout/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";

const ARTWORKS = [
  { title: "Untitled Sketch 01", color: "from-accent-purple to-accent-pink" },
  { title: "Untitled Sketch 02", color: "from-accent-pink to-accent-blue" },
  { title: "Untitled Sketch 03", color: "from-accent-blue to-accent-green" },
  { title: "Untitled Sketch 04", color: "from-accent-green to-accent-purple" },
];

export default function ArtPage() {
  return (
    <PageTransition>
    <main className="mx-auto max-w-3xl px-6 py-24">
      <ScrollReveal>
        <h1 className="gradient-text text-4xl font-semibold tracking-tight">Art</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          I dabble in digital sketching and UI design as a creative outlet outside of client work.
        </p>
        <a href="https://www.artstation.com/niksonandrewc" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105">
          View my ArtStation →
        </a>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ARTWORKS.map((art) => (
            <div key={art.title} className={`flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br ${art.color} text-white/70`}>
              <i className="bi bi-image text-3xl" />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </main>
    </PageTransition>
  );
}