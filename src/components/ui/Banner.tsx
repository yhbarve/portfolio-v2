import React from "react";

export default function Banner() {
  return (
    <div className="hidden w-full text-center text-sm bg-surface-3 text-accent-soft border-b border-border py-2 px-4 lg:flex lg:justify-center lg:gap-8">
      <span><span className="font-semibold">Nudge: Press ⌘K to open Command Centre. </span>Jump pages, switch themes, and use single-key shortcuts (H, P, W…)!</span>
    </div>
  );
}
