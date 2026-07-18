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
  slug,
  category,
  readingTime,
}: {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  slug: string;
  category: string;
  readingTime: string;
}) {
  return (
    <div>
      <div
        className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 lg:hover:bg-surface-2
            lg:hover:text-text-1 transition duration-200 ease-in-out rounded-md p-3 cursor-default lg:hover:backdrop-blur-2xl lg:hover:shadow-lg"
      >
        <div className="hidden lg:col-span-1 lg:flex flex-col">
          <div className="font-light max-w-[90%] text-sm lg:text-base text-center lg:text-left">
            {formatDateWithOrdinal(date).toUpperCase()}
          </div>
          <div className="font-light text-xs text-text-1/60 mt-1 text-center lg:text-left">
            {readingTime}
          </div>
        </div>
        <div className="col-span-4 flex flex-col">
          <a
            href={`/blog/${slug}`}
            target="_blank"
            className="lg:hover:translate-x-1 transition-transform ease-in-out font-medium mb-1 text-accent lg:text-text-1 text-base text-center lg:text-left"
          >
            {title}
            {/* <div className="hidden lg:inline-block font-semibold text-[10px] bg-accent mx-4 w-fit rounded-2xl text-accent-foreground px-2">
              {category}
            </div> */}
          </a>
          {/* <div className="mb-1 font-normal text-base text-accent lg:text-left hidden lg:block">{formatDateWithOrdinal(date).toUpperCase()}</div> */}
          <div className="font-normal lg:font-light text-xs lg:text-sm text-justify lg:text-left">
            <div className="font-semibold inline text-accent">Summary: </div>
            {summary}
          </div>
          {/* <div className="flex gap-1 gap-y-2 mt-4 flex-wrap justify-center lg:justify-start">
            {tags.map((key, item) => (
              <div
                key={item}
                className="text-xs bg-surface-3 border border-accent/20 text-accent-soft rounded-2xl px-2"
              >
                {key}
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
