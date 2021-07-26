import React from "react";
import ItemService from "services/index.js"

class ProductDetailComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        ItemService.getItemById()
        .then((response)=>{
            console.log(response.data)
            this.setState({products : response.data})
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.products.map(
                        product =>
                            <div key={product.id} className="card">
                                <h1>{product.title}</h1>
                            </div>
                    )
                }
            </div>
        )
    }
}

export default ProductDetailComponent