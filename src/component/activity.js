import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { OutlinedLink as LinkButton } from './Button'

class activity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastChildren: [],
            activeItemIndex: 0,
        }
    }

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
    render() {
        console.log(87);
        const {
            activeItemIndex,
        } = this.state;
        return (
            <section id="Activity" className="justify-content-end">
                <div className="header">
                    <h1>
                        近期活動
                    </h1>
                </div>
                <div className="activity_content">
                    <div style={{ "padding": "0 20px", "maxWidth": 1200, "margin": "0 auto" }}>
                        <ItemsCarousel
                            // Carousel configurations
                            numberOfCards={2}
                            gutter={12}
                            showSlither={true}
                            firstAndLastGutter={true}
                            freeScrolling={false}

                            // Active item configurations
                            requestToChangeActive={this.changeActiveItem}
                            activeItemIndex={activeItemIndex}
                            activePosition={'center'}

                            chevronWidth={24}
                            rightChevron={<i class="fas fa-angle-double-right"></i>}
                            leftChevron={<i class="fas fa-angle-double-left"></i>}
                            outsideChevron={false}
                        >
                            {

                                this.props.currChildren.map((item, i) =>
                                    <div
                                        key={i}
                                        style={{
                                            "padding": " 0 15px",
                                        }}
                                    >
                                        <div style={{
                                            height: "350px",
                                            background: 'url(' + item.image_web + ')  no-repeat',
                                            backgroundSize: "contain",
                                            backgroundPosition: "center",

                                        }} />

                                        <h2>{item.title}</h2>
                                        {item.end_date === "" ? <h4>{item.start_date}</h4> : <h4>{item.start_date} 至 {item.end_date}</h4>}
                                        <h4>{item.location}</h4>
                                        <p>{item.context}</p>
                                        {item.register_web !== "" && <LinkButton onClick={item.register_web} text="報名資訊" />}
                                    </div>

                                )

                            }
                        </ItemsCarousel>
                    </div>
                </div>
            </section>

        );
    }
}

export default activity;
