import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Collection – Yash Barve",
  description:
    "A showcase of projects by Yash Barve — featuring software development, design, and creative work built with modern technologies.",
  openGraph: {
    title: "Projects Collection – Yash Barve",
    description:
      "A showcase of projects by Yash Barve — featuring software development, design, and creative work built with modern technologies.",
    url: "https://yashbarve.vercel.app/projects",
    siteName: "Yash Barve",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Collection – Yash Barve",
    description:
      "A showcase of projects by Yash Barve — featuring software development, design, and creative work built with modern technologies.",
  },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
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
            Projects Collection
          </h1>
        </div>

        {/* Page content */}
        {children}
      </div>
    </div>
  );
}
