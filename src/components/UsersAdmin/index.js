import React, { Component } from 'react'

export default class User extends Component {
    render() {
        const { user } = this.props;
        return (
            <>
                <td >{user.id}</td>
                <td >{user.username}</td>
                <td >{user.name}</td>
                <td >{user.email}</td>
                <td>{user.appUserRole}</td>
                <td>{(user.locked).toString()}</td>
                <td><button className="btn btn-danger" ><i className="fa fa-trash"></i></button></td>
            </>
        )
    }
}
