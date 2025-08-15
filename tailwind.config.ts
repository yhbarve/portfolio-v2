import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: {
          1: 'hsl(var(--background-01))',
          2: 'hsl(var(--background-02))',
          3: 'hsl(var(--background-03))',
          default: 'hsl(var(--background-default))',
        },
        foreground:{
          default: 'hsl(var(--foreground-default))',
        },
        border: {
          default: 'hsl(var(--border-default))',
        },
        name: {
          foreground: 'hsl(var(--name-foreground))',
        },
        role: {
          foreground: 'hsl(var(--role-foreground))',
        },
        information: {
          foreground: 'hsl(var(--information-foreground))',
        },
        navigation: {
          link: 'hsl(var(--navigation-link-foreground))',
        },
        socials: {
          foreground: 'hsl(var(--socials-foreground))',
          hoverBg: 'hsl(var(--socials-hover-background))',
        },
        picker: {
          background: 'hsl(var(--picker-background))',
          hoverBackground: 'hsl(var(--picker-hover-backround))',
          text: 'hsl(var(--picker-text-foreground))',
          border: 'hsl(var(--picker-border))',
        },
        trademark: {
          foreground: 'hsl(var(--trademark-foreground))',
        },
        card: {
          foreground: 'hsl(var(--card-foreground))',
          hoverForeground: 'hsl(var(--card-hover-foreground))',
          background: 'hsl(var(--card-background))',
          hoverBackground: 'hsl(var(--card-hover-background))',
          border: 'hsl(var(--card-border))',
          hoverBorder: 'hsl(var(--card-hover-border))',
          skillsForeground: 'hsl(var(--card-skills-foreground))',
          skillsBackground: 'hsl(var(--card-skills-background))',
          skillsBorder: 'hsl(var(--card-skills-border))',
          imageBorder: 'hsl(var(--card-image-border))',
          otherHoverForeground: 'hsl(var(--card-other-hover-foreground))',
        },
        section: {
          header: 'hsl(var(--section-header-foreground))',
        },
        linkToPage: {
          foreground: 'hsl(var(--link-to-page-foreground))',
          buttonBackground: 'hsl(var(--link-to-page-button-background))',
          buttonForeground: 'hsl(var(--link-to-page-button-foreground))',
        },
        page: {
          nameForeground: 'hsl(var(--page-name-foreground))',
          titleForeground: 'hsl(var(--page-title-foreground))',
          headerForeground: 'hsl(var(--page-header-foreground))',
          headerBorder: 'hsl(var(--page-header-border))',
          itemBackground: 'hsl(var(--page-item-background))',
          itemHoverBackground: 'hsl(var(--page-item-hover-background))',
          itemBorder: 'hsl(var(--page-item-border))',
          itemHoverBorder: 'hsl(var(--page-item-hover-border))',
          itemForeground: 'hsl(var(--page-item-foreground))',
          itemHoverForeground: 'hsl(var(--page-item-hover-foreground))',
          itemSkillsForeground: 'hsl(var(--page-item-skills-foreground))',
          itemSkillsBackground: 'hsl(var(--page-item-skills-background))',
          itemSkillsBorder: 'hsl(var(--page-item-skills-border))',
          itemLinkHoverBackground: 'hsl(var(--page-item-link-hover-background))',
          itemOtherHoverForeground: 'hsl(var(--page-item-other-hover-foreground))',
        },
        blog: {
          titleForeground: 'hsl(var(--blog-title-foreground))',
          titleBackground: 'hsl(var(--blog-title-background))',
          titleBorder: 'hsl(var(--blog-title-border))',
          titleDateForeground: 'hsl(var(--blog-title-date-foreground))',
          bodyTextForeground: 'hsl(var(--blog-body-text-foreground))',
          bodyHeadingsForeground: 'hsl(var(--blog-body-headings-foreground))',
          summaryForeground: 'hsl(var(--blog-summary-foreground))',
          summaryBorder: 'hsl(var(--blog-summary-border))',
        },
        navButton: {
          background: 'hsl(var(--nav-button-background))',
          hoverBackground: 'hsl(var(--nav-button-hover-background))',
          border: 'hsl(var(--nav-button-border))',
          iconFill: 'hsl(var(--nav-button-icon-fill))',
        },
        navModal: {
          background: 'hsl(var(--nav-modal-background))',
          border: 'hsl(var(--nav-modal-border))',
          headerForeground: 'hsl(var(--nav-modal-header-foreground))',
          headerCrossHoverBackground: 'hsl(var(--nav-modal-header-cross-hover-bg))',
          headerBorder: 'hsl(var(--nav-modal-header-border))',
          itemBackground: 'hsl(var(--nav-modal-item-background))',
          itemForeground: 'hsl(var(--nav-modal-item-foreground))',
          itemHoverBackground: 'hsl(var(--nav-modal-item-hover-background))',
          itemHoverForeground: 'hsl(var(--nav-modal-item-hover-foreground))',
          itemBorder: 'hsl(var(--nav-modal-item-border))',
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
} satisfies Config

export default config