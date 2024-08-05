export default function Navigation(){
    return(
        <div className="pl-2 flex flex-col gap-4 dark:text-zinc-300 text-sm">
            <div className="hover:translate-x-1 transition-transform ease-in-out"><a href="#projects" className="scroll-smooth">Projects →</a></div>
            <div className="hover:translate-x-1 transition-transform ease-in-out"><a href="#experiences">Experience →</a></div>
            <div className="hover:translate-x-1 transition-transform ease-in-out"><a href="#education">Education →</a></div>
            <div className="hover:translate-x-1 transition-transform ease-in-out"><a href="#interests">Interests →</a></div>
        </div>
    )
}