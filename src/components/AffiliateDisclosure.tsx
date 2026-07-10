import { amazonDisclosure } from "@/lib/site";

export function AffiliateDisclosure({ reminder = false }: { reminder?: boolean }) {
  return (
    <div className="border border-line bg-cream px-4 py-3 text-sm leading-6 text-charcoal">
      {reminder
        ? amazonDisclosure
        : "This post contains affiliate links. I may earn a commission from qualifying purchases at no additional cost to you."}
    </div>
  );
}
