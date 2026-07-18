import { allPosts } from "../../../../.contentlayer/generated";
import { notFound } from "next/navigation";
import Image from "next/image";
import ContentTimeline from "@/components/blog/ContentTimeline";
import MermaidInit from "@/components/blog/MermaidInit";
import { ViewCounter } from "@/components/ViewCounter";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary ?? undefined,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const { coverImage, coverImageCreditText, coverImageCreditLink } = post as {
    coverImage?: string;
    coverImageCreditText?: string;
    coverImageCreditLink?: string;
  };

  return (
    <div className="relative">
      <article className="mx-auto max-w-3xl px-1 lg:px-0 lg:py-12 text-page-itemForeground">
          {/* <div className="pl-4 flex gap-1 font-light mb-4">/<a className="hover:underline transition-all ease-in-out" href="/blogs">blogs</a>/<span className="italic">{post.title}</span></div> */}
          <h1 className="text-4xl lg:text-5xl font-normal text-blog-titleForeground inline-block mb-4 lg:mb-4 lg:mr-4">
            {post.title}
          </h1>
          <div className="flex flex-col mb-4 gap-4 lg:gap-4">
            <div className="text-base lg:text-lg text-accent-soft">
              {post.summary}
            </div>
            <div className="flex items-center gap-3 text-sm lg:text-md lg:w-fit text-text-1">
              <span>{formatDateWithOrdinal(post.date)}</span>
              <span className="text-text-1/40" aria-hidden>
                ·
              </span>
              <span className="text-text-1/60">{post.readingTime}</span>
              <span className="text-text-1/40" aria-hidden>
                ·
              </span>
              <ViewCounter slug={post.slug} />
            </div>
          </div>
          {coverImage ? (
            <div className="relative mb-4 lg:mb-8 w-full overflow-hidden rounded-xl border border-border/20 bg-surface-1 shadow-sm">
              <div className="relative h-[200px] lg:h-[300px] w-full">
                <Image
                  src={coverImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                {coverImageCreditText && coverImageCreditLink ? (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent px-4 pb-1 pt-8">
                    <div className="pointer-events-auto text-[11px] font-light text-white/85 text-right">
                      <span>Image credit: </span>
                      <a
                        href={coverImageCreditLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 hover:text-white"
                      >
                        {coverImageCreditText}
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
          <div
            id="blog-content"
            className="
              /* base size tuned down for readability */
              prose prose-base md:prose-lg
              prose-color-inherit prose-no-heading-underline
              max-w-prose md:max-w-[90ch] leading-relaxed break-words

              /* headings */
              prose-headings:font-semibold
              prose-headings:tracking-tight
              prose-headings:text-accent-soft
              prose-h1:mb-3 prose-h1:text-accent-soft
              prose-h2:mt-8 prose-h2:mb-2
              prose-h3:mt-6 prose-h3:mb-2

              /* body text */
              prose-p:leading-6 lg:prose-p:leading-7 prose-p:my-2 lg:prose-p:my-3
              prose-p:text-text-1
              text-sm lg:text-lg

              /* links */
              prose-a:underline-offset-4
              prose-a:decoration-1
              prose-a:break-words
              prose-a:font-normal

              /* lists */
              prose-ul:my-3 prose-ol:my-3
              prose-li:my-0.5

              /* code */
              prose-code:bg-accent/10 prose-code:text-accent-soft prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
              prose-code:before:content-none prose-code:after:content-none
              [&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-0 [&_pre_code]:rounded-none
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
          <MermaidInit rootId="blog-content" />
      </article>

      <aside className="hidden lg:block lg:fixed lg:top-14 lg:left-[calc(50%+425px)] lg:right-2 lg:max-w-[350px] lg:pr-4">
        <ContentTimeline rootId="blog-content" />
      </aside>
    </div>
  );
}
