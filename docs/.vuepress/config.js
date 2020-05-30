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
            ['/price/invoice', '請求書払い'],
            ['/price/credit', 'クレジットカード'],
          ]
        },
        {
          title: 'GOLD PLANを更新・変更する',
          children: [
            ['/price/credit_continue', 'GOLDPLANの更新(クレカ)'],
            ['/price/invoice_continue', 'GOLDPLANの更新(請求書)'],
          ]
        },
        {
          title: 'GOLD PLANを辞める',
          children: [
            ['/price/credit_cancel', 'GOLD PLANの解約(クレカ)'],
            ['/price/invoice_cancel', 'GOLD PLANの解約(請求書)'],
            ['/price/cancel', '解約後の影響について'],
          ]
        },
        {
          title: 'その他',
          children: [
            ['/price/goldplan_trial', 'GOLD PLANの試用'],
            ['/price/limit_break', '大人数で使うときのコツ'],
            ['/price/search_unlimit', '全文検索の制限解除について'],
            ['/price/timecard', 'タイムカードのオプション（売り切り）'],
            ['/price/penalty', '代金未払い時の対応（本当はこんな記事書きたくありません）'],

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
        },
        {
          title: 'テンプレートについて',
          children: [
            ['/manual/template/text', '【パーツ】1行テキスト'],
            ['/manual/template/zip', '【パーツ】郵便番号'],
            ['/manual/template/math', '【パーツ】数値'],
            ['/manual/template/textarea', '【パーツ】複数行テキスト'],
            ['/manual/template/date', '【パーツ】日付'],
            ['/manual/template/time', '【パーツ】時刻'],
            ['/manual/template/timecard', '【パーツ】タイムカード'],
            ['/manual/template/select1', '【パーツ】選択肢（単答)'],
            ['/manual/template/select2', '【パーツ】選択肢（複答）'],
            ['/manual/template/dictionaly', '【パーツ】語録'],
            ['/manual/template/checkbox', '【パーツ】チェックボックス'],
            ['/manual/template/rate', '【パーツ】レート'],
            ['/manual/template/slide', '【パーツ】スライダー'],
            ['/manual/template/range', '【パーツ】範囲'],
            ['/manual/template/pict', '【パーツ】写真'],
            ['/manual/template/sign', '【パーツ】署名'],
            ['/manual/template/canvas', '【パーツ】手書き'],
            ['/manual/template/table', '【パーツ】表'],
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