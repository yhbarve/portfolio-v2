// next.config.mjs
import { withContentlayer } from "next-contentlayer2"

export default withContentlayer({
  experimental: { mdxRs: true }, // fine even if we're starting with .md
})
