import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  darkMode: true,
  head: function useHead() {
    const config = useConfig<{ description?: string; image?: string }>();
    const description =
      config.frontMatter.description ||
      "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.";
    const image =
      config.frontMatter.image ||
      "https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg";
    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={image} />
        <meta name="og:title" content={`${config.title} – SWR`} />
        <meta name="og:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="SWR" />
      </>
    );
  },
  i18n: [
    {
      locale: "en-US",
      text: "English"
    }
  ],
  logo: function Logo() {
    return (
      <>
        {/* <LogoImg className="h-10" /> */}
        <span className="hidden select-none font-extrabold ltr:ml-2 rtl:mr-2 md:inline">
          Zerio-Scripts
        </span>
      </>
    );
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s`
    };
  },
  nextThemes: {
    defaultTheme: "dark"
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
