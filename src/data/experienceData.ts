export interface ExperienceItem {
    year: string;
    title: string;
    org: string;
    desc: string[];
    skills: string[];
    coverImage: string;
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
    // {
    //     title: "Incoming Associate Software Engineer",
    //     org: "Capital One",
    //     year: "SEP '26",
    //     desc: [
    //         "Starting September 2026, I will be joining Capital One as an Associate Software Engineer at their Toronto office."
    //     ],
    //     skills: [],
    //     coverImage: "/experience/capital-one.png"
    // },
    {
        title: "Software Engineering Intern",
        org: "Nokia",
        year: "SEP — DEC '25",
        desc: [
            "Built an LLM-based evaluation service (React, FastAPI, Celery, MySQL) with parallel async processing and a multi-step evaluation pipeline.",
            "Shipped a user/admin settings service by designing React + MUI flows, exposing 10+ FastAPI CRUD endpoints, and modeling a scalable MySQL schema.",
            "Led system design for 2 new services by defining API contracts, data models, and component/control-flow diagrams.",
            "Deployed microservices to Kubernetes by authoring manifests and integrating CI/CD through Jenkins and Make.",
            "Built a daily Kubernetes CronJob to automate auth-service backups, saving ~2–3 hours of manual work per cluster restart.",
            "Nominated by manager for the 2025 Co-op Student of the Year award."
        ],
        skills: [
            "react",
            "mui",
            "javascript",
            "python",
            "fastapi",
            "celery",
            "mysql",
            "docker",
            "kubernetes",
            "jenkins",
            "make",
            "ci/cd"
        ],
        coverImage: "/experience/nokia.png"
    },
    {
        title: "Engineering Director",
        org: "UW Product Management Club",
        year: "SEP '25 — APR '26",
        desc: [
            "Built an application submission platform for exec and event applications using Next.js, TypeScript, and TailwindCSS.",
            "Designed a PostgreSQL database on Supabase to support application forms, applicant records, and reviewer workflows.",
            "Implemented frontend hooks to fetch, transform, and format backend data for consistent UI rendering.",
            "Developed an internal dashboard to render, filter, and label applicants to streamline review and decision-making."
        ],
        skills: [
            "next.js",
            "react.js",
            "typescript",
            "tailwindcss",
            "supabase",
            "postgresql"
        ],
        coverImage: "/experience/uwpm.png"
    },
    {
        title: "Software Engineering Intern",
        org: "AutoTrader.ca",
        year: "SEP — DEC '24",
        desc: [
            "Profiled and optimized frontend performance for a high-traffic marketplace, reducing Largest Contentful Paint (LCP) by 28% through JavaScript refactoring, async asset loading, and image compression.",
            "Improved Core Web Vitals to enhance user experience and SEO performance across key pages.",
            "Analyzed site structure and crawl data using Screaming Frog SEO Spider, identifying trends and high-impact issues to prioritize fixes.",
            "Improved scalability for 15K+ dynamic URLs by refining server-side rendering, optimizing API responses, and removing redundant scripts",
            "Automated site audit workflows using Python + REST APIs to streamline reporting and recurring checks.",
        ],
        skills: [
            "javascript",
            "web performance",
            "core web vitals",
            "seo",
            "python",
            "rest apis",
            "data analysis",
        ],
        coverImage: "/experience/autotrader.png"
    },
    {
        year: "JAN — APR '24",
        title: "Software Development Intern",
        org: "Petrovision International LLC",
        coverImage: "/experience/petrovision.png",
        desc: [
            "Built reusable React components (banners, images, layouts) for a website redesign to improve UI consistency across pages.",
            "Integrated REST APIs to power dynamic content and supported SEO improvements during the rebuild.",
            "Collaborated closely with senior developers in an agile workflow and contributed to ad-hoc data analysis tasks."
        ],
        skills: [
            "react.js",
            "javascript",
            "rest apis",
            "git",
            "seo",
            "agile"
        ]
    },
    {
        year: "MAR — MAY '23",
        title: "Data Insights Specialist Intern",
        org: "Lazaridis School of Business and Economics",
        coverImage: "/experience/laz.png",
        desc: [
        "Collected, cleaned, and analyzed marketing data using Microsoft Excel and Python to support campaign decisions.",
        "Built Tableau dashboards to visualize performance, surface trends, and track KPIs for stakeholders.",
        "Identified optimization opportunities that helped reduce marketing spend by 15% while maintaining performance."
        ],
        skills: [
        "microsoft excel",
        "python",
        "tableau",
        "data cleaning",
        "data analysis",
        "data visualization"
        ],
    },
    {
        year: "OCT '22 — AUG '23",
        title: "Web Designer Executive",
        org: "UW Data Science Club",
        coverImage: "/experience/uwdsc.png",
        desc: [
        "Partnered with event organizers to gather requirements and translate them into clear, on-brand designs.",
        "Designed promotional creatives for Instagram, LinkedIn, Facebook, and 𝕏 using Canva.",
        "Contributed to early website design work in Figma, focusing on layout and visual consistency."
        ],
        skills: [
            "canva",
            "figma",
            "visual design",
            "social media design",
            "communication",
            "collaboration"
        ]
    }
];