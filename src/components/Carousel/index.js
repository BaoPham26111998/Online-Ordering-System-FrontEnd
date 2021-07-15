import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";

export default class index extends Component {
    render() {
        return (
            /* CAROUSEL */ 
            <Carousel className="m-5" fade>
                <Carousel.Item className="carousel__item">
                    <img className="d-block w-100 h-100 pic" src="./img/MelbourneEsport.jpg" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item className="carousel__item">
                    <img className="d-block w-100 h-100 pic" src="./img/CES2021.jpg" alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item className="carousel__item">
                    <img className="d-block w-100 h-100 pic" src="./img/CodeArtEvent.jpg" alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item className="carousel__item">
                    <img className="d-block w-100 h-100 pic" src="./img/VRT2021.jpg" alt="Fourth slide"/>
                </Carousel.Item>
            </Carousel>
        )
    }
}
