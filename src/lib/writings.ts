export const WRITING_CATEGORIES = [
  "Reflections",
  "University",
  "Technical",
] as const;

export type WritingCategory = (typeof WRITING_CATEGORIES)[number];
