export default function ProjectCard({year, link, name, desc, skills, image}:{year: string, link: string, name: string, desc: string, skills: Array<string>, image: string}){
    if (image != "") {
        return(
            <div>
                <div className="grid grid-cols-5 border border-transparent hover:border hover:bg-zinc-50 transition ease-in-out hover:border-zinc-300 rounded-md p-2 cursor-default dark:hover:bg-zinc-900 dark:hover:text-white hover:text-zinc-950 dark:hover:border-zinc-800 hover:backdrop-blur-2xl">
                <div className="col-span-1 flex flex-col">
                    <a href={link}><img src={image} alt="" className="rounded-md w-[90%] mt-1 brightness-[0.95] hover:brightness-[0.90] transition ease-in-out border-2 border-zinc-400" /></a>
                </div>
                <div className="col-span-4 flex flex-col">
                    <a href={link} className="">{name}</a>
                    <div className="font-light text-sm"><div className="font-normal inline">Description: </div>{desc}</div>
                    <div className="flex gap-1 gap-y-2 mt-4 flex-wrap">{skills.map((item) => <div className="text-sm bg-zinc-50 border border-zinc-300 dark:border-zinc-800 dark:bg-zinc-800 rounded-2xl px-2">{item}</div>)}</div>
                </div>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <div className="grid grid-cols-5 border border-transparent hover:border hover:bg-zinc-50 transition ease-in-out hover:border-zinc-300 rounded-md p-2 cursor-default dark:hover:bg-zinc-900 dark:hover:text-white hover:text-zinc-950 dark:hover:border-zinc-800 hover:backdrop-blur-2xl">
                <div className="col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%]">{year}</div>
                </div>
                <div className="col-span-4 flex flex-col">
                    <a href={link}>{name}</a>
                    <div className="font-light text-sm"><div className="font-normal inline">Description: </div>{desc}</div>
                    <div className="flex gap-1 gap-y-2 mt-4 flex-wrap">{skills.map((item) => <div className="text-sm bg-zinc-50 border border-zinc-300 dark:border-zinc-800 dark:bg-zinc-800 rounded-2xl px-2">{item}</div>)}</div>
                </div>
                </div>
            </div>
        )
    }
}