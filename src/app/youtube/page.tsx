import ScrollReveal from "@/components/layout/ScrollReveal";
import PageTransition from "@/components/layout/PageTransition";

const CONTENT_PLANS = [
  { title: "Work & Career", icon: "bi-briefcase" },
  { title: "Outfits & Fashion", icon: "bi-bag" },
  { title: "Recipes & Cooking", icon: "bi-egg-fried" },
  { title: "Projects & Development", icon: "bi-code-slash" },
  { title: "Lifestyle", icon: "bi-sun" },
  { title: "Productivity", icon: "bi-check2-square" },
  { title: "Behind the Scenes", icon: "bi-camera-reels" },
];

export default function YouTubePage() {
  return (
    <PageTransition>
    <main className="mx-auto max-w-3xl px-6 py-24">
      <ScrollReveal>
        <h1 className="gradient-text text-4xl font-semibold tracking-tight">YouTube</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          My content hub — coming soon. Here's what I'm planning to create.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CONTENT_PLANS.map((plan) => (
            <div key={plan.title} className="glass-card flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-purple via-accent-pink to-accent-blue text-white">
                <i className={`bi ${plan.icon}`} />
              </div>
              <span className="text-sm font-medium">{plan.title}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </main>
    </PageTransition>
  );
}