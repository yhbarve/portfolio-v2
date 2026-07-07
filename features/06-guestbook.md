# Guestbook with GitHub Sign-In

## The Idea

A `/guestbook` page where visitors sign in with GitHub and leave a short message. It's charmingly personal (a throwback to the old web), creates visible community proof, and — importantly for a portfolio — demonstrates real full-stack skills live on the site: OAuth, a database, server actions, and moderation, all in ~100 lines.

## Why It Fits This Codebase

- Supabase MCP is configured for this project but unused; Supabase Auth ships GitHub OAuth out of the box.
- Your audience (developers, recruiters, classmates) all have GitHub accounts, so sign-in friction is near zero.
- Pairs naturally with the view-counter feature (02) — same Supabase project, same client setup.

## Implementation

### Step 1: Supabase setup

- Enable the GitHub provider in Supabase Auth (needs a GitHub OAuth app; callback URL from the Supabase dashboard).
- Table:

```sql
create table guestbook (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id),
  username text not null,   -- GitHub login, from user metadata
  avatar_url text,
  message text not null check (char_length(message) between 1 and 280),
  created_at timestamptz not null default now()
);

alter table guestbook enable row level security;
create policy "read all" on guestbook for select using (true);
create policy "insert own" on guestbook for insert with check (auth.uid() = user_id);
create policy "delete own" on guestbook for delete using (auth.uid() = user_id);
```

### Step 2: Auth wiring

- Add `@supabase/supabase-js` and `@supabase/ssr`; create the standard client/server helpers (`src/lib/supabase/client.ts`, `server.ts`) and the `/auth/callback` route handler per the Supabase Next.js App Router guide.
- No site-wide auth needed — the session only matters on `/guestbook`.

### Step 3: The page

`src/app/guestbook/page.tsx`:

- **Server component** fetches the latest ~50 entries (`order by created_at desc`).
- **Entry list**: avatar, `@username` (linked to their GitHub), message, relative timestamp. Style as simple rows with the existing `border-border` dividers — matches the reading-list aesthetic.
- **Sign-in state** (client component):
  - Signed out → "Sign in with GitHub to leave a message" button (`supabase.auth.signInWithOAuth({ provider: "github" })`).
  - Signed in → single-line input + submit (server action inserts the row, `revalidatePath("/guestbook")`), plus a sign-out link and a delete button on the user's own entries.
- 280-char limit enforced in the input UI *and* the DB check constraint.

### Step 4: Anti-abuse (keep it proportionate)

- One entry per user per 10 minutes: check the user's latest `created_at` in the server action before inserting.
- Your own moderation path: a service-role delete script, or just delete rows in the Supabase dashboard. Skip building an admin UI.

### Step 5: Integration

- Add to `Navigation`, mobile nav, command palette.
- OG metadata: "Sign my guestbook".

## Effort Estimate

**4–6 hours**, most of it the one-time Supabase Auth + SSR helper setup (which feature 02 can then reuse).

## Success Criteria

- Full flow works in production: sign in with GitHub → post → entry appears → delete own entry.
- Unauthenticated visitors can read everything but cannot write (verified by RLS, not just UI).
- The page renders (read-only) even if the visitor blocks third-party auth.
