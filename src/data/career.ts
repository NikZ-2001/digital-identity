export interface CareerItem {
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  current?: boolean;
}

export const CAREER_ITEMS: CareerItem[] = [
  {
    title: "NatWest",
    role: "Customer Experience Associate",
    period: "August 2022 — Present",
    description: "Working in customer experience, handling client interactions and building strong communication and problem-solving skills alongside my development work.",
    tags: ["Customer Experience", "Banking", "Communication"],
    current: true,
  },
  {
    title: "StationX",
    role: "Founder",
    period: "May 2026 — Present",
    description: "A premium print and delivery service in Ambattur, Chennai that I founded and built myself. My dream project — the long-term goal is to grow it into a well-known brand.",
    tags: ["Founder", "Print & Delivery"],
    current: true,
  },
];