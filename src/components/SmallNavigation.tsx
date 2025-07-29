export default function SmallNavigation(){
    return(
        <div className="pl-2 flex gap-4 text-navigation-link text-sm mt-8">
            <div className="text-navigation-link bg-socials-hoverBg px-4 py-2 rounded-lg"><a href="#education">Education</a></div>
            <div className="text-navigation-link bg-socials-hoverBg px-4 py-2 rounded-lg"><a href="#projects" className="scroll-smooth">Projects</a></div>
            <div className="text-navigation-link bg-socials-hoverBg px-4 py-2 rounded-lg"><a href="#experiences">Experience</a></div>
            <div className="text-navigation-link bg-socials-hoverBg px-4 py-2 rounded-lg"><a href="#interests">Interests</a></div>
        </div>
    )
}