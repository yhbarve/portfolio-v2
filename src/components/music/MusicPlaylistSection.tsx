import Image from "next/image";

import type { MusicPlaylistLink } from "@/lib/music";

export default function MusicPlaylistSection({
  playlists,
}: Readonly<{ playlists: MusicPlaylistLink[] }>) {
  if (playlists.length === 0) {
    return (
      <div className="mt-2 lg:mt-8">
        <div className="font-medium lg:text-sm text-xs">No playlists linked yet.</div>
        <div className="mt-2 lg:text-sm text-xs font-light text-text-1/80">
          Add entries to <code className="rounded bg-surface-2 px-1 py-0.5 text-[0.85em]">PLAYLIST_LINKS</code>{" "}
          in <code className="rounded bg-surface-2 px-1 py-0.5 text-[0.85em]">src/lib/music.ts</code>.
        </div>
      </div>
    );
  }

  return (
    <ul className="mt-4 flex flex-col gap-3">
      {playlists.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-4 rounded-md border border-border/20 bg-surface-1/80 px-4 py-3 transition duration-200 ease-in-out hover:border-accent/40 hover:shadow-md lg:hover:shadow-lg"
          >
            {item.thumbnailUrl ? (
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border/15 bg-surface-2">
                <Image
                  src={item.thumbnailUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
            ) : null}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-text-1 group-hover:text-accent lg:text-base">
                  {item.title}
                </span>
                {item.platform ? (
                  <span className="text-xs text-text-1/70">{item.platform}</span>
                ) : null}
              </div>
              {item.description ? (
                <p className="mt-1 text-xs font-light text-text-1/80 lg:text-sm">{item.description}</p>
              ) : null}
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
