import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let adminClient: SupabaseClient | null | undefined;

/**
 * Server-only Supabase client using the service-role key.
 * Returns null when env vars are missing so the site degrades gracefully.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  if (adminClient !== undefined) return adminClient;

  // URL is public; accept either name. Prefer the server-only var.
  const url =
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.error(
      "[supabase] Missing SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) or SUPABASE_SERVICE_ROLE_KEY"
    );
    adminClient = null;
    return null;
  }

  adminClient = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return adminClient;
}
