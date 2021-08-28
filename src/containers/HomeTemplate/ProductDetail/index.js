import React, { Component } from 'react'
import './productDetail.css';
import DataServices from 'services/index.js';
import NavbarHome from 'components/NavbarHome';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemId: this.props.match.params.id,
      product: {},
      isLogin: localStorage.getItem('accessToken') != null,
      userRole: localStorage.getItem("username"),
      user: []
    }

    this.userInfo = this.getUserInfo.bind(this)
  }

  componentDidMount() {
    DataServices.getItemById(this.state.itemId)
      .then(res => {
        // console.log(res.data)
        this.setState({ product: res.data });
      })
      .catch(err => console.log(err));

    this.userInfo();
  }

  getUserInfo() {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://online-ordering-system-323618.as.r.appspot.com/user/name/" + localStorage.getItem("username"), requestOptions)
      .then(response => response.text())
      .then(result => {
        this.setState(() => ({
          user: JSON.parse(result)
        }))
      })
      .catch(error => console.log('error', error));
  }

  addToCart = e => {
    const data = {
      quantity: this.quantity,
      status: "Outstanding",
      item: {
        id: this.state.itemId
      },
      user: {
        id: 302
      }
    }
    console.log(this.quantity)
    DataServices.postOrder(data).then(res => {
      console.log(res)
      console.log(data)
      window.alert("Item have been add to your cart");

    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    const user = this.state.user
    console.log((user.id))

    // console.log(user)
    // const userId = (user.map((u) => u.id))
    // console.log(userId)


    if (this.state.userRole === null) {
      return (
        <div className="grid-container">
          <NavbarHome user={this.props.user} setUser={this.props.setUser} />

          <div>

            <div className="background">

              <div className="productDetail-container">
                <div className="row">
                  {/* PRODUCT IMAGE */}
                  <div className="col-2">
                    <img
                      className="detail-poster"
                      src={this.state.product.img}
                      alt={this.state.product.name}>
                    </img>
                  </div >

                  <div className="description-column">
                    <h1 className="game-name">{this.state.product.title}</h1>


                    <div className="description-div">
                      <h3 className="detail-description">Description:
                        <p className="detail-description">{this.state.product.description}</p></h3>
                    </div>

                    <h1 className="detail-price">Price : ${this.state.product.price}</h1>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="row center">All right reserved</footer>

        </div>

      )
    }
    else {
      return (
        <div className="grid-container">
          <NavbarHome user={this.props.user} setUser={this.props.setUser} />

          <div>

            <div className="background">

              <div className="productDetail-container">
                <div className="row">
                  {/* PRODUCT IMAGE */}
                  <div className="col-2">
                    <img
                      className="detail-poster"
                      src={this.state.product.img}
                      alt={this.state.product.name}>
                    </img>
                  </div >

                  <div className="description-column">
                    <h1 className="game-name">{this.state.product.title}</h1>


                    <div className="description-div">
                      <h3 className="detail-description">Description:
                        <p className="detail-description">{this.state.product.description}</p></h3>
                    </div>

                    <h1 className="detail-price">Price : ${this.state.product.price}</h1>

                    <div className="card card-body">
                      <button className="btn addToCart" id="btnthem"
                        data-toggle="modal"
                        data-target="#addToCartModal" >Add to cart</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="row center">All right reserved</footer>
          <div className="modal fade" id="addToCartModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <header className="productModal">
                  <h2 id="header-title">{this.state.product.title}</h2>
                </header>
                {/* Modal Header */}
                <div className="modal-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="Quantity"> Quantity</i>
                          </span>
                        </div>
                        <input
                          type="quantity"
                          name="quantity"
                          id="quantity"
                          className="form-control input-sm"
                          placeholder="Input your quantity (number only)"
                          onChange={e => this.quantity = e.target.value}
                        />
                      </div>
                      <span className="sp-mess" id="messImage" />
                    </div>

                  </form>
                </div>
                {/* Modal footer */}
                <div className="modal-footer" id="modal-footer">
                  <button id="btnThemNV" type="submit" className="btn btn-success button-spec" onClick={this.addToCart}>
                    Add Product
                  </button>
                  <button
                    id="btnDong"
                    type="submit"
                    className="btn btn-danger button-spec"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      )
    }

  }
}