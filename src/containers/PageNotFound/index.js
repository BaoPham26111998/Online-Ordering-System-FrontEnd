import React, { PureComponent } from 'react'
import Header from "components/Header";
import Footer from "components/Footer";

export default class PageNotFound extends PureComponent {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <h3>Page Not Found</h3>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}