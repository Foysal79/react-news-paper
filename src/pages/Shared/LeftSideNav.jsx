import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories ,setCategories] = useState([]);
    
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    
    return (
        <div className='space-y-12'>
            <h2 className="text-4xl">all Categories</h2>
            {
                categories.map(category => <NavLink to={`/category/${category.id}`} className="block ml-4 text-xl font-semibold px-4" 
                key={category.id}>
                    {category.name}
                    </NavLink> )
            }
        </div>
    );
};

export default LeftSideNav;