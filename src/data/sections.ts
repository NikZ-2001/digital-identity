export interface LifeSection {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const LIFE_SECTIONS: LifeSection[] = [
  { title: "StationX", description: "Print and delivery service I run.", href: "/stationx", icon: "bi-shop" },
  { title: "Projects", description: "Websites and apps I've built.", href: "/projects", icon: "bi-code-slash" },
  { title: "YouTube", description: "My upcoming content hub.", href: "/youtube", icon: "bi-youtube" },
  { title: "Gaming", description: "What I play and enjoy.", href: "/gaming", icon: "bi-controller" },
  { title: "Books", description: "What I'm reading.", href: "/books", icon: "bi-book" },
  { title: "Gym", description: "My fitness journey.", href: "/gym", icon: "bi-heart-pulse" },
  { title: "Sports", description: "Sports I enjoy playing.", href: "/sports", icon: "bi-trophy" },
  { title: "Cycling", description: "Rides and routes.", href: "/cycling", icon: "bi-bicycle" },
  { title: "Recipes", description: "Food I cook.", href: "/recipes", icon: "bi-egg-fried" },
  { title: "Outfits", description: "My style.", href: "/outfits", icon: "bi-bag" },
  { title: "Gadgets", description: "Tech I use.", href: "/gadgets", icon: "bi-laptop" },
  { title: "Art", description: "Creative work.", href: "/art", icon: "bi-palette" },
];