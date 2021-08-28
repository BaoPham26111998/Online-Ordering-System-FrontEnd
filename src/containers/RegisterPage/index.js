import React, { Component } from 'react'
import axios from 'axios';
// import DataServices from 'services/index';
// import { Link, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    state = {};

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            name: '',
            email: '',
            passsword: '',
        }

        this.registerUser = this.registerUser.bind(this);
    }

    registerUser = e => {
        e.preventDefault();

        const data = {
            username: this.username,
            name: this.name,
            email: this.email,
            passsword: this.password,
            // confirm_password: this.confirmPassword
        }

        console.log(data)

        axios.post('http://localhost:8080/users', data).then((res) => {
            console.log(res);
            console.log(data)
        }).catch(err => {
            console.log(err);
            console.log(data)
        })

        alert("Account Created")
    }

    render() {
        // let error = '';

        // if (this.state.mess) {
        //     error = (
        //         <div className="alert alert-danger" role="alert">
        //             {this.state.mess}
        //         </div>
        //     )
        // }

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form role="form" onSubmit={this.handleSubmit}>
                        {/* {error} */}
                        <h2>Register</h2>

                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Username" onChange={e => this.username = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Name" onChange={e => this.name = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email" onChange={e => this.email = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Pasword</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value} />
                        </div>

                        {/* <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" />
                        </div> */}
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
