# Anitrient(アニトリエント)

## サービス概要

「次に見たいアニメが決まらない…」
質問に答えていくとその人に合ったアニメを提案、
そして「どのアニメをどこまで見たのか」を管理するアプリです。

## このサービスへの思い・作りたい理由

私が次に見たいアニメを探す時はいつもジャンルで探します。
ジャンルで検索すると100 ~ 2000件以上あり好みのアニメを見つけるのに毎回苦労していました。
アニメを提案や診断するアプリ、アニメを管理するアプリはたくさんリリースされていますが、
「アニメ提案」と「アニメ管理」を１つのアプリで使用できるものはあまりリリースされておらず,リリースされていても最新のアニメ情報がなかったりでした。
アニメ提案アプリでアニメを調べ、別のアニメ管理アプリに記録する往復では、時間と手間がかかり管理が疎かになりやすいと感じていました。
１つのアプリで「アニメ提案」と「アニメ管理」ができて、最新のアニメ情報もあるアプリがあればいいなと考えており、
ないなら私が作ればいいのではと思いこのこのアプリを作りたいを考えました。

## ユーザー層について

- アニメが好きで自分がどれぐらいアニメが好きか共有したい人
- たくさんのアプリを同時に使用するのが面倒くさいを思っている人
- 管理するだけのアプリでは物足らない人

## サービスの利用イメージ

ログインしなくてもアニメ提案機能は使用できますが、提案されたアニメをお気に入りリスト登録、視聴済リストに登録などの管理機能は使えません。
ログイン後もアニメ提案機能を使用でき、お気に入り登録、視聴済リストに登録してもらうとよりそのユーザーにあったもアニメを提案できます。
アニメ提案時の質問数は4 ~ 6個程度で考えています。

## ユーザーの獲得について

- SNSを使用して宣伝
- 技術記事を使用して宣伝
- GoogleSearchConsoleの登録して検索に引っかかるような設定を行う

## サービスの差別化ポイント・推しポイント

- レビュー機能はテンプレートを用意し、レビューを書く時間を少なくする。
例えば、「星評価」「作品の良かった点」「作品の改善点」「作品のおすすめポイント」「お気に入りシーン」「その他」、「ネタバレ注意チェックボックス」などの項目を用意して、ユーザーがそれぞれに回答する形式、「星評価」は必須項目で他の項目は任意に記載できる予定です。

- レビュー機能をよりユーザーに使ってもらうために、視聴済のアニメ作品数×1ポイント、レビューした作品数×2ポイントとして集計して合計数ごとに称号を獲得できるようにできます。

- 視聴済作品を集計してジャンル別レーダーチャートを表示してステータスをみれるようにします。

## 機能候補

### MVPリリース
- 会員登録
- ログイン/ログアウト
- アニメ提案機能
- トップページ
- 検索機能
  - キーワード検索
  - オートコンプリート
- プロフィール機能
  - 視聴済のアニメ作品数,レビューした作品数の合計数ごとの称号獲得できる機能
- ブックマーク機能
  - 「気になる」ボタンと「視聴済」ボタン
- 「気になる」、「視聴済」リスト
- お問い合わせフォーム
- レコメンド機能

### 本リリース
- X(旧Twitter)ログイン
- X(旧Twitter)のシェア機能
- ランキング機能
- 検索機能の追加
  - 絞り込み検索
- プロフィール機能の項目追加
  - 視聴済みアニメの視聴時間の合計を表示
  - ジャンル別レーダーチャート
- 利用規約、プライパシーポリシーの設定
- 管理者画面

## 機能の実装方針予定

### バックエンド

- Ruby 3系
- Ruby on Rails 7系

### フロントエンド

- Hotwire
- chart.js
- Tailwind CSS使用検討中

### Gem 

  - sorcery
  - Ruby open ai
  - Active Admin

### API

- twitter　API
- Annict API

### デプロイ

- heroku

### データベース

- PostgreSQL

### その他

- Stimulus Autocomplete
- Amazon Personalize

## 追加機能、追加サービス

- リクエストフォーム

- アニメクイズ機能

- リマインダ-機能
