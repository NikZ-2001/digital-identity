import Link from "next/link";
import { Book } from "@/data/books";

export default function BookCard({ slug, title, author, coverColor }: Book) {
  return (
    <Link href={`/books/${slug}`} className="glass-card group block overflow-hidden rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
      <div className={`flex h-40 items-center justify-center bg-gradient-to-br ${coverColor}`}>
        <i className="bi bi-book text-4xl text-white/80" />
      </div>
      <div className="p-5">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="mt-1 text-sm text-neutral-500">{author}</p>
      </div>
    </Link>
  );
}