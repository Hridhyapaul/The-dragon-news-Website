import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h3>All Categories</h3>
            <div className='mt-3'>
                {
                    categories.map(category => <p key={category.id} className='fw-semibold px-3 py-3 my-0 hoverable rounded-2'>
                        <Link to={`/category/${category.id}`} className='text-decoration-none text-color'>{category.name}</Link>
                    </p>)
                }
                
            </div>
        </div>
    );
};

export default LeftNav;