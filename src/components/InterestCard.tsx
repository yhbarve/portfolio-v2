export default function InterestCard({index, title, desc} : {index: string, title: string, desc: string}){
    return(
        <div className="grid grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
         transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl">
            <div className="col-span-1 flex flex-col">
                <div className="font-light max-w-[90%]">{index}</div>
            </div>
            <div className="col-span-4 flex flex-col">
                <div className="text-section-header">{title}</div>
                <div className="font-light text-sm"><div className="font-normal inline">Description: </div>{desc}</div>                   
            </div>
        </div>
    )
}