# React

docker hubでnodeを検索、使用するnode.jsのバージョンを`Dockerfile`に記述する

ファイル構成
```
プロジェクトルート/
├── front/ (空のフォルダ)
├── docker-compose.yml
└── Dockerfile
```

コンテナ起動
```
cd react_app
docker-compose up --build
```

コンテナのシェルに入る
```
docker-compose exec front sh
```

Reactのテンプレート作成<br>
`npx create-react-app [プロジェクト名] --template typescirpt --use--npm`で下記例の場合、空の`front`フォルダにReactのテンプレートファイルが作成される
```
npx create-react-app front --template typescirpt --use--npm
```

Reactの作成に成功したかを確認する
```
cd front

/front # npm list react
front@0.1.0 /front
+-- @testing-library/react@13.4.0
| `-- react@18.2.0 deduped
+-- react-dom@18.2.0
| `-- react@18.2.0 deduped
+-- react-scripts@5.0.1
| `-- react@18.2.0 deduped
`-- react@18.2.0
```

コマンドのオプション確認
```
npx create-react-app --help
```

サーバー起動
```
npm start
```
`docker-compose.yml`に指定したポート`localhost:3000`に接続できる



## Reference
- [dockerhub node](https://hub.docker.com/_/node)
- [React Reference](https://react.dev/reference/react)
- [create-react-app](https://github.com/facebook/create-react-app)
- [React Developer Tools (chrome拡張)](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?pli=1)