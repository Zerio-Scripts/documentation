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
  logo: (
    <>
      <img src="/static/logo.png" width="32" height="32" />
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Zerio-Scripts</span>
    </>
  ),
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a
          href="https://store.zerio-scripts.com"
          target="_blank"
          rel="noreferrer"
        >
          Zerio-Scripts
        </a>
        .
      </span>
    )
  }
};

export default config;
