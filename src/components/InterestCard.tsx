export default function InterestCard({index, title, desc} : {index: string, title: string, desc: string}){
    return(
        <div className="grid grid-cols-5 border border-border/5 bg-surface-1 hover:bg-surface-2
        hover:text-text-1 transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl hover:shadow-lg">
            <div className="col-span-1 flex flex-col">
                <div className="font-light max-w-[90%]">{index}</div>
            </div>
            <div className="col-span-4 flex flex-col">
                <div className="text-text-1">{title}</div>
                <div className="font-light text-sm"><div className="font-normal inline">Description: </div>{desc}</div>                   
            </div>
        </div>
    )
}