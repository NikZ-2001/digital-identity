import ContactForm from "@/components/sections/ContactForm";
import ContactLinkCard from "@/components/ui-custom/ContactLinkCard";
import ScrollReveal from "@/components/layout/ScrollReveal";
import { CONTACT_LINKS } from "@/data/contact";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <ScrollReveal>
        <h1 className="gradient-text text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Have a question or want to work together? Reach me directly or send a message below.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CONTACT_LINKS.map((link) => (
            <ContactLinkCard key={link.label} {...link} />
          ))}
        </div>

        <ContactForm />
      </ScrollReveal>
    </main>
  );
}