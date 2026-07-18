// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeExternalLinks from "rehype-external-links"
import rehypeKatex from "rehype-katex"
import { rehypeMermaid } from "./rehype-mermaid"
import type { Element } from "hast"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blogs/**/*.md`,       // use *.mdx later if you want MDX
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string" },
    published: { type: "boolean", default: true },
    tags: { type: "list", of: { type: "string" } },
    author: { type: "string" },
    category: { type: "string" }, // e.g. "Personal", "For Uni", "Technical", "Essays"
    coverImage: { type: "string" }, // e.g. "/blog-covers/my-post.jpg"
    coverImageCreditText: { type: "string" },
    coverImageCreditLink: { type: "string" },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^blogs\//, ""), // e.g. "my-first-post"
    },
    readingTime: {
      type: "string",
      resolve: (doc) => {
        const words = doc.body.raw.trim().split(/\s+/).filter(Boolean).length;
        const minutes = Math.max(1, Math.round(words / 200));
        return `${minutes} min read`;
      },
    },
  },
}))

export const Puzzle = defineDocumentType(() => ({
  name: "Puzzle",
  filePathPattern: `puzzles/**/*.md`,
  contentType: "markdown",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    difficulty: { type: "string" },
    published: { type: "boolean", default: true },
    tags: { type: "list", of: { type: "string" } },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^puzzles\//, ""),
    },
  },
}));

export default makeSource({
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
          filterNodes: (node: Element) => {
            const className = node.properties?.className;
            const classes = Array.isArray(className)
              ? className.map(String)
              : className
                ? [String(className)]
                : [];
            return !classes.includes("mermaid");
          },
        },
      ],
    ],
  },
});