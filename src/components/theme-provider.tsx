"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="neon"
      enableSystem={false}
      enableColorScheme={false}
      themes={["neon", "quartz", "ferrari-hp", "sapphire", "fable"]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
