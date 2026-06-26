import Link from "next/link";

import { listProjects } from "@/lib/data/projects";
import { deleteProject } from "./actions";

export default async function AdminProjectsPage() {
  const projects = await listProjects();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-3xl uppercase tracking-tight">
          Projetos
        </h1>
        <Link
          href="/admin/projetos/novo"
          className="border border-accent bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-background"
        >
          Novo projeto
        </Link>
      </div>

      <div className="mt-10 flex flex-col gap-px border border-border bg-border">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between gap-4 bg-background p-6"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                {project.status}
              </span>
              <h3 className="mt-1 text-lg font-medium">{project.name}</h3>
              <p className="text-sm text-muted-foreground">{project.tagline}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <Link
                href={`/admin/projetos/${project.id}`}
                className="border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Editar
              </Link>
              <form action={deleteProject}>
                <input type="hidden" name="id" value={project.id} />
                <button
                  type="submit"
                  className="border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Apagar
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
