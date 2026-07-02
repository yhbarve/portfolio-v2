import MusicPlaylistPills from "@/components/music/MusicPlaylistPills";
import { MUSIC_PLAYLISTS } from "@/lib/music";
import { loadMusicPlaylistTab } from "@/lib/ytmusic-playlist";

export const revalidate = 86400;

export default async function MusicPage() {
  const loadedPlaylists = await Promise.all(MUSIC_PLAYLISTS.map((config) => loadMusicPlaylistTab(config)));

  return (
    <div className="pb-12">
      <section aria-labelledby="music-playlists-heading" className="mt-2 lg:mt-2">
        <MusicPlaylistPills playlists={loadedPlaylists} />
      </section>
    </div>
  );
}
