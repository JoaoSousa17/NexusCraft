import { createClient } from "@/lib/supabase/server";
import { projects as staticProjects } from "@/lib/projects";

export type ProjectStatus = "Em planeamento" | "Em desenvolvimento" | "Lançado";

export type Project = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  description_long: string;
  status: ProjectStatus;
  main_image: string | null;
  logo_image: string | null;
  cover_image: string | null;
  sort_order: number;
  created_at: string;
};

const fallbackProjects: Project[] = staticProjects.map((p, i) => ({
  id: p.slug,
  slug: p.slug,
  name: p.name,
  tagline: p.tagline,
  description: p.description,
  description_long: p.description,
  status: p.status === "Em produção" ? "Lançado" : p.status,
  main_image: null,
  logo_image: null,
  cover_image: null,
  sort_order: i,
  created_at: new Date().toISOString(),
}));

export async function listProjects(): Promise<Project[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error || !data || data.length === 0) return fallbackProjects;
    return data;
  } catch {
    return fallbackProjects;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();
    if (error || !data) return fallbackProjects.find((p) => p.slug === slug) ?? null;
    return data;
  } catch {
    return fallbackProjects.find((p) => p.slug === slug) ?? null;
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (error || !data) return fallbackProjects.find((p) => p.id === id) ?? null;
    return data;
  } catch {
    return fallbackProjects.find((p) => p.id === id) ?? null;
  }
}
