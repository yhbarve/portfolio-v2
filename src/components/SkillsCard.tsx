export default function SkillsCard({category, skills}: {category: string, skills: Array<string>}){
    return (
        <div>
            <div className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 hover:bg-surface-2
            hover:text-text-1 transition duration-200 ease-in-out rounded-md px-5 py-5 cursor-default lg:hover:backdrop-blur-2xl hover:shadow-lg">
                <div className="lg:col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%] mb-2 lg:mb-0">{category}</div>
                </div>
                <div className="lg:col-span-4 flex gap-1 gap-y-2 items-center flex-wrap">
                    {skills.map((key, item) => <div key={item} className="text-sm bg-surface-3 border border-accent/20 text-accent-soft rounded-2xl px-2">{key}</div>)}
                </div>
            </div>
        </div>
    )
}