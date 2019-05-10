import React, { Component } from 'react';

import WelcomePage from './welcomePage';
import AboutUs from './aboutUs';
import Particle from './particle';
import Activity from './activity';
import Footer from './footer';
import Calender from '../container/calender';
import io from 'socket.io-client';
const socket = io.connect("http://localhost:3002");
console.log(socket);
if (socket !== undefined) {
    console.log("Connected to sockets! on ClientPage");
}
class clientPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activity_data: [],
        }
        console.log("clientPage constructor")
        // socket.on("update", data => {
        //     console.log("update")
        //     console.log(data);
        //     this.setState({ activity_data: data });
        // })
    }
    componentDidMount() {
        console.log("clientPage did mount")
    }
    render() {
        console.log("clientPage props ad", this.props.activity_data);
        console.log("clientPage state ad", this.state.activity_data);
        return (
            <React.Fragment>
                < WelcomePage />
                < AboutUs />
                < Activity currChildren={this.props.activity_data} />
                < Calender />
                < Particle />
                < Footer />
            </React.Fragment>
        );
    }
}
export default clientPage;