import type { ReactNode } from "react";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import SimpleMobileNavbar from "@/components/SimpleMobileNavbar";
export const metadata: Metadata = {
  title: "Yash's Puzzle",
  description: "Read detailed puzzles from Yash Barve's puzzles collection.",
  openGraph: {
    title: "Yash's Puzzle",
    description: "Read detailed puzzles from Yash Barve's puzzles collection.",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Yash's Puzzle",
    description: "Read detailed puzzles from Yash Barve's puzzles collection.",
  },
};

export default function PuzzleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="scroll-smooth bg-gradient-to-tr from-background-1 via-background-2 to-background-3 transition duration-200 ease-in-out">
      <div className="mx-auto min-h-screen max-w-screen-xl p-2 font-sans md:px-12 md:py-12 lg:px-24 lg:py-0">
        {children}
      </div>
      <SimpleMobileNavbar />
      <Footer />
    </div>
  );
}
