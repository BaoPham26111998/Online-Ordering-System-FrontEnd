import React, { Component } from 'react'
import './productDetail.css';
import DataServices from 'services/index.js';
import NavbarHome from 'components/NavbarHome';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemId: this.props.match.params.id,
      userId: 302,
      product: {}
    }
  }

  componentDidMount() {
    DataServices.getItemById(this.state.itemId)
      .then(res => {
        console.log(res.data)
        this.setState({ product: res.data });
      })
      .catch(err => console.log(err));
  }

  addToCart= e => {
    const data = {
      quantity: 2,
      status: "Outstanding",
      item: {
      id: this.state.itemId
    },
      user: {
        id: 302
    }
    }
    DataServices.postOrder(data).then(res => {
        console.log(res)
        console.log(data)
        
    }).catch(err => {
        console.log(err);
    })
}

  render() {
    return (
      <div className="grid-container">
        <NavbarHome user={this.props.user} setUser={this.props.setUser} />

        <div>

          <div className="background">

            <div className="productDetail-container">
              <div className="row">
                {/* PRODUCT IMAGE */}
                <div className="col-2">
                  <img
                    className="detail-poster"
                    src={this.state.product.img}
                    alt={this.state.product.name}>
                  </img>
                </div >

                <div className="description-column">
                  <h1 className="game-name">{this.state.product.title}</h1>


                  <div className="description-div">
                    <h3 className="detail-description">Description:
                      <p className="detail-description">{this.state.product.description}</p></h3>
                  </div>

                  <h1 className="detail-price">Price : ${this.state.product.price}</h1>
                  <div className="card card-body">
                    <div className="row">
                      <div><h1 className="detail-status">Status: </h1></div>
                      
                    </div>
                    <button className="addToCart"  onClick = {this.addToCart}  >Add to cart</button>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

        <footer className="row center">All right reserved</footer>
      </div>
    )
  }
}