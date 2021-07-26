import React, { Component } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

export default class SidebarAdmin extends Component {
    render() {
        return (
            <>
                <ProSidebar>
                    <SidebarHeader>
                        <div className="admin_logo">
                            <img src="" alt="Avatar"></img>
                            <p className="name_admin">Name Of User</p>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem>
                                <Link className="register" to="/admin" href="">Dashboard</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className="register" to="/admin/products" href="">Products</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link className="register" to="/admin/users" href="">Users</Link>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <div className="register_admin">
                            <Link className="register" to="/login" href="Register.html">Logout</Link>
                        </div>
                    </SidebarFooter>
                </ProSidebar>
            </>
        )
    }
}
