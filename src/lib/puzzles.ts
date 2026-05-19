export const PUZZLE_CATEGORIES = [
  "Easy",
  "Medium",
  "Hard",
] as const;

export type PuzzleCategory = (typeof PUZZLE_CATEGORIES)[number];
