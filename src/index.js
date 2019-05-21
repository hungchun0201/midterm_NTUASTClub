import React from 'react';
import ReactDOM from 'react-dom';
// import Scrollchor from 'react-scrollchor';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';
// import TransitionGroup from "react-transition-group/TransitionGroup";
// import CSSTransition from "react-transition-group/CSSTransition";

import ClientPage from './component/clientPage';
import AddActivity from './container/add_activity';
// import Login from './container/login';

import './css/basic.css';
import './css/navbar.css';
import './css/style.css';
import './css/calender.css';
// import './css/login.css';


import * as serviceWorker from './serviceWorker';

import io from 'socket.io-client';
const socket = io.connect("http://localhost:3002");
console.log(socket);
if (socket !== undefined) {
    console.log("Connected to sockets! on Index");
    console.log(socket);
}

// import './css/bootstrap.css';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activity_data: [],

        }
        console.log(socket.on("update", data => {
            console.log("update")
            console.log(data);
            this.setState({ activity_data: data });
        }))

    }
    render() {

        return (
            <Router>
                <div className="nav-side-menu">
                    <div className="menu-list" id="navbar_side">
                        <ul id="menu-content" >
                            <li id="navbar-1" className="nav-link-item" title="Home">
                                <HLink smooth to="/#welcome-page" >
                                    Home
                                </HLink>
                            </li>
                            <li id="navbar-2" className="nav-link-item" title="About us">
                                <HLink smooth to="/#About-us" >
                                    About us
                                </HLink>
                            </li>
                            <li id="navbar-3" className="nav-link-item" title="Activity">
                                <HLink smooth to="/#Activity" >
                                    Activity
                                </HLink>
                            </li>
                            <li id="navbar-4" className="nav-link-item" title="Add_activity">
                                <Link to="/Add_activity" >
                                    Add activity
                                </Link>
                            </li>
                            <li id="navbar-5" className="nav-link-item" title="Calender">
                                <HLink smooth to="/#Calender" >
                                    Calendar
                            </HLink>
                            </li>
                            <li id="navbar-6" className="nav-link-item" title="Login">
                                <Link to="/Login" >
                                    Login
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/" render={props => <ClientPage activity_data={this.state.activity_data} {...props} />} />
                    <Route path="/add_activity" render={props => <AddActivity activity_data={this.state.activity_data} {...props} />} />
                    {/* <Route path='/Login' component={Login} /> */}

                </Switch>

            </Router>
        );
    }
}

ReactDOM.render(< Index />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();