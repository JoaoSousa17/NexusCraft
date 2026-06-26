export function SectionTitle({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-baseline gap-3 font-display text-2xl uppercase tracking-wide text-foreground md:text-4xl">
      <span className="text-accent">{index}</span>
      <span>{children}</span>
    </h2>
  );
}
