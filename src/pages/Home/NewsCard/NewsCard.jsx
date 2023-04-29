import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const NewsCard = ({ news }) => {
    const { _id, title, rating, image_url, details, author, total_view } = news
    const {user} = useContext(AuthContext);
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                    <Image style={{ height: '50px' }} src={author?.img} roundedCircle />
                    <div className='ps-2'>
                        <p className='mb-0'>{author?.name}</p>
                        <small><p className='mb-0'>{moment(author?.published_date).format('MMMM Do YYYY')}</p></small>
                    </div>
                </div>
                <div>
                    <FaRegBookmark style={{ height: '40px' }} className='me-3'></FaRegBookmark>
                    <FaShareAlt style={{ height: '50px' }}></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='mb-3'>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} className='mb-3' />
                <Card.Text>
                    {
                        details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link className='ms-3 text-decoration-none' to={`/news/${_id}`}><p className=' mt-2 mb-0 text-warning'>Read More</p></Link> </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='d-flex align-items-center flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        className='me-2'
                    >
                    </Rating>
                    <p className='mb-0'>{rating.number}</p>
                </div>
                <div>
                    <p className='d-flex align-items-center mb-0'><FaRegEye className='me-1'></FaRegEye> {total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;