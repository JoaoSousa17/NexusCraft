import { TechIcon, resolveIcon } from "@/components/tech-icon";
import { listStackItems } from "@/lib/data/stack";
import { updateStackItem } from "./actions";

export default async function AdminStackPage() {
  const items = await listStackItems();

  return (
    <div>
      <h1 className="font-display text-3xl uppercase tracking-tight">
        Stack Tecnológica
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Existem sempre exatamente 8 tecnologias. Edita o nome e o slug do
        ícone (ex: <code>siNextdotjs</code>, ver pacote{" "}
        <code>simple-icons</code>).
      </p>

      <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
        {items.map((item) => (
          <form
            key={item.id}
            action={updateStackItem}
            className="flex items-center gap-4 bg-background p-6"
          >
            <input type="hidden" name="id" value={item.id} />
            <TechIcon
              icon={resolveIcon(item.icon_slug)}
              className="size-10 shrink-0 text-muted-foreground"
            />
            <div className="flex flex-1 flex-col gap-2">
              <input
                name="name"
                defaultValue={item.name}
                className="border border-border bg-muted/30 px-3 py-2 text-sm outline-none focus:border-accent"
              />
              <input
                name="icon_slug"
                defaultValue={item.icon_slug}
                className="border border-border bg-muted/30 px-3 py-2 font-mono text-xs outline-none focus:border-accent"
              />
            </div>
            <button
              type="submit"
              className="self-start border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Guardar
            </button>
          </form>
        ))}
      </div>
    </div>
  );
}
