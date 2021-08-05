import React, { Component } from 'react'
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';

export default class LogIn extends Component {
    state = {

    }

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            passsword: this.password,
        }

        axios.post("login", data).then(res => {
            console.log(res);

            localStorage.setItem('token', res.data.token)

            this.setState({
                loggedIn: true,

            })

            this.props.setUser(res.data.user);

        }).catch(err => {
            this.setState({
                mess: err.response.data.mess
            })
        })
    }

    LogIn() {
        console.warn(this.state);
        fetch("http://localhost:3000/login").then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.learning > 0) {
                    console.warn(this);
                } else {
                    alert("Please check username or password")
                }
            })
        })
    }

    setParams = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to={'/'} />
        }

        let error = '';

        if (this.state.mess) {
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.mess}
                </div>
            )
        }

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        {error}
                        <h2>Log In</h2>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.setParams} />
                        </div>

                        <div className="form-group">
                            <label>Pasword</label>
                            <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.setParams} />
                        </div>

                        {/* <button className="btn btn-primary btn-block" type="button" onClick={() => { this.LogIn() }}>Log In</button> */}

                    </form>
                    <button className="btn btn-primary btn-block" type="button" onClick={() => { this.LogIn() }}>Log In</button>

                    <p className="forgot-password text-right">
                        <Link className="mr-3" to={''}>Home</Link>
                        <Link className="mr-3" to={'/register'}>Register</Link>
                        <Link to={'/forgot'}>Forgot Password?</Link>
                    </p>
                </div>
            </div>
        )
    }
}
