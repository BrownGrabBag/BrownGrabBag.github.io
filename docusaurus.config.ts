import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Grab Bag",
  tagline: "Some creative thing idk yall are the writers",
  favicon: "img/favicon.ico",

  url: "https://browngrabbag.github.io",
  baseUrl: "/",
  organizationName: "BrownGrabBag",
  projectName: "BrownGrabBag.github.io",
  deploymentBranch: "site",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Grab Bag",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/blog", label: "Articles", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "About",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About Us",
          items: [
            {
              label: "Grab Bag",
              to: "/docs/about",
            },
            //{
            //  label: "E-Board",
            //  to: "/docs/E-Board",
            //},
            //{
            //  label: "Writers",
            //  to: "/docs/Writers",
            //},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Grab Bag. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
