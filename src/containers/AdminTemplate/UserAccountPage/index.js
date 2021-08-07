import React, { Component } from 'react'
import SidebarAdmin from 'components/SidebarAdmin';
import User from 'components/Users';
import '../modal.css';

import DataServices from 'services/index.js';

export default class UserAccount extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = () => {
        DataServices.getUsers()

            .then((response) => {
                console.log(response.data)
                this.setState({ users: response.data })
            })
            .catch(err => console.log(err))
    }

    deleteUser(userId) {
        DataServices.deleteUser(userId).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        });

        alert("User Deleted");

        window.location.reload(false);
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
                                <div className="card text-center">
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
                                                    className="btn btn-primary button-spec"
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
                                                    <th>Password</th>
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
                                <h2 id="header-title">Account</h2>
                            </header>
                            {/* Modal Header */}
                            <div className="modal-body">
                                <form role="form">
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
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-briefcase" />
                                                </span>
                                            </div>
                                            <select className="form-control" id="chucvu">
                                                <option>Select options</option>
                                                <option>Admin</option>
                                                <option>User</option>
                                            </select>
                                        </div>
                                        <span className="sp-thongbao" id="tbChucVu" />
                                    </div>
                                </form>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer" id="modal-footer">
                                <button id="btnThemNV" type="button" className="btn btn-success button-spec">
                                    Add Account
                                </button>
                                <button id="btnCapNhat" type="button" className="btn btn-success button-spec">
                                    Update
                                </button>
                                <button
                                    id="btnDong"
                                    type="button"
                                    className="btn btn-danger button-spec"
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
