import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryFilters } from "@/components/CategoryFilters";
import { CollectionGrid } from "@/components/CollectionGrid";
import { LoadMorePlaceholder } from "@/components/LoadMorePlaceholder";
import type { CategoryKey } from "@/data/categories";
import { getArchiveCategory } from "@/data/categories";
import { getCollectionsByCategory } from "@/lib/collections";
import { pageTitle } from "@/lib/seo";

export function archiveMetadata(key: CategoryKey): Metadata {
  const archive = getArchiveCategory(key);

  return {
    title: archive?.title,
    description: archive?.description,
    alternates: { canonical: archive?.href },
    openGraph: {
      title: pageTitle(archive?.title),
      description: archive?.description,
      url: archive?.href
    }
  };
}

export function ArchivePage({ categoryKey }: { categoryKey: CategoryKey }) {
  const archive = getArchiveCategory(categoryKey);
  const items = getCollectionsByCategory(categoryKey);

  if (!archive) return null;

  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs items={[{ label: archive.title }]} />
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose">Browse edits</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold text-charcoal">{archive.title}</h1>
          <p className="mt-4 text-lg leading-8 text-charcoal/75">{archive.description}</p>
        </header>
        <CategoryFilters filters={archive.filters} />
        <CollectionGrid collections={items} />
        <LoadMorePlaceholder />
      </div>
    </main>
  );
}
