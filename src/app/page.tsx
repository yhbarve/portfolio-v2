import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Interest from "@/components/sections/interest";
import LeftSide from "@/components/sections/left-side";
import MainNav from "@/components/sections/main-navbar";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Writings from "@/components/sections/writings";
import Socials from "@/components/Socials";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Banner from "@/components/ui/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-br from-background-1 via-background-2 to-background-3 transition duration-200 ease-in-out">
        {/* <MainNav /> */}
        <div className="mx-auto min-h-screen max-w-screen-xl pt-8 lg:py-12 font-sans md:px-12 lg:px-24">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:w-4/12 mt-8 lg:mt-0">
              <LeftSide />
            </div>
            <div className="lg:w-7/12 lg:py-16 pt-8 flex flex-col px-3">
              <AnimatedSection>
                <Projects />
              </AnimatedSection>
              <AnimatedSection>
                <Experience />
              </AnimatedSection>
              <AnimatedSection>
                <Skills />
              </AnimatedSection>
              <AnimatedSection>
                <Education />
              </AnimatedSection>
              <AnimatedSection>
                <Writings />
              </AnimatedSection>
              <AnimatedSection>
                <Interest interests={["Reading", "Formula 1", "Music", "Movies & TV", "Sports", "Graphic Design", "Photography"]} />
              </AnimatedSection>
            </div>
            <div className="lg:hidden block lg:mt-12 mx-auto w-full">
                <Footer />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
