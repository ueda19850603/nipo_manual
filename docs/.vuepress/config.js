module.exports = {
  title: 'Hello VuePressおっぱい',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/last-updated', true],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blog', link: 'https://www.nxworld.net/' }
    ],
    sidebar: [
      '/',
      '/about/'
    ],
    sidebarDepth: 2
  }
}