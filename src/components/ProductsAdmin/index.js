import React, { Component } from "react";
import './style.css'

export default class Product extends Component {
    render() {
        const { deleteProductById, product } = this.props;
        var image, title, price, inStock, soldQty, genre, id;

        var data_target ;

        if (product.length !== 1) {
            image = product.img
            title = product.title
            price = product.price
            inStock = product.inStock
            soldQty = product.soldQty
            genre = product.genre
            id = product.id
            data_target = "#modalUpdate" + product.id
        }

        if (product.length === 1) {
            image = product[0].img
            title = product[0].title
            price = product[0].price
            inStock = product[0].inStock
            soldQty = product[0].soldQty
            genre = product[0].genre
            id = product[0].id
            data_target = "#modalUpdate" + product[0].id
        }

        return (
            <>
                <div className="ei98_95_17_19" />
                <img className="ei98_95_8_2" src={image} alt={title} />
                <span className="ei98_95_30_31">{title}</span>
                <span className="ei98_95_30_40">${price} </span>
                <span className="ei98_95_30_45 text-primary">In Stock: {inStock} | Sold: {soldQty} </span>
                <span className="ei98_95_30_41">{genre}</span>
                <button className="btn btn-danger button-spec button-del text-white" onClick={deleteProductById.bind(this, id)}><i className="fa fa-trash"></i></button>
                <button className="btn btn-success button-spec button-upd text-white" id="btnThem" data-toggle="modal" data-target={data_target} ><i className="fa fa-edit" ></i></button>
            </>
        )
    }
}

