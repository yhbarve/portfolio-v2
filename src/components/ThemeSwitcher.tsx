"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    console.log("[Switcher]", { theme, resolvedTheme });
  }, [theme, resolvedTheme]);

  if (!mounted) return null;
  
  const value = (resolvedTheme ?? theme ?? "neon") as string;

  return (
    <select
      value={value}
      onChange={(e) => setTheme(e.target.value)}
      className="text-xs py-0.5 border rounded-md bg-surface-1 hover:bg-surface-1/50 border-border text-accent cursor-pointer transition"
    >
      <option value="neon">Neon</option>
      <option value="quartz">Quartz</option>
      <option value="ferrari-hp">Ferrari HP</option>
      <option value="sapphire">Sapphire</option>
      <option value="fable">Fable</option>
    </select>
  );
}
