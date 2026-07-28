"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-sm uppercase tracking-widest text-neutral-500"
      >
        Chennai, India
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl font-semibold tracking-tight sm:text-7xl"
      >
        Nikson Andrew C
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-xl text-base text-neutral-500 sm:text-lg"
      >
        Builder, founder, and creator. This is my digital identity — a space
        to explore what I make, what I do, and what I care about.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex gap-4"
      >
        <Link
          href="/about"
          className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
        >
          About Me
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium transition-colors hover:border-black dark:border-neutral-700 dark:hover:border-white"
        >
          Contact
        </Link>
      </motion.div>
    </section>
  );
}