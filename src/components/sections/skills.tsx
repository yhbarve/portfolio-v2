import React from "react";
import ExperienceCard from "../ExperienceCard";
import SkillsCard from "../SkillsCard";
import { SKILL_ITEMS } from "../../data/skillData";

type SkillItem = {
    name: string;
    items: string[];
}

export default function Skills() {
  return (
    <div id="skills" className="pt-12">
      <div className="flex items-center pb-2 justify-between">
        <div className="text-accent-foreground lg:text-accent font-black lg:font-bold cursor-default bg-accent lg:bg-transparent p-1 lg:p-0 rounded-lg lg:rounded-none w-full lg:w-auto text-center lg:text-left">
          TECHNICAL SKILLS & TOOLS
        </div>
      </div>
      <div className="flex flex-col gap-4 text-text-1 hover:text-text-1">
        {SKILL_ITEMS.map((item: SkillItem) => (
          <SkillsCard key={item.name} category={item.name} skills={item.items} />
        ))}
      </div>
    </div>
  );
}
