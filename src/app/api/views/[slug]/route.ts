import { NextResponse } from "next/server";
import { getViewCount, incrementView } from "@/lib/views";

export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

function decodeSlug(raw: string) {
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

export async function GET(_request: Request, context: RouteContext) {
  const { slug: raw } = await context.params;
  const slug = decodeSlug(raw);

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const count = await getViewCount(slug);

  return NextResponse.json(
    { count: count ?? 0 },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    }
  );
}

export async function POST(_request: Request, context: RouteContext) {
  const { slug: raw } = await context.params;
  const slug = decodeSlug(raw);

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const count = await incrementView(slug);

  if (count === null) {
    return NextResponse.json(
      { count: null, error: "Views unavailable" },
      { status: 503 }
    );
  }

  return NextResponse.json({ count });
}
