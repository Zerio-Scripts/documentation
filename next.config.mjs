import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx"
});

export default withNextra({
  redirects: async () => [
    // Folders have no page of their own; the zerio-radio README and console
    // messages once linked to /radio/v3.
    {
      source: "/radio/v3",
      destination: "/radio/installationguide",
      permanent: false
    },
    {
      source: "/radio",
      destination: "/radio/description",
      permanent: false
    },
    {
      source: "/radio/v2",
      destination: "/radio/v2/description",
      permanent: false
    },
    // The V3 pages lived under /radio/v3 until V3 became the default. Released
    // builds, the changelog and the V2 update notice still link there.
    {
      source: "/radio/v3/:path*",
      destination: "/radio/:path*",
      permanent: true
    }
  ]
});
