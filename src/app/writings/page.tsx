import Link from "next/link";
import { allPosts } from "../../../.contentlayer/generated";
import { cn } from "@/lib/utils";
import { WRITING_CATEGORIES, type WritingCategory } from "@/lib/writings";

interface WritingsPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogsPage({ searchParams }: WritingsPageProps) {
  const { category: categoryParam } = await searchParams;
  const categoryFilter =
    categoryParam && WRITING_CATEGORIES.includes(categoryParam as WritingCategory)
      ? (categoryParam as WritingCategory)
      : null;

  const posts = allPosts
    .filter((p) => p.published)
    .filter((p) => {
      if (!categoryFilter) return true;
      const postCategory = (p as { category?: string }).category;
      return postCategory === categoryFilter;
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <div className="lg:pb-24">
      <div className="flex flex-wrap gap-2 pb-6 pt-2">
        <Link
          href="/writings"
          className={cn(
            "rounded-full px-2 lg:px-4 py-1 lg:py-2 text-xs lg:text-sm font-medium transition-colors",
            !categoryFilter
              ? "text-accent border border-accent"
              : "text-text-1 bg-surface-1 border border-border/30 lg:hover:text-accent-soft lg:hover:bg-surface-2 lg:hover:border-accent/60"
          )}
        >
          All
        </Link>
        {WRITING_CATEGORIES.map((cat) => (
          <Link
            key={cat}
            href={`/writings?category=${encodeURIComponent(cat)}`}
            className={cn(
              "rounded-full px-4 py-1 lg:py-2 text-xs lg:text-sm font-medium transition-colors",
              categoryFilter === cat
                ? "text-accent border border-accent"
                : "text-text-1 bg-surface-1 border border-border/30 lg:hover:text-accent-soft lg:hover:bg-surface-2 lg:hover:border-accent/60"
            )}
          >
            {cat}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-12 p-4 pb-2 pt-2 text-accent font-semibold">
        <div className="col-span-2 md:col-span-2 text-xs lg:text-base">Date</div>
        <div className="col-span-8 md:col-span-8 text-xs lg:text-base">Title</div>
        <div className="col-span-2 md:col-span-2 mx-auto text-xs lg:text-base">Category</div>
        {/* <div className="col-span-1 mx-auto">Read</div> */}
      </div>
      <div className="flex flex-col mb-12">
        {posts.map((p) => {
          const postCategory = (p as { category?: string }).category;
          return (
            <div
              key={p.slug}
              className="grid grid-cols-12 p-4 my-2 font-light text-base
                items-start
                text-text-1 lg:hover:shadow-lg bg-surface-1
                lg:hover:border-page-itemHoverBorder cursor-default rounded-md border border-border/5
                transition duration-200 ease-in-out"
            >
              <div className="text-xs lg:text-base col-span-2 md:col-span-2">
                {new Date(p.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="no-underline col-span-8 md:col-span-8 pr-2 text-xs lg:text-base font-medium lg:font-semibold">
                <a
                  href={`/blog/${p.slug}`}
                  className="m-0 lg:hover:text-accent"
                >
                  {p.title}
                </a>
              </div>
              <div className="col-span-2 md:col-span-2 text-xs lg:text-base text-accent-foreground font-medium mx-auto bg-accent border border-border/30 rounded-full px-1 lg:px-2 py-1 lg:py-2">
                {postCategory ?? "—"}
              </div>
              {/* <a
                href={`/blog/${p.slug}`}
                target="_blank"
                className="block col-span-1 mx-auto font-normal text-sm
                  p-2 rounded-md transition ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  className="text-inherit hover:text-accent-foreground"
                >
                  <path
                    fill="currentColor"
                    d="M117.18 188.74a12 12 0 0 1 0 17l-5.12 5.12A58.26 58.26 0 0 1 70.6 228a58.62 58.62 0 0 1-41.46-100.08l34.75-34.75a58.64 58.64 0 0 1 98.56 28.11a12 12 0 1 1-23.37 5.44a34.65 34.65 0 0 0-58.22-16.58l-34.75 34.75A34.62 34.62 0 0 0 70.57 204a34.4 34.4 0 0 0 24.49-10.14l5.11-5.12a12 12 0 0 1 17.01 0M226.83 45.17a58.65 58.65 0 0 0-82.93 0l-5.11 5.11a12 12 0 0 0 17 17l5.12-5.12a34.63 34.63 0 1 1 49 49l-34.81 34.7A34.4 34.4 0 0 1 150.61 156a34.63 34.63 0 0 1-33.69-26.72a12 12 0 0 0-23.38 5.44A58.64 58.64 0 0 0 150.56 180h.05a58.28 58.28 0 0 0 41.47-17.17l34.75-34.75a58.62 58.62 0 0 0 0-82.91"
                  />
                </svg>
              </a> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
