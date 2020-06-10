module.exports = {
  base: '/',
  title: 'クラウド日報Nipo',
  description: '様々な報告書（トラブル報告・業務報告・チェックシート・etc...)をクラウドシステム化します。モバイル対応！集計や印刷も簡単',
  cache: true,
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  markdown: {
    anchor: { permalink: false },
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
    ['@vuepress/google-analytics', { 
      'ga': '' // UA-00000000-0
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['sitemap', {
      hostname: 'https://nipo.sndbox.jp',
      changefreq: 'weekly'
    }],
    ['img-lazy', true]
  ],
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: '更新日',
    smoothScroll: true,
    nav: [
      { text: 'お問い合わせ', link: 'https://sndbox.jp/inquery' },
      { text: 'Nipoを起動', link: 'https://nipoapp.sndbox.jp/' },
    ],
    sidebar: {
      '/manual/': [
        ['/','トップページへ'],
        {
          title: '初めての方へ',
          collapsable: true,
          sidebarDepth: 0,

          children: [
            ['/manual/quickstart', 'クイックスタートガイド']
          ]
        },
        {
          title: '日報の提出',
          children: [
            ['/manual/report/write', '日報を書く'],
            ['/manual/report/edit', '日報を修正する'],
            ['/manual/report/remove', '日報を削除する'],
          ]
        },
        {
          title: '日報を受信',
          children: [
            ['/manual/res/res', '日報を受け取る'],
            ['/manual/res/reaction', '承認・棄却・既読する'],
            ['/manual/res/comment', '日報にコメントをする'],
            ['/manual/res/search', '日報を検索する'],

          ]
        },
        {
          title: '日報を活用',
          children: [
            ['/manual/utility/pdf', '日報をPDFに変換'],
            ['/manual/utility/analyze', '日報を分析（集計）'],
          ]
        },
        {
          title: 'グループの管理',
          children: [
            ['/manual/group/about', 'グループとは'],
            ['/manual/group/plan', '無料と有料の切替え'],
            ['/manual/group/addstaff', 'スタッフを追加'],
            ['/manual/group/editstaff', 'スタッフの管理'],
            ['/manual/group/rmstaff', 'スタッフを追放'],
          ]
        },
        {
          title: '個人設定',
          children: [
            ['/manual/setting/about', '個人設定とは'],
            ['/manual/setting/notification', 'E-mail通知'],
            ['/manual/setting/box', '受信BOXの設定'],
            ['/manual/setting/edit_name', 'ユーザ名の変更'],
            ['/manual/setting/color_theme', 'カラーテーマ変更'],
            ['/manual/setting/group_name', 'グループ名変更（一覧表示のみ）'],
          ]
        },
        {
          title: 'アカウントについて',
          children: [
            ['/manual/account/make', 'アカウントの作成'],
            ['/manual/account/edit_mail', 'ログインE-mailの変更'],
            ['/manual/account/edit_pw', 'パスワードの変更'],
            ['/manual/account/revoke', 'アカウントの削除'],
          ]
        },
        {
          title: 'テンプレートについて',
          children: [
            ['/manual/template/_make', 'テンプレートを作る'],
            ['/manual/template/_edit', 'テンプレートを修正する'],
            ['/manual/template/_remove', 'テンプレートを削除'],
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
        },
        {
          title: 'カレンダー機能',
          children: [
            ['/manual/calendar/calendar', 'カレンダー'],
          ]
        },
        {
          title: 'タイムカード機能',
          children: [
            ['/manual/timecard/timecard', '初期設定'],
            ['/manual/timecard/use', '日常の利用'],
          ]
        },
      ],
      // fallback
      '/': [
        ['/', 'トップページ'],
        {
          title: '様々な使い方を紹介',
          children: [
            ['/idea/checksheet', 'チェックシートとして使う'],
            ['/idea/csv_export', '日報をエクセルで集計する'],
            ['/idea/smartphone', 'スマホで日報を書く'],
            ['/idea/tablet', 'タブレットで日報を書く'],
            ['/idea/taxi', 'タクシー日報として使う'],
            ['/idea/self', '個人用日報として使う'],
            ['/idea/field_work', '現地調査表として使う'],
          ]
        },
        {
          sidebarDepth: 0,
          title: 'マニュアル',
          path: '/manual/quickstart',
        },
        
        {
          title: 'セキュリティ',
          children: [
            ['/security/security', 'Nipoのセキュリティ対策'],
            ['/security/faq', 'セキュリティに対する質問と答え'],
            ['/security/guideline', 'クラウドシステムを安全に使う'],
            ['/security/guideline2', 'Nipoを安全に使う'],
          ]
        },
        {
          title: 'FAQ',
          children: [
            ['/faq/', 'よくある質問と答え'],
            ['/faq/truble', 'トラブルについて']
          ]
        },
        
        {
          title: 'システム要項',
          children: [
            ['/system/release-note', 'Nipoの更新履歴'],
            ['/system/version', 'バージョンの確認'],
            ['/system/require', '動作環境'],
            ['/inquery', 'お問い合わせ']
          ]
        },
        {
          title: '無料と有料の違い',
          children: [
            ['/price/', '無料と有料の違い'],
            {
              sidebarDepth: 0,
              collapsable: false,
              title: 'GOLD PLANについて',
              children: [
                ['/price/goldplan_trial', 'GOLD PLANを無料で試す'],
                ['/price/invoice', 'GOLD PLANへ【請求書払い】'],
                ['/price/invoice_continue', 'GOLDPLANの更新【請求書払い】'],
                ['/price/invoice_cancel', 'GOLD PLANの解約【請求書払い】'],
                ['/price/credit', 'GOLD PLANへ【クレカ】'],
                ['/price/credit_continue', 'GOLDPLANの更新【クレカ】'],
                ['/price/credit_cancel', 'GOLD PLANの解約【クレカ】'],
                ['/price/cancel', '解約するとどうなる？'],
              ]
            },
            {
              sidebarDepth: 0,
              collapsable: false,

              title: 'その他',
              children: [
                ['/price/limit_break', '大人数で使うときのコツ'],
                ['/price/search_unlimit', '全文検索の制限解除について'],
                ['/price/timecard', 'タイムカードのオプション（売り切り）'],
                ['/price/penalty', '代金未払い時の対応'],
              ]
            },
          ]
        },
        
        {
          sidebarDepth: 0,
          title: 'コラム一覧',
          children: [
            ['/column/csvsc', 'CSVの連結ツール'],
            ['/column/anotherapp', 'Nipo以外の日報アプリ'],
            ['/column/media', 'Nipoを掲載してくれたメディア様'],
            ['/column/charactor', '公式キャラクターについて'],
          ]
        },
        {
          title: '規約など',
          children: [
            ['/rule/agree', '利用規約'],
            ['/rule/privacy', 'プライバシーポリシー'],
            ['/rule/business-deal', '特定商取引法に基づく表記'],
          ]
        },
        {
          sidebarDepth: 0,
          title: '開発者ブログ',
          children: [
            ['/dev/auth.md', 'FirebaseのE-mail認証でアドレスが正しいことを確認する'],
            ['/dev/hhkb.md', 'HHKB Professional HYBRID Type-Sは最高のHHKB'],
          ]
        },
        {
          sidebarDepth: 0,
          title: 'お知らせ',
          children: [
            ['/news/telework', 'テレワーカーが使うテレワーク用ソフト3選'] 
          ]
        }
      ]
    },
    sidebarDepth: 0
  }
}