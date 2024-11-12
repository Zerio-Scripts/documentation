import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

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
      <img src="/logo.png" width="32" height="32" />
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Zerio-Scripts</span>
    </>
  ),
  head: () => {
    const { asPath } = useRouter();
    const { title: pageTitle } = useConfig();

    return (
      <>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta
          property="og:url"
          content={`https://docs.zerio-scripts.com${asPath}`}
        />
        <meta
          property="og:title"
          content={`${pageTitle} | Zerio-Scripts Documentation`}
        />
        <meta
          property="og:description"
          content={"Documentation for Zerio-Scripts products"}
        />
        <title>{`${pageTitle} | Zerio-Scripts Documentation`}</title>
      </>
    );
  },
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
