# 初版実装

## やりたいこと

- 都道府県ごとの廃棄物の種別・量を可視化することで、その地域の特性を把握する
- 各項目のランキング機能
- なぜそうなっているのかの意見交換ができる

### 技術

- React
- tailwind
- leaflet
- vercel
- グラフ表示
- firebase

## 目標

- みやすい UI
  - Plateau View を参考に
- bullet-prood 構成

##　最低限必要な要素

- コロプレスマップ
  - ごみ総排出量
  - １人１日当たりの排出量
  - リサイクル率
- 詳細情報
  - ごみ総排出量
  - 人口
  - １人１日当たりの排出量
  - リサイクル率
  - 生活系ごみ搬入量
  - 事業系ごみ搬入量
- 凡例
- 要素の説明（リサイクル率とは何か？）
- 各県に対し、コメントできる
  - 名前
  - コメント欄

## TODO

- デザインを考える
- データを用意する
  - 廃棄物のデータ
  - 都道府県のコロプレスマップデータ
- データを GeoJson に加工する
- マップに各県ごとにデータを色分けして表示
- 都道府県をホバーすると、データを表示「北海道：〇〇 100t」など
- 凡例を表示
- 項目を切り替えられる
- 都道府県をクリックすると詳細情報を表示
  - 数値のみ
    - ごみ総排出量
    - 人口
    - １人１日当たりの排出量
    - リサイクル率
  - 円グラフ
    - 生活系・事業系ごみ搬入量
    - 生活系ごみ搬入量の詳細割合
    - 事業系ごみ搬入量の詳細割合
    - データをスライドで切り替える
- 各県のコメント欄
- 製作者の情報
  - お問い合わせは twitter
  - GitHub

## 実装の参考

Choropleth Map を React-Leaflet を使って実装する
https://fmuchembi.medium.com/let-us-build-a-choropleth-map-using-react-leaflet-together-3245d30ac900

Leaflet のスタイル[Alidade Smooth Dark]
https://docs.stadiamaps.com/themes/

## データリンク

[日本の廃棄物処理（令和 4 年 4 月 20 日現在）](https://www.env.go.jp/recycle/waste_tech/ippan/r2/index.html)

[47 都道府県のポリゴンデータ geojson](https://japonyol.net/editor/article/47-prefectures-geojson.html)

[CSV から JSON に変換](https://products.aspose.app/cells/ja/conversion/csv-to-json)

[アイコン](https://icooon-mono.com/)

サイドバーのアイコンの色

- 緑：#008036
- グレー：rgb(171, 171, 171)
- アイコンの色:rgb(75, 75, 75)

### 説明の文章

秋田県は生活系ごみではｘｘの値が平均より高く、xx の値が平均より低いです。
また事業系ごみではｘｘの値が平均より高く、xx の値が平均より低いです。

ゴミの総排出量　全国何位
一人あたりの 1 日のごみ排出量　全国何位
リサイクル率　全国何位
