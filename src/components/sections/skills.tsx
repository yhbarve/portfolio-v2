import React from "react";
import ExperienceCard from "../ExperienceCard";
import SkillsCard from "../SkillsCard";

export default function Skills() {
    const languages: string[] = ["C", "C++", "Bash", "Go", "Python", "HTML", "CSS", "Javascript", "Typescript", "SQL", "Kotlin"];
    const frontend: string[] = ["React.js", "Next.js", "TailwindCSS", "Bootstrap"];
    const backend: string[] = ["REST APIs", "Node.js", "Express.js", "FastAPI (Python)", "Hono", "Websockets", "Socket.io", "Auth (JWT)", "Zod"];
    const database: string[] = ["PostgreSQL", "MongoDB", "MySQL", "Firebase"];
    const tools: string[] = ["Prisma ORM", "Git", "Docker", "Kubernetes", "npm", "WebAssembly", "Jest", "Jira", "Tableau", "Figma"];
    const cloud: string[] = ["AWS"];
    const devops: string[] = ["Jenkins", "Make", "GitHub Actions", "Railway", "Vercel", "Heroku"];
    const aiMl: string[] = ["OpenAI API", "Gemini SDK", "Codex", "Claude Code", "GitHub Copilot", "Neural Nets", "CNNs", "RNNs", "Computational Vision", "Tensorflow", "PyTorch", "Numpy", "Pandas", "Matplotlib",]
    const csFundamentals: string[] = ["Object Oriented Programming", "Data Structures", "Algorithms", "Time & Space Complexity Analysis", "Operating Systems", "Concurrency", "Relational Databases", "User Interfaces","Software Design Patterns", "Software Architecture Styles"]
    const others: string[] = ["Agile Methodology", "Scrum", "Jetpack Compose (Android)", "Retrofit (Android)"]
  return (
    <div id="skills" className="pt-12">
      <div className="flex items-center pb-2 justify-between">
        <div className="text-sm font-bold cursor-default text-accent">
          TECHNICAL SKILLS & TOOLS
        </div>
      </div>
      <div className="flex flex-col gap-4 text-text-1 hover:text-text-1">
        <SkillsCard category="LANGUAGES" skills={languages}/>
        <SkillsCard category="CORE CS" skills={csFundamentals}/>
        <SkillsCard category="FRONTEND" skills={frontend}/>
        <SkillsCard category="BACKEND" skills={backend}/>
        <SkillsCard category="DATABASE" skills={database}/>
        <SkillsCard category="DEVOPS" skills={devops}/>
        <SkillsCard category="TOOLS" skills={tools}/>
        <SkillsCard category="CLOUD" skills={cloud}/>
        <SkillsCard category="AI & ML" skills={aiMl}/>
        <SkillsCard category="OTHER" skills={others}/>
      </div>
    </div>
  );
}
