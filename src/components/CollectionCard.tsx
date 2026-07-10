import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/data/collections";

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <article className="group border border-line bg-paper shadow-sm transition-shadow hover:shadow-editorial">
      <Link href={`/collections/${collection.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-rose">
        <div className="relative aspect-[4/3] overflow-hidden bg-cream">
          <Image
            src={collection.heroImage || "/images/collections/fallback.svg"}
            alt={`${collection.title} editorial collage`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose">{collection.subcategory ?? collection.category.replaceAll("-", " ")}</p>
          <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight text-charcoal">{collection.title}</h3>
          <p className="mt-3 text-sm leading-6 text-charcoal/70">{collection.excerpt}</p>
          <span className="mt-4 inline-flex items-center text-sm font-bold text-charcoal">
            View the Edit <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
