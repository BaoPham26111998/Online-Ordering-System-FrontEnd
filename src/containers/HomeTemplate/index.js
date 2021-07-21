
import React, { Component } from 'react'

import './homeTemplate.css';
import data from 'productData.js';
import Product from 'components/product.js';


export default class HomeTemplate extends Component {
    render() {
        return (
            <div className="grid-container">
            <header className="row">
              <div>
                <a className="brand" href="index.html">Need A Team Name Gaming </a>
              </div>
              <div>
                <a className="register" href="Register.html">Register</a>
                <a className="signin" href="signin.html">Login</a>
              </div>
            </header>
            <main>
              <div>
                {/* Product component */}
                <div className="row center">
                  {
                    data.products.map(product => (
                        <Product key={product._id} product = {product}></Product>
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