# The Mayhem Edit

A polished, responsive Amazon affiliate gift-guide and outfit-inspiration site built with Next.js App Router, TypeScript, Tailwind CSS, and editable TypeScript data files.

## 1. Run The Website

Install dependencies:

```bash
npm install
```

Start the local site:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:3000`.

## 2. Open It In VS Code

Open VS Code, choose `File > Open Folder`, and select:

```text
C:\Users\valen\OneDrive\Desktop\Websites\The Mayhem Edit
```

## 3. Add A New Collection

Open:

```text
src/data/collections.ts
```

Copy one full collection object, paste it below a similar collection, then change:

```ts
{
  slug: "new-gift-guide-slug",
  title: "New Gift Guide Title",
  category: "gift-guides",
  subcategory: "For Her",
  excerpt: "Short card description.",
  introduction: "Longer introduction for the collection page.",
  heroImage: "/images/collections/new-gift-guide-slug.svg",
  pinterestImage: "/images/pinterest/fallback.svg",
  publishedAt: "2026-07-10",
  products: products("new-guide"),
  relatedSlugs: ["gifts-for-her-under-25", "gifts-for-busy-moms"]
}
```

Use categories: `gift-guides`, `outfits`, `everyday-finds`, `seasonal`, or `shop-by-person`.

## 4. Add Or Remove A Product

In `src/data/collections.ts`, replace generated products with custom products when you are ready:

```ts
products: [
  {
    id: "gift-1",
    name: "Insulated Tumbler",
    shortDescription: "A practical daily cup for errands, work, and school pickup.",
    image: "/images/products/insulated-tumbler.jpg",
    affiliateUrl: "https://www.amazon.com/your-affiliate-link",
    badge: "Editor Pick"
  }
]
```

Delete a product object to remove it from a guide.

## 5. Replace A Placeholder Product Image

Add your approved image to:

```text
public/images/products/
```

Then update the product image path:

```ts
image: "/images/products/insulated-tumbler.jpg"
```

Recommended product size: `1000 x 1000`.

## 6. Paste An Amazon Affiliate Link

Paste links into the `affiliateUrl` field in:

```text
src/data/collections.ts
```

Example:

```ts
affiliateUrl: "https://www.amazon.com/dp/example?tag=yourtag-20"
```

The product buttons already open in a new tab and use `rel="sponsored nofollow noopener noreferrer"`.

## 7. Change Homepage Featured Collections

Open:

```text
src/app/page.tsx
```

Change the slugs in arrays like:

```ts
const outfitSlugs = ["casual-summer-mom-outfit", "country-concert-outfit", "easy-date-night-outfit"];
```

## 8. Change Site Name And Colors

Site name and tagline:

```text
src/lib/site.ts
```

Colors:

```text
tailwind.config.ts
```

Search for `cream`, `paper`, `charcoal`, `rose`, `blush`, `tan`, `sage`, and `line`.

## 9. Add A Pinterest Image

Add a tall image to:

```text
public/images/pinterest/
```

Recommended size: `1000 x 1500`.

Then update:

```ts
pinterestImage: "/images/pinterest/my-pin.jpg"
```

## 10. Deploy To Vercel

Push the project to GitHub, then in Vercel choose `Add New Project`, import the repository, and deploy with the default Next.js settings.

Before publishing, set:

```text
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

in Vercel project environment variables.
