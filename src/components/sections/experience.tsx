import React from "react";
import ExperienceCard from "../ExperienceCard";
import ExperienceCardMobile from "../ExperienceCardMobile";
import { EXPERIENCE_ITEMS } from "../../data/experienceData";

export default function Experience() {
  return (
    <div id="experiences" className="">
      <div className="flex items-center pb-2 justify-between">
        <div className="text-accent-foreground lg:text-accent font-black lg:font-bold cursor-default bg-accent lg:bg-transparent p-1 lg:p-0 rounded-lg lg:rounded-none w-full lg:w-auto text-center lg:text-left">
          EXPERIENCE
        </div>
        <div className="transition duration-200 ease-in-out text-accent hover:translate-x-1 hidden lg:block">
          <a href="https://drive.google.com/file/d/1YJJYrwnyrJ2f5UM66BvJUOp2G_HR6RhY/view?usp=sharing" className="">
            View Resume →
          </a>
        </div>
      </div>

      {/* DESKTOP CARDs */}
      <div className="lg:flex flex-col gap-4 text-text-1 hover:text-text-1 hidden">
        {EXPERIENCE_ITEMS.map((item) => (
          <ExperienceCard key={item.year} year={item.year} title={item.title} org={item.org} desc={item.desc} skills={item.skills} coverImage={item.coverImage} />
        ))}
      </div>

      {/* MOBILE CARDs */}
      <div className="flex flex-col gap-4 text-text-1 hover:text-text-1 lg:hidden">
        {EXPERIENCE_ITEMS.map((item) => (
          <ExperienceCardMobile key={item.year} year={item.year} title={item.title} org={item.org} desc={item.desc} skills={item.skills} />
        ))}
      </div>

      <div className="transition duration-200 ease-in-out text-text-1 mt-4 block lg:hidden text-center">
        <a href="https://drive.google.com/file/d/1YJJYrwnyrJ2f5UM66BvJUOp2G_HR6RhY/view?usp=sharing" className="text-accent px-4 py-2 rounded-md hover:text-accent-soft text-sm underline-offset-2 underline lg:no-underline">
          View Resume
        </a>
      </div>
    </div>
  );
}
