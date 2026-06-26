import { Globe, Smartphone, Apple } from "lucide-react";

const stores = [
  { name: "Google Play", href: "#", icon: Smartphone },
  { name: "App Store", href: "#", icon: Apple },
  { name: "Chrome Web Store", href: "#", icon: Globe },
];

export function StoreLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      {stores.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-foreground backdrop-blur-sm transition-all hover:border-accent hover:bg-accent hover:text-background"
        >
          <Icon className="size-4 transition-transform group-hover:scale-110" />
          {name}
        </a>
      ))}
    </div>
  );
}
