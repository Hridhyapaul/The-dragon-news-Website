import React from 'react';
import { useContext } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaExclamationCircle} from "react-icons/fa";
import { useState } from 'react';

const Login = () => {
    const { login, setUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/category/0'

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        login(email, password)
            .then(result => {
                const loginUser = result.user;
                form.reset();
                navigate(from, {replace: true});
                setError('')
                console.log(loginUser);
            })
            .catch(error => {
                if (error) {
                    setError(error.message)
                    console.log(error.message)
                }
            })
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
                {error && <p className='d-flex align-items-center mt-2 gap-2'><FaExclamationCircle className='text-danger'></FaExclamationCircle> <span className='text-danger'>{error}</span></p>}

                <p className='text-center'>New user? <Link className='text-decoration-none text-black' to="/register">Create an Account</Link></p>

            </div>
        </Container>
    );
};

export default Login;