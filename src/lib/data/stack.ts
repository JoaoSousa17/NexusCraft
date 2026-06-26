import { createClient } from "@/lib/supabase/server";

export type StackItem = {
  id: number;
  name: string;
  icon_slug: string;
  sort_order: number;
};

const fallbackStack: StackItem[] = [
  { id: 1, name: "Next.js", icon_slug: "siNextdotjs", sort_order: 1 },
  { id: 2, name: "React", icon_slug: "siReact", sort_order: 2 },
  { id: 3, name: "TypeScript", icon_slug: "siTypescript", sort_order: 3 },
  { id: 4, name: "Tailwind CSS", icon_slug: "siTailwindcss", sort_order: 4 },
  { id: 5, name: "shadcn/ui", icon_slug: "siShadcnui", sort_order: 5 },
  { id: 6, name: "Supabase", icon_slug: "siSupabase", sort_order: 6 },
  { id: 7, name: "PostgreSQL", icon_slug: "siPostgresql", sort_order: 7 },
  { id: 8, name: "Node.js", icon_slug: "siNodedotjs", sort_order: 8 },
];

export async function listStackItems(): Promise<StackItem[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("stack_items")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error || !data || data.length === 0) return fallbackStack;
    return data;
  } catch {
    return fallbackStack;
  }
}
