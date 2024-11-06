import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  darkMode: true,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  project: {
    link: "https://github.com/Zerio-Scripts/documentation"
  },
  chat: {
    link: "http://discord.zerio-scripts.com"
  },
  docsRepositoryBase: "https://github.com/Zerio-Scripts/documentation",
  footer: {
    content: <span>Zerip-Scripts Documentation</span>
  }
};

export default config;
