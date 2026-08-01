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
            By profession, I work in customer experience, but outside work I'm always exploring something new. I enjoy building websites, growing my business StationX, playing games, reading books, working out, trying new recipes, and learning skills one step at a time.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
            This website is a collection of the things I'm passionate about. If we share an interest, feel free to reach out. I'd love to connect.
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