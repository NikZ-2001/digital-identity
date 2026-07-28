import Link from "next/link";

interface SectionCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function SectionCard({ title, description, href, icon }: SectionCardProps) {
  return (
    <Link href={href} className="group rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-black dark:border-neutral-800 dark:hover:border-white">
      <i className={`bi ${icon} text-2xl text-neutral-500 transition-colors group-hover:text-black dark:group-hover:text-white`} />
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm text-neutral-500">{description}</p>
    </Link>
  );
}