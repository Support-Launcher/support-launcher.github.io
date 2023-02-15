import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Launcher Tutorials</span>,
  project: {
    link: "https://github.com/bricklou/launcher-tutorials",
  },
  chat: {
    link: "https://discord.gg/SAy4bVQgHD",
  },
  docsRepositoryBase:
    "https://github.com/bricklou/launcher-tutorials/blob/main",
  footer: {
    text: (
      <span>
        Propulsé avec <a href="https://nextra.site/">Nextra</a>
      </span>
    ),
  },
  banner: {
    key: "alpha",
    dismissible: false,
    text: (
      <p>
        ⚠ Ce site est actuellement en cours d'écriture ! Certains contenus
        peuvent être manquants. ⚠
      </p>
    ),
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content={frontMatter.title || "Launcher Tutorials"}
        />
        <meta property="og:url" content={`https://my-app.com${asPath}`} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Tutoriels pour créer son propre Launcher Minecraft"
          }
        />
      </>
    );
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter();

    return {
      titleTemplate: "%s - Launcher Tutorials",
      description: "Tutoriels pour créer son propre Launcher Minecraft",
      openGraph: {
        title: "Launcher Tutorials",
        description: "Tutoriels pour créer son propre Launcher Minecraft",
        url: process.env.NEXT_PUBLIC_SITE_URL + asPath,
      },
    };
  },
};

export default config;
