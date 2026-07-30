import TimelineItem from "@/components/ui-custom/TimelineItem";
import ScrollReveal from "@/components/layout/ScrollReveal";
import { CAREER_ITEMS } from "@/data/career";

export default function CareerPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <ScrollReveal>
        <h1 className="gradient-text text-4xl font-semibold tracking-tight">Career</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          My professional journey — from customer experience to building my own ventures.
        </p>
      </ScrollReveal>

      <div className="relative mt-12 flex flex-col gap-8 border-l border-neutral-200 dark:border-neutral-800">
        {CAREER_ITEMS.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 0.1}>
            <TimelineItem {...item} />
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}