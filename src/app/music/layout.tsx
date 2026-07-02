import type { ReactNode } from "react";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import SimpleMobileNavbar from "@/components/SimpleMobileNavbar";

export const metadata: Metadata = {
  title: "Yash's Music",
  description:
    "Playlists and weekly music picks — curated tracks and links by Yash Barve.",
  openGraph: {
    title: "Yash's Music",
    description:
      "Playlists and weekly music picks — curated tracks and links by Yash Barve.",
    url: "https://yashbarve.vercel.app/music",
    siteName: "Yash Barve",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash's Music",
    description:
      "Playlists and weekly music picks — curated tracks and links by Yash Barve.",
  },
};

export default function MusicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="scroll-smooth bg-gradient-to-tr from-background-1 via-background-2 to-background-3 transition duration-200 ease-in-out">
      <div className="mx-auto min-h-screen max-w-screen-xl p-2 font-sans md:px-12 md:py-12 lg:px-24 lg:py-0">
        <div className="pt-2 lg:pt-12">
          <div className="hidden lg:block hover:translate-x-1 transition-all ease-in-out">
            <a href="/" className="text-2xl lg:text-3xl font-medium text-page-nameForeground">
              ← Yash Barve
            </a>
          </div>
          <h1 className="text-5xl font-normal lg:font-semibold text-page-titleForeground inline-block pb-3 lg:pt-2">
            Favorite Music
          </h1>
        </div>
        {children}
      </div>
      <SimpleMobileNavbar />
      <Footer />
    </div>
  );
}
