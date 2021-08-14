import TransactionProduct from 'components/Transaction';
import React from 'react'
import data from 'productData.js'
import NavbarHome from 'components/NavbarHome';

import './transactionPage.css';
import { Component } from 'react';
export default class TransactionPage extends Component {

  render(){
  return (
    <div className="grid-container">
      <NavbarHome user={this.props.user} setUser={this.props.setUser} />
      <main>
        <div className="background">
          <div className="productDetail-container">
            <div className="cartTableContainer">
              <h1 className="TransactionPage">Transaction History</h1>
              <table className="cartTable">
                <tr>
                  <th>id</th>
                  <th>image</th>
                  <th>name</th>
                  <th>price</th>
                  <th>purchase day</th>

                </tr>
                {/*CART Product component */}

                {
                  data.products.map(product => (
                    <TransactionProduct key={product._id} product={product}></TransactionProduct>
                  ))
                }
              </table>
            </div>
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
  )
}
}