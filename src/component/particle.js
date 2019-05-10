import React, { Component } from 'react';
class particle extends Component {
    constructor() {
        super();
        this.state = {
            styleBg1: { 'transform': 'translateY(0px)' },
            styleBg2: { 'transform': 'translateY(0px)' }
        }

    }
    componentDidMount() {
        window.addEventListener('scroll', this.move);
    }
    componentWillUnmount() {
        this.setState({
            styleBg1: { 'transform': 'translateY(0px)' },
            styleBg2: { 'transform': 'translateY(0px)' }
        })
    }
    move = () => {
        let sc = document.documentElement.scrollTop;
        this.setState({
            styleBg1: { 'transform': 'translateY(-' + sc / 4 + 'px)' },
            styleBg2: { 'transform': 'translateY(-' + sc / 6 + 'px)' }
        });
    }
    render() {

        return (
            <div className="bg" >
                <div className="bg01" style={this.state.styleBg1}></div>
                <div className="bg02" style={this.state.styleBg2}></div>
            </div>
        );
    }
}
export default particle;