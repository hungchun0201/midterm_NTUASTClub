const express = require('express');
const mongoose = require('mongoose');
const Activity = require('./activityModul');

const app = express();
const http = require('http').Server(app)
const serverSocket = require('socket.io')(http)
const port = 3002;

app.get('/', (req, res) => res.send('Hello World nooo!'));
http.listen(port, () => console.log(`Example app listening on port ${port}!`));

mongoose.connect('mongodb+srv://LIN:LIN123456@cluster0-kaqqt.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
})
db = mongoose.connection

db.on('error', error => {
    console.log(error)
})

//getText from BBS
//Aborted ! want to use cheerio to get data before


//const request = require('request');
//const cheerio = require('cheerio');
//const async = require('async');
//let allText = ""
//const url = 'https://www.ptt.cc/bbs/NTU/M.1442499298.A.234.html';
// request(url, (err, res, body) => {
//     // console.log(body);
//     const $ = cheerio.load(body)
//     $('#main-container #main-content').each(function (i, elem) {
//         let content = $(this);
//         console.log($.html(content))
//         allText = $.html(content).toString();
//     })
// });


db.once('open', () => {
    console.log('MongoDB connected!');

    serverSocket.on("connection", socket => {
        console.log("a user connected");

        Activity.find()
            .limit(100)
            .sort({ order: 1 })
            .exec((err, res) => {
                if (err) throw err

                socket.emit('update', res)
                console.log("server_ok");
            })
        socket.on('input', data => {
            let title = data.title;
            let order = parseInt(data.order, 10);
            let location = data.location;
            let context = data.context;
            let image_web = data.image_web;
            let register_web = data.register_web;
            let construct_date = data.construct_date;
            let start_date = data.start_date;
            let end_date = data.end_date;
            //檢查資料

            //存入資料庫
            const activity = new Activity({ title, order, location, context, image_web, register_web, construct_date, start_date, end_date })
            activity.save(err => {
                if (err) {
                    console.log(err.message);
                    serverSocket.emit("save_error", err.message);
                }
                else {
                    //存放後，更新前端
                    console.log("Saved!");
                    Activity.find()
                        .limit(100)
                        .sort({ order: 1 })
                        .exec((err, res) => {
                            if (err) throw err
                            serverSocket.emit('update', res)
                            console.log("server_ok");
                        })
                }

            })
        })
        socket.on("deleteAll", () => {
            Activity.deleteMany({}, () => {
                console.log("deleted!!!!")
                Activity.find()
                    .sort({ order: 1 })
                    .exec((err, res) => {
                        if (err) throw err

                        serverSocket.emit('update', res)
                        console.log("server_update");
                    })
            });
        });
        socket.on("deleteThis", (deleteOrder) => {
            Activity.remove({ order: parseInt(deleteOrder, 10) }, err => {
                console.log('delete order ', deleteOrder);
                if (err) {
                    console.log('Activity remove occur a error:', err);
                } else {
                    console.log('Activity remove success.');
                    Activity.find()
                        .limit(100)
                        .sort({ _id: 1 })
                        .exec((err, res) => {
                            if (err) throw err

                            serverSocket.emit('update', res)
                            console.log("server_ok");
                        })
                }
            })
        })

    })
})
