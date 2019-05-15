# 概覽
本次midterm project主要內容是以實作天文社基本的社網架構及內容為主。基本上整體內容皆是由本人從0開始進行。其中主要功能包含新增活動至database、即時render新活動至主頁面、活動與行事曆的配合、歡迎頁動畫...等等。
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

## 歡迎頁面動畫

##新增活動

在序號部分，決定該活動顯示的順序。其中驗證的錯誤包含以下3種類別:
1.輸入字串非數字(利用isNan驗證)
2.輸入數字大於現有活動數量+1
3.輸入小於1
4.輸入數字重複