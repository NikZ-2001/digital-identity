import { notFound } from "next/navigation";
import Link from "next/link";
import { BOOKS } from "@/data/books";
import ScrollReveal from "@/components/layout/ScrollReveal";

export default async function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = BOOKS.find((b) => b.slug === slug);

  if (!book) notFound();

  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <ScrollReveal>
        <Link href="/books" className="text-sm text-neutral-500 hover:text-accent-purple">← Back to Books</Link>

        <div className={`mt-6 flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br ${book.coverColor}`}>
          <i className="bi bi-book text-6xl text-white/80" />
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight">{book.title}</h1>
        <p className="mt-1 text-sm text-neutral-500">{book.author}</p>

        <div className="glass-card mt-8 rounded-2xl p-6">
          <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">My Review</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{book.review}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">Favorite Quotes</h2>
          {book.quotes.map((quote, i) => (
            <blockquote key={i} className="glass-card rounded-2xl border-l-4 border-accent-purple p-4 text-sm italic text-neutral-600 dark:text-neutral-400">
              "{quote}"
            </blockquote>
          ))}
        </div>
      </ScrollReveal>
    </main>
  );
}