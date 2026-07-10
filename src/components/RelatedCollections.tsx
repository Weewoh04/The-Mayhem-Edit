import type { Collection } from "@/data/collections";
import { CollectionGrid } from "./CollectionGrid";
import { SectionHeading } from "./SectionHeading";

export function RelatedCollections({ collections }: { collections: Collection[] }) {
  return (
    <section className="mt-16">
      <SectionHeading title="Related Edits" />
      <CollectionGrid collections={collections} />
    </section>
  );
}
