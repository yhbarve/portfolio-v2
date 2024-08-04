import ProjectCard from "../ProjectCard";

export default function Projects(){
    return(
        <div>
            <div className="text-sm font-bold pb-2 pl-2">PROJECTS</div>
            <div className="flex flex-col gap-4 dark:hover:text-zinc-400 hover:text-zinc-500">
                <ProjectCard year="2024" link="/" name="ChatYHB - An AI powered chat bot" desc="ChatYHB utilizes Google's AI SDK. Users can send text-based prompts to ChatYHB, which uses Google Gemini 1.5 in the backend to provide a response. The response is well-formated, enhancing user experience. Users can see their previous prompts and responses. Additionally, users can delete all previous prompts and responses, if needed." skills={["react.js", "javascript", "tailwindcss", "node.js", "express", "mongodb", "google ai sdk", "npm"]} image="/chatyhb-demo.png" />

                <ProjectCard year="2024" link="/" name="Scriptsync - Add transcriptions to your videos" desc="ScriptSync is an innovative application designed to streamline the process of adding captions to videos. Users can upload their videos, and ScriptSync automatically generates transcriptions, which can then be edited for accuracy and timing. With customizable options including font size, text color, and outline color, users can tailor the appearance of their captions to suit their preferences. Once edited, these transcriptions seamlessly integrate into the video, enhancing accessibility and engagement. Additionally, users have the option to download the finalized video for sharing across various platforms." skills={["next.js", "typescript", "tailwindcss", "aws s3", "aws transcribe", "web assembly", "ffmpeg"]} image="/scriptsync-demo.png" />

                <ProjectCard year="2023" link="/" name="Medium.com clone" desc="This project is inspired by the famous blogging platform, Medium.com, offering users a similar experience with key features tailored to their needs. Users can seamlessly add, update, and delete their blogs, empowering them with full control over their content. The authentication system enables secure login, logout, and updating of user information, ensuring a personalized experience for each user." skills={["react.js", "typescript", "tailwindcss", "hono", "cloudflare workers", "postgre sql", "prisma", "npm"]} image="/medium-demo-2.png" />

                <ProjectCard year="2023" link="/" name="Evrab News - Top 10 latest headlines" desc="This app uses TheNewsAPI and provides the top 9 news headlines in various categories. It features a sleek interface with easy navigation. The app also supports dark mode. Due to restrictions on the free tier of API used, only 9 headlines can be fetched at a time." skills={["html", "css", "javascript", "api"]} image="/evrab-news-demo.png" />

                <ProjectCard year="2022" link="/" name="MNIST Digit Recognizer" desc="This Google Colab notebook accepts an image of a handwritten digit (0-9) and recogizes it with 95% accuracy. This project has several applications in the real-world. For example, it can be used in banks and post offices to recognize numbers on forms. With more training data and better parameter tuning, the accuracy can be increased to around 99%. I am currently working on building a UI and publishing it as a web app." skills={["convulated neural networks", "pandas", "numpy", "keras", "cv2", "tensorflow", "google colab"]} image="/mnist-demo.png" />

                <ProjectCard year="2022" link="/" name="Movie Recommender" desc="Can't decide which movie to watch? This interesting project solves the problem. All you have to do is enter the name of your favourite movie. The machine learning algorithm creates a feature vector for the film and compares it with all the movies in the database. After a few seconds, it shows you the 10 closest matches. The data is fetched from TMDb API. I am currently working on building a UI and publishing it as a web app." skills={["vectorization", "cosine similarity", "tmdb api", "pandas", "numpy", "difflib", "sklearn", "google colab"]} image="/movie-rec-demo.png" />
            </div>
            <div className="mt-4 transition ease-in-out text-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-50 hover:text-black hover:translate-x-1"><a href="/" className="">View All Projects →</a></div>
        </div>
    )
}