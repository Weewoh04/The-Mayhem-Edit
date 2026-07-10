import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how The Mayhem Edit chooses gift ideas, outfit formulas, and everyday finds.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Breadcrumbs items={[{ label: "About" }]} />
        <h1 className="font-serif text-5xl font-semibold text-charcoal">About The Mayhem Edit</h1>
        <div className="mt-6 space-y-5 text-lg leading-8 text-charcoal/75">
          <p>The Mayhem Edit was created for anyone who loves finding the perfect gift, putting together an outfit, or discovering something that makes everyday life a little easier-but does not love scrolling through hundreds of options.</p>
          <p>Every edit is designed to give you a clear starting point, whether you are shopping for a teacher, planning a family-photo outfit, refreshing your kitchen, or trying to find a gift for someone who already has everything.</p>
        </div>
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["What You'll Find Here", "Gift guides, outfit formulas, home helpers, beauty finds, travel ideas, and seasonal edits."],
            ["How Products Are Chosen", "Each product is selected for usefulness, style, gifting potential, or how well it completes the theme."],
            ["How Affiliate Links Work", "Some links may earn a commission when you purchase, at no additional cost to you."]
          ].map(([title, text]) => (
            <div key={title} className="border border-line bg-paper p-6">
              <h2 className="font-serif text-2xl font-semibold text-charcoal">{title}</h2>
              <p className="mt-3 text-charcoal/70">{text}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
