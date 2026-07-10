import { collections, type Collection } from "@/data/collections";
import type { CategoryKey } from "@/data/categories";

export function sortCollections(items: Collection[] = collections) {
  return [...items].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export function getCollectionBySlug(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function getCollectionsByCategory(category: CategoryKey) {
  return sortCollections(collections.filter((collection) => collection.category === category));
}

export function getFeaturedCollections(limit?: number) {
  const featured = sortCollections(collections.filter((collection) => collection.featured));
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}

export function getRelatedCollections(collection: Collection, limit = 3) {
  const related = collection.relatedSlugs
    ?.map((slug) => getCollectionBySlug(slug))
    .filter((item): item is Collection => Boolean(item));

  if (related?.length) {
    return related.slice(0, limit);
  }

  return getCollectionsByCategory(collection.category)
    .filter((item) => item.slug !== collection.slug)
    .slice(0, limit);
}

export function getPreviousNextCollection(collection: Collection) {
  const sorted = sortCollections();
  const index = sorted.findIndex((item) => item.slug === collection.slug);

  return {
    previous: index > 0 ? sorted[index - 1] : undefined,
    next: index < sorted.length - 1 ? sorted[index + 1] : undefined
  };
}
