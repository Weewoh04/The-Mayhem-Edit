import Link from "next/link";

export type Crumb = { href?: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-charcoal/60">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link href="/" className="hover:text-rose">Home</Link></li>
        {items.map((item) => (
          <li key={`${item.href ?? item.label}`} className="flex items-center gap-2">
            <span aria-hidden> / </span>
            {item.href ? <Link href={item.href} className="hover:text-rose">{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
