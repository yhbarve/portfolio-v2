// next.config.mjs
import path from "node:path"
import { fileURLToPath } from "node:url"

import { withContentlayer } from "next-contentlayer2"

const projectRoot = path.dirname(fileURLToPath(import.meta.url))

export default withContentlayer({
  experimental: { mdxRs: true }, // fine even if we're starting with .md
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "lh4.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "lh5.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "lh6.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "yt3.ggpht.com", pathname: "/**" },
      { protocol: "https", hostname: "yt3.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/**" },
    ],
  },
  // Next 16 defaults to Turbopack; contentlayer uses webpack. Pin the app root when multiple
  // lockfiles exist (e.g. under $HOME) so Turbopack doesn’t pick the wrong workspace.
  turbopack: {
    root: projectRoot,
  },
  // axios → proxy-from-env uses deprecated `url.parse`; shim uses WHATWG URL (see src/lib/shims).
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "proxy-from-env": path.join(projectRoot, "src/lib/shims/proxy-from-env.cjs"),
      };
    }
    return config;
  },
})
