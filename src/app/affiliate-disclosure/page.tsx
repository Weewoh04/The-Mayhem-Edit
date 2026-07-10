import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { amazonDisclosure } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Affiliate disclosure for The Mayhem Edit.",
  alternates: { canonical: "/affiliate-disclosure" }
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ label: "Affiliate Disclosure" }]} />
        <h1 className="font-serif text-5xl font-semibold text-charcoal">Affiliate Disclosure</h1>
        <div className="mt-6 space-y-5 text-lg leading-8 text-charcoal/75">
          <p>{amazonDisclosure}</p>
          <p>The Mayhem Edit uses affiliate links. This means the website may earn commissions from qualifying purchases when you click a link and make a purchase.</p>
          <p>Recommendations are editorially selected. Clicking an affiliate link does not increase your purchase price.</p>
          <p>Product availability, details, and pricing may change. Always review the product page before purchasing.</p>
          <p>Amazon does not sponsor or endorse this website.</p>
        </div>
      </div>
    </main>
  );
}
