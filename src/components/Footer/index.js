import React, { Component } from 'react';
import "./style.css"
import styled from "styled-components";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <h6>Get in touch</h6>
                            <ul>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Give us feedback</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <div>
                                <h6>Hotline</h6>
                                <p>Ho Chi Minh City, Monday - Friday</p>
                                <p>(9:00 AM - 5:00 PM)</p>
                                <p>1900 6408</p>
                            </div>
                            <div>
                                <h6>Email</h6>
                                <p>support@eventroom.vn</p>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <h6>About Event Room</h6>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Find us</a></li>
                                <li><a href="#">Schedule</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h6>Connect with us</h6>
                            <ul>
                                <li><a href="#"><i className="fab fa-facebook-f" />Facebook</a></li>
                                <li><a href="#"><i className="fab fa-twitter" />Twitter</a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g" />Google +</a></li>
                                <li><a href="#"><i className="fab fa-instagram" />Instagram</a></li>
                                <li><a href="#"><i className="fab fa-linkedin" />Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>2021 © Event Room / <a href="index.html">Web design by TinSkin</a></p>
                    </div>
                </div>
            </footer>
        )
    }
}
