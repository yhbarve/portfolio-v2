"use client"

import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import SmallNavigation from "./SmallNavigation";

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
        <div className="flex flex-col pl-2 items-center lg:items-start">
            <h1 className="text-5xl font-semibold inline-block text-name-foreground mb-2">Yash H. Barve</h1>
            <h1 className={`text-3xl font-medium text-role-foreground mt-1 transition-opacity duration-200 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {curVal}
            </h1>
            <div className="text-sm lg:text-xs mt-8 w-4/5 text-information-foreground cursor-default hidden lg:block">I&apos;m a fourth-year Computer Science student at the University of Waterloo and a Business student at Wilfrid Laurier University. Since starting my full-stack development journey in 2021, I have grown especially passionate about backend technologies and scalable systems.<br /><br /> As I continue to deepen my expertise in web development, I&apos;m also exploring emerging fields like Web3 and Machine Learning. I&apos;m eager to keep learning, collaborate with brilliant minds, and gain meaningful work experience along the way.<br /><br /> Beyond tech, I&apos;m an avid reader and a huge Formula 1 fan - delusionally cheering for Scuderia Ferrari and Charles Leclerc every race weekend.</div>
            <div className="lg:hidden"><SmallNavigation /></div>
        </div>
    );
}