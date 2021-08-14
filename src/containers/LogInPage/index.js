import React, { Component } from 'react'
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';

export default class LogIn extends Component {
    state = {

    }

    handleSubmit = e => {
        e.preventDefault(); 

        const data = {
            email: this.email,
            passsword: this.password,
        }

        axios.post("login", data).then(res=>{
            console.log(res);

            localStorage.setItem('token', res.data.token)

            this.setState({
                loggedIn: true,

            })

            this.props.setUser(res.data.user);

        })
    }

    render() {
        if(this.state.loggedIn){
            return <Redirect to={'/'}/>
        }

        let error = '';

        if(this.state.mess){
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
                            <input type="email" className="form-control" placeholder="Email" onChange={e => this.email = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Pasword</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value} />
                        </div>

                        <button className="btn btn-primary btn-block">Log In</button>
                        <p className="forgot-password text-right">
                            <Link to={'/forgot'}>Forgot Password?</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}
