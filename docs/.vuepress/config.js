module.exports = {
  title: 'Hello VuePressおっぱい',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
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