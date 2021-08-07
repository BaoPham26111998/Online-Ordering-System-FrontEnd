import React, { Component, useEffect, useState  } from 'react'
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';

export default function LogIn() {
    
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    axios.defaults.withCredentials = true;
    
    const login = () => {
        axios.post("http://localhost:8080/login", {
            userEmail: userEmail,
            password: password,
        }).then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            setLoginStatus(response.data[0].userEmail);
          }
        });
      };

      useEffect(() => {
        axios.get("http://localhost:8080/login").then((response) => {
          if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].userEmail);
          }
        });
      }, []);

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    {/* <form onSubmit={this.handleSubmit}> */}
                    <form>
                        <h2>Log In</h2>

                        <div className="form-group">
                            <label>Email</label>
                            <input  type="email" 
                                    className="form-control" 
                                    placeholder="Email" 
                                    onChange={(e) => {setUserEmail(e.target.value)}} />
                        </div>

                        <div className="form-group">
                            <label>Pasword</label>
                            <input  type="password" 
                                    className="form-control" 
                                    placeholder="Password" 
                                    onChange={(e) => {setPassword(e.target.value)}} />
                        </div>

                        <button className="btn btn-primary btn-block" onClick={login}>Log In</button>
                        <h1>{loginStatus}</h1>
                        <p className="forgot-password text-right">
                            <Link to={'/forgot'}>Forgot Password?</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    
}
