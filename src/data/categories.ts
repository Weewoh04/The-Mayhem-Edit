export type CategoryKey = "gift-guides" | "outfits" | "everyday-finds" | "seasonal" | "shop-by-person";

export type ArchiveCategory = {
  key: CategoryKey;
  title: string;
  href: string;
  description: string;
  filters: string[];
};

export const archiveCategories: ArchiveCategory[] = [
  {
    key: "gift-guides",
    title: "Gift Guides",
    href: "/gift-guides",
    description: "Thoughtful edits for the people who are easy to love and oddly hard to shop for.",
    filters: ["For Her", "For Him", "Moms", "Teens", "Teachers", "Under $25", "Under $50"]
  },
  {
    key: "outfits",
    title: "Outfits",
    href: "/outfits",
    description: "Simple outfit formulas built from wearable pieces that can do more than one thing.",
    filters: ["Casual", "Work", "Date Night", "Travel", "Concert", "Seasonal", "Maternity Friendly"]
  },
  {
    key: "everyday-finds",
    title: "Everyday Finds",
    href: "/everyday-finds",
    description: "Small upgrades for home, car, desk, beauty bag, and the busy little corners of life.",
    filters: ["Home", "Kitchen", "Beauty", "Mom Life", "Office", "Travel", "Organization"]
  },
  {
    key: "seasonal",
    title: "Seasonal",
    href: "/seasonal",
    description: "Timely edits for holidays, school seasons, warm weekends, and cozy months.",
    filters: ["Spring", "Summer", "Fall", "Christmas", "Valentine's Day", "Mother's Day", "Back to School"]
  },
  {
    key: "shop-by-person",
    title: "Shop by Person",
    href: "/shop-by-person",
    description: "Start with who you are shopping for, then pick from polished, practical ideas.",
    filters: ["Women", "Men", "Moms", "Dads", "Kids", "Teens", "Teachers", "New Parents"]
  }
];

export function getArchiveCategory(key: CategoryKey) {
  return archiveCategories.find((category) => category.key === key);
}
