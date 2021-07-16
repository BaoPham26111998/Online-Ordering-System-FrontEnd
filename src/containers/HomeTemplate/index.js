import React from 'react';
import { Route } from "react-router-dom";
import Header from "components/Header";
import Footer from 'components/Footer/index';

function LayoutHome(props) {
    return (
        <div className="carousel">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default function HomeTemplate({ Component, ...props }) {
    // const { exact, path, Component } = props;
    return (
        <Route
            {...props}
            render={(propsComponent) => (
                <LayoutHome>
                    <Component {...propsComponent} />
                </LayoutHome>
            )}
        />
    );
};


