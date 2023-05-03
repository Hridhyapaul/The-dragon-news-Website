import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Terms & Condition</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ea, culpa tempora saepe ut quasi, odit quia voluptatem dolores doloremque ipsum neque laboriosam dolorem maxime quisquam voluptates. Similique fugiat incidunt vitae soluta voluptatibus non, placeat dolore est iste id perferendis, asperiores error minus deserunt adipisci quia dolorem iusto quisquam sit! Quaerat, enim eveniet quibusdam fugiat suscipit voluptatem et placeat velit inventore dolorem explicabo eius ullam veritatis similique nulla soluta odio facilis labore dolorum quos sit voluptates! Maxime laudantium aliquam maiores nam esse voluptates molestias quasi tenetur! Amet eos, laboriosam architecto eius quisquam cum nesciunt itaque, fugiat ea aspernatur et.</p>

            <Link to="/register"> <Button variant="primary" size="sm">
                Back to Register
            </Button> </Link>
        </div> 
    );
};

export default Terms;