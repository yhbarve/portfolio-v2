import React from "react";
import { allPosts } from "../../../.contentlayer/generated";
import WritingsCard from "../WritingsCard";

export default function Writings() {
  const posts = allPosts
    .filter((p) => p.published)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <div id="writings" className="pt-12">
      <div className="flex items-center pl-2 pb-2 justify-between">
        <div className="text-sm font-bold cursor-default text-section-header">
          WRITINGS
        </div>
        <div className="transition duration-200 ease-in-out text-linkToPage-foreground hover:translate-x-1 hidden lg:block">
          <a href="/blogs" className="">
            View All Writings →
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-card-foreground hover:text-card-otherHoverForeground">
        {posts.map((p, key) => {
            return (<WritingsCard key={key} title={p.title} summary={p.summary!} date={new Date(p.date).toDateString()} tags={p.tags!} slug={p.slug} />)
        })}
      </div>
      <div className="transition duration-200 ease-in-out text-linkToPage-foreground mt-4 block lg:hidden">
        <a href="/writings" className="bg-linkToPage-buttonBackground text-linkToPage-buttonForeground px-4 py-2 rounded-md hover:opacity-80 text-sm">
          View All Writings
        </a>
      </div>
    </div>
  );
}
