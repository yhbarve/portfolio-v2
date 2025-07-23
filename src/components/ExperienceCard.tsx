export default function ExperienceCard({year, title, org, desc, skills}:{year: string, title: string, org: string, desc: string, skills: Array<string>}){
    return (
        <div>
            <div className="grid grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition duration-200 ease-in-out rounded-md p-2 cursor-default hover:backdrop-blur-2xl">
                <div className="col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%]">{year}</div>
                </div>
                <div className="col-span-4 flex flex-col">
                    <div>{title}</div>
                    <div className="mb-2 font-light">{org}</div>
                    <div className="font-light text-sm"><div className="font-normal inline">Description: </div>{desc}</div>
                    <div className="flex gap-1 gap-y-2 mt-4 flex-wrap">{skills.map((key, item) => <div key={item} className="text-sm bg-card-skillsBackground border border-card-skillsBorder text-card-skillsForeground rounded-2xl px-2">{key}</div>)}</div>
                </div>
            </div>
        </div>
    )
}