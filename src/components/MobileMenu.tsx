"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-line bg-paper px-4 py-2 text-sm font-semibold text-charcoal focus:outline-none focus:ring-2 focus:ring-rose"
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div className="absolute left-4 right-4 top-24 z-50 border border-line bg-paper p-4 shadow-editorial">
          <nav aria-label="Mobile navigation" className="grid gap-2">
            {navLinks.map((link, index) => (
              <Link
                ref={index === 0 ? firstLinkRef : undefined}
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-semibold text-charcoal hover:bg-cream focus:outline-none focus:ring-2 focus:ring-rose"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
