import React, { Component } from 'react'
import DataServices from 'services/index.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faImage, faMoneyBillAlt } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index';

export default class ModalUpdate extends Component {
    handleSubmit = (product_id, e) => {
        const data = {
            title: this.title,
            price: this.price,
            inStock: this.inStock,
            description: this.description,
            genre: this.genre,
            soldQty: this.soldQty,
            img: this.img
        }

        DataServices.updateItemById(product_id, data).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err);
        })

        alert("Product Modified");

        window.location.reload(false);
    }

    updateProductById(product_id) {
        this.handleSubmit(product_id);
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
                            <form className="form-modal" onSubmit={() => this.handleSubmit} >
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
                                            className="form-control input-sm"
                                            placeholder="Title"
                                            defaultValue={updateProduct.title}
                                            onChange={e => this.title = e.target.value}
                                        />
                                    </div>
                                    <span className="sp-mess" />
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
                                            className="form-control input-sm"
                                            placeholder="Price"
                                            defaultValue={updateProduct.price}
                                            onChange={e => this.price = e.target.value}
                                        />
                                    </div>
                                    <span className="sp-mess" />
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
                                            className="form-control input-sm"
                                            placeholder="Instock"
                                            defaultValue={updateProduct.inStock}
                                            onChange={e => this.inStock = e.target.value}
                                        />
                                    </div>
                                    <span className="sp-mess" />
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
                                            className="form-control input-sm"
                                            placeholder="Description"
                                            onChange={e => this.description = e.target.value}
                                            defaultValue={updateProduct.description}
                                        />
                                    </div>
                                    <span className="sp-mess" />
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
                                            className="form-control input-sm"
                                            placeholder="Genre"
                                            onChange={e => this.genre = e.target.value}
                                            defaultValue={updateProduct.genre}
                                        />
                                    </div>
                                    <span className="sp-mess" />
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
                                            className="form-control input-sm"
                                            placeholder="Sold Quantity"
                                            onChange={e => this.soldQty = e.target.value}
                                            defaultValue={updateProduct.soldQty}
                                        />
                                    </div>
                                    <span className="sp-mess" />
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
                                            className="form-control input-sm"
                                            placeholder="Image"
                                            onChange={e => this.img = e.target.value}
                                            defaultValue={updateProduct.img}
                                        />
                                    </div>
                                    <span className="sp-mess" />
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
