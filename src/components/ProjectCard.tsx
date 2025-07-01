import Image from "next/image";

export default function ProjectCard({
  year,
  link,
  name,
  desc,
  skills,
  image,
}: {
  year: string;
  link: string;
  name: string;
  desc: string;
  skills: Array<string>;
  image: string;
}) {
  return (
    <div>
      <div
        className="grid grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition-colors duration-200 ease-in-out rounded-md p-2 cursor-default hover:backdrop-blur-2xl"
      >
        <div className="col-span-1 flex flex-col">
          <a href={link} target="_blank">
            <Image
              src={image}
              alt=""
              width={100}
              height={100}
              className="rounded-md w-[90%] mt-1 brightness-[0.95] hover:brightness-[0.90] transition ease-in-out border border-card-imageBorder"
            />
          </a>
        </div>
        <div className="col-span-4 flex flex-col">
          <a
            href={link}
            target="_blank"
            className="hover:translate-x-1 transition-transform ease-in-out font-medium mb-1"
          >
            {name}
          </a>
          <div className="font-light text-sm">
            <div className="font-normal inline">Description: </div>
            {desc}
          </div>
          <div className="flex gap-1 gap-y-2 mt-4 flex-wrap">
            {skills.map((key, item) => (
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
