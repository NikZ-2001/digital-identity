import { ContactLink } from "@/data/contact";

export default function ContactLinkCard({ label, value, href, icon }: ContactLink) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="glass-card group flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-purple via-accent-pink to-accent-blue text-lg text-white">
        <i className={`bi ${icon}`} />
      </div>
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-neutral-500">{value}</p>
      </div>
    </a>
  );
}