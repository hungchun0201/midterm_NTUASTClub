const request = require('request');
const cheerio = require('cheerio');
let allText = ""
const url = 'https://www.ptt.cc/bbs/NTU/M.1442499298.A.234.html';
request(url, (err, res, body) => {
    // console.log(body);
    const $ = cheerio.load(body)
    $('#main-container #main-content').each(function (i, elem) {
        let content = $(this);
        console.log($.html(content))
        allText = $.html(content).toString();
    })
});
