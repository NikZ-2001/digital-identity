export interface Outfit {
  title: string;
  color: string;
  items: { name: string; href: string }[];
}

export const OUTFITS: Outfit[] = [
  {
    title: "Casual Streetwear",
    color: "from-accent-purple to-accent-pink",
    items: [
      { name: "Oversized Tee", href: "#" },
      { name: "Cargo Pants", href: "#" },
    ],
  },
  {
    title: "Smart Casual",
    color: "from-accent-blue to-accent-green",
    items: [
      { name: "Linen Shirt", href: "#" },
      { name: "Chinos", href: "#" },
    ],
  },
];