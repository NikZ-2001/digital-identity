import ScrollReveal from "@/components/layout/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";

export default function StationXPage() {
  return (
    <PageTransition>
    <main className="mx-auto max-w-3xl px-6 py-24">
      <ScrollReveal>
        <p className="text-sm uppercase tracking-widest text-neutral-500">Ambattur, Chennai</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">StationX</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          A premium print and delivery service I founded and built. StationX handles everything from document printing to delivery, with a focus on speed and reliability for the local Ambattur area.
        </p>
        <a href="https://stationx.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black">
          Visit StationX →
        </a>
      </ScrollReveal>
    </main>
    </PageTransition>
  );
}