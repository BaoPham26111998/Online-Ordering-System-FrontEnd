import React, { Component } from 'react'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link, Redirect } from 'react-router-dom';
import './style.css'

import { fakeAuth } from 'services/auth';

export default class SidebarAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged: localStorage.getItem('accessToken') != null
        }
    }

    logout = (e) => {
        fakeAuth.signout(() => {
            localStorage.removeItem("accessToken")
            localStorage.removeItem("username")
            this.setState({
                isLogged: false
            })
        })
    }

    render() {
        if(this.state.isLogged === false){
            return <Redirect to={'/login'} />
        }

        return (
            <>
                <ProSidebar>
                    <SidebarHeader>
                        <div className="admin_logo">
                            <p className="display-4">Welcome to Admin Template</p>
                            <Link className="text-white name_admin" to="">SCP GAMING</Link>
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
                            <MenuItem>
                                <Link className="register" to="/admin/transactions" href="">Transaction</Link>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <div className="logout-outside">
                            <button type="button" className="logout-button" onClick={this.logout.bind(this)}>
                                Logout
                            </button>
                        </div>
                    </SidebarFooter>
                </ProSidebar>
            </>
        )
    }
}
