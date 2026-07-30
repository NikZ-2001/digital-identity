import Link from "next/link";

interface SectionCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function SectionCard({ title, description, href, icon }: SectionCardProps) {
  return (
    <Link href={href} className="glass-card group block rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-purple via-accent-pink to-accent-blue text-xl text-white">
        <i className={`bi ${icon}`} />
      </div>
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm text-neutral-500">{description}</p>
    </Link>
  );
}