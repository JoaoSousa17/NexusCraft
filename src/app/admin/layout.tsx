import Link from "next/link";

import { Logo } from "@/components/logo";
import { logout } from "./actions";

const navItems = [
  { href: "/admin", label: "Visão geral" },
  { href: "/admin/projetos", label: "Projetos" },
  { href: "/admin/stack", label: "Stack" },
  { href: "/admin/links", label: "Links" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="flex w-64 flex-col border-r border-border bg-muted/20">
        <div className="border-b border-border px-6 py-6">
          <Logo />
          <span className="mt-3 block font-mono text-[10px] uppercase tracking-widest text-accent">
            Admin
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <form action={logout} className="border-t border-border p-4">
          <button
            type="submit"
            className="w-full border border-border px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Sair
          </button>
        </form>
      </aside>

      <main className="flex-1 overflow-y-auto p-8 md:p-12">{children}</main>
    </div>
  );
}
