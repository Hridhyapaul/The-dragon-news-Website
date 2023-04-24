import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { HiOutlineCalendar } from "react-icons/hi";
import sports1 from '../../../assets/1.png'
import sports2 from '../../../assets/2.png'
import sports3 from '../../../assets/3.png'
import moment from 'moment';

const LeftSideBar = () => {
    return (
        <div>
            <Row xs={1} md={1} lg={1} className="g-4 mt-2">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={sports1} />
                        <Card.Body>
                            <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
                            <Card.Text>
                                <small className='d-flex align-items-center mt-2'>
                                    <p className='fw-semibold mb-0 me-3'>Sports</p>
                                    <HiOutlineCalendar className='me-2'></HiOutlineCalendar> <>{moment("Jan 4, 2022").format("ll")}</>
                                </small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={sports2} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='d-flex align-items-center mt-2'>
                                <p className='fw-semibold mb-0 me-3'>Sports</p>
                                <HiOutlineCalendar className='me-2'></HiOutlineCalendar> <>{moment("Jan 4, 2022").format("ll")}</>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={sports3} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='d-flex align-items-center mt-2'>
                                <p className='fw-semibold mb-0 me-3'>Sports</p>
                                <HiOutlineCalendar className='me-2'></HiOutlineCalendar> <>{moment("Jan 4, 2022").format("ll")}</>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LeftSideBar;