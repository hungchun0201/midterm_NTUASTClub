import React, { Component } from 'react';

import { OutlinedInherit as InhButton, OutlinedSecondary as SecButton } from '../component/Button';
import io from 'socket.io-client';
// Connecting to socket.io
const socket = io.connect("http://localhost:3002");
// Checking for connection
if (socket !== undefined) {
    console.log("Connected to sockets! on Add_activity");
}


//apply function
const nameValue = Name => {
    return document.getElementsByName(Name)[0].value;
}
const handleClick = () => {
    console.log(typeof (nameValue("start_date")));
    socket.emit("input", {
        title: nameValue("title"),
        order: nameValue("order"),
        location: nameValue("location"),
        context: nameValue("context"),
        image_web: nameValue("image_web"),
        register_web: nameValue("register_web"),
        start_date: nameValue("start_date"),
        end_date: nameValue("end_date"),

    });
}
const deleteAll = () => {
    if (window.confirm('確定刪除嗎?這會刪除所有現有活動')) {
        console.log("pressed deleteAll")
        socket.emit("deleteAll");
    }
}
const deleteThis = (event) => {
    if (window.confirm('確定刪除此活動?')) {
        console.log("pressed deleteThis")
        socket.emit("deleteThis");
    }
}




class add_activity extends Component {
    render() {
        return (
            <section id="Add_activity" className="justify-content-end">
                <div className="header">
                    <h1>
                        新增活動
            </h1>
                    <div className="container">
                        <div className="row">
                            <div id="activity_title">
                                <h3>活動標題</h3>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="輸入活動標題..." />
                            </div>
                            <div id="activity_order">
                                <h3>優先序</h3>
                                <input
                                    name="order"
                                    type="number"
                                    className="form-control"
                                    min={1}
                                    max={this.props.activity_data.length + 1}
                                    required="required"
                                />
                            </div>
                            <div id="activity_location">
                                <h3>活動地點</h3>
                                <input
                                    name="location"
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                            <div id="main">
                                <h3>活動內容</h3>
                                <textarea
                                    name="context"
                                    type="textarea"
                                    className="form-control context"
                                    placeholder={`輸入活動內容...`} />
                            </div>
                            <h3>圖片網址</h3>
                            <input
                                type="url"
                                name="image_web"
                                className="form-control"
                                placeholder="輸入圖片網址..." />
                            <h3>報名網址</h3>
                            <input
                                type="text"
                                name="register_web"
                                className="form-control"
                                placeholder="輸入報名網址..." />
                            <div id="start_date">
                                <h3>開始日期</h3>
                                <input
                                    type="text"
                                    name="start_date"
                                    className="form-control"
                                    placeholder="格式:yyyy-mm-dd hh:mm(分)" />
                            </div>

                            <div id="end_date">
                                <h3>結束日期</h3>
                                <input
                                    name="end_date"
                                    type="text"
                                    className="form-control"
                                    placeholder="格式:yyyy-mm-dd hh:mm(分)" />
                            </div>
                            <div className="ss">< InhButton text="提交" className="activity_submit" onClick={handleClick} /></div>
                            <div className="ss"><SecButton text="刪除全部" className="activity_submit" onClick={deleteAll} /></div>
                            <div>
                                <h2 >管理現有活動</h2>
                                <ul className="list-group list-group-new ">
                                    <li className="list-group-item">
                                        <div className="control_add_activity_order">序</div>
                                        <div className="control_add_activity_title">活動標題</div>
                                        <div className="control_add_activity_start_date">開始時間</div>
                                    </li>
                                    {this.props.activity_data.map((e, e_index) => (
                                        <li key={e.id} className="list-group-item">
                                            <div className="control_add_activity_order">{e.order}</div>
                                            <div className="control_add_activity_title">{e.title}</div>
                                            <div className="control_add_activity_start_date">{e.start_date}</div>
                                            <button type="button" class="btn btn-danger" >刪除活動</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        );
    }
}
export default add_activity;
