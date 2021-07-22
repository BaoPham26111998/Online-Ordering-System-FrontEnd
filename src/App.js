import React, { Component } from 'react';
import './App.css';


import PageNotFound from './containers/PageNotFound';


import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import HomeTemplate from "./containers/HomeTemplate";
import ProductDetail from "./containers/HomeTemplate/ProductDetail";
import SearchPage from 'containers/HomeTemplate/SearchPage/index';
// import Product from 'components/product';



class App extends Component {
  

  render() {
    return (
      <Switch Switch >

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
