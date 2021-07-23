import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
  } from './navbarElements';


export default function Navbar() {
    
    return (

        <div className="Navbar">
             <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/account' activeStyle>
            Account
          </NavLink>
          <NavLink to='/cart' activeStyle>
            Cart
          </NavLink>
          <NavLink to='/transaction' activeStyle>
            Transaction
          </NavLink>
          <NavLink to='/logout' activeStyle>
            Logout
          </NavLink>
          
          
        </NavMenu>
        
      </Nav>
        </div>

    )
}