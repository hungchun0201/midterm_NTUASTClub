// import io from 'socket.io-client';
// // Connecting to socket.io
// const socket = io.connect("http://localhost:3002");
// // Checking for connection
// if (socket !== undefined) {
//   console.log("Connected to sockets! on welcomePageText");
// }
// let text = "";
let time = [];
let frames = [];
// async function getText() {
//   await socket.on("getText", allText => {
//     console.log(allText);
//     text = allText;
//     time = text.match(/(\^L[01]\.?[1-9]?){1}/gm).map(e => e.slice(2));
//     let all = text.split(/(\^L[01]\.?[1-9]?){1}/gm);
//     frames = [];
//     for (let i = 0; i < all.length; ++i) {
//       if (i % 2 === 0) {
//         frames.push(all[i]);
//       }
//     }
//     time.push('2');
//     time = time.map(e => parseFloat(e) * 1000);
//     time = time.map((e, index) => {
//       for (let i = 0; i < index; ++i) {
//         e += time[i];
//       }
//       return e;
//     })

//   });
//   console.log("YAAAA");
//   return { time, frames };
// }
// getText();
//console.log(time);
//export default getText();

const text = `</div>





^L0.2











                      <span class="hl">你.</span>
^L0.2











                      <span class="hl">你</span>..
^L0.2











                      <span class="hl">你...</span>
^L0.2











                      <span class="hl">你..</span>
^L0.2











                      <span class="hl">你.</span>
^L0.2











                      <span class="hl">你，</span><span class="f0 hl">愛</span>
^L0.2











                      <span class="hl">你，</span>愛<span class="f0 hl">仰望</span>
^L0.2











                      <span class="hl">你，愛</span>仰<span class="f0 hl">望</span>
^L0.2











                      <span class="f0 hl">你，</span><span class="hl">愛仰望</span>星<span class="f0 hl">空</span>
^L0.2











                      <span class="f0 hl">你，愛</span>仰望<span class="hl">星空</span><span class="f0 hl">嗎</span>
^L0.2











                      <span class="f0 hl">你，愛仰望</span>星空<span class="hl">嗎?</span>
^L0.5











                      <span class="f0 hl">你，愛仰望星空嗎?</span>
^L0.1











                    .‧.，<span class="f0 hl">愛仰望星空嗎?</span>
                   ..
                      .
^L0.1










                          .
                    .‧.. ‧<span class="f0 hl">仰望星空嗎?</span>
                  ..
                    .
                   .
^L0.1










                      . .
                    ..‧ :.&#39;. <span class="f0 hl">望星空嗎?</span>
                  .
                   .‧.
                     :    ..   .
                       ‧.
^L0.1










                      .. ‧ .
                     ..   :    .<span class="f0 hl">星空嗎?</span>

                      ‧.
                         :
                         ..   .
                          ‧.     ‧
                              :‧
^L0.1










                      .    . ‧   .
                       .  : .     <span class="f0 hl">空嗎?</span>
                                    .
                         ‧  .            .‧
                            :        ..   .
                               ‧.     ‧
                                  :‧
^L0.1











                           . .      <span class="f0 hl">嗎?</span>
                                              .
                    ‧  .                      .
                      :   .              . ‧.
                        ‧.  . ‧      .&#34;
                            .       :‧
                                 &#39;

^L0.1









                                              .
                                             .
                     .&#39;                       &#34; .
                      .                    .  .
                       .               .‧
                          :      ..   .
                           ‧.     ‧
                                :‧
^L0.1







                                     .
                                    ‧..
                                       .‧
                                           &#34;. .
                                             . &#39;.
                       .                     .
                        .                   .‧
                           :      .       .
                              ‧.      ‧
                                    :‧
^L0.1



                               .
                            .‧
                              :.
                               ‧ ..
                                   ，..   .
                                       ‧.
                                       .‧  &#39;
                                           &#34; .
                                           .&#39;. .
                                            .
                                          .‧
                                         :.
                                  ‧.    ‧
                                       :‧
^L0.4





                         <span class="f0 hl">可曾在夜闌人靜的黑夜時分</span>
^L0.4





                         可曾在夜闌人靜的黑夜時分
^L0.4





                         <span class="hl">可曾在夜闌人靜的黑夜時分</span>

                         <span class="f0 hl">暫忘身後的藍色行星</span>
^L0.4





                         可曾在夜闌人靜的黑夜時分

                         暫忘身後的藍色行星
^L0.4





                         <span class="f0 hl">可曾在夜闌人靜的黑夜時分</span>

                         <span class="hl">暫忘身後的藍色行星</span>
^L0.4







                         暫忘身後的藍色行星

                         <span class="f0 hl">聽聽那銀河的協奏曲？</span>
^L0.4







                         <span class="f0 hl">暫忘身後的藍色行星</span>

                         聽聽那銀河的協奏曲？
^L1









                         <span class="hl">聽聽那銀河的協奏曲？</span>
^L0.4









                         聽聽那銀河的協奏曲？
^L0.4









                         <span class="f0 hl">聽聽那銀河的協奏曲？</span>
^L0.4
^L0.4



                       █<span class="f0 b7">▅▅▅▅▅▅▅▅▅▅▅▅</span>█
                       █ █████∣█████ █
                       █ █████∣█████ █
                       █ █████∣█████ █
                       █ █████∣█████ █
                       █ █████∣█████ █
                       █ █████∣█████ █
                       █ █████∣█<span class="b7">Mg0722</span>█ █
                       █ █████∣█████ █
                       █ █████∣█████ █
                       █ █████∣█████ █
                       █ █████∣█████ █
                       █ █████∣█████ █
                       █▄▄▄▄▄▄▄▄▄▄▄▄█
^L0.4



                       █<span class="f0 b7">▅▅▅▅▅▅▅▅▅▅▅▅</span>█
                       █ █▇▅▃▁  ▁▄▅▇█ █
                       █ █████  █████ █
                       █ █████  █████ █
                       █ █████  █████ █
                       █ █████  █████ █
                       █ █████  █████ █
                       █ █████  █<span class="b7">Mg0722</span>█ █
                       █ █████  █████ █
                       █ █████  █████ █
                       █ █████  █████ █
                       █ █████  █████ █
                       █ █████  █████ █
                       █▄<span class="f0 b7">▇▄▃▁ </span>  <span class="f0 b7"> ▁▃▅▇</span>▄█
^L0.4



                       █<span class="f0 b7">▅▅▅▅▅▅▅▅▅▅▅▅</span>█
                       █ █                  █ █
                       █ ██              ██ █
                       █ ███          ███ █
                       █ ████      ████ █
                       █ ████      ████ █
                       █ ████      ████ █
                       █ <span class="b7">Mg0722</span>█      ████ █
                       █ ████      ████ █
                       █ ████      ████ █
                       █ ████      ████ █
                       █ ████      ████ █
                       █ ████      ████ █
                       █▄ ███ ▄▄ ███ ▄█
                              ██      ██
                                █      █
^L0.4



                       █<span class="f0 b7">▅▅▅▅▅▅▅▅▅▅▅▅</span>█
                       █ █                  █ █
                       █ █                  █ █
                       █ ██              ██ █
                       █ ██              ██ █
                       █ ███          ███ █
                       █ ███          ███ █
                       █ ███          ███ █
                       █ ███          ███ █
                       █ ███          ███ █
                       █ ███          ███ █
                       █ ███          ███ █
                       █ ███          ███ █
                       █▄ ██ ▄▄▄▄ ██ ▄█
                            ██          ██
                              █          █
                              █          █
^L0.4



                       █<span class="f0 b7">▅▅▅▅▅▅▅▅▅▅▅▅</span>█
                       █ █                  █ █
                       █ █                  █ █
                       █ █                  █ █
                       █ █                  █ █
                       █ █                  █ █
                       █ █                  █ █
                       █ █                  █ █
                       █ █                  █ █
                       █ █                  █ █
                       █ █                  █ █
                       █ █                  █ █
                       █ █                  █ █
                       █ █ ▄▄▄▄▄▄▄▄ █ █
                          █                  █
                          █                  █
                          █                  █
                          █                  █
^L0.4



                       █<span class="f0 b7">▅▅▅▅▅▅▅▅▅▅▅▅</span>█
                       ██                    ██
                     ███                    ███
                     ███                    ███
                   ████                    ████
                   ████<span class="f0 hl">廣闊的星空已張開雙手</span>████
                   ████                    ████
                   ████                    ████
                   ████                    ████
                   ████                    ████
                   ████                    ████
                   ████                    ████
                   ████                    ████
                   ███  ▄▄▄▄▄▄▄▄▄▄  ███
                   ██                            ██
                   ██                            ██
                   █                                █
                   █                                █
^L0.4



                       █<span class="f0 b7">▅▅▅▅▅▅▅▅▅▅▅▅</span>█
                       ██                    ██
                     ███                    ███
                   ████                    ████
                 █████                    █████
                 █████<span class="hl">廣闊的星空已張開雙手</span>█████
                 █████                    █████
                 █████                    █████
                 █████<span class="f0 hl">且由平日繁瑣的</span>      █████
                 █<span class="b7">Mg0722</span>█                    █████
                 █████      <span class="f0 hl">小小世界昇華</span>  █████
                 █████                    █████
                 █████                    █████
                 ████  ▄▄▄▄▄▄▄▄▄▄  ████
                 ███                            ███
                 ██                                ██
                 █                                    █
^L0.4



                       █<span class="f0 b7">▅▅▅▅▅▅▅▅▅▅▅▅</span>█
               ▁▃▅▇██                    ██▇▄▃▁
               ██████                    ██████
               ██████                    ██████
               ██████                    ██████
               ██████<span class="hl">廣闊的星空已張開雙手</span>██████
               █<span class="b7">Mg0722</span>██                    ██████
               ██████                    ██████
               ██████<span class="hl">且由平日繁瑣的</span>      ██████
               ██████                    ██████
               ██████      <span class="hl">小小世界昇華</span>  ██████
               ██████                    ██████
               ██████                    ██████
               <span class="f0 b7">▁▃▄▇</span>█▄▄▄▄▄▄▄▄▄▄▄▄█<span class="f0 b7">▇▅▃▁</span>

^L1



                       █<span class="f0 b7">▅▅▅▅▅▅▅▅▅▅▅▅</span>█
               ▁▃▅▇██                    ██▇▄▃▁
               ██████                    ██████
               ██████                    ██████
               ██████                    ██████
               ██████<span class="hl">廣闊的星空已張開雙手</span>██████
               █<span class="b7">Mg0722</span>██                    ██████
               ██████                    ██████
               ██████<span class="hl">且由平日繁瑣的</span>      ██████
               ██████                    ██████
               ██████      <span class="hl">小小世界</span><span class="f3 hl">昇華</span>  ██████
               ██████                    ██████
               ██████                    ██████
               <span class="f0 b7">▁▃▄▇</span>█▄▄▄▄▄▄▄▄▄▄▄▄█<span class="f0 b7">▇▅▃▁</span>

^L0.4



                       █<span class="f0 b7">▅▅▅▅▅▅▅▅▅▅▅▅</span>█
               ▁▃▅▇██                    ██▇▄▃▁
               ██████                    ██████
               ██████                    ██████
               ██████                    ██████
               ██████<span class="f0 hl">廣闊的星空已張開雙手</span>██████
               ██████                    ██████
               ██████                    ██████
               █<span class="b7">Mg0722</span>██<span class="f0 hl">且由平日繁瑣的</span>      ██████
               ██████                    ██████
               ██████      <span class="f0 hl">小小世界昇華</span>  ██████
               ██████                    ██████
               ██████                    ██████
               <span class="f0 b7">▁▃▄▇</span>█▄▄▄▄▄▄▄▄▄▄▄▄█<span class="f0 b7">▇▅▃▁</span>

^L0.4
^L0.4






                         <span class="f0 hl">                          ◢◣</span>
                                                 ◢██◣
                                               ◢████◣
                                                           ◢◣
                                                         ◢██◣
                                                       ◢████◣
                                         ◢◣        ◢██████◣
                                       ◢██◣    ◢████████◣
                             ◢◣    ◢████◣◢██████████◣
               ◢◣        ◢██◣◢██████◣
             ◢██◣    ◢████████████◣
           ◢████◣◢██████████████◣
         ◢██████◣    ◢████████████◣
       ◢████████◣◢██████████████◣
     ◢██████████◣
   ◢████████████◣
^L0.4



<span class="f0 hl">讓我們一同</span>


                                                   <span class="f2">◢◣</span>
                                                 <span class="f2">◢██◣</span>
                                               <span class="f2">◢████◣</span>
                                                           <span class="f2">◢◣</span>
                                                         <span class="f2">◢██◣</span>
                                                       <span class="f2">◢████◣</span>
                                         <span class="f2 hl">◢◣ </span>       <span class="f2">◢██████◣</span>
                                       <span class="f2 hl">◢██◣</span>    <span class="f2">◢████████◣</span>
                             <span class="f2">◢◣    </span><span class="f2 hl">◢████◣</span><span class="f2">◢██████████◣</span>
<span class="f2 hl">               ◢◣ </span>       <span class="f2">◢██◣</span><span class="f2 hl">◢██████◣</span>
<span class="f2 hl">             ◢██◣</span>    <span class="f2">◢███</span><span class="f2 b2 hl">◢████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">           ◢████◣</span><span class="f2">◢███</span><span class="f2 b2 hl">◢██████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">         ◢██████◣    ◢████████████◣</span>
<span class="f2 hl">       ◢████████◣◢██████████████◣</span>
<span class="f2 hl">     ◢██████████◣</span>
<span class="f2 hl">   ◢████████████◣</span>
^L0.4



讓我們一同<span class="f0 hl">沐浴在山林中細聽那銀河協奏曲；</span>


                                                   <span class="f2">◢◣</span>
                                                 <span class="f2">◢██◣</span>
                                               <span class="f2">◢████◣</span>
                                                           <span class="f2">◢◣</span>
                                                         <span class="f2">◢██◣</span>
                                                       <span class="f2">◢████◣</span>
                                         <span class="f2 hl">◢◣ </span>       <span class="f2">◢██████◣</span>
                                       <span class="f2 hl">◢██◣</span>    <span class="f2">◢████████◣</span>
                             <span class="f2">◢◣    </span><span class="f2 hl">◢████◣</span><span class="f2">◢██████████◣</span>
<span class="f2 hl">               ◢◣   </span>     <span class="f2">◢██◣</span><span class="f2 hl">◢██████◣</span>
<span class="f2 hl">             ◢██◣</span>    <span class="f2">◢███</span><span class="f2 b2 hl">◢████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">           ◢████◣</span><span class="f2">◢███</span><span class="f2 b2 hl">◢██████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">         ◢██████◣    ◢████████████◣</span>
<span class="f2 hl">       ◢████████◣◢██████████████◣</span>
<span class="f2 hl">     ◢██████████◣</span>
<span class="f2 hl">   ◢████████████◣</span>
^L0.4



<span class="hl">讓我們一同沐浴在山林中</span>細聽那銀河協奏曲


                                                   <span class="f2">◢◣</span>
                                                 <span class="f2">◢██◣</span>
                                               <span class="f2">◢████◣</span>
                                                           <span class="f2">◢◣</span>
                                                         <span class="f2">◢██◣</span>
                                                       <span class="f2">◢████◣</span>
                                         <span class="f2 hl">◢◣ </span>       <span class="f2">◢██████◣</span>
                                       <span class="f2 hl">◢██◣</span>    <span class="f2">◢████████◣</span>
                             <span class="f2">◢◣    </span><span class="f2 hl">◢████◣</span><span class="f2">◢██████████◣</span>
<span class="f2 hl">               ◢◣   </span>     <span class="f2">◢██◣</span><span class="f2 hl">◢██████◣</span>
<span class="f2 hl">             ◢██◣</span>    <span class="f2">◢███</span><span class="f2 b2 hl">◢████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">           ◢████◣</span><span class="f2">◢███</span><span class="f2 b2 hl">◢██████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">         ◢██████◣    ◢████████████◣</span>
<span class="f2 hl">       ◢████████◣◢██████████████◣</span>
<span class="f2 hl">     ◢██████████◣</span>
<span class="f2 hl">   ◢████████████◣</span>
^L0.4



<span class="hl">讓我們一同沐浴在山林中細聽那銀河協奏曲</span>


                                                   <span class="f2">◢◣</span>
                                                 <span class="f2">◢██◣</span>
                                               <span class="f2">◢████◣</span>
                                                           <span class="f2">◢◣</span>
                                                         <span class="f2">◢██◣</span>
                                                       <span class="f2">◢████◣</span>
                                         <span class="f2 hl">◢◣ </span>       <span class="f2">◢██████◣</span>
                                       <span class="f2 hl">◢██◣</span>    <span class="f2">◢████████◣</span>
                             <span class="f2">◢◣    </span><span class="f2 hl">◢████◣</span><span class="f2">◢██████████◣</span>
<span class="f2 hl">               ◢◣   </span>     <span class="f2">◢██◣</span><span class="f2 hl">◢██████◣</span>
<span class="f2 hl">             ◢██◣</span>    <span class="f2">◢███</span><span class="f2 b2 hl">◢████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">           ◢████◣</span><span class="f2">◢███</span><span class="f2 b2 hl">◢██████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">         ◢██████◣    ◢████████████◣</span>
<span class="f2 hl">       ◢████████◣◢██████████████◣</span>
<span class="f2 hl">     ◢██████████◣</span>
<span class="f2 hl">   ◢████████████◣</span>
^L0.4



<span class="hl">讓我們一同沐浴在山林中細聽那銀河協奏曲；</span>


                                                   <span class="f2">◢◣</span>
<span class="f0 hl">體驗沁涼的觀星之夜—</span>                             <span class="f2">◢██◣</span>
                                               <span class="f2">◢████◣</span>
                                                           <span class="f2">◢◣</span>
                                                         <span class="f2">◢██◣</span>
                                                       <span class="f2">◢████◣</span>
                                         <span class="f2 hl">◢◣ </span>       <span class="f2">◢██████◣</span>
                                       <span class="f2 hl">◢██◣</span>    <span class="f2">◢████████◣</span>
                             <span class="f2">◢◣    </span><span class="f2 hl">◢████◣</span><span class="f2">◢██████████◣</span>
<span class="f2 hl">               ◢◣   </span>     <span class="f2">◢██◣</span><span class="f2 hl">◢██████◣</span>
<span class="f2 hl">             ◢██◣</span>    <span class="f2">◢███</span><span class="f2 b2 hl">◢████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">           ◢████◣</span><span class="f2">◢███</span><span class="f2 b2 hl">◢██████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">         ◢██████◣    ◢████████████◣</span>
<span class="f2 hl">       ◢████████◣◢██████████████◣</span>
<span class="f2 hl">     ◢██████████◣</span>
<span class="f2 hl">   ◢████████████◣</span>
^L0.4



<span class="hl">讓我們一同沐浴在山林中細聽那銀河協奏曲；</span>


                                                   <span class="f2">◢◣</span>
體驗沁涼的觀星之夜—                             <span class="f2">◢██◣</span>
                                               <span class="f2">◢████◣</span>
                                                           <span class="f2">◢◣</span>
                                                         <span class="f2">◢██◣</span>
                                                       <span class="f2">◢████◣</span>
                                         <span class="f2 hl">◢◣ </span>       <span class="f2">◢██████◣</span>
                                       <span class="f2 hl">◢██◣</span>    <span class="f2">◢████████◣</span>
                             <span class="f2">◢◣    </span><span class="f2 hl">◢████◣</span><span class="f2">◢██████████◣</span>
<span class="f2 hl">               ◢◣   </span>     <span class="f2">◢██◣</span><span class="f2 hl">◢██████◣</span>
<span class="f2 hl">             ◢██◣</span>    <span class="f2">◢███</span><span class="f2 b2 hl">◢████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">           ◢████◣</span><span class="f2">◢███</span><span class="f2 b2 hl">◢██████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">         ◢██████◣    ◢████████████◣</span>
<span class="f2 hl">       ◢████████◣◢██████████████◣</span>
<span class="f2 hl">     ◢██████████◣</span>
<span class="f2 hl">   ◢████████████◣</span>
^L0.4



<span class="hl">讓我們一同沐浴在山林中細聽那銀河協奏曲；</span>


                                                   <span class="f2">◢◣</span>
<span class="hl">體驗沁涼的觀星之夜—</span>                             <span class="f2">◢██◣</span>
                                               <span class="f2">◢████◣</span>
                  <span class="f0 hl">品嘗星光與山嵐共同沏上的佳茗</span>             <span class="f2">◢◣</span>
                                                         <span class="f2">◢██◣</span>
                                                       <span class="f2">◢████◣</span>
                                         <span class="f2 hl">◢◣ </span>       <span class="f2">◢██████◣</span>
                                       <span class="f2 hl">◢██◣</span>    <span class="f2">◢████████◣</span>
                             <span class="f2">◢◣    </span><span class="f2 hl">◢████◣</span><span class="f2">◢██████████◣</span>
<span class="f2 hl">               ◢◣   </span>     <span class="f2">◢██◣</span><span class="f2 hl">◢██████◣</span>
<span class="f2 hl">             ◢██◣</span>    <span class="f2">◢███</span><span class="f2 b2 hl">◢████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">           ◢████◣</span><span class="f2">◢███</span><span class="f2 b2 hl">◢██████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">         ◢██████◣    ◢████████████◣</span>
<span class="f2 hl">       ◢████████◣◢██████████████◣</span>
<span class="f2 hl">     ◢██████████◣</span>
<span class="f2 hl">   ◢████████████◣</span>
^L0.4



<span class="hl">讓我們一同沐浴在山林中細聽那銀河協奏曲；</span>


                                                   <span class="f2">◢◣</span>
<span class="hl">體驗沁涼的觀星之夜—</span>                             <span class="f2">◢██◣</span>
                                               <span class="f2">◢████◣</span>
                  品嘗星光與山嵐<span class="f0 hl">共同沏上的佳茗</span>             <span class="f2">◢◣</span>
                                                         <span class="f2">◢██◣</span>
                                                       <span class="f2">◢████◣</span>
                                         <span class="f2 hl">◢◣ </span>       <span class="f2">◢██████◣</span>
                                       <span class="f2 hl">◢██◣</span>    <span class="f2">◢████████◣</span>
                             <span class="f2">◢◣    </span><span class="f2 hl">◢████◣</span><span class="f2">◢██████████◣</span>
<span class="f2 hl">               ◢◣   </span>     <span class="f2">◢██◣</span><span class="f2 hl">◢██████◣</span>
<span class="f2 hl">             ◢██◣</span>    <span class="f2">◢███</span><span class="f2 b2 hl">◢████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">           ◢████◣</span><span class="f2">◢███</span><span class="f2 b2 hl">◢██████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">         ◢██████◣    ◢████████████◣</span>
<span class="f2 hl">       ◢████████◣◢██████████████◣</span>
<span class="f2 hl">     ◢██████████◣</span>
<span class="f2 hl">   ◢████████████◣</span>
^L0.4



<span class="hl">讓我們一同沐浴在山林中細聽那銀河協奏曲；</span>


                                                   <span class="f2">◢◣</span>
<span class="hl">體驗沁涼的觀星之夜—</span>                             <span class="f2">◢██◣</span>
                                               <span class="f2">◢████◣</span>
                  <span class="hl">品嘗星光與山嵐</span><span class="f0 hl">共同沏上的佳茗        </span>     <span class="f2">◢◣</span>
                                                         <span class="f2">◢██◣</span>
                                                       <span class="f2">◢████◣</span>
                                         <span class="f2 hl">◢◣ </span>       <span class="f2">◢██████◣</span>
                                       <span class="f2 hl">◢██◣</span>    <span class="f2">◢████████◣</span>
                             <span class="f2">◢◣    </span><span class="f2 hl">◢████◣</span><span class="f2">◢██████████◣</span>
<span class="f2 hl">               ◢◣   </span>     <span class="f2">◢██◣</span><span class="f2 hl">◢██████◣</span>
<span class="f2 hl">             ◢██◣</span>    <span class="f2">◢███</span><span class="f2 b2 hl">◢████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">           ◢████◣</span><span class="f2">◢███</span><span class="f2 b2 hl">◢██████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">         ◢██████◣    ◢████████████◣</span>
<span class="f2 hl">       ◢████████◣◢██████████████◣</span>
<span class="f2 hl">     ◢██████████◣</span>
<span class="f2 hl">   ◢████████████◣</span>
^L0.4



<span class="hl">讓我們一同沐浴在山林中細聽那銀河協奏曲；</span>


                                                   <span class="f2">◢◣</span>
<span class="hl">體驗沁涼的觀星之夜—</span>                             <span class="f2">◢██◣</span>
                                               <span class="f2">◢████◣</span>
                  <span class="hl">品嘗星光與山嵐</span>共同沏上的佳茗             <span class="f2">◢◣</span>
                                                         <span class="f2">◢██◣</span>
                                                       <span class="f2">◢████◣</span>
                                         <span class="f2 hl">◢◣ </span>       <span class="f2">◢██████◣</span>
                                       <span class="f2 hl">◢██◣</span>    <span class="f2">◢████████◣</span>
                             <span class="f2">◢◣    </span><span class="f2 hl">◢████◣</span><span class="f2">◢██████████◣</span>
<span class="f2 hl">               ◢◣   </span>     <span class="f2">◢██◣</span><span class="f2 hl">◢██████◣</span>
<span class="f2 hl">             ◢██◣</span>    <span class="f2">◢███</span><span class="f2 b2 hl">◢████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">           ◢████◣</span><span class="f2">◢███</span><span class="f2 b2 hl">◢██████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">         ◢██████◣    ◢████████████◣</span>
<span class="f2 hl">       ◢████████◣◢██████████████◣</span>
<span class="f2 hl">     ◢██████████◣</span>
<span class="f2 hl">   ◢████████████◣</span>
^L1



<span class="hl">讓我們一同沐浴在山林中細聽那銀河協奏曲；</span>


                                                   <span class="f2">◢◣</span>
<span class="hl">體驗沁涼的觀星之夜—</span>                             <span class="f2">◢██◣</span>
                                               <span class="f2">◢████◣</span>
                  <span class="hl">品嘗星光與山嵐共同沏上的佳茗        </span>     <span class="f2">◢◣</span>
                                                         <span class="f2">◢██◣</span>
                                                       <span class="f2">◢████◣</span>
                                         <span class="f2 hl">◢◣ </span>       <span class="f2">◢██████◣</span>
                                       <span class="f2 hl">◢██◣</span>    <span class="f2">◢████████◣</span>
                             <span class="f2">◢◣    </span><span class="f2 hl">◢████◣</span><span class="f2">◢██████████◣</span>
<span class="f2 hl">               ◢◣   </span>     <span class="f2">◢██◣</span><span class="f2 hl">◢██████◣</span>
<span class="f2 hl">             ◢██◣</span>    <span class="f2">◢███</span><span class="f2 b2 hl">◢████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">           ◢████◣</span><span class="f2">◢███</span><span class="f2 b2 hl">◢██████████</span><span class="f2 hl">◣</span>
<span class="f2 hl">         ◢██████◣    ◢████████████◣</span>
<span class="f2 hl">       ◢████████◣◢██████████████◣</span>
<span class="f2 hl">     ◢██████████◣</span>
<span class="f2 hl">   ◢████████████◣</span>
^L0.4



讓我們一同沐浴在山林中細聽那銀河協奏曲；


                                                   ◢◣
體驗沁涼的觀星之夜—                             ◢██◣
                                               ◢████◣
                  品嘗星光與山嵐共同沏上的佳茗             ◢◣
                                                         ◢██◣
                                                       ◢████◣
                                         ◢◣        ◢██████◣
                                       ◢██◣    ◢████████◣
                             ◢◣    ◢████◣◢██████████◣
               ◢◣        ◢██◣◢██████◣
             ◢██◣    ◢████████████◣
           ◢████◣◢██████████████◣
         ◢██████◣    ◢████████████◣
       ◢████████◣◢██████████████◣
     ◢██████████◣
   ◢████████████◣
^L0.3
^L0.3









                                   <span class="f0 hl">噓</span>
^L0.2









                                   噓.
^L0.2









                                   噓..
^L0.2









                                   噓...
^L0.2









                                   噓..
^L0.2









                                   噓.
^L0.2









                                   噓
^L0.3







                                 <span class="f0 hl">別點燈</span>

^L0.3







                                 別點燈
^L0.3







                                 <span class="hl">別點燈</span>


                                <span class="f0 hl">且停且坐</span>
^L0.3







                                 別點燈


                                且停且坐
^L0.3







                                 <span class="f0 hl">別點燈</span>


                                <span class="hl">且停且坐</span>
^L0.3










                                且停且坐
^L0.3










                                <span class="f0 hl">且停且坐</span>
^L0.3
^L0.3










                           <span class="f0 hl">星子們才正要開始歌唱呢</span>
^L0.3










                           星子們才正要開始歌唱呢
^L1










                           <span class="hl">星子們才正要開始歌唱呢</span>
^L0.3


                               .                                   .
                      .
        .

                                              .

                                                        .
                                     .
                           星子們才正要開始歌唱呢                 .




.               .
                                        .
                                                                .
       .

                               .                          .
^L0.2
                                          .

                               ‧ .                                ‧
                      ‧                             .
        ‧

                                              ‧                        .
                           .
                                                        ‧
                    .                ‧
                           <span class="f0 hl">星子們才正要開始歌唱呢</span>                 ‧
.                  .                           .
 ‧


‧               .
            ‧                          ‧
                                                                ‧
       .

                               ‧                         ‧
^L0.2
                                          ‧
.             .             .                  .           .          .
                               ‧ ‧                               ‧
                      ‧                             ‧
        ‧
.                 .                    .                    .
                                              ‧                        ‧
          .                ‧
                                                        ‧
         .          ‧               ‧            .
                                                                  ‧
‧          ‧     ‧          .                             .              .
 ‧                   .
            .                         .                                 .
     .                         .                          .
‧               ‧                         .                            .
            ‧                          ‧
                                                                ‧
       ‧               .                             .                .

                 .             ‧                         ‧
^L0.1
                                          <span class="f3 hl">‧</span>
.             .             .                  .           .          .
                               <span class="f3 hl">‧ ‧                               ‧</span>
                      <span class="f3 hl">‧                             ‧</span>

.                 .                    .                    .
                                              <span class="f3 hl">‧                        ‧</span>
          .                <span class="f3 hl">‧</span>
                                                        <span class="f3 hl">‧</span>
         .          <span class="f3 hl">‧               ‧</span>            .
                                                                 <span class="f3 hl"> ‧</span>
<span class="f3 hl">‧          ‧     ‧</span>          .                             .              .
 ‧                   .
            .                         .                                 .
     .                         .                          .
<span class="f3 hl">‧               ‧</span>                         .                            .
            <span class="f3 hl">‧                          ‧</span>
                                                                <span class="f3 hl">‧</span>
       <span class="f3 hl">‧</span>               .                             .                .

                 .             <span class="f3 hl">‧                         ‧</span>
^L0.2
                                          <span class="f3 hl">‧</span>
‧            ‧            ‧                 ‧          ‧         ‧
        .                      <span class="f3 hl">‧ ‧                               ‧</span>
                      <span class="f3 hl">‧                             ‧</span>
         .    .              .               .     .
‧                ‧                   ‧                   ‧
                                              <span class="f3 hl">‧                        ‧</span>
  .       ‧               <span class="f3 hl">‧</span>
                                                        <span class="f3 hl">‧</span>
         ‧         <span class="f3 hl">‧               ‧     </span>       ‧
                                                                 <span class="f3 hl"> ‧</span>
<span class="f3 hl">‧          ‧     ‧     </span>     ‧   .          .             ‧             .
 ‧                   ‧
            ‧                        ‧         .               .      ‧
     .             .           .                          ‧
<span class="f3 hl">‧               ‧     </span>                    ‧                           .
            <span class="f3 hl">‧                          ‧</span>
                                                          .     <span class="f3 hl">‧</span>
       <span class="f3 hl">‧</span>       .       ‧             .              ‧               .
.
                 ‧            <span class="f3 hl">‧               .         ‧</span>
^L0.2
             .                             <span class="f3 hl">‧</span>      .
<span class="f3 hl">‧             ‧            ‧                 ‧          ‧ .       ‧</span>
        .                      <span class="f3 hl">‧ ‧          .                    ‧</span>
              .        <span class="f3 hl">‧                             ‧</span>
         .    .          .   .               .     .              .
‧                ‧                   ‧                   ‧       .
                                              <span class="f3 hl">‧      .                 ‧</span>
  .       ‧    .          <span class="f3 hl">‧</span>      .            .                .  .
                 .                      .       .       <span class="f3 hl">‧</span>
         ‧         <span class="f3 hl">‧               ‧     </span>       ‧
                                                                 <span class="f3 hl"> ‧</span>
<span class="f3 hl">‧          ‧     ‧     </span>     ‧   .          .       .     <span class="f3 hl">‧</span>             .
 ‧                   ‧
            <span class="f3 hl">‧                 .      ‧</span>         .               .      ‧
     .             ‧.           .   .                     <span class="f3 hl"> ‧</span>
<span class="f3 hl">‧               ‧     </span>                    ‧        .          .       .
            <span class="f3 hl">‧           .        .     ‧</span>           .
                                      .         .         .     <span class="f3 hl">‧</span>
       <span class="f3 hl">‧</span>       ‧.     ‧      .      .              ‧            .
.
                 ‧       .    <span class="f3 hl">‧               .                   ‧       .</span>
                                              <span class="f3 hl">‧      .                 ‧</span>
  .          <span class="f3 hl">‧</span>      .            .                .  .
                 .                      .       .       <span class="f3 hl">‧</span>
‧               ‧            ‧
                                                                 <span class="f3 hl"> ‧</span>
<span class="f3 hl">‧          ‧     ‧     </span>     ‧   .          .       .     <span class="f3 hl">‧  </span>           .

            <span class="f3 hl">‧</span>                 .
     .             ‧.           .
<span class="f3 hl">‧               ‧     </span>             .       .
            <span class="f3 hl">‧           .        .     ‧     </span>      .
                 .         .         .     <span class="f3 hl">‧</span>
<span class="f0 hl">                                 </span>       ‧     .
.
                        .
.
                 ‧       .    <span class="f3 hl">‧               .         ‧</span>
`;


time = text.match(/(\^L[01]\.?[1-9]?){1}/gm).map(e => e.slice(2));
let all = text.split(/(\^L[01]\.?[1-9]?){1}/gm);
frames = [];
for (let i = 0; i < all.length; ++i) {
  if (i % 2 === 0) {
    frames.push(all[i]);
  }
}
time.push('2');
time = time.map(e => parseFloat(e) * 1000);
time = time.map((e, index) => {
  for (let i = 0; i < index; ++i) {
    e += time[i];
  }
  return e;
})

export { time, frames };                 