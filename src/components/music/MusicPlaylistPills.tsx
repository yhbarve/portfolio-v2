"use client";

import { useMemo, useState } from "react";

import type { LoadedMusicPlaylist } from "@/lib/music";

import MusicTopTracksSection from "@/components/music/MusicTopTracksSection";

export default function MusicPlaylistPills({
  playlists,
}: Readonly<{
  playlists: LoadedMusicPlaylist[];
}>) {
  const initialId = useMemo(() => {
    const withTracks = playlists.find((p) => p.tracks.length > 0);
    return withTracks?.id ?? playlists[0]?.id ?? "";
  }, [playlists]);

  const [activeId, setActiveId] = useState(initialId);

  const active = playlists.find((p) => p.id === activeId) ?? playlists[0];

  if (!playlists.length) {
    return null;
  }

  return (
    <div className="mt-6">
      <div
        role="tablist"
        aria-label="Playlists"
        className="flex flex-wrap gap-2 border-b border-border/20 pb-4"
      >
        {playlists.map((p) => {
          const isActive = p.id === activeId;
          return (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              id={`music-tab-${p.id}`}
              aria-controls={`music-panel-${p.id}`}
              onClick={() => setActiveId(p.id)}
              className={[
                "rounded-full border px-4 py-2 text-xs lg:text-sm font-medium shadow-sm transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background-3",
                isActive
                  ? "border-accent text-accent"
                  : "border-border/30 bg-surface-1 text-text-1 hover:border-accent/60 hover:text-accent-soft",
              ].join(" ")}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      {active ? (
        <div
          role="tabpanel"
          id={`music-panel-${active.id}`}
          aria-labelledby={`music-tab-${active.id}`}
          className="mt-6"
        >
          <MusicTopTracksSection
            tracks={active.tracks}
            notice={active.notice}
            playlist={active.playlist}
          />
        </div>
      ) : null}
    </div>
  );
}
