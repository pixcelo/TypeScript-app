# React

docker hubでnodeを検索、使用するnode.jsのバージョンを`Dockerfile`に記述する

ファイル構成
```
プロジェクトルート/
├── front/ (フォルダ)
├── docker-compose.yml
└── Dockerfile
```

コンテナ起動
```
cd react_app
docker-compose up
```

コンテナのシェルに入る
```
docker-compose exec front sh
```

Reactのテンプレート作成
```
npx create-react-app . --template typescript --use--npm
```

Reactの作成に成功したかを確認する
```
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

## Reference
- [dockerhub node](https://hub.docker.com/_/node)