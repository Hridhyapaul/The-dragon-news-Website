import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary fs-5'>Journalism Without Fear or Favor</p>
                <p className='fs-5'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex align-items-center bg-secondary bg-opacity-10 py-3 ps-3 pe-5 gap-3 rounded-2'>
                <Button variant="danger">Latest</Button>
                <Marquee gradient={false} speed={60} pauseOnHover={true} className='fs-5 fw-semibold'>
                    Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain — as it happened !
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;