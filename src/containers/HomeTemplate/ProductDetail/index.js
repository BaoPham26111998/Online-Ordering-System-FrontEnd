import React, { Component } from 'react'
import './productDetail.css';
import ItemService from 'services/index'; 

export default class ProductDetail extends Component {
  constructor(props){
    super(props)

    this.state = {
      id: this.props.match.params.id,
      product: {}
    }
  }

  componentDidMount(){
    ItemService.getItemById(this.state.id).then(res => {
      this.setState({product: res.data});
    })
  }

  render(){
    return (
      <div className="grid-container">
        <header className="row top">
          <div>
            <a className="brand" href="/">Need A Team Name Gaming </a>
          </div>
          
        </header>
        
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
                <h1 className="game-name">{this.state.product.name}</h1>


                <div className="description-div">
                <h3  className="detail-description">Description: 
                <p className="detail-description">{this.state.product.description}</p></h3>
                </div>

                <h1 className="detail-price">Price : ${this.state.product.price}</h1>



                <div className="card card-body">
                  
                    
                      <div className="row">
                        <div><h1 className="detail-status">Status: </h1></div>
                        
                        <div>
                          {/* <h1>{this.state.product.status === 0 ? (
                            <span className="success">Available</span>
                          ) : (
                            <span className="danger">Unavailable</span>
                          )}</h1> */}
                          
                        </div>
                      </div>

                      <button className="addToCart">Add to cart</button>
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