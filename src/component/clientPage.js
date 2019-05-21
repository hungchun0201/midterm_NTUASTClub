import React, { Component } from 'react';

import WelcomePage from '../container/welcomePage';
import AboutUs from './aboutUs';
import Particle from './particle';
import Activity from '../container/activity';
import Footer from './footer';
import Calender from '../container/calender';

class clientPage extends Component {
    render() {
        console.log("clientPage props ad", this.props.activity_data);
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