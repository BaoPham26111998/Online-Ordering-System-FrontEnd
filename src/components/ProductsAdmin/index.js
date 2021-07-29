import React, { Component } from "react";
import DataServices from "services/index.js"
import './style.css'

export default class Product extends Component {

    // deleteProductById(productId) {
    //     DataServices.deleteItemById(productId);

    //     alert("Product Deleted");
    // }

    render() {
        const { deleteProductById ,product } = this.props;
        return (
            <>
                <div className="ei98_95_17_19" />
                <img className="ei98_95_8_2" src={product.img} alt={product.title} />
                <span className="ei98_95_30_31">{product.title}</span>
                <span className="ei98_95_30_40">${product.price} </span>
                <span className="ei98_95_30_45 text-primary">In Stock: {product.inStock} | Sold: {product.soldQty} </span>
                <span className="ei98_95_30_41">{product.genre}</span>
                <button className="btn btn-danger button-spec button-del" onClick={deleteProductById.bind(this, product.id)}><i className="fa fa-trash"></i></button>
            </>
        )
    }
}

