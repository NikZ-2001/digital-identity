import SectionCard from "@/components/ui-custom/SectionCard";
import ScrollReveal from "@/components/layout/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";
import { LIFE_SECTIONS } from "@/data/sections";

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="mx-auto max-w-5xl px-6 py-24">
        <ScrollReveal>
          <h1 className="text-4xl font-semibold tracking-tight">About Me</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            I'm Nikson, a developer and founder based in Chennai, India. I build full-stack and frontend applications from scratch, and run a few ventures of my own — including MENTASTIC, a men's fashion brand, StationX, a print and delivery service, and Pink Heart Studio, a nail art and home nail service business.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            Outside of work, my life is made up of a lot of smaller things — explore them below.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {LIFE_SECTIONS.map((section, index) => (
            <ScrollReveal key={section.href} delay={index * 0.05}>
              <SectionCard {...section} />
            </ScrollReveal>
          ))}
        </div>
      </main>
    </PageTransition>
  );
}