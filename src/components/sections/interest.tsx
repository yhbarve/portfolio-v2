 "use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

type InterestInfo = {
  label: string;
  description: ReactNode;
};

const INTEREST_DETAILS: InterestInfo[] = [
  {
    label: "Reading",
    description: (
      <>
        Mostly fiction with occasional non‑fiction. I’m trying to read more
        consistently, and I keep a running log on the{" "}
        <Link
          href="/reading"
          className="underline underline-offset-4 hover:text-accent"
        >
          Bookshelf
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    label: "Formula 1",
    description:
      "Watched every race since Spa 2018. Member of the Tifosi. Delusionally supporting Scuderia Ferrari and Charles Leclerc. Intrigued by the technical and strategic sides of the sport as much as the racing.",
  },
  {
    label: "Music",
    description:
      "Don't think I could live without music. Almost always plugged in to my headphones. My go-to genres are lofi hip-hop, movie scores, classical, and Arijit Singh. Love to curate my own playlists for every mood.",
  },
  {
    label: "Movies & TV",
    description:
      "Massive fan of the Mission: Impossible franchise. Drawn to thriller, sci-fi and dystopian genres that explore complex future worlds and technological shifts.",
  },
  {
    label: "Sports",
    description:
      "Love swimming, and playing cricket & table tennis. Can play badminton, tennis, and football (soccer).",
  },
  {
    label: "Graphic Design",
    description:
      <>
        Enjoy experimenting with layouts, color, and typography. Ran a small F1 Instagram page (
        <Link
          href="https://www.instagram.com/onef1_official/"
          className="underline underline-offset-4 hover:text-accent"
        >
          OneF1
        </Link>
        ) for a while, creating race and stats graphics.
      </>,
  },
];

export default function Interest({
  interests,
}: {
  interests?: string[];
}) {
  const [active, setActive] = useState<InterestInfo | null>(null);

  const items: InterestInfo[] = interests?.length
    ? interests.map((label) => {
        const found = INTEREST_DETAILS.find((d) => d.label === label);
        return (
          found ?? {
            label,
            description: "More details coming soon.",
          }
        );
      })
    : INTEREST_DETAILS;

  return (
    <div id="interests" className="mt-12 mb-24">
      <div className="text-sm font-bold pb-2 cursor-default text-accent flex items-center gap-2">
        <span className="text-base">HOBBIES & INTERESTS</span>
        <span className="text-xs font-normal text-text-1">(Click to view more)</span>
      </div>
      <div className="flex flex-wrap gap-2 text-text-1">
        {items.map((interest) => {
          const isActive = active?.label === interest.label;
          return (
            <button
              key={interest.label}
              type="button"
              onClick={() =>
                setActive((prev) =>
                  prev?.label === interest.label ? null : interest,
                )
              }
              className={[
                "rounded-full border px-4 py-2 text-sm font-medium shadow-sm transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background-3",
                isActive
                    ? "text-accent border border-accent"
                    : "text-text-1 bg-surface-1 border border-border/30"
              ].join(" ")}
            >
              {interest.label}
            </button>
          );
        })}
      </div>

      {active && (
        <div className="mt-4 w-full max-w-xl rounded-lg border border-border/30 bg-surface-1/80 p-4 text-sm text-text-1 shadow-md backdrop-blur-sm">
          <div className="mb-1 text-xs font-semibold tracking-wide text-accent">
            {active.label.toUpperCase()}
          </div>
          <p className="leading-relaxed">{active.description}</p>
        </div>
      )}
    </div>
  );
}