import React, { Component } from 'react'
import SidebarAdmin from 'components/SidebarAdmin';
import '../modal.css';

export default class UserAccount extends Component {
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
                                                    List User Account
                                                </h3>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <button
                                                    className="btn btn-primary"
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
                                        <table className="table table-bordered table-hover myTable">
                                            <thead className="text-primary">
                                                <tr>
                                                    <th className="nowrap">
                                                        <span className="mr-1">ID Account</span>
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
                                            <tbody id="tableDanhSach"></tbody>
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
                                <button id="btnThemNV" type="button" className="btn btn-success">
                                    Add Account
                                </button>
                                <button id="btnCapNhat" type="button" className="btn btn-success">
                                    Update
                                </button>
                                <button
                                    id="btnDong"
                                    type="button"
                                    className="btn btn-danger"
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
