import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { HiOutlineCalendar } from "react-icons/hi";
import Insight1 from '../../../assets/editorsInsight1.png'
import Insight2 from '../../../assets/editorsInsight2.png'
import Insight3 from '../../../assets/editorsInsight3.png'
import moment from 'moment';

const EditorsInsight = () => {
    return (
        <div className='mt-4'>
            <div>
                <h3>Editors Insight</h3>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4 mt-2">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={Insight1} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='d-flex align-items-center mt-2'>
                                <HiOutlineCalendar className='me-2'></HiOutlineCalendar> <>{moment("Jan 4, 2022").format("ll")}</>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={Insight2} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='d-flex align-items-center mt-2'>
                                <HiOutlineCalendar className='me-2'></HiOutlineCalendar> <>{moment("Jan 4, 2022").format("ll")}</>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={Insight3} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text className='d-flex align-items-center mt-2'>
                                <HiOutlineCalendar className='me-2'></HiOutlineCalendar> <>{moment("Jan 4, 2022").format("ll")}</>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default EditorsInsight;