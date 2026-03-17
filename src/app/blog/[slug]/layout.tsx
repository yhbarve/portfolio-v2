import type { ReactNode } from "react";
import type { Metadata } from "next";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yash's Blog Post",
  description: "Read detailed blog posts from Yash Barve's writings collection.",
  openGraph: {
    title: "Yash's Blog Post",
    description: "Read detailed blog posts from Yash Barve's writings collection.",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Yash's Blog Post",
    description: "Read detailed blog posts from Yash Barve's writings collection.",
  },
};

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <div className="scroll-smooth bg-gradient-to-tr from-background-1 via-background-2 to-background-3 transition duration-200 ease-in-out">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-12 lg:px-24 lg:py-0">
        {children}
      </div>
      <Footer />
    </div>
  );
}
