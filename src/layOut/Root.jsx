import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/NavBar/NavBar';
import Header from '../Pages/Header/Header';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar></NavBar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Root;