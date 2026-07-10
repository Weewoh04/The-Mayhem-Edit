import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The Mayhem Edit.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <main className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <h1 className="font-serif text-5xl font-semibold text-charcoal">Contact</h1>
        <p className="mt-4 text-lg leading-8 text-charcoal/75">Questions, collaboration ideas, or a product you want considered for an edit? Send a note.</p>
        <ContactForm />
      </div>
    </main>
  );
}
