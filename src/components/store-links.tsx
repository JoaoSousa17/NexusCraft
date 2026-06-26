import { Globe, Smartphone, Apple } from "lucide-react";

const stores = [
  { name: "Google Play", href: "#", icon: Smartphone },
  { name: "App Store", href: "#", icon: Apple },
  { name: "Chrome Web Store", href: "#", icon: Globe },
];

export function StoreLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {stores.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          className="flex items-center gap-2 border border-white/20 px-4 py-2 text-xs uppercase tracking-wide text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
        >
          <Icon className="size-4" />
          {name}
        </a>
      ))}
    </div>
  );
}
