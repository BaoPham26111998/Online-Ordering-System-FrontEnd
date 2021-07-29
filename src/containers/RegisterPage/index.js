import React, { Component } from 'react'
import axios from 'axios';

export default class Register extends Component {
    state={};

    handleSubmit = e => {
        e.preventDefault(); 

        const data = {
            userName: this.userName,
            name: this.name,
            email: this.email,
            passsword: this.password,
            confirm_password: this.confirmPassword
        }

        axios.post("register", data).then(res=>{
            console.log(res);
        }).catch(err=>{
            this.setState({
                mess: err.response.data.mess
            })
        })
    }

    render() {
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
                        <h2>Register</h2>

                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Username" onChange={e => this.userName = e.target.value}/>
                        </div>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Name" onChange={e => this.name = e.target.value}/>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email" onChange={e => this.email = e.target.value}/>
                        </div>

                        <div className="form-group">
                            <label>Pasword</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value}/>
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" onChange={e => this.confirmPassword = e.target.value}/>
                        </div>

                        <button className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
