import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./style.css";

export default class ButtonSeeMore extends Component {
    render() {
        return (
            <div className="see_more text-center p-4">
                <button className="btn btn-success see_more_button pt-3 pb-3 pl-5 pr-5 rounded">
                    <NavLink exact activeClassName="active" className="see_more" to="/list-event">See More</NavLink>
                </button>
            </div>
        )
    }
}
