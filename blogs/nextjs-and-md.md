---
title: "Building a Markdown Blog with Next.js and Contentlayer"
date: "2025-08-15"
summary: "In this technical breakdown, I share how I built my website's Writings section by integrating a custom Markdown blog using Next.js and Contentlayer. Moving away from third-party platforms like Notion, I implemented a developer-friendly workflow that treats content as type-safe data, styled efficiently with Tailwind CSS. The guide covers everything from project configuration and frontmatter metadata to rendering advanced features like MDX components and syntax-highlighted code blocks, resulting in a fast, SEO-optimized, and fully self-hosted blogging experience."
tags:
  [
    "nextjs",
    "markdown",
    "contentlayer",
    "tailwindcss",
    "mdx",
    "static-site-generation",
    "frontend-development",
    "blog-development",
    "web-development",
  ]
published: true
author: "Yash Barve"
category: "Build"
coverImage: "/blog/markdown-blog.jpg"
coverImageCreditText: "Medium"
coverImageCreditLink: "https://miro.medium.com/v2/resize:fit:1400/0*wmXQfUuyN2IhVDg3"
---

## Introduction

For my very first technical breakdown, I thought it would be nice to share how I added the **Writings** section to my website. In other words, this post is about how you’re able to read this post.

Markdown is one of the most developer-friendly ways to write content. It's lightweight, easy to read in raw form, and can be rendered beautifully in a web application. I also chose this option because I wanted to actually experience setting up a personal blog without relying on a 3rd party service like Notion or Substack.

In this extensive guide, we will explore:

- Why Markdown is still relevant in 2025
- How to integrate it into a Next.js project
- Using **Contentlayer** to manage and render Markdown
- Best practices for structuring Markdown content
- Advanced features and formatting
- Example projects and real-world tips
- Conclusion with recommendations

---

## 1. Why Markdown?

Markdown has stood the test of time because it balances **simplicity**, **portability**, and **expressiveness**.

### 1.1 Benefits

- **Readable** — Looks good even in raw `.md` form.
- **Lightweight** — Small file sizes.
- **Cross-platform** — Works everywhere, from GitHub to Notion.
- **Convertible** — Easily converted to HTML, PDF, DOCX.

### 1.2 Where You'll Find Markdown

- GitHub README files
- Static site generators like Hugo or Jekyll
- Blog platforms like Ghost
- Documentation sites like Docusaurus
- Knowledge base tools like Obsidian

> **Pro Tip:** The simpler the format, the longer it lasts. Markdown is proof.

---

## 2. Setting Up a Next.js Project

Let's start from scratch.

```bash
npx create-next-app@latest my-blog
cd my-blog
```

For TypeScript:

```bash
npx create-next-app@latest my-blog --typescript
```

Install dependencies:

```bash
npm install contentlayer next-contentlayer gray-matter remark remark-html
```

## 3. Project Structure

Here's a clean structure for blogs:

```bash
my-blog/
  blogs/
    hello-world.md
    getting-started.md
  pages/
    blog/
      [slug].tsx
  contentlayer.config.ts
  tailwind.config.js
```

This keeps posts in `/blogs` while the `/pages/blog` folder handles rendering.

## 4. Writing Your First Post

**blogs/hello-world.md:**

```markdown
---
title: "Hello World"
date: "2025-08-10"
summary: "First post in Markdown"
tags: ["intro", "markdown"]
published: true
---

# Hello World

Welcome to my first Markdown blog post!
```

Use frontmatter (the triple-dashed YAML block) to define metadata.

## 5. Configuring Contentlayer

**contentlayer.config.ts:**

```typescript
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    summary: { type: "string" },
    tags: { type: "list", of: { type: "string" } },
    published: { type: "boolean", default: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "blogs",
  documentTypes: [Post],
});
```

## 6. Rendering Markdown

**pages/blog/[slug].tsx:**

```tsx
import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({
      params: { slug: post._raw.flattenedPath },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return { props: { post } };
}

export default function BlogPost({ post }) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <article className="prose lg:prose-xl dark:prose-invert">
      <h1>{post.title}</h1>
      <time>{new Date(post.date).toLocaleDateString()}</time>
      <MDXContent />
    </article>
  );
}
```

