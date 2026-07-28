"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-black/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Nikson Andrew C
        </Link>

        <div className="flex items-center gap-4">
          <ul className="hidden gap-6 text-sm md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button onClick={() => setOpen(!open)} className="text-2xl md:hidden" aria-label="Toggle menu">
            <i className={open ? "bi bi-x-lg" : "bi bi-list"} />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-neutral-200 px-6 py-4 md:hidden dark:border-neutral-800">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)} className="block text-neutral-600 dark:text-neutral-400">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}