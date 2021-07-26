import React, { Component } from 'react'
import SidebarAdmin from 'components/SidebarAdmin';
import { Link } from "react-router-dom";
import '../modal.css';
import './style.css';

export default class ProductAdmin extends Component {
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
                                                    List Product Account
                                                </h3>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <button
                                                    className="btn btn-primary"
                                                    id="btnThem"
                                                    data-toggle="modal"
                                                    data-target="#myModal"
                                                >
                                                    Add Product
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
                                                        placeholder="Search product..."
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
            </>
        )
    }
}
