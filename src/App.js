import React, { Component } from 'react';
import './App.css';

import PageNotFound from './containers/PageNotFound';

import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import HomeTemplate from "./containers/HomeTemplate";
import LogIn from "./containers/LogInPage";
import Register from "./containers/RegisterPage";
// import ProductDetail from "./containers/HomeTemplate/ProductDetail";

class App extends Component {

  render() {
    return (
      <Switch Switch >
        
        <Route exact path="/" component={HomeTemplate} />

        <Route path="/login" component={LogIn} />

        <Route path="/register" component={Register} />
        
        <Route path="" component={PageNotFound} />
      </Switch >
    );
  };
};

const ConnectedComponent = connect(null, null)(App);

export default withRouter(ConnectedComponent);
