import SidebarAdmin from 'components/SidebarAdmin';
import React, { Component } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
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
