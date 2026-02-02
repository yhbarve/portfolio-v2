// app/providers.tsx
"use client";

import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider } from '@/components/theme-provider';

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider themes={["quartz", "neon", "ferrari-hp"]}>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}