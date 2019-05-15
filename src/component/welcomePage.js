import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { time, frames } from './welcomePageText';
class welcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inductor: 0,
        }
        this.Frames = [];

    }
    refresh = () => {
        {
            setTimeout(() => {
                console.log(this.state.inductor)
                this.setState(state => ({
                    inductor: state.inductor += 1
                }));
            }, 0);
        }

    }
    reFresh = function name(params) {
        let i = 0;
        this.Frames = frames;
        while (i < time.length) {
            setTimeout(() => {
                console.log(this.state.inductor)
                this.setState(state => ({
                    inductor: state.inductor += 1
                }));
            }, time[i]);
            ++i;
        }
    }

    componentDidMount() {
        this.reFresh();
    }
    componentWillUnmount() {
        clearInterval(this.refresh);
        console.log("UNMount")
    }
    render() {

        return (
            <header id="welcome-page" className="jumbotron">
                {/* <h1 className="text-center">你...愛仰望星空嗎?</h1> */}
                <div className="content bbs-screen bbs-content" dangerouslySetInnerHTML={{ __html: this.Frames[this.state.inductor] }} />

            </header>
        );
    }
}
export default welcomePage;