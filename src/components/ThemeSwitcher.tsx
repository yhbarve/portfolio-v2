// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  if (theme == 'light'){
    return (
      <div className="flex items-center">
        <button className="lg:text-zinc-950 lg:bg-none py-1 px-2 border lg:border-transparent rounded-md text-sm hover:border hover:bg-zinc-50 transition ease-in-out hover:border-zinc-300 hover:backdrop-blur-2xl font-medium bg-zinc-50 text-zinc-950 border-zinc-300" onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    )
  } else {
    return (
      <div className="flex gap-3">
        <button className="text-zinc-50 transition ease-in-out py-1 px-2 rounded-md text-sm dark:hover:bg-zinc-900 dark:hover:text-white hover:text-zinc-950 border lg:border-transparent hover:border dark:hover:border-zinc-800 hover:backdrop-blur-2xl font-medium border-zinc-800 bg-zinc-900 lg:bg-none" onClick={() => setTheme('light')}>Light Mode</button>
      </div>
    )
  }
};