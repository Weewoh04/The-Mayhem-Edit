import Link from "next/link";
import { CollectionGrid } from "@/components/CollectionGrid";
import { EditorialBanner } from "@/components/EditorialBanner";
import { HeroCollage } from "@/components/HeroCollage";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SectionHeading } from "@/components/SectionHeading";
import { collections } from "@/data/collections";
import { getCollectionBySlug, sortCollections } from "@/lib/collections";
import { siteConfig } from "@/lib/site";

const categories = ["Gifts", "Outfits", "Home", "Beauty", "Kids", "Travel"];

export default function Home() {
  const trending = [
    "gifts-for-her-under-25",
    "the-everyday-mom-kit",
    "casual-summer-mom-outfit",
    "teacher-gifts-that-are-actually-useful"
  ].map((slug) => getCollectionBySlug(slug)).filter(Boolean);
  const everyday = getCollectionBySlug("the-everyday-mom-kit");
  const outfitSlugs = ["casual-summer-mom-outfit", "country-concert-outfit", "easy-date-night-outfit"];
  const giftSlugs = ["gifts-for-the-cozy-homebody", "gifts-for-busy-moms", "gifts-for-teenage-girls"];
  const latest = sortCollections(collections).slice(0, 6);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description
          })
        }}
      />
      <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose">Curated Amazon edits</p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[1.05] text-charcoal sm:text-6xl">
              Finds that make gifting, dressing, and everyday life easier.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-charcoal/75">
              Curated Amazon gift ideas, outfit formulas, and practical finds for real life-without the endless scrolling.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/gift-guides" className="bg-charcoal px-6 py-3 text-sm font-bold text-paper hover:bg-rose focus:outline-none focus:ring-2 focus:ring-rose">Browse Gift Guides</Link>
              <Link href="/outfits" className="border border-charcoal bg-paper px-6 py-3 text-sm font-bold text-charcoal hover:bg-cream focus:outline-none focus:ring-2 focus:ring-rose">Shop Outfit Ideas</Link>
            </div>
          </div>
          <HeroCollage />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Trending Edits" />
          <CollectionGrid collections={trending as typeof collections} />
        </div>
      </section>

      <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Shop by Category" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link key={category} href={category === "Outfits" ? "/outfits" : category === "Gifts" ? "/gift-guides" : "/everyday-finds"} className="border border-line bg-cream p-8 font-serif text-3xl font-semibold text-charcoal hover:border-rose focus:outline-none focus:ring-2 focus:ring-rose">
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <HeroCollage compact />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose">The Everyday Edit</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-charcoal">{everyday?.title}</h2>
            <p className="mt-4 text-lg leading-8 text-charcoal/75">
              The practical little things that make errands, appointments, school pickup, and busy days feel more put together.
            </p>
            <Link href="/collections/the-everyday-mom-kit" className="mt-6 inline-flex bg-charcoal px-6 py-3 text-sm font-bold text-paper hover:bg-rose">Shop the Collection</Link>
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Outfit Formulas" />
          <CollectionGrid collections={outfitSlugs.map((slug) => getCollectionBySlug(slug)).filter(Boolean) as typeof collections} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Gift-Giving Made Easier" />
          <CollectionGrid collections={giftSlugs.map((slug) => getCollectionBySlug(slug)).filter(Boolean) as typeof collections} />
        </div>
      </section>

      <EditorialBanner />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Latest Edits" />
          <CollectionGrid collections={latest} />
        </div>
      </section>

      <NewsletterSignup />
    </main>
  );
}
