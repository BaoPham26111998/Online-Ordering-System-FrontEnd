import React from "react";

export default function TransactionProduct(props) {
    const { product } = props
    return (
        <tr>
            <td>
                {product._id}
            </td>
            <td>
                <a href={`/product/${product._id}`}>
                    <img
                        className="cartImage"
                        src={product.image}
                        alt={product.name}
                    />
                </a>

            </td>
            <td>
                <a href={`/product/${product._id}`}>{product.name}</a>

            </td>
            <td>
                {product.price}
            </td>
            <td>
                23-07-2021
            </td>

        </tr>
    )
}