export interface SkillItem {
    name: string;
    items: string[];
}

export const SKILL_ITEMS: SkillItem[] = [
    {
        name: "Languages",
        items: ["C", "C++", "Bash", "Go", "Python", "HTML", "CSS", "Javascript", "Typescript", "SQL", "Kotlin"],
    },
    {
        name: "Frontend",
        items: ["React.js", "Next.js", "TailwindCSS", "Bootstrap"],
    },
    {
        name: "Backend",
        items: ["REST APIs", "Node.js", "Express.js", "FastAPI (Python)", "Hono", "Websockets", "Socket.io", "Auth (JWT)", "Zod"],
    },
    {
        name: "Database",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"]
    },
    {
        name: "Tools",
        items: ["Prisma ORM", "Git", "Docker", "Kubernetes", "npm", "WebAssembly", "Jest", "Jira", "Tableau", "Figma"],
    },
    {
        name: "Cloud",
        items: ["AWS"],
    },
    {
        name: "DevOps",
        items: ["Jenkins", "Make", "GitHub Actions", "Railway", "Vercel", "Heroku"],
    },
    {
        name: "AI & ML",
        items: ["OpenAI API", "Gemini SDK", "Codex", "Claude Code", "GitHub Copilot", "Neural Nets", "CNNs", "RNNs", "Computational Vision", "Tensorflow", "PyTorch", "Numpy", "Pandas", "Matplotlib",],
    },
    {
        name: "Core CS",
        items: ["Object Oriented Programming", "Data Structures", "Algorithms", "Time & Space Complexity Analysis", "Operating Systems", "Concurrency", "Relational Databases", "User Interfaces","Software Design Patterns", "Software Architecture Styles"],
    }
]