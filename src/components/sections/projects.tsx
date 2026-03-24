import ProjectCard from "../ProjectCard";
import ProjectCardMobile from "../ProjectCardMobile";

export default function Projects() {
  return (
    <div id="projects" className="">
      <div className="flex items-center pb-2 justify-between">
        <div className="text-accent-foreground lg:text-accent font-black lg:font-bold cursor-default bg-accent lg:bg-transparent p-1 lg:p-0 rounded-lg lg:rounded-none w-full lg:w-auto text-center lg:text-left">
          PROJECTS
        </div>
        <div className="transition duration-200 ease-in-out text-accent hover:translate-x-1 hidden lg:block">
          <a href="/projects" className="">
            View All Projects →
          </a>
        </div>
      </div>
      {/* PROJECT CARDS FOR LARGER DISPLAYS */}
      <div className="hidden lg:flex flex-col gap-4 text-text-1 hover:text-text-1">
        <ProjectCard
          year="2025"
          youtube="https://www.youtube.com/watch?v=_2dJb6zYpTw"
          github="https://github.com/grace-ful/cs446-team-project"
          name="Fit4Me – Personalized Fitness Tracking Android App"
          desc={[
            "Full-stack Android fitness app (team project) built with Kotlin + Jetpack Compose and a Node.js/Express backend with PostgreSQL.",
            "Delivers personalized workout planning and session tracking with a focus on a smooth, user-centric experience.",
            "Includes real-time chat using Socket.IO alongside REST APIs for core app functionality.",
            "Implements intelligent matchmaking based on user goals, availability, and experience level.",
          ]}
          skills={[
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
          ]}

          image="/fit4me-demo.png" // Replace with your actual demo image path
        />

<ProjectCard
          year="2026"
          url="https://drive.google.com/file/d/1Z14nWh6FLG-L847TwjiappyPKTWj7A97/view?usp=sharing"
          name="WatDFS - Distributed File System"
          desc={[
            "Distributed file system (client-server) built using C++ and the FUSE framework.",
            "Implements network transparency, allowing remote files to be accessed and modified via standard Linux system calls.",
            "Features a robust cache coherence protocol (Open-to-Close consistency) to synchronize file states between clients and server.",
            "Engineered a custom RPC (Remote Procedure Call) layer to handle low-latency file transfers and metadata operations.",
            "Designed for fault tolerance, ensuring data integrity during network timeouts and server-side concurrency challenges."
          ]}
          skills={[
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
            "multithreading"
          ]}

          image="/projects/watdfs.png" // Replace with your actual demo image path
        />

        <ProjectCard
          year="2025"
          github="https://github.com/yhbarve/portolio-imagekit"
          name="Portolio - Your Online Photos Portfolio"
          desc={[
            "Modern MERN-stack photo gallery app for uploading and showcasing images.",
            "Implements direct client-to-ImageKit uploads for fast, scalable media handling.",
            "Uses JWT-based authentication for secure access and user sessions.",
            "Built a responsive gallery layout with uniform image sizing for a clean UI."
          ]}
          skills={[
            "react.js",
            "javascript",
            "tailwindcss",
            "node.js",
            "express.js",
            "mongodb",
            "imagekit",
            "jwt"
          ]}
          image="/portolio-demo.png"
        />

        <ProjectCard
          year="2025"
          github="https://github.com/yhbarve/deep-image-segmentation" // Replace with your actual project/demo link if needed
          name="Deep Features for Interactive Segmentation"
          desc={[
            "Interactive image segmentation tool built as a university capstone project using PyTorch and a pre-trained ResNet-50.",
            "Extracts deep convolutional features to segment objects in complex images beyond traditional RGB-based approaches.",
            "Provides a Python GUI for user-guided foreground/background selection to steer segmentation.",
            "Implements max-flow/min-cut graph cut algorithms for robust, near real-time object segmentation.",
            "Performs well in challenging scenarios with color ambiguity and noisy backgrounds."
          ]}
          skills={[
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
          ]}
          image="/uw-math-logo.png" // Replace with your actual demo image path
        />

        <ProjectCard
          year="2025"
          github="https://github.com/yhbarve/crop-yield-and-risk-mitigation"
          name="Crop Yield Prediction & Risk Mitigation (BU425 Final Project)"
          desc={[
            "Built a machine learning framework to predict crop yields and assess agricultural risk using real-world climate and farming inputs (rainfall, temperature, pesticide use, crop type).",
            "Trained interpretable yield models using Random Forest and Lasso Regression for feature selection and prediction.",
            "Engineered temporal features and implemented an LSTM model for sequential yield analysis.",
            "Designed a dynamic risk scoring system to support resource allocation and deliver actionable insights for farmers.",
            "Collaborated as part of a group project focused on sustainable, data-driven decision-making."
          ]}
          skills={[
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
          ]}
          image="/laz-logo.png" // Replace with your actual demo image path
        />

        <ProjectCard
          year="2024"
          youtube="https://www.youtube.com/watch?v=FPEUKRfoRFQ"
          name="Scriptsync - Add transcriptions to your videos"
          desc={[
            "Built an end-to-end captioning tool that generates subtitles from uploaded videos and lets users edit text, timing, and accuracy.",
            "Provides caption styling controls (font size, text color, outline) to customize the final look.",
            "Burns captions into the video using ffmpeg (via WebAssembly) for a fully client-side editing experience.",
            "Supports exporting/downloading the finalized captioned video for sharing across platforms.",
            "Uses AWS S3 for storage and AWS Transcribe for automatic speech-to-text."
          ]}
          skills={[
            "next.js",
            "typescript",
            "tailwindcss",
            "aws s3",
            "aws transcribe",
            "webassembly",
            "ffmpeg",
            "ffmpeg.wasm"
          ]}
          image="/scriptsync-demo.png"
        />
      </div>
      
      {/* PROJECT CARDS FOR SMALLER DISPLAYS */}
      <div className="lg:hidden flex flex-col gap-4 text-text-1 hover:text-text-1">
        <ProjectCardMobile
          year="2025"
          youtube="https://www.youtube.com/watch?v=_2dJb6zYpTw"
          github="https://github.com/grace-ful/cs446-team-project"
          name="Fit4Me – Personalized Fitness Tracking App"
          desc={[
            "Full-stack Android fitness app (team project) built with Kotlin + Jetpack Compose and a Node.js/Express backend with PostgreSQL.",
            "Delivers personalized workout planning and session tracking with a focus on a smooth, user-centric experience.",
            "Includes real-time chat using Socket.IO alongside REST APIs for core app functionality.",
            "Implements intelligent matchmaking based on user goals, availability, and experience level.",
            "In active development with an emphasis on frontend polish and backend performance."
          ]}
          skills={[
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
          ]}

          image="/fit4me-demo.png" // Replace with your actual demo image path
        />

        <ProjectCardMobile
          year="2025"
          link="https://rtc-chat-tau.vercel.app/"
          github="https://github.com/yhbarve/rtc-chat"
          name="Chattr - Minimal real-time group chat"
          desc={[
            "Minimalist real-time group chat app built with React, TypeScript, Express, and Socket.IO.",
            "Supports creating and joining public rooms via unique room codes and instant message delivery.",
            "Includes system notifications and live presence updates for a responsive chat experience.",
            "Designed as a lightweight, deployable MVP with clean UI and responsive interactions.",
            "Built to extend into features like private rooms, message history, and moderation."
          ]}
          skills={[
            "react.js",
            "typescript",
            "tailwindcss",
            "socket.io",
            "node.js",
            "express.js",
            "rest apis",
            "websockets"
          ]}
          image="/chattr-demo.png"
        />

        <ProjectCardMobile
          year="2025"
          github="https://github.com/yhbarve/portolio-imagekit"
          name="Portolio - Your Online Photos Portfolio"
          desc={[
            "Modern MERN-stack photo gallery app for uploading and showcasing images.",
            "Implements direct client-to-ImageKit uploads for fast, scalable media handling.",
            "Uses JWT-based authentication for secure access and user sessions.",
            "Built a responsive gallery layout with uniform image sizing for a clean UI."
          ]}
          skills={[
            "react.js",
            "javascript",
            "tailwindcss",
            "node.js",
            "express.js",
            "mongodb",
            "imagekit",
            "jwt"
          ]}
          image="/portolio-demo.png"
        />

        <ProjectCardMobile
          year="2025"
          github="https://github.com/yhbarve/deep-image-segmentation" // Replace with your actual project/demo link if needed
          name="Deep Features for Interactive Segmentation"
          desc={[
            "Interactive image segmentation tool built as a university capstone project using PyTorch and a pre-trained ResNet-50.",
            "Extracts deep convolutional features to segment objects in complex images beyond traditional RGB-based approaches.",
            "Provides a Python GUI for user-guided foreground/background selection to steer segmentation.",
            "Implements max-flow/min-cut graph cut algorithms for robust, near real-time object segmentation.",
            "Performs well in challenging scenarios with color ambiguity and noisy backgrounds."
          ]}
          skills={[
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
          ]}
          image="/uw-math-logo.png" // Replace with your actual demo image path
        />

        <ProjectCardMobile
          year="2025"
          github="https://github.com/yhbarve/crop-yield-and-risk-mitigation"
          name="Crop Yield Prediction & Risk Mitigation (BU425 Final Project)"
          desc={[
            "Built a machine learning framework to predict crop yields and assess agricultural risk using real-world climate and farming inputs (rainfall, temperature, pesticide use, crop type).",
            "Trained interpretable yield models using Random Forest and Lasso Regression for feature selection and prediction.",
            "Engineered temporal features and implemented an LSTM model for sequential yield analysis.",
            "Designed a dynamic risk scoring system to support resource allocation and deliver actionable insights for farmers.",
            "Collaborated as part of a group project focused on sustainable, data-driven decision-making."
          ]}
          skills={[
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
          ]}
          image="/laz-logo.png" // Replace with your actual demo image path
        />

        <ProjectCardMobile
          year="2024"
          link="https://chatyhb.vercel.app/"
          github="https://github.com/yhbarve/chatyhb"
          name="ChatYHB - An AI powered chat bot"
          desc={[
            "Built a web chat app using Google’s AI SDK with Gemini 1.5 powering backend responses.",
            "Supports text-based prompts with clean, well-formatted outputs for a better reading experience.",
            "Persists conversation history so users can revisit previous prompts and responses.",
            "Includes a one-click option to clear all stored prompts and responses when needed."
          ]}
          skills={[
            "react.js",
            "javascript",
            "tailwindcss",
            "node.js",
            "express.js",
            "mongodb",
            "google ai sdk",
            "gemini 1.5"
          ]}
          image="/chatyhb-demo.png"
        />

        <ProjectCardMobile
          year="2024"
          youtube="https://www.youtube.com/watch?v=FPEUKRfoRFQ"
          name="Scriptsync - Add transcriptions to your videos"
          desc={[
            "Built an end-to-end captioning tool that generates subtitles from uploaded videos and lets users edit text, timing, and accuracy.",
            "Provides caption styling controls (font size, text color, outline) to customize the final look.",
            "Burns captions into the video using ffmpeg (via WebAssembly) for a fully client-side editing experience.",
            "Supports exporting/downloading the finalized captioned video for sharing across platforms.",
            "Uses AWS S3 for storage and AWS Transcribe for automatic speech-to-text."
          ]}
          skills={[
            "next.js",
            "typescript",
            "tailwindcss",
            "aws s3",
            "aws transcribe",
            "webassembly",
            "ffmpeg",
            "ffmpeg.wasm"
          ]}
          image="/scriptsync-demo.png"
        />
      </div>

      <div className="transition duration-200 ease-in-out text-text-1 mt-4 block lg:hidden text-center">
        <a href="/projects" className="text-accent px-4 py-2 rounded-md hover:text-accent-soft text-sm underline-offset-2 underline lg:no-underline">
          View All Projects 
        </a>
      </div>
    </div>
  );
}
