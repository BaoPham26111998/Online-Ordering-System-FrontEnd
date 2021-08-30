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
            products: [],
            input: {
                title: '',
                price: '',
                instock: '',
                description: '',
                genre: '',
                soldQty: '',
                img: ''
            },
            errors: {},
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.getAllProducts();

        console.log("componentDidMount")
    }

    handleCallback = () => {
        this.getAllProducts();
    }

    //Input Field Handle Change
    handleChange(e) {
        let input = this.state.input;
        input[e.target.name] = e.target.value;

        this.setState({
            input
        });
    }

    //Get Product Data
    getAllProducts() {
        DataServices.getItems()
            .then((response) => {
                // console.log(response.data)
                this.setState({ products: response.data })
            }).catch(err => {
                console.log(err)
            })
    }

    //Adding Product
    addProduct = () => {
        if (this.validate()) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "title": this.state.input.title,
                "price": this.state.input.price,
                "inStock": this.state.input.instock,
                "description": this.state.input.description,
                "genre": this.state.input.genre,
                "soldQty": this.state.input.soldQty,
                "img": this.state.input.img
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:8080/items/", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            alert("Product Added");

            this.getAllProducts();
        }
    }

    //Delete Product
    deleteProductById = (productId) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/items/" + productId, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        alert("Product Deleted");

        this.getAllProducts();
    }

    // //Search By Genre
    // genreChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.attributes[0].value,
    //     })
    //     ItemService.getItemByGerne(event.target.attributes[0].value)
    //         .then(res => {
    //             // console.log(event.target.attributes[0].value)
    //             this.setState({ products: res.data });
    //         })
    //         .catch(err => console.log(err));
    // };

    //Display Product
    renderHTML(products) {
        return products.map((product) => {
            return (
                <div key={product.id} className="col-3 room" >
                    <Product deleteProductById={this.deleteProductById} product={product} />
                    <ModalUpdate parentCallBack={this.handleCallback} updateProduct={product} />
                </div>
            );
        });
    };

    //Validation
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["title"]) {
            isValid = false;
            errors["title"] = "Please enter your product title.";
        }

        if (!input["price"]) {
            isValid = false;
            errors["price"] = "Please enter your product price.";
        }

        if (!input["instock"]) {
            isValid = false;
            errors["instock"] = "Please enter your product instock.";
        }

        if (!input["description"]) {
            isValid = false;
            errors["description"] = "Please enter your product description.";
        }

        if (!input["genre"]) {
            isValid = false;
            errors["genre"] = "Please enter your product genre.";
        }

        if (!input["soldQty"]) {
            isValid = false;
            errors["soldQty"] = "Please enter your product sold quantity.";
        }

        if (!input["img"]) {
            isValid = false;
            errors["img"] = "Please enter your image URL.";
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        const { products } = this.state

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
                                        {this.renderHTML(products)}
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
                                                    <form>
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
                                                                    value={this.state.input.title}
                                                                    onChange={this.handleChange}
                                                                />
                                                                <div className="text-danger">{this.state.errors.title}</div>
                                                            </div>
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
                                                                    value={this.state.input.price}
                                                                    onChange={this.handleChange}
                                                                />
                                                                <div className="text-danger">{this.state.errors.price}</div>
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
                                                                    value={this.state.input.instock}
                                                                    onChange={this.handleChange}
                                                                />
                                                                <div className="text-danger">{this.state.errors.instock}</div>
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
                                                                    value={this.state.input.description}
                                                                    onChange={this.handleChange}
                                                                />
                                                                <div className="text-danger">{this.state.errors.description}</div>
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
                                                                    value={this.state.input.genre}
                                                                    onChange={this.handleChange}
                                                                />
                                                                <div className="text-danger">{this.state.errors.genre}</div>
                                                            </div>
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
                                                                    value={this.state.input.soldQty}
                                                                    onChange={this.handleChange}
                                                                />
                                                                <div className="text-danger">{this.state.errors.soldQty}</div>
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
                                                                    value={this.state.input.img}
                                                                    onChange={this.handleChange}
                                                                />
                                                                <div className="text-danger">{this.state.errors.img}</div>
                                                            </div>
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
