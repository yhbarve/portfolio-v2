"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface SplashScreenProps {
  /**
   * How long the splash stays fully visible (ms) before fading out.
   */
  holdMs?: number;
  /**
   * Fade-out duration (ms).
   */
  fadeMs?: number;
  /**
   * If true, show every load (ignore sessionStorage).
   */
  alwaysShow?: boolean;
  /**
   * sessionStorage key to remember that splash was shown.
   */
  storageKey?: string;
}

export default function SplashScreen({
  holdMs = 20000,
  fadeMs = 250,
  alwaysShow = false,
  storageKey = "yb:splashSeen",
}: Readonly<SplashScreenProps>) {
  // Render splash immediately to prevent a 1-frame flash of underlying UI.
  const [visible, setVisible] = useState(true);
  const [render, setRender] = useState(true);
  const hasMarkedSeenRef = useRef(false);

  useLayoutEffect(() => {
    if (alwaysShow) return;

    try {
      const seen = sessionStorage.getItem(storageKey);
      if (seen) {
        setVisible(false);
        setRender(false);
        return;
      }
    } catch {
      // ignore
    }
  }, [alwaysShow, storageKey]);

  useEffect(() => {
    if (!render) return;

    const holdTimer = window.setTimeout(() => {
      setVisible(false);
    }, holdMs);

    return () => window.clearTimeout(holdTimer);
  }, [holdMs, render]);

  useEffect(() => {
    if (!render) return;
    if (visible) return;

    const fadeTimer = window.setTimeout(() => {
      setRender(false);
    }, fadeMs);

    return () => window.clearTimeout(fadeTimer);
  }, [fadeMs, render, visible]);

  useEffect(() => {
    if (alwaysShow) return;
    if (render) return;
    if (hasMarkedSeenRef.current) return;

    hasMarkedSeenRef.current = true;
    try {
      sessionStorage.setItem(storageKey, "1");
    } catch {
      // ignore
    }
  }, [alwaysShow, render, storageKey]);

  if (!render) return null;

  return (
    <div
      aria-hidden={!visible}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-tr from-background-1 via-background-2 to-background-3"
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${fadeMs}ms ease`,
      }}
    >
      <div className="flex flex-col items-center gap-3 px-6 text-center">
        <div className="relative select-none text-5xl font-semibold tracking-tight md:text-6xl">
          <span className="text-text-1/25">Yash Barve</span>
          <span className="splash-text-swipe absolute inset-0 text-transparent">
            Yash Barve
          </span>
        </div>
      </div>

      <style jsx>{`
        .splash-text-swipe {
          -webkit-background-clip: text;
          background-clip: text;
          background-image: linear-gradient(
            270deg,
            transparent 0%,
            transparent 35%,
            hsl(var(--accent)) 50%,
            transparent 65%,
            transparent 100%
          );
          background-size: 260% 100%;
          background-position: 0% 0%;
          animation: splashTextSwipe 1100ms ease-in-out infinite;
          filter: drop-shadow(0 0 12px hsla(var(--accent) / 0.35));
        }

        @keyframes splashTextSwipe {
          0% {
            background-position: 100% 0%;
            opacity: 0.25;
          }
          25% {
            opacity: 1;
          }
          100% {
            background-position: 0% 0%;
            opacity: 0.95;
          }
        }

        @keyframes splashBar {
          0% {
            transform: translateX(-120%);
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(320%);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}

