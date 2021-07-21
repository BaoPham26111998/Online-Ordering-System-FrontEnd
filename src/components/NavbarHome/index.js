import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../../containers/HomeTemplate/homeTemplate.css'

export default class NavbarHome extends Component {
    render() {
        let nav_button;
        if (this.props.user) {
            nav_button = (
                <div>
                    <div>
                        <Link className="brand" to="/" href="index.html">Need A Team Name Gaming </Link>
                    </div>
                    <div>
                        <h3></h3>
                        <Link className="register" to="/login" href="Register.html" onClick={() => localStorage.clear()}>Logout</Link>
                    </div>
                </div>
            )

        } else {
            nav_button = (
                <div>
                    <div>
                        <Link className="brand" to="/" href="index.html">Need A Team Name Gaming </Link>
                    </div>
                    <div>
                        <Link className="register" to="/register" href="Register.html">Register</Link>
                        <Link className="signin" to="/login" href="signin.html">Login</Link>
                    </div>
                </div>
            )
        }

        return (
            <div className="row">
                {nav_button}
            </div>
        )
    }
}
