import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Movie extends Component {
    render() {
        const { movie } = this.props;
        return (
            <div className="card">
                <img className="card-img-top" src={movie.hinhAnh}></img>
                <div className="card-body">
                    <h4 className="card-title">{movie.tenPhim}</h4>
                    <p className="card-text">{movie.moTa}</p>
                    <Link className="btn btn-success" to={`/detail-event/${movie.maPhim}`}>Detail</Link>
                </div>
            </div>
        );
    };
};
