"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function formatDateWithOrdinal(dateString: string) {
  const date = new Date(dateString);

  const day = date.getDate();
  const ordinal =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
          ? "rd"
          : "th";

  const formatted = date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  // Insert ordinal before the comma after the day
  return formatted.replace(/(\d{1,2})(,)/, `$1${ordinal}$2`);
}

export default function WritingsCardMobile({
  index,
  title,
  summary,
  date,
  tags,
  slug,
  category,
}: {
  index: number;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  slug: string;
  category: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div
        className="flex flex-col border border-border/5 bg-surface-1 transition duration-200 ease-in-out rounded-md p-2 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          {/* <div className="bg-accent text-accent-foreground text-4xl rounded-md flex items-center justify-center w-10 h-10 shrink-0">{index}</div> */}
          <div className="flex flex-col pr-2">
            <div className="text-text-1 font-medium text-sm text-start">{title}</div>
            <div className="font-light text-accent text-sm text-start">{formatDateWithOrdinal(date).toUpperCase()}</div>
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
                <div className="font-normal text-xs text-text-1 mb-4">
                  <span className="font-semibold text-accent">Summary: </span>
                  {summary}
                </div>
                
                <a
                  href={`/blog/${slug}`}
                  target="_blank"
                  className="text-xs text-accent rounded-md p-2 flex gap-1 items-center bg-accent/20 w-fit"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read Full Article →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
