# 更新履歴
## Nipoの新しい機能はここを見ればすべてわかります【最新情報】
Nipoはこまめにアップデートが行われ、新しい機能が次々に登場しています。  
新しい機能や修正の情報は全て本ページに記載されますので、Nipoに関する最新情報はこのページをご覧ください。なお、今現在の最新バージョンは以下のとおりです
::: tip 現在の最新版
- WebApp版：6.0.1
- IOS版：6.0.1
- Android版：6.0.1
:::
お使いのNipoのバージョン確認方法はこちらです

### これまでのバージョンアップ履歴
Android / ios版はリリースされないバージョンもあります
赤文字の内容はお客様からのリクエストによる機能追加を表します

#### 2020/6/1 v6.0.2

* ソーシャルログインが廃止されました（大きな変更のためメジャーバージョンが6になりました）
* <span style="color: #ff0000;">署名機能について筆記領域をS/M/Lの３段階でサイズ変更可能になりました</span>
* ログアウト時に表示されるエラーメッセージを非表示にしました（バグ修正）

#### 2020/5/25 v5.13.4

* カレンダーの左ペインと右ペインを入れ替えました
* 日報提出時に日付だけでなく時刻も指定できるようになりました
* (iPhone)ノッチ部分にボタンが被ってしまう問題を修正しました

#### 2020/5/21 v5.13.0

