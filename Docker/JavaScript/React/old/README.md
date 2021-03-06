## Docker環境
参考
- [Docker環境内でcreate-react-app](https://qiita.com/mii288/items/aac597bc02575831ea90)

- [Swagger EditorとSwagger UIとSwaggerのモックAPIサーバーをdocker-compose化してみた](https://qiita.com/matsuda_chikara/items/a4119a972535a4b69201)

### バージョン
- Node：12系

### Docker環境作成手順
・各種Dockerfile作成  
※この段階ではnodeのDockerfileにCMDの個所はつけないようにする

docker-compose.yml作成

・コンテナのビルド
```
$ docker-compose build
```

・コンテナの起動
```
$ docker-compose up -d
```

・Reactプロジェクト作成
```
$ docker-compose exec node create-react-app (プロジェクトフォルダパス)
```

・サーバ立ち上げ
```
$ yarn start
```

・ブラウザでアクセス  
`localhost:3000`もしくは`(DockerホストIP):3000`にアクセス

Docker起動時にサーバも起動するようにする
- nodeのDockerfileに`CMD ["yarn", "start"]`を追記
- `$ docker-compose up -d --build`で更新

・swagger-uiにアクセス  
`localhost:8000/docs`

### パッケージのバージョンが古い時は
参考：[Rails lodash.templateの脆弱性](https://qiita.com/sakakinn/items/f55ee3bdd6cce92a4fde)

`lodash`、`lodash-template`のバージョンが古いために、脆弱性があるとGitHubから警告がくる

その際は、yarn.lockで該当パッケージのことが記述してある部分（以下のような箇所）を一度削除して`yarn install`を実行
```
lodash.template@^4.2.4, lodash.template@^4.4.0:
version "4.4.0"
resolved "https://registry.yarnpkg.com/lodash.template/-/lodash.template-4.4.0.tgz#e73a0385c8355591746e020b99679c690e68fba0"
integrity sha1-5zoDhcg1VZF0bgILmWecaQ5o+6A=
dependencies:
  lodash._reinterpolate "~3.0.0"
  lodash.templatesettings "^4.0.0"
```