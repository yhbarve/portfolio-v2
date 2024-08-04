import ExperienceCard from "../ExperienceCard";

export default function Experience(){
    return (
        <div className="pt-24">
            <div className="text-sm font-bold pb-2 pl-2">EXPERIENCE</div>
            <div className="flex flex-col gap-4 dark:hover:text-zinc-400 hover:text-zinc-500">
                <ExperienceCard year="SEP — DEC 2024" title="Incoming Search Engine Optimization Co-op Student" org="Trader Corporation" desc="Perform keyword research, content analysis, and optimize the metadata of webpages for higher search rankings. Assist in periodic audits to ensure website meets SEO best practices. Share results, analysis, opportunies and findings in team meetings. Work cross-functionally with other teams to deliver key SEO metrics." skills={["keyword research", "seo", "metadata optimization", "vue.js"]} />
                
                <ExperienceCard year="JAN — APR 2024" title="Software Developer Intern - Business Development" org="Petrovision International LLC" desc="Contributed towards the redevelopment of the company's website. Developed frontend components using React and TailwindCSS. Regularly interacted with a team of senior developers. Performed some ad-hoc data analysis tasks. Helped in the development of training modules for the staff." skills={["react.js", "javascript", "tailwindcss", "component building", "git"]} />

                <ExperienceCard year="MAR — MAY 2023" title="Data Analyst Co-op Student" org="Lazaridis School of Business and Economics" desc="Performed data gathering, cleaning and analysis for the marketing team using Microsoft Excel and Python. Used Tableau to create insightful data visualizations. Identified key trends and optimized the marketing strategy to reduce the spending by 15%." skills={["microsoft excel", "python", "tableau", "data analysis"]} />

                <ExperienceCard year="OCT 2022 — AUG 2023" title="Executive Member - Graphic Design Team" org="University of Waterloo's Data Science Club" desc="Interacted with event organizers to understand the requirements of the design. Used Canva to create posts for Instagram, LinkedIn, Facebook, and 𝕏. Briefly contributed to the club website design using Figma." skills={["canva", "figma", "graphic design", "teamwork", "leadership"]} />
            </div>
            <div className="mt-4 transition ease-in-out text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-50 hover:text-black hover:translate-x-1"><a href="/" className="">View Full Resume →</a></div>
        </div>
    )
}