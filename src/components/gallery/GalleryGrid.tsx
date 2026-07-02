"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import type { GalleryItem } from "@/data/galleryData";
import { cn } from "@/lib/utils";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = useMemo(() => {
    if (activeIndex === null) return null;
    return items[activeIndex] ?? null;
  }, [activeIndex, items]);

  useEffect(() => {
    if (!activeItem) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === null ? 0 : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setActiveIndex((i) =>
          i === null ? 0 : (i - 1 + items.length) % items.length
        );
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeItem, items.length]);

  return (
    <>
      <div className="mt-2 grid grid-cols-1 gap-4 auto-rows-[18rem] sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "text-left rounded-xl border border-border/20 bg-surface-1 shadow-sm overflow-hidden hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background-3",
              item.layout === "tall" ? "row-span-2" : "row-span-1"
            )}
            aria-label={`Open ${item.caption ?? item.alt}`}
          >
            <div className="relative h-full w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent px-4 pb-1 pt-10">
                <div className="flex items-end justify-between gap-3 p-2">
                  <div className="min-w-0">
                    {item.caption ? (
                      <div className="truncate text-xs font-medium text-white/95">
                        {item.caption}
                      </div>
                    ) : null}
                  </div>
                  <div className="shrink-0 text-[11px] font-light text-white/85">
                    {item.date}
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="absolute inset-0 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-5xl">
              <div className="flex items-center justify-between pb-3">
                <div className="text-sm font-medium text-white/90">
                  {activeItem.caption ?? activeItem.alt}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="rounded-md px-3 py-1.5 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>

              <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-black">
                <div className="relative h-[70vh] w-full">
                  <Image
                    src={activeItem.src}
                    alt={activeItem.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>

              <div className="pt-3 text-xs text-white/70">
                Tip: press Esc to close • ←/→ to navigate
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

