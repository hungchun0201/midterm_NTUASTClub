import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { time, frames } from '../component/welcomePageText';
class welcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inductor: 0,
        }
    }
    reFresh = () => {
        let i = 0;
        while (i < time.length) {
            setTimeout(() => {
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
    render() {

        return (
            <header id="welcome-page" className="jumbotron">
                <div className="content bbs-screen bbs-content" dangerouslySetInnerHTML={{ __html: frames[this.state.inductor] }} />
            </header>
        );
    }
}
export default welcomePage;