import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import { AnnouncementBar } from "./AnnouncementBar";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <AnnouncementBar />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-serif text-2xl font-semibold text-charcoal focus:outline-none focus:ring-2 focus:ring-rose">
          {siteConfig.name}
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-charcoal hover:text-rose focus:outline-none focus:ring-2 focus:ring-rose">
              {link.label}
            </Link>
          ))}
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
