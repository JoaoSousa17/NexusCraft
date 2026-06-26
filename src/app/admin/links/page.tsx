import { listSiteLinks } from "@/lib/data/links";
import { upsertLink, deleteLink } from "./actions";

async function LinkList({
  category,
  title,
}: {
  category: "store" | "contact";
  title: string;
}) {
  const links = await listSiteLinks(category);

  return (
    <section className="mt-10">
      <h2 className="font-display text-xl uppercase tracking-tight">
        {title}
      </h2>

      <div className="mt-4 flex flex-col gap-px border border-border bg-border">
        {links.map((link) => (
          <form
            key={link.id}
            action={upsertLink}
            className="flex flex-wrap items-center gap-3 bg-background p-4"
          >
            <input type="hidden" name="id" value={link.id} />
            <input type="hidden" name="category" value={category} />
            <input
              name="label"
              defaultValue={link.label}
              placeholder="Nome"
              className="w-40 border border-border bg-muted/30 px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <input
              name="href"
              defaultValue={link.href}
              placeholder="URL"
              className="flex-1 border border-border bg-muted/30 px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <input
              name="icon_slug"
              defaultValue={link.icon_slug}
              placeholder="ícone"
              className="w-32 border border-border bg-muted/30 px-3 py-2 font-mono text-xs outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Guardar
            </button>
            <button
              type="submit"
              formAction={deleteLink}
              className="border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Apagar
            </button>
          </form>
        ))}

        <form
          action={upsertLink}
          className="flex flex-wrap items-center gap-3 bg-background p-4"
        >
          <input type="hidden" name="id" value="" />
          <input type="hidden" name="category" value={category} />
          <input
            name="label"
            placeholder="Nome"
            className="w-40 border border-border bg-muted/30 px-3 py-2 text-sm outline-none focus:border-accent"
          />
          <input
            name="href"
            placeholder="URL"
            className="flex-1 border border-border bg-muted/30 px-3 py-2 text-sm outline-none focus:border-accent"
          />
          <input
            name="icon_slug"
            placeholder="ícone"
            className="w-32 border border-border bg-muted/30 px-3 py-2 font-mono text-xs outline-none focus:border-accent"
          />
          <button
            type="submit"
            className="border border-accent bg-accent px-3 py-2 text-xs font-semibold uppercase tracking-wide text-background"
          >
            Adicionar
          </button>
        </form>
      </div>
    </section>
  );
}

export default function AdminLinksPage() {
  return (
    <div>
      <h1 className="font-display text-3xl uppercase tracking-tight">
        Links
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Gere os links do banner principal (lojas) e da página de contacto.
      </p>

      <LinkList category="store" title="Banner — lojas" />
      <LinkList category="contact" title="Contacto" />
    </div>
  );
}
