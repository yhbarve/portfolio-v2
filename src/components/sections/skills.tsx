import React from "react";
import ExperienceCard from "../ExperienceCard";
import SkillsCard from "../SkillsCard";
import SkillsCardMobile from "../SkillsCardMobile";
import { SKILL_ITEMS } from "../../data/skillData";
import GithubContributionMini from "../GithubContributionMini";

type SkillItem = {
    name: string;
    items: string[];
}

export default function Skills() {
  return (
    <div id="skills" className="pt-8 lg:pt-12">
      <div className="flex items-center pb-2 justify-between">
        <div className="text-accent font-bold cursor-default">
          TECHNICAL SKILLS & TOOLS
        </div>
      </div>

      {/* <GithubContributionMini /> */}

      {/* DESKTOP CARDS */}
      <div className="hidden lg:flex flex-col gap-4 text-text-1 hover:text-text-1">
        {SKILL_ITEMS.map((item: SkillItem) => (
          <SkillsCard key={item.name} category={item.name} skills={item.items} />
        ))}
      </div>

      {/* MOBILE CARDS */}
      <div className="lg:hidden flex flex-col gap-4 text-text-1 hover:text-text-1">
        {SKILL_ITEMS.map((item: SkillItem) => (
          <SkillsCardMobile key={item.name} category={item.name} skills={item.items} />
        ))}
      </div>
    </div>
  );
}
