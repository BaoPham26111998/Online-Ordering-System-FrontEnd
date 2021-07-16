import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";

export default class index extends Component {
    render() {
        return (
            /* CAROUSEL */ 
            <Carousel className="m-5" fade>
                <Carousel.Item className="carousel__item">
                    <img className="d-block w-100 h-100 pic" src="https://cleverpro.vn/wp-content/uploads/Hinh-anh-dich-Vu-Marketing-Game.jpg" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item className="carousel__item">
                    <img className="d-block w-100 h-100 pic" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/13729/production/_112375697_1331db7a-17c0-4401-8cac-6a2309ff49b6.jpg" alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item className="carousel__item">
                    <img className="d-block w-100 h-100 pic" src="https://www.pubgmobile.com/vi/images/thum_kv2.jpg" alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item className="carousel__item">
                    <img className="d-block w-100 h-100 pic" src="https://cdn.tgdd.vn/Files/2020/05/15/1255578/gta5-free_800x450.jpg" alt="Fourth slide"/>
                </Carousel.Item>
            </Carousel>
        )
    }
}
