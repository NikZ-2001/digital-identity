import ContactForm from "@/components/sections/ContactForm";
import ScrollReveal from "@/components/layout/ScrollReveal";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Have a question or want to work together? Send me a message below.
        </p>
        <ContactForm />
      </ScrollReveal>
    </main>
  );
}