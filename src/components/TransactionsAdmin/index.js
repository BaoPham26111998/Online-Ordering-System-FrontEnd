import React, { Component } from 'react'

import './style.css'

export default class Transaction extends Component {
    render() {
        const { deleteOrderById, order } = this.props;
        let order_status;

        if (order.status === "Paid") {
            order_status = <td className="text-success text_status text-uppercase">{order.status}</td>
        } else {
            order_status = <td className="text-danger text_status  text-uppercase">{order.status}</td>
        }

        return (
            <>
                <td >{order.id}</td>
                <td >{order.quantity}</td>
                <td >{order.purchaseTime}</td>
                <td >{order.user.email}</td>
                <td>{order.total}</td>
                {order_status}
                <td><button
                    className="btn btn-primary button-spec "
                    id="btnMore"
                    data-toggle="modal"
                    data-target="#myModal">
                    More Info
                </button>
                </td>
                <td><button className="btn btn-danger" onClick={deleteOrderById.bind(this, order.id)}><i className="fa fa-trash"></i></button></td>
            </>
        )
    }
}
