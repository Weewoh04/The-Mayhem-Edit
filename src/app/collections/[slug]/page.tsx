import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PinterestShareButton } from "@/components/PinterestShareButton";
import { ProductGrid } from "@/components/ProductGrid";
import { RelatedCollections } from "@/components/RelatedCollections";
import { archiveCategories } from "@/data/categories";
import { collections } from "@/data/collections";
import { getCollectionBySlug, getPreviousNextCollection, getRelatedCollections } from "@/lib/collections";
import { absoluteUrl, pageTitle } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) return {};

  return {
    title: collection.title,
    description: collection.excerpt,
    alternates: { canonical: `/collections/${collection.slug}` },
    openGraph: {
      title: pageTitle(collection.title),
      description: collection.excerpt,
      url: `/collections/${collection.slug}`,
      images: [collection.heroImage]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle(collection.title),
      description: collection.excerpt,
      images: [collection.heroImage]
    }
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) notFound();

  const archive = archiveCategories.find((item) => item.key === collection.category);
  const related = getRelatedCollections(collection);
  const { previous, next } = getPreviousNextCollection(collection);
  const pageUrl = absoluteUrl(`/collections/${collection.slug}`);

  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: archive?.title, item: absoluteUrl(archive?.href ?? "/") },
                { "@type": "ListItem", position: 3, name: collection.title, item: pageUrl }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: collection.title,
              itemListElement: collection.products.map((product, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: product.name,
                url: product.affiliateUrl
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: collection.title,
              description: collection.excerpt,
              image: absoluteUrl(collection.heroImage),
              datePublished: collection.publishedAt,
              mainEntityOfPage: pageUrl
            }
          ])
        }}
      />
      <article className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ href: archive?.href, label: archive?.title ?? "Collections" }, { label: collection.title }]} />
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose">{collection.subcategory ?? archive?.title}</p>
            <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight text-charcoal">{collection.title}</h1>
            <p className="mt-4 text-lg leading-8 text-charcoal/75">{collection.introduction}</p>
            <div className="mt-6 grid gap-4">
              <AffiliateDisclosure />
              <PinterestShareButton title={collection.title} image={collection.pinterestImage} />
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-line bg-cream shadow-editorial">
            <Image src={collection.heroImage || "/images/collections/fallback.svg"} alt={`${collection.title} hero collage`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-serif text-4xl font-semibold text-charcoal">Shop the Edit</h2>
          <div className="mt-8">
            <ProductGrid products={collection.products} />
          </div>
        </section>

        <section className="mt-16 border-y border-line bg-paper px-6 py-10">
          <h2 className="font-serif text-3xl font-semibold text-charcoal">Why These Made the Edit</h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-charcoal/75">{collection.editorialNote}</p>
        </section>

        <RelatedCollections collections={related} />

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-center">
          <div className="relative aspect-[2/3] overflow-hidden border border-line bg-cream shadow-editorial">
            <Image src={collection.pinterestImage || collection.heroImage || "/images/pinterest/fallback.svg"} alt={`${collection.title} Pinterest graphic`} fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-charcoal">Pin this edit for later</h2>
            <p className="mt-3 text-charcoal/75">Save the guide before your next shopping scroll.</p>
            <div className="mt-5"><PinterestShareButton title={collection.title} image={collection.pinterestImage} /></div>
          </div>
        </section>

        <div className="mt-12">
          <AffiliateDisclosure reminder />
        </div>

        <nav className="mt-12 grid gap-4 border-t border-line pt-8 sm:grid-cols-2" aria-label="Collection navigation">
          {previous ? <Link href={`/collections/${previous.slug}`} className="border border-line bg-paper p-4 hover:bg-cream">Previous: {previous.title}</Link> : <span />}
          {next ? <Link href={`/collections/${next.slug}`} className="border border-line bg-paper p-4 text-right hover:bg-cream">Next: {next.title}</Link> : <span />}
        </nav>
      </article>
    </main>
  );
}
