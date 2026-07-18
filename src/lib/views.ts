import { getSupabaseAdmin } from "./supabase";

export type PageView = {
  slug: string;
  count: number;
};

export async function getViewCount(slug: string): Promise<number | null> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("page_views")
    .select("count")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("[views] getViewCount failed:", error.message);
    return null;
  }

  return data?.count ?? 0;
}

export async function incrementView(slug: string): Promise<number | null> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;

  const { data, error } = await supabase.rpc("increment_view", {
    page_slug: slug,
  });

  if (error) {
    console.error("[views] incrementView failed:", error.message);
    return null;
  }

  return typeof data === "number" ? data : Number(data);
}

export async function getTopViews(limit = 5): Promise<PageView[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("page_views")
    .select("slug, count")
    .order("count", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("[views] getTopViews failed:", error.message);
    return [];
  }

  return (data ?? []).map((row) => ({
    slug: row.slug as string,
    count: Number(row.count),
  }));
}
