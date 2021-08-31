import React, { Component } from 'react'

export default class User extends Component {
    render() {
        const { user } = this.props;
        let role, lock;

        if (user.appUserRole === "BUYER") {
            role = <td className="text-success text_status text-uppercase">{user.appUserRole}</td>
        } else {
            role = <td className="text-danger text_status text-uppercase">{user.appUserRole}</td>
        }

        if (typeof (user.locked) === "boolean") {
            if ((user.locked).toString() === "true") {
                lock = <td className="text-success text_status text-uppercase">{user.locked.toString()}</td>
            } else {
                lock = <td className="text-danger text_status text-uppercase">{user.locked.toString()}</td>
            }
        }

        return (
            <>
                <td >{user.id}</td>
                <td >{user.username}</td>
                <td >{user.name}</td>
                <td >{user.email}</td>
                {role}
                {lock}
            </>
        )
    }
}
