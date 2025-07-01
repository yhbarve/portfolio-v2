"use client"

import { useEffect, useState } from "react";

export default function AboutMe(){
    const [curVal, setCurVal] = useState("Software developer");
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const valList:Array<string> = ["Software developer", "React.js developer", "Next.js developer", "MERN developer", "Node.js developer", "Backend developer"];
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
            <h1 className="text-5xl font-semibold inline-block text-name-foreground">Yash H. Barve</h1>
            <h1 className={`text-3xl font-medium text-role-foreground mt-1 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {curVal}
            </h1>
            <div className="text-sm lg:text-xs mt-8 w-4/5 text-information-foreground cursor-default">I am a fourth-year Computer Science student at the University of Waterloo and a Business student at Wilfrid Laurier University. Since beginning my journey in full-stack development in 2021, I have developed a strong inclination towards backend technology. <br /><br />As I continue to delve into the depths of web development, I am also exploring other interesting domains like Web3 and Machine Learning. As I start my career, I am focused on learning new technologies, meeting cool people, and gaining useful work experience in the process. <br /> <br />Outside of the technical realm, I enjoy reading and watching Formula 1, and I am a die-hard supporter of Scuderia Ferrari and Charles Leclerc.</div>
        </div>
    );
}