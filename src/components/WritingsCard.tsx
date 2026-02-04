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
        className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 hover:bg-surface-2
            hover:text-text-1 transition duration-200 ease-in-out rounded-md px-5 py-5 cursor-default lg:hover:backdrop-blur-2xl hover:shadow-lg"
      >
        <div className="hidden lg:col-span-1 lg:flex flex-col">
          <div className="font-light max-w-[90%]">
            {formatDateWithOrdinal(date).toUpperCase()}
          </div>
        </div>
        <div className="col-span-4 flex flex-col">
          <a
            href={`/blog/${slug}`}
            target="_blank"
            className="hover:translate-x-1 transition-transform ease-in-out font-medium mb-1 text-text-1"
          >
            {title}
          </a>
          <div className="mb-1 font-light">{formatDateWithOrdinal(date).toUpperCase()}</div>
          <div className="font-light text-sm">
            <div className="font-normal inline">Summary: </div>
            {summary}
          </div>
          <div className="flex gap-1 gap-y-2 mt-4 flex-wrap">
            {tags.map((key, item) => (
              <div
                key={item}
                className="text-sm bg-surface-3 border border-accent/20 text-accent-soft rounded-2xl px-2"
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
