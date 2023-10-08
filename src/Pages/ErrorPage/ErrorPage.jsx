import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-4xl mt-60 text-center'>
            <h1 className="text-4xl mt-60 text-center">Can Not Fount Event</h1>
            <Link to='/'><button className='bg-black p-3 mt-4 rounded text-sm text-white '>Go Back to home</button></Link>
        </div>
    );
};

export default ErrorPage;