## 7. Advanced Markdown Features

### 7.1 Lists

- Item One
- Item Two
- Item Three

### 7.2 Numbered Lists

1. Step One
2. Step Two
3. Step Three

### 7.3 Blockquotes

> This is a blockquote. It's great for quotes or highlighting information.

### 7.4 Tables

| Feature | Supported |
| ------- | --------- |
| Tables  | ✅        |
| Lists   | ✅        |
| Images  | ✅        |

### 7.5 Task Lists

- [ ] Write post
- [x] Publish post
- [ ] Share post

### 7.6 Inline Code

Here's some inline code: `const x = 1;`

### 7.7 Code Blocks

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("World"));
```

```bash
# Install dependencies
npm install
```

## 8. Images

```markdown
![Doggy](https://picsum.photos/id/237/800/400)
```

![Doggy](https://picsum.photos/id/237/800/400)

## 9. Best Practices for Markdown in Next.js

- Use frontmatter for metadata
- Keep file names URL-safe
- Avoid huge Markdown files — break into smaller posts
- Use MDX for interactive content
- Leverage remark plugins for extra features
- Keep images optimized — use Next.js `<Image />` when possible

## 10. Example: MDX Component in Markdown

```markdown
<CustomAlert type="warning">
This is a custom React component rendered inside Markdown!
</CustomAlert>
```

## 11. Extra Formatting Examples

### Nested Lists

- Fruits
  - Apple
  - Banana
- Vegetables
  - Carrot
  - Potato

### Mixed Content

> **Tip:** Use blockquotes to highlight important notes.
> They can contain **bold text**, _italic text_, and even `inline code`.

## 12. Multi-Paragraph Example

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate, augue vitae sollicitudin varius, nibh nisi feugiat est, vitae porta turpis lacus a lectus.

Vivamus nec nunc nec sapien feugiat commodo. Quisque tempor sapien et urna ultricies fermentum. In vitae magna dictum, tincidunt risus eget, elementum ligula.

Aliquam erat volutpat. Donec faucibus justo vitae purus volutpat egestas.

## 13. More Code Samples

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        print(a)
        a, b = b, a + b
```

```html
<div class="container">
  <h1>Hello HTML</h1>
</div>
```

```css
.container {
  background: hsl(210, 50%, 96%);
  color: hsl(210, 20%, 20%);
}
```

## 14. Adding Plugins for Markdown

You can enhance Markdown with remark/rehype plugins.

```bash
npm install remark-gfm rehype-autolink-headings rehype-slug
```

Example **next.config.js** integration:

```javascript
const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: true,
});
```

## 15. SEO Considerations

- Use descriptive titles in frontmatter
- Add summary for meta descriptions
- Keep URLs short
- Include alt text for images
- Leverage Open Graph tags in `_document.tsx`

## 16. Performance Tips

- Pre-render Markdown at build time
- Optimize images
- Split large posts into multiple pages
- Cache API responses for dynamic content

## 17. Common Mistakes to Avoid

- Forgetting to update frontmatter dates
- Using spaces in filenames
- Not testing dark mode compatibility
- Ignoring mobile typography

## 18. Example Blog Flow

1. Write Markdown in `/blogs`
2. Commit changes to Git
3. Deploy to Vercel
4. Enjoy your statically generated blog

## 19. Real-World Uses

- Personal blogs with no CMS
- Team documentation for internal projects
- Knowledge bases for startups
- Tutorial platforms for coding lessons

## 20. Conclusion

**Markdown + Next.js + Contentlayer + Tailwind Typography =**
A fast, flexible, and developer-friendly way to build blogs and content-driven sites.

By combining the simplicity of Markdown with the power of modern web tooling, you can:

- Focus on writing rather than fiddling with complex CMS setups
- Ship faster with static site generation
- Maintain full control over design and SEO

If you're starting fresh today:

1. Set up a Next.js project
2. Add Contentlayer for Markdown handling
3. Style it with Tailwind Typography
4. Write your first post
5. Iterate and improve over time

The barrier to entry is low, but the potential is huge. Your blog is only limited by your creativity.

Happy coding and happy writing! ✨
