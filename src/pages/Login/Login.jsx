import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <Container style={{ width: '500px', backgroundColor: '#F1F5F9' }} className='rounded-2'>
            <div className='pt-3 pb-4 px-3 mt-5'>
                <h3 className='text-center mb-4'>Login your account</h3>
                <hr />
                <Form className='mt-4' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-semibold'>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-semibold'>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control className='bg-primary text-white fw-semibold' type="submit" value="Login" />
                    </Form.Group>
                </Form>
                <p className='text-center'>New user? <Link className='text-decoration-none text-black' to="/register">Create an Account</Link></p>
            </div>
        </Container>
    );
};

export default Login;