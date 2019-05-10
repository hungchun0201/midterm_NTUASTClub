import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class welcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inductor: 0,
        }

    }
    refresh = () => {
        setInterval(() => {
            console.log(this.state.inductor % 4)
            this.setState(state => ({
                inductor: state.inductor += 1
            }));
        }, 2500);
    }
    componentDidMount() {
        this.refresh();
    }
    componentWillUnmount() {
        clearInterval(this.refresh);
        console.log("UNMount")
    }
    render() {
        return (
            <header id="welcome-page" className="jumbotron">
                <h1 className="text-center">你...愛仰望星空嗎?</h1>
                {this.state.inductor % 4 === 0 &&
                    <Fragment>
                        <h4 className="level2">可曾在夜闌人靜的黑夜時分</h4>
                        <h4 className="level2">暫忘身後的藍色行星</h4>
                        <h4 className="level2">聽聽那銀河的協奏曲</h4>
                    </Fragment>
                }
                {this.state.inductor % 4 === 1 &&
                    <Fragment>
                        <h4 className="level2">廣闊的星空已撐開雙手</h4>
                        <h4 className="level2">且由平日繁瑣的</h4>
                        <h4 className="level2">小小世界昇華</h4>
                    </Fragment>
                }
                {this.state.inductor % 4 === 2 &&
                    <Fragment>
                        <h4 className="level2">讓我們一同沐浴在山林中細聽那銀河協奏曲</h4>
                        <h4 className="level2">體驗沁涼的觀星之夜</h4>
                        <h4 className="level2">品嘗星光與山嵐共同沏上的佳茗</h4>
                    </Fragment>
                }
                {this.state.inductor % 4 === 3 &&
                    <Fragment>
                        <h4 className="level2">噓...別點燈</h4>
                        <h4 className="level2">且停且坐</h4>
                        <h4 className="level2">星子們才正要開始歌唱呢</h4>
                    </Fragment>
                }
            </header>
        );
    }
}
export default welcomePage;