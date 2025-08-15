function formatDateWithOrdinal(dateString: string) {
  const date = new Date(dateString);

  const day = date.getDate();
  const ordinal =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  const formatted = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Insert ordinal before the comma after the day
  return formatted.replace(/(\d{1,2})(,)/, `$1${ordinal}$2`);
}

export default function WritingsCard({
  title,
  summary,
  date,
  tags,
  slug
}: {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  slug: string;
}) {
  return (
    <div>
      <div
        className="grid grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl"
      >
        <div className="col-span-1 flex flex-col">
          <div className="font-light max-w-[90%]">
            {formatDateWithOrdinal(date)}
          </div>
        </div>
        <div className="col-span-4 flex flex-col">
          <a
            href={`/blog/${slug}`}
            target="_blank"
            className="hover:translate-x-1 transition-transform ease-in-out font-medium mb-1"
          >
            {title}
          </a>
          <div className="font-light text-sm">
            <div className="font-normal inline">Summary: </div>
            {summary}
          </div>
          <div className="flex gap-1 gap-y-2 mt-4 flex-wrap">
            {tags.map((key, item) => (
              <div
                key={item}
                className="text-sm bg-card-skillsBackground border border-card-skillsBorder text-card-skillsForeground rounded-2xl px-2"
              >
                {key}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
