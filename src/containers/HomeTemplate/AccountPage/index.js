import React from 'react'
import './accountPage.css';
import NavbarHome from 'components/NavbarHome';
import { Component } from 'react';

export default class AccountPage extends Component {
  render(){
  return (
    <div className="grid-container">
      <NavbarHome user={this.props.user} setUser={this.props.setUser} />

      <main>

        <div className="background">

          <div className="productDetail-container">

            <div className="row">
              {/* User image */}
              <div className="col-2">
                <img
                  className="user-image"
                  src={"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"}
                  alt={"BaoPham123"}>
                </img>


              </div >


              <div className="userInfo-column">

                <h1 className="user">Profile information</h1>

                <div className="description-div">
                  <h2 className="user">User name: BaoPham123</h2>
                  <h2 className="user">User email: baopham26111998@gmail.com</h2>
                  <h2 className="user">Password: *********xyz</h2>
                  <div className="account-link">
                    <div className="GameFilterMain">

                      <div className="user-features">

                        <button className="btn-user-features" href="/cart"><h3>change username</h3></button >
                        <button className="btn-user-features" href="/transaction"><h3>change email</h3></button >
                        <button className="btn-user-features" href=""><h3>reset password</h3></button >
                        <button className="btn-user-features" href=""><h3>logout</h3></button >
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