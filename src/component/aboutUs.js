import React from 'react';
class aboutUs extends React.Component {
    render() {
        return (
            <section id="About-us">
                <div className="justify-content-end row header">
                    <h1>關於我們</h1>
                    <div className="col-4">
                        <img src="../img/together.jpg" width="100%" alt="" />
                    </div>
                    <div className="col-8">

                        <div >
                            <h2>社團現況</h2>
                            <p>
                                台大天文社創立於民國48年12月6日，我們的前身是台大科研社。創社之初，探討研究的 ​​內容包含整個自然科學領域。當時計算機科技蓬勃發展，加上社團成員的專長取向，在研究 ​​方面主要著重在計算機學習與天文領域。與此同時，也存在其他性質類似的社團作為競爭者。 ​​在此背景下，自79年3月6日起，本社正式更名為台大天文社，全力投入於天文領域的活動。 ​​從天文科普到理論天文學、觀測天文學皆有涉略，也舉辦多項天文活動，促進社員交流。今 ​​年年底，本社也將邁入社團60週年，目前有約一百位的社員會和我們同樂，我們將持續的
                                探索星空，追求那宇宙的最終疆界～
                                </p>
                            <h2>得獎紀錄</h2>
                            <p>
                                國立臺灣大學104年學生自治組織及學生社團評鑑 學術組 優等 <br /> ​​國立臺灣大學105年學生自治組織及學生社團評鑑 學術組 優等 <br /> ​​國立臺灣大學106年學生自治組織及學生社團評鑑 學術組 特優 <br /> ​​國立臺灣大學106年學生自治組織及學生社團評鑑 學術組 最佳財務管理獎
                                    </p>
                            <h2>社團幹部</h2>

                            <ul className="member-table">
                                <li>社長 　　　　何秉樵</li>
                                <li>副社長 　　　曾怡甄</li>
                                <li>特別副社長 　陳文心</li>
                                <li>教學 　　　　陳子翔</li>
                                <li>儀器 　　　　羅文新</li>
                                <li>文書 　　　　劉冠妤</li>
                                <li>美宣 　　　　曾怡甄</li>
                                <li>總務 　　　　劉芳妤</li>
                                <li>活動 　　　　楊詠雯</li>
                                <li>網管 　　　　江元裕</li>
                                <li>森多負責人 　林泓均</li>
                                <li>讀書會負責人 郭奕萱</li>
                                <li>快閃負責人 　羅文新</li>
                                <li>地縛靈 　　　江元裕</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

        );
    }
}
export default aboutUs;