# アプリ名
next.jsを使ったABテストアプリ（開発中）

# 概要
特定のURLから取得したHTMLおよび画像データをLLMに入力して、デザインの改善案を自動で提案するアプリ

# 頑張った点
next.jsでreactネイティブな開発を行ったこと
amazon bedrockへの接続を行うAPIを使ったこと
ブラウザの機能を一部アプリから実行するために、ブラウザの機能を実行するAPIを利用したこと
vercelを使ってデプロイしたこと

# 感想
データの送信、取得は決まりごとが多く非常に開発が面倒であることがわかった。
便利な最近の開発機能を使うことで、開発が少し楽になることが実感できた。これからも新しい機能を積極的に利用しようと思う。

# デモ
入力したリンクからhtmlを取得して、修正版のスクリーンショットを表示するデモです。


https://github.com/user-attachments/assets/daa6969e-1bb1-4bfb-9a22-b93eda35fcbe



元のデザインは以下です。（わかりにくいですが、スタートボタンの表記が「START」から「クリックして開始」に修正されています。）
![image](https://github.com/user-attachments/assets/bdfc12ec-d554-44ca-bba7-66ea99b281d8)


(※注意)
404エラーになるのは仕様です。amazon bedrockのAPIゲートウェイのURLを貼れば、bedrockからの返信が返ってきますが、現在はダミーのURLを入れています。正しいURLを設定してしまうと、自分が費用負担しているので、（ないとは思いますが）乱用されて費用負担が発生するのを避けるためにこのような状態です。


