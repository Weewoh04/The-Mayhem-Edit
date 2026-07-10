import Link from "next/link";
import { amazonDisclosure, navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal text-paper">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-3xl font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-paper/80">{siteConfig.description}</p>
          <p className="mt-4 text-sm font-semibold">{amazonDisclosure}</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush">Explore</p>
          <div className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-paper/80 hover:text-paper">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blush">Details</p>
          <div className="mt-4 grid gap-2">
            <Link href="/affiliate-disclosure" className="text-sm text-paper/80 hover:text-paper">Affiliate Disclosure</Link>
            <Link href="/privacy-policy" className="text-sm text-paper/80 hover:text-paper">Privacy Policy</Link>
            <Link href="/contact" className="text-sm text-paper/80 hover:text-paper">Contact</Link>
            <a href={siteConfig.pinterestUrl} className="text-sm text-paper/80 hover:text-paper">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
