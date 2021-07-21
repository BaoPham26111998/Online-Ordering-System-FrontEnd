import React, { Component } from 'react'
import './homeTemplate.css';
import data from 'productData.js';

import axios from 'axios'

import NavbarHome from 'components/NavbarHome'

export default class HomeTemplate extends Component {
  state = {}

  componentDidMount() {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }

    axios.get('user', config).then(
      res => {
        console.log(res)

        this.setState({
          user: res.data
        })
      },
      err => {
        console.log(err)
      }
    )
  }

  render() {
    return (
      <div className="grid-container">
        <NavbarHome/>
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