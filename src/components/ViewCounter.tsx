"use client";

import { useEffect, useState } from "react";

function viewedKey(slug: string) {
  return `viewed:${slug}`;
}

export function ViewCounter({ slug }: { slug: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function track() {
      const key = viewedKey(slug);
      const alreadyViewed =
        typeof window !== "undefined" &&
        sessionStorage.getItem(key) === "1";

      try {
        const res = await fetch(`/api/views/${encodeURIComponent(slug)}`, {
          method: alreadyViewed ? "GET" : "POST",
        });
        const data = (await res.json()) as { count?: number | null };

        if (!cancelled && typeof data.count === "number") {
          setCount(data.count);
        }

        if (!alreadyViewed && res.ok) {
          sessionStorage.setItem(key, "1");
        }
      } catch {
        // Graceful: leave count as "–"
      }
    }

    track();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return (
    <span className="text-text-1/60 text-sm">
      {count !== null ? count.toLocaleString() : "–"}{" "}
      {count === 1 ? "view" : "views"}
    </span>
  );
}
