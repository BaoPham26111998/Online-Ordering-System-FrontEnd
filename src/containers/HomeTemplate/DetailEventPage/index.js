import React, { Component } from 'react';
import { actDetailEventApi } from "./modules/action";
import { connect } from "react-redux";
import Loader from "components/Loader";
import BookNav from 'components/BookNav';
import EventRoom from 'components/EventRoom';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import "./style.css";

class DetailEventPage extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchDetailEvent(id);
    };

    renderTable = () => {
        const { data } = this.props;
        if (data && data.lichChieu) {
            return data.lichChieu.map((item) => {
                return (
                    <tr key={item.maLichChieu}>
                        <td>{item.thongTinRap.tenCumRap}</td>
                        <td>{item.thongTinRap.tenRap}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                        <td><Link className="btn btn-success" to="/">Order</Link></td>
                    </tr>
                )
            })
        };
    };

    render() {
        const { loading, data } = this.props;
        if (loading) return <Loader />
        return (
            <div className="container-deta">
                <div className="container-top">
                    {/* <Row>
                        <Col xs="7"><h3 className='container-title'>{data && data.tenPhim}</h3></Col>
                    </Row> */}
                    <img alt='image event' className='img-event' src={data && data.hinhAnh}></img>
                    <br className='border-bottom'></br>
                </div>

                <BookNav name = {data && data.tenPhim}/>

                <br></br>
                
                <h1 className='container-desc'> About </h1>

                <EventRoom data={data} desc={data && data.moTa} host={data && data.tenRap} new={data && data}/>

                <div className='container-rear'>
                    <p>{data && data.moTa}</p>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.detailEventReducer.loading,
        data: state.detailEventReducer.data,
    };
};

const mapDisPatchToProps = (dispatch) => {
    return {
        fetchDetailEvent: (id) => {
            dispatch(actDetailEventApi(id));
        },
    };
};

export default connect(mapStateToProps, mapDisPatchToProps)(DetailEventPage);