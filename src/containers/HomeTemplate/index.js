
import React, { Component } from 'react'
import Navbar from 'components/navbar';
import './homeTemplate.css';
import ProductComponent from 'components/product';
import SearchBar from 'components/search';


export default class HomeTemplate extends Component {
  render() {
      return (
            <div className="grid-container">
            <header className="row">
              <div>
                <a className="brand" href="/">Need A Team Name Gaming </a>
              </div>
              <div>
                <a className="register" href="Register.html">Register</a>
                <a className="signin" href="signin.html">Login</a>
              </div>
            </header>
            <main>
              <div>
              <Navbar></Navbar>
              <SearchBar></SearchBar>
                {/* Product component */}
                <ProductComponent></ProductComponent>
              </div>
            </main>
            <footer className="row center">All right reserved</footer>
          </div>
        )
    }
}