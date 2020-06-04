(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{409:function(t,a,r){"use strict";r.r(a);var s=r(25),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("img",{attrs:{src:"/timecard/icatch.png",alt:"郵便番号から住所を入力"}})]),t._v(" "),r("h1",{attrs:{id:"タイムカード機能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#タイムカード機能"}},[t._v("#")]),t._v(" タイムカード機能"),r("Badge",{attrs:{text:"一部有料",type:"warning"}})],1),t._v(" "),r("h2",{attrs:{id:"タイムカード（勤怠管理）機能を使う"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#タイムカード（勤怠管理）機能を使う"}},[t._v("#")]),t._v(" タイムカード（勤怠管理）機能を使う")]),t._v(" "),r("p",[t._v("タイムカードとは、従業員の労働時間を把握するための打刻システムです。実際に紙に印字するものもあれば、バーコードで入力するタイプのものや、キーボードで直接入力するものなど様々なタイプがあります。"),r("br"),t._v("\n入力の方式は様々ですが、タイムカードの目的は「従業員の労働時間を把握する」ということです。タイムカードに記載された時間をもとに労働時間が計算されます。"),r("br"),t._v("\n計算も、社労士へ依頼する場合もあれば、自社内で計算する場合もあるでしょう。"),r("br"),t._v("\nDrecoという勤怠管理システムのサービスが終了を迎えるにあたり、「Nipoでタイムカード管理機能をつけてほしい」というリクエストをいただき、この度Nipoでタイムカード機能が実装されました。"),r("br"),t._v("\nDrecoの全ての機能を実装しているわけでは有りませんが、簡易版の勤怠管理機能があれば十分というのであれば、是非ご検討ください。")]),t._v(" "),r("h3",{attrs:{id:"タイムカード機能を有効化する"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#タイムカード機能を有効化する"}},[t._v("#")]),t._v(" タイムカード機能を有効化する")]),t._v(" "),r("p",[t._v("初期状態ではタイムカード機能が無効になっています。タイムカード機能を有効化してください"),r("br"),t._v("\n全体設定から「タイムカード」のスイッチをONにするだけで有効化されます\n"),r("img",{attrs:{src:"/timecard/t1.png",alt:"タイムカード機能を有効化する"}})]),t._v(" "),r("h3",{attrs:{id:"テンプレートにタイムカードパーツを埋め込む"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#テンプレートにタイムカードパーツを埋め込む"}},[t._v("#")]),t._v(" テンプレートにタイムカードパーツを埋め込む")]),t._v(" "),r("p",[t._v("Nipoでタイムカードを利用するには、日報テンプレートに"),r("a",{attrs:{href:"/manual/template/timecard"}},[t._v("タイムカードパーツ")]),t._v("を追加します。"),r("br"),t._v("\n複数のテンプレートを使い分けている場合は、１日１回以上使用されるテンプレートにタイムカードパーツを付けることをおすすめします。"),r("br"),t._v("\n例えば「月報」と「日報」があれば、この場合「日報」にタイムカードパーツを付けてください。\n"),r("img",{attrs:{src:"/timecard/t2.png",alt:"タイムカード機能を有効化する"}})]),t._v(" "),r("h3",{attrs:{id:"タイムカードの管理者を決める"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#タイムカードの管理者を決める"}},[t._v("#")]),t._v(" タイムカードの管理者を決める")]),t._v(" "),r("p",[t._v("誰でも自由に全員のタイムカードを操作できる状況はあまり望ましくありません。"),r("br"),t._v("\nNipoでは一般の方は自分のタイムカードに対してのみ、「作成」「閲覧」「修正」が可能です。"),r("br"),t._v("\nそれとは別に、全員のタイムカードを見たり修正したりできる管理者が必要になるはずです。（グループの管理者とは別です）"),r("br"),t._v("\nタイムカードの管理者は「全体設定」のメンバー管理から設定できます\n"),r("img",{attrs:{src:"/timecard/t4.png",alt:"タイムカード機能を有効化する"}})]),t._v(" "),r("p",[t._v("タイムカード管理者は、以下のことができるようになります")]),t._v(" "),r("ul",[r("li",[t._v("出勤退勤時間の丸め（端数処理）など、設定に関する全て")]),t._v(" "),r("li",[t._v("自分以外のタイムカード閲覧（通常は自分以外のタイムカードは閲覧できません）")]),t._v(" "),r("li",[t._v("タイムカードの削除")])]),t._v(" "),r("h2",{attrs:{id:"タイムカードに関する丸めなどの設定を行う"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#タイムカードに関する丸めなどの設定を行う"}},[t._v("#")]),t._v(" タイムカードに関する丸めなどの設定を行う"),r("Badge",{attrs:{text:"応用編",type:"warning"}})],1),t._v(" "),r("p",[t._v("此処から先は応用編です。いつでも変更可能なので、少し慣れてからでも問題ありません。"),r("br"),t._v("\n出勤時間の丸め、退勤時間の丸めや、超過労働の基準時間を設定できます。この設定は前述した「タイムカード管理」に設定されたスタッフしか操作できません。\n"),r("img",{attrs:{src:"/timecard/t5.png",alt:"タイムカード機能を有効化する"}}),t._v("\n設定はオートセーブです。変更すると即時保存され、集計結果は自動で再計算されます。")]),t._v(" "),r("h3",{attrs:{id:"各日で端折りについて"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#各日で端折りについて"}},[t._v("#")]),t._v(" 各日で端折りについて")]),t._v(" "),r("p",[t._v("指定した時間単位でタイムカードの値を丸めることができます。出勤時と退勤時の２種類でそれぞれ設定可能です。\n出勤時の端折りでは、指定した刻み時間まで出勤時間が遅れます。\n例えば８時４１分にタイムカードが押されたとして、出勤時の切り上げを１０分とした場合、集計上の値は８時５０分となります（９分切り上げられる）\n"),r("img",{attrs:{src:"/timecard/t6.png",alt:"タイムカード機能を有効化する"}}),t._v("\n退勤時の端折りでは、指定した刻み時間まで退勤時間が早まります。"),r("br"),t._v("\n例えば１８時１３分にタイムカードが押されたとして、退勤時の切り下げを１０分とした場合、集計上の値は１８時１０分となります（３分切り捨てられる）")]),t._v(" "),r("h3",{attrs:{id:"合計の端折りについて"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#合計の端折りについて"}},[t._v("#")]),t._v(" 合計の端折りについて")]),t._v(" "),r("p",[t._v("集計した期間の合計値に対して、切り下げを行います。例えば３月２１日〜４月２０日までの合計労働時間が１８１時間５１分で、切り下げを３０分とした場合、集計上の値は１８１時間３０分となります。（２１分の切り捨て）")]),t._v(" "),r("h3",{attrs:{id:"１日あたりの超過時間"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#１日あたりの超過時間"}},[t._v("#")]),t._v(" １日あたりの超過時間")]),t._v(" "),r("p",[t._v("１日にこの基準を超えると超過労働となり、集計上の「超過」に値が蓄積されます。単位は「分」となり、初期値は４８０分です。（８時間＝４８０分）\n"),r("img",{attrs:{src:"/timecard/t7.png",alt:"タイムカード機能を有効化する"}})]),t._v(" "),r("h3",{attrs:{id:"締日の設定"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#締日の設定"}},[t._v("#")]),t._v(" 締日の設定"),r("Badge",{attrs:{text:"要アンロック",type:"warning"}})],1),t._v(" "),r("p",[t._v("この機能はアンロックが必要です\n指定した日付を締日として、集計期間を自動セットします。初期値は月末です。\n「５日・１０日・１５日・２０日・２５日・月末」から選択できます。例えば２５日を選択すると、当月の２６日〜翌月の２５日までの期間で集計が行われます")]),t._v(" "),r("p",[r("img",{attrs:{src:"/timecard/t8.png",alt:"タイムカード機能を有効化する"}})]),t._v(" "),r("h3",{attrs:{id:"タイムカードのデータをエクセルで開く"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#タイムカードのデータをエクセルで開く"}},[t._v("#")]),t._v(" タイムカードのデータをエクセルで開く")]),t._v(" "),r("p",[t._v("「CSVダウンロード」ボタンをクリックすると表示されているタイムカードのデータがそのままCSVでダウンロードできます。\n"),r("img",{attrs:{src:"/timecard/t9.png",alt:"タイムカード機能を有効化する"}})]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),r("p",[t._v("日勤・夜勤列はそれぞれ滞在時間を表すだけで、休憩時間は引かれません。しかし【総時間】からは休憩時間が引かれます。違いに注意して下さい。")])]),t._v(" "),r("h2",{attrs:{id:"タイムカード機能のアンロックについて"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#タイムカード機能のアンロックについて"}},[t._v("#")]),t._v(" タイムカード機能のアンロックについて")]),t._v(" "),r("p",[t._v("全ての機能が無料で利用可能ですが、タイムカードの集計に表示される日報は7件までとなります。超過分については表示されません。"),r("br"),t._v("\nこの上限を解除するには、タイムカード機能のアンロックを購入していただく必要があります。"),r("br"),t._v("\nアンロックは売り切りのため、一度の購入で永続的に（Nipoのサービスが終わるまで）ご利用可能です。"),r("br"),t._v("\nお支払いは現在、請求書発行による口座振込のみとなります。")])])}),[],!1,null,null,null);a.default=v.exports}}]);