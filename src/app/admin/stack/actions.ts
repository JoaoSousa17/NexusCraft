"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

export async function updateStackItem(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = String(formData.get("name") ?? "");
  const icon_slug = String(formData.get("icon_slug") ?? "");

  const supabase = await createClient();
  await supabase.from("stack_items").update({ name, icon_slug }).eq("id", id);

  revalidatePath("/admin/stack");
  revalidatePath("/");
}
