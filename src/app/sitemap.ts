import type { MetadataRoute } from "next";
import { archiveCategories } from "@/data/categories";
import { collections } from "@/data/collections";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about", "/affiliate-disclosure", "/privacy-policy", "/contact", ...archiveCategories.map((item) => item.href)];
  const collectionRoutes = collections.map((collection) => `/collections/${collection.slug}`);

  return [...staticRoutes, ...collectionRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date()
  }));
}
