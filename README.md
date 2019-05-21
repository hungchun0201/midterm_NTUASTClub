# 概覽
__實作台大天文社基本的社網架構及內容__。

其中主要功能包含新增活動至database、即時render新活動至主頁面、活動與行事曆的配合、歡迎頁動畫、背景粒子動畫...等等。
* 本次實作主要有運用到之技術概述如下:
1. 前端為React.js，並有使用React router
2. 後端為Node.js以及express.js
3. 在API部分選用socket.io
4. database使用mongoDB，並用mongoose進行操作
5. 所用到的library以及其他套件包含
   * bootstrap
   * font-awesome
   * react-router-hash-link
   * react-items-carousel
   * material UI
6. 後端有使用到async await的非同步操作

# 使用方式

* npm start開啟前端
* npm run devstart開啟後端
* 後端資料庫密碼為LIN123456(原本有使用dotenv隱藏)

# 程式碼詳解
主要顯示網頁時的架構為
- navbar
- cilentPage或是addActivity
  
  其中clientPage包含「歡迎頁面、關於我們、近期活動、粒子效果動畫、行事曆、footer」
## Navbar導覽列實作
NAVBAR的美編主要是利用CSS檔進行實作，在參考網路上的模板之後進行修改。並配合React-Router的連結進行顯示。並且使用react-router-hash-link，使的網頁跳轉時能有動畫效果。
> 相關檔案
* ./src/css/navbar.css
> 應用技術
* CSS transition動畫實作
* react-router

## 歡迎頁面動畫

<img src="./src/img/welcomePageAnime.gif" width="100%" >

此動畫來源於舊天文社PTT BBS社版。原先在PTT上可用動畫播放，但是用網頁板或手機板已無法觀看。如何將ptt上的動畫重現的確是一挑戰，本人利用字串分析的正則表達式擷取資料(RegExp)以及setTimeOut function對原程式碼進行改寫，讓此動畫重現。

(原網頁資料如連結:
https://www.ptt.cc/bbs/NTUastclub/M.1409239331.A.3D9.html)
> 相關檔案
* ./src/component/welcomePageText.js
* ./src/component/welcomePage.js
> 應用技術
* 正則表達式字串分析
* 非同步函數處理

## 活動顯示
在前端部分利用react-items-carousel套件，並且在進行修改後，顯示carousel動畫，使用者即可依此瀏覽近期活動。
> 應用技術
* react-items-carousel套件之使用及修改。
* socket.io接收後端資料並即時更新。
> 相關檔案
* ./src/component/activity.js
## 新增活動

此部分可供管理者直接新增活動至前端，此處有運用到前後端的配合。在「新增活動」頁面進行更新後，資料將被傳送至後端，並在進行資料確性檢查後儲存。儲存後再由後端發送新資料至前端做即時更新。未來會設定權限，只讓具有管理員身分的人做修改

在序號部分，決定該活動顯示的順序。其中驗證的錯誤包含以下3種類別:
1. 輸入字串非數字(先利用input type="number再利用isNan驗證)
2. 輸入數字大於現有活動數量+1
3. 輸入小於1

新增活動時，若序號重複，則後端會將該序號後的活動序號全部+1。並在回傳活動資料時，以活動順序排序，使前端顯示可以依照此序號新增


> 相關檔案
* ./src/component/add_activity.js
* ./backend/server.js
* ./backend/activityModul.js
> 使用技術
* mongoDB/mongoose(儲存、修改、刪除資料...等等)
* async await promise
* express.js
* socket.io

## 粒子效果動畫
先使用css檔案設定好簡單的transition。並且在js中使用addEventListener偵測頁面捲動，捲動時改變粒子的圖片的位置，即可觸發CSS動畫。
> 相關檔案
* ./src/component/particle.js
* ./src/css/style.css
> 應用技術
* CSS transition動畫實作
* react中新增使用全域動畫
* LifeCycle的應用

## 行事曆
本部分是利用原本網路上的行事曆模板做修改。原本行事曆的確可以動態生成本月月曆，但是是使用jQuery實作，我將其改成是react的code，配合jsx動態生成html碼。可以點擊不同日期，以及顯示上/下一月份，也是個人新增的部分。未來希望可以跟活動資料配合。

> 相關檔案
* ./src/container/calender.js
* ./src/css/calender.css
* ./src/component/Button.js
> 應用技術
* 利用Date物件自己生成一個月曆
# 我的貢獻
基本上整體內容皆是由本人從0開始進行。除了套件(已在概覽中說明)以外，有使用到他人的code的部分如下:
* 行事曆的CSS
* navbar的CSS
  
不過都有加入自己修改的東西，以符合自己網頁的使用。

# 心得

本次期中專題個人覺得蠻有收穫的。因為其實自己原本知道的也很少，所以常常需要查詢大量資料，甚至曾經開了150幾個跟web有關的分頁沒關。花了大量時間了解CSS的排版(全部CSS檔案內容就有6、700行)、JavaScript的運作機制、React Router以及LifeCycle、前後端的連結、還有Promise的使用。尤其當初在前後端連結花了相當多時間了解，最後決定使用socket是因為他及時更新的特性，這樣未來增加一些由後端主動發起的互動比較方便。因為很多都是很新很實用的技術，因此雖然很累但也非常充實。
## 未來展望
* 加入登入系統，並增加活動頁面權限管理
* 行事曆和相關活動的結合
* 可修改已上架的活動
