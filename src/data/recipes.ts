export interface Recipe {
  slug: string;
  title: string;
  color: string;
  favorite?: boolean;
  ingredients: string[];
  steps: string[];
}

export const RECIPES: Recipe[] = [
  {
    slug: "chicken-biryani",
    title: "Chicken Biryani",
    color: "from-accent-pink to-accent-purple",
    favorite: true,
    ingredients: ["Basmati rice", "Chicken", "Yogurt", "Biryani masala", "Fried onions", "Mint & coriander"],
    steps: ["Marinate chicken in yogurt and spices.", "Par-cook rice separately.", "Layer chicken and rice, cook on dum for 20 minutes."],
  },
  {
    slug: "egg-fried-rice",
    title: "Egg Fried Rice",
    color: "from-accent-blue to-accent-green",
    ingredients: ["Cooked rice", "Eggs", "Spring onion", "Soy sauce", "Garlic"],
    steps: ["Scramble eggs, set aside.", "Sauté garlic and spring onion.", "Add rice, soy sauce, and eggs, toss together."],
  },
  {
    slug: "paneer-butter-masala",
    title: "Paneer Butter Masala",
    color: "from-accent-purple to-accent-blue",
    favorite: true,
    ingredients: ["Paneer", "Tomato puree", "Butter", "Cream", "Garam masala"],
    steps: ["Sauté tomato puree with spices.", "Add butter and cream.", "Add paneer cubes, simmer 5 minutes."],
  },
];