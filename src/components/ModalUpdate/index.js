import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faImage, faMoneyBillAlt } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index';

export default class ModalUpdate extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.state = {
            input: {
                title_update: this.props.updateProduct.title,
                price_update: this.props.updateProduct.price,
                instock_update: this.props.updateProduct.inStock,
                description_update: this.props.updateProduct.description,
                genre_update: this.props.updateProduct.genre,
                soldQty_update: this.props.updateProduct.soldQty,
                img_update: this.props.updateProduct.img
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

    //Update Product By ID
    updateProductById(product_id) {
        if (this.validate()) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "title": this.state.input.title_update,
                "price": this.state.input.price_update,
                "inStock": this.state.input.instock_update,
                "description": this.state.input.description_update,
                "genre": this.state.input.genre_update,
                "soldQty": this.state.input.soldQty_update,
                "img": this.state.input.img_update
            });

            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("http://localhost:8080/items/" + product_id, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            alert("Product Modified")

            this.props.parentCallBack();
        }
    }

    //Validation
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["title_update"]) {
            isValid = false;
            errors["title_update"] = "Please enter your product title.";
        }

        if (!input["price_update"]) {
            isValid = false;
            errors["price_update"] = "Please enter your product price.";
        }

        if (!input["instock_update"]) {
            isValid = false;
            errors["instock_update"] = "Please enter your product instock.";
        }

        if (!input["description_update"]) {
            isValid = false;
            errors["description_update"] = "Please enter your product description.";
        }

        if (!input["genre_update"]) {
            isValid = false;
            errors["genre_update"] = "Please enter your product genre.";
        }

        if (!input["soldQty_update"]) {
            isValid = false;
            errors["soldQty_update"] = "Please enter your product sold quantity.";
        }

        if (!input["img_update"]) {
            isValid = false;
            errors["img_update"] = "Please enter your image URL.";
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        const { updateProduct } = this.props;

        //Font Awesome Icon
        const image = <FontAwesomeIcon icon={faImage} />
        const price = <FontAwesomeIcon icon={faDollarSign} />
        const soldQty = <FontAwesomeIcon icon={faMoneyBillAlt} />

        var id_modal = "modalUpdate" + updateProduct.id;

        return (
            <div className="modal fade" id={id_modal} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <header className="head-form mb-0 bg-white">
                            <h2>Update Product</h2>
                        </header>
                        {/* Modal Header */}
                        <div className="modal-body">
                            <form className="form-modal" >
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-user" />
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            name="title_update"
                                            // id="title_update"
                                            className="form-control input-sm"
                                            placeholder="Title"
                                            // defaultValue={updateProduct.title}
                                            value={this.state.input.title_update}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="text-danger">{this.state.errors.title_update}</div>
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
                                            name="price_update"
                                            // id="price_update"
                                            className="form-control input-sm"
                                            placeholder="Price"
                                            // defaultValue={updateProduct.price}
                                            value={this.state.input.price_update}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="text-danger">{this.state.errors.price_update}</div>
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
                                            name="instock_update"
                                            // id="instock_update"
                                            className="form-control input-sm"
                                            placeholder="Instock"
                                            // defaultValue={updateProduct.inStock}
                                            value={this.state.input.instock_update}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="text-danger">{this.state.errors.instock_update}</div>
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
                                            name="description_update"
                                            // id="description_update"
                                            className="form-control input-sm"
                                            placeholder="Description"
                                            // defaultValue={updateProduct.description}
                                            value={this.state.input.description_update}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="text-danger">{this.state.errors.description_update}</div>
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
                                            name="genre_update"
                                            // id="genre_update"
                                            className="form-control input-sm"
                                            placeholder="Genre"
                                            // defaultValue={updateProduct.genre}
                                            value={this.state.input.genre_update}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="text-danger">{this.state.errors.genre_update}</div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                {soldQty}
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            name="soldQty_update"
                                            // id="soldQty_update"
                                            className="form-control input-sm"
                                            placeholder="Sold Quantity"
                                            // defaultValue={updateProduct.soldQty}
                                            value={this.state.input.soldQty_update}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="text-danger">{this.state.errors.soldQty_update}</div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                {image}
                                            </span>
                                        </div>
                                        <input
                                            type="text"
                                            name="img_update"
                                            // id="img_update"
                                            className="form-control input-sm"
                                            placeholder="Image"
                                            // defaultValue={updateProduct.img}
                                            value={this.state.input.img_update}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="text-danger">{this.state.errors.img_update}</div>
                                </div>
                            </form>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer" id="modal-footer">
                            <button type="submit" className="btn btn-success button-spec" onClick={() => this.updateProductById(updateProduct.id)}>
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
