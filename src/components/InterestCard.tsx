export default function InterestCard({index, title, desc} : {index: string, title: string, desc: string}){
    return(
        <div className="grid grid-cols-5 border border-transparent hover:border hover:bg-zinc-50 transition ease-in-out hover:border-zinc-300 rounded-md p-2 cursor-default dark:hover:bg-zinc-900 dark:hover:text-white hover:text-zinc-950 dark:hover:border-zinc-800 hover:backdrop-blur-2xl">
            <div className="col-span-1 flex flex-col">
                <div className="font-light max-w-[90%]">{index}</div>
            </div>
            <div className="col-span-4 flex flex-col">
                <div>{title}</div>
                <div className="font-light text-sm"><div className="font-normal inline">Description: </div>{desc}</div>                   
            </div>
        </div>
    )
}