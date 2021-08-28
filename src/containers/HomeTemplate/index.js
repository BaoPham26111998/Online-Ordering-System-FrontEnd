import React, { Component } from 'react'
import './homeTemplate.css';

import NavbarHome from 'components/NavbarHome'
import ProductHome from 'components/ProductsHome';
import SearchBar from 'components/Search';

export default class HomeTemplate extends Component {

  render() {
    return (
      <div className="grid-container">
        <NavbarHome user={this.props.user} setUser={this.props.setUser} />
        <main>
          <div>
            {/* <Navbar></Navbar> */}
            <SearchBar></SearchBar>
            {/* Product component */}
            <ProductHome></ProductHome>
          </div>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    )
  }
}