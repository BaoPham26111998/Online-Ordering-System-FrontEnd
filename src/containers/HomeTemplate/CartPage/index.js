import React from 'react'
import NavbarHome from 'components/NavbarHome';
import DataServices from 'services/index.js';

import './cartPage.css';
import { Component } from 'react';

export default class CartPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: 302,  
      products: [],
      cartId: 0,
    }
  }
componentDidMount(){
    DataServices.getAllOrers()
  .then(res => {
    // console.log(res.data)
    this.setState({ products: res.data });
  })
  .catch(err => console.log(err));
}

deleteCart = e => {
  const orederId = e.target.value
  DataServices.deleteOrderById(orederId)
  .then(res => {
    console.log(res.data)
    this.componentDidMount();
  })
  .catch(err => console.log(err));
}

  render(){
    const products = this.state.products
    const user = (products.filter((u) => u.user.id === 302))
    const userCartProducts = (user.filter((i) => i.status === "Outstanding"))
    // console.log(userCartProducts.length)
    console.log(userCartProducts.map((i) => i.item))

  return (
    <div className="grid-container">
      <NavbarHome user={this.props.user} setUser={this.props.setUser} />
      <main>
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

                {userCartProducts.map(product => (
                 <tr key = {product.id}>
             <td>
                 {product.item.id}
             </td>
             <td>
                 <a href={`/product/${product.id}`}>
                     <img
                         className="cartImage"
                         src={product.item.img}
                         alt={product.item.title}
                     />
                 </a>
 
             </td>
             <td>
                 <a href={`/product/${product.item.id}`}>{product.item.title}</a>
 
             </td>
             <td>
                 {product.item.price}$
             </td>
             <td>
                 <button className="purchaseCartBtn">Purchase</button>
                 <button 
                    className="deleteCartBtn"  
                    value = {product.id} 
                    onClick={this.deleteCart}>Delete</button>
             </td>
         </tr>
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