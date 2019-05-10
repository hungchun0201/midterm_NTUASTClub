import React, { Component } from 'react';
import { OutlinedInherit as InhButton } from '../component/Button';
class Calender extends Component {
    constructor(props) {
        super(props);
        this.today = new Date();
        this.currMonth = this.today.getMonth();
        this.currYear = this.today.getFullYear();
        this.tempArray = [];
        this.curr_istoday = this.today.getDate();
        this.state = { dateArray: [] };

    }
    handleClick = (event) => {
        console.log(this.curr_istoday);
        this.tempArray.every(e => {
            e.every(i => {
                if (i.num === this.curr_istoday) {
                    i.class = "active_day";
                }
                if (i.num === parseInt(event.target.innerHTML, 10)) {
                    i.class = "active_day is-today";
                }
                return true;
            })
            return true;
        })
        this.setState(state => ({ dateArray: this.tempArray }));
        this.curr_istoday = parseInt(event.target.innerHTML, 10);
    }
    createTable(x) {
        let textSkip = true;
        let textDate = 1;
        this.currMonth += x;
        if (this.currMonth > 11) {
            this.currMonth = 0;
            this.currYear += 1;
        }
        else if (this.currMonth < 0) {
            this.currMonth = 11;
            this.currYear -= 1;
        }
        let startDay = new Date(this.currYear, this.currMonth, 1).getDay();//星期幾
        let endDate = new Date(this.currYear, this.currMonth + 1, 0).getDate();//幾號
        this.tempArray = [];
        for (var row = 0; row < 6; row++) {
            let weekArray = [];
            for (var col = 0; col < 7; col++) {
                if (row === 0 && startDay === col) {
                    textSkip = false;
                }
                if (textDate > endDate) {
                    textSkip = true;
                }
                var addClass = textDate === this.curr_istoday && !textSkip ? 'active_day is-today' : 'active_day';
                var textTd = textSkip ? ' ' : textDate++;
                if (textTd === ' ')
                    addClass = ' ';
                var determineClick = textSkip ? ' ' : "handleClick";
                let day = { num: textTd, class: addClass, click: determineClick };
                weekArray.push(day);
            }
            this.tempArray.push(weekArray);
        }
        this.setState(state => ({ dateArray: this.tempArray }), () => { });
        console.log(this.tempArray);
    }
    handleNextMonth = () => {
        console.log("pressNext")
        this.createTable(1);
    }
    handleLastMonth = () => {
        this.createTable(-1);
    }
    componentDidMount() {
        this.createTable(0);
    }
    render() {
        return (
            <section id="Calender">
                <div className="justify-content-end row">
                    <div className="header">
                        <h1>行事曆</h1>
                    </div>
                    <div className="calendar-container">
                        <div className="image-container">
                            <div className="image"></div>
                        </div>
                        <div className="calendar">

                            <h2 className="month-title" id="js-month">{this.currMonth + 1}</h2>

                            <table className="calendar-table">
                                <thead>
                                    <tr>
                                        <th>日</th>
                                        <th>月</th>
                                        <th>火</th>
                                        <th>水</th>
                                        <th>木</th>
                                        <th>金</th>
                                        <th>土</th>
                                    </tr>
                                    {this.state.dateArray.map((e, e_index) => (
                                        <tr key={e_index}>{
                                            e.map((j, j_index) => (
                                                <td key={j_index} className={j.class} onClick={this.handleClick}> {j.num}</td>
                                            ))
                                        }</tr>
                                    ))

                                    }
                                </thead>
                                <tbody id="js-calendar-body"></tbody>
                            </table>
                        </div>
                        {/* <svg style={{ "visibility": "hidden" }} width="0" height="0">
                            <filter id="duotone" color-interpolation-filters="sRGB">
                                <feColorMatrix type="matrix" values="0.7 0 0 0 0.3 0.6 0 0 0 0.2 0.3 0 0 0 0.6 0 0 0 1 0"></feColorMatrix>
                            </filter>
                        </svg> */}
                        <InhButton className="last-month" onClick={this.handleLastMonth} text="last month" />
                        <InhButton className="next-month" onClick={this.handleNextMonth} text="next month" />
                    </div >
                </div>

            </section>

        );
    }
}

export default Calender;
