import { createClient } from "@/lib/supabase/server";

export type LinkCategory = "store" | "contact";

export type SiteLink = {
  id: string;
  category: LinkCategory;
  label: string;
  href: string;
  icon_slug: string;
  sort_order: number;
};

const fallbackLinks: SiteLink[] = [
  { id: "1", category: "store", label: "Google Play", href: "#", icon_slug: "smartphone", sort_order: 1 },
  { id: "2", category: "store", label: "App Store", href: "#", icon_slug: "apple", sort_order: 2 },
  { id: "3", category: "store", label: "Chrome Web Store", href: "#", icon_slug: "globe", sort_order: 3 },
];

export async function listSiteLinks(category?: LinkCategory): Promise<SiteLink[]> {
  try {
    const supabase = await createClient();
    let query = supabase.from("site_links").select("*").order("sort_order", { ascending: true });
    if (category) query = query.eq("category", category);
    const { data, error } = await query;
    if (error || !data || data.length === 0) {
      return category ? fallbackLinks.filter((l) => l.category === category) : fallbackLinks;
    }
    return data;
  } catch {
    return category ? fallbackLinks.filter((l) => l.category === category) : fallbackLinks;
  }
}
