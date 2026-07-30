"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card mt-6 flex flex-col gap-5 rounded-2xl p-6">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-lg border border-neutral-300 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent-purple dark:border-neutral-700" />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-lg border border-neutral-300 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent-purple dark:border-neutral-700" />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea id="message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-2 w-full resize-none rounded-lg border border-neutral-300 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent-purple dark:border-neutral-700" />
      </div>

      <button type="submit" disabled={status === "loading"} className="mt-2 w-fit rounded-full bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/20 transition-transform hover:scale-105 disabled:opacity-50">
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && <p className="text-sm text-green-600 dark:text-green-400">Message sent! I'll get back to you soon.</p>}
      {status === "error" && <p className="text-sm text-red-600 dark:text-red-400">Something went wrong. Please try again.</p>}
    </form>
  );
}