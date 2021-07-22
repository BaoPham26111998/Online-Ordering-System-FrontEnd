import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Reset extends Component {
    state = {};

    handleSubmit = e => {
        e.preventDefault(); 

        const data = {
            token: this.props.match.params.id,
            passsword: this.password,
            confirm_password: this.confirm_password,
        }

        axios.post("reset", data).then(res=>{
            console.log(res);

            this.setState = ({
                reset: true,
            })

        }).catch(err=>{
            this.setState({
                mess: err.response.data.mess
            })
        })
    }

    render() {
        if(this.state.reset){
            return <Redirect to={'/login'}/>
        }

        let error = '';

        if(this.state.error){
            mess = (
                <div className="alert alert-danger" role="alert">
                    {this.state.error}
                </div>
            )
        }

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        {error}
                        <h2>Reset Password</h2>

                        <div className="form-group">
                            <label>New Pasword</label>
                            <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Confirm New Password</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" onChange={e => this.confirm_password = e.target.value} />
                        </div>

                        <button className="btn btn-primary btn-block">Submit</button>
                        
                    </form>
                </div>
            </div>
        )
    }
}
