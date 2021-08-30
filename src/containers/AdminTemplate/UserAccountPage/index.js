import React, { Component } from 'react'
import SidebarAdmin from 'components/SidebarAdmin';
import User from 'components/UsersAdmin';
import '../modal.css';

import './style.css'

import DataServices from 'services/index.js';

export default class UserAccount extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.state = {
            users: {},
            username: '',
            name: '',
            email: '',
            passsword: '',
        }

        this.registerAdmin = this.registerAdmin.bind(this);
    }

    componentDidMount() {
        this.getAllUsers();
    }

    //Add New Admin Account
    registerAdmin = e => {
        e.preventDefault();

        const data = {
            username: this.username,
            name: this.name,
            email: this.email,
            passsword: this.password,
            // confirm_password: this.confirmPassword
        }

        console.log(data)

        DataServices.postAdmin(data).then((res) => {
            console.log(res);
            console.log(data)
        }).catch(err => {
            console.log(err);
            console.log(data)
        })

        alert("Account Created")
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

        fetch("https://online-ordering-system-323618.as.r.appspot.com/users", requestOptions)
            .then(response => response.text())
            .then(result => (
                // console.log("result: " + result),
                this.setState({
                    users: JSON.parse(result)
                })
            ))
            .catch(error => console.log('error', error));
    }

    renderHTML = () => {
        if (this.state.users && this.state.users.length > 0) {
            return this.state.users.map((user) => {
                return (
                    <tr key={user.id}>
                        <User deleteUser={this.deleteUser} user={user} />
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
                                                {/* <td>{this.state.user.id}</td> */}
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
                                                type="msnv"
                                                name="msnv"
                                                id="msnv"
                                                className="form-control input-sm"
                                                placeholder="Username"
                                            />
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
                                                type="name"
                                                name="name"
                                                id="name"
                                                className="form-control input-sm"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <span className="sp-thongbao" id="tbTen" />
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-envelope" />
                                                </span>
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control input-sm"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <span className="sp-thongbao" id="tbEmail" />
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
                                                name="password"
                                                id="password"
                                                className="form-control input-sm"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <span className="sp-thongbao" id="tbMatKhau" />
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
