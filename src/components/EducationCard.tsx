export default function EducationCard({year, program, uni, courses}: {year: string, program: string, uni: string, courses: Array<string>}){
    return (
        <div className="grid grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl">
            <div className="col-span-1 flex flex-col">
                <div className="font-light max-w-[90%]">{year}</div>
            </div>
            <div className="col-span-4 flex flex-col">
                <div className="text-section-header">{program}</div>
                <div className="mb-2 font-light">{uni}</div>
                <div className="font-light flex flex-wrap text-sm gap-2 items-center"><div className="font-normal inline">Courses completed: </div>{courses.map((c) => <div className="font-light bg-card-skillsBackground border border-card-skillsBorder text-card-skillsForeground rounded-md px-1 self-center text-xs">{c}</div>)}</div>
            </div>
        </div>
    )
}