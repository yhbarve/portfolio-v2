import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <div id="projects" className="lg:pt-24 pt-12">
      <div className="text-sm font-bold pb-2 pl-2 cursor-default text-section-header">
        PROJECTS
      </div>
      <div className="flex flex-col gap-4 text-card-foreground hover:text-card-otherHoverForeground">
        <ProjectCard
          year="2025"
          link="https://www.youtube.com/watch?v=_2dJb6zYpTw" // Replace with your actual project/demo link when ready
          name="Fit4Me – Personalized Fitness Tracking App (In Development)"
          desc="Fit4Me is a full-stack Android fitness application currently in development as part of a team project. Designed using Jetpack Compose, Kotlin, Node.js, Express, and PostgreSQL, it offers personalized workout planning, real-time chat, session tracking, and intelligent matchmaking based on user fitness goals, availability, and experience level. The app integrates REST APIs and WebSocket communication for a smooth and interactive user experience. Still in progress, Fit4Me aims to deliver a robust, user-centric fitness platform with both frontend polish and backend performance."
          skills={[
            "android",
            "jetpack compose",
            "kotlin",
            "node.js",
            "express.js",
            "typescript",
            "postgresql",
            "prisma",
            "socket.io",
            "jwt auth",
          ]}
          image="/fit4me-demo.png" // Replace with your actual demo image path
        />

        <ProjectCard
          year="2025"
          link="https://rtc-chat-tau.vercel.app/"
          name="Chattr - Minimal real-time group chat"
          desc="Chattr is a minimalist, real-time group chat application built with React, TypeScript, Express, and Socket.IO. It allows users to create and join public rooms using unique room codes and exchange messages instantly. Designed with clean UI and responsive interactions, Chattr focuses on delivering core functionality—message delivery, system notifications, and live presence updates—in a lightweight, deployable MVP. It lays the foundation for future enhancements like private rooms, message history, and advanced moderation."
          skills={[
            "react.js",
            "typescript",
            "tailwindcss",
            "socket.io",
            "node.js",
            "express.js",
          ]}
          image="/chattr-demo.png"
        />

        <ProjectCard
          year="2025"
          link="https://github.com/yhbarve/portolio-imagekit"
          name="Portolio - Your Online Photos Portfolio"
          desc="A modern MERN‑stack application for users to upload and display photos. It features direct client‑to‑ImageKit uploads, JWT‑based authentication, and a responsive gallery with uniform image sizing."
          skills={[
            "react.js",
            "javascript",
            "tailwindcss",
            "imagekit",
            "node.js",
            "express",
            "mongodb",
            "npm",
          ]}
          image="/portolio-demo.png"
        />

        <ProjectCard
          year="2025"
          link="https://github.com/yhbarve/deep-image-segmentation" // Replace with your actual project/demo link if needed
          name="Deep Features for Interactive Segmentation"
          desc="An interactive image segmentation tool developed as a university capstone project. Built with PyTorch and a pre-trained ResNet-50, the app extracts deep convolutional features to segment objects in complex images beyond traditional RGB-based methods. Includes an intuitive Python GUI for user-guided foreground/background selection and implements max-flow/min-cut graph algorithms for real-time, robust object segmentation. Demonstrates strong results in challenging scenarios with color ambiguity or noisy backgrounds."
          skills={[
            "python",
            "pytorch",
            "resnet-50",
            "graph cuts",
            "numpy",
            "matplotlib",
            "scikit-image",
            "gui",
            "computer vision",
          ]}
          image="/uw-math-logo.png" // Replace with your actual demo image path
        />

        <ProjectCard
          year="2025"
          link="https://github.com/yhbarve/crop-yield-and-risk-mitigation" // Replace with your actual project/demo link if needed
          name="Crop Yield Prediction & Risk Mitigation (BU425 Final Project)"
          desc="Developed a machine learning framework to predict crop yields and assess agricultural risk using real-world data on rainfall, temperature, pesticide use, and crop type. Utilized Random Forest and Lasso Regression for feature selection and interpretable yield prediction, then engineered temporal features and implemented an LSTM model for sequential analysis. Built a dynamic risk scoring system to help optimize resource allocation and provide actionable insights for farmers. This group project demonstrated the value of predictive analytics for sustainable, data-driven decision-making in agriculture."
          skills={[
            "python",
            "pandas",
            "scikit-learn",
            "random forest",
            "lasso regression",
            "recurrent neural networks",
            "lstm",
            "tensorflow",
            "data visualization",
            "feature engineering",
          ]}
          image="/laz-logo.png" // Replace with your actual demo image path
        />

        <ProjectCard
          year="2024"
          link="https://chatyhb.vercel.app/"
          name="ChatYHB - An AI powered chat bot"
          desc="ChatYHB utilizes Google's AI SDK. Users can send text-based prompts to ChatYHB, which uses Google Gemini 1.5 in the backend to provide a response. The response is well-formated, enhancing user experience. Users can see their previous prompts and responses. Additionally, users can delete all previous prompts and responses, if needed."
          skills={[
            "react.js",
            "javascript",
            "tailwindcss",
            "node.js",
            "express",
            "mongodb",
            "google ai sdk",
            "npm",
          ]}
          image="/chatyhb-demo.png"
        />

        <ProjectCard
          year="2024"
          link="https://www.youtube.com/watch?v=FPEUKRfoRFQ"
          name="Scriptsync - Add transcriptions to your videos"
          desc="ScriptSync is an innovative application designed to streamline the process of adding captions to videos. Users can upload their videos, and ScriptSync automatically generates transcriptions, which can then be edited for accuracy and timing. With customizable options including font size, text color, and outline color, users can tailor the appearance of their captions to suit their preferences. Once edited, these transcriptions seamlessly integrate into the video, enhancing accessibility and engagement. Additionally, users have the option to download the finalized video for sharing across various platforms."
          skills={[
            "next.js",
            "typescript",
            "tailwindcss",
            "aws s3",
            "aws transcribe",
            "web assembly",
            "ffmpeg",
          ]}
          image="/scriptsync-demo.png"
        />

        <ProjectCard
          year="2023"
          link="https://medium-yb.vercel.app/"
          name="Medium.com clone"
          desc="This project is inspired by the famous blogging platform, Medium.com, offering users a similar experience with key features tailored to their needs. Users can seamlessly add, update, and delete their blogs, empowering them with full control over their content. The authentication system enables secure login, logout, and updating of user information, ensuring a personalized experience for each user."
          skills={[
            "react.js",
            "typescript",
            "tailwindcss",
            "hono",
            "cloudflare workers",
            "postgre sql",
            "prisma",
            "npm",
          ]}
          image="/medium-demo-2.png"
        />

        <ProjectCard
          year="2022"
          link="https://colab.research.google.com/drive/19SYI5mLiLKLGBfqJYJlG05HTFvRYO2QQ?usp=sharing"
          name="MNIST Digit Recognizer"
          desc="This Google Colab notebook accepts an image of a handwritten digit (0-9) and recogizes it with 95% accuracy. This project has several applications in the real-world. For example, it can be used in banks and post offices to recognize numbers on forms. With more training data and better parameter tuning, the accuracy can be increased to around 99%. I am currently working on building a UI and publishing it as a web app."
          skills={[
            "convulated neural nets",
            "pandas",
            "numpy",
            "keras",
            "cv2",
            "tensorflow",
            "google colab",
          ]}
          image="/mnist-demo.png"
        />

        <ProjectCard
          year="2022"
          link="https://colab.research.google.com/drive/1M2HrE7dRnJhrQRM7Qn8uJ-1gzREvxCPg"
          name="CineMatch - Movie Recommender"
          desc="Can't decide which movie to watch? This interesting project solves the problem. All you have to do is enter the name of your favourite movie. The machine learning algorithm creates a feature vector for the film and compares it with all the movies in the database. After a few seconds, it shows you the 10 closest matches. The data is fetched from TMDb API. I am currently working on building a UI and publishing it as a web app."
          skills={[
            "vectorization",
            "cosine similarity",
            "tmdb api",
            "pandas",
            "numpy",
            "difflib",
            "sklearn",
            "google colab",
          ]}
          image="/movie-rec-demo.png"
        />
      </div>
      <div className="mt-4 transition duration-200 ease-in-out text-linkToPage-foreground hover:translate-x-1">
        <a href="/projects" className="">
          View All Projects →
        </a>
      </div>
    </div>
  );
}
