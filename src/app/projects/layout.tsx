import type { ReactNode } from "react";
import type { Metadata } from "next";

import SimpleMobileNavbar from "@/components/SimpleMobileNavbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yash's Projects",
  description:
    "A showcase of projects by Yash Barve — featuring software development, design, and creative work built with modern technologies.",
  openGraph: {
    title: "Yash's Projects",
    description:
      "A showcase of projects by Yash Barve — featuring software development, design, and creative work built with modern technologies.",
    url: "https://yashbarve.vercel.app/projects",
    siteName: "Yash Barve",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash's Projects",
    description:
      "A showcase of projects by Yash Barve — featuring software development, design, and creative work built with modern technologies.",
  },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="scroll-smooth bg-gradient-to-tr from-background-1 via-background-2 to-background-3 transition duration-200 ease-in-out">
      <div className="mx-auto min-h-screen max-w-screen-xl p-2 font-sans md:px-12 md:py-12 lg:px-24 lg:py-0">
        {/* Top nav/header */}
        <div className="pt-2 lg:pt-12">
          <h1 className="text-5xl font-normal text-accent inline-block pb-3 lg:mr-4">
            Projects Collection
          </h1>
        </div>

        {/* Page content */}
        {children}

      </div>
      <Footer />
      <SimpleMobileNavbar />
    </div>
  );
}
