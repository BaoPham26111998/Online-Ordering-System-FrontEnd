import React from "react";
import DataService from "services/index.js"


class ProductComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        DataService.getItems().then((response) => {
            this.setState({ items: response.data })
        });
    }
    render() {
        return (
            <div className="row center">
                <h1>GAME</h1>
                {
                    this.state.items.map(
                        item =>
                            <div>{item.title}</div>
                    )
                }
            </div>
        )
    }
}

export default ProductComponent