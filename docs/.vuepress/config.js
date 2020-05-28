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
      { text: '操作ガイド', link: '/manual/quickstart' },
      { text: 'FAQ', link: '/faq/' }
    ],
    sidebar: {
      '/about/': [
        {
          title: 'taitoru',
          children: [
            '/about/'
          ]
        }
      ],
      '/faq/': [
        {
          title: 'FAQタイトル',
          children: [
            ['/faq/', 'よくある質問と答え edit'],
          ]
        },
        {
          title: 'トラブルシューティング',
          children: [
            ['/faq/truble', 'トラブルについて']
          ]
        }
      ],
      '/manual/': [
        {
          title: '初めての方へ',
          children: [
            ['/manual/quickstart', 'クイックスタートガイド']
          ]
        },
        {
          title: '一般操作ガイド',
          children: [
            ['/manual/quickstart', 'クイックスタートガイド']
          ]
        }
      ]
    },

    sidebarDepth: 1
  }
}