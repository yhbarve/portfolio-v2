import React from "react";
import ExperienceCard from "../ExperienceCard";

export default function Skills() {
    const languages: string[] = ["C", "C++", "Bash", "Go", "Python", "HTML", "CSS", "Javascript", "Typescript", "SQL", "Kotlin"];
    const frontend: string[] = ["React.js", "Next.js", "TailwindCSS", "Bootstrap"];
    const backend: string[] = ["REST APIs", "Node.js", "Express.js", "Hono", "Websockets", "Socket.io", "Auth (JWT)", "Zod"];
    const database: string[] = ["PostgreSQL", "MongoDB", "MySQL", "Firebase"];
    const tools: string[] = ["Prisma ORM", "Git", "Docker", "npm", "WebAssembly", "Jest", "Jira", "Tableau", "Figma"];
    const cloud: string[] = ["AWS"];
    const devops: string[] = ["GitHub Actions", "Railway", "Vercel", "Netlify", "Heroku"];
    const aiMl: string[] = ["OpenAI API", "Gemini SDK", "Codex", "Claude Code", "GitHub Copilot", "Neural Nets", "CNNs", "RNNs", "Computational Vision", "Tensorflow", "PyTorch", "Numpy", "Pandas", "Matplotlib",]
    const csFundamentals: string[] = ["Object Oriented Programming", "Data Structures", "Algorithms", "Time & Space Complexity Analysis", "Operating Systems", "Concurrency", "Relational Databases", "User Interfaces","Software Design Patterns", "Software Architecture Styles"]
    const others: string[] = ["Agile Methodology", "Scrum", "Jetpack Compose (Android)", "Retrofit (Android)"]
  return (
    <div id="skills" className="pt-12">
      <div className="flex items-center pl-2 pb-2 justify-between">
        <div className="text-sm font-bold cursor-default text-section-header">
          SKILLS
        </div>
      </div>
      <div className="flex flex-col gap-4 text-card-foreground hover:text-card-otherHoverForeground">
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl">
                <div className="sm:col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%] pb-2 sm:pb-0">LANGUAGES</div>
                </div>
                <div className="sm:col-span-4 flex gap-1 gap-y-2 items-center flex-wrap">
                    {languages.map((key, item) => <div key={item} className="text-sm bg-card-skillsBackground border border-card-skillsBorder text-card-skillsForeground rounded-md px-2">{key}</div>)}
                </div>
            </div>
        </div>
        <div>
            <div className="grid sm:grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl">
                <div className="sm:col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%] pb-2 sm:pb-0">CORE CS</div>
                </div>
                <div className="sm:col-span-4 flex gap-1 gap-y-2 flex-wrap items-center">
                    {csFundamentals.map((key, item) => <div key={item} className="text-sm bg-card-skillsBackground border border-card-skillsBorder text-card-skillsForeground rounded-md px-2 h-fit">{key}</div>)}
                </div>
            </div>
        </div>
        <div>
            <div className="grid sm:grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl">
                <div className="sm:col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%] pb-2 sm:pb-0">FRONTEND</div>
                </div>
                <div className="sm:col-span-4 flex gap-1 gap-y-2 flex-wrap items-center">
                    {frontend.map((key, item) => <div key={item} className="text-sm bg-card-skillsBackground border border-card-skillsBorder text-card-skillsForeground rounded-md px-2 h-fit">{key}</div>)}
                </div>
            </div>
        </div>
        <div>
            <div className="grid sm:grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl">
                <div className="sm:col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%] pb-2 sm:pb-0">BACKEND</div>
                </div>
                <div className="sm:col-span-4 flex gap-1 gap-y-2 flex-wrap items-center">
                    {backend.map((key, item) => <div key={item} className="text-sm bg-card-skillsBackground border border-card-skillsBorder text-card-skillsForeground rounded-md px-2 h-fit">{key}</div>)}
                </div>
            </div>
        </div>
        <div>
            <div className="grid sm:grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl">
                <div className="sm:col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%] pb-2 sm:pb-0">DATABASE</div>
                </div>
                <div className="sm:col-span-4 flex gap-1 gap-y-2 flex-wrap items-center">
                    {database.map((key, item) => <div key={item} className="text-sm bg-card-skillsBackground border border-card-skillsBorder text-card-skillsForeground rounded-md px-2 h-fit">{key}</div>)}
                </div>
            </div>
        </div>
        <div>
            <div className="grid sm:grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl">
                <div className="sm:col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%] pb-2 sm:pb-0">DEVOPS</div>
                </div>
                <div className="sm:col-span-4 flex gap-1 gap-y-2 flex-wrap items-center">
                    {devops.map((key, item) => <div key={item} className="text-sm bg-card-skillsBackground border border-card-skillsBorder text-card-skillsForeground rounded-md px-2 h-fit">{key}</div>)}
                </div>
            </div>
        </div>
        <div>
            <div className="grid sm:grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl">
                <div className="sm:col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%] pb-2 sm:pb-0">TOOLS</div>
                </div>
                <div className="sm:col-span-4 flex gap-1 gap-y-2 flex-wrap items-center">
                    {tools.map((key, item) => <div key={item} className="text-sm bg-card-skillsBackground border border-card-skillsBorder text-card-skillsForeground rounded-md px-2 h-fit">{key}</div>)}
                </div>
            </div>
        </div>
        <div>
            <div className="grid sm:grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl">
                <div className="sm:col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%] pb-2 sm:pb-0">CLOUD</div>
                </div>
                <div className="sm:col-span-4 flex gap-1 gap-y-2 flex-wrap items-center">
                    {cloud.map((key, item) => <div key={item} className="text-sm bg-card-skillsBackground border border-card-skillsBorder text-card-skillsForeground rounded-md px-2 h-fit">{key}</div>)}
                </div>
            </div>
        </div>
        <div>
            <div className="grid grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl">
                <div className="col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%] pb-2 sm:pb-0">AI & ML</div>
                </div>
                <div className="col-span-4 flex gap-1 gap-y-2 flex-wrap items-center">
                    {aiMl.map((key, item) => <div key={item} className="text-sm bg-card-skillsBackground border border-card-skillsBorder text-card-skillsForeground rounded-md px-2 h-fit">{key}</div>)}
                </div>
            </div>
        </div>
        <div>
            <div className="grid sm:grid-cols-5 border border-card-border hover:border-card-hoverBorder bg-card-background hover:bg-card-hoverBackground
        hover:text-card-hoverForeground transition duration-200 ease-in-out rounded-md p-2 cursor-default lg:hover:backdrop-blur-2xl">
                <div className="sm:col-span-1 flex flex-col">
                    <div className="font-light max-w-[90%] pb-2 sm:pb-0">OTHER</div>
                </div>
                <div className="sm:col-span-4 flex gap-1 gap-y-2 flex-wrap items-center">
                    {others.map((key, item) => <div key={item} className="text-sm bg-card-skillsBackground border border-card-skillsBorder text-card-skillsForeground rounded-md px-2 h-fit">{key}</div>)}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
