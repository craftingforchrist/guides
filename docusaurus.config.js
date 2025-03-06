import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Knowledgebase",
  tagline: "The site for community questions, answer and guides.",
  favicon: "img/favicon.ico",
  url: "https://kb.craftingforchrist.net",
  baseUrl: "/",
  organizationName: "craftingforchrist",
  projectName: "guides",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/craftingforchrist/guides/tree/master/packages/create-docusaurus/templates/shared/",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/craftingforchrist/guides/tree/master/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Crafting For Christ Knowledgebase",
        logo: {
          alt: "Crafting For Christ Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "kbSidebar",
            position: "left",
            label: "Knowledgebase",
          },
          {
            href: "/safeserver",
            label: "Safe Server",
            position: "left",
          },
          {
            href: "https://github.com/craftingforchrist",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://github.com/craftingforchrist/guides",
            label: "KB Source",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://craftingforchrist.net/discord",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/craftingforchrist",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Crafting For Christ - Knowledgebase. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;