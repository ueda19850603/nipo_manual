![郵便番号から住所を入力](/timecard/icatch.png)

# タイムカードを使う
日常業務時における、タイムカードの使い方を見ていきましょう
## 日報作成時に労働時間を入力する
日報を入力する画面です。タイムカードの枠があるので、ここに勤務時間を入力しましょう。詳しくは下の図を御覧ください
![タイムカード機能を有効化する](/timecard/t3.png)

::: tip 日報とタイムカードは独立した別データです
つまり、タイムカードの修正をしても日報上の「タイムカード」は変わりません。その逆も然りです。日報は報告用、タイムカードは集計用としてそれぞれ分けて管理されます
:::

## 入力されたタイムカードを見る
スタッフが入力したタイムカードの情報は、「タイムカード」から見ることができます。
![タイムカード機能を有効化する](/timecard/t10.png)

::: warning
タイムカード管理者以外は、自分以外のタイムカード履歴を見ることができません
:::

### タイムカードの集計月を切替
初期値は今月になっていますが、例えば先月、先々月のタイムカードを見たい場合は、メニューバーにある月切替ボタンを押して操作します
![タイムカード機能を有効化する](/timecard/t22.png)
月送りボタンのため、切替は基本的に１ヶ月を基準に切り替わります（１月・２月・３月・・・・）
また月の締日を設定すると、締日を基準に翌月応当日までが１つの単位となって送られます
例えば25日締めとすると、
- １月26日〜2月25日
- 2月26日〜3月25日
- 3月26日〜4月25日
- 4月26日〜5月25日
- 5月26日〜6月25日
- 6月26日〜7月25日
- 7月26日〜8月25日
- 8月26日〜9月25日
- 9月26日〜10月25日
- 10月26日〜11月25日
- 11月26日〜12月25日
- 12月26日〜翌年1月25日
のように切り替わります

### 集計するスタッフを切り替える
タイムカード管理者権限が必要です。各スタッフのタイムカードを切り替えるには、メニューバーにあるスタッフ名から対象を選びます。
![タイムカード機能を有効化する](/timecard/t23.png)


## 日報を介さずにタイムカードを追加する
前述のやり方ではタイムカードを書くのに日報の提出が必要でした。  
しかし日報を書かなくてもタイムカードだけを追加できます。
画面に表示されている「タイムカード手動打刻」をクリックしてください。
![タイムカード機能を有効化する](/timecard/t11.png)
::: warning 追加対象者を間違えないで
タイムカード手動打刻を押すと、現在表示されているスタッフのタイムカードを追加します。  
タイムカード管理者であれば自分以外のタイムカードを表示できるため、「誰のタイムカードを操作しているのか？」を確認してください  
※権限のないスタッフは自分以外ありえないので心配ありません
:::
![タイムカード機能を有効化する](/timecard/t12.png)
![タイムカード機能を有効化する](/timecard/t13.png)

## 詳細なタイムカード情報を表示する
通常は必要最低限のタイムカード情報しか表示されません。より詳しい情報を見たい場合は、表左上にある「詳細表示」をONにしてください
![タイムカード機能を有効化する](/timecard/t19.png)
詳細表示では、次の項目が追加で表示されます
- **作成日・作成者**
  - 当該行のタイムカードを作成した人と作成日がわかります。「手動追加」と書かれている場合は日報を経由しない追加によるものです
- **日勤**
  - 朝の6:00〜夜の22:00までは日勤として集計されます
- **深夜**
  - 夜の22:00〜翌朝の6:00までは深夜として集計されます
- **【休】日勤**
  - タイムカード作成時に「休日出勤」のチェックがONの場合において、朝の6:00〜夜の22:00までは【休】日勤に集計されます
- **【休】深夜**
  - タイムカード作成時に「休日出勤」のチェックがONの場合において、夜の22:00〜翌朝の6:00までは【休】日勤に集計されます

::: warning 休憩分の計算について
労働時間の列では休憩時間が考慮され、引かれて計算されますが、詳細表示にある「日勤・深夜・【休】日勤・【休】深夜」は休憩時間を考慮する前の値となります。
:::

## タイムカードの修正と削除について
時間にミスがあった場合や、重複して登録した場合は修正が必要になります。ここでは「修正」と「削除」を見ていきます
### タイムカードの修正
修正したい行にある「鉛筆」のボタンをクリックしてください
![タイムカード機能を有効化する](/timecard/t14.png)
![タイムカード機能を有効化する](/timecard/t15.png)
修正すると履歴が残ります。通常、勤務時間の集計は１ヶ月単位なので、聞いても忘れてしまうことが多いでしょう。  
そのさいは修正履歴などをうまく活用して記憶を引き出してください

### タイムカードの削除
誤って書いたタイムカードは削除できます。例えば出勤していないのに書いてしまった場合や、同じ日付のタイムカードを２件以上作成してしまった場合は削除が必要です
![タイムカード機能を有効化する](/timecard/t17.png)

#### タイムカードが重複している場合
同じスタッフが同じ日に２件以上のタイムカードを作成すると警告が表示されます
![タイムカード機能を有効化する](/timecard/t18.png)
多くのケースでは打ち間違いのため、誤ったほうを削除してください。  
しかし稀に正しいケースもあります。たとえば午前と午後に分けて２度出勤した場合などのケースも想定されるため、  
最後には必ず目視によるチェックを行うことを推奨します

## タイムカードをCSVでダウンロード
集計さてたタイムカードの情報をCSVにダウンロードできます。
![タイムカード機能を有効化する](/timecard/t20.png)
ダウンロードしたタイムカードのCSVデータをエクセルで開くと、このようなイメージになります
![タイムカード機能を有効化する](/timecard/t21.png)
