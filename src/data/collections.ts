import type { CategoryKey } from "./categories";

export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  affiliateUrl: string;
  badge?: string;
};

export type Collection = {
  slug: string;
  title: string;
  category: CategoryKey;
  subcategory?: string;
  excerpt: string;
  introduction: string;
  heroImage: string;
  pinterestImage?: string;
  editorialNote?: string;
  featured?: boolean;
  publishedAt: string;
  products: Product[];
  relatedSlugs?: string[];
};

const productNames = ["Cup", "Tote", "Sunnies", "Lip Tint", "Notebook", "Bottle", "Headphones", "Pouch"];

function products(seed: string, count = 6): Product[] {
  return productNames.slice(0, count).map((name, index) => ({
    id: `${seed}-${index + 1}`,
    name: `${name} Pick`,
    shortDescription: "A useful, good-looking option that helps the whole edit feel more finished.",
    image: `/images/products/${(index % 8) + 1}.svg`,
    // PASTE YOUR AMAZON AFFILIATE LINK HERE.
    affiliateUrl: "https://www.amazon.com/?tag=yourtag-20",
    badge: index === 0 ? "Editor Pick" : index === 1 ? "Great Gift" : index === 2 ? "Under $25" : undefined
  }));
}

// How to add a new collection:
// 1. Copy one object below, paste it near a similar category, and change the slug to lowercase words with hyphens.
// 2. Change title, excerpt, introduction, category, subcategory, and editorialNote.
// 3. Paste approved image paths or URLs into heroImage, pinterestImage, and product image fields.
// 4. Paste Amazon affiliate links into affiliateUrl fields. Keep the buttons clear and honest.
// 5. Change badges or delete badge lines when they are not helpful.
export const collections: Collection[] = [
  {
    slug: "gifts-for-her-under-25",
    title: "Gifts for Her Under $25",
    category: "gift-guides",
    subcategory: "For Her",
    excerpt: "Pretty, practical little gifts that still feel personal.",
    introduction: "A polished mix of small treats, useful extras, and everyday luxuries for sisters, friends, coworkers, and favorite people.",
    heroImage: "/images/collections/gifts-for-her-under-25.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "These picks work best when you want something giftable without guessing sizes or personal style too hard.",
    featured: true,
    publishedAt: "2026-07-01",
    products: products("her25"),
    relatedSlugs: ["gifts-for-busy-moms", "gifts-for-the-cozy-homebody"]
  },
  {
    slug: "gifts-for-busy-moms",
    title: "Gifts for Busy Moms",
    category: "gift-guides",
    subcategory: "Moms",
    excerpt: "Helpful finds that feel thoughtful, not like another chore.",
    introduction: "A practical gift guide for moms juggling school pickup, work, appointments, errands, and a little bit of everything.",
    heroImage: "/images/collections/gifts-for-busy-moms.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "The best busy-mom gifts save time, create a tiny ritual, or make the day feel more pulled together.",
    publishedAt: "2026-06-29",
    products: products("busy-moms"),
    relatedSlugs: ["the-everyday-mom-kit", "teacher-gifts-that-are-actually-useful"]
  },
  {
    slug: "gifts-for-teenage-girls",
    title: "Gifts for Teenage Girls",
    category: "gift-guides",
    subcategory: "Teens",
    excerpt: "Fun, current-feeling ideas without relying on trends that vanish overnight.",
    introduction: "A blend of room finds, beauty extras, school-life helpers, and cute accessories for teen gift giving.",
    heroImage: "/images/collections/gifts-for-teenage-girls.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "Look for items that feel expressive but still useful enough to avoid clutter.",
    publishedAt: "2026-06-28",
    products: products("teen-girls"),
    relatedSlugs: ["gifts-for-her-under-25", "gifts-for-the-cozy-homebody"]
  },
  {
    slug: "teacher-gifts-that-are-actually-useful",
    title: "Teacher Gifts That Are Actually Useful",
    category: "gift-guides",
    subcategory: "Teachers",
    excerpt: "Classroom-friendly, desk-friendly, and honestly useful.",
    introduction: "Skip the novelty clutter and start with teacher gifts that support long days, organized desks, and small moments of comfort.",
    heroImage: "/images/collections/teacher-gifts-that-are-actually-useful.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "Useful teacher gifts are easy to consume, easy to store, or easy to use during a school day.",
    featured: true,
    publishedAt: "2026-06-27",
    products: products("teacher"),
    relatedSlugs: ["gifts-for-busy-moms", "work-from-home-essentials"]
  },
  {
    slug: "gifts-for-the-cozy-homebody",
    title: "Gifts for the Cozy Homebody",
    category: "gift-guides",
    subcategory: "For Her",
    excerpt: "Warm, soft, stay-in favorites for quiet nights and slow weekends.",
    introduction: "A cozy little edit for anyone who loves a candle, a good cup, a soft layer, and an excuse to stay home.",
    heroImage: "/images/collections/gifts-for-the-cozy-homebody.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "The magic is in pieces that feel indulgent but still fit into everyday routines.",
    publishedAt: "2026-06-26",
    products: products("homebody"),
    relatedSlugs: ["coffee-bar-must-haves", "gifts-for-her-under-25"]
  },
  {
    slug: "casual-summer-mom-outfit",
    title: "Casual Summer Mom Outfit",
    category: "outfits",
    subcategory: "Casual",
    excerpt: "Easy layers for hot days, errands, and last-minute plans.",
    introduction: "A simple summer outfit formula built around breathable basics, useful accessories, and pieces that can handle real life.",
    heroImage: "/images/collections/casual-summer-mom-outfit.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "Start with a comfortable base, then add one polished accessory so the look feels intentional.",
    featured: true,
    publishedAt: "2026-06-25",
    products: products("summer-mom"),
    relatedSlugs: ["comfy-travel-outfit", "the-everyday-mom-kit"]
  },
  {
    slug: "country-concert-outfit",
    title: "Country Concert Outfit",
    category: "outfits",
    subcategory: "Concert",
    excerpt: "Cute, comfortable pieces for music, dust, dancing, and photos.",
    introduction: "A concert outfit edit with boots, easy layers, and accessories that can move from tailgate to encore.",
    heroImage: "/images/collections/country-concert-outfit.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "Comfort matters more than costume. Pick one western-inspired piece and keep the rest wearable.",
    publishedAt: "2026-06-24",
    products: products("concert"),
    relatedSlugs: ["easy-date-night-outfit", "casual-summer-mom-outfit"]
  },
  {
    slug: "family-photo-outfit",
    title: "Family Photo Outfit",
    category: "outfits",
    subcategory: "Seasonal",
    excerpt: "Soft, coordinated pieces that photograph well without matching too hard.",
    introduction: "A calm outfit formula for family photos with texture, muted color, and pieces that look good sitting, standing, and chasing kids.",
    heroImage: "/images/collections/family-photo-outfit.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "Aim for a shared palette, not identical outfits, and avoid tiny patterns that can distract in photos.",
    publishedAt: "2026-06-23",
    products: products("family-photo"),
    relatedSlugs: ["easy-date-night-outfit", "gifts-for-busy-moms"]
  },
  {
    slug: "comfy-travel-outfit",
    title: "Comfy Travel Outfit",
    category: "outfits",
    subcategory: "Travel",
    excerpt: "Airport-friendly layers that still look pulled together.",
    introduction: "A travel outfit edit with soft basics, hands-free accessories, and comfort-first pieces that survive long days.",
    heroImage: "/images/collections/comfy-travel-outfit.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "The best travel outfits are breathable, layered, and built around pockets or a good bag.",
    publishedAt: "2026-06-22",
    products: products("travel-outfit"),
    relatedSlugs: ["casual-summer-mom-outfit", "car-organization-finds"]
  },
  {
    slug: "easy-date-night-outfit",
    title: "Easy Date Night Outfit",
    category: "outfits",
    subcategory: "Date Night",
    excerpt: "Low-effort pieces that make dinner plans feel special.",
    introduction: "A simple date-night formula with one elevated staple, comfortable shoes, and accessories that do the finishing work.",
    heroImage: "/images/collections/easy-date-night-outfit.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "Choose one statement texture or accessory and let the rest stay easy.",
    publishedAt: "2026-06-21",
    products: products("date-night"),
    relatedSlugs: ["country-concert-outfit", "family-photo-outfit"]
  },
  {
    slug: "the-everyday-mom-kit",
    title: "The Everyday Mom Kit",
    category: "everyday-finds",
    subcategory: "Mom Life",
    excerpt: "The little things that make packed days feel more put together.",
    introduction: "Practical finds for errands, appointments, school pickup, work blocks, and all the in-between moments.",
    heroImage: "/images/collections/the-everyday-mom-kit.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "This edit is about small support systems: the things you reach for every week without thinking about it.",
    featured: true,
    publishedAt: "2026-06-20",
    products: products("mom-kit", 8),
    relatedSlugs: ["gifts-for-busy-moms", "casual-summer-mom-outfit"]
  },
  {
    slug: "work-from-home-essentials",
    title: "Work-from-Home Essentials",
    category: "everyday-finds",
    subcategory: "Office",
    excerpt: "Desk helpers for focus, comfort, and a prettier workday.",
    introduction: "A clean work-from-home edit with practical upgrades for video calls, planning, hydration, and staying organized.",
    heroImage: "/images/collections/work-from-home-essentials.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "A better desk setup should solve friction first, then add style.",
    publishedAt: "2026-06-19",
    products: products("wfh"),
    relatedSlugs: ["coffee-bar-must-haves", "teacher-gifts-that-are-actually-useful"]
  },
  {
    slug: "car-organization-finds",
    title: "Car Organization Finds",
    category: "everyday-finds",
    subcategory: "Organization",
    excerpt: "Small fixes for snacks, receipts, cords, bags, and kid stuff.",
    introduction: "A practical car edit for making errands, school runs, road trips, and daily clutter feel less chaotic.",
    heroImage: "/images/collections/car-organization-finds.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "The goal is to create homes for the things that always end up on the floorboard.",
    publishedAt: "2026-06-18",
    products: products("car"),
    relatedSlugs: ["comfy-travel-outfit", "the-everyday-mom-kit"]
  },
  {
    slug: "coffee-bar-must-haves",
    title: "Coffee Bar Must-Haves",
    category: "everyday-finds",
    subcategory: "Kitchen",
    excerpt: "Pretty and practical pieces for a small home coffee station.",
    introduction: "A coffee-bar edit with storage, cups, tools, and little details that make the morning counter feel intentional.",
    heroImage: "/images/collections/coffee-bar-must-haves.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "Keep the setup compact, easy to clean, and stocked with only what you actually use.",
    publishedAt: "2026-06-17",
    products: products("coffee"),
    relatedSlugs: ["amazon-kitchen-finds-under-20", "gifts-for-the-cozy-homebody"]
  },
  {
    slug: "amazon-kitchen-finds-under-20",
    title: "Amazon Kitchen Finds Under $20",
    category: "everyday-finds",
    subcategory: "Kitchen",
    excerpt: "Useful kitchen helpers that solve small daily annoyances.",
    introduction: "A budget-friendly kitchen edit focused on tools, organizers, and countertop helpers you can reach for all week.",
    heroImage: "/images/collections/amazon-kitchen-finds-under-20.svg",
    pinterestImage: "/images/pinterest/fallback.svg",
    editorialNote: "A good inexpensive kitchen find should earn its drawer space quickly.",
    publishedAt: "2026-06-16",
    products: products("kitchen"),
    relatedSlugs: ["coffee-bar-must-haves", "car-organization-finds"]
  }
];
