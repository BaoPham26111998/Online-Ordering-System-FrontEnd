import React, { Component } from 'react'
import SidebarAdmin from 'components/SidebarAdmin';
import '../modal.css';

import Transaction from 'components/TransactionsAdmin';

export default class TransactionAdmin extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            input: {
                quantity_order: '',
                status_order: '',
                item_id_order: '',
                user_id_order: ''
            },
            errors: {},
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getAllOrders();
    }

    //Input Field Handle Change
    handleChange(e) {
        let input = this.state.input;
        input[e.target.name] = e.target.value;

        this.setState({
            input
        });
    }

    //Get All Orders
    getAllOrders = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/orders", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState(() => ({
                    orders: JSON.parse(result)
                }))
            })
            .catch(error => console.log('error', error));
    }

    //Adding Order
    addOrder = () => {
        if (this.validate()) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "quantity": this.state.input.quantity_order,
                "status": this.state.input.status_order,
                "item": {
                    "id": this.state.input.item_id_order
                },
                "user": {
                    "id": this.state.input.user_id_order
                }
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:8080/order", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            alert("Order Added");

            this.getAllOrders();
        }
    }

    //Validation
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["quantity_order"]) {
            isValid = false;
            errors["quantity_order"] = "Please enter quantity.";
        }

        if (!input["status_order"]) {
            isValid = false;
            errors["status_order"] = "Please enter status order.";
        }

        if (!input["item_id_order"]) {
            isValid = false;
            errors["item_id_order"] = "Please enter item ID.";
        }

        if (!input["user_id_order"]) {
            isValid = false;
            errors["user_id_order"] = "Please enter user ID.";
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    //Delete Order
    deleteOrderById = (orderId) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/order/" + orderId, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        alert("Order Deleted");

        this.getAllOrders();
    }

    //Display Order
    renderHTML = () => {
        if (this.state.orders && this.state.orders.length > 0) {
            return this.state.orders.map((order) => {
                return (
                    <tr key={order.id}>
                        <Transaction deleteOrderById={this.deleteOrderById} order={order} />
                    </tr>
                );
            });
        };

    };

    render() {
        return (
            <>
                <div className="content">
                    <SidebarAdmin />
                    <div className="right-content">
                        {/* Page Content Holder */}
                        <div id="content">
                            <div className="container">
                                <div className="card text-center list-product-outside">
                                    {/* Header */}
                                    <div className="card-header myCardHeader">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h3 className="text-left text-primary font-weight-bold">
                                                    List Transaction
                                                </h3>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <button
                                                    className="btn btn-primary button-spec button-add-product"
                                                    id="btnThem"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                >
                                                    Add Order
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="card-body">
                                        <div className="row mb-3">
                                            <div className="col">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search transaction..."
                                                        id="searchName"
                                                    />
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="btnTimNV">
                                                            <i className="fa fa-search" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <table className="table table-bordered table-hover">
                                            <thead className="text-primary">
                                                <tr>
                                                    <th>
                                                        <span className="">ID Order</span>
                                                        <i className="fa fa-arrow-up" id="SapXepTang" />
                                                        <i className="fa fa-arrow-down" id="SapXepGiam" />
                                                    </th>
                                                    <th>Quantity</th>
                                                    <th>Purchased Time</th>
                                                    <th>Email</th>
                                                    <th>Total</th>
                                                    <th>Status</th>
                                                    <th>More</th>
                                                    <th>
                                                        <em className="fa fa-cog" />
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody id="tableDanhSach">
                                                {this.renderHTML()}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Footer */}
                                    <div className="card-footer myCardFooter">
                                        <nav>
                                            <ul
                                                className="pagination justify-content-center"
                                                id="ulPhanTrang"
                                            ></ul>
                                        </nav>
                                    </div>

                                    {/* The Modal */}
                                    <div className="modal fade" id="myModal">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <header className="head-form mb-0 bg-white ">
                                                    <h2 id="header-title">ADD ORDER</h2>
                                                </header>
                                                {/* Modal Header */}
                                                <div className="modal-body">
                                                    <form>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="fa fa-user" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    name="quantity_order"
                                                                    id="quantity_order"
                                                                    className="form-control input-sm"
                                                                    placeholder="Quantity"
                                                                    value={this.state.input.quantity_order}
                                                                    onChange={this.handleChange}
                                                                />
                                                            </div>
                                                            <div className="text-danger">{this.state.errors.quantity_order}</div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="fa fa-envelope" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    name="status_order"
                                                                    id="status_order"
                                                                    className="form-control input-sm"
                                                                    placeholder="Status"
                                                                    value={this.state.input.status_order}
                                                                    onChange={this.handleChange}
                                                                />
                                                            </div>
                                                            <div className="text-danger">{this.state.errors.status_order}</div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="fa fa-address-book" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    name="item_id_order"
                                                                    id="item_id_order"
                                                                    className="form-control input-sm"
                                                                    placeholder="Item ID"
                                                                    value={this.state.input.item_id_order}
                                                                    onChange={this.handleChange}
                                                                />
                                                            </div>
                                                            <div className="text-danger">{this.state.errors.item_id_order}</div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="fa fa-key" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    name="user_id_order"
                                                                    id="user_id_order"
                                                                    className="form-control input-sm"
                                                                    placeholder="User ID"
                                                                    value={this.state.input.user_id_order}
                                                                    onChange={this.handleChange}
                                                                />
                                                            </div>
                                                            <div className="text-danger">{this.state.errors.user_id_order}</div>
                                                        </div>
                                                    </form>
                                                </div>
                                                {/* Modal footer */}
                                                <div className="modal-footer" id="modal-footer">
                                                    <button id="btnThemNV" type="submit" className="btn btn-success button-spec button-add-close" onClick={this.addOrder}>
                                                        Add Order
                                                    </button>
                                                    <button
                                                        id="btnDong"
                                                        type="submit"
                                                        className="btn btn-danger button-spec button-add-close"
                                                        data-dismiss="modal"
                                                    >
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
