import Image from "next/image";

const collageItems = [
  { src: "/images/products/1.svg", label: "coffee run", className: "left-[5%] top-[8%] w-[34%] rotate-[-7deg]" },
  { src: "/images/products/2.svg", label: "daily tote", className: "right-[8%] top-[4%] w-[38%] rotate-[5deg]" },
  { src: "/images/products/3.svg", label: "sunny errand", className: "left-[28%] top-[34%] w-[30%] rotate-[8deg]" },
  { src: "/images/products/4.svg", label: "quick polish", className: "right-[3%] bottom-[18%] w-[28%] rotate-[-8deg]" },
  { src: "/images/products/6.svg", label: "hydrated", className: "left-[8%] bottom-[5%] w-[32%] rotate-[4deg]" }
];

export function HeroCollage({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative mx-auto w-full max-w-xl bg-cream ${compact ? "aspect-[5/4]" : "aspect-[4/3]"} border border-line shadow-editorial`}>
      <svg aria-hidden className="absolute inset-0 h-full w-full text-rose" viewBox="0 0 500 420" fill="none">
        <path d="M120 120C210 65 300 70 380 150" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 10" />
        <path d="M365 130l28 20-31 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {collageItems.map((item) => (
        <div key={item.label} className={`absolute ${item.className}`}>
          <div className="relative aspect-square overflow-hidden border border-line bg-paper shadow-sm">
            <Image src={item.src} alt="" fill sizes="220px" className="object-cover" aria-hidden />
          </div>
          <p className="mt-1 -rotate-3 font-hand text-xl text-charcoal">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
