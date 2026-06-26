import { Globe, Smartphone, Apple, Link as LinkIcon } from "lucide-react";

import type { SiteLink } from "@/lib/data/links";

const iconMap: Record<string, typeof Globe> = {
  smartphone: Smartphone,
  apple: Apple,
  globe: Globe,
};

function captionFor(label: string) {
  if (label.toLowerCase().includes("chrome")) return "Extensão na";
  return "Disponível em";
}

export function StoreLinks({ links }: { links: SiteLink[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => {
        const Icon = iconMap[link.icon_slug] ?? LinkIcon;
        return (
          <a
            key={link.id}
            href={link.href}
            className="group relative flex items-center gap-3 overflow-hidden border border-border bg-muted/40 px-4 py-3 transition-all hover:border-accent hover:bg-accent"
          >
            <Icon className="size-5 shrink-0 text-foreground transition-colors group-hover:text-background" />
            <span className="flex flex-col text-left leading-tight">
              <span className="text-[10px] uppercase tracking-wide text-muted-foreground transition-colors group-hover:text-background/70">
                {captionFor(link.label)}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-foreground transition-colors group-hover:text-background">
                {link.label}
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
