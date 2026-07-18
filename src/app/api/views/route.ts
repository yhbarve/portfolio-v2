import { NextResponse } from "next/server";
import { getTopViews } from "@/lib/views";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const views = await getTopViews(5);
    return NextResponse.json(
      { views },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
        },
      }
    );
  } catch (error) {
    console.error("[api/views] list failed:", error);
    return NextResponse.json({ views: [] }, { status: 200 });
  }
}
