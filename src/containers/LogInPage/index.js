import React, { Component } from 'react'

export default class LogIn extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h2>Log In</h2>

                        <div className="form-group">
                            <lable>Email</lable>
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <lable>Pasword</lable>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>

                        <button className="btn btn-primary btn-block">Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}
