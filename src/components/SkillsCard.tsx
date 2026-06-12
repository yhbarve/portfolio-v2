export default function SkillsCard({category, skills}: {category: string, skills: Array<string>}){
    return (
        <div>
            <div className="flex flex-col lg:grid lg:grid-cols-5 border border-border/5 bg-surface-1 lg:hover:bg-surface-2
            lg:hover:text-text-1 transition duration-200 ease-in-out rounded-md p-3 cursor-default lg:hover:backdrop-blur-2xl lg:hover:shadow-lg">
                <div className="lg:col-span-1 flex flex-col">
                    <div className="mb-2 lg:mb-0 text-sm lg:text-base text-center lg:text-left font-medium lg:font-light">{category.toUpperCase()}</div>
                </div>
                <div className="lg:col-span-4 flex gap-1 gap-y-2 items-center flex-wrap justify-center lg:justify-start">
                    {skills.map((key, item) => <div key={item} className="text-xs lg:text-sm bg-surface-3 border border-accent/20 text-accent-soft rounded-2xl px-2 font-normal lg:font-light">{key}</div>)}
                </div>
            </div>
        </div>
    )
}