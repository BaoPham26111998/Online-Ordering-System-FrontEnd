import ProductDetailComponent from 'components/productDetail';
import React, { Component } from 'react'
import './productDetail.css';

export default class ProductDetail extends Component {
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
              <ProductDetailComponent></ProductDetailComponent>
              
            </div>
          </div>
        </div>
  
        <footer className="row center">All right reserved</footer>
      </div>
    )
  }
  
}