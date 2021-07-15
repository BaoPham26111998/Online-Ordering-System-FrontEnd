import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import "./style.css";

export default class EventRoom extends Component {
    render() {
        const { desc, host } = this.props;
        return (
            <div>
                <Row className='container-desc '>
                    <Col xs="8">
                        <div className = "container-desc">
                            <p>{ desc }</p>
                        </div>
                    </Col>
                    <Col xs="4">
                        <div className = 'container-info'>
                            <h4>Creator</h4>
                            <p>Lorem</p>

                            <br></br>

                            <h4>Date and Time</h4>
                            <p>LoremDay/LoremMonth/LoremYear</p>
                            <br></br>

                            <h4>Location: {host}</h4>
                            <p>Lorem</p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
