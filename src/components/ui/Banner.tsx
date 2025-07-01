import React from "react";

export default function Banner() {
  return (
    <div className="w-full text-center text-sm bg-card-background text-name-foreground border-b border-card-border py-2 px-4">
      🎨 New themes are now live! Try out{" "}
      <span className="font-medium">Neon</span>,{" "}
      <span className="font-medium">Orange</span>,{" "}
      <span className="font-medium">Teal</span>, and more — use the selector at
      the bottom.
    </div>
  );
}
