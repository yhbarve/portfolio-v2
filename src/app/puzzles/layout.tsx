import type { ReactNode } from "react";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import SimpleMobileNavbar from "@/components/SimpleMobileNavbar";

export const metadata: Metadata = {
  title: "Yash's Favorite Puzzles",
  description:
    "Explore Yash Barve's favorite coding puzzles! It's mostly just Leetcode problems.",
  openGraph: {
    title: "Yash's Favorite Puzzles",
    description:
      "Explore Yash Barve's favorite coding puzzles! It's mostly just Leetcode problems.",
    url: "https://yashbarve.vercel.app/puzzles",
    siteName: "Yash Barve",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yash's Favorite Puzzles",
    description:
      "Explore Yash Barve's favorite coding puzzles! It's mostly just Leetcode problems.",
  },
};

export default function PuzzlesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="scroll-smooth bg-gradient-to-tr from-background-1 via-background-2 to-background-3 transition duration-200 ease-in-out">
      <div className="mx-auto min-h-screen max-w-screen-xl p-2 font-sans md:px-12 md:py-12 lg:px-24 lg:py-0">
        {/* Top nav/header */}
        <div className="pt-2 lg:pt-8">
          <h1 className="text-5xl font-normal text-accent inline-block pb-3 lg:mr-4">
            Favorite Puzzles
          </h1>
        </div>

        {/* Page content */}
        {children}
    
      </div>
      <SimpleMobileNavbar />
      <Footer />
    </div>
  );
}
