export default function CourseCard({year, program, uni, desc, link}: {year: string, program: string, uni: string, desc: string, link?: string}){

    if (link == "") {
        return (
            <div className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 lg:hover:bg-surface-2
            lg:hover:text-text-1 transition duration-200 ease-in-out rounded-md p-3 cursor-default lg:hover:backdrop-blur-2xl lg:hover:shadow-lg">
                <div className="hidden lg:col-span-1 lg:flex flex-col">
                    <div className="font-light max-w-[90%] text-sm text-center lg:text-left">{year}</div>
                </div>
                <div className="col-span-4 flex flex-col items-center lg:items-start justify-center lg:justify-start">
                    <div className="font-medium text-text-1 text-center lg:text-left">{program}</div>
                    <div className="mb-2 font-normal lg:font-light  text-accent text-center lg:text-left">{uni}<span className="inline lg:hidden"> · {year}</span></div>
                    <div className="font-normal text-xs text-center lg:text-left"><div className="font-normal inline">Description: </div>{desc}</div>                   
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 lg:hover:bg-surface-2
            lg:hover:text-text-1 transition duration-200 ease-in-out rounded-md p-3 cursor-default lg:hover:backdrop-blur-2xl lg:hover:shadow-lg">
                <div className="hidden lg:col-span-1 lg:flex flex-col">
                    <div className="font-light max-w-[90%] text-center lg:text-left">{year}</div>
                </div>
                <div className="col-span-4 flex flex-col justify-start items-center lg:items-start">
                    <div className="font-medium text-text-1 text-center lg:text-left">{program}</div>
                    <div className="mb-2 lg:font-light font-normal text-accent text-center lg:text-left">{uni}<span className="inline lg:hidden"> · {year}</span></div>
                    <div className="font-normal text-xs mb-2 text-justify lg:text-left"><div className="font-normal inline">Description: </div>{desc}</div>
                    <a href={link} target="_blank" className="font-regular text-xs underline-offset-2 underline text-center lg:text-left">Certificate of completion</a>
                </div>
            </div>
        )
    }
}