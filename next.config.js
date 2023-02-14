const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

/** @type{import('next').NextConfig}*/
module.exports = {
  ...withNextra({
    i18n: {
      defaultLocale: "fr",
      locales: ["fr", "en"],
    },
  }),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  images: {
    unoptimized: true,
  },
};
