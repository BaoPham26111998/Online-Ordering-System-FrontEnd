import CartProduct from 'components/CartProduct';
import React from 'react'
import data from 'productData.js'

import './cartPage.css';

export default function CartPage() {

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
              <h1 className="CartPage">My Cart</h1>
              <table className="cartTable">
                <tr>
                  <th>id</th>
                  <th>image</th>
                  <th>name</th>
                  <th>price</th>
                  <th>option</th>
                </tr>
                {/*CART Product component */}

                {
                  data.products.map(product => (
                    <CartProduct key={product._id} product={product}></CartProduct>
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