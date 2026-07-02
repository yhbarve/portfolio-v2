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
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="grid grid-cols-12 px-2 py-4 my-2 font-light text-base text-text-1 lg:hover:shadow-lg bg-surface-1 lg:hover:border-page-itemHoverBorder cursor-pointer rounded-md border border-border/5 transition duration-200 ease-in-out"
    >
      <div className="hidden lg:block lg:col-span-2">{year}</div>

      <div className="col-span-4 lg:col-span-5 w-4/5 text-xs lg:text-base font-medium">{name}</div>

      <div className="col-span-8 lg:col-span-5">
        <div className="flex gap-1 gap-y-2 flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-[10px] lg:text-sm bg-surface-3 text-accent-soft border border-border/20 rounded-2xl px-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}
