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
      { text: '有料と無料の違い', link: '/price/' },
      { text: '操作ガイド', link: '/manual/quickstart' },
      { text: 'セキュリティ', link: '/security/' },
      { text: '規約等', link: '/rule/' },
      { text: 'FAQ', link: '/faq/' }
    ],
    sidebar: {
      '/price/': [
        {
          title: '無料と有料の違い',
          children: [
            ['', '費用トップ']
          ]
        },
        {
          title: 'GOLD PLANに加入する',
          children: [
            ['/price/invoice', '請求書払いでGOLD PLANに加入する'],
            ['/price/credit', 'クレジットカードでGOLD PLANに加入する'],
          ]
        },
        {
          title: 'GOLD PLANを更新・変更する',
          children: [
            ['/price/invoice', '請求書払いでGOLD PLANに加入する'],
          ]
        },
        {
          title: 'GOLD PLANを辞める',
          children: [
            ['/price/invoice', '請求書払いでGOLD PLANに加入する'],
          ]
        }
      ],
      '/about/': [
        {
          title: 'taitoru',
          children: [
            ['/about/about', 'あばうと']
          ]
        }
      ],
      '/rule/': [
        {
          title: 'おやくそくごと',
          children: [
            ['/rule/agree', '利用規約'],
            ['/rule/privacy', 'プライバシーポリシー'],
            ['/rule/business-deal', '特定商取引法に基づく表記'],
          ]
        }
      ],
      '/security/': [
        {
          title: 'セキュリティについて',
          children: [
            ['/security/', 'readme'],
            ['/security/security', 'Nipoのセキュリティ対策'],
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
      // fallback
      '/': [
        '/'
      ]
    },


    sidebarDepth: 1
  }
}