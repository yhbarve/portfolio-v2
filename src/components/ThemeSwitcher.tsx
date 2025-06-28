// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <select
      className="py-1 px-2 text-sm rounded-md border bg-background text-foreground"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      <option value="light">Light Mode</option>
      <option value="dark">Dark Mode</option>
      <option value="baby-blue">Baby Blue</option>
    </select>
  )
};