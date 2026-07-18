-- Run this in the Supabase SQL Editor (Dashboard → SQL → New query)

create table if not exists page_views (
  slug text primary key,
  count bigint not null default 0,
  updated_at timestamptz not null default now()
);

-- Atomic increment via RPC so there is no read-modify-write race
create or replace function increment_view(page_slug text)
returns bigint
language sql
security definer
set search_path = public
as $$
  insert into page_views (slug, count)
  values (page_slug, 1)
  on conflict (slug) do update
    set count = page_views.count + 1,
        updated_at = now()
  returning count;
$$;

-- RLS: public can read counts; writes go through the RPC via the service-role key only
alter table page_views enable row level security;

drop policy if exists "Public read page_views" on page_views;
create policy "Public read page_views"
  on page_views
  for select
  to anon, authenticated
  using (true);

-- Lock down the RPC: only the service role (server) may call it
revoke all on function increment_view(text) from public;
revoke all on function increment_view(text) from anon, authenticated;
grant execute on function increment_view(text) to service_role;
