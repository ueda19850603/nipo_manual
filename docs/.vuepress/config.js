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
    config: md => {
      md.use(require('markdown-it-video'))
    }
  },
  head: [
    ['meta',{ name:"keywords", content:"クラウド,日報,nipo,業務報告書"}],
    ['meta',{ name:"og:title", content:"クラウド日報Nipo"}],
    ['meta',{ name:"og:description", content:"スマホやPCから日報作成"}],
    ['meta',{ name:"og:type", content:"website"}],
    ['meta',{ name:"og:url", content:"https://nipo.sndbox.jp"}],
    ['meta',{ name:"og:image", content: '/logo.png' }],
    ['meta', { name: 'viewport', content: 'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#027be3' }],

    ['link', { rel: 'icon', type: "image/png", sizes: "128x128", href: "/icons/favicon-128x128.png" }],
    ['link', { rel: 'icon', type: "image/png", sizes: "96x96", href: "/icons/favicon-96x96.png" }],
    ['link', { rel: 'icon', type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" }],
    ['link', { rel: 'icon', type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" }],
    ['link', { rel: 'icon', type: "image/ico", href: "/icons/favicon.ico" }],

    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: "152x152", href: '/icons/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: "167x167", href: '/icons/apple-icon-167x167.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: "180x180", href: '/icons/apple-icon-180x180.png' }],

    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)', href: "/icons/apple-launch-828x1792.png" }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)', href: "/icons/apple-launch-1125x2436.png" }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)', href: "/icons/apple-launch-1242x2688.png" }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)', href: "/icons/apple-launch-750x1334.png" }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)', href: "/icons/apple-launch-1242x2208.png" }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)', href: "/icons/apple-launch-640x1136.png" }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)', href: "/icons/apple-launch-1536x2048.png" }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)', href: "/icons/apple-launch-1668x2224.png" }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)', href: "/icons/apple-launch-1668x2388.png" }],
    ['link', { rel: 'apple-touch-startup-image', media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)', href: "/icons/apple-launch-2048x2732.png" }],

    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'クラウド日報Nipo公式' }],

    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#027be3' }],

    ['meta', { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'msapplication-tap-highlight', content: 'no' }],
  ],
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "サイトがバックグラウンドで更新完了しました",
        buttonText: "再読み込み"
      }
    }],
    ['@vuepress/back-to-top', true],
    ['@vuepress/last-updated', true],
    ['@vuepress/medium-zoom', {}],
    ['@vuepress/google-analytics', { 'ga': 'UA-59474094-6' }],
    ['@vuepress/search', { searchMaxSuggestions: 10 }],
    ['sitemap', {
      hostname: 'https://nipo.sndbox.jp',
      changefreq: 'weekly'
    }],
    ['img-lazy', true],
    [
      'vuepress-plugin-canonical',
      {
        baseURL: 'https://nipo.sndbox.jp', // base url for your canonical link, optional, default: ''
        stripExtension: false // strip '.html' , optional, default: false
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../image/icatch'
      }
    }
  },
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: '更新日',
    smoothScroll: false,
    nav: [
      { text: 'お問い合わせ', link: 'https://sndbox.jp/inquery' },
      { text: 'Nipoを起動', link: 'https://nipoapp.sndbox.jp/' },
    ],
    sidebar: {
      '/manual/': [
        ['/','トップページへ'],
        ['/idea/checksheet','様々な使い方を紹介'],
        {
          title: '初めての方へ',
          collapsable: true,
          sidebarDepth: 0,

          children: [
            ['/manual/quickstart', 'クイックスタートガイド']
          ]
        },
        {
          title: '日報の作成と削除',
          children: [
            ['/manual/report/write', '日報本文を書く'],
            ['/manual/report/dist', '日報の提出先を決めて提出'],
            ['/manual/report/draft', '下書きと自動保存'],
            ['/manual/report/edit', '日報を修正する'],
            ['/manual/report/remove', '日報を削除する'],
            ['/manual/report/remove_all', '日報を一括削除する'],
          ]
        },
        {
          title: '日報を受信',
          children: [
            ['/manual/res/res', '日報を受け取る'],
            ['/manual/res/reaction', '承認・棄却・既読する'],
            ['/manual/res/tags', '日報にタグを付ける'],
            ['/manual/res/comment', '日報にコメントをする'],
            ['/manual/res/search', '日報を検索する'],

          ]
        },
        {
          title: '日報を活用',
          children: [
            ['/manual/utility/pdf', '日報をPDFに変換する'],
            ['/manual/utility/pdf_setting', 'PDF変換の設定'],
            ['/manual/utility/pdf_multi', '複数の日報を一括でPDF'],
            ['/manual/utility/analyze', '日報を分析（集計）'],
          ]
        },
        {
          title: 'グループの管理',
          children: [
            ['/manual/group/about', 'グループとは'],
            ['/manual/group/mode', 'グループのモード'],
            ['/manual/group/addstaff', 'スタッフを新規追加'],
            ['/manual/group/invite', '既存のスタッフを招待'],
            ['/manual/group/editstaff', 'スタッフの管理'],
            ['/manual/group/rmstaff', 'スタッフを追放'],
            ['/manual/group/plan', 'グループのプラン設定'],
            ['/manual/group/leave', 'グループから脱退する'],
            ['/manual/group/delete', 'グループの削除'],
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
            ['/manual/group/leave', 'グループから脱退する'],
          ]
        },
        {
          title: 'アカウントについて',
          children: [
            ['/manual/account/make', 'アカウントの作成'],
            ['/manual/account/anonymouse', '匿名アカウントで使う'],
            ['/manual/account/edit_mail', 'ログインE-mailの変更'],
            ['/manual/account/edit_pw', 'パスワードの変更'],
            ['/manual/account/reset_pw', 'パスワードを忘れた方'],
            ['/manual/account/revoke', 'アカウントの削除'],
          ]
        },
        {
          title: 'テンプレートについて',
          children: [
            ['/manual/template/_about', 'テンプレートとは？'],
            ['/manual/template/_make', 'テンプレートを作る'],
            ['/manual/template/_import', '他のグループから取り込み'],
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
            ['/manual/template/separator', '【パーツ】区切り'],
            ['/manual/template/table', '【パーツ】表'],
            ['/manual/template/guidearea', 'ガイドエリアについて'],
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
        ['/security/security','セキュリティ'],
        ['/faq/','FAQ'],
        ['/system/release-note','システム要項'],
        ['/price/','無料と有料の違い'],
        ['/column/csvsc','コラム'],
        ['/rule/agree','規約など'],
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
          ]
        },
        {
          title: '料金等について',
          children: [
            {
              sidebarDepth: 0,
              collapsable: false,
              title: '無料プランとGOLDプラン',
              children: [
                ['/price/', '無料と有料の違い'],
              ]
            },
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
            ['/rule/business-deal', '運営会社（特定商取引法表記）'],
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
            '/news/renew',
            ['/news/telework', 'テレワーカーが使うテレワーク用ソフト3選'] 
          ]
        }
      ]
    },
    sidebarDepth: 0
  }
}