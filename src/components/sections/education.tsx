import CourseCard from "../CourseCard";
import EducationCard from "../EducationCard";

export default function Education(){
    return (
        <div id="education" className="pt-24">
            <div className="text-sm font-bold pb-2 pl-2 cursor-default">EDUCATION</div>
            <div className="flex flex-col gap-4 dark:hover:text-zinc-400 hover:text-zinc-500">
                <EducationCard program="Bachelor of Computer Science with Specialization in AI" uni="University of Waterloo" year="2021 — 2026" courses="Algebra, Calculus, Linear Algebra, Optimization, Combinatorics, Probability, Statistics, Functional Programs, Algorithm Design and Data Abstraction, Object Oriented Programming, Data Structures, Algorithms, Logic and Computation, Computer Organization and Design, Sequential Programming" />

                <EducationCard program="Bachelor of Business Administration with Finance concentration" uni="Wilfrid Laurier University" year="2021 — 2026" courses="Functional Areas of an Organization, Business Environment, Introductory Microeconomics, Introductory Macroeconomics, Financial Accounting, Business Law, Managerial Accounting, Organizational Behaviour, Human Resources Management, Financial Management, Marketing Management, Business Operations" />

                <CourseCard program="Full Stack Web Development Cohort" uni="100xDevs by Harkirat Singh" year="2023 — 2024" desc="This 8-month cohort transforms you from a 1x engineer to a 100x engineer. Some of the important concepts taught are MERN stack, Next.js, PostgreSQL, DevOps, WebRTC, and advanced web development. Additionally, there are several open-source projects to apply your knowledge." link="https://drive.google.com/file/d/1jZlAZPMfhcVqfnnf89OMrTWNbfenRogY/view?usp=sharing" />

                <CourseCard program="Machine Learning Specialization" uni="Deeplearning.ai by Andrew Ng" year="2022" desc="This 3-course specialization provides a broad introduction to modern machine learning, including supervised learning (multiple linear regression, logistic regression, neural networks, and decision trees), unsupervised learning (clustering, dimensionality reduction, recommender systems), and some of the best practices used in Silicon Valley for artificial intelligence and machine learning innovation (evaluating and tuning models, taking a data-centric approach to improving performance, and more.)" link="https://drive.google.com/file/d/1QyI4EBNsjNHMpEljzeGNvg_45wHO0VRV/view?usp=sharing" />

                <CourseCard program="Deep Learning Specialization" uni="Deeplearning.ai by Andrew Ng" year="2022" desc="This 3-course specialization provides a broad introduction to modern machine learning, including supervised learning (multiple linear regression, logistic regression, neural networks, and decision trees), unsupervised learning (clustering, dimensionality reduction, recommender systems), and some of the best practices used in Silicon Valley for artificial intelligence and machine learning innovation (evaluating and tuning models, taking a data-centric approach to improving performance, and more.)" link="https://drive.google.com/file/d/1FS1YUC_vyUDcKZ8YV71L6K4n3BZGgYzN/view?usp=sharing" />
            </div>
        </div>
    )
}