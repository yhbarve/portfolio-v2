import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";

import { Providers } from "./providers";
import Banner from "@/components/ui/Banner";
import PageAnimation from "@/components/PageAnimation";
import { CommandMenu } from "@/lib/CommandMenu";
import { ThemeProvider } from "@/components/theme-provider";
import SplashScreen from "@/components/SplashScreen";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "Yash Barve",
  description: "The official webpage of Yash H. Barve. Designed, developed, and occasionally debugged by yours truly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="_PntvROD-8HejKcSOB_Wakl_2E_o992HMmMAqPFnOk8"
        />
        <meta
          name="description"
          content="Yash is a fifth-year Computer Science student at the University of Waterloo and a Business student at Wilfrid Laurier University. Since starting his full-stack development journey in 2021, he has grown especially passionate about backend technologies and scalable systems."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        {/* TODO: Replace with your actual domain URL */}
        <meta property="og:url" content="https://yhbarve.me/" />
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:description" content={metadata.description as string} />
        {/* Make sure to replace with a full URL to your image */}
        <meta property="og:image" content="https://yhbarve.me/metadata/yb-og-image-2.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yhbarve.me/" />
        <meta property="twitter:site" content="@yhbarve" />
        <meta property="twitter:title" content={metadata.title as string} />
        <meta property="twitter:description" content={metadata.description as string} />
        <meta property="twitter:image" content="https://yhbarve.me/metadata/yb-og-image.png" />
      </head>
      <body
        suppressHydrationWarning
        className={`${interTight.variable} ${interTight.className} bg-gradient-to-tr from-background-1 via-background-2 to-background-3`}
      >
        <ThemeProvider>
          {/* <SplashScreen holdMs={2000} /> */}
          {/* <Banner /> */}
          <CommandMenu />
          <Providers>
            <PageAnimation>{children}</PageAnimation>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
