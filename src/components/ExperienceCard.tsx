export default function ExperienceCard({year, title, org, desc, skills}:{year: string, title: string, org: string, desc: Array<string>, skills: Array<string>}){
    return (
        <div>
            <div className="grid grid-cols-5 border border-border/5 bg-surface-1 hover:bg-surface-2
        hover:text-text-1 transition duration-200 ease-in-out rounded-md p-5 cursor-default lg:hover:backdrop-blur-2xl hover:shadow-lg">
                <div className="col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%] text-center lg:text-left">{year.toUpperCase()}</div>
                </div>
                <div className="col-span-4 flex flex-col">
                    <div className="text-text-1 font-medium">{org}</div>
                    <div className="mb-2 font-light text-accent">{title}</div>
                    <div className="font-light text-sm flex flex-col gap-2">{desc.map((d, item) => <div key={item} className="flex gap-2 text-accent">· <div  className="text-text-1">{d}</div></div>)}</div>
                    <div className="flex gap-1 gap-y-2 mt-4 flex-wrap">{skills.map((key, item) => <div key={item} className="text-sm bg-surface-3 border border-accent/20 text-accent-soft rounded-2xl px-2">{key}</div>)}</div>
                </div>
            </div>
        </div>
    )
}