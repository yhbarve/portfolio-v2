import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Providers } from "./providers";
import Banner from "@/components/ui/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash Barve",
  description: "Yash&apos;s webpage — designed and developed by yours truly.",
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
      <body className={inter.className}>
        <Providers>
          <Banner />
          {children}
        </Providers>
      </body>
    </html>
  );
}
