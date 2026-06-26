import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = "default",
}: {
  className?: string;
  size?: "default" | "lg";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0 font-display uppercase leading-none tracking-tight",
        size === "lg" ? "text-3xl md:text-5xl" : "text-lg",
        className
      )}
    >
      <span className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
        NEXUS
      </span>
      <span className="ml-2 bg-accent px-2 py-0.5 text-background">
        CRAFT
      </span>
    </span>
  );
}
