export interface MusicPlaylistLink {
  title: string;
  href: string;
  platform?: string;
  description?: string;
  /** Optional cover art URL (shown next to the title). */
  thumbnailUrl?: string;
}

/** External playlist links (YouTube Music, Spotify, etc.). Edit this list to match your profiles. */
export const PLAYLIST_LINKS: MusicPlaylistLink[] = [];

export interface WeeklyTopTrack {
  title: string;
  artist: string;
  /** Optional link (e.g. YouTube Music or YouTube search URL for the track). */
  href?: string;
  /** Cover / thumbnail when loaded from ytmusic-api or set manually. */
  thumbnailUrl?: string;
  /** Duration in seconds when available. */
  durationSeconds?: number | null;
}

/** Metadata for the loaded YouTube Music playlist (weekly section header). */
export interface PlaylistSummary {
  title: string;
  owner: string;
  thumbnailUrl?: string;
  trackCount: number;
  href: string;
}

export function formatTrackDuration(seconds: number | null | undefined): string | undefined {
  if (seconds == null || Number.isNaN(seconds) || seconds <= 0) {
    return undefined;
  }
  const total = Math.floor(seconds);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** One of the four tabs on the Music page — set `youtubePlaylistId` to the `list=` value from YouTube Music. */
export interface MusicPlaylistConfig {
  id: string;
  label: string;
  /** YouTube Music playlist id (`list=` in the playlist URL). */
  youtubePlaylistId: string;
}

/**
 * Four playlists shown as pills on `/music`. Edit labels and paste each playlist id from YouTube Music.
 */
export const MUSIC_PLAYLISTS: MusicPlaylistConfig[] = [
  { id: "playlist-1", label: "Hindi", youtubePlaylistId: "PL5yT-utku0P_STpxQWse6qbb8wBQsnBh7" },
  { id: "playlist-2", label: "English", youtubePlaylistId: "PL5yT-utku0P-QhYWO-8GGzXPRxdxdxi6m" },
  { id: "playlist-3", label: "Lofi Hip-Hop", youtubePlaylistId: "PL5yT-utku0P-wjdY-7O5PBx6srtAXK4py" },
  { id: "playlist-4", label: "Scores", youtubePlaylistId: "PL5yT-utku0P-6Yw-0eHg5p2lamEeyVYpi" },
];  

/** Server-fetched data for one tab (passed to the client pill UI). */
export interface LoadedMusicPlaylist {
  id: string;
  label: string;
  tracks: WeeklyTopTrack[];
  playlist?: PlaylistSummary;
  notice?: string;
}

/**
 * Curated fallback tracks (optional). The music page uses {@link MUSIC_PLAYLISTS} instead.
 */
export const WEEKLY_TOP_TRACKS: WeeklyTopTrack[] = [];
