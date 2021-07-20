import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h2>Register</h2>

                        <div className="form-group">
                            <lable>First Name</lable>
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>

                        <div className="form-group">
                            <lable>Last Name</lable>
                            <input type="text" className="form-control" placeholder="Last Name" />
                        </div>

                        <div className="form-group">
                            <lable>Email</lable>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <lable>Pasword</lable>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <lable>Confirm Password</lable>
                            <input type="password" className="form-control" placeholder="Confirm Password" />
                        </div>

                        <button className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}
