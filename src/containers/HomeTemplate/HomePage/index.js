import React, { useEffect } from 'react';
import Loader from "components/Loader";
import Event from "components/Event";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Carousel from "components/Carousel";
import ButtonSeeMore from "components/ButtonSeeMore";
import EventSlider from "components/EventSlider";
import "./style.css";
import { connect } from 'react-redux';
import { actListEventApi } from '../ListEventPage/modules/action';

function HomePage(props) {

    // useEffect(() => {
    //     props.fetchListMovie();
    // }, [])

    const renderHTML = () => {
        // const { data, loading } = props;
        const { loading } = props;

        if (loading) return <Loader />

        // if (data && data.length > 0) {
        //     return data.map((movie) => {
        //         return (
        //             <div>
        //             </div>
        //         );
        //     });
        // };
        return (
            <div>
                <Carousel />
                <section className="popular_event">
                    <Container>
                        <div className="popular text-center bg-white mb-5">
                            <p className="h3">POPULAR EVENTS</p>
                        </div>
                        <EventSlider />
                    </Container>
                </section>
                <section className="more_event">
                    <Container>
                        <div className="popular text-center bg-white mb-5 mt-4">
                            <p className="h3">MORE EVENTS</p>
                        </div>
                        <Row className="ml-5">
                            <Event />
                            <Event />
                            <Event />                            
                            <Event />                            
                            <Event />                            
                            <Event />                            
                            <Event />                            
                            <Event />                            
                        </Row>
                        <ButtonSeeMore />
                    </Container>
                </section>
            </div>
        )
    };

    return (
        <div className="container" >
            <div className="row" >
                {renderHTML()}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.listEventReducer.loading,
        data: state.listEventReducer.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchListMovie: () => {
            dispatch(actListEventApi());
        },
    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default connect(null, null)(HomePage);
