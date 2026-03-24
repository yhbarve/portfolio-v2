"use client";

import Image from "next/image";

import { formatTrackDuration, type PlaylistSummary, type WeeklyTopTrack } from "@/lib/music";

export default function MusicTopTracksSection({
  tracks,
  notice,
  playlist,
}: Readonly<{
  tracks: WeeklyTopTrack[];
  notice?: string;
  playlist?: PlaylistSummary;
}>) {
  if (tracks.length === 0) {
    return (
      <div className="mt-2 lg:mt-8">
        {notice ? (
          <p className="mb-3 text-sm font-light text-text-1/90 lg:text-base">{notice}</p>
        ) : null}
        <div className="font-medium lg:text-sm text-xs">No tracks listed yet.</div>
        <div className="mt-2 lg:text-sm text-xs font-light text-text-1/80">
          Configure <code className="rounded bg-surface-2 px-1 py-0.5 text-[0.85em]">MUSIC_PLAYLISTS</code> in{" "}
          <code className="rounded bg-surface-2 px-1 py-0.5 text-[0.85em]">src/lib/music.ts</code> with each
          playlist&apos;s YouTube Music <code className="rounded bg-surface-2 px-1 py-0.5 text-[0.85em]">list=</code>{" "}
          id.
        </div>
      </div>
    );
  }

  return (
    <>
      {playlist ? (
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 rounded-lg bg-surface-1/80 p-4 shadow-sm backdrop-blur-sm sm:items-stretch">
          {playlist.thumbnailUrl ? (
            <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-md border border-border/20 bg-surface-2 sm:mx-0 sm:h-36 sm:w-36">
              <Image
                src={playlist.thumbnailUrl}
                alt={playlist.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, 144px"
              />
            </div>
          ) : null}
          <div className="flex flex-col sm:flex-row min-w-0 flex-1 gap-2 sm:gap-4 items-center justify-between">
            <div className="flex flex-col justify-center items-center sm:items-start">
              <h3 className="text-xl font-semibold leading-tight text-page-titleForeground">{playlist.title}</h3>
              <p className="mt-1 text-base text-text-1/65">
                {playlist.trackCount} {playlist.trackCount === 1 ? "track" : "tracks"}
              </p>
            </div>
            <a
              href={playlist.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              Open in YouTube Music
            </a>
          </div>
        </div>
      ) : null}

      <ul className="mt-6 flex flex-col gap-2">
        {tracks.map((track, index) => {
          const durationLabel = formatTrackDuration(track.durationSeconds);
          const content = (
            <div className="min-w-0 sm:gap-4 sm:grid sm:grid-cols-2 flex flex-col">
              <span className="truncate font-medium text-text-1 col-span-1 sm:pl-2 sm:hover:text-accent transition duration-300 ease-in-out">{track.title}<span className="ml-2 inline-block sm:hidden text-accent rotate-45" aria-hidden>↑</span></span>
              <span className="shrink-0 text-text-1/80 italic col-span-1 truncate">{track.artist}</span>
            </div>
          );
          const rowInner = (
            <>
              <span className="flex w-7 shrink-0 justify-center font-semibold text-xs text-accent">
                {index + 1}
              </span>
              {track.thumbnailUrl ? (
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-surface-2">
                  <Image
                    src={track.thumbnailUrl}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
              ) : null}
              <div className="min-w-0 flex-1">
                {track.href ? (
                  <a
                    href={track.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-sm"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
              {durationLabel ? (
                <span className="ml-2 sm:ml-0 shrink-0 font-semibold text-xs text-accent">{durationLabel}</span>
              ) : (
                <span className="w-10 shrink-0 sm:w-12" aria-hidden />
              )}
            </>
          );
          return (
            <li
              key={`${track.title}-${track.artist}-${index}`}
              className="flex items-center gap-3 rounded-md border border-border/15 bg-surface-1/60 px-3 py-2.5 hover:shadow-lg transition duration-300 ease-in-out"
            >
              {rowInner}
            </li>
          );
        })}
      </ul>
    </>
  );
}
