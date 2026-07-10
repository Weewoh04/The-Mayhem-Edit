import Link from "next/link";

export function EditorialBanner() {
  return (
    <section className="bg-sage px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-charcoal/70">Seasonal</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-charcoal sm:text-5xl">What Everyone Is Shopping This Season</h2>
        </div>
        <Link href="/seasonal" className="justify-self-start bg-charcoal px-6 py-3 text-sm font-bold text-paper hover:bg-rose focus:outline-none focus:ring-2 focus:ring-charcoal md:justify-self-end">
          Explore Seasonal Finds
        </Link>
      </div>
    </section>
  );
}
