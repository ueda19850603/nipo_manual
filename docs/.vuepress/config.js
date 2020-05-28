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
      { text: 'セキュリティ', link: '/security/' },
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
      '/security/': [
        {
          title: 'セキュリティについて',
          path: '/security/'
        },
        {
          title: 'Nipoのセキュリティ対策',
          children: [
            ['/security/security', 'セキュリティ対策']
          ]
        },
        {
          title: 'セキュリティFAQ',
          children: [
            ['/security/faq', 'セキュリティに対するよくある質問と答え'],
            ['/security/guideline', 'セキュリティガイドライン']
          ]
        },
        {
          title: 'Nipoを安全に使うために',
          children: [
            ['/security/guideline', 'クラウドシステムを安全に使う'],
            ['/security/guideline2', 'Nipoを安全に使う'],
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