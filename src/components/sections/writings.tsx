import React from "react";
import { allPosts } from "../../../.contentlayer/generated";
import WritingsCard from "../WritingsCard";

export default function Writings() {
  const posts = allPosts
    .filter((p) => p.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 4);

  return (
    <div id="writings" className="pt-12">
      <div className="flex items-center pb-2 justify-between">
        <div className="text-accent-foreground lg:text-accent font-black lg:font-bold cursor-default bg-accent lg:bg-transparent p-1 lg:p-0 rounded-lg lg:rounded-none w-full lg:w-auto text-center lg:text-left">
          WRITINGS
        </div>
        <div className="transition duration-200 ease-in-out text-accent hover:translate-x-1 hidden lg:block">
          <a href="/writings" className="">
            View All Writings →
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-text-1 hover:text-text-1">
        {posts.map((p, key) => {
            return (<WritingsCard key={key} title={p.title} summary={p.summary!} date={new Date(p.date).toDateString()} tags={p.tags!} slug={p.slug} />)
        })}
      </div>
      <div className="transition duration-200 ease-in-out text-text-1 mt-4 block lg:hidden text-center">
        <a href="/writings" className="text-accent px-4 py-2 rounded-md hover:text-accent-soft text-sm underline-offset-2 underline lg:no-underline">
          View All Writings
        </a>
      </div>
    </div>
  );
}
