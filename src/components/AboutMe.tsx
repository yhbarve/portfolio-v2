"use client";

import { useEffect, useMemo, useState } from "react";
import Navigation from "./Navigation"; // (if you use a desktop nav)
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      "Software Engineer",
      "Backend Engineer",
      "Full-Stack Engineer",
      "AI Engineer",
      "Cloud Engineer"
    ],
    []
  );

  const [curVal, setCurVal] = useState(roles[0]);
  const [isFading, setIsFading] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
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
    <div className="flex flex-col items-start px-4 lg:px-0">
      <h1 className="text-5xl font-normal inline-block text-text-1 lg:rounded-none w-full lg:w-auto text-start">
        Yash H. Barve
      </h1>

      <h1
        className={`lg:text-3xl text-3xl font-normal text-accent lg:mt-4 mt-2 transition-opacity duration-300 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {curVal}
      </h1>

      <div className="w-full text-sm lg:text-xs font-normal mt-8 lg:mt-8 text-text-1 cursor-default">
        I&apos;m a fifth-year Computer Science student at the University of Waterloo and a Business student at
        Wilfrid Laurier University. Since starting my development journey in 2021, I have grown especially
        passionate about system design and architecture. I care about distributed systems thinking, reliability, and using the right design patterns to keep codebases clean as they scale.<br /><br />
        Having completed my final work term at Nokia as a Software Engineer, I am now seeking new-grad software engineering roles.<br /><br />
        Beyond tech, I&apos;m an avid reader and a huge Formula 1 fan, delusionally cheering for Scuderia Ferrari and
        Charles Leclerc every race weekend.
      </div>

      {/* Optional: desktop nav (if you want something visible on lg+) */}
      {/* <div className="hidden lg:block">
        <Navigation />
      </div> */}
    </div>
  );
}
