## やりたいこと

- ゴミ処理施設をマップにピンで表示する
- その施設の情報をモーダルに表示する

## TODO

- 緯度経度の JSON が必要

## 必要なモジュール

ローカルが汚染されるので、ほんとは docker を使った方がいいけど面倒なのでそのままやっちゃう

```
# 必要なモジュールをインストール
pip install requests

```

```
# 実行
python getCoordinate.py
```

https://www.env.go.jp/recycle/waste_tech/ippan/r3/index.html
