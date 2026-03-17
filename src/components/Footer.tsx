import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border/20 py-4 bg-background-1">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between max-w-screen-xl mx-auto">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-1/80">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="/writings" className="hover:text-accent transition-colors">
            Writings
          </Link>
          <Link href="/reading" className="hover:text-accent transition-colors">
            Reading
          </Link>
          <span className="hidden md:inline text-border">•</span>
          <span>©{new Date().getFullYear()}, Yash Harshal Barve</span>
        </div>

        <div className="flex items-center gap-3 text-text-1/80">
          <a
            href="https://x.com/yhbarve"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my X profile"
            className="hover:text-accent transition-colors p-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.90em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" />
            </svg>
          </a>
          <a
            href="https://github.com/yhbarve"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my GitHub profile"
            className="hover:text-accent transition-colors p-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </svg>
          </a>
          <a
            href="mailto:yhbarve@uwaterloo.ca"
            target="_blank"
            rel="noreferrer"
            aria-label="Send me an email"
            className="hover:text-accent transition-colors p-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </g>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/yhbarve/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="hover:text-accent transition-colors p-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
            </svg>
          </a>
          <a
            href="https://leetcode.com/u/yhbarve/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit my LeetCode profile"
            className="hover:text-accent transition-colors p-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m15.42 16.94-2.25 2.17a2.1 2.1 0 0 1-1.52.56 2.1 2.1 0 0 1-1.52-.56l-3.61-3.63a2.18 2.18 0 0 1-.58-1.55 2.07 2.07 0 0 1 .58-1.52l3.6-3.65a2.1 2.1 0 0 1 1.53-.54 2.08 2.08 0 0 1 1.52.55l2.25 2.17A1.14 1.14 0 0 0 17 9.33l-2.17-2.2a4.24 4.24 0 0 0-2-1.12l2.06-2.08a1.15 1.15 0 0 0-1.62-1.62l-8.43 8.42a4.48 4.48 0 0 0-1.24 3.2 4.57 4.57 0 0 0 1.24 3.23l3.63 3.63A4.38 4.38 0 0 0 11.66 22a4.45 4.45 0 0 0 3.2-1.25L17 18.56a1.14 1.14 0 0 0-1.61-1.62z"></path>
              <path d="M19.34 12.84h-8.45a1.12 1.12 0 0 0 0 2.24h8.45a1.12 1.12 0 0 0 0-2.24"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

