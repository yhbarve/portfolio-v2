"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { motion, AnimatePresence } from "framer-motion";

export default function SimpleMobileNavbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => firstLinkRef.current?.focus(), 0);
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/writings", label: "Writings" },
    { href: "/reading", label: "Bookshelf" },
    { href: "/gallery", label: "Gallery" },
    { href: "/puzzles", label: "Puzzles" },
    { href: "/music", label: "Music" },
  ];

  const socialLinks = [
    {
      href: "https://x.com/yhbarve",
      label: "X",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" />
        </svg>
      ),
    },
    {
      href: "https://github.com/yhbarve",
      label: "GitHub",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/yhbarve/",
      label: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
        </svg>
      ),
    },
    {
      href: "mailto:yhbarve@uwaterloo.ca",
      label: "Email",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed top-4 right-4 z-[100] lg:hidden">
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(true)}
          className="p-3 rounded-2xl bg-surface-3 border border-border/10 text-accent shadow-lg transition active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Navigation Modal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                  className="fixed inset-0 z-[10000] bg-background-1/40 backdrop-blur-sm lg:hidden"
                />

                {/* Sidebar */}
                <motion.aside
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 bottom-0 z-[10001] w-[60vw] max-w-[280px] bg-background-1 shadow-2xl shadow-accent/20 lg:hidden flex flex-col border-l border-border/10"
                >
                  <div className="flex items-center justify-between py-4 px-4 border-b border-accent">
                    <span className="text-text-1 font-normal text-xl tracking-tight">Menu</span>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="text-accent"
                    >
                      ✕
                    </button>
                  </div>

                  <nav className="flex-1 py-4 px-4 overflow-y-auto border-b border-accent">
                    <div className="text-sm font-semibold text-accent uppercase tracking-widest opacity-80 mb-4">Navigation</div>
                    <ul className="space-y-4">
                      {links.map((l, i) => (
                        <li key={l.href}>
                          <a
                            ref={i === 0 ? firstLinkRef : null}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className="block text-lg font-normal text-text-1"
                          >
                            {l.label}
                          </a>  
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className="border-b border-accent p-4 flex gap-2 justify-between bg-background-1">
                    <div className="text-sm font-semibold text-accent uppercase tracking-widest opacity-80">Theme</div>
                    <ThemeSwitcher />
                  </div>

                  {/* Social Links from Footer */}
                  <div className="p-4 border-t border-border/10 bg-background-1">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm font-semibold text-accent uppercase tracking-widest opacity-80">Connect</div>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-between">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-md bg-surface-3 text-text-1 hover:text-accent transition-all shadow-sm border border-border/10"
                          aria-label={social.label}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                    <div className="mt-4 text-center text-[10px] text-text-1 font-medium uppercase tracking-[0.2em]">
                      © {new Date().getFullYear()} Yash Harshal Barve
                    </div>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
