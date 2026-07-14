"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

type MermaidInitProps = {
  rootId: string;
};

function hsl(variable: string, alpha = 1) {
  return `hsl(${getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim()} / ${alpha})`;
}

function themeVariablesFromCss() {
  return {
    background: "transparent",
    primaryColor: hsl("--surface-3"),
    primaryTextColor: hsl("--text-1"),
    primaryBorderColor: hsl("--border"),
    secondaryColor: hsl("--surface-1"),
    secondaryTextColor: hsl("--text-1"),
    secondaryBorderColor: hsl("--border"),
    tertiaryColor: hsl("--background-3"),
    tertiaryTextColor: hsl("--text-1"),
    tertiaryBorderColor: hsl("--border"),
    lineColor: hsl("--accent-soft"),
    textColor: hsl("--text-1"),
    mainBkg: hsl("--surface-3"),
    nodeBorder: hsl("--border"),
    clusterBkg: hsl("--surface-1"),
    clusterBorder: hsl("--border"),
    titleColor: hsl("--accent-soft"),
    edgeLabelBackground: hsl("--background-1"),
    nodeTextColor: hsl("--text-1"),
    fontFamily: "inherit",
  };
}

export default function MermaidInit({ rootId }: MermaidInitProps) {
  const { resolvedTheme, theme } = useTheme();

  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll<HTMLElement>(".mermaid"));
    if (nodes.length === 0) return;

    let cancelled = false;

    // Mermaid rewrites nodes in place; restore source before re-running on theme change
    for (const node of nodes) {
      if (!node.dataset.mermaidSource) {
        node.dataset.mermaidSource = node.textContent?.trim() ?? "";
      }
      node.removeAttribute("data-processed");
      node.innerHTML = node.dataset.mermaidSource;
    }

    import("mermaid").then(({ default: mermaid }) => {
      if (cancelled) return;

      mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        themeVariables: themeVariablesFromCss(),
        securityLevel: "loose",
        fontFamily: "inherit",
        flowchart: {
          curve: "basis",
          padding: 16,
          htmlLabels: true,
          useMaxWidth: true,
        },
      });

      void mermaid.run({ nodes });
    });

    return () => {
      cancelled = true;
    };
  }, [rootId, resolvedTheme, theme]);

  return null;
}
