import Link from "next/link";
import { allPosts } from "../../../.contentlayer/generated";

export const metadata = { title: "Blogs" };

export default function BlogsPage() {
  const posts = allPosts
    .filter((p) => p.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    // <div className="prose dark:prose-invert max-w-3xl mx-auto py-10">
    //   <h1>Blogs</h1>
    //   <ul>
    // {posts.map(p => (
    //   <li key={p.slug} className="mb-4">
    //     <Link className="no-underline" href={`/blog/${p.slug}`}>
    //       <h3 className="m-0">{p.title}</h3>
    //     </Link>
    //     <div className="text-sm opacity-70">
    //       {new Date(p.date).toDateString()}
    //     </div>
    //     {p.summary && <p className="m-0">{p.summary}</p>}
    //   </li>
    // ))}
    //   </ul>
    // </div>
    <div className="scroll-smooth bg-gradient-to-tr from-background-1 via-background-2 to-background-3 transition duration-200 ease-in-out">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="pt-24">
          <div className="hover:translate-x-1 transition-all ease-in-out">
            <a
              href="/"
              className="text-3xl font-medium text-page-nameForeground"
            >
              ← Yash Barve
            </a>
          </div>
          <h1 className="text-5xl font-semibold text-page-titleForeground inline-block pb-3 mt-2">
            Writings Collection
          </h1>
        </div>
        <div className="grid grid-cols-12 border-b-[0.5px] p-2 pb-4 pt-9 border-page-headerBorder text-page-headerForeground font-semibold">
          <div className="col-span-3 md:col-span-2">Date</div>
          <div className="col-span-7 md:col-span-4">Title</div>
          <div className="hidden md:block col-span-5">Summary</div>
          <div className="col-span-2 md:col-span-1 mx-auto">Read</div>
        </div>
        <div className="flex flex-col text-page-itemForeground hover:text-page-itemOtherHoverForeground ">
          {posts.map((p) => (
            <div
              key={p.slug}
              className="grid grid-cols-12 px-2 py-4 my-2 font-light text-base
              items-center
              text-page-itemForeground hover:bg-page-itemHoverBackground hover:text-page-itemHoverForeground
              hover:border-page-itemHoverBorder cursor-default rounded-md border border-page-itemBorder
              transition duration-200 ease-in-out"
            >
              <div className="text-sm col-span-3 md:col-span-2">
                {new Date(p.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="no-underline col-span-7 md:col-span-4">
                <a href={`/blog/${p.slug}`} className="m-0 hover:opacity-80">
                  {p.title}
                </a>
              </div>
              {p.summary && <p className="hidden md:block md:col-span-5">{(p.summary.length <= 100 ? p.summary : p.summary.slice(0, 100) + '...')}</p>}
              <a
                href={`/blog/${p.slug}`}
                target="_blank"
                className="block col-span-2 md:col-span-1 mx-auto font-normal text-sm
        hover:bg-page-itemLinkHoverBackground p-2 rounded-md transition ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  className="text-inherit"
                >
                  <path
                    fill="currentColor"
                    d="M117.18 188.74a12 12 0 0 1 0 17l-5.12 5.12A58.26 58.26 0 0 1 70.6 228a58.62 58.62 0 0 1-41.46-100.08l34.75-34.75a58.64 58.64 0 0 1 98.56 28.11a12 12 0 1 1-23.37 5.44a34.65 34.65 0 0 0-58.22-16.58l-34.75 34.75A34.62 34.62 0 0 0 70.57 204a34.4 34.4 0 0 0 24.49-10.14l5.11-5.12a12 12 0 0 1 17.01 0M226.83 45.17a58.65 58.65 0 0 0-82.93 0l-5.11 5.11a12 12 0 0 0 17 17l5.12-5.12a34.63 34.63 0 1 1 49 49l-34.81 34.7A34.4 34.4 0 0 1 150.61 156a34.63 34.63 0 0 1-33.69-26.72a12 12 0 0 0-23.38 5.44A58.64 58.64 0 0 0 150.56 180h.05a58.28 58.28 0 0 0 41.47-17.17l34.75-34.75a58.62 58.62 0 0 0 0-82.91"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
