import React, { Component } from 'react';
import './App.css';

import PageNotFound from './containers/PageNotFound';

import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import { AdminProtectedRoute } from 'routes/protected.route';

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
import TransactionAdmin from 'containers/AdminTemplate/TransactionAdminPage';

class App extends Component {
  state = {}

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Switch Switch >

        {/* Home Template */}
        <Route exact path="/" component={() => <HomeTemplate/>} />
        <Route path="/transaction" component={TransactionPage}></Route>
        <Route path="/cart" component={CartPage}></Route>
        <Route path="/search" component={SearchPage}></Route>
        <Route path="/product/:id" component={ProductDetail}></Route>

        {/* Log In Page */}
        <Route path="/login" component={() => <LogIn/>} />

        {/* Register Page */}
        <Route path="/register" component={Register} />

        {/* User Profile Page */}
        <Route path="/account" component={AccountPage}/>

        {/* Admin Template */}
        <AdminProtectedRoute exact path="/admin" component={AdminTemplate} />
        <AdminProtectedRoute path="/admin/products" component={ProductAdmin} />
        <AdminProtectedRoute path="/admin/users" component={UserAccount} />
        <AdminProtectedRoute path="/admin/transactions" component={TransactionAdmin} />

        {/* <Route exact path="/admin" component={AdminTemplate} />
        <Route path="/admin/products" component={ProductAdmin} />
        <Route path="/admin/users" component={UserAccount} />
        <Route path="/admin/transactions" component={TransactionAdmin} /> */}

        {/* Forgot Password Page */}
        <Route path="/forgot" component={Forgot} />

        {/* Reset Password Page */}
        <Route path="/reset/:id" component={Reset} />

        {/* Page Not Found */}
        <Route path="" component={PageNotFound} />

      </Switch >
    );
  };
};

const ConnectedComponent = connect(null, null)(App);

export default withRouter(ConnectedComponent);
