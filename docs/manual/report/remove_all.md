---
tags: ['一括削除', '一括消去', '削除', '消去', '不要']
meta:
  - name: description
    content: 古い日報をまとめて削除できます。個人情報など繊細なデータを扱う際はローカルにバックアップ取得し、定期的にクラウドから削除するほうが安全とされています
---
# 管理者が日報を削除する<Badge text="管理者限定" />
![日報の削除](./report/icatch.jpg)

Nipoでは通常、「日報は蓄積していくもの」という前提で設計されており、日報を削除することはあまり考えられていません。  
そのため日報を削除できるのは、「その日報を作成した人」に限られ、且つ一度承認された日報はロックがかかり、修正、削除ができなくなります。
しかしクラウド上に日報を預ける以上、扱うデータによっては削除したいケースがあるとのリクエストを多数いただき、新たに日報を削除する機能が実装されました。  
一括削除が利用できるのは各グループに１名しか存在しない「管理者」のみです。（マネージャ・メンバーは利用できません）

::: warning 一括削除を有効にする必要があります
本機能はデフォルトで無効になっているため、先に機能を有効化してください
![一括削除機能を有効化](./report/w13.png)
:::

## 一括削除の画面
一括削除を有効化し、「一括削除」をクリックすると次のような画面が表示されます
![一括削除機能を有効化](./report/w14.png)
最初に、日報を一覧表示で取得する条件を決めます。設定項目は３つしかありません

- 並び順（新しい順・古い順から選ぶ）
- 取得数（１０件・３０件・５０件から選ぶ）
- テンプレートの種類（未指定の場合はすべてのテンプレートの日報を取得する）
条件を指定したら「一覧表示開始」というボタンをクリックします。取得された日報一覧から削除したい日報を選び、「選択した日報を削除」ボタンをクリックして一括削除できます。

## 一括削除に表示される日報はそのグループの「すべての日報」が対象です
Nipoは管理者であっても「提出先」や「共有先」に指定されていない場合、その日報を読むことができません。（そもそも一覧に表示されない）
しかし一括削除で表示される一覧は、それらの「本来読めない日報」も含めてすべて表示されます。

## 日報を削除する前にPDFに変換して手元に残しておくことも可能です<Badge text="GOLD限定" />
Nipo上から日報を削除すると、当然そのデータは消えてなくなります。  
削除前にローカル上に日報データを残したい場合は、「選択した日報を一括PDFしてDL」ボタンをクリックしてください。  
チェックの入った日報をPDF化し、ダウンロードが開始されます。

::: tip
PDFダウンロードと削除は独立した機能です。  
PDF化したあと自動で削除されるわけではないため、PDF化の後に手動で削除ボタンを押す必要があります。（一括PDFだけという利用法も可能です）
:::
PDFが手元に残せて、且つクラウド上から企業情報が含まれる日報を削除できるため、特に「個人情報」など、デリケートな情報を扱う会社にとっては有効な機能になるでしょう。

## 日報を削除する事による影響範囲
データをNipoのサーバ上から削除することにより、いくつかの影響を受ける機能があります。
具体的には次のとおりです
- 集計機能の結果が変わります
- 削除した日報は受信BOX/送信BOXから見れなくなります

特に「集計」は合計値だけでなく、ランキング表示の順位なども変動する可能性があります


:::tip 
タイムカードには影響しません
:::