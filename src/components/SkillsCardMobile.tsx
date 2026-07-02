export default function SkillsCardMobile({category, skills}: {category: string, skills: Array<string>}){
    return (
        <div>
            <div className="flex flex-col border border-border/5 bg-surface-1 rounded-md p-2">
                <div className="mb-2 text-text-1 font-medium text-sm text-start">
                    {category.toUpperCase()}
                </div>
                <div className="flex gap-1 gap-y-2 items-center flex-wrap justify-start">
                    {skills.map((key, item) => (
                        <div 
                            key={item} 
                            className="text-xs bg-surface-3 border border-accent/20 text-accent-soft rounded-2xl px-1"
                        >
                            {key}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
