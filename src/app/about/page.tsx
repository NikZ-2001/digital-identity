import SectionCard from "@/components/ui-custom/SectionCard";
import { LIFE_SECTIONS } from "@/data/sections";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">About Me</h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
        I'm a developer and founder based in Chennai, India. Explore the different parts of my life below.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {LIFE_SECTIONS.map((section) => (
          <SectionCard key={section.href} {...section} />
        ))}
      </div>
    </main>
  );
}