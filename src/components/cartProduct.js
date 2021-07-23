import React from "react";


export default function CartProduct(props) {
    const {product} = props
    return (

        // <div key={product._id} className="card">
        //     <a href={`/product/${product._id}`}>
                // <img
                //     className="medium"
                //     src={product.image}
                //     alt={product.name}
                // />
        //     </a>
        //     <div className="card-body">
        //         <a href={`/product/${product._id}`}>
        //             <h2 className="game-name" >{product.name}</h2>
        //         </a>
        //         <div className="price">${product.price}</div>
        //     </div>
        // </div>
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