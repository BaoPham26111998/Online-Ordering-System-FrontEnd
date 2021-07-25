import React from "react";


export default function CartProduct(props) {
    const {product} = props
    return (
                <tr>
                    <td>
                        {product._id}
                    </td>
                    <td>
                        <a  href={`/product/${product._id}`}>
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
                    {product.price}$
                    </td>
                    <td>
                        <button className="purchaseCartBtn">Purchase</button>
                        <button className="deleteCartBtn">Delete</button>
                     </td>
                </tr>
            
        

    )
}