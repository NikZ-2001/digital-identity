import OutfitCard from "@/components/ui-custom/OutfitCard";
import ScrollReveal from "@/components/layout/ScrollReveal";
import { OUTFITS } from "@/data/outfits";

export default function OutfitsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <ScrollReveal>
        <h1 className="gradient-text text-4xl font-semibold tracking-tight">Outfits</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          My style leans minimal and neutral-toned — clean fits and quality basics. Naturally tied to why I started MENTASTIC.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {OUTFITS.map((outfit, index) => (
          <ScrollReveal key={outfit.title} delay={index * 0.1}>
            <OutfitCard {...outfit} />
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}