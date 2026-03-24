import YTMusic from "ytmusic-api";

import type {
  LoadedMusicPlaylist,
  MusicPlaylistConfig,
  PlaylistSummary,
  WeeklyTopTrack,
} from "@/lib/music";

export interface GetPlaylistSongsResult {
  ok: boolean;
  tracks: WeeklyTopTrack[];
  playlist?: PlaylistSummary;
  error?: string;
}

export function pickBestThumbnail(
  thumbnails: ReadonlyArray<{ url: string; width: number; height: number }>,
): string | undefined {
  if (!thumbnails.length) {
    return undefined;
  }
  const sorted = [...thumbnails].sort((a, b) => b.width * b.height - a.width * a.height);
  return sorted[0]?.url;
}

function videoToTrack(video: {
  videoId: string;
  name: string;
  artist: { name: string };
  duration: number | null;
  thumbnails: { url: string; width: number; height: number }[];
}): WeeklyTopTrack {
  return {
    title: video.name,
    artist: video.artist.name,
    href: `https://music.youtube.com/watch?v=${video.videoId}`,
    thumbnailUrl: pickBestThumbnail(video.thumbnails),
    durationSeconds: video.duration,
  };
}

/**
 * Returns every song/video from a YouTube Music playlist via ytmusic-api (`getPlaylistVideos`),
 * plus playlist metadata from `getPlaylist` (title, owner, cover, counts).
 * Set `YTMUSIC_COOKIE` if the playlist is not public.
 */
export async function getPlaylistSongs(playlistId: string): Promise<GetPlaylistSongsResult> {
  const trimmed = playlistId.trim();
  if (!trimmed) {
    return { ok: false, tracks: [], error: "Missing playlist id." };
  }

  try {
    const ytmusic = new YTMusic();
    const initOptions =
      process.env.YTMUSIC_COOKIE !== undefined && process.env.YTMUSIC_COOKIE.length > 0
        ? { cookies: process.env.YTMUSIC_COOKIE }
        : undefined;
    await ytmusic.initialize(initOptions);

    const [playlistFull, videos] = await Promise.all([
      ytmusic.getPlaylist(trimmed).catch(() => null),
      ytmusic.getPlaylistVideos(trimmed),
    ]);

    const tracks = videos.map(videoToTrack);

    let playlist: PlaylistSummary | undefined;
    if (playlistFull) {
      playlist = {
        title: playlistFull.name,
        owner: playlistFull.artist.name,
        thumbnailUrl: pickBestThumbnail(playlistFull.thumbnails),
        trackCount: playlistFull.videoCount,
        href: `https://music.youtube.com/playlist?list=${playlistFull.playlistId}`,
      };
    }

    return { ok: true, tracks, playlist };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { ok: false, tracks: [], error: message };
  }
}

/** Fetches one configured tab for the Music page pills UI. */
export async function loadMusicPlaylistTab(config: MusicPlaylistConfig): Promise<LoadedMusicPlaylist> {
  const { id, label, youtubePlaylistId } = config;
  if (!youtubePlaylistId.trim()) {
    return {
      id,
      label,
      tracks: [],
      notice: `Add a YouTube Music playlist id for “${label}” in MUSIC_PLAYLISTS (src/lib/music.ts).`,
    };
  }

  const result = await getPlaylistSongs(youtubePlaylistId.trim());

  if (!result.ok) {
    return {
      id,
      label,
      tracks: [],
      notice: `Could not load: ${result.error ?? "Unknown error"}`,
    };
  }

  if (result.tracks.length === 0) {
    return {
      id,
      label,
      tracks: [],
      playlist: result.playlist,
      notice: "This playlist has no tracks yet.",
    };
  }

  return {
    id,
    label,
    tracks: result.tracks,
    playlist: result.playlist,
    notice: "Loaded from YouTube Music (ytmusic-api).",
  };
}
