export default function CourseCard({year, program, uni, desc, link}: {year: string, program: string, uni: string, desc: string, link?: string}){

    if (link == "") {
        return (
            <div className="grid grid-cols-5 border border-transparent hover:border hover:bg-zinc-100 transition ease-in-out hover:border-zinc-300 rounded-md p-2 cursor-default dark:hover:bg-zinc-900 dark:hover:text-white hover:text-zinc-950 dark:hover:border-zinc-800 hover:backdrop-blur-2xl">
                <div className="col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%]">{year}</div>
                </div>
                <div className="col-span-4 flex flex-col">
                    <div>{program}</div>
                    <div className="mb-2">{uni}</div>
                    <div className="font-light text-sm"><div className="font-normal inline">Description: </div>{desc}</div>                   
                </div>
            </div>
        );
    } else {
        return (
            <div className="grid grid-cols-5 border border-transparent hover:border hover:bg-zinc-50 transition ease-in-out hover:border-zinc-300 rounded-md p-2 cursor-default dark:hover:bg-zinc-900 dark:hover:text-white hover:text-zinc-950 dark:hover:border-zinc-800 hover:backdrop-blur-2xl">
                <div className="col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%]">{year}</div>
                </div>
                <div className="col-span-4 flex flex-col justify-start">
                    <div>{program}</div>
                    <div className="mb-2">{uni}</div>
                    <div className="font-light text-sm mb-2"><div className="font-normal inline">Description: </div>{desc}</div>
                    <a href={link} className="font-regular text-sm hover:underline">Certificate of completion</a>
                </div>
            </div>
        )
    }
}