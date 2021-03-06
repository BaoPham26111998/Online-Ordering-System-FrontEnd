import React from "react";
import { Nav, NavLink, Bars, NavMenu } from './navbarElements';

export default function Navbar() {
    return (
        <div className="userNavbar">
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink className='userPageNavLink' to='/cart' >
                        Cart
                    </NavLink>
                    <NavLink className='userPageNavLink' to='/transaction' >
                        Transaction
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    )
}