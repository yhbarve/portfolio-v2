// components/theme-provider.tsx
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="quartz"
      enableSystem={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}