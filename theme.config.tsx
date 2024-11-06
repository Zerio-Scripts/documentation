import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  darkMode: true,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s`
    };
  },
  project: {
    link: "https://github.com/Zerio-Scripts/documentation"
  },
  chat: {
    link: "http://discord.zerio-scripts.com"
  },
  docsRepositoryBase: "https://github.com/Zerio-Scripts/documentation",
  footer: {
    text: "Zerip-Scripts Documentation"
  }
};

export default config;
