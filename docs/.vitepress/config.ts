import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SkyDesk",
  description: "SkyDesk Consulting Ltd.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    footer: {
      copyright: '© 2023 SkyDesk All Rights Reserved'
    }
  },
  base: "https://skydesk.ca"
})
