import React, { Component } from 'react'
import SidebarAdmin from 'components/SidebarAdmin';
import Product from 'components/ProductsAdmin';
import ModalUpdate from 'components/ModalUpdate';
import '../modal.css';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faImage, faMoneyBillAlt } from '../../../../node_modules/@fortawesome/free-solid-svg-icons/index';

import DataServices from 'services/index.js';


export default class ProductAdmin extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.accessAdmin();

        this.getAllProducts();

        console.log("componentDidMount")
    }

    //Get Product Data
    getAllProducts() {
        DataServices.getItems()
            .then((response) => {
                console.log(response.data)
                this.setState({ products: response.data })
            }).catch(err => {
                console.log(err)
            })
    }

    //Access To Admin Control
    accessAdmin() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessToken'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/users", requestOptions)
            .then(response => {
                console.log(response)
                if (response.ok) {
                    return response.json()
                }

                throw Error(response.status)
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    //Adding Product
    addProduct = (product) => {
        const data = {
            title: this.title,
            price: this.price,
            inStock: this.inStock,
            description: this.description,
            genre: this.genre,
            soldQty: this.soldQty,
            img: this.img
        }

        DataServices.postItem(data).then(res => {
            this.setState(prevState => ({
                products: prevState.products.concat(product)
            }
            ), this.getAllProducts)
        }).catch(err => {
            console.log(err);
        })

        alert("Product Added");

    }

    //Update Product
    updateProductById = () => {
        const data = {
            title: this.title,
            price: this.price,
            inStock: this.inStock,
            description: this.description,
            genre: this.genre,
            soldQty: this.soldQty,
            img: this.img
        }

        DataServices.updateItemById(data).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

        alert("Product Updated");

        window.location.reload(false);
    }

    //Delete Product
    deleteProductById = (productId, product) => {
        DataServices.deleteItemById(productId).then(res => {
            this.setState(prevState => ({
                products: prevState.products.concat(product)
            }
            ), this.getAllProducts)
        }).catch(err => {
            console.log(err)
        });

        alert("Product Deleted");
    }

    //Display Product
    renderHTML = () => {
        if (this.state.products && this.state.products.length > 0) {
            return this.state.products.map((product) => {
                return (
                    <div key={product.id} className="col-3 room" >
                        <Product deleteProductById={this.deleteProductById} product={product} />
                        <ModalUpdate updateProduct={product} />
                    </div>
                );
            });
        };
    };

    render() {
        const image = <FontAwesomeIcon icon={faImage} />
        const price = <FontAwesomeIcon icon={faDollarSign} />
        const soldQty = <FontAwesomeIcon icon={faMoneyBillAlt} />
        return (
            <>
                <div className="content">
                    <SidebarAdmin />
                    <div className="right-content">
                        {/* Page Content Holder */}
                        <div id="content">
                            <div className="container ">
                                <div className="card text-center list-product-outside">
                                    {/* Header */}
                                    <div className="card-header myCardHeader">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h3 className="text-left text-primary font-weight-bold">
                                                    List Products
                                                </h3>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <button
                                                    className="btn btn-primary button-spec button-add-product"
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
                                    </div>

                                    <div className="row center product-outside">
                                        {this.renderHTML()}
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
                                                    <h2 id="header-title">ADD PRODUCT</h2>
                                                </header>
                                                {/* Modal Header */}
                                                <div className="modal-body">
                                                    <form onSubmit={this.handleSubmit}>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="fa fa-user" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="title"
                                                                    name="title"
                                                                    id="title"
                                                                    className="form-control input-sm"
                                                                    placeholder="Title"
                                                                    onChange={e => this.title = e.target.value}
                                                                />
                                                            </div>
                                                            <span className="sp-mess" id="messTitle" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        {price}
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="price"
                                                                    name="price"
                                                                    id="price"
                                                                    className="form-control input-sm"
                                                                    placeholder="Price"
                                                                    onChange={e => this.price = e.target.value}
                                                                />
                                                            </div>
                                                            <span className="sp-mess" id="messPrice" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="fa fa-envelope" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="instock"
                                                                    name="instock"
                                                                    id="instock"
                                                                    className="form-control input-sm"
                                                                    placeholder="Instock"
                                                                    onChange={e => this.inStock = e.target.value}
                                                                />
                                                            </div>
                                                            <span className="sp-mess" id="messInstock" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="fa fa-address-book" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="description"
                                                                    name="description"
                                                                    id="description"
                                                                    className="form-control input-sm"
                                                                    placeholder="Description"
                                                                    onChange={e => this.description = e.target.value}
                                                                />
                                                            </div>
                                                            <span className="sp-mess" id="messDescription" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="fa fa-key" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="genre"
                                                                    name="genre"
                                                                    id="genre"
                                                                    className="form-control input-sm"
                                                                    placeholder="Genre"
                                                                    onChange={e => this.genre = e.target.value}
                                                                />
                                                            </div>
                                                            <span className="sp-mess" id="messGenre" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        {soldQty}
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="soldQty"
                                                                    name="soldQty"
                                                                    id="soldQty"
                                                                    className="form-control input-sm"
                                                                    placeholder="Sold Quantity"
                                                                    onChange={e => this.soldQty = e.target.value}
                                                                />
                                                            </div>
                                                            <span className="sp-mess" id="messSoldQty" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        {image}
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="img"
                                                                    name="img"
                                                                    id="img"
                                                                    className="form-control input-sm"
                                                                    placeholder="Image"
                                                                    onChange={e => this.img = e.target.value}
                                                                />
                                                            </div>
                                                            <span className="sp-mess" id="messImage" />
                                                        </div>
                                                    </form>
                                                </div>
                                                {/* Modal footer */}
                                                <div className="modal-footer" id="modal-footer">
                                                    <button id="btnThemNV" type="submit" className="btn btn-success button-spec button-add-close" onClick={this.addProduct}>
                                                        Add Product
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
