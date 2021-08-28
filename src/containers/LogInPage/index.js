import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

// import NavbarHome from 'components/NavbarHome';
import { fakeAuth } from 'services/auth';

export default class LogIn extends Component {
    state = {
        redirected: false
    }

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            isLogin: localStorage.getItem("accessToken") != null,
            userRole: localStorage.getItem("username"),
        }

        this.login = this.login.bind(this);
    }

    setParams = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    login = (e) => {
        e.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", this.state.email);
        urlencoded.append("password", this.state.password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        // https://online-ordering-system-323618.as.r.appspot.com/auth/login

        fetch("http://localhost:8080/auth/login", requestOptions)
            .then(response => {
                console.log(response)
                if (response.ok) {
                    return response.json()
                }

                throw Error(response.status)
            })
            .then(result => {
                console.log(result)
                localStorage.setItem("accessToken", result.accessToken)
                localStorage.setItem("username", result.username)
                // this.setState({ isLogin: true })

                fakeAuth.authenticate(() => {
                    this.setState(() => ({
                        redirected: true
                    }))
                })
            })
            .catch(error => {
                console.log('error', error)
                alert("Username or Password is wrong.")
            });
    }

    onLogoutSuccess = () => {
        this.setState({ isLogin: false })
    }

    render() {
        const { redirected } = this.state

        if ((redirected === true) && (this.state.userRole === 'user_admin')) {
            return <Redirect to={'/admin'} />
        }

        // if (this.state.isLogin && (this.state.userRole !== "user_admin")) {
        //     return <Redirect to={'/'} />
        // }

        return (
            <>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form>
                            <h2>Log In</h2>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.setParams} />
                            </div>
                            <div className="form-group">
                                <label>Pasword</label>
                                <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.setParams} />
                            </div>
                            <button className="btn btn-primary btn-block" type="button" onClick={this.login}>Log In</button>
                            <p className="forgot-password text-right">
                                <Link to={'/forgot'}>Forgot Password?</Link>
                            </p>
                            <p className="forgot-password text-right">
                                <Link to={'/register'}>Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
