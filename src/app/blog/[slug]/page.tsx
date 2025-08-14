import { allPosts } from "../../../../.contentlayer/generated";
import { notFound } from "next/navigation";

export const generateStaticParams = () =>
  allPosts.map((p) => ({ slug: p.slug }));

function formatDateWithOrdinal(dateString: string) {
  const date = new Date(dateString);

  const day = date.getDate();
  const ordinal =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  const formatted = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Insert ordinal before the comma after the day
  return formatted.replace(/(\d{1,2})(,)/, `$1${ordinal}$2`);
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary ?? undefined,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 text-page-itemForeground">
      {/* <div className="pl-4 flex gap-1 font-light mb-4">/<a className="hover:underline transition-all ease-in-out" href="/blogs">blogs</a>/<span className="italic">{post.title}</span></div> */}
      <div className="hover:translate-x-1 transition-all ease-in-out mb-4">
        <a
          href="/blogs"
          className="text-3xl font-medium text-page-nameForeground"
        >
          ← All Blogs
        </a>
      </div>
      <div className="bg-card-foreground text-background-1 px-4 py-4 rounded-md flex flex-col mb-12">
        <h1 className="text-5xl font-light inline-block mb-4">{post.title}</h1>
        {/* <div className="mb-4">{post.summary}</div> */}
        <div className="text-md text-end italic">
          {formatDateWithOrdinal(post.date)}
        </div>
      </div>

      {/* Contentlayer (markdown) gives you HTML */}
      <div
        className="
          prose prose-lg prose-color-inherit prose-no-heading-underline
          prose-headings:font-semibold
          prose-h1:mb-4 prose-h2:mt-10 prose-h2:mb-3
          prose-p:leading-7
          prose-li:my-1
          prose-pre:rounded-xl prose-pre:p-4
          prose-img:rounded-xl
          prose-hr:my-10
          px-4
        "
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
}
