import React from "react";
import ItemService from "services/index.js"


class ProductComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        ItemService.getItems()
        
        .then((response)=>{
            console.log(response.data)
            this.setState({products : response.data})
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
                                <a href={`/product/${product.id}`}>
                                    <img
                                        className="medium"
                                        src={product.img}
                                        alt={product.title}
                                    />
                                </a>
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

export default ProductComponent