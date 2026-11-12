import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx"
});

export default withNextra({
  // Folders have no page of their own; the zerio-radio README and console
  // messages once linked here.
  redirects: async () => [
    {
      source: "/radio/v3",
      destination: "/radio/v3/installationguide",
      permanent: false
    }
  ]
});
