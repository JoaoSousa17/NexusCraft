import Link from "next/link";

import { listProjects } from "@/lib/data/projects";
import { listStackItems } from "@/lib/data/stack";
import { listSiteLinks } from "@/lib/data/links";

export default async function AdminHome() {
  const [projects, stack, links] = await Promise.all([
    listProjects(),
    listStackItems(),
    listSiteLinks(),
  ]);

  const cards = [
    { label: "Projetos", value: projects.length, href: "/admin/projetos" },
    { label: "Tecnologias da stack", value: `${stack.length}/8`, href: "/admin/stack" },
    { label: "Links geridos", value: links.length, href: "/admin/links" },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl uppercase tracking-tight">
        Visão geral
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Gere o conteúdo público do site NexusCraft.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="flex flex-col gap-2 bg-background p-8 transition-colors hover:bg-muted"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {card.label}
            </span>
            <span className="font-display text-4xl">{card.value}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
