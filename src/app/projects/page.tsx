import ProjectListItem from "@/components/ProjectListItem";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function Home() {
    return (
        <div className="scroll-smooth bg-gradient-to-tr from-background-1 via-background-2 to-background-3 transition-colors duration-200 ease-in-out">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="pt-24">
                    <div className="hover:translate-x-1 transition-all ease-in-out"><a href="/" className="text-3xl font-medium text-page-nameForeground">← Yash Barve</a></div>
                    <h1 className="text-5xl font-semibold text-page-titleForeground inline-block pb-3 mt-2">Projects Collection</h1>
                </div>
                <div className="grid grid-cols-12 border-b-[0.5px] p-2 pb-4 pt-9 border-page-headerBorder text-page-headerForeground font-semibold">
                        <div className="col-span-2 lg:col-span-1">Year</div>
                        <div className="col-span-4">Project</div>
                        <div className="col-span-5">Built with</div>
                        <div className="col-span-1 lg:col-span-2 mx-auto">Link</div>
                    </div>
                <div className="flex flex-col text-page-itemForeground hover:text-page-itemOtherHoverForeground pb-24">
                    <ProjectListItem year="2025" name="Chattr - Minimal real-time group chat" skills={["react.js", "typescript", "tailwindcss", "socket.io", "node.js", "express.js"]} url="https://rtc-chat-tau.vercel.app/" />
                    <ProjectListItem year="2025" name="Portolio - Your Online Photos Portfolio" skills={["react.js", "javascript", "tailwindcss", "node.js", "express", "mongodb", "imagekit", "npm"]} url="https://github.com/yhbarve/portolio-imagekit" />
                    <ProjectListItem year="2024" name="ChatYHB - An AI powered chat bot" skills={["react.js", "javascript", "tailwindcss", "node.js", "express", "mongodb", "google ai sdk", "npm"]} url="https://chatyhb.vercel.app/" />
                    <ProjectListItem year="2024" name="Scriptsync - Add transcriptions to your videos" skills={["next.js", "typescript", "tailwindcss", "aws s3", "aws transcribe", "web assembly", "ffmpeg"]} url="https://www.youtube.com/watch?v=FPEUKRfoRFQ" />
                    <ProjectListItem year="2023" name="Portfolio  Website - v1" skills={["next.js", "typescript", "tailwindcss"]} url="https://v0yashbarve.vercel.app" />
                    <ProjectListItem year="2023" name="Medium.com clone" skills={["react.js", "typescript", "tailwindcss", "hono", "cloudflare workers", "postgre sql", "prisma", "npm"]} url="https://medium-yb.vercel.app/" />
                    <ProjectListItem year="2023" name="BFL Player Picker" skills={["react.js", "javascript", "node.js", "express", "mongodb", "tailwindcss"]} url="https://bfl-2-fe.vercel.app/" />
                    <ProjectListItem year="2023" name="Meme Generator Application" skills={["react", "javascript", "css", "api"]} url="https://64bccbc9846f6e6ff53955ce--waibee-meme-generator.netlify.app/" />
                    <ProjectListItem year="2023" name="Evrab News - Top 10 latest headlines" skills={["html", "css", "javascript", "api"]} url="https://main--evrab-news.netlify.app/" />
                    <ProjectListItem year="2022" name="MNIST Digit Recognizer" skills={["cnn", "pandas", "numpy", "keras", "cv2", "tensorflow", "google colab"]} url="https://colab.research.google.com/drive/19SYI5mLiLKLGBfqJYJlG05HTFvRYO2QQ?usp=sharing" />
                    <ProjectListItem year="2022" name="CineMatch - Movie Recommender" skills={["vectorization", "cosine similarity", "tmdb api", "pandas", "numpy", "difflib", "sklearn", "google colab"]} url="https://colab.research.google.com/drive/1M2HrE7dRnJhrQRM7Qn8uJ-1gzREvxCPg" />
                    <ProjectListItem year="2022" name="Evrab Weather - Weather Forecast Application" skills={["html", "css", "javascript", "api"]} url="https://yashbarve.vercel.app/weather" />
                    <ProjectListItem year="2022" name="CSS Clone of Amazon.com Homepage" skills={["html", "css", "flexbox", "grid"]} url="https://main--yash-amazon.netlify.app/" />
                </div>
            </div>
        </div>
    );
  }