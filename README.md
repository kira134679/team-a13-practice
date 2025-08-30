# 網頁切版直播班 Vite 範例 - Bootstrap 版本(練習用調整版)

## Node.js 版本

- 專案的 Node.js 版本需為 v18 以上
- 查看自己版本指令：`node -v`

## Clone 專案

```sh
git clone https://github.com/kira134679/team-a13-practice.git
```

## 指令列表

- `npm install` - 使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm ru deploy` - 自動化部署

## 資料夾結構

- assets # 靜態資源放置處
  - images # 圖片放置處
  - scss # SCSS 的樣式放置處

- layout # ejs 模板放置處
- pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

### 注意事項

- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

## 開發模式的監聽

vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能

## 部署 gh-pages 流程

```sh
npm run deploy
```

## 專案成員

<!-- 下方新增一行填寫自己的暱稱 -->

yuju
Chen
Eric
Drew
