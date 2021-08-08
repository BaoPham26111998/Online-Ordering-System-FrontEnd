import React, { Component } from 'react'
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';
import DataServices from "services/index.js"

export default class LogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
        users: [],
        email: "",
        password:"",
    }
}

componentDidMount() {
  DataServices.getUsers()
        .then((response) => {
            console.log(response.data)
            this.setState({ users: response.data })
        })
        .catch(err => console.log(err))
}

onChange = (event) => {
  this.setState({
    [event.target.type]: event.target.value,
    
  })
  console.log( event.target.value)
};


handleSubmit = () => {
  console.log(this.state.email)
  console.log(this.state.password)
  const userList = (this.state.users)
  const user = (userList.filter((e) => e.email === this.state.email))
  console.log(user.map((user) => user.password))
}

    render() {

      const {email, password} = this.state;

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    
                        <h2>Log In</h2>

                        <div className="form-group">
                            <label>Email</label>
                            <input  
                                    type = "email"
                                    value={email}
                                    className="form-control" 
                                    placeholder="Email" 
                                    onChange={this.onChange}/>
                        </div>

                        <div className="form-group">
                            <label>Pasword</label>
                            <input  
                                    type="password" 
                                    value={password}
                                    className="form-control" 
                                    placeholder="Password" 
                                    onChange={this.onChange} />
                        </div>

                        <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>Log In</button>
                        <p className="forgot-password text-right">
                            <Link to={'/forgot'}>Forgot Password?</Link>
                        </p>
                  
                </div>
            </div>
        )
    }
}
