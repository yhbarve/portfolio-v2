import EducationCard from "@/components/EducationCard";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Interest from "@/components/sections/interest";
import MainNav from "@/components/sections/main-navbar";
import Projects from "@/components/sections/projects";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";

export default function Home() {
  return (
    <div className="scroll-smooth dark:text-zinc-100 dark:bg-gradient-to-tr dark:from-zinc-950 dark:to-zinc-900 bg-gradient-to-tr from-zinc-50 to-zinc-100">
      {/* <MainNav /> */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-4/12 lg:flex-col lg:justify-between lg:py-24">
            <div className="sticky top-0">
              <h1 className="text-5xl font-semibold text-zinc-900 dark:text-zinc-100">Yash H. Barve</h1>
              <h1 className="text-2xl font-light text-zinc-900 mt-2 dark:text-zinc-100">Full Stack Web Developer</h1>
            </div>
          </div>
          <div className="pt-24 lg:w-7/12 lg:py-24 flex flex-col">
            <ThemeSwitcher />
            <Projects />
            <Experience />
            <Education />
            <Interest interests={["Formula 1", "Cricket", "Graphic Design"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
