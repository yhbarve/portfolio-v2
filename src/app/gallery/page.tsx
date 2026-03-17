import { GALLERY_ITEMS } from "@/lib/gallery";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  const hasItems = GALLERY_ITEMS.length > 0;
  const sortedItems = GALLERY_ITEMS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="pb-12 pt-2">
      {!hasItems ? (
        <div className="mt-8">
          <div className="font-medium">No images yet.</div>
          <div className="mt-2 text-sm font-light text-text-1/80">
            Add files to `public/gallery/` (example: `/gallery/my-shot.jpg`) and
            then register them in `GALLERY_ITEMS`.
          </div>
        </div>
      ) : (
        <GalleryGrid items={sortedItems} />
      )}
    </div>
  );
}

