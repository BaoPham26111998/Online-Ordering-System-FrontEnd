import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faMoneyBillAlt } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index';

export default class ModalTransaction extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.state = {
            input: {
                quantity_order_update: this.props.updateOrder.quantity,
                status_order_update: this.props.updateOrder.status,
            },
            errors: {},
        }

        this.handleChange = this.handleChange.bind(this);
    }

    //Input Field Handle Change
    handleChange(e) {
        let input = this.state.input;
        input[e.target.name] = e.target.value;

        this.setState({
            input
        });
    }

    //Update Order By ID
    updateOrderById(order_id) {
        if (this.validate()) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "quantity": this.state.input.quantity_order_update,
                "status": this.state.input.status_order_update
            });

            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://online-ordering-system-323618.as.r.appspot.com/order/" + order_id, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            this.props.parentCallBack();
        }
    }

    //Validation
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["quantity_order_update"]) {
            isValid = false;
            errors["quantity_order_update"] = "Please enter order quantity.";
        }

        if (!input["status_order_update"]) {
            isValid = false;
            errors["status_order_update"] = "Please enter order status.";
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        const { updateOrder } = this.props;

        //Font Awesome Icon
        const price = <FontAwesomeIcon icon={faDollarSign} />
        const soldQty = <FontAwesomeIcon icon={faMoneyBillAlt} />

        var id_modal = "modalOrderUpdate" + updateOrder.id;

        return (
            <div className="modal fade" id={id_modal} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <header className="head-form mb-0 bg-white">
                            <h2>UPDATE ORDER</h2>
                        </header>
                        {/* Modal Header */}
                        <div className="modal-body">
                            <h2>ITEM</h2>
                            <form className="form-modal" >
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                Item ID
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control input-sm"
                                            defaultValue={updateOrder.item.id}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                Title
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control input-sm"
                                            placeholder="Status"
                                            defaultValue={updateOrder.item.title}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                Price
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control input-sm"
                                            placeholder="Price"
                                            defaultValue={updateOrder.item.price}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                Description
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control input-sm"
                                            placeholder="Description"
                                            defaultValue={updateOrder.item.description}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                Genre
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control input-sm"
                                            placeholder="Genre"
                                            defaultValue={updateOrder.item.genre}
                                            disabled
                                        />
                                    </div>
                                </div>
                            </form>
                            <h2>BUYER</h2>
                            <form className="form-modal" >
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                Username
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control input-sm"
                                            placeholder="Quantity"
                                            defaultValue={updateOrder.user.username}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                Name
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control input-sm"
                                            placeholder="Status"
                                            defaultValue={updateOrder.user.name}
                                            disabled
                                        />
                                    </div>
                                </div>
                            </form>
                            <h2>UPDATE</h2>
                            <form className="form-modal" >
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                {soldQty}
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            name="quantity_order_update"
                                            // id="soldQty_update"
                                            className="form-control input-sm"
                                            placeholder="Quantity"
                                            // defaultValue={updateProduct.soldQty}
                                            value={this.state.input.quantity_order_update}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="text-danger">{this.state.errors.quantity_order_update}</div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                {price}
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            name="status_order_update"
                                            // id="img_update"
                                            className="form-control input-sm"
                                            placeholder="Status"
                                            // defaultValue={updateProduct.img}
                                            value={this.state.input.status_order_update}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="text-danger">{this.state.errors.status_order_update}</div>
                                </div>
                            </form>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer" id="modal-footer">
                            <button type="submit" className="btn btn-success button-spec" onClick={() => this.updateOrderById(updateOrder.id)}>
                                Update
                            </button>

                            <button
                                type="submit"
                                className="btn btn-danger button-spec"
                                data-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
