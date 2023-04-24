import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg1.png';


const RightNav = () => {
    return (
        <div>
            <h3 className='mt-0'>Login with</h3>
            <div className='mt-3'>
                <Button className='w-100 mb-2 d-flex align-items-center justify-content-center gap-2' variant="outline-primary"><FaGoogle></FaGoogle><span>Login with Google</span></Button>
                <Button className='w-100 d-flex align-items-center justify-content-center gap-2' variant="outline-secondary"><FaGithub></FaGithub> <span>Login with Github</span></Button>
            </div>
            <div className='mt-4'>
                <h3>Find Us On</h3>
                <div className='mt-3'>
                    <ListGroup>
                        <ListGroup.Item className='d-flex align-items-center gap-2'><FaFacebookF></FaFacebookF> <span>Facebook</span></ListGroup.Item>
                        <ListGroup.Item className='d-flex align-items-center gap-2'><FaTwitter></FaTwitter> <span>Twitter</span></ListGroup.Item>
                        <ListGroup.Item className='d-flex align-items-center gap-2'><FaInstagram></FaInstagram> <span>Instagram</span></ListGroup.Item>
                        <ListGroup.Item className='d-flex align-items-center gap-2'><FaWhatsapp></FaWhatsapp> <span>Whatsapp</span></ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            <QZone></QZone>
            <div className='position-relative mt-4'>
                <div>
                    <img className='w-100' src={bg} alt="" />
                </div>
                <div className='position-absolute top-50 start-50 translate-middle text-center text-white'>
                    <h3>Create an Amazing Newspaper</h3>
                    <p className='mt-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='mt-3' variant="danger">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;