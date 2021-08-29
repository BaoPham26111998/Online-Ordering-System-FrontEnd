import React, { Component } from 'react'
import { Link, Redirect, NavLink } from 'react-router-dom';

import '../../containers/HomeTemplate/homeTemplate.css'
import Navbar from 'components/Navbar';


import { fakeAuth } from 'services/auth';

export default class NavbarHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: localStorage.getItem('accessToken') != null,
            userRole: localStorage.getItem("username"),
            user: []
        }
    }

    loadData = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessToken'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://online-ordering-system-323618.as.r.appspot.com/user/name/" + localStorage.getItem('username'), requestOptions)
            .then(response => (
                response.text()
            ))
            .then(result => (
                this.setState({
                    user: result
                })
            ))
            .catch(error => (
                console.log('error', error)
            ));
    }

    logout = (e) => {
        fakeAuth.signout(() => {
            localStorage.removeItem("accessToken")
            localStorage.removeItem("username")
            this.setState({
                isLogin: false
            })
        })

        alert("Logout success")
    }

    render() {
        console.log(this.state.user)

        if (this.state.isLogged === false) {
            return <Redirect to={'/login'} />
        }

        if (this.state.isLogin === true) {
            return (
                <header className="homepage-header">
                    <div className="header row">
                        <div>
                            <Link className="brand" to="/" href="index.html">SCP Gaming </Link>
                        </div>
                        <div>
                            <Link className="register" to="/account" >Wellcome: {this.state.userRole}</Link>
                            <Link className="signin" to="/login" onClick={this.logout}>Logout</Link>
                        </div>
                    </div>
                    <div>
                        <Navbar></Navbar>
                    </div>

                </header>
            )

        }

        return (
            <header className="homepage-header">
                <div className="header row">
                    <div>
                        <Link className="brand" to="/" href="index.html">SCP Gaming </Link>
                    </div>
                    <div>
                        <Link className="register" to="/register" href="Register.html">Register</Link>
                        <Link className="signin" to="/login" href="signin.html">Login</Link>
                    </div>
                </div>

            </header>
        )
    }
}
