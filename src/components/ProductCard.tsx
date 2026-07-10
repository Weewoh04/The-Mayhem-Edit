import Image from "next/image";
import type { Product } from "@/data/collections";
import { affiliateLinkProps, getAffiliateUrl } from "@/lib/affiliate";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="border border-line bg-paper p-4 shadow-sm">
      <div className="relative aspect-square overflow-hidden bg-cream">
        <Image
          src={product.image || "/images/products/fallback.svg"}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <p className="font-serif text-3xl text-rose">{String(index + 1).padStart(2, "0")}</p>
        {product.badge ? <span className="border border-line bg-cream px-2 py-1 text-xs font-bold uppercase tracking-wide text-charcoal">{product.badge}</span> : null}
      </div>
      <h3 className="mt-3 font-serif text-xl font-semibold text-charcoal">{product.name}</h3>
      <p className="mt-2 text-sm leading-6 text-charcoal/70">{product.shortDescription}</p>
      <a
        href={getAffiliateUrl(product.affiliateUrl)}
        {...affiliateLinkProps}
        className="mt-4 inline-flex w-full items-center justify-center bg-charcoal px-4 py-3 text-sm font-bold text-paper hover:bg-rose focus:outline-none focus:ring-2 focus:ring-rose"
      >
        View on Amazon
      </a>
    </article>
  );
}
