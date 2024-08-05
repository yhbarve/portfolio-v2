"use client"

import { useEffect, useState } from "react";

export default function AboutMe(){
    const valList:Array<string> = ["Software developer", "React.js developer", "Next.js developer", "MERN developer", "Node.js developer", "Backend developer"];

    const [curVal, setCurVal] = useState("Software developer");
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const n: number = valList.length;
        const intervalId = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                const newVal: number = Math.floor(Math.random() * n);
                setCurVal(valList[newVal]);
                setIsFading(false);
            }, 500);
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col pl-2">
            <h1 className="text-5xl font-semibold bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-800 dark:from-zinc-300 dark:via-zinc-100 dark:to-zinc-400 inline-block text-transparent bg-clip-text ">Yash H. Barve</h1>
            <h1 className={`text-3xl font-medium text-zinc-600 mt-1 dark:text-zinc-500 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {curVal}
            </h1>
            <div className="text-sm lg:text-xs mt-8 w-4/5 text-zinc-500 dark:text-zinc-500 cursor-default">I am a third-year computer science student at the University of Waterloo and a business student at Wilfrid Laurier University. Since beginning my journey in full-stack development in 2021, I have developed a strong inclination towards backend technology. <br /><br />As I continue to delve into the depths of web development, I am also exploring other interesting domains like Web3 and Machine Learning. As I start my career, I am focused on learning new things, meeting cool people, and gaining useful work experience in the process. <br /> <br />Outside of the technical realm, I enjoy reading and watching Formula 1, and I am an avid supporter of Ferrari and Charles Leclerc.</div>
        </div>
    );
}