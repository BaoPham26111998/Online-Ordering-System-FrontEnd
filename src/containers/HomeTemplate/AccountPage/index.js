import React from 'react'
import './accountPage.css';
import NavbarHome from 'components/NavbarHome';
import { Component } from 'react';
import { fakeAuth } from 'services/auth';
import { Link } from 'react-router-dom';

export default class AccountPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: localStorage.getItem('accessToken') != null,
      userRole: localStorage.getItem("username"),
      user: {}
    }
  }
  componentDidMount() {
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

  logout = (e) => {
    fakeAuth.signout(() => {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("username")
      this.setState({
        isLogin: false
      })
    })

    alert("Logout success")
  }

  render() {
    return (
      <div className="grid-container">
        <NavbarHome />

        <main>

          <div className="background">

            <div className="productDetail-container">

              <div className="row">
                {/* User image */}
                <div className="col-2">
                  <img
                    className="user-image"
                    src={"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"}
                    alt={this.state.user.id}>
                  </img>


                </div >


                <div className="userInfo-column">

                  <h1 className="user">Profile information</h1>

                  <div className="description-div">
                    <h2 className="user">User name: {this.state.user.username}</h2>
                    <h2 className="user">User email: {this.state.user.email}</h2>
                    {/* <h2 className="user">Password: {this.state.user.password}</h2> */}
                    <div className="account-link">
                      <div className="GameFilterMain">

                        <div className="user-features">

                          {/* <button className="btn-user-features" href="/cart"><h3>change username</h3></button >
                        <button className="btn-user-features" href="/transaction"><h3>change email</h3></button >
                        <button className="btn-user-features" href=""><h3>reset password</h3></button > */}
                          {/* <button className="btn-user-features" to="/" onClick={this.logout}><h3></h3></button > */}
                          <button className="btn-user-features">
                            <Link className="signin" to="/login" onClick={this.logout}>Logout</Link>
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
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