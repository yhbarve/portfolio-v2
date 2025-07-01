export default function CourseCard({year, program, uni, desc, link}: {year: string, program: string, uni: string, desc: string, link?: string}){

    if (link == "") {
        return (
            <div className="grid grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition-colors duration-200 ease-in-out rounded-md p-2 cursor-default hover:backdrop-blur-2xl">
                <div className="col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%]">{year}</div>
                </div>
                <div className="col-span-4 flex flex-col">
                    <div className="font-medium">{program}</div>
                    <div className="mb-2 font-light">{uni}</div>
                    <div className="font-light text-sm"><div className="font-normal inline">Description: </div>{desc}</div>                   
                </div>
            </div>
        );
    } else {
        return (
            <div className="grid grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition-colors duration-200 ease-in-out rounded-md p-2 cursor-default hover:backdrop-blur-2xl">
                <div className="col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%]">{year}</div>
                </div>
                <div className="col-span-4 flex flex-col justify-start">
                    <div className="font-medium">{program}</div>
                    <div className="mb-2 font-light">{uni}</div>
                    <div className="font-light text-sm mb-2"><div className="font-normal inline">Description: </div>{desc}</div>
                    <a href={link} target="_blank" className="font-regular text-sm underline">Certificate of completion</a>
                </div>
            </div>
        )
    }
}