import React, { Component } from 'react'
import './homeTemplate.css';
import data from 'productData.js';


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
                <div className="row center">
                  {
                    data.products.map(product => (
                        <div key={product._id} className="card">
                        <a href={`/product/${product._id}`}>
                          <img
                            className="medium"
                            src={product.image}
                            alt={product.name}
                          />
                        </a>
                        <div className="card-body">
                          <a href={`/product/${product._id}`}>
                            <h2 className="game-name" >{product.name}</h2>
                          </a>
                          <div className="rating">
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                          </div>
                          <div className="price">${product.price}</div>
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