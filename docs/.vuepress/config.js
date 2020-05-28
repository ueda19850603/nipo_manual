module.exports = {
  base: '/',
  title: 'クラウド日報Nipo',
  description: 'Just playing around',
  cache: true,
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta',{ name:"keywords", content:"クラウド,日報,nipo,業務報告書"}],
    ['meta',{ name:"og:title", content:"クラウド日報Nipo"}],
    ['meta',{ name:"og:description", content:"スマホやPCから日報作成"}],
    ['meta',{ name:"og:type", content:"website"}],
    ['meta',{ name:"og:url", content:"nipo.sndbox.jp"}]
  ],
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/last-updated', true],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blog', link: 'https://www.nxworld.net/' }
    ],
    sidebar: [
      '/',
      ['/quickstart', '初めての方へ'],
      ['/about/', 'あばうとおお'],
      ['/faq/', 'よくある質問と答え'],
      ['/errors/', 'トラブルシューティング'],
      {
        title: 'Group 1',
        children: [
          '/about/', // ファイル名がREADME.mdやindex.mdの場合省略できます。
          '/about/about' // .mdを省略できます。
        ]
      }
    ],
    sidebarDepth: 1
  }
}