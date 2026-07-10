import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The Mayhem Edit.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <h1 className="font-serif text-5xl font-semibold text-charcoal">Privacy Policy</h1>
        <div className="mt-6 space-y-5 text-lg leading-8 text-charcoal/75">
          <p>The Mayhem Edit may collect basic information you voluntarily submit through forms, such as your name and email address.</p>
          <p>Affiliate links may use cookies or tracking handled by the retailer or affiliate network. We do not control those third-party tracking systems.</p>
          <p>Newsletter forms can be connected to an email provider in the future. Review that provider&apos;s privacy settings before launch.</p>
          <p>For privacy questions, use the contact page.</p>
        </div>
      </div>
    </main>
  );
}
