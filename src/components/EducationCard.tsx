export default function EducationCard({year, program, uni, courses}: {year: string, program: string, uni: string, courses: Array<string>}){
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 lg:hover:bg-surface-2
            lg:hover:text-text-1 transition duration-200 ease-in-out rounded-md p-3 cursor-default lg:hover:backdrop-blur-2xl lg:hover:shadow-lg">
            <div className="hidden lg:col-span-1 lg:flex flex-col">
                <div className="font-light max-w-[90%] text-sm lg:text-base text-center lg:text-left">{year}</div>
            </div>
            <div className="col-span-4 flex flex-col items-center lg:items-start justify-center lg:justify-start">
                <div className="text-text-1 text-base mb-1 text-center font-medium lg:text-left">{program}</div>
                <div className="lg:font-light font-normal text-accent mb-4 text-center">{uni}<span className="inline lg:hidden"> · {year}</span></div>
                <div className="font-normal flex flex-wrap text-xs gap-2 items-center justify-center lg:justify-start"><div className="font-normal inline ">Courses completed: </div>{courses.map((c, item) => <div key={item} className="font-normal bg-surface-3 border border-border/20 text-accent-soft rounded-2xl px-1 self-center text-xs">{c}</div>)}</div>
            </div>
        </div>
    )
}