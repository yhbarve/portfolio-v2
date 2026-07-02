"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExperienceCardMobile({year, title, org, desc, skills, coverImage}:{year: string, title: string, org: string, desc: Array<string>, skills: Array<string>, coverImage: string | null}){
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <div 
                className="flex flex-col border border-border/5 bg-surface-1 transition duration-200 ease-in-out rounded-md p-2"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-2">
                    {coverImage && <img src={coverImage} alt={org} className="rounded-md w-10 h-10 brightness-[0.95] hover:brightness-[0.90] transition ease-in-out border border-border/50" />}
                    {!coverImage && <div className="bg-accent text-accent-foreground text-4xl rounded-md px-1 py-0.5 inline-block flex items-center justify-center w-10 h-10">{org[0]}</div>}
                    <div className="flex flex-col">
                        <div className="text-text-1 font-medium text-sm text-start">{org}</div>
                        <div className="font-normal text-accent text-sm text-start">{title}</div>
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
                                <div className="font-normal text-xs flex flex-col gap-2 text-start">
                                    {desc.map((d, item) => (
                                        <div key={item} className="flex gap-2 text-accent">
                                            · <div className="text-text-1">{d}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-1 gap-y-2 mt-4 flex-wrap justify-start">
                                    {skills.map((key, item) => (
                                        <div key={item} className="text-[10px] bg-surface-3 border border-accent/20 text-accent-soft rounded-2xl px-1">
                                            {key}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
