"use client";

import { useEffect, useMemo, useState } from "react";
import Navigation from "./Navigation"; // (if you use a desktop nav)
import MobileSidebarNav from "./MobileSideNavbar";

// Small helper: detect reduced motion
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

export default function AboutMe() {
  const roles = useMemo(
    () => [
      "Software developer",
      "React.js developer",
      "Next.js developer",
      "MERN developer",
      "Node.js developer",
      "Backend developer",
    ],
    []
  );

  const [curVal, setCurVal] = useState(roles[0]);
  const [isFading, setIsFading] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // 10s cadence; match fade timing with CSS (duration-300 below)
    const DURATION = 300;

    const id = setInterval(() => {
      if (!reducedMotion) setIsFading(true);
      const n = roles.length;

      // choose a new index different from the current one
      const curIdx = roles.indexOf(curVal);
      let nextIdx = Math.floor(Math.random() * n);
      if (nextIdx === curIdx) {
        nextIdx = (nextIdx + 1) % n;
      }

      const t = setTimeout(() => {
        setCurVal(roles[nextIdx]);
        if (!reducedMotion) setIsFading(false);
      }, reducedMotion ? 0 : DURATION);

      // cleanup timeout each tick
      return () => clearTimeout(t);
    }, 10000);

    return () => clearInterval(id);
  }, [curVal, roles, reducedMotion]);

  return (
    <div className="flex flex-col items-center lg:items-start">
      <h1 className="text-5xl font-semibold inline-block text-name-foreground mb-2">
        Yash H. Barve
      </h1>

      <h1
        className={`text-3xl font-medium text-role-foreground mt-1 transition-opacity duration-300 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {curVal}
      </h1>

      <div className="text-xs mt-4 w-4/5 text-information-foreground cursor-default hidden lg:block">
        I&apos;m a fourth-year Computer Science student at the University of Waterloo and a Business student at
        Wilfrid Laurier University. Since starting my full-stack development journey in 2021, I have grown especially
        passionate about backend technologies and scalable systems.<br /><br />
        As I continue to deepen my expertise in web development, I&apos;m also exploring emerging fields like Web3 and
        Machine Learning. I&apos;m eager to keep learning, collaborate with brilliant minds, and gain meaningful work
        experience along the way.<br /><br />
        Beyond tech, I&apos;m an avid reader and a huge Formula 1 fan - delusionally cheering for Scuderia Ferrari and
        Charles Leclerc every race weekend.
      </div>

      {/* Mobile menu (phones & small screens) */}
      <div className="lg:hidden">
        <MobileSidebarNav key="mobile-nav" />
      </div>

      {/* Optional: desktop nav (if you want something visible on lg+) */}
      {/* <div className="hidden lg:block">
        <Navigation />
      </div> */}
    </div>
  );
}
