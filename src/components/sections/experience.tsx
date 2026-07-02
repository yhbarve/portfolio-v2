import React from "react";
import ExperienceCard from "../ExperienceCard";
import ExperienceCardMobile from "../ExperienceCardMobile";
import { EXPERIENCE_ITEMS } from "../../data/experienceData";

export default function Experience() {
  return (
    <div id="experiences" className="pt-8 lg:mt-0 lg:pt-0">
      <div className="flex items-center pb-2 justify-between">
        <div className="text-accent font-bold cursor-default">
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
          <ExperienceCardMobile key={item.year} year={item.year} title={item.title} org={item.org} desc={item.desc} skills={item.skills} coverImage={item.coverImage} />
        ))}
      </div>

      <div className="text-accent mt-4 block lg:hidden bg-accent/20 p-2 rounded-md w-fit">
        <a href="https://drive.google.com/file/d/1YJJYrwnyrJ2f5UM66BvJUOp2G_HR6RhY/view?usp=sharing" className="font-semibold rounded-md text-sm">
          View Resume
        </a>
      </div>
    </div>
  );
}
