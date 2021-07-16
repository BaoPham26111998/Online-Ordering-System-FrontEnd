import React, { Component } from 'react'
import loginImg from "../../login.svg";
import { NavLink } from "react-router-dom";

export class LogIn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="login_btn">
                        Login
                    </button>
                    <button className="login_btn ml-2">
                        <NavLink exact activeClassName="active" className="see_more" to="/">Home</NavLink>
                    </button>   
                </div>
            </div>
        )
    }
}
