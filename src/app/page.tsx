import EducationCard from "@/components/EducationCard";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Interest from "@/components/sections/interest";
import LeftSide from "@/components/sections/left-side";
import MainNav from "@/components/sections/main-navbar";
import Projects from "@/components/sections/projects";
import Socials from "@/components/Socials";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";

export default function Home() {
  return (
    <div className="dark:text-zinc-100 text-zinc-950 dark:bg-gradient-to-tr dark:from-zinc-950 dark:to-zinc-900 bg-gradient-to-tr from-zinc-50 to-zinc-100 transition-colors duration-200 ease-in-out">
      {/* <MainNav /> */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:w-4/12">
            <LeftSide />
          </div>
          <div className="lg:w-7/12 lg:pb-24 flex flex-col">
            <Projects />
            <Experience />
            <Education />
            <Interest interests={["Formula 1", "Cricket", "Graphic Design"]} />
            <div className="lg:hidden block mt-12 mx-auto"><Socials /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
