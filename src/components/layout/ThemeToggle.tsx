"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-sm transition-all hover:scale-110 hover:border-accent-purple dark:border-neutral-700" aria-label="Toggle theme">
      <i className={theme === "dark" ? "bi bi-sun" : "bi bi-moon-stars"} />
    </button>
  );
}