export interface CareerItem {
  title: string;
  role: string;
  description: string;
  tags: string[];
}

export const CAREER_ITEMS: CareerItem[] = [
  {
    title: "MENTASTIC",
    role: "Founder & Developer",
    description: "A men's fashion brand based in Anna Nagar, Chennai. Built as a full-stack e-commerce platform with a storefront, admin dashboard, POS, and payment integration.",
    tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
  },
  {
    title: "StationX",
    role: "Founder & Developer",
    description: "A premium print and delivery service in Ambattur, Chennai. Built as a frontend website with service booking, pricing, and delivery area search.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Pink Heart Studio",
    role: "Founder & Developer",
    description: "A nail art and home nail service business in Chennai. Built with a booking system, gallery, and WhatsApp integration.",
    tags: ["Next.js", "Tailwind CSS v4"],
  },
];