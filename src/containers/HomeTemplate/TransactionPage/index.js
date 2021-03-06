import React from 'react'
import NavbarHome from 'components/NavbarHome';
import DataServices from 'services/index.js';

import './transactionPage.css';
import { Component } from 'react';

export default class TransactionPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      cartId: 0,
      isLogin: localStorage.getItem('accessToken') != null,
      userRole: localStorage.getItem("username"),
      user: {}
    }
  }
  componentDidMount() {
    DataServices.getAllOrers()
      .then(res => {
        // console.log(res.data)
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));


    // Get user info
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessToken'));
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://online-ordering-system-323618.as.r.appspot.com/user/name/" + localStorage.getItem('username'), requestOptions)
      .then(response => (
        response.text()
      ))
      .then(result => {
        console.log("result = " + result);
        this.setState({
          user: JSON.parse(result)
        })
      })
      .catch(error => (
        console.log('error', error)
      ));
  }

  deleteCart = e => {
    const orederId = e.target.value
    DataServices.deleteOrderById(orederId)
      .then(res => {
        console.log(res.data);
        this.componentDidMount();
        window.alert("Product have been remove from your cart");
      })
      .catch(err => console.log(err));
  }

  render() {
    const products = this.state.products
    const user = (products.filter((u) => u.user.id === this.state.user.id))
    const userCartProducts = (user.filter((i) => i.status === "Paid"))
    // console.log(userCartProducts.length)
    console.log(userCartProducts.map((i) => i.item))


    return (
      <div className="grid-container">
        <NavbarHome user={this.props.user} setUser={this.props.setUser} />
        <main>
          <div className="background">

            <div className="productDetail-container">
              <div className="cartTableContainer">
                <h1 className="CartPage">Transaction history</h1>
                <div className="table-container">
                  <table className="cartTable">
                    <tr>
                      <th className="cart-table-th">Id</th>
                      <th className="cart-table-th">Image</th>
                      <th className="cart-table-th">Name</th>
                      <th className="cart-table-th">Quantity</th>
                      <th className="cart-table-th">Total price</th>
                      <th className="cart-table-th">Purchase day</th>
                    </tr>
                    {/*CART Product component */}

                    {userCartProducts.map(product => (
                      <tr key={product.item.id}>
                        <td className="cart-table-td">
                          {product.item.id}
                        </td>
                        <td className="cart-table-td">
                          <div className="hover02">
                            <a href={`/product/${product.item.id}`}>
                              <figure><img
                                className="cartImage"
                                src={product.item.img}
                                alt={product.item.title}
                              /></figure>
                            </a>
                          </div>

                        </td>
                        <td className="cart-table-td">
                          <a href={`/product/${product.item.id}`}>{product.item.title}</a>

                        </td>
                        <td className="cart-table-td">{product.quantity}</td>
                        <td className="cart-table-td">
                          {product.total}$
                        </td>
                        <td className="cart-table-td">{product.purchaseTime}</td>
                      </tr>
                    ))
                    }
                  </table>

                </div>

              </div>
            </div>
          </div>
        </main>

        <footer className="row center">All right reserved</footer>
      </div>
    )
  }
}