import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container style={{ width: '500px', backgroundColor: '#F1F5F9' }} className='rounded-2'>
            <div className='pt-3 pb-4 px-3 mt-5'>
                <h3 className='text-center mb-4'>Login your account</h3>
                <hr />
                <Form className='mt-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-semibold'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-semibold'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Link><Button variant="primary" type="submit" style={{ width: "100%" }}>
                        Login
                    </Button></Link>
                </Form>
            </div>
        </Container>
    );
};

export default Login;