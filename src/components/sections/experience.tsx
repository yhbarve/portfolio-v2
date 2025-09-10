import React from "react";
import ExperienceCard from "../ExperienceCard";

export default function Experience() {
  return (
    <div id="experiences" className="pt-12">
      <div className="flex items-center pl-2 pb-2 justify-between">
        <div className="text-sm font-bold cursor-default text-section-header">
          EXPERIENCE
        </div>
        <div className="transition duration-200 ease-in-out text-linkToPage-foreground hover:translate-x-1 hidden lg:block">
          <a href="https://drive.google.com/file/d/1rivXqVArOc4VacaS4uHX6PS2C4SpNc0Y/view?usp=sharing" className="">
            View Resume →
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-card-foreground hover:text-card-otherHoverForeground">
        <ExperienceCard
          year="SEP — DEC '25"
          title="Incoming Software Engineering Intern"
          org="Nokia"
          desc="To be updated."
          skills={[]}
        />
        <ExperienceCard
          year="SEP — DEC '24"
          title="Software Engineering Intern - Performance Optimization"
          org="AutoTrader.ca"
          desc="Optimized website performance metrics, including Core Web Vitals, to enhance user experience and search engine rankings. Utilized Screaming Frog SEO Spider to collect and analyze data, identifying actionable insights and trends to inform optimization strategies. Conducted in-depth research on various social media platforms, contributing to the development and refinement of the organization's social media marketing strategy. Acquired and applied advanced SEO concepts, ensuring alignment with industry best practices and keeping pace with the latest updates in browser technologies and SEO methodologies."
          skills={[
            "javascript",
            "angular.js",
            "rest apis",
            "python",
            "screaming frog seo",
            "pagespeed insights",
            "google lighthouse",
          ]}
        />

        <ExperienceCard
          year="JAN — APR '24"
          title="Software Development Intern"
          org="Petrovision International LLC"
          desc="Contributed towards the redevelopment of the company's website. Developed frontend components using React and TailwindCSS. Regularly interacted with a team of senior developers. Performed some ad-hoc data analysis tasks. Helped in the development of training modules for the staff."
          skills={[
            "react.js",
            "javascript",
            "rest apis",
            "tailwindcss",
            "figma",
            "git",
            "agile methodology"
          ]}
        />

        <ExperienceCard
          year="MAR — MAY '23"
          title="Data Insights Specialist Intern"
          org="Lazaridis School of Business and Economics"
          desc="Performed data gathering, cleaning and analysis for the marketing team using Microsoft Excel and Python. Used Tableau to create insightful data visualizations. Identified key trends and optimized the marketing strategy to reduce the spending by 15%."
          skills={["microsoft excel", "python", "tableau", "data analysis"]}
        />

        <ExperienceCard
          year="OCT '22 — AUG '23"
          title="Web Designer"
          org="University of Waterloo's Data Science Club"
          desc="Interacted with event organizers to understand the requirements of the design. Used Canva to create posts for Instagram, LinkedIn, Facebook, and 𝕏. Briefly contributed to the club website design using Figma."
          skills={[
            "canva",
            "figma",
            "graphic design",
            "teamwork",
            "leadership",
          ]}
        />
      </div>
      <div className="transition duration-200 ease-in-out text-linkToPage-foreground mt-4 block lg:hidden">
        <a href="https://drive.google.com/file/d/1rivXqVArOc4VacaS4uHX6PS2C4SpNc0Y/view?usp=sharing" className="bg-linkToPage-buttonBackground text-linkToPage-buttonForeground px-4 py-2 rounded-md hover:opacity-80 text-sm">
          View Resume
        </a>
      </div>
    </div>
  );
}
