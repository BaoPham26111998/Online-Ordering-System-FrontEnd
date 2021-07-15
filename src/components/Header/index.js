import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { NavLink } from "react-router-dom";
import Search from "components/Search";
import "./style.css"

export default class Header extends Component {
    render() {
        return (
            <header className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <img width="50px" height="50px" src="./img/Logo.jpg" alt />
                        </div>
                        <div className="col-sm-6">
                            <Search/>   
                        </div>
                        <div className="col-sm-3 log_sign">
                            <button className="btn">
                                <NavLink exact activeClassName="active" className="log_in" to="/log-in">Log In</NavLink>
                            </button>
                            <button className="btn">
                                <NavLink exact activeClassName="active" className="sign_up" to="/log-in">Sign Up</NavLink>
                            </button>
                        </div>
                        <div className="col-sm-1">
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    <img width="30px" height="25px" src="./img/english.png" alt /> English
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" as="button">
                                        <img width="30px" height="25px" src="./img/english.png" alt /> English
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" as="button">
                                        <img width="30px" height="25px" src="./img/vietnam.png" alt /> Tiếng Việt
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
