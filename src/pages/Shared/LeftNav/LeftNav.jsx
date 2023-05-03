import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css';
import LeftSideBar from '../../Home/LeftSideBar/LeftSideBar';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-hridhyapaul.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h3 className='mt-0'>All Categories</h3>
            <div className='mt-3'>
                {
                    categories.map(category =>
                        <Link key={category.id} to={`/category/${category.id}`} className=' text-decoration-none'><p className=' fw-semibold text-color px-3 py-3 my-0 hoverable rounded-2 w-100'>{category.name}</p></Link>
                    )
                }
            </div>
            <div>
                <LeftSideBar></LeftSideBar>
            </div>
        </div>
    );
};

export default LeftNav;