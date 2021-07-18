import React, { PureComponent } from 'react'
import './homeTemplate.css';
import data from './data.js';

export default class PageNotFound extends PureComponent {
    render() {
        return (
            <div className="grid-container">
            <header className="row">
              <div>
                <a className="brand" href="index.html">Need A Team Name Gaming </a>
              </div>
              <div>
                <a className="cart" href="cart.html">Cart</a>
                <a className="signin" href="signin.html">Sign In</a>
              </div>
            </header>
      
            <main>
              <div>
      
                <div className="row center">
                  {
                    data.products.map(product => (
                      <div  className="card">
                    <a href="product.html">
      
                      <img className="medium" src="https://upload.wikimedia.org/wikipedia/vi/5/52/Assassin%27s_Creed_III.jpg" alt="product" />
                    </a>
                    <div className="card-body">
                      <a href="product.html">
                        <h2 className= "product-name">Assasin's creed III</h2>
                      </a>
                      <div className="rating">
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                      </div>
                      <div className="price">$120</div>
                    </div>
                  </div>
                    ))
                  }
      
      
                </div>
              </div>
            </main>
            <footer className="row center">All right reserved</footer>
          </div>
        )
    }
}