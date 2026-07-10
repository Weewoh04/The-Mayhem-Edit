export function CategoryFilters({ filters }: { filters: string[] }) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2" aria-label="Category filters">
      {filters.map((filter) => (
        <span key={filter} className="border border-line bg-paper px-4 py-2 text-sm font-semibold text-charcoal">
          {filter}
        </span>
      ))}
    </div>
  );
}
