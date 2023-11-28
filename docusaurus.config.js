// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Zerio-Scripts Documentation",
  tagline: "Quality products for an afforadable price",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.zerio-scripts.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Zerio-Scripts", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: "dark",
      },
      image: "img/social-card.png",
      navbar: {
        title: "Zerio-Scripts",
        logo: {
          alt: "Zerio Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "start/introduction",
            position: "left",
            label: "Getting Started",
          },
          {
            type: "doc",
            docId: "common/introduction",
            position: "left",
            label: "Common Issues",
          },
          {
            type: "doc",
            docId: "radio/introduction",
            position: "left",
            label: "Radio",
          },
          {
            type: "doc",
            docId: "invoice/introduction",
            position: "left",
            label: "Invoice",
          },
          {
            type: "doc",
            docId: "garage/introduction",
            position: "left",
            label: "Garage",
          },
          {
            type: "doc",
            docId: "multijobs/introduction",
            position: "left",
            label: "Multijobs",
          },
          {
            type: "doc",
            docId: "bossmenu/introduction",
            position: "left",
            label: "Bossmenu",
          },
          {
            type: "doc",
            docId: "crafting/introduction",
            position: "left",
            label: "Crafting",
          },
          {
            type: "doc",
            docId: "dispatch/introduction",
            position: "left",
            label: "Dispatch",
          },
          {
            type: "doc",
            docId: "cardealer/introduction",
            position: "left",
            label: "Cardealer",
          },
          {
            type: "doc",
            docId: "characters/introduction",
            position: "left",
            label: "Multi-Char",
          },
          {
            href: "https://github.com/Zerio-Scripts",
            label: "GitHub",
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
                label: "Github",
                href: "https://github.com/Zerio-Scripts",
              },
              {
                label: "Discord",
                href: "http://discord.zerio-scripts.com",
              },
              {
                label: "Youtube",
                href: "https://youtube.com/Zerio",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Store",
                to: "https://store.zerio-scripts.com",
              },
              {
                label: "Web Agency",
                href: "https://zerio.se",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zerio AB.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["lua", "sql", "json", "javascript"],
      },
    }),
};

module.exports = config;