* [カレンダー機能が大幅に強化](https://nipo.sndbox.jp/function/calendar)されました。カレンダーから集計とかできるようになりました
* <span style="color: #ff0000;">受信BOXから文書番号が確認できるようになりました</span>
* 一部のバグを修正しました

#### 2020/5/3 v5.12.1

* [タイムカード](https://nipo.sndbox.jp/manual/guide/timecards)の見た目をシンプルにしました
* <span style="color: #ff0000;">日報集計時、[複数のスタッフを選択して一括ダウンロード](https://nipo.sndbox.jp/manual/guide/line-charts#specific_download)できるようになりました</span>

#### 2020/4/29 v5.12.0

* 多くの項目で遅延読み込みを有効化しました。画面表示までの時間が短くなります
* [「承認済み」「棄却済み」「審査前」毎に集計できるようになりました](https://nipo.sndbox.jp/manual/guide/line-charts#download-all)
* ログアウト時に権限不足と表示される不具合を修正
* スタッフの設定を変えるたびにスタッフの並び順が変わってしまう不具合を修正
* E-mail未登録のスタッフがE-mail設定後にE-mailが正しく反映されない不具合を修正
* [タイムカード](https://nipo.sndbox.jp/manual/guide/timecards)の設定に「実例」を追記しました

#### 2020/4/20 v5.11.1

* [「語録集」機能](https://nipo.sndbox.jp/manual/guide-admin/dictionaly)が実装されました
* 人数が少ない場合、グラフが縦に伸びすぎる問題を修正しました
* スタンプを１つ追加しました
* 関連するフレームワークやライブラリを最新にアップデートしました

#### 2020/4/6 v5.10.5

* テンプレートに「入力必須」がある場合に「[自動保存](https://nipo.sndbox.jp/manual/guide/write-report#auto-save)」の挙動がおかしくなるバグを修正しました
* 自動保存を一括削除する機能を追加しました

#### 2020/4/2 v5.10.2

* 前バージョンで見つかった「集計機能」のバグを修正しました
* ソーシャルログインを利用していると警告が表示されるようになります（[ソーシャルログインの廃止](https://nipo.sndbox.jp/news/social-login)）
* 【iOS限定】ビルドシステムを少し変えました。動作がスムーズになります

#### 2020/3/30 v5.10.0

* <span style="color: #ff0000;">[スタッフ活動実績の集計機能](https://nipo.sndbox.jp/manual/guide-admin/add-staff-account#activity)が追加されました（このバージョンはバグのため正常に動作しません）</span>
* カレンダーのプログラムを少し修正しました

#### 2020/3/27 v5.9.3

* 受信BOXで「新着あり」のボタンを押すとローディングのくるくるが止まらないバグを修正しました
* GOLDPLAN更新手順が分かりにくいとの声があり、更新手順を少し簡略化しました

#### 2020/3/26 v5.9.2

* 受信BOXで「更に古い日報を取得」を押すといくつかの日報が表示されないバグを修正
* 受信BOXにある「提出簿」が「[直近の提出状況](https://nipo.sndbox.jp/manual/guide/postbox#listbook)」に名称変更（仕様も変わりました）

#### 2020/3/23 v5.9.1

* [可変長パーツ](https://nipo.sndbox.jp/manual/guide-admin/template-parts#list)で選択肢が正常に動作しないバグを修正しました
* <span style="color: #ff0000;">[タイムカード機能に「締日」](https://nipo.sndbox.jp/manual/guide/timecards#span)を追加しました</span>

#### 2020/3/21 v5.9.0

* <span style="color: #ff0000;">日報の[一括削除機能](https://nipo.sndbox.jp/manual/guide-admin/deletes)を実装しました</span>
* 日報を取得する処理を効率化しました（体感できるほどの差はなし）
* 一括PDF作成時、極めてまれにPDF化されないバグを修正しました
* 閲覧中に日報が削除されると真っ白になるバグを修正しました

#### 2020/3/13 v5.8.8

* <span style="color: #ff0000;">時刻パーツ連結で日付をまたぐ計算をサポートしました（負数にならない）</span>
* [タイムカード](https://nipo.sndbox.jp/manual/guide/timecards)で休憩時間が空欄だと集計にエラーが表示されるバグを修正しました
* タイムカードの入力時に総労働時間が表示されるようになりました

#### 2020/3/9 v5.8.5

* [日報執筆中に自動でデータをバックアップ](https://nipo.sndbox.jp/manual/guide/write-report#auto-save)するようになりました（万が一のフリーズ時に復旧可能）
* <span style="color: #ff0000;">タイムカードに「初期値」を設定できるようになりました</span>
* 手書きメモ・サインの表示形式が「全画面」から「ポップアップ式」へ変更になりました

#### 2020/3/2 v5.8.2

* カレンダー上から日報を表示する際、「画像データ」が表示されないバグを修正しました
* タイムカード上から日報を表示する際、「画像データ」が表示されないバグを修正しました

#### 2020/3/2 v5.8.1

* 週間カレンダー上で予定が表示されないバグを修正しました
* タイムカードの集計期間を個別に指定できるようになりました

#### 2020/3/1 v5.8.0

* 集計機能が強化されました。（[集計四太郎[しゅうけいしたろう]](https://nipo.sndbox.jp/manual/guide/line-charts#shukeisitaro)の追加）

#### 2020/2/14 v5.7.0

* <span style="color: #ff0000;">[タイムカード機能](https://nipo.sndbox.jp/manual/guide-admin/template-parts#timecard)が実装されました</span>
* 受信BOX・送信BOXのレイアウトが変わりました
* デフォルトで「カレンダー」と「プロジェクト」が非表示になりました
* 無料プランの利用人数が5名→4名に変更されました
* PDF一括DL機能のバグを修正しました
* たまにスクロールが利かなくなるバグを修正しました（フレームワークのバグ）

#### 2020/2/7 v5.6.3

* クレジットカードによる最低申し込み人数が2名から1名に変更されました

#### 2020/2/6 v5.6.2

* グループを作成するとスクロールが効かなくなるバグを修正しました(Web版のみ発生します)

#### 2020/2/6 v5.6.1

* PDF作成時に対応する漢字を追加しました
* PDF作成はGOLD PLAN限定となりました
* 送信BOXから1件単位でCSV出力ができるようになりました(ファイル名は文書ID)

<div class="danger-box">このバージョン以降、無料プランでできることが段階的に狭まります。
日報に直接関係のない「カレンダー」機能や、付加価値として認められる機能は制限されます。
GOLD PLANの方は今後、今以上の優遇措置を予定しております</div>

#### 2020/2/4 v5.6.0

* CSV出力の際に、コメントも含めて出力可能になりました（選択可能です）
* 受信BOXから1件単位でCSV出力ができるようになりました

#### 2020/2/3 v5.5.0

* <span style="color: #ff0000;">[日報の提出先を管理者が自由に設定](https://nipo.sndbox.jp/manual/guide-admin/add-staff-account#distination)できるようになりました</span>
* ロビー画面など一部の表示デザインを変更しました
* メンバーの権限変更など、操作性を向上させました
* <span style="color: #ff0000;">退室済みのメンバーを「提出簿」から表示しないように変更しました（任意に切り替え可）</span>
* 細かいバグを修正しました

#### 2020/1/9 v5.4.4

* テンプレートの作成時に、ドラッグ操作による項目追加をサポートしました
* 初期設定ウィザード時にサンプルのテンプレートに説明が付与されました

#### 2020/1/7 v5.4.3

* [グループの切替](https://nipo.sndbox.jp/manual/guide/group)がグループ内から操作可能になりました
* 細かいバグを修正しました

#### 2020/1/5 v5.4.1

* <span class="red">[テーマカラー](https://nipo.sndbox.jp/manual/guide/group#color-theme)に新色が追加されました</span>
* 不要な機能を無効化できるようになりました（カレンダー・集計・プロジェクト）
* [テンプレート作成画面](https://nipo.sndbox.jp/manual/guide-admin/format#guide)が改良されました
* テンプレート作成中に「プレビュー」を表示できるようになりました
* テンプレートのサンプルが追加されました([初期設定ウィザード中](https://nipo.sndbox.jp/manual/guide/startup_guide#wizard)に選択可能)
* [日報テンプレートパーツ「住所」](https://nipo.sndbox.jp/manual/guide-admin/template-parts#zip)が追加されました
* [カレンダー](https://nipo.sndbox.jp/manual/guide/calendar-guide)の高さを「可変」から「固定」に変更しました
* 提出先空欄で日報を提出するとボタンが押せなくなるバグを修正しました
* <span class="red">提出先に指定されたメンバが[代理で日報修正](https://nipo.sndbox.jp/manual/guide/edit#agent)可能になりました</span>

    * 他人が修正した日報の修正履歴を追うことができるようになりました

* 「承認・棄却」のステータスをわかりやすい入国スタンプ風に表示されるようになりました
* 関連するフレームワーク・ライブラリを最新に更新しました

#### 2019/12/16 v5.4.0

* <span style="color: #ff0000;">[日報テンプレートパーツ「表」](https://nipo.sndbox.jp/manual/guide-admin/template-parts#list)が追加されました</span>
* [日報テンプレートパーツ「署名」](https://nipo.sndbox.jp/manual/guide-admin/template-parts#sign)が追加されました
* <span style="color: #ff0000;">（モバイル）[カレンダー](https://nipo.sndbox.jp/manual/guide/calendar-guide)が表示されるようになりました</span>
* 日報PDF作成時に横レイアウトが追加されました
* [通知メール](https://nipo.sndbox.jp/manual/guide/email-notice#notice-email)のうち、修正、コメント、承認棄却のメール本文に「日報本文」が表示されるようになりました
* ときどき２重で日報が提出されてしまう問題を解決しました
詳しくは[version5.4.0アップデートに関する特設ページ](https://nipo.sndbox.jp/news/nipo-version-5-4-0-release)を御覧ください

#### 2019/12/05 サイレントアップデート
クレジットカード決済の種類が増えました。これまで対応していたカード（Visa・Master Card・American Express)に加えて、今回以下のカードがご利用可能になりました

* [JCB](https://www.jcb.co.jp)
* [ダイナースクラブ](https://www.diners.co.jp/ja/index.html)
* Discover

#### 2019/12/03 サイレントアップデート

* 全文検索の「数字」に関するミスタイプ許容範囲が大幅に狭まりました。例えばこれまでは1月1日と検索しても1月3日がヒットしましたが、このアップデートからヒットしなくなります。
    （このアップデートはサーバ側の設定変更のため、Nipoアプリのバージョンに変更はありません）

#### 2019/11/19 v5.3.0

* <span style="color: #ff0000;">CSVエクスポート時に、[スタッフ毎に個別でエクスポート可能](https://nipo.sndbox.jp/manual/guide/line-charts#specific_download)になりました</span>
* PDF作成時に任意に「透かし」を入れることができるようになりました

#### 2019/11/08 v5.2.1

* <span style="color: #ff0000;">メンバー数が上限のときに、初期設定されるパスワードが表示されない問題を修正</span>
* 関連するフレームワークのバージョンを更新しました

#### 2019/11/01 v5.2.0

* 日報PDF化を一括して行えるようになりました(GOLD PLAN)
* コメントの見た目を現代風にしました
* <span style="color: #ff0000;">コメントに「スタンプ機能」が実装されました</span>
* <span style="color: #ff0000;">受信日報のコピー機能を「承認済み」の日報に限定しました</span>
* その他、軽微なバグを修正しました

#### 2019/10/27 v5.1.6

* カレンダー上に表示される「受信日報」の表示を少しかっこよくしました
* カレンダーから「日報テンプレート」の絞り込みが利用可能になりました
* 無料プランで5件以上でも利用できる[選択肢パーツ](https://nipo.sndbox.jp/manual/guide-admin/template-parts#select)のバグを修正しました
* 過去の日報をコピーして新規作成できる機能が追加されました
* 受信BOXで自分の書いた日報は色を変えて表示するようになりました
* 無料プラン限定：画面右上からGOLDPLAN切り替えボタンを配置しました
* その他、細かいバグを修正しました

#### 2019/10/13 v5.0.0
Version5.0.0 メジャーアップデートになります。[特設記事](https://nipo.sndbox.jp/news/update-news-v500)を用意しました。

* 受信日報BOXの検索機能を改良しました
* 【管理者用】全体設定画面が長くなったのでショートカットリンクを作成しました
* 【スマホ向け】メニューバーの位置を下から上へ移動し、Web版に近いデザインに
* <span style="color: #ff0000;">送信日報BOXにて、過去の日報をコピーして新規作成できるようになりました</span>
* <span style="color: #ff0000;">【スマホ向け】スケジュール機能がスマホアプリでも利用可能になりました</span>
* <span style="color: #ff0000;">プロジェクト機能が追加されました</span>

##### メジャーバージョン4シリーズ▼
ここより下はより簡略表示でお送りします

###### 2019/9/28 v4.11.2

* 使用フレームワークの更新に伴うバージョンアップ
* QRコードスキャンが正常に動作しない問題を修正
* [Android版](https://nipo.sndbox.jp/rule/spec#android_app)のターゲットSDKのバージョンが26から28にアップグレードされました（最小SDKは19で、Android Kitkatからインストール可能）

###### 2019/9/5 v4.11.1

* Nipoで利用しているメインフレームワークのバージョンアップ
* PC版でWebカメラ搭載PCなのにQRコードリーダーが起動しないバグを修正しました

###### 2019/8/27 v4.11.0

* [カレンダー上に「受信日報」を表示](https://nipo.sndbox.jp/manual/guide/calendar-guide#show-report)できるようになりました
* カレンダー上に「送信日報」を表示できるようになりました
* カレンダー上から日報の承認・棄却・既読・コメント・修正が行える様になりました
* カレンダーがRC版からリリース版に昇格しました

###### 2019/8/24 v4.10.15

* [カレンダー機能](https://nipo.sndbox.jp/manual/guide/calendar-guide)の拡張

###### 2019/8/8 v4.10.13

* [CSV出力](https://nipo.sndbox.jp/manual/guide/line-charts#csv)時、日付が不正なデータがInvalid Dateとなるデータを1970/01/01に変換
* [日付パーツ](https://nipo.sndbox.jp/manual/guide-admin/template-parts#date)にエラーチェック機能を搭載

###### 2019/8/6 v4.10.11

* <span style="color: #ff0000;">カレンダー機能に「[クイック予定](https://nipo.sndbox.jp/manual/guide/calendar-guide#quick_event)」が実装されました</span>
* カレンダー予定の削除を「予定作成者」限定にしました
* 細かいバグの修正

###### 2019/8/1 v4.10.9

* <span style="color: #ff0000;">Adminの権限をマネージャへ譲渡できるようになりました</span>
* [PDF作成](https://nipo.sndbox.jp/manual/guide/postbox#pdfmake)時、デフォルトの文字サイズが「小」余白のサイズが「狭い」に変更されました
* [ペナルティ機能](https://nipo.sndbox.jp/rule/penalty)の実装。規約違反の際に行動が制限されます

###### 2019/7/25 v4.10.7

* [共有カレンダー](https://nipo.sndbox.jp/manual/guide/calendar-guide)のバグを修正
* <span style="color: #ff0000;">[共有カレンダーに「コメント投稿」](https://nipo.sndbox.jp/manual/guide/calendar-guide#show-detail)機能を追加しました</span>
* <span style="color: #ff0000;">共有カレンダーに「1日以上を超えた予定」が使えるようになりました</span>
* 今更ですが、オープンソース・ソフトウェア・ライセンスを記載しました
* [メンバー画面](https://nipo.sndbox.jp/manual/guide-admin/add-staff-account)が「管理」画面に集約されました
* [テンプレート作成](https://nipo.sndbox.jp/manual/guide-admin/format)が「管理」画面に集約されました
* テンプレート作成のパフォーマンス向上
* [「選択肢」パーツ](https://nipo.sndbox.jp/manual/guide-admin/template-parts#select)の制約を設定しました

###### 2019/7/8 v4.10.0

* [月額払いがスタート](https://nipo.sndbox.jp/news/newprice)しました。これまで通りの請求書払いも並行してご利用可能です。

###### 2019/6/22 v4.9.0

* [PDF出力](https://nipo.sndbox.jp/manual/guide/postbox#pdfmake)が無料プランでも利用可能になりました。
* <span style="color: #ff0000;">時刻パーツを2つ並べると、その経過時間を表示するようになりました。</span>
* [スタッフのアカウント作成](https://nipo.sndbox.jp/manual/guide-admin/add-staff-account#agent)がかんたんになりました

###### 2019/6/4 v4.8.0

* 新たに[「クレジットカード」によるお支払い](https://nipo.sndbox.jp/rule/price#credit)が可能になりました
* グループ追放後、再入場できなくなるバグを修正しました。
* メールアドレスが使用済みの場合に、適切なエラーメッセージが表示されるように修正

###### 2019/05/23　v4.7.0

* [テンプレートの各種パーツ](https://nipo.sndbox.jp/manual/guide-admin/template-parts)の機能の多くが強化されました。
* 管理者が自由に選択してこれまで以上に自由なテンプレートの作成が出来るようになりました。

###### 2019/05/03 Version 4.6.0

* <span style="color: #ff0000;">テンプレートの項目名に「改行」が使えるようになりました</span>
* <span style="color: #ff0000;">[提出簿](https://nipo.sndbox.jp/manual/guide/postbox#listbook)がこれまで「テンプレートごと」だったのに対し、今回からすべてのテンプレートをまとめた提出簿になりました（従来のテンプレートごとの提出簿も作成可能です）</span>
* [受信BOXの一覧表の表示をコンパクトに](https://nipo.sndbox.jp/manual/guide/email-notice#compact)出来るようになりました
* 一部の入力形式をOS依存にしました

###### 2019/05/02 Version 4.5.0

* 画像拡大表示時のレイアウトを変更しました
* <span style="color: #ff0000;">コメント入力時に改行が使えるようになりました</span>
* 【スマホ】日付パーツの入力をモバイル向けに最適化
* 【スマホ】時刻パーツの入力をモバイル向けに最適化
* 【スマホ】日報のページ送りをヘッダーからフッターへ移動しました
* 【スマホ】ヘッダーを削除しました
* 【スマホ】メニューを左からのスワイプで表示されなくしました

###### 2019/04/25 Version 4.4.4

* IOSデバイスから直接画像を取り込む際、画像が回転するバグを修正
* Webアプリ限定：画像ファイルにダウンロードボタンが追加されました。

###### 2019/04/19 v4.4.0

* <span style="color: #ff0000;">[文書番号機能](https://nipo.sndbox.jp/manual/guide-admin/format#sequencial)をサポートしました</span>
* [手描きメモ](https://nipo.sndbox.jp/manual/guide-admin/template-parts#canvas)にAndo（戻す）機能が追加されました
* 数値パーツの補助科目が指定できないバグを修正
* 数値パーツの入力必須がうまく機能しないケースがあるバグを修正

###### 2019/04/05 Version 4.3.0

* [選択肢パーツ](https://nipo.sndbox.jp/manual/guide-admin/template-parts#select)の選択単語の並べ替えが出来るようになりました。

###### 2019/03/30 Version 4.2.0

* [スライダーパーツ](https://nipo.sndbox.jp/manual/guide-admin/template-parts#range)が追加されました。
* 選択肢や数値など、一部のGOLD PLAN限定としてきたパーツを無料プランでも利用可能としました。
* Version 4.2.0のアップデートに関しては、別途[専用の記事](https://nipo.sndbox.jp/news/version420release)を用意しています

###### 2019/03/25 Version 4.1.3

* [日報テンプレートの作成](https://nipo.sndbox.jp/manual/guide-admin/format)画面を変更。操作性を向上しました

###### 2019/03/23 Version 4.1.2

* 日報CSVエクスポート時に「時刻」パーツのデータが正しく出力されないバグを修正

###### 2019/03/14 Version 4.1.0

* 日報受信ＢＯＸの操作性を向上しました。
* 新しい[選択肢パーツ](https://nipo.sndbox.jp/manual/guide-admin/template-parts#select2)が用意されました

###### 2019/03/07 Version 4.0.0
約１０ヶ月ぶりとなるメジャーアップデートです。

##### Nipo Version 3シリーズ▼

###### 2019/02/13 Version 3.23.0

* 主にセキュリティに関する安全性を高めるためのバージョンアップです。
* <span style="color: #ff0000;">[アクセスログ](https://nipo.sndbox.jp/manual/guide-admin/mode#log)の収集とダウンロードが可能になりました</span>
* <span style="color: #ff0000;">メンバを確実に特定するため、UIDとメールアドレスを併記するようになりました</span>
* 本バージョンから、アプリが古いと警告が表示されるようになりました

###### 2019/01/25 Version 3.22.0

* [アカウント登録なしでもNipoが使える](https://nipo.sndbox.jp/manual/guide/startup_guide#signup)ようになりました（体験版用）
* [メール認証](https://nipo.sndbox.jp/manual/guide/account#auth-mail)のプロセスが簡略化されました
* ソーシャルアカウントでログインしている方も、[メールアドレス変更](https://nipo.sndbox.jp/manual/guide/account#resetmail)とパスワード変更が可能になりました

###### 2019/01/10 Version 3.21.3

* [新料金プラン](https://nipo.sndbox.jp/rule/price#gold)　GOLD5名。　GOLD10名が始まりました

###### 2019/01/08 Version 3.21.2

* 日報の受信BOXの検索機能のうち、日付による検索をサポートしました
* 手描きメモのパフォーマンスを向上させました。少しだけ軽くなったかもしれません
* [チュートリアルのレイアウト](https://nipo.sndbox.jp/manual/guide/startup_guide#wizard)を変更しました
* <span style="color: #ff0000;">これまでできなかった、日報本文の選択やコピーができるようになりました</span>
* 2019年もNipoをよろしくお願いします

###### 2018/12/27 Version 3.21.1

* TRIAL PLANの廃止に伴う修正が行われました。
* GOLD PLAN限定の機能にはそれとわかるように表記することを徹底しました
* その他、レイアウトの軽微な変更や軽微なバグの修正など、細かな点が変わっています

###### 2018/12/18 Version 3.21.0

* 自分が属している、[他のグループのテンプレートを取り込み](https://nipo.sndbox.jp/manual/guide-admin/format#import)できるようになりました。
* PDF作成時の漢字コードを追加しました（翔　淺　錢　稟　厦　邊　邉　絨毯　遽)
* 数値パーツの補助科目が、CSVエクスポートされるようになりました。
* 数値パーツの補助科目が、PDF印刷されるようになりました
* 集計の「全期間」で本日の日報が含まれないバグを修正しました
* 日報受信BOXにて、日報作成者によるフィルターが使えるようになりました
* 内部的なパフォーマンスを一部向上させました。体感するほどの変化はありませんが処理が効率化されています。

###### 2018/12/04 Version　3.20.3

* バグの修正
* 日報に対して「[既読サイン](https://nipo.sndbox.jp/manual/guide/postbox#res)」がつけられるようになりました

###### 2018/11/15 Version 3.19.0

* 日報テンプレートの項目ごとに入力必須を指定可能になりました
* <span style="color: #ff0000;">日報一覧の概要欄の順番が正しくなりました</span>
* [日報の提出簿](https://nipo.sndbox.jp/manual/guide/postbox#listbook)が正式サポートされました

###### 2018/10/23 Version 3.18.0

* <span style="color: #ff0000;">スマートフォンアプリでPDF作成やCSVエクスポートが可能になりました</span>
* <span style="color: #ff0000;">[承認された日報の修正がロック](https://nipo.sndbox.jp/manual/guide/edit#edit)されます</span>
* <span style="color: #ff0000;">下書きから正書にする際日付を修正する確認メッセージが表示されるようになりました</span>
* PDF生成処理の余白調整が可能になりました

###### 2018/10/18 Version 3.17.5

* 日報の様式がこれまで以上に作成しやすくなりました
* グローバルメニューが配置されました(スマホのみ）
* 受信BOX・送信BOXのデザインを使いやすく改善しました

###### 2018/09/22 Version 3.16.0

* 日報テンプレートに[チェックシート・モード](https://nipo.sndbox.jp/manual/guide-admin/format#checklist)が追加
* PDF出力の詳細設定にチェックシートモードが追加

###### 2018/09/16 Version 3.15.0

* 無駄な同期を大幅に制限し、パフォーマンスを向上しました
* <span style="color: #ff0000;">日報受信BOXにて、「承認済み・棄却済み・未読」の状態で絞り込みができるよう修正</span>
* 日報全文検索の操作性を向上しました

###### 2018/08/24 Version 3.14.0

* <span style="color: #ff0000;">本文入力時に、文字の色を変更することができるようになりました</span>
* 日報テンプレートのレイアウトに[連結機能](https://nipo.sndbox.jp/manual/guide-admin/format#concat)が追加されました
* [日報PDF化の設定が保存可能](https://nipo.sndbox.jp/manual/guide/postbox#config-pdf)になりました
* <span style="color: #ff0000;">１つの[日報に配置できる項目数](https://nipo.sndbox.jp/manual/guide-admin/format)が30項目から85項目に拡大されました</span>
* メンバ管理画面にて、メンバーはQRコードが表示されなくなりました。

###### 2018/08/10 Version 3.13.0

* 日報をPDF変換時に画像データを取り込めるようになりました
* [日報データをCSV形式でエクスポート](https://nipo.sndbox.jp/manual/guide/line-charts#csv)することが可能になりました

###### 2018/07/24 Version 3.12.0

* <span style="color: #ff0000;">受信日報・送信日報の一覧表示にて、日報の概要が一覧に表示されるようになりました</span>
* <span style="color: #ff0000;">日報の連続投稿が簡単に行えるようになりました</span>
* 日報を全員で共有できる、[パブリックモード](https://nipo.sndbox.jp/manual/guide-admin/group-mode#public)が追加されました

###### 2018/07/10 Version 3.11.5

* [プライベート(共有しない)モード](https://nipo.sndbox.jp/manual/guide-admin/group-mode#private)がサポートされました
* [日報の全文検索機能](https://nipo.sndbox.jp/manual/guide/postbox#search)がベータ版としてサポートされました

###### 2018/07/09 Version 3.10.0

* [メール通知機能](https://nipo.sndbox.jp/manual/guide/email-notice#notice-email)がサポート
* [開発者へフィードバック](https://nipo.sndbox.jp/manual/guide/email-notice#contact)を送ることが簡単にできるようになりました

###### 2018/06/30 Version　3.9.0

* <span style="color: #ff0000;">グループの最大人数を拡張しました（20人▶30人）</span>
* 日報の未読をバッジで表示するようになりました

###### 2018/06/13 Version　3.7.0

* <span style="color: #ff0000;">PDF化の対応文字コードをJIS第１水準まで拡張しました</span>
* ヘルプボタンを各所に配置しました

###### 2018/06/05 Version 3.5.5

* アプリ全体のデザインをグリーンに統一しました
* 日報のページ送り機能が搭載されました
* [日報PDF時に検印欄を付与](https://nipo.sndbox.jp/manual/guide/postbox#config-pdf)できるようになりました

###### 2018/05/17 Version 3.3.0

* ソーシャルアカウントを利用したログインがサポートされました（Twitter・Facebook）
* [日報をPDF化](https://nipo.sndbox.jp/manual/guide/postbox#pdfmake)できるようになりました
* [Android・IOS版のアプリ](https://nipo.sndbox.jp/tablet-mobile/ipad_nipo#app-download)をリリースしました

###### 2018/05/15 Version 3.1.0

* 日報分析（[折れ線グラフ](https://nipo.sndbox.jp/manual/guide/line-charts#line-chart)・[棒グラフ](https://nipo.sndbox.jp/manual/guide/line-charts#bar-chart)）がサポートされました
* グループ招待時、[QRコード](https://nipo.sndbox.jp/manual/guide-admin/add-staff-account#join)を使ったアクセスが可能になりました

##### 2018/05/01 Version 3.0.0

* 大幅なメジャーバージョンアップ。[過去の製品](https://nipo.sndbox.jp/old-version)と互換性がありません。