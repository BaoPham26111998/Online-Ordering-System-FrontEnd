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
                            <img width="150px" height="100px" src="https://media.istockphoto.com/vectors/gamer-esport-mascot-logo-design-vector-id1182383458?k=6&m=1182383458&s=612x612&w=0&h=wsfvsgFI3pMneVIk2-Eaktgivu73dpbmga4ha6_DV2A=" alt />
                        </div>
                        <div className="col-sm-6">
                            <Search/>   
                        </div>
                        <div className="log_sign">
                            <button className="btn">
                                <NavLink exact activeClassName="active" className="log_in" to="/log-in">Login / Register</NavLink>
                            </button>
                        </div>
                        <div className="col-sm-1">
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    <img width="30px" height="25px" src="https://kenh14cdn.com/thumb_w/660/2017/5-1503128133747.png" alt /> English
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1" as="button">
                                        <img width="30px" height="25px" src="https://kenh14cdn.com/thumb_w/660/2017/5-1503128133747.png" alt /> English
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" as="button">
                                        <img width="30px" height="25px" src="https://vietnamchienthang.jweb.vn/uploads/vietnamchienthang/images/as.gif" alt /> Tiếng Việt
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
