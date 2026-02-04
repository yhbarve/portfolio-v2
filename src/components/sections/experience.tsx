import React from "react";
import ExperienceCard from "../ExperienceCard";
import ExperienceCardMobile from "../ExperienceCardMobile";

export default function Experience() {
  return (
    <div id="experiences" className="pt-12">
      <div className="flex items-center pb-2 justify-between">
        <div className="text-sm font-bold cursor-default text-accent">
          EXPERIENCE
        </div>
        <div className="transition duration-200 ease-in-out text-accent hover:translate-x-1 hidden lg:block">
          <a href="https://drive.google.com/file/d/1oO_z0Pz-CMLYhW1WbsqDduptITErZg_D/view?usp=sharing" className="">
            View Resume →
          </a>
        </div>
      </div>
      <div className="lg:flex flex-col gap-4 text-text-1 hover:text-text-1 hidden">
        <ExperienceCard
          year="SEP — DEC '25"
          title="Software Engineering Intern"
          org="Nokia"
          desc={[
            "Built an LLM-based evaluation service (React, FastAPI, Celery, MySQL) with parallel async processing and a multi-step evaluation pipeline.",
            "Shipped a user/admin settings service by designing React + MUI flows, exposing 10+ FastAPI CRUD endpoints, and modeling a scalable MySQL schema.",
            "Led system design for 2 new services by defining API contracts, data models, and component/control-flow diagrams.",
            "Deployed microservices to Kubernetes by authoring manifests and integrating CI/CD through Jenkins and Make.",
            "Built a daily Kubernetes CronJob to automate auth-service backups, saving ~2–3 hours of manual work per cluster restart.",
            "Nominated by manager for the 2025 Co-op Student of the Year award."
          ]}
          skills={[
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
          ]}

        />
        <ExperienceCard
          year="SEP '25 — PRESENT"
          title="Engineering Director"
          org="UW Product Management Club"
          desc={[
            "Built an application submission platform for exec and event applications using Next.js, TypeScript, and TailwindCSS.",
            "Designed a PostgreSQL database on Supabase to support application forms, applicant records, and reviewer workflows.",
            "Implemented frontend hooks to fetch, transform, and format backend data for consistent UI rendering.",
            "Developed an internal dashboard to render, filter, and label applicants to streamline review and decision-making."
          ]}
          skills={[
            "next.js",
            "react.js",
            "typescript",
            "tailwindcss",
            "supabase",
            "postgresql",
            "database design",
            "api integration",
            "data modeling"
          ]}
        />
        <ExperienceCard
          year="SEP — DEC '24"
          title="Software Engineering Intern (Performance Optimization)"
          org="AutoTrader.ca"
          desc={[
            "Profiled and optimized frontend performance for a high-traffic marketplace, reducing Largest Contentful Paint (LCP) by 28% through JavaScript refactoring, async asset loading, and image compression.",
            "Improved Core Web Vitals to enhance user experience and SEO performance across key pages.",
            "Analyzed site structure and crawl data using Screaming Frog SEO Spider, identifying trends and high-impact issues to prioritize fixes.",
            "Improved scalability for 15K+ dynamic URLs by refining server-side rendering, optimizing API responses, and removing redundant scripts",
            "Automated site audit workflows using Python + REST APIs to streamline reporting and recurring checks.",
            "Researched platform-specific best practices and contributed insights to refine the organization’s social media marketing strategy."
          ]}
          skills={[
            "javascript",
            "web performance",
            "core web vitals",
            "pagespeed insights",
            "google lighthouse",
            "chrome devtools",
            "seo",
            "screaming frog seo spider",
            "python",
            "rest apis",
            "data analysis",
            "server-side rendering"
          ]}

        />

        <ExperienceCard
          year="JAN — APR '24"
          title="Software Development Intern"
          org="Petrovision International LLC"
          desc={[
            "Built reusable React components (banners, images, layouts) for a website redesign to improve UI consistency across pages.",
            "Integrated REST APIs to power dynamic content and supported SEO improvements during the rebuild.",
            "Collaborated closely with senior developers in an agile workflow and contributed to ad-hoc data analysis tasks."
          ]}
          skills={[
            "react.js",
            "javascript",
            "rest apis",
            "git",
            "seo",
            "agile"
          ]}
        />

        <ExperienceCard
          year="MAR — MAY '23"
          title="Data Insights Specialist Intern"
          org="Lazaridis School of Business and Economics"
          desc={[
            "Collected, cleaned, and analyzed marketing data using Microsoft Excel and Python to support campaign decisions.",
            "Built Tableau dashboards to visualize performance, surface trends, and track KPIs for stakeholders.",
            "Identified optimization opportunities that helped reduce marketing spend by 15% while maintaining performance."
          ]}
          skills={[
            "microsoft excel",
            "python",
            "tableau",
            "data cleaning",
            "data analysis",
            "data visualization"
          ]}
        />

        <ExperienceCard
          year="OCT '22 — AUG '23"
          title="Web Designer Executive"
          org="UW Data Science Club"
          desc={[
            "Partnered with event organizers to gather requirements and translate them into clear, on-brand designs.",
            "Designed promotional creatives for Instagram, LinkedIn, Facebook, and 𝕏 using Canva.",
            "Contributed to early website design work in Figma, focusing on layout and visual consistency."
          ]}
          skills={[
            "canva",
            "figma",
            "visual design",
            "social media design",
            "communication",
            "collaboration"
          ]}
        />

      </div>

      {/* MOBILE CARDs */}
      <div className="flex flex-col gap-4 text-text-1 hover:text-text-1 lg:hidden">
        <ExperienceCardMobile
          year="Sep — Dec '25"
          title="Software Engineering Intern"
          org="Nokia"
          desc={[
            "Built an LLM-based evaluation service (React, FastAPI, Celery, MySQL) with parallel async processing and a multi-step evaluation pipeline.",
            "Shipped a user/admin settings service by designing React + MUI flows, exposing 10+ FastAPI CRUD endpoints, and modeling a scalable MySQL schema.",
            "Led system design for 2 new services by defining API contracts, data models, and component/control-flow diagrams.",
            "Deployed microservices to Kubernetes by authoring manifests and integrating CI/CD through Jenkins and Make.",
            "Built a daily Kubernetes CronJob to automate auth-service backups, saving ~2–3 hours of manual work per cluster restart.",
            "Nominated by manager for the 2025 Co-op Student of the Year award."
          ]}
          skills={[
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
          ]}

        />
        <ExperienceCardMobile
          year="Sep '25 — Present"
          title="Engineering Director"
          org="UW Product Management Club"
          desc={[
            "Built an application submission platform for exec and event applications using Next.js, TypeScript, and TailwindCSS.",
            "Designed a PostgreSQL database on Supabase to support application forms, applicant records, and reviewer workflows.",
            "Implemented frontend hooks to fetch, transform, and format backend data for consistent UI rendering.",
            "Developed an internal dashboard to render, filter, and label applicants to streamline review and decision-making."
          ]}
          skills={[
            "next.js",
            "react.js",
            "typescript",
            "tailwindcss",
            "supabase",
            "postgresql",
            "database design",
            "api integration",
            "data modeling"
          ]}
        />
        <ExperienceCardMobile
          year="Sep — Dec '24"
          title="Software Engineering Intern (Performance Optimization)"
          org="AutoTrader.ca"
          desc={[
            "Profiled and optimized frontend performance for a high-traffic marketplace, reducing Largest Contentful Paint (LCP) by 28% through JavaScript refactoring, async asset loading, and image compression.",
            "Improved Core Web Vitals to enhance user experience and SEO performance across key pages.",
            "Analyzed site structure and crawl data using Screaming Frog SEO Spider, identifying trends and high-impact issues to prioritize fixes.",
            "Improved scalability for 15K+ dynamic URLs by refining server-side rendering, optimizing API responses, and removing redundant scripts",
            "Automated site audit workflows using Python + REST APIs to streamline reporting and recurring checks.",
            "Researched platform-specific best practices and contributed insights to refine the organization’s social media marketing strategy."
          ]}
          skills={[
            "javascript",
            "web performance",
            "core web vitals",
            "pagespeed insights",
            "google lighthouse",
            "chrome devtools",
            "seo",
            "screaming frog seo spider",
            "python",
            "rest apis",
            "data analysis",
            "server-side rendering"
          ]}

        />

        <ExperienceCardMobile
          year="Jan — Apr '24"
          title="Software Development Intern"
          org="Petrovision International LLC"
          desc={[
            "Built reusable React components (banners, images, layouts) for a website redesign to improve UI consistency across pages.",
            "Integrated REST APIs to power dynamic content and supported SEO improvements during the rebuild.",
            "Collaborated closely with senior developers in an agile workflow and contributed to ad-hoc data analysis tasks."
          ]}
          skills={[
            "react.js",
            "javascript",
            "rest apis",
            "git",
            "seo",
            "agile"
          ]}
        />

        <ExperienceCardMobile
          year="Mar — May '23"
          title="Data Insights Specialist Intern"
          org="Lazaridis School of Business and Economics"
          desc={[
            "Collected, cleaned, and analyzed marketing data using Microsoft Excel and Python to support campaign decisions.",
            "Built Tableau dashboards to visualize performance, surface trends, and track KPIs for stakeholders.",
            "Identified optimization opportunities that helped reduce marketing spend by 15% while maintaining performance."
          ]}
          skills={[
            "microsoft excel",
            "python",
            "tableau",
            "data cleaning",
            "data analysis",
            "data visualization"
          ]}
        />

        <ExperienceCardMobile
          year="Oct '22 — Aug '23"
          title="Web Designer Executive"
          org="UW Data Science Club"
          desc={[
            "Partnered with event organizers to gather requirements and translate them into clear, on-brand designs.",
            "Designed promotional creatives for Instagram, LinkedIn, Facebook, and 𝕏 using Canva.",
            "Contributed to early website design work in Figma, focusing on layout and visual consistency."
          ]}
          skills={[
            "canva",
            "figma",
            "visual design",
            "social media design",
            "communication",
            "collaboration"
          ]}
        />

      </div>
      <div className="transition duration-200 ease-in-out text-text-1 mt-4 block lg:hidden">
        <a href="https://drive.google.com/file/d/1oO_z0Pz-CMLYhW1WbsqDduptITErZg_D/view?usp=sharing" className="bg-background-3 text-text-1 px-4 py-2 rounded-md hover:text-accent-soft text-sm">
          View Resume
        </a>
      </div>
    </div>
  );
}
