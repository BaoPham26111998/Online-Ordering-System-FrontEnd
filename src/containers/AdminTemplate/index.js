import SidebarAdmin from 'components/SidebarAdmin';
import React, { Component } from 'react'
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import "./style.css";

export default class AdminTemplate extends Component {
    render() {
        return (
            <>
                <SidebarAdmin/>
            </>
        )
    }
}
