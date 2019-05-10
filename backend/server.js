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
db.once('open', () => {
    console.log('MongoDB connected!')
    serverSocket.on("connection", socket => {
        console.log("a user connected");

        Activity.find()
            .limit(100)
            .sort({ _id: 1 })
            .exec((err, res) => {
                if (err) throw err

                socket.emit('update', res)
                console.log("server_ok");
            })
        socket.on('input', data => {
            let title = data.title;
            let order = data.order;
            let location = data.location;
            let context = data.context;
            let image_web = data.image_web;
            let register_web = data.register_web;
            let start_date = data.start_date;
            let end_date = data.end_date;
            console.log(typeof (data.order));
            //檢查資料
            //存入資料庫
            const activity = new Activity({ title, order, location, context, image_web, register_web, start_date, end_date })
            activity.save(err => {
                if (err) console.error(err);
                //存放後，更新前端
                console.log("Saved!");
                Activity.find()
                    .limit(100)
                    .sort({ _id: 1 })
                    .exec((err, res) => {
                        if (err) throw err

                        serverSocket.emit('update', res)
                        console.log("server_ok");
                    })
            })
        })
        socket.on("deleteAll", () => {
            Activity.deleteMany({}, () => {
                console.log("deleted!!!!")
                Activity.find()
                    .sort({ _id: 1 })
                    .exec((err, res) => {
                        if (err) throw err

                        serverSocket.emit('update', res)
                        console.log("server_update");
                    })
            });
        });
        socket.on("deleteThis", () => {
            Activity.remove({ order })
        })

    })
})

// const request = require('request');
// const cheerio = require("cheerio");
// // let $ = '';
// const ntuAstPttUrl = "https://www.ptt.cc/bbs/NTU/M.1442499298.A.234.html";
// request(ntuAstPttUrl, (err, res, body) => {
//     const $ = cheerio.load(body);
//     console.log($('#main-container #main-content'))
// })
// let frames = [];
