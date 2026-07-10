export const siteConfig = {
  name: "The Mayhem Edit",
  tagline: "Gift ideas, outfit formulas, and everyday finds-already picked out for you.",
  description:
    "Curated Amazon gift ideas, outfit formulas, and practical finds for real life without the endless scrolling.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://themayhemedit.com",
  pinterestUrl: "https://www.pinterest.com/"
};

export const navLinks = [
  { href: "/gift-guides", label: "Gift Guides" },
  { href: "/outfits", label: "Outfits" },
  { href: "/everyday-finds", label: "Everyday Finds" },
  { href: "/seasonal", label: "Seasonal" },
  { href: "/shop-by-person", label: "Shop by Person" },
  { href: "/about", label: "About" }
];

export const amazonDisclosure = "As an Amazon Associate I earn from qualifying purchases.";
