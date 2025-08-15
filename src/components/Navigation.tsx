export default function Navigation(){
    return(
        <div className="my-4 flex flex-col gap-4 text-navigation-link text-sm">
            <div className="hover:translate-x-1 transition-transform ease-in-out"><a href="#projects" className="scroll-smooth">Projects →</a></div>
            <div className="hover:translate-x-1 transition-transform ease-in-out"><a href="#experiences">Experience →</a></div>
            <div className="hover:translate-x-1 transition-transform ease-in-out"><a href="#education">Education →</a></div>
            <div className="hover:translate-x-1 transition-transform ease-in-out"><a href="#writings">Writings →</a></div>
            <div className="hover:translate-x-1 transition-transform ease-in-out"><a href="#interests">Interests →</a></div>
        </div>
    )
}