import React, { Component } from 'react';
import Movie from "./../../../components/Movie";
// import data from "./data.json"; (no need data.json, use axios to get data)
// import Axios from "axios"; (no need axios, use axios at action to get data)
import Loader from "./../../../components/Loader/index";
import * as action from "./modules/action";
import { connect } from "react-redux";
import SearchBar from "components/SearchBar";
// import { act } from 'react-dom/test-utils';

class ListEventPage extends Component {
    // No need state, use redux to make props
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         listMovie: [],
    //         loading: false,
    //     };
    // };



    componentDidMount() {
        this.props.fetchListMovie();
        // this.setState({
        //     loading: true,
        // });
        // this.props.listMovieRequest();
        // Axios({
        //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        //     method: "GET",
        // })
        //     .then((result) => {
        //         console.log(result.data);
        //         // this.setState({
        //         //     listMovie: result.data,
        //         //     loading: false,
        //         // });
        //         this.props.listMovieSuccess(result.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         this.props.listMovieFailed(err);
        //     })
    };

    renderHTML = () => {
        // const { listMovie } = this.state; (convert state to props)
        const { data } = this.props;
        console.log(data);
        if (data && data.length > 0) {
            return data.map((movie) => {
                return (
                    <div key={movie.maPhim} className="col-md-3" >
                        <Movie movie={movie} />
                    </div>
                );
            });
        };
    };

    render() {
        // const { loading } = this.state; (convert state to props)
        const { loading } = this.props;
        if (loading) return <p > <Loader /> </p>
        return (
            <div className="container" >
                <div className="row" >
                    <SearchBar/>
                    {this.renderHTML()}
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.listEventReducer.loading,
        data: state.listEventReducer.data,
    };
};

const mapDisPatchToProps = (dispatch) => {
    return {
        fetchListMovie: () => {
            dispatch(action.actListEventApi());
        },
    };
};

export default connect(mapStateToProps, mapDisPatchToProps)(ListEventPage);