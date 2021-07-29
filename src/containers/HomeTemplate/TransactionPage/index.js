import TransactionProduct from 'components/Transaction';
import React from 'react'
import data from 'productData.js'

import './transactionPage.css';

export default function TransactionPage() {

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
      </div>
      <footer className="row center">All right reserved</footer>
    </div>
  )
}