export default function ExperienceCardMobile({year, title, org, desc, skills}:{year: string, title: string, org: string, desc: Array<string>, skills: Array<string>}){
    return (
        <div>
            <div className="grid grid-cols-6 border border-border/5 bg-surface-1 transition duration-200 ease-in-out rounded-md p-3 cursor-default">
                <div className="col-span-6 items-center justify-center">
                    <div className="text-text-1 font-medium text-base text-center">{org}</div>
                    <div className="mb-2 font-normal text-base text-accent text-center">{title} · {year}</div>
                    <div className="font-normal text-xs flex flex-col gap-2 text-justify">{desc.map((d, item) => <div key={item} className="flex gap-2 text-accent">· <div  className="text-text-1">{d}</div></div>)}</div>
                    <div className="flex gap-1 gap-y-2 mt-4 flex-wrap justify-center">{skills.map((key, item) => <div key={item} className="text-xs bg-surface-3 border border-accent/20 text-accent-soft rounded-2xl px-2">{key}</div>)}</div>
                </div>
            </div>
        </div>
    )
}