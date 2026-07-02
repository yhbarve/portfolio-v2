export default function ReadListItem({
  sr,
  title,
  author,
  pages,
  link,
}: {
  sr: string;
  title: string;
  author: string;
  pages: string;
  link: string;
}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer"
      className="grid grid-cols-12 p-2 my-2 font-light text-base
              items-center
              text-text-1 hover:shadow-lg bg-surface-1
              hover:border-page-itemHoverBorder cursor-pointer rounded-md border border-border/5
              transition duration-200 ease-in-out"
    >
      <div className="lg:block hidden col-span-1">{sr}</div>
      <div className="col-span-6 lg:col-span-5 w-4/5 font-medium text-xs lg:text-base">{title}</div>
      <div className="col-span-4 lg:col-span-4 w-4/5 font-normal text-xs lg:text-base">{author}</div>
      <div className="col-span-2 text-xs lg:text-base text-end">{pages}</div>
    </a>
  );
}
