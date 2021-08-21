import React, { Component } from "react";
import ModalUpdate from "components/ModalUpdate"
import './style.css'

export default class Product extends Component {
    // sendData = (event) => {
    //     this.props.parentCallback(this.props.product);
    //     event.preventDefault();
    // }

    render() {
        const { deleteProductById, product } = this.props;
        var data_target = "#modalUpdate" + product.id;
        return (
            <div className= "productAdmin">
                <div className="ei98_95_17_19" />
                <img className="ei98_95_8_2" src={product.img} alt={product.title} />
                <span className="ei98_95_30_31">{product.title}</span>
                <span className="ei98_95_30_40">${product.price} </span>
                <span className="ei98_95_30_45 text-primary">In Stock: {product.inStock} | Sold: {product.soldQty} </span>
                <span className="ei98_95_30_41">{product.genre}</span>
                <button className="btn btn-danger button-spec button-del" onClick={deleteProductById.bind(this, product.id)}><i className="fa fa-trash"></i></button>
                <button className="btn btn-success button-spec button-upd" id="btnThem" data-toggle="modal" data-target={data_target} ><i className="fa fa-edit" ></i></button>
            </div>
        )
    }


}

