"use client";

import { useEffect, useState } from "react";

type HeadingItem = {
  id: string;
  label: string;
  level: 2 | 3;
};

export default function ContentTimeline({
  rootId,
}: {
  rootId: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [headings, setHeadings] = useState<HeadingItem[]>([]);

  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;

    const nodes = Array.from(
      root.querySelectorAll<HTMLElement>("h2[id], h3[id]")
    );

    const next = nodes
      .map((el) => {
        const id = el.id;
        const level = (el.tagName === "H3" ? 3 : 2) as 2 | 3;
        const label = (el.textContent ?? "").replace(/\s+/g, " ").trim();
        if (!id || !label) return null;
        return { id, label, level };
      })
      .filter((x): x is HeadingItem => Boolean(x));

    setHeadings(next);
  }, [rootId]);

  useEffect(() => {
    if (headings.length === 0) return;

    const updateActive = () => {
      const offset = 140; // keep highlighted item slightly below the sticky header
      let current: HTMLElement | null = null;

      for (const h of headings) {
        const el = document.getElementById(h.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) current = el;
      }

      setActiveId(current?.id ?? headings[0]?.id ?? null);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="lg:sticky lg:top-24">
      <div className="">
        <div className="mb-3 text-sm font-regular tracking-wide text-accent">CONTENTS</div>
        <nav className="space-y-1 border-l-2 border-border pl-4">
          {headings.map((h) => {
            const isActive = h.id === activeId;
            return (
              <a
                key={h.id}
                href={`#${h.id}`}
                className={[
                  "block text-sm font-light text-text-1/90 hover:text-accent-soft transition-colors",
                  h.level === 3 ? "pl-3" : "pl-0",
                  isActive
                    ? "text-accent-soft"
                    : "",
                ].join(" ")}
              >
                <span
                  className={[
                    "inline-flex items-center gap-2",
                    isActive ? "font-regular text-accent-soft" : "",
                  ].join(" ")}
                >
                  {h.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

