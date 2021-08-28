import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

export default class Register extends Component {
    state = {};

    constructor(props) {
        super(props)
        this.state = {
            input: {
                username: '',
                name: '',
                email: '',
                password: '',
                confirm_password: ''
            },
            errors: {},
            registerSuccess: false,
            mess: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    //Input Field Handle Change
    handleChange(e) {
        let input = this.state.input;
        input[e.target.name] = e.target.value;

        this.setState({
            input
        });
    }

    //Add New User
    registerUser() {
        if (this.validate()) {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "email": this.state.input.email,
                "name": this.state.input.name,
                "username": this.state.input.username,
                "password": this.state.input.password
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:8080/register", requestOptions)
                .then(response => {
                    if (response.ok) {
                        this.setState({
                            registerSuccess: true,
                        })
                    } else {
                        this.setState({
                            mess: 'Email is already registered',
                        })
                    }
                })
                .then(result => {
                    console.log(result)
                })
                .catch(error => {
                    console.log('error', error)
                });
        }
    }

    //Validation
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["username"]) {
            isValid = false;
            errors["username"] = "Please enter your username.";
        }

        if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof input["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please enter your confirm password.";
        }

        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

            if (input["password"] !== input["confirm_password"]) {
                isValid = false;
                errors["confirm_password"] = "Passwords don't match.";
            }
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        let error = '';

        if (this.state.mess) {
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.mess}
                </div>
            )
        }

        if (this.state.registerSuccess === true) {
            return <Redirect to={'/login'} />
        }

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h2>Register</h2>

                        <div className="form-group">
                            {error}
                            <label>Username</label>
                            <input type="text" name="username" id="username" className="form-control" placeholder="Username" value={this.state.input.username} onChange={this.handleChange} />
                            <div className="text-danger">{this.state.errors.username}</div>
                        </div>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" id="name" className="form-control" placeholder="Name" value={this.state.input.name} onChange={this.handleChange} />
                            <div className="text-danger">{this.state.errors.name}</div>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email" value={this.state.input.email} onChange={this.handleChange} />
                            <div className="text-danger">{this.state.errors.email}</div>
                        </div>

                        <div className="form-group">
                            <label>Pasword</label>
                            <input type="password" name="password" id="password" className="form-control" placeholder="Password" value={this.state.input.password} onChange={this.handleChange} />
                            <div className="text-danger">{this.state.errors.password}</div>
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" name="confirm_password" id="confirm_password" className="form-control" placeholder="Confirm Password" value={this.state.input.confirm_password} onChange={this.handleChange} />
                            <div className="text-danger">{this.state.errors.confirm_password}</div>
                        </div>
                    </form>

                    <button className="btn btn-primary btn-block" type="submit" onClick={this.registerUser}>Sign Up</button>

                    <p className="forgot-password text-right">
                        <Link className="mr-3" to={''}>Home</Link>
                        <Link className="mr-3" to={'/login'}>Log In</Link>
                        <Link to={'/forgot'}>Forgot Password?</Link>
                    </p>
                </div>
            </div>
        )
    }
}
