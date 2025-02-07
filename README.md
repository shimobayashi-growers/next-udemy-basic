## Udemy 講座

【Next.js】フルスタック開発基本講座(TypeScript/Prisma/Auth)【脱初心者/わかりやすさ重視】
https://www.udemy.com/course/nextjs-basic/

## Next.js のインストール

```
npx create-next-app@^15
✔ What is your project named? … next-udemy-basic
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
? Would you like to customize the import alias (`@/*` by default)? › No / Yes
```

## コマンド

npm run dev
開発モード、キャッシュは保存されない

http://localhost:3000/

upm run build
本番向けビルド、.next フォルダ生成
npm run start
本番環境稼働（キャッシュ有効）

npm run lint
コードの静的解析、build 時にも実行

## コンポーネント比較表

```
public/client_server_ comparison.png
```
