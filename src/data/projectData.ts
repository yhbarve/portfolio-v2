export interface ProjectItem {
    year: string;
    title: string;
    subtitle: string;
    skills: string[];
    coverImage: string;
    desc: string[];
    links: {key: string, value: string}[];
};

export const PROJECT_ITEMS: ProjectItem[] = [
    {
        year: "2026",
        title: "WatDFS",
        subtitle: "Distributed File System",
        skills: [
            "c++",
            "distributed systems",
            "fuse",
            "rpc",
            "linux",
            "concurrency",
            "sockets",
            "file systems",
            "cache consistency",
            "make/cmake",
        ],
        desc: [
            "Built a distributed file system using C++ and FUSE.",
            "Implements network transparency, allowing remote files to be accessed and modified via standard Linux system calls.",
            "Implements network transparency, allowing remote files to be accessed and modified via standard Linux system calls.",
            "Engineered a custom RPC (Remote Procedure Call) layer to handle low-latency file transfers and metadata operations.",
            "Designed for fault tolerance, ensuring data integrity during network timeouts and server-side concurrency challenges.",
        ],
        coverImage: "/projects/watdfs.png",
        links: [{key: "Documentation", value: "https://drive.google.com/file/d/1Z14nWh6FLG-L847TwjiappyPKTWj7A97/view"}],
    },
    {
        year: "2025",
        title: "Fit4Me",
        subtitle: "Personalized Fitness Tracking App",
        skills: [
            "android",
            "jetpack compose",
            "kotlin",
            "node.js",
            "express.js",
            "typescript",
            "postgresql",
            "prisma",
            "rest apis",
            "socket.io",
            "jwt",
            "websockets"
        ],
        desc: [
            "Full-stack Android fitness app (team project) built with Kotlin, Jetpack Compose and a Node.js/Express backend with PostgreSQL.",
            "Delivers personalized workout planning and session tracking with a focus on a smooth, user-centric experience.",
            "Includes real-time chat using Socket.IO alongside REST APIs for core app functionality.",
            "Implements intelligent matchmaking based on user goals, availability, and experience level.",
            "In active development with an emphasis on frontend polish and backend performance."
        ],
        coverImage: "/projects/fit4me.png",
        links: [
            {key: "YouTube", value: "https://www.youtube.com/watch?v=_2dJb6zYpTw"},
            {key: "GitHub", value: "https://github.com/grace-ful/cs446-team-project"}
        ],
    },
    // {
    //     year: "2025",
    //     name: "Chattr - Minimal real-time group chat",
    //     skills: [
    //         "react.js",
    //         "typescript",
    //         "tailwindcss",
    //         "socket.io",
    //         "node.js",
    //         "express.js",
    //         "rest apis",
    //         "websockets"
    //     ],
    //     desc: [
    //         "Minimalist real-time group chat app built with React, TypeScript, Express, and Socket.IO.",
    //         "Supports creating and joining public rooms via unique room codes and instant message delivery.",
    //         "Includes system notifications and live presence updates for a responsive chat experience.",
    //         "Designed as a lightweight, deployable MVP with clean UI and responsive interactions.",
    //         "Built to extend into features like private rooms, message history, and moderation."
    //     ],
    //     coverImage: "/projects/chattr-demo.png",
    //     links: [
    //         {key: "Live", value: "https://rtc-chat-tau.vercel.app/"},
    //         {key: "GitHub", value: "https://github.com/yhbarve/rtc-chat"}
    //     ],
    // },
    {
        year: "2025",
        title: "Portolio",
        subtitle: "Your Online Photos Portfolio",
        skills: [
            "react.js",
            "javascript",
            "tailwindcss",
            "node.js",
            "express.js",
            "mongodb",
            "imagekit",
            "jwt"
        ],
        desc: [
            "Modern MERN-stack photo gallery app for uploading and showcasing images.",
            "Implements direct client-to-ImageKit uploads for fast, scalable media handling.",
            "Uses JWT-based authentication for secure access and user sessions.",
            "Built a responsive gallery layout with uniform image sizing for a clean UI."
        ],
        coverImage: "/projects/portolio.png",
        links: [
            {key: "GitHub", value: "https://github.com/yhbarve/portolio-imagekit"}
        ],
    },
    {
        year: "2025",
        title: "Deep Features for Interactive Segmentation",
        subtitle: "Image Segmentation Tool",
        skills: [
            "python",
            "pytorch",
            "resnet-50",
            "computer vision",
            "graph cuts",
            "max-flow min-cut",
            "numpy",
            "matplotlib",
            "scikit-image",
            "python gui"
        ],
        desc: [
            "Interactive image segmentation tool built as a university capstone project using PyTorch and a pre-trained ResNet-50.",
            "Extracts deep convolutional features to segment objects in complex images beyond traditional RGB-based approaches.",
            "Provides a Python GUI for user-guided foreground/background selection to steer segmentation.",
            "Implements max-flow/min-cut graph cut algorithms for robust, near real-time object segmentation.",
            "Performs well in challenging scenarios with color ambiguity and noisy backgrounds.",
            "This project was built for the CS484 course at the University of Waterloo."
        ],
        coverImage: "/projects/uw-math-logo.png",
        links: [
            {key: "GitHub", value: "https://github.com/yhbarve/deep-image-segmentation"}
        ],
    },
    {
        year: "2025",
        title: "Crop Yield Prediction & Risk Mitigation",
        subtitle: "RNN-based ML Pipeline",
        skills: [
            "python",
            "pandas",
            "scikit-learn",
            "random forest",
            "lasso regression",
            "feature engineering",
            "tensorflow",
            "lstm",
            "rnn",
            "data visualization"
        ],
        desc: [
            "Built a machine learning framework to predict crop yields and assess agricultural risk using real-world climate and farming inputs (rainfall, temperature, pesticide use, crop type).",
            "Trained interpretable yield models using Random Forest and Lasso Regression for feature selection and prediction.",
            "Engineered temporal features and implemented an LSTM model for sequential yield analysis.",
            "Designed a dynamic risk scoring system to support resource allocation and deliver actionable insights for farmers.",
            "Collaborated as part of a group project focused on sustainable, data-driven decision-making.",
            "This project was built for the BU425 course at the Wilfrid Laurier University."
        ],
        coverImage: "/projects/laz.png",
        links: [
            {key: "GitHub", value: "https://github.com/yhbarve/deep-image-segmentation"}
        ],
    },
    {
        year: "2024",
        title: "Scriptsync",
        subtitle: "Captioning Tool for Videos",
        skills: [
            "next.js",
            "typescript",
            "tailwindcss",
            "aws s3",
            "aws transcribe",
            "webassembly",
            "ffmpeg",
            "ffmpeg.wasm"
        ],
        desc: [
            "Built an end-to-end captioning tool that generates subtitles from uploaded videos and lets users edit text, timing, and accuracy.",
            "Provides caption styling controls (font size, text color, outline) to customize the final look.",
            "Burns captions into the video using ffmpeg (via WebAssembly) for a fully client-side editing experience.",
            "Supports exporting/downloading the finalized captioned video for sharing across platforms.",
            "Uses AWS S3 for storage and AWS Transcribe for automatic speech-to-text."
        ],
        coverImage: "/projects/script-sync.png",
        links: [
            {key: "YouTube", value: "https://www.youtube.com/watch?v=FPEUKRfoRFQ"}
        ],
    }
]