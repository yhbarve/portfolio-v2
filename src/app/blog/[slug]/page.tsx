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
    <article className="max-w-3xl md:mx-auto py-12 text-page-itemForeground mx-4">
      {/* <div className="pl-4 flex gap-1 font-light mb-4">/<a className="hover:underline transition-all ease-in-out" href="/blogs">blogs</a>/<span className="italic">{post.title}</span></div> */}
      <div className="hover:translate-x-1 transition-all ease-in-out mb-8 hidden md:block">
        <a
          href="/writings"
          className="text-3xl font-medium text-page-nameForeground"
        >
          ← All Blogs
        </a>
      </div>
      <h1 className="text-4xl md:text-5xl text-blog-titleForeground font-normal inline-block mb-8">
        {post.title}
      </h1>
      <div className="text-blog-titleForeground border-l-4 border-blog-titleBorder px-4 flex flex-col mb-8 gap-4">
        <div className="italic text-md md:text-lg text-blog-summaryForeground font-light">
          {post.summary}
        </div>
        <div className="text-sm md:text-md italic text-blog-titleDateForeground">
          {formatDateWithOrdinal(post.date)}
        </div>
      </div>
      {/* 0 0% 14.9% */}
      {/* Contentlayer (markdown) gives you HTML */}
      {/* <div
        className="
          prose prose-lg prose-color-inherit prose-no-heading-underline
          prose-headings:font-semibold
          prose-headings:text-blog-bodyHeadingsForeground
          prose-h1:mb-4 prose-h1:text-blog-titleForeground
          prose-h2:mt-10 prose-h2:mb-3
          prose-p:leading-7
          prose-p:text-blog-bodyTextForeground
          prose-li:my-1
          prose-pre:rounded-xl prose-pre:p-4
          prose-img:rounded-xl
          prose-hr:my-10
        "
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      /> */}
      <div
        className="
    /* base size tuned down for readability */
    prose prose-base md:prose-lg
    prose-color-inherit prose-no-heading-underline
    max-w-none leading-relaxed

    /* headings */
    prose-headings:font-semibold
    prose-headings:tracking-tight
    prose-headings:text-blog-bodyHeadingsForeground
    prose-h1:mb-3 prose-h1:text-blog-titleForeground
    prose-h2:mt-8 prose-h2:mb-2
    prose-h3:mt-6 prose-h3:mb-2

    /* body text */
    prose-p:leading-7 prose-p:my-3
    prose-p:text-blog-bodyTextForeground

    /* links */
    prose-a:underline-offset-4
    prose-a:decoration-1

    /* lists */
    prose-ul:my-3 prose-ol:my-3
    prose-li:my-0.5

    /* code */
    prose-code:px-1 prose-code:py-0.5 prose-code:rounded
    prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto

    /* media & tables */
    prose-img:rounded-lg
    prose-figure:my-5
    prose-figcaption:mt-1 prose-figcaption:text-sm
    prose-table:w-full prose-table:table-auto
    prose-th:px-2 prose-th:py-1
    prose-td:px-2 prose-td:py-1

    /* dividers */
    prose-hr:my-8
  "
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
}
