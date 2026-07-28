export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "MENTASTIC",
    description: "A full-stack men's fashion e-commerce platform with a storefront, admin dashboard, POS, and payment integration.",
    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
  },
  {
    title: "StationX",
    description: "A frontend website for a premium print and delivery service, with service booking, pricing, and delivery area search.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://stationx.vercel.app",
  },
  {
    title: "Pink Heart Studio",
    description: "A production-ready website for a nail art and home nail service business, with a gallery, booking form, and WhatsApp integration.",
    tags: ["Next.js", "Tailwind CSS v4"],
  },
];