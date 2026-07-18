import { allPuzzles, type Puzzle } from "../../../../.contentlayer/generated";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentTimeline from "@/components/blog/ContentTimeline";
import MermaidInit from "@/components/blog/MermaidInit";
import { ViewCounter } from "@/components/ViewCounter";

export const generateStaticParams = () =>
  allPuzzles.map((p: Puzzle) => ({ slug: p.slug }));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const puzzle = allPuzzles.find((p: Puzzle) => p.slug === slug);
  if (!puzzle) return {};
  return {
    title: puzzle.title,
    description:
      [
        puzzle.difficulty ? `${puzzle.difficulty} puzzle` : null,
        puzzle.tags?.join(", "),
      ]
        .filter(Boolean)
        .join(" | ") || undefined,
  };
}

export default async function PuzzlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const puzzle = allPuzzles.find((p: Puzzle) => p.slug === slug);
  if (!puzzle) return notFound();

  const tags = puzzle.tags ?? [];

  return (
    <div className="relative">
      <article className="mx-auto max-w-3xl px-1 lg:px-0 lg:py-12 text-page-itemForeground">
        <div className="hover:translate-x-1 transition-all ease-in-out mb-4 hidden md:block">
          <Link
            href="/puzzles"
            className="text-3xl text-page-nameForeground lg:text-left"
          >
            ← All Puzzles
          </Link>
        </div>
        <h1 className="text-5xl font-normal text-puzzle-titleForeground inline-block mb-4 lg:mr-4">
          {puzzle.title}
        </h1>
        <div className="flex flex-col mb-4 gap-3">
          <div className="flex flex-wrap gap-2">
            {puzzle.difficulty ? (
              <span className="rounded-full bg-accent-soft px-2 lg:px-3 lg:py-1 text-xs lg:text-sm font-medium text-accent-foreground">
                Difficulty: {puzzle.difficulty}
              </span>
            ) : null}
            {puzzle.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-accent/40 px-2 lg:px-3 lg:py-1 text-xs lg:text-sm font-medium text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <ViewCounter slug={puzzle.slug} />
        </div>
        <div
          id="puzzle-content"
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
              [&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-1 [&_pre_code]:rounded-md
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
            dangerouslySetInnerHTML={{ __html: puzzle.body.html }}
        />
        <MermaidInit rootId="puzzle-content" />
      </article>

      <aside className="hidden lg:block lg:fixed lg:top-24 lg:left-[calc(55%+408px)] lg:w-[350px] lg:pr-4">
        <ContentTimeline rootId="puzzle-content" />
      </aside>
    </div>
  );
}
