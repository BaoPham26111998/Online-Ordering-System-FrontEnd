import React, { Component } from 'react';
import Slider from "react-slick";
import Event from "../Event";
import "./style.css";

export default class EventSlider extends Component {
    render() {
        const settings = {
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 2000,
            slidesToShow: 5,
            slidesToScroll: 1,
            cssEase: "linear"
        };
        return (
            <div>
                <Slider {...settings}>
                    <Event index={1}/>
                    <Event index={2}/>
                    <Event index={3}/>
                    <Event index={4}/>
                    <Event index={5}/>
                    <Event index={6}/>
                    <Event index={7}/>
                    <Event index={8}/>
                    <Event index={9}/>
                    <Event index={10}/>
                </Slider>
            </div>
        )
    }
}
