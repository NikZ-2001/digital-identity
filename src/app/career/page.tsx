import CareerCard from "@/components/ui-custom/CareerCard";
import ScrollReveal from "@/components/layout/ScrollReveal";
import { CAREER_ITEMS } from "@/data/career";

export default function CareerPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-semibold tracking-tight">Career</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          I build and run a few ventures of my own, handling everything from product to code.
        </p>
      </ScrollReveal>

      <div className="mt-12 flex flex-col gap-4">
        {CAREER_ITEMS.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 0.1}>
            <CareerCard {...item} />
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}