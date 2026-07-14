import { visit } from "unist-util-visit";
import { toString } from "hast-util-to-string";
import type { Root, Element, ElementContent } from "hast";

function isMermaidCodeBlock(node: Element): boolean {
  const code = node.children[0];
  if (!code || code.type !== "element" || code.tagName !== "code") return false;

  const className = code.properties?.className;
  const classes = Array.isArray(className)
    ? className.map(String)
    : className
      ? [String(className)]
      : [];

  return classes.some((value) => value.includes("language-mermaid"));
}

export function rehypeMermaid() {
  return (tree: Root) => {
    visit(tree, "element", (node, index, parent) => {
      if (
        index == null ||
        !parent ||
        node.tagName !== "pre" ||
        !isMermaidCodeBlock(node)
      ) {
        return;
      }

      const source = toString(node).trim();
      const replacement: Element = {
        type: "element",
        tagName: "div",
        properties: { className: ["mermaid", "not-prose"] },
        children: [{ type: "text", value: source } satisfies ElementContent],
      };

      parent.children[index] = replacement;
    });
  };
}
