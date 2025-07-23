// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("");

  const themes = [
    { name: "Neutral", value: "neutral" },
    { name: "Neon", value: "neon" },
    { name: "Orange", value: "orange" },
    { name: "Teal", value: "teal" },
    { name: "Lavender Mist", value: "lavender" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && theme) {
      setSelectedTheme(theme);
    }
  }, [mounted, theme]);

  if (!mounted) return null;

  const handleThemeChange = (newTheme: string) => {
    // Use setTimeout to allow the select dropdown to close properly
    setTimeout(() => {
      setTheme(newTheme);
    }, 0);
  };

  return (
    <div className="relative">
      <select
        value={selectedTheme || theme || "neutral"}
        onChange={(e) => {
          setSelectedTheme(e.target.value);
          handleThemeChange(e.target.value);
        }}
        className="text-xs py-0.5 border rounded-md bg-picker-background hover:bg-picker-hoverBackground border-picker-border text-picker-text cursor-pointer transition"
      >
        {themes.map((t) => (
          <option key={t.value} value={t.value}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}
