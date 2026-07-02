"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

async function uploadImage(
  supabase: Awaited<ReturnType<typeof createClient>>,
  file: File | null,
  slug: string,
  field: string
): Promise<string | null> {
  if (!file || file.size === 0) return null;

  const ext = file.name.split(".").pop() ?? "png";
  const path = `${slug}/${field}-${Date.now()}.${ext}`;

  const { error } = await supabase.storage
    .from("project-images")
    .upload(path, file, { upsert: true });

  if (error) return null;

  const { data } = supabase.storage.from("project-images").getPublicUrl(path);
  return data.publicUrl;
}

export async function saveProject(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const slug = String(formData.get("slug") ?? "");
  const name = String(formData.get("name") ?? "");
  const tagline = String(formData.get("tagline") ?? "");
  const description = String(formData.get("description") ?? "");
  const description_long = String(formData.get("description_long") ?? "");
  const status = String(formData.get("status") ?? "Em planeamento");
  const sort_order = Number(formData.get("sort_order") ?? 0);

  const supabase = await createClient();

  const mainFile = formData.get("main_image") as File | null;
  const logoFile = formData.get("logo_image") as File | null;
  const coverFile = formData.get("cover_image") as File | null;

  const [main_image, logo_image, cover_image] = await Promise.all([
    uploadImage(supabase, mainFile, slug, "main"),
    uploadImage(supabase, logoFile, slug, "logo"),
    uploadImage(supabase, coverFile, slug, "cover"),
  ]);

  const payload: Record<string, unknown> = {
    slug,
    name,
    tagline,
    description,
    description_long,
    status,
    sort_order,
  };
  if (main_image) payload.main_image = main_image;
  if (logo_image) payload.logo_image = logo_image;
  if (cover_image) payload.cover_image = cover_image;

  if (id) {
    const { error } = await supabase.from("projects").update(payload).eq("id", id);
    if (error) redirect(`/admin/projetos/${id}?error=${encodeURIComponent(error.message)}`);
  } else {
    const { error } = await supabase.from("projects").insert(payload);
    if (error) redirect(`/admin/projetos/novo?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/admin/projetos");
  revalidatePath("/");
  revalidatePath(`/projetos/${slug}`);
  redirect("/admin/projetos");
}

export async function deleteProject(formData: FormData) {
  const id = String(formData.get("id"));
  const supabase = await createClient();
  await supabase.from("projects").delete().eq("id", id);

  revalidatePath("/admin/projetos");
  revalidatePath("/");
}
