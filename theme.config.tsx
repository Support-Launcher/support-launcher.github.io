import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Launcher Tutorials</span>,
  project: {
    link: 'https://github.com/bricklou/launcher-tutorials',
  },
  chat: {
    link: 'https://discord.gg/SAy4bVQgHD',
  },
  docsRepositoryBase: 'https://github.com/bricklou/launcher-tutorials/blob/main',
  footer: {
    text: <span>Powered with <a href="https://nextra.site/">Nextra</a></span>,
  },
  banner: {
    key: 'alpha',
    text : <p>⚠ This website is currently WIP! Some content may be missing. ⚠</p>,
  }
}

export default config
