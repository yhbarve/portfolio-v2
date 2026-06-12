import ProjectCard from "../ProjectCard";
import ProjectCardMobile from "../ProjectCardMobile";
import { PROJECT_ITEMS, ProjectItem } from "../../data/projectData";

export default function Projects() {
  return (
    <div id="projects" className="pt-12">
      <div className="flex items-center pb-2 justify-between">
        <div className="text-accent-foreground lg:text-accent font-black lg:font-bold cursor-default bg-accent lg:bg-transparent p-1 lg:p-0 rounded-lg lg:rounded-none w-full lg:w-auto text-center lg:text-left">
          PROJECTS
        </div>
        <div className="transition duration-200 ease-in-out text-accent hover:translate-x-1 hidden lg:block">
          <a href="/projects" className="">
            View All Projects →
          </a>
        </div>
      </div>

      {/* DESKTOP CARDS */}
      <div className="hidden lg:flex flex-col gap-4 text-text-1 hover:text-text-1">
        {PROJECT_ITEMS.map((item: ProjectItem) => (
          <ProjectCard key={item.name + item.year} year={item.year} name={item.name} desc={item.desc} skills={item.skills} coverImage={item.coverImage} links={item.links} />
        ))}
      </div>
      
      {/* MOBILE CARDS */}
      <div className="lg:hidden flex flex-col gap-4 text-text-1 hover:text-text-1">
        {PROJECT_ITEMS.map((item: ProjectItem) => (
          <ProjectCardMobile key={item.name + item.year} year={item.year} name={item.name} desc={item.desc} skills={item.skills} coverImage={item.coverImage} links={item.links} />
        ))}
      </div>

      <div className="transition duration-200 ease-in-out text-text-1 mt-4 block lg:hidden text-center">
        <a href="/projects" className="text-accent px-4 py-2 rounded-md hover:text-accent-soft text-sm underline-offset-2 underline lg:no-underline">
          View All Projects 
        </a>
      </div>
    </div>
  );
}
