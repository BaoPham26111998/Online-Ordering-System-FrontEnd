import React, { Component } from 'react';
import './App.css';


import PageNotFound from './containers/PageNotFound';


import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import HomeTemplate from "./containers/HomeTemplate";
import ProductDetail from "./containers/HomeTemplate/ProductDetail";
import SearchPage from 'containers/HomeTemplate/SearchPage/index';
import AccountPage from 'containers/HomeTemplate/AccountPage/index';
import CartPage from 'containers/HomeTemplate/CartPage/index';
import TransactionPage from 'containers/HomeTemplate/TransactionPage/index';
// import Product from 'components/product';



class App extends Component {
  

  render() {
    return (
      <Switch Switch >
        <Route path = "/transaction" component={TransactionPage}></Route>
        <Route path = "/cart" component={CartPage}></Route>
        <Route path = "/account" component={AccountPage}></Route>
        <Route path = "/search" component={SearchPage}></Route>
        <Route path = "/product/:id" component={ProductDetail}></Route>
        <Route exact path="/" component={HomeTemplate} />
      
        
        <Route path="" component={PageNotFound} />
      </Switch >
    );
  };
};



const ConnectedComponent = connect(null, null)(App);

export default withRouter(ConnectedComponent);
