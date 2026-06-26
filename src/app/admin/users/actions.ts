"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createAdminClient } from "@/lib/supabase/admin";

export async function createUser(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  const supabase = createAdminClient();
  const { error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  revalidatePath("/admin/users");

  if (error) {
    redirect(`/admin/users?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/admin/users");
}

export async function deleteUser(formData: FormData) {
  const id = String(formData.get("id"));

  const supabase = createAdminClient();
  await supabase.auth.admin.deleteUser(id);

  revalidatePath("/admin/users");
}
