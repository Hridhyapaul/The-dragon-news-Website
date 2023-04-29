import React from 'react';
import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordSuccess, setPasswordSuccess] = useState('')
    const [success, setSuccess] = useState('')
    const { user, createUser, setUser } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name)

        createUser(email, password)
            .then(result => {
                const registerUser = result.user
                form.reset()
                passwordInput.reset();
                setUser(registerUser);
                setSuccess('Congratulations! Your account has been created successfully.')
                console.log(registerUser);
            })
            .catch(error => {
                console.log(error.message)
            })
    };

    const handlePassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput)
        const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        const isContainsUppercase = /^(?=.*[A-Z]).*$/;

        if (passwordInput.length < 8) {
            setPasswordError("Password must be 8 characters long");
            setPasswordSuccess('');
        }
        else if (!isContainsUppercase.test(passwordInput)) {
            setPasswordError("Password must have at least one Uppercase Character.");
        }
        else if (!isContainsSymbol.test(passwordInput)) {
            setPasswordError("Password must have at least one special character.");
        }
        else {
            setPasswordError('');
            setPasswordSuccess('Good');
        }
    }
    return (
        <Container style={{ width: '500px', backgroundColor: '#F1F5F9' }} className='rounded-2'>
            <div className='pt-3 pb-4 px-3 mt-5'>
                <h3 className='text-center mb-4'>Register your account</h3>
                <hr />
                <Form className='mt-4' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-semibold'>Your Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fw-semibold'>Email Address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='fw-semibold'>Password</Form.Label>
                        <Form.Control type="password" name="password" value={password} onChange={handlePassword} placeholder="Password" required />
                        {
                            password ?
                                passwordError ?
                                    <p className='d-flex align-items-center mt-2 gap-2'><FaExclamationCircle className='text-danger'></FaExclamationCircle> <span className='text-danger'>{passwordError}</span></p>
                                    :
                                    <p className='d-flex align-items-center mt-2 gap-2'><FaCheckCircle className='text-success'></FaCheckCircle> <span className='text-success'>{passwordSuccess}</span></p> : ""
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Term & Conditions" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control className='bg-primary text-white fw-semibold' type="submit" value="Register" />
                    </Form.Group>
                </Form>
                <p className='d-flex align-items-center mt-2 gap-2'><span className='text-success'>{success}</span></p>
                <p className='text-center'>Already have an account? <Link className='text-decoration-none text-black' to="/login">Log In</Link></p>
            </div>
        </Container>
    );
};

export default Register;