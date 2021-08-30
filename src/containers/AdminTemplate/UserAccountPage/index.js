import React, { Component } from 'react'
import SidebarAdmin from 'components/SidebarAdmin';
import User from 'components/UsersAdmin';
import '../modal.css';

import './style.css'

export default class UserAccount extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            input: {
                username_admin: '',
                name_admin: '',
                email_admin: '',
                password_admin: '',
                confirm_password_admin: ''
            },
            errors: {},
            registerSuccess: false,
            mess: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getAllUsers();
    }

    //Input Field Handle Change
    handleChange(e) {
        let input = this.state.input;
        input[e.target.name] = e.target.value;

        this.setState({
            input
        });
    }

    //Add New Admin Account
    registerAdmin = (e) => {
        e.preventDefault();

        if (this.validate()) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "username": this.state.input.username_admin,
                "name": this.state.input.name_admin,
                "email": this.state.input.email_admin,
                "password": this.state.input.password_admin,
            });

            console.log(raw)

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:8080/register/admin", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            alert("Account Created")

            this.getAllUsers();
        }
    }

    //Get User Data
    getAllUsers = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessToken'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/users", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState(() => ({
                    users: JSON.parse(result)
                }))
            })
            .catch(error => console.log('error', error));
    }

    //Display User
    renderHTML = () => {
        if (this.state.users && this.state.users.length > 0) {
            return this.state.users.map((user) => {
                return (
                    <tr key={user.id}>
                        <User user={user} />
                    </tr>
                );
            });
        };

    };

    //Validation
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["username_admin"]) {
            isValid = false;
            errors["username_admin"] = "Please enter your username.";
        }

        if (!input["name_admin"]) {
            isValid = false;
            errors["name_admin"] = "Please enter your name.";
        }

        if (!input["email_admin"]) {
            isValid = false;
            errors["email_admin"] = "Please enter your email Address.";
        }

        if (!input["password_admin"]) {
            isValid = false;
            errors["password_admin"] = "Please enter your password.";
        }

        if (!input["confirm_password_admin"]) {
            isValid = false;
            errors["confirm_password_admin"] = "Please enter your confirm password.";
        }

        if (typeof input["password_admin"] !== "undefined" && typeof input["confirm_password_admin"] !== "undefined") {

            if (input["password_admin"] !== input["confirm_password_admin"]) {
                isValid = false;
                errors["confirm_password_admin"] = "Passwords don't match.";
            }
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

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
                                                    List User Accounts
                                                </h3>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <button
                                                    className="btn btn-primary button-spec button-add-product"
                                                    id="btnThem"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                >
                                                    Add Account
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
                                                        placeholder="Search account..."
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
                                                        <span className="">ID Account</span>
                                                        <i className="fa fa-arrow-up" id="SapXepTang" />
                                                        <i className="fa fa-arrow-down" id="SapXepGiam" />
                                                    </th>
                                                    <th>Username</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Role</th>
                                                    <th>Locked</th>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Modal */}
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <header className="head-form mb-0 bg-white">
                                <h2 id="header-title">ADD ADMIN ACCOUNT</h2>
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
                                                name="username_admin"
                                                id="username_admin"
                                                className="form-control input-sm"
                                                placeholder="Username"
                                                value={this.state.input.username_admin}
                                                onChange={this.handleChange}
                                            />
                                            <div className="text-danger">{this.state.errors.username_admin}</div>
                                        </div>
                                        <span className="sp-thongbao" id="tbMaNV" />
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
                                                name="name_admin"
                                                id="name_admin"
                                                className="form-control input-sm"
                                                placeholder="Name"
                                                value={this.state.input.name_admin}
                                                onChange={this.handleChange}
                                            />
                                            <div className="text-danger">{this.state.errors.name_admin}</div>
                                        </div>
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
                                                name="email_admin"
                                                id="email_admin"
                                                className="form-control input-sm"
                                                placeholder="Email"
                                                value={this.state.input.email_admin}
                                                onChange={this.handleChange}
                                            />
                                            <div className="text-danger">{this.state.errors.email_admin}</div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-key" />
                                                </span>
                                            </div>
                                            <input
                                                type="password"
                                                name="password_admin"
                                                id="password_admin"
                                                className="form-control input-sm"
                                                placeholder="Password"
                                                value={this.state.input.password_admin}
                                                onChange={this.handleChange}
                                            />
                                            <div className="text-danger">{this.state.errors.password_admin}</div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-key" />
                                                </span>
                                            </div>
                                            <input
                                                type="password"
                                                name="confirm_password_admin"
                                                id="confirm_password_admin"
                                                className="form-control input-sm"
                                                placeholder="Confirm Password"
                                                value={this.state.input.confirm_password_admin}
                                                onChange={this.handleChange}
                                            />
                                            <div className="text-danger">{this.state.errors.confirm_password_admin}</div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer" id="modal-footer">
                                <button id="btnThemNV" type="button" className="btn btn-success button-spec button-add-close" onClick={this.registerAdmin}>
                                    Add Account
                                </button>
                                <button
                                    id="btnDong"
                                    type="button"
                                    className="btn btn-danger button-spec button-add-close"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
