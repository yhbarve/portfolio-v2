import Image from "next/image";

type EducationCardProps = {
    year: string;
    program: string;
    name: string;
    courses: string[];
    coverImage: string;
    desc: string[];
    links: {key: string, value: string}[];
}

export default function EducationCard(props: EducationCardProps){
    const {year, program, name, courses, coverImage, desc, links} = props;

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 lg:hover:bg-surface-2 lg:hover:text-text-1 transition duration-200 ease-in-out rounded-md p-3 cursor-default lg:hover:backdrop-blur-2xl lg:hover:shadow-lg">
            <div className="col-span-1 flex flex-col">
                {coverImage && <Image src={coverImage} alt={name} width={100} height={100} className="rounded-md w-[90%] mt-1 brightness-[0.95] hover:brightness-[0.90] transition ease-in-out border border-border/50" />}
                {!coverImage && <div className="bg-accent text-accent-foreground text-4xl rounded-md px-1 py-0.5 inline-block flex items-center justify-center w-24 h-24">{name[0]}</div>}
            </div>
            <div className="col-span-4 flex flex-col items-center lg:items-start justify-center lg:justify-start">
                <div className="text-text-1 text-base mb-1 text-center font-medium lg:text-left">{program}</div>
                <div className="lg:font-light font-normal text-accenttext-center">{name} <span className="text-accent border border-accent/20 text-xs rounded-2xl px-1 py-0.5 inline-block ml-2">{year}</span></div>
                {courses.length > 0 && <div className="mt-4 font-normal flex flex-wrap text-xs gap-1 gap-y-2 items-center justify-center lg:justify-start"><div className="font-normal inline ">Courses completed: </div>{courses.map((c, item) => <div key={item} className="font-normal lg:font-light bg-surface-3 border border-border/20 text-accent-soft rounded-2xl px-2 self-center text-xs">{c}</div>)}</div>}
                {desc.length > 0 && <div className="mt-2 font-light text-sm flex flex-col gap-2">{desc.map((d, item) => <div key={item} className="flex gap-2 text-accent">· <div  className="text-text-1">{d}</div></div>)}</div>}
                {links.length > 0 && <div className="mt-2 font-normal flex flex-wrap text-xs gap-1 gap-y-2 items-center justify-center lg:justify-start hover:text-accent">
                    {links.map((l, item) => <a key={item} href={l.value} target="_blank" className="flex gap-1 items-center font-normal lg:font-light rounded-2xl px-2 self-center text-xs lg:text-sm">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        >
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                        </svg>
                        {l.key}
                    </a>)}
                </div>}
            </div>
        </div>
    )
}