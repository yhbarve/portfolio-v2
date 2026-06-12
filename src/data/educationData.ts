export interface EducationItem {
    year: string;
    name: string;
    program: string;
    courses?: string[];
    coverImage: string;
    desc?: string[];
    links?: {key: string, value: string}[];
}

export const EDUCATION_ITEMS: EducationItem[] = [
    {
        year: "2021 - 2026",
        name: "University of Waterloo",
        program: "Bachelor of Computer Science",
        courses: [
            "Algebra",
            "Calculus",
            "Linear Algebra",
            "Optimization",
            "Combinatorics",
            "Probability",
            "Statistics",
            "Functional Programming",
            "Algorithm Design and Data Abstraction",
            "Object Oriented Programming",
            "Data Structures",
            "Algorithms",
            "Logic and Computation",
            "Computer Organization and Design",
            "Sequential Programming",
            "Introduction to Machine Learning",
            "Operating Systems",
            "User-Interfaces",
            "Computational Vision",
            "Information Systems Management",
            "Software Design and Architectures",
            "Distributed Systems",
            "Computer Networks",
            "The Social Implications of Computing",
        ],
        coverImage: "/education/uw-math-logo.png"
    },
    {
        year: "2021 - 2026",
        name: "Wilfrid Laurier University",
        program: "Bachelor of Business Administration (Finance Concentration)",
        courses: [
            "Functional Areas of an Organization",
            "Business Environment",
            "Introductory Microeconomics",
            "Introductory Macroeconomics",
            "Financial Accounting",
            "Business Law",
            "Managerial Accounting",
            "Organizational Behaviour",
            "Human Resources Management",
            "Marketing Management",
            "Business Operations",
            "Data Analytics",
            "Strategic Management",
            "Financial Management",
            "Risk Management & Insurance",
            "Options, Futures and Swaps",
            "Personal Finance Management",
        ],
        coverImage: "/education/laz.png"
    },
    {
        year: "2023 — 2024",
        name: "100xDevs",
        program: "Full Stack Web Development Cohort",
        coverImage: "/education/100xdevs.png",
        desc: [
            "This 8-month cohort transformed me from a 1x engineer to a 100x engineer.",
            "Learnt about MERN stack, Next.js, PostgreSQL, DevOps, WebRTC, and advanced web development.",
            "Built several open-source projects to apply my knowledge."
        ],
        links: [
            {key: "Certificate", value: "https://drive.google.com/file/d/1jZlAZPMfhcVqfnnf89OMrTWNbfenRogY/view?usp=sharing"}
        ]
    },
    {
        year: "2022",
        name: "Deeplearning.ai",
        program: "Machine Learning Specialization",
        coverImage: "/education/deeplearning-ai.png",
        desc: [
            "This 3-course specialization introduced me to a broad introduction to modern machine learning.",
            "Learnt about supervised learning, unsupervised learning, and some of the best practices used in Silicon Valley for artificial intelligence and machine learning innovation."
        ],
        links: [
            {key: "Certificate", value: "https://drive.google.com/file/d/1QyI4EBNsjNHMpEljzeGNvg_45wHO0VRV/view?usp=sharing"}
        ]
    },
    {
        year: "2022",
        name: "Deeplearning.ai",
        program: "Deep Learning Specialization",
        coverImage: "/education/deeplearning-ai.png",
        desc: [
            "This 5-course specialization introduced me to the capabilities, challenges, and consequences of deep learning.",
            "Built and trained neural network architectures such as Convolutional Neural Networks, Recurrent Neural Networks, LSTMs, Transformers.",
            "Learnt how to make them better with strategies such as Dropout, BatchNorm, Xavier/He initialization, etc.",
            "Tackled real-world cases such as speech recognition, music synthesis, chatbots, machine translation, natural language processing, etc."
        ],
        links: [
            {key: "Certificate", value: "https://drive.google.com/file/d/1FS1YUC_vyUDcKZ8YV71L6K4n3BZGgYzN/view?usp=sharing"},
        ]
    }
];