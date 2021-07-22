import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './navbarElements';


export default function Navbar() {
    
    return (

        <div className="Navbar">
             <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams
          </NavLink>
          
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Search'>Advance Search</NavBtnLink>
        </NavBtn>
      </Nav>
        </div>

    )
}