export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveHref?: string;
  githubHref?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "MENTASTIC",
    description: "A full-stack men's fashion e-commerce platform I built end-to-end, with a storefront, admin dashboard, POS, and payment integration.",
    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
  },
  {
    title: "StationX",
    description: "My own print and delivery service — a frontend website with service booking, pricing, and delivery area search.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveHref: "https://stationx.vercel.app",
    githubHref: "https://github.com/NikZ-2001/stationx",
  },
  {
    title: "Pink Heart Studio",
    description: "A production-ready website I built for a nail art and home nail service business, with a gallery, booking form, and WhatsApp integration.",
    tags: ["Next.js", "Tailwind CSS v4"],
  },
];