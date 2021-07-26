import React, { Component } from 'react'

import axios from 'axios'

export default class Forgot extends Component {
    state={};

    handleSubmit = e => {
        e.preventDefault(); 

        const data = {
            email: this.email,
        }

        axios.post("forgot", data).then(res=>{
            this.setState({
                mess: res.data.mess,
                cls: 'success'
            })
        }).catch(err=>{
            this.setState({
                mess: err.response.data.mess,
                cls: 'danger'
            })
        })
    }

    render() {
        let mess = '';

        if(this.state.mess){
            const cls = 'alert alert-' + this.state.cls;

            mess = (
                <div className={cls} role="alert">
                    {this.state.mess}
                </div>
            )
        }

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit}>
                        {mess}
                        <h2>Forgot Password</h2>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Email" onChange={e => this.email = e.target.value} />
                        </div>

                        <button className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
