"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type EducationCardMobileProps = {
    year: string;
    program: string;
    name: string;
    courses: string[];
    coverImage: string;
    desc: string[];
    links: {key: string, value: string}[];
}

export default function EducationCardMobile(props: EducationCardMobileProps) {
    const { year, program, name, courses, coverImage, desc, links } = props;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <div
                className="flex flex-col border border-border/5 bg-surface-1 transition duration-200 ease-in-out rounded-md p-2 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-2">
                    {coverImage && <img src={coverImage} alt={name} className="rounded-md w-10 h-10 brightness-[0.95] hover:brightness-[0.90] transition ease-in-out border border-border/50" />}
                    {!coverImage && <div className="bg-accent text-accent-foreground text-4xl rounded-md px-1 py-0.5 inline-block flex items-center justify-center w-10 h-10">{name[0]}</div>}
                    <div className="flex flex-col pr-2">
                        <div className="text-text-1 font-medium text-sm text-start">{program}</div>
                        <div className="font-light text-accent text-sm text-start">{name}</div>
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
                            <div className="pt-2">
                                <div className="mb-2 font-normal text-xs text-accent text-start italic">{year}</div>
                                
                                {desc.length > 0 && (
                                    <div className="font-normal text-xs flex flex-col gap-2 text-start mb-4">
                                        {desc.map((d, item) => (
                                            <div key={item} className="flex gap-2 text-accent">
                                                · <div className="text-text-1">{d}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {courses.length > 0 && (
                                    <div className="mt-2">
                                        <div className="text-xs font-medium mb-2">Courses completed:</div>
                                        <div className="flex gap-1 gap-y-2 flex-wrap justify-start">
                                            {courses.map((c, item) => (
                                                <div key={item} className="text-[10px] bg-surface-3 border border-accent/20 text-accent-soft rounded-2xl px-1">
                                                    {c}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {links && links.length > 0 && (
                                    <div className="flex gap-2 items-center mt-6 justify-start">
                                        <div className="font-normal text-xs text-accent">Links:</div>
                                        {links.map((link) => (
                                            <a key={link.key} href={link.value} target="_blank" className="text-xs text-accent rounded-md p-1 flex gap-1 items-center bg-accent/20">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                                                </svg>
                                                <span>{link.key}</span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
