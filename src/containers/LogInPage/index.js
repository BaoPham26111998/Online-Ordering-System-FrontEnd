import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

// import NavbarHome from 'components/NavbarHome';
import { fakeAuth } from 'services/auth';

export default class LogIn extends Component {
    state = {
        redirected: false
    }

    constructor(props) {
        super(props)
        this.state = {
            input: {
                email: '',
                password: '',
            },
            errors: {},
            mess: '',
            isLogin: localStorage.getItem("accessToken") != null,
            userRole: localStorage.getItem("username")
        }

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    //Input Field Handle Change
    handleChange(e) {
        let input = this.state.input;
        input[e.target.name] = e.target.value;

        this.setState({
            input
        });
    }

    //Log In
    login = () => {
        if (this.validate()) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("email", this.state.input.email);
            urlencoded.append("password", this.state.input.password);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            // https://online-ordering-system-323618.as.r.appspot.com/auth/login

            fetch("http://localhost:8080/auth/login", requestOptions)
                .then(response => {
                    console.log(response)
                    if (response.ok) {
                        return response.json()
                    }

                    throw Error(response.status)
                })
                .then(result => {
                    console.log(result)
                    localStorage.setItem("accessToken", result.accessToken)
                    localStorage.setItem("username", result.username)
                    // this.setState({ isLogin: true })

                    fakeAuth.authenticate(() => {
                        this.setState(() => ({
                            redirected: true
                        }))
                    })
                })
                .catch(error => {
                    console.log('error', error)
                    this.setState({
                        mess: "Username or Password is wrong."
                    })
                });
        }
    }

    //Validation
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        const { redirected } = this.state
        let error = '';

        if (this.state.mess) {
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.mess}
                </div>
            )
        }

        if((redirected === true)){
            if(this.state.userRole === 'user_admin'){
                return <Redirect to={'/admin'} />
            }else{
                return <Redirect to={''} />
            }
        }

        return (
            <>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form>
                            <h2>Log In</h2>
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
                            <button className="btn btn-primary btn-block" type="button" onClick={this.login}>Log In</button>
                            <br />
                            {error}
                            <p className="forgot-password text-right">
                                <Link to={'/forgot'}>Forgot Password?</Link>
                            </p>
                            <p className="forgot-password text-right">
                                <Link to={'/register'}>Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
