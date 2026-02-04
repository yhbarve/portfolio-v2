// components/MobileSidebarNav.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

export default function MobileSidebarNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const pathname = usePathname();

  // ensure we only portal after mount (avoids SSR hydration issues)
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    console.log("MobileSidebarNav mounted/remounted");
  }, []);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Focus first link + lock scroll when open
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

  // Close on route change (/blogs etc.)
  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname]);

  // Close on hash change (#projects etc.)
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#experiences", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#writings", label: "Writings" },
    { href: "#interests", label: "Interests" },
  ];

  return (
    <>
      {/* Floating toggle (top-right on phones) */}
      <button
        type="button"
        aria-label="Open navigation"
        aria-expanded={open}
        aria-controls="mobile-nav-modal"
        onClick={() => {
          console.log("Button clicked, open was:", open);
          setOpen((prev) => {
            console.log("Setting open to:", !prev);
            return true;
          });
          console.log("Button is now ", open);
        }}
        className="fixed top-[calc(16px+env(safe-area-inset-top))] right-4 z-[10000] lg:hidden
                   rounded-2xl px-4 py-2 text-xs font-medium shadow-lg border border-border bg-surface-3 backdrop-blur-2xl text-navButton-iconFill active:scale-95 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="15"
          height="15"
          viewBox="0 0 50 50"
          className="h-[15px] w-[15px] fill-accent-soft"
        >
          <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
        </svg>
      </button>

      {/* Portal to guarantee top-most stacking */}
      {mounted &&
        createPortal(
          <>
            {/* Backdrop */}
            {open && (
              <div
                aria-hidden="true"
                onClick={() => {
                  setOpen(false);
                  console.log("Setting button to:", open);
                }}
                className="fixed inset-0 z-[10000] bg-black/45 backdrop-blur-[1px] lg:hidden"
              />
            )}

            {/* Centered modal */}
            <aside
              id="mobile-nav-modal"
              role="dialog"
              aria-modal="true"
              className={`fixed inset-0 z-[10001] lg:hidden flex items-center justify-center
                          transition-opacity duration-200
                          ${
                            open
                              ? "opacity-100"
                              : "opacity-0 pointer-events-none"
                          }`}
            >
              <div
                className={`bg-surface-3 shadow-2xl rounded-2xl w-[70vw] max-w-[420px]
                            transform transition-transform duration-200 border-2 border-border
                            ${open ? "scale-100" : "scale-95"}`}
                style={{
                  paddingTop: "calc(env(safe-area-inset-top))",
                  paddingBottom: "calc(env(safe-area-inset-bottom))",
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-accent-soft">
                  <span className="text-text-1 font-semibold">
                    Navigation
                  </span>
                  <button
                    type="button"
                    aria-label="Close navigation"
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 text-text-1"
                  >
                    ✕
                  </button>
                </div>

                {/* Links */}
                <nav className="px-3 py-3">
                  <ul className="space-y-2">
                    {links.map((l, i) => (
                      <li key={l.href}>
                        <a
                          ref={i === 0 ? firstLinkRef : null}
                          href={l.href}
                          onClick={(e) => {
                            if (l.href.startsWith("#")) {
                              e.preventDefault();
                              document.querySelector(l.href)?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                            setOpen(false);
                          }}
                          className="block rounded-xl px-4 py-3 text-base text-accent-soft bg-accent/5 focus:outline-none text-center"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          </>,
          document.body
        )}
    </>
  );
}
