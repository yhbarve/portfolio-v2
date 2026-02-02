export default function ProjectListItem({
  year,
  name,
  skills,
  url,
}: {
  year: string;
  name: string;
  skills: Array<string>;
  url: string;
}) {
  return (
    <div
      className="grid grid-cols-12 px-2 py-4 my-2 font-light text-base
              items-center
              text-text-1 hover:shadow-lg bg-surface-1
              hover:border-page-itemHoverBorder cursor-default rounded-md border border-border/5
              transition duration-200 ease-in-out"
    >
      <div className="col-span-2 lg:col-span-1">{year}</div>

      <div className="col-span-4 w-4/5 font-normal">{name}</div>

      <div className="col-span-5 w-11/12">
        <div className="flex gap-1 gap-y-2 flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-sm bg-surface-3 text-accent-soft border border-border/20 rounded-2xl px-2"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <a
        href={url}
        target="_blank"
        className="block col-span-1 lg:col-span-2 mx-auto font-normal text-sm
        hover:text-accent-foreground p-2 rounded-md transition ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
          className="text-inherit"
        >
          <path
            fill="currentColor"
            d="M117.18 188.74a12 12 0 0 1 0 17l-5.12 5.12A58.26 58.26 0 0 1 70.6 228a58.62 58.62 0 0 1-41.46-100.08l34.75-34.75a58.64 58.64 0 0 1 98.56 28.11a12 12 0 1 1-23.37 5.44a34.65 34.65 0 0 0-58.22-16.58l-34.75 34.75A34.62 34.62 0 0 0 70.57 204a34.4 34.4 0 0 0 24.49-10.14l5.11-5.12a12 12 0 0 1 17.01 0M226.83 45.17a58.65 58.65 0 0 0-82.93 0l-5.11 5.11a12 12 0 0 0 17 17l5.12-5.12a34.63 34.63 0 1 1 49 49l-34.81 34.7A34.4 34.4 0 0 1 150.61 156a34.63 34.63 0 0 1-33.69-26.72a12 12 0 0 0-23.38 5.44A58.64 58.64 0 0 0 150.56 180h.05a58.28 58.28 0 0 0 41.47-17.17l34.75-34.75a58.62 58.62 0 0 0 0-82.91"
          />
        </svg>
      </a>
    </div>
  );
}
