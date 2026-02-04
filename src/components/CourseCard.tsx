export default function CourseCard({year, program, uni, desc, link}: {year: string, program: string, uni: string, desc: string, link?: string}){

    if (link == "") {
        return (
            <div className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 hover:bg-surface-2
            hover:text-text-1 transition duration-200 ease-in-out rounded-md px-5 py-5 cursor-default lg:hover:backdrop-blur-2xl hover:shadow-lg">
                <div className="hidden lg:col-span-1 lg:flex flex-col">
                    <div className="font-light max-w-[90%]">{year}</div>
                </div>
                <div className="col-span-4 flex flex-col">
                    <div className="font-medium text-text-1">{program}</div>
                    <div className="mb-2 font-light">{uni}<span className="inline lg:hidden"> · {year}</span></div>
                    <div className="font-light text-sm"><div className="font-normal inline">Description: </div>{desc}</div>                   
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 hover:bg-surface-2
            hover:text-text-1 transition duration-200 ease-in-out rounded-md px-5 py-5 cursor-default lg:hover:backdrop-blur-2xl hover:shadow-lg">
                <div className="hidden lg:col-span-1 lg:flex flex-col">
                    <div className="font-light max-w-[90%]">{year}</div>
                </div>
                <div className="col-span-4 flex flex-col justify-start">
                    <div className="font-medium text-text-1">{program}</div>
                    <div className="mb-2 font-light">{uni}<span className="inline lg:hidden"> · {year}</span></div>
                    <div className="font-light text-sm mb-2"><div className="font-normal inline">Description: </div>{desc}</div>
                    <a href={link} target="_blank" className="font-regular text-sm underline hover:text-accent-foreground">Certificate of completion</a>
                </div>
            </div>
        )
    }
}