import { fetchGithubContributions } from "@/lib/github-contributions";
import AboutMe from "../AboutMe";
import Navigation from "../Navigation";
import Socials from "../Socials";

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "yhbarve";

export default async function LeftSide() {
  const githubActivity = await fetchGithubContributions(GITHUB_USERNAME);

  return (
    <div className="">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-16 mt-8 lg:mt-0">
        <div className="flex flex-col lg:h-full justify-between">
          <AboutMe />
          <div className="lg:block hidden lg:mt-[2.5vh]">
            <Navigation />
          </div>
          <div className="lg:block hidden lg:mt-[4vh]">
            <Socials githubActivity={githubActivity} />
          </div>
        </div>
      </div>
    </div>
  );
}
