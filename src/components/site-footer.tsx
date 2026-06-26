import Link from "next/link";

const links = [
  { label: "Sobre nós", href: "/sobre" },
  { label: "A nossa história", href: "/historia" },
  { label: "Contacto", href: "/contacto" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="grid grid-cols-1 border-b border-border md:grid-cols-3">
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={`group flex items-center justify-between border-b border-border px-6 py-8 text-sm uppercase tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:border-b-0 md:px-10 ${
              i !== links.length - 1 ? "md:border-r" : ""
            } border-border`}
          >
            {link.label}
            <span className="text-accent transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        ))}
      </div>
      <div className="px-6 py-6 text-xs text-muted-foreground md:px-10">
        © {new Date().getFullYear()} NexusCraft. Todos os direitos reservados.
      </div>
    </footer>
  );
}
