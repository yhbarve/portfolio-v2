# "Ask My Portfolio" — AI Chat About You

## The Idea

A chat interface (an `/ask` page, plus optionally a small launcher in the corner or a command palette entry) where visitors ask natural-language questions — "Has Yash worked with distributed systems?", "Tell me about his internships", "What's his strongest project?" — and get answers grounded in your actual resume, blog posts, project descriptions, and experience data.

This is the highest-impact net-new feature you can build. Recruiters actually use it because it collapses "read the whole site" into one question, and it's the clearest possible live demonstration that you can build AI products end-to-end: retrieval, prompt design, streaming, rate limiting, and guardrails. The portfolio itself becomes your best project.

## Why It Fits This Codebase

- All source material already exists as structured data: `allPosts` from Contentlayer, `src/data/experienceData.ts`, `src/data/projectData.ts`, education data, plus your resume.
- Supabase is available (configured MCP, unused) and ships `pgvector` for embeddings — no new vendor needed.
- Pairs with features 02/06: same Supabase project, same client setup.

## Implementation

### Step 1: Content ingestion (build-time script)

`scripts/ingest-embeddings.mjs`, run manually or on deploy when content changes:

- Gather chunks from: published post bodies (split by heading, ~500 tokens each), each experience entry, each project (name + description + tech), education entries, and a hand-written `src/data/bio.md` covering things the site doesn't say explicitly (interests, work authorization, what you're looking for).
- Embed each chunk with a cheap embeddings model (e.g. OpenAI `text-embedding-3-small`).
- Upsert into Supabase:

```sql
create extension if not exists vector;
create table documents (
  id text primary key,          -- stable hash of source+chunk
  source text not null,         -- 'post:slug', 'experience:2', 'bio'
  content text not null,
  embedding vector(1536)
);
create index on documents using hnsw (embedding vector_cosine_ops);

create function match_documents(query_embedding vector(1536), match_count int default 6)
returns table (content text, source text, similarity float)
language sql stable as $$
  select content, source, 1 - (embedding <=> query_embedding)
  from documents
  order by embedding <=> query_embedding
  limit match_count;
$$;
```

### Step 2: Chat API route

`src/app/api/ask/route.ts` (Edge runtime for streaming):

1. Embed the user's question.
2. Call `match_documents` for the top ~6 chunks.
3. Call the LLM (e.g. `gpt-4o-mini` or Claude Haiku — cheap, fast) with a strict system prompt:
   - "You answer questions about Yash Barve using only the provided context. If the context doesn't contain the answer, say you don't know and suggest emailing him. Refuse off-topic requests politely. Keep answers under 150 words. Speak about Yash in the third person."
4. Stream the response (Vercel AI SDK's `streamText` makes this trivial).

**Cost/abuse controls (important for a public LLM endpoint):**

- Rate limit by IP: ~10 questions/hour via Upstash Redis ratelimit or a simple Supabase counter table.
- Cap question length (300 chars) and history (last 4 turns).
- Set a hard monthly spend limit on the API key. At `gpt-4o-mini` prices, even heavy traffic costs single-digit dollars.

### Step 3: UI

`src/app/ask/page.tsx`:

- Minimal chat: message list + input, streaming tokens, styled with existing tokens (`bg-surface-1`, `accent` for your messages' avatar dot).
- Seed with 4 suggested questions as clickable chips ("What has Yash built?", "What internships has he done?", "What is he looking for?", "What does he write about?").
- Each answer footer cites sources as links ("from: Experience, *Paradox of Nostalgia*") using the `source` field — this builds trust and drives traffic into the site.
- Add "Ask AI about me" to `Navigation` and the command palette.

### Step 4: Evaluation pass

Before shipping, run a checklist of ~20 questions (factual, off-topic, adversarial "ignore your instructions") and tune the system prompt until behavior is right. Log Q&A pairs (anonymized) to a Supabase table so you can see what people actually ask and patch gaps in `bio.md`.

## Effort Estimate

**1–2 days**: ingestion + API ~4 hours, UI ~3 hours, prompt tuning and abuse controls ~3 hours.

## Success Criteria

- Factual questions about experience/projects/writing get accurate, cited answers.
- Off-topic or adversarial prompts are declined gracefully.
- A visitor with no context can learn your background in 3 questions faster than by browsing.
- Monthly cost stays under a set budget cap regardless of traffic.
