export default function EducationCard({year, program, uni, courses}: {year: string, program: string, uni: string, courses: Array<string>}){
    return (
        <div className="grid grid-cols-5 border border-border/5 bg-surface-1 hover:bg-surface-2
        hover:text-text-1 transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl hover:shadow-lg">
            <div className="col-span-1 flex flex-col">
                <div className="font-light max-w-[90%]">{year}</div>
            </div>
            <div className="col-span-4 flex flex-col">
                <div className="text-text-1">{program}</div>
                <div className="mb-2 font-light">{uni}</div>
                <div className="font-light flex flex-wrap text-sm gap-2 items-center"><div className="font-normal inline">Courses completed: </div>{courses.map((c, item) => <div key={item} className="font-light bg-surface-3 border border-border/20 text-accent-soft rounded-2xl px-1 self-center text-xs">{c}</div>)}</div>
            </div>
        </div>
    )
}