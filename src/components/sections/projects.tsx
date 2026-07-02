import ProjectCard from "../ProjectCard";
import ProjectCardMobile from "../ProjectCardMobile";
import { PROJECT_ITEMS, ProjectItem } from "../../data/projectData";

export default function Projects() {
  return (
    <div id="projects" className="pt-8 lg:pt-12">
      <div className="flex items-center pb-2 justify-between">
        <div className="text-accent font-bold cursor-default">
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
          <ProjectCard key={item.title + item.year} year={item.year} title={item.title} subtitle={item.subtitle} desc={item.desc} skills={item.skills} coverImage={item.coverImage} links={item.links} />
        ))}
      </div>
      
      {/* MOBILE CARDS */}
      <div className="lg:hidden flex flex-col gap-4 text-text-1 hover:text-text-1">
        {PROJECT_ITEMS.map((item: ProjectItem) => (
          <ProjectCardMobile key={item.title + item.year} year={item.year} title={item.title} subtitle={item.subtitle} desc={item.desc} skills={item.skills} coverImage={item.coverImage} links={item.links} />
        ))}
      </div>

      {/* <div className="text-accent mt-4 block lg:hidden bg-accent/20 p-2 rounded-md w-fit">
        <a href="/projects" className="font-semibold rounded-md text-sm">
          View All Projects 
        </a>
      </div> */}
    </div>
  );
}
