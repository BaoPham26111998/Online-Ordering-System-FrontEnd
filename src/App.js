import React, { Component } from 'react';
import './App.css';


import PageNotFound from './containers/PageNotFound';

import { routesHome } from "./routes";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import HomeTemplate from "./containers/HomeTemplate";



class App extends Component {
  showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    };
  };

  //   showLayoutAdmin = (routes) => {
  //     if (routes && routes.length > 0) {
  //       return routes.map((item, index) => {
  //         return (
  //           <AdminTemplate
  //             key={index}
  //             exact={item.exact}
  //             path={item.path}
  //             Component={item.component}
  //           />
  //         );
  //       });
  //     };
  //   };

  // componentDidMount() {
  //   this.props.fetchTryLogin(this.props.history);
  // };

  render() {
    return (
      <Switch Switch >
        {/* - Home Page - localhost:3000 - HomePage */}
        <Route exact path="/" component={HomeTemplate} />

        {/* - Page about - localhost:3000/about - AboutPage */}
        {/* <Route path="/about" component={AboutPage} /> */}

        {this.showLayoutHome(routesHome)}

        {/* {this.showLayoutAdmin(routesAdmin)} */}

        {/* Page Auth - Log In Page */}
        {/* <Route path="/log-in" component={LogInPage} /> */}

        {/* - Page Not Found - */}
        <Route path="" component={PageNotFound} />
      </Switch >
    );
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchTryLogin: (history) => {
//     //   dispatch(actTryLogin(history));
//     },
//   };
// };

const ConnectedComponent = connect(null, null)(App);

export default withRouter(ConnectedComponent);
