export interface GithubContributionDay {
  date: string;
  count: number;
  level: number;
}

interface YearResponse {
  contributions: GithubContributionDay[];
  total: Record<string, number>;
}

function toDateKey(d: Date): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function startOfUtcDay(d: Date): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
}

/** Sunday 00:00 UTC of the week containing `d`. */
function utcSundayOnOrBefore(d: Date): Date {
  const x = startOfUtcDay(d);
  const dow = x.getUTCDay();
  x.setUTCDate(x.getUTCDate() - dow);
  return x;
}

export interface ContributionWeek {
  days: Array<{
    date: string;
    count: number;
    level: number;
    isFuture: boolean;
  }>;
}

/**
 * GitHub-style grid: each column is one week (Sun → Sat), ~53 columns for the past year.
 */
export function buildContributionWeeks(
  byDate: ReadonlyMap<string, GithubContributionDay>,
  daysBack: number = 371
): ContributionWeek[] {
  const today = startOfUtcDay(new Date());
  const gridStart = new Date(today);
  gridStart.setUTCDate(gridStart.getUTCDate() - (daysBack - 1));

  const firstSunday = utcSundayOnOrBefore(gridStart);
  const weeks: ContributionWeek[] = [];

  let weekStart = new Date(firstSunday);
  while (weekStart <= today) {
    const days: ContributionWeek["days"] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setUTCDate(weekStart.getUTCDate() + i);
      const key = toDateKey(d);
      const isFuture = d > today;
      if (isFuture) {
        days.push({ date: key, count: 0, level: 0, isFuture: true });
        continue;
      }
      if (d < gridStart) {
        days.push({ date: key, count: 0, level: 0, isFuture: false });
        continue;
      }
      const row = byDate.get(key);
      days.push({
        date: key,
        count: row?.count ?? 0,
        level: row?.level ?? 0,
        isFuture: false,
      });
    }
    weeks.push({ days });
    weekStart.setUTCDate(weekStart.getUTCDate() + 7);
  }

  return weeks;
}

export async function fetchGithubContributions(
  username: string
): Promise<{
  weeks: ContributionWeek[];
} | null> {
  const y = new Date().getUTCFullYear();
  const base = `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}`;
  const opts = { next: { revalidate: 3600 } as const };

  try {
    const [curr, prev] = await Promise.all([
      fetch(`${base}?y=${y}`, opts),
      fetch(`${base}?y=${y - 1}`, opts),
    ]);
    if (!curr.ok || !prev.ok) return null;

    const dataCurr = (await curr.json()) as YearResponse;
    const dataPrev = (await prev.json()) as YearResponse;

    const map = new Map<string, GithubContributionDay>();
    for (const c of dataPrev.contributions) map.set(c.date, c);
    for (const c of dataCurr.contributions) map.set(c.date, c);

    const weeks = buildContributionWeeks(map);

    return { weeks };
  } catch {
    return null;
  }
}

export type GithubActivityData = Exclude<
  Awaited<ReturnType<typeof fetchGithubContributions>>,
  null
>;

/**
 * Colors match GitHub’s heatmap logic: the API’s `level` (0–4) is **relative** to your own
 * activity (same as github.com), not raw commit totals — so intensity varies across the year.
 * We use GitHub’s dark-theme green ramp; if `count > 0` but `level` is 0, we show level 1.
 *
 * @see https://github.com/ (contribution graph CSS variables in dark mode)
 */
export function githubContributionCellClass(
  level: number,
  count: number,
  isFuture: boolean
): string {
  const empty = "bg-[#21262d]";
  if (isFuture) {
    return `${empty} opacity-40`;
  }
  if (count <= 0) {
    return empty;
  }

  const step = Math.min(10, Math.max(1, level <= 0 ? 1 : level));

  switch (step) {
    case 1:
      return "bg-[#0e4429]";
    case 2:
      return "bg-[#006d32]";
    case 3:
      return "bg-[#26a641]";
    case 4:
    default:
      return "bg-[#39d353]";
  }
}
