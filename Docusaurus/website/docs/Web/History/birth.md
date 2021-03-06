---
id: web-birth
title: Web - Web の誕生
sidebar_label: Web の誕生
description: Webの起源とその特徴まとめ
keywords:
  - Web
  - 歴史
---

## 起源
スイス・ジュネーヴに <ruby><rb>CERN</rb><rt>セルン</rt></ruby>（ European Organization for Nuclear Research、欧州原子核研究機構）という国際的な研究所がある。  
そこに当時、在籍していた <ruby><rb>Tim</rb><rt>ティム</rt></ruby> <ruby><rb>Berners-Lee</rb><rt>バーナーズ=リー</rt></ruby> という人物がいた。

1989年3月、研究者たちの科学データ閲覧のための分散リアルタイムシステムを考案。  
その後、CERN 内の情報にアクセスするためのグローバルハイパーテキストプロジェクトの提案を行う。

1990年11月、それをより具体化させたハイパーメディアを用いたインターネットベースの分散情報管理システムとして Web の提案書（ WorldWideWeb : Proposal for a HyperText Project ）を提出。  
その翌日から実装を開始し、同年12月に世界最初のブラウザ・HTMLエディタである WorldWideWeb と世界最初のサーバである httpd を完成させた。

1991年8月6日、世界で最初の Web サイト（ http://info.cern.ch/ ）が公開されるとともに、ブラウザである WorldWideWeb を発表。
そのため、Web の起源としてはこの日を指すことが多い。  
その後、WorldWideWeb を誰に対しても無償で開放することを発表。  
ただ無償で公開するだけでなく、どうやって作られているのか、その裏側の仕組みなども公開された。

Berners-Lee 氏および CERN の発表以来、Web は少しずつ普及。  
その普及を一気に推し進めたものとして Mosaic の存在がある。

Mosaic は1993年にイリノイ大学の NCSA（ National Center for Supercomputing Application、米国立スーパーコンピュータ応用研究所）が公開したブラウザ。  
従来のブラウザが文字情報だけしか扱えなかったのに対して、画像を混在させることができた。  
この Mosaic は Internet Explorer や Firefox など、現在のブラウザの元になっている。

## 特徴
### ハイパーメディアとしての Web
Web はインターネットを使ったハイパーメディアとして設計された。  
従来のハイパーメディアと違い、インターネットを用いているため不特定多数の情報をリンクさせあうことができ、システムの規模を大きくしやすいという利点を持っている。  
その反面、情報の集中的な管理が難しくなり、リンク切れを起こしやすいという欠点も持ち合わせている。

Web の特徴としては、シンプルな単一方向リンクであることがあげられる。
従来のリンクの概念から、Web に複雑なリンク機能を取り込む動きもあったものの、結果的にシンプルな単一方向リンクだけが使われることとなった。
これにより、ユーザにとってわかりやすく実装も簡単なリンクであることから、web はここまで普及したとも言える。

### 分散システムとしての Web
従来の分散システムの RPC は閉じたネットワーク環境内において、通信相手がある程度決まっている状態でのサービス提供を行うシステムとしては優れていた。しかし、オープンなネットワーク環境において、不特定多数のクライアントに対してサービスを提供するシステムには向いていなかった。

それに対して、Web はオープンで不特定多数のクライアントを相手にするシステム。  
世界中のユーザが多様なブラウザやデバイスで、世界中の Web サービスを利用できるようになっている。  
これは、クライアントとサーバ間のインタフェースを HTTP というシンプルなプロトコルで固定したことにより実現できている。

