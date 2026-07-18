import React from "react";
import { allPosts } from "../../../.contentlayer/generated";
import WritingsCard from "../WritingsCard";
import WritingsCardMobile from "../WritingsCardMobile";

export default function Writings() {
  const posts = allPosts
    .filter((p) => p.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 5);

  return (
    <div id="writings" className="pt-8 lg:pt-12">
      <div className="flex items-center pb-2 justify-between">
        <div className="text-accent font-bold cursor-default">
          WRITINGS
        </div>
        <div className="transition duration-200 ease-in-out text-accent hover:translate-x-1 hidden lg:block">
          <a href="/writings" className="">
            View All Writings →
          </a>
        </div>
      </div>

      {/* DESKTOP CARDS */}
      <div className="hidden lg:flex flex-col gap-4 text-text-1 hover:text-text-1">
        {posts.map((p, key) => {
            return (<WritingsCard key={key} title={p.title} summary={p.summary!} date={new Date(p.date).toDateString()} tags={p.tags!} slug={p.slug} category={p.category!} readingTime={p.readingTime} />)
        })}
      </div>

      {/* MOBILE CARDS */}
      <div className="lg:hidden flex flex-col gap-4 text-text-1 hover:text-text-1">
        {posts.map((p, key) => {
            return (<WritingsCardMobile key={key} index={key + 1} title={p.title} summary={p.summary!} date={new Date(p.date).toDateString()} tags={p.tags!} slug={p.slug} category={p.category!} readingTime={p.readingTime} />)
        })}
      </div>

      <div className="text-accent mt-4 block lg:hidden bg-accent/20 p-2 rounded-md w-fit">
        <a href="/writings" className="font-semibold rounded-md text-sm">
          View All Writings
        </a>
      </div>
    </div>
  );
}
