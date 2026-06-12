import { GALLERY_ITEMS } from "@/data/galleryData";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  const hasItems = GALLERY_ITEMS.length > 0;
  const sortedItems = GALLERY_ITEMS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="pb-12 lg:pt-2">
      {!hasItems ? (
        <div className="mt-2 lg:mt-8">
          <div className="font-medium lg:text-sm text-xs">No images yet.</div>
          <div className="mt-2 lg:text-sm text-xs font-light text-text-1/80">
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

