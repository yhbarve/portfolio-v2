import type { ReactNode } from "react";
import type { Metadata } from "next";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yash's Bookshelf",
  description:
    "A curated collection of books read by Yash Barve — exploring technology, development, design, and personal insights.",
  openGraph: {
    title: "Yash's Bookshelf",
    description:
      "A curated collection of books read by Yash Barve — exploring technology, development, design, and personal insights.",
    url: "https://yashbarve.vercel.app/readings",
    siteName: "Yash Barve",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yash's Bookshelf",
    description:
      "A curated collection of books read by Yash Barve — exploring technology, development, design, and personal insights.",
  },
};

export default function ReadingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="scroll-smooth bg-gradient-to-tr from-background-1 via-background-2 to-background-3 transition duration-200 ease-in-out">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-12 lg:px-24 lg:py-0">
        {/* Top nav/header */}
        <div className="pt-12">
          <div className="hover:translate-x-1 transition-all ease-in-out">
            <a
              href="/"
              className="text-3xl font-medium text-page-nameForeground"
            >
              ← Yash Barve
            </a>
          </div>
          <h1 className="text-5xl font-semibold text-page-titleForeground inline-block pb-3 mt-2">
            Bookshelf
          </h1>
        </div>

        {/* Page content */}
        {children}

      </div>
      <Footer />
    </div>
  );
}
