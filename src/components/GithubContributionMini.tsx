import {
  type ContributionWeek,
  githubContributionCellClass,
} from "@/lib/github-contributions";
import { cn } from "@/lib/utils";

interface ReadonlyProps {
  readonly weeks: ContributionWeek[];
}

/** Scales down on narrow viewports; caps at ~10px cells on large screens. */
const RESPONSIVE =
  "[--contrib-cell:clamp(4px,1.65vw,10px)] [--contrib-gap:clamp(1px,0.45vw,3px)] [--contrib-radius:clamp(1px,0.25vw,2px)]";

export default function GithubContributionMini({ weeks }: ReadonlyProps) {
  return (
    <div
      className={cn(
        "flex max-w-full flex-row flex-nowrap overflow-x-auto gap-[length:var(--contrib-gap)]",
        RESPONSIVE
      )}
      role="img"
      aria-label="Past year of GitHub contributions"
    >
      {weeks.map((week, wi) => (
        <div key={wi} className="flex flex-col gap-[3px]">
          {week.days.map((day, di) => (
            <div
              key={`${wi}-${di}-${day.date}`}
              title={
                day.isFuture
                  ? ""
                  : `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
              }
              className={cn(
                "ring-1 ring-inset ring-[#30363d]/50",
                "h-[7.5px] w-[7.5px] rounded-[2px]",
                githubContributionCellClass(day.level, day.count, day.isFuture)
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
