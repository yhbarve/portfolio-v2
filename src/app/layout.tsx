import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "./providers";
import Banner from "@/components/ui/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash H. Barve",
  description: "The official webpage of Yash H. Barve. Designed, developed, and occasionally debugged by yours truly.",
  twitter: {
    card: "summary",
    title: "Yash H. Barve",
    description:
      "The official webpage of Yash H. Barve. Designed, developed, and occasionally debugged by yours truly.",
  },
  openGraph: {
    title: "Yash H. Barve",
    description:
      "The official webpage of Yash H. Barve. Designed, developed, and occasionally debugged by yours truly.",
    url: "https://yhbarve.me",
    siteName: "Yash H. Barve",
    images: [
      {
        url: "/yash-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Yash H. Barve",
      },
    ],
    type: "website",
  },
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
          content="Yash is a fourth-year Computer Science student at the University of Waterloo and a Business student at Wilfrid Laurier University. Since starting his full-stack development journey in 2021, he has grown especially passionate about backend technologies and scalable systems."
        />
      </head>
      <body className={`${inter.className} bg-gradient-to-tr from-background-1 via-background-2 to-background-3`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
