---
id: java-singleton
title: Java - シングルトンパターン
sidebar_label: シングルトンパターン
description: Javaのシングルトンクラスの特徴まとめ
keywords:
  - Java
  - シングルトンパターン
---

- 検証バージョン：openjdk version 12

## 概要
デザインパターンの1つ。

通常、クラスのインスタンス化を行うことで複数のオブジェクトを作成できるが、あるクラスをもとに作られるオブジェクトを1つに限定したいケースがある。
例えば、システム稼働時にあるクラスのオブジェクトは1つしか存在しないことを保証したいケース。

Java API でもこのパターンを適用したクラスが存在する。

## 特徴
シングルトンパターンのクラスの例。  
変数名、メソッド名、クラス名は任意のものでよい。
```java
class Singleton {
   private static final Singleton instance = new Singleton();
   private Singleton() {}
   public static Singleton getInstance() {
       return instance;
   }
}
```

### インスタンス変数
`private`指定され、`static final`として宣言。  
これにより、このクラスが読み込みされたときに一度だけインスタンス化され、変数に代入される。

### コンストラクタ
`private`指定しているため、外部からは呼び出すことができない。

コンストラクタを記述していないと、デフォルトコンストラクタが追加されるため、外部からインスタンス化できるようになってしまう。  
それを防ぐために明示的に空のコンストラクタを定義する。

### getInstance()メソッド
変数に代入されているインスタンスを返す。

シングルトンパターンのクラスのインスタンスは、このメソッドからのみ取得できるようになっている。
そのため、このクラスから作られたオブジェクトは**1つのみ**であると保証できる。
