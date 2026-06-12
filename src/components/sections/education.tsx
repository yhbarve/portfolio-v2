import CourseCard from "../CourseCard";
import EducationCard from "../EducationCard";
import { EDUCATION_ITEMS } from "../../data/educationData";

export default function Education() {
  return (
    <div id="education" className="pt-12">
      <div className="flex items-center pb-2 justify-between">
        <div className="text-accent-foreground lg:text-accent font-black lg:font-bold cursor-default bg-accent lg:bg-transparent p-1 lg:p-0 rounded-lg lg:rounded-none w-full lg:w-auto text-center lg:text-left">
          EDUCATION
        </div>
        <div className="transition duration-200 ease-in-out text-accent hover:translate-x-1 hidden lg:block">
          <a
            href="https://www.yhbarve.me/blog/university-course-notes"
            className=""
          >
            View Course Notes →
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-text-1 hover:text-text-1">
        {EDUCATION_ITEMS.map((item) => (
          <EducationCard key={item.program} year={item.year} program={item.program} name={item.name} courses={item.courses || []} coverImage={item.coverImage} desc={item.desc || []} links={item.links || []} />
        ))}
      </div>
    </div>
  );
}
