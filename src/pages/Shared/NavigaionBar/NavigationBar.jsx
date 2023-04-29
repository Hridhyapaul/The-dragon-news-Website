import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


const NavigationBar = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='text-decoration-none text-secondary mx-2' to="/">Home</Link>
                        <Link className='text-decoration-none text-secondary mx-2' to="#pricing">About</Link>
                        <Link className='text-decoration-none text-secondary mx-2' to="#career">Career</Link>
                    </Nav>
                    <Nav className='d-flex align-items-center gap-2'>
                        {
                            loading && <Spinner animation="border" variant="primary" />
                        }
                        {
                            user && <FaUserCircle style={{ fontSize: '30px' }}></FaUserCircle>
                        }

                        {user ?
                            <Button variant="dark" onClick={handleLogOut}>Logout</Button> :
                            <Link to="/login"><Button variant="dark">Login</Button></Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;