import React, { Component } from "react";
import DataServices from "services/index.js"

class ProductHome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    
    componentDidMount() {
        DataServices.getItems()
            .then((response) => {
                console.log(response.data)
                this.setState({ products: response.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="row center">
                {
                    this.state.products.map(
                        product =>
                            <div key={product.id} className="card">
                                <div className="hover01">
                                <a href={`/product/${product.id}`}>
                                    <figure><img
                                        className="medium"
                                        src={product.img}
                                        alt={product.title}
                                    /></figure>
                                </a>
                                </div>
                                
                                <div className="card-body">
                                    <a href={`/product/${product.id}`}>
                                        <p className="game-name" >{product.title}</p>
                                    </a>
                                    {/* <Rating rating={product.rating}
                                        numReviews={product.numReviews}></Rating> */}
                                    <div className="price">${product.price}</div>
                                </div>
                            </div>
                    )
                }
            </div>
        )
    }
}

export default ProductHome