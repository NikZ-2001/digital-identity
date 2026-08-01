import ScrollReveal from "@/components/layout/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";

export default function YouTubePage() {
  return (
    <PageTransition>
      <main className="mx-auto max-w-3xl px-6 py-24">
        <ScrollReveal>
          <h1 className="gradient-text text-4xl font-semibold tracking-tight">YouTube</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            My YouTube channel is a place where I upload whatever inspires me at the moment. You'll find gameplay, cinematic edits, life moments, montages, cooking experiments, and anything else I enjoy creating.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            No fixed niche. Just things I genuinely like making.
          </p>

          <a href="https://youtube.com/@niksonandrewc6187" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105">
            <i className="bi bi-youtube" /> Visit my channel →
          </a>
        </ScrollReveal>
      </main>
    </PageTransition>
  );
}