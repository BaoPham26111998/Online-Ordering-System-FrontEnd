import React from "react";
import { Nav, Bars, NavBtn, NavBtnLink } from 'components/Navbar/navbarElements';

export default function SearchBar() {
    return (
        <div>
            <Nav className = "SearchBar">
                <Bars />
                <NavBtn>
                    <NavBtnLink to='/Search'>Advance Search</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>
    )
}