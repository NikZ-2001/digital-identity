import BookCard from "@/components/ui-custom/BookCard";
import ScrollReveal from "@/components/layout/ScrollReveal";
import { BOOKS } from "@/data/books";
import PageTransition from "@/components/layout/PageTransition";

export default function BooksPage() {
  return (
    <PageTransition>

    
    <main className="mx-auto max-w-3xl px-6 py-24">
      <ScrollReveal>
        <h1 className="gradient-text text-4xl font-semibold tracking-tight">Books</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          I read mostly non-fiction — startups, product, and habit-building. Tap a book to see my thoughts.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {BOOKS.map((book, index) => (
          <ScrollReveal key={book.slug} delay={index * 0.1}>
            <BookCard {...book} />
          </ScrollReveal>
        ))}
      </div>
    </main>
    </PageTransition>
  );
}