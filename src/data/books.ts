export interface Book {
  slug: string;
  title: string;
  author: string;
  coverColor: string;
  review: string;
  quotes: string[];
}

export const BOOKS: Book[] = [
  {
    slug: "zero-to-one",
    title: "Zero to One",
    author: "Peter Thiel",
    coverColor: "from-accent-purple to-accent-blue",
    review: "A sharp, contrarian take on building something genuinely new instead of competing in existing markets. Changed how I think about starting StationX and MENTASTIC.",
    quotes: [
      "Competition is for losers.",
      "The most contrarian thing of all is not to oppose the crowd but to think for yourself.",
    ],
  },
  {
    slug: "almanack-of-naval-ravikant",
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    coverColor: "from-accent-pink to-accent-purple",
    review: "Dense with ideas on wealth, happiness, and leverage. I keep coming back to the chapters on specific knowledge and building things that scale without you.",
    quotes: [
      "Seek wealth, not money or status.",
      "Play long-term games with long-term people.",
    ],
  },
  {
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    coverColor: "from-accent-blue to-accent-green",
    review: "Practical and immediately usable — the ideas around identity-based habits stuck with me most, especially applying it to gym consistency.",
    quotes: [
      "You do not rise to the level of your goals. You fall to the level of your systems.",
    ],
  },
];