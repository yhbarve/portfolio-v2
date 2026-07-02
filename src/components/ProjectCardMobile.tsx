"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectItem = {
  year: string;
  title: string;
  subtitle: string;
  desc: Array<string>;
  skills: Array<string>;
  coverImage: string;
  links: {key: string, value: string}[];
};

export default function ProjectCardMobile(props: ProjectItem) {
  const { year, title, subtitle, desc, skills, coverImage, links } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div
        className="flex flex-col border border-border/5 bg-surface-1 transition duration-200 ease-in-out rounded-md p-2 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          {coverImage && <img src={coverImage} alt={title} className="rounded-md w-10 h-10 brightness-[0.95] hover:brightness-[0.90] transition ease-in-out border border-border/50" />}
          {!coverImage && <div className="bg-accent text-accent-foreground text-4xl rounded-md px-1 py-0.5 inline-block flex items-center justify-center w-10 h-10">{title[0]}</div>}
          <div className="flex flex-col pr-2">
            <div className="text-text-1 font-medium text-sm text-start">{title}</div>
            <div className="font-light text-accent text-sm text-start">{subtitle}</div>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4">
                <div className="font-normal text-xs flex flex-col gap-1">
                  {desc.map((d, item) => (
                    <div key={item} className="flex gap-2 text-accent">
                      · <div className="text-text-1">{d}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-1 gap-y-2 mt-4 flex-wrap justify-start">
                  {skills.map((key, item) => (
                    <div
                      key={item}
                      className="text-[10px] bg-surface-3 border border-accent/20 text-accent-soft rounded-2xl px-1"
                    >
                      {key}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 items-center mt-6 justify-start">
                  <div className="font-normal text-xs text-accent">Check it out:</div>
                  {links.length > 0 && links.map((link) => (
                    <a key={link.key} href={link.value} target="_blank" className="text-xs text-accent rounded-md p-1 flex gap-1 items-center bg-accent/20">
                      {link.key === "YouTube" && 
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                      </svg>}
                      {link.key === "GitHub" && 
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill={"currentColor"}
                      viewBox="0 0 24 24"
                      >
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
                      </svg>}
                      {link.key !== "YouTube" && link.key !== "GitHub" && 
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                      </svg>}
                      <span>{link.key}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
