"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";
import type { LinkCategory } from "@/lib/data/links";

export async function upsertLink(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const category = String(formData.get("category")) as LinkCategory;
  const label = String(formData.get("label") ?? "");
  const href = String(formData.get("href") ?? "#");
  const icon_slug = String(formData.get("icon_slug") ?? "globe");

  const supabase = await createClient();

  if (id) {
    await supabase
      .from("site_links")
      .update({ label, href, icon_slug })
      .eq("id", id);
  } else {
    await supabase.from("site_links").insert({ category, label, href, icon_slug, sort_order: 99 });
  }

  revalidatePath("/admin/links");
  revalidatePath("/");
  revalidatePath("/contacto");
}

export async function deleteLink(formData: FormData) {
  const id = String(formData.get("id"));
  const supabase = await createClient();
  await supabase.from("site_links").delete().eq("id", id);

  revalidatePath("/admin/links");
  revalidatePath("/");
  revalidatePath("/contacto");
}
