import React, { Component } from 'react'
import axios from "axios";

export default class LogIn extends Component {
    handleSubmit = e => {
        e.preventDefault(); 

        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            passsword: this.password,
            confirm_password: this.confirmPassword
        }

        axios.post("/login", data).then(res=>{
            console.log(res);

            localStorage.setItem('token', res.data.token)
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
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
                    </form>
                </div>
            </div>
        )
    }
}
