type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose">{eyebrow}</p> : null}
      <h2 className="mt-2 font-serif text-3xl font-semibold text-charcoal sm:text-4xl">{title}</h2>
      {text ? <p className="mt-3 text-base leading-7 text-charcoal/70">{text}</p> : null}
    </div>
  );
}
