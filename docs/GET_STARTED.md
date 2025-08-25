# Get Started

## 開發環境確認

### 基礎確認

1. clone 專案
2. 在 VS Code 狀態列確認行尾為 **LF**、縮排為 **空格:2**（確保 `.editorconfig` 有套用）

### 專案建置

1. 安裝 VS Code 插件
   - EditorConfig for VS Code（必需）
   - Prettier（建議安裝並在 **設定 → Default Formatter** 選擇 Prettier，並啟用`Editor: Format On Save`）
2. `npm install` 安裝環境
3. 重開 VS Code（可選，但建議）
4. `npm run dev` 測試是否可正常進行開發

### 開發設定測試

- 隨意修改檔案後儲存，確認 Prettier 會自動格式化

## 練習流程任務

### Goal

在 main branch 的 README.md 最下方專案成員的部分，新增一行填寫自己的暱稱

> [!NOTE]
> 已經設定無法直接對 `main` push，須以 `GitHub Flow` 的方式完成

### 新開一個開發分支

(若不熟悉 CLI ，也可用 GitHub Desktop / Fork 等 GUI 應用程式)

```sh
git checkout main     # 切換到 main
git fetch             # 取得遠端 main 的最新狀態
git pull              # 若有差異，把改動 merge 到本地 main


git checkout -b 你的branch名稱  # 建立開發分支

# 範例
git checkout -b "feature/add-my-name"

# 若你的 git 版本 >= 2.23 ，也可以
git switch -c "feature/add-my-name"
```

#### 添加你的暱稱到專案成員

1. 到 README.md 最下方專案成員的部分，註解下方新增一行填寫自己的暱稱
2. 將變更加入暫存並提交

```sh
# 加入暫存
git add README.md

# commit(以 conventinal commits 方式撰寫)
git commit -m "docs: add <your-nickname>"
```

#### 發布合併請求(PR)

1. 本地端確認沒問題後， push 到遠端：

```sh
git push -u origin 你的branch名稱
```

2. 到 GitHub 開啟 PR 並指派審查者（可以參考[官方文件](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)，還有這篇[網路教學](https://medium.com/jordanttcdesign/git-%E8%AA%B2%E7%A8%8B%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98-ep4-790f010a7fa3)）
3. 依據 Review 意見修改並重新提交 commit (若有)
4. PR 合併回 `main` 後，就可以刪除本地和遠端的已合併開發分支了

## You did it!

進行到此步驟，恭喜你已經習得基礎的專案協作~

下一步你可以看看:

- [剛才的 Commit 後悔了，想要拆掉重做...(git reset)](https://gitbook.tw/chapters/using-git/reset-commit)
- [另一種合併方式（使用 rebase）](https://gitbook.tw/chapters/branch/merge-with-rebase)(進階，需小心使用)
