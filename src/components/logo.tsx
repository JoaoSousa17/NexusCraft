import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-mono text-lg font-bold uppercase tracking-tight",
        className
      )}
    >
      NEXUS<span className="text-accent">.</span>CRAFT
    </span>
  );
}
