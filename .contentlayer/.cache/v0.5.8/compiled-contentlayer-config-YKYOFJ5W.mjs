// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeExternalLinks from "rehype-external-links";
import rehypeKatex from "rehype-katex";

// rehype-mermaid.ts
import { visit } from "unist-util-visit";
import { toString } from "hast-util-to-string";
function isMermaidCodeBlock(node) {
  const code = node.children[0];
  if (!code || code.type !== "element" || code.tagName !== "code") return false;
  const className = code.properties?.className;
  const classes = Array.isArray(className) ? className.map(String) : className ? [String(className)] : [];
  return classes.some((value) => value.includes("language-mermaid"));
}
function rehypeMermaid() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (index == null || !parent || node.tagName !== "pre" || !isMermaidCodeBlock(node)) {
        return;
      }
      const source = toString(node).trim();
      const replacement = {
        type: "element",
        tagName: "div",
        properties: { className: ["mermaid", "not-prose"] },
        children: [{ type: "text", value: source }]
      };
      parent.children[index] = replacement;
    });
  };
}

// contentlayer.config.ts
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blogs/**/*.md`,
  // use *.mdx later if you want MDX
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string" },
    published: { type: "boolean", default: true },
    tags: { type: "list", of: { type: "string" } },
    author: { type: "string" },
    category: { type: "string" },
    // e.g. "Personal", "For Uni", "Technical", "Essays"
    coverImage: { type: "string" },
    // e.g. "/blog-covers/my-post.jpg"
    coverImageCreditText: { type: "string" },
    coverImageCreditLink: { type: "string" }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^blogs\//, "")
      // e.g. "my-first-post"
    }
  }
}));
var Puzzle = defineDocumentType(() => ({
  name: "Puzzle",
  filePathPattern: `puzzles/**/*.md`,
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    difficulty: { type: "string" },
    published: { type: "boolean", default: true },
    tags: { type: "list", of: { type: "string" } }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^puzzles\//, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: ".",
  documentTypes: [Post, Puzzle],
  markdown: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
      rehypeKatex,
      rehypeMermaid,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          filterNodes: (node) => {
            const className = node.properties?.className;
            const classes = Array.isArray(className) ? className.map(String) : className ? [String(className)] : [];
            return !classes.includes("mermaid");
          }
        }
      ]
    ]
  }
});
export {
  Post,
  Puzzle,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-YKYOFJ5W.mjs.map
