# Live View Counters + "Most Read" Posts (Supabase)

## The Idea

Track how many times each blog post and puzzle has been viewed, display a subtle counter on each post page ("1,204 views"), and surface a **Popular** section on `/writings` ranked by real traffic. This adds social proof, gives you feedback on what resonates, and is the classic gateway feature into dynamic infrastructure — the site currently has zero backend, and this is the smallest useful step.

## Why It Fits This Codebase

- Supabase MCP is already configured for this project but completely unused in code — this puts it to work.
- All post pages are statically generated from Contentlayer, so views need a tiny client-side ping + server route rather than server-rendered counts. That keeps the site fast and free.

## Implementation

### Step 1: Supabase table

```sql
create table page_views (
  slug text primary key,
  count bigint not null default 0,
  updated_at timestamptz not null default now()
);

-- Atomic increment via RPC so there is no read-modify-write race
create or replace function increment_view(page_slug text)
returns bigint language sql security definer as $$
  insert into page_views (slug, count)
  values (page_slug, 1)
  on conflict (slug) do update
    set count = page_views.count + 1, updated_at = now()
  returning count;
$$;
```

Enable RLS with a read-only public policy on `page_views`; the increment happens only through the RPC called from a server route using the service-role key (never exposed to the client).

### Step 2: API routes

- `src/app/api/views/[slug]/route.ts`
  - `POST` → calls `increment_view` RPC, returns the new count.
  - `GET` → returns the current count (cache with `revalidate: 60`).
- Add `@supabase/supabase-js`, plus `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` env vars in Vercel.

### Step 3: Client component

`src/components/ViewCounter.tsx` (client component):

```tsx
"use client";
export function ViewCounter({ slug }: { slug: string }) {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    fetch(`/api/views/${slug}`, { method: "POST" })
      .then((r) => r.json())
      .then((d) => setCount(d.count));
  }, [slug]);
  return <span className="text-text-1/60 text-sm">{count?.toLocaleString() ?? "–"} views</span>;
}
```

Drop it into the post header in `src/app/blog/[slug]/page.tsx` and `src/app/puzzle/[slug]/page.tsx`, next to the date.

Basic dedupe: skip the POST if `sessionStorage` has a `viewed:{slug}` flag, so refreshes within a session don't inflate counts.

### Step 4: "Most Read" on /writings

- Server component fetch in `src/app/writings/page.tsx`: `GET /api/views` (add a list endpoint returning top 5 slugs by count), join against `allPosts` for titles.
- Render a small "Popular" strip above the category filters, reusing the existing `WritingsCard` styling.
- Wrap in a try/catch that renders nothing on failure — the page must never break because Supabase is down.

## Effort Estimate

**One afternoon (~3–4 hours)** including Supabase setup, env vars, and both UI surfaces.

## Success Criteria

- Visiting a post increments its count exactly once per session.
- `/writings` shows a Popular section ordered by real views.
- Site builds and renders fine with Supabase env vars missing (graceful degradation for local dev).
