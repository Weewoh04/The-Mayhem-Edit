import type { Collection } from "@/data/collections";
import { CollectionCard } from "./CollectionCard";
import { EmptyState } from "./EmptyState";

export function CollectionGrid({ collections }: { collections: Collection[] }) {
  if (collections.length === 0) return <EmptyState />;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {collections.map((collection) => (
        <CollectionCard key={collection.slug} collection={collection} />
      ))}
    </div>
  );
}
