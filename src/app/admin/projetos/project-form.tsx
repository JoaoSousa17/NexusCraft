import type { Project } from "@/lib/data/projects";
import { saveProject } from "./actions";

const statuses = ["Em planeamento", "Em desenvolvimento", "Lançado"];

export function ProjectForm({ project }: { project?: Project }) {
  return (
    <form action={saveProject} className="mt-10 flex max-w-3xl flex-col gap-6">
      <input type="hidden" name="id" value={project?.id ?? ""} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Slug
          </label>
          <input
            name="slug"
            required
            defaultValue={project?.slug}
            className="border border-border bg-muted/30 px-4 py-3 text-sm outline-none focus:border-accent"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Título
          </label>
          <input
            name="name"
            required
            defaultValue={project?.name}
            className="border border-border bg-muted/30 px-4 py-3 text-sm outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Estado
        </label>
        <select
          name="status"
          defaultValue={project?.status ?? "Em planeamento"}
          className="border border-border bg-muted/30 px-4 py-3 text-sm outline-none focus:border-accent"
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Descrição breve (homepage)
        </label>
        <textarea
          name="tagline"
          rows={2}
          defaultValue={project?.tagline}
          className="border border-border bg-muted/30 px-4 py-3 text-sm outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Descrição curta (cartão do projeto)
        </label>
        <textarea
          name="description"
          rows={3}
          defaultValue={project?.description}
          className="border border-border bg-muted/30 px-4 py-3 text-sm outline-none focus:border-accent"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Descrição longa (Markdown, suporta HTML/CSS embutido)
        </label>
        <textarea
          name="description_long"
          rows={10}
          defaultValue={project?.description_long}
          className="border border-border bg-muted/30 px-4 py-3 font-mono text-xs outline-none focus:border-accent"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Foto principal
          </label>
          <input
            type="file"
            name="main_image"
            accept="image/*"
            className="border border-border bg-muted/30 px-4 py-3 text-xs"
          />
          {project?.main_image && (
            <span className="truncate text-xs text-muted-foreground">
              Atual: {project.main_image}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Foto logo
          </label>
          <input
            type="file"
            name="logo_image"
            accept="image/*"
            className="border border-border bg-muted/30 px-4 py-3 text-xs"
          />
          {project?.logo_image && (
            <span className="truncate text-xs text-muted-foreground">
              Atual: {project.logo_image}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Foto capa
          </label>
          <input
            type="file"
            name="cover_image"
            accept="image/*"
            className="border border-border bg-muted/30 px-4 py-3 text-xs"
          />
          {project?.cover_image && (
            <span className="truncate text-xs text-muted-foreground">
              Atual: {project.cover_image}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Ordem
        </label>
        <input
          type="number"
          name="sort_order"
          defaultValue={project?.sort_order ?? 0}
          className="w-32 border border-border bg-muted/30 px-4 py-3 text-sm outline-none focus:border-accent"
        />
      </div>

      <button
        type="submit"
        className="mt-2 self-start border border-accent bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-wide text-background"
      >
        Guardar projeto
      </button>
    </form>
  );
}
