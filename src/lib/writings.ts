export const WRITING_CATEGORIES = [
  "Build",
  "Reflect",
  "Explore",
] as const;

export type WritingCategory = (typeof WRITING_CATEGORIES)[number];
