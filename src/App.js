import React, { Component } from 'react';
import './App.css';

import PageNotFound from './containers/PageNotFound';

import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import HomeTemplate from "./containers/HomeTemplate";
import LogIn from "./containers/LogInPage";
import Register from "./containers/RegisterPage";
import Forgot from 'containers/ForgotPasswordPage';
import Reset from 'containers/ResetPassowordPage';
import ProductDetail from "./containers/HomeTemplate/ProductDetail";
import CartPage from "./containers/HomeTemplate/CartPage";
import AccountPage from "./containers/HomeTemplate/AccountPage";
import SearchPage from "./containers/HomeTemplate/SearchPage";
import TransactionPage from "./containers/HomeTemplate/TransactionPage";

import AdminTemplate from 'containers/AdminTemplate';
import UserAccount from 'containers/AdminTemplate/UserAccountPage';
import ProductAdmin from 'containers/AdminTemplate/ProductAdminPage';

import axios from 'axios'

class App extends Component {
  state = {}

  componentDidMount = () => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }

    axios.get('user', config).then(
      res => {
        console.log(res)

        this.setUser(res.data)
      },
      err => {
        console.log(err)
      }
    )
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <Switch Switch >

        <Route exact path="/" component={() => <HomeTemplate user={this.state.user} setUser={this.setUser} />} />

        <Route path="/transaction" component={TransactionPage}></Route>

        <Route path="/cart" component={CartPage}></Route>

        <Route path="/account" component={AccountPage}></Route>

        <Route path="/search" component={SearchPage}></Route>
        
        <Route path="/product/:id" component={ProductDetail}></Route>

        <Route path="/admin" component={AdminTemplate} />

        <Route path="/login" component={() => <LogIn ysetUser={this.setUser} />} />

        <Route path="/register" component={Register} />

        <Route path="/forgot" component={Forgot} />

        <Route path="/reset/:id" component={Reset} />

        <Route path="/admin/products" component={ProductAdmin} />

        <Route path="/admin/users" component={UserAccount} />

        <Route path="" component={PageNotFound} />

      </Switch >
    );
  };
};

const ConnectedComponent = connect(null, null)(App);

export default withRouter(ConnectedComponent);